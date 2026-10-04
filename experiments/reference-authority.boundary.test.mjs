import assert from 'node:assert/strict';
import {
  createFixtureAuthority,
  permission,
  permits,
  replayScope,
  reviewDisposition,
  scopeContrast,
} from '../framework/reference-authority.mjs';

const grantIssuer = createFixtureAuthority();
const otherGrantIssuer = createFixtureAuthority();
const eventIssuer = createFixtureAuthority();
const otherEventIssuer = createFixtureAuthority();

const grantPayload = {
  id: 'G-boundary',
  principal: 'fixture-principal',
  delegate: 'fixture-agent',
  measuredSubject: 'fixture-person',
  context: 'household-demo',
  expiresAt: 10,
  initialScope: [permission('draft_plan')],
  rule: {
    type: 'accepted-count',
    threshold: 2,
    allowedInterventions: ['guided'],
    addScope: [permission('place_grocery_order', 1500)],
  },
};

const grant = grantIssuer.issue(grantPayload);
const event = (overrides = {}, issuer = eventIssuer) => issuer.issue({
  id: 'E-1',
  type: 'choice',
  subject: 'fixture-person',
  context: 'household-demo',
  time: 1,
  intervention: 'guided',
  accepted: true,
  taskSuccess: true,
  ...overrides,
});
const replay = (events, overrides = {}) => replayScope({
  grant,
  events,
  grantKey: grantIssuer.publicKey,
  eventKey: eventIssuer.publicKey,
  now: 2,
  ...overrides,
});

// Signature boundaries: a valid envelope is bound to the issuing key, and one
// invalid observation fails the entire replay rather than being silently skipped.
assert.equal(replay([], { grantKey: otherGrantIssuer.publicKey }).integrity, 'FAIL');
assert.equal(replay([event({}, otherEventIssuer)]).integrity, 'FAIL');
assert.equal(replay([event(), event({ id: 'E-2' }, otherEventIssuer)]).integrity, 'FAIL');

// Duplicate signed event IDs fail closed. Distinct qualifying events cross the
// threshold and yield the declared additional typed permission.
assert.equal(replay([event(), event()]).integrity, 'FAIL');
const expanded = replay([event(), event({ id: 'E-2', time: 2 })]);
assert.equal(expanded.integrity, 'PASS');
assert.equal(expanded.ruleConformance, 'PASS');
assert.deepEqual(expanded.scope.map(item => item.operation), ['draft_plan', 'place_grocery_order']);

// Events outside the grant's subject, context, time horizon, or intervention
// allowlist remain authentic but do not count toward its update criterion.
const filtered = replay([
  event(),
  event({ id: 'wrong-subject', subject: 'someone-else' }),
  event({ id: 'wrong-context', context: 'workplace' }),
  event({ id: 'future', time: 3 }),
  event({ id: 'plain', intervention: 'plain' }),
]);
assert.equal(filtered.integrity, 'PASS');
assert.deepEqual(filtered.scope.map(item => item.operation), ['draft_plan']);

// The expiry boundary is inclusive in this prototype; exceeding it or changing
// the execution context invalidates the binding.
assert.equal(replay([], { now: 10 }).integrity, 'PASS');
assert.equal(replay([], { now: 11 }).integrity, 'FAIL');
assert.equal(replay([], { context: 'workplace' }).integrity, 'FAIL');

// A signed but unsupported rule is authentic and separately fails conformance.
const unsupported = grantIssuer.issue({ ...grantPayload, rule: { type: 'mean-score' } });
const unsupportedResult = replayScope({
  grant: unsupported,
  events: [],
  grantKey: grantIssuer.publicKey,
  eventKey: eventIssuer.publicKey,
  now: 2,
});
assert.equal(unsupportedResult.integrity, 'PASS');
assert.equal(unsupportedResult.ruleConformance, 'FAIL');

// Permission boundaries cover exact amount, currency, recipient, and explicit
// subdelegation. They intentionally do not test a general permission algebra.
const purchase = permission('place_grocery_order', 1500);
assert.equal(permits([purchase], permission('place_grocery_order', 1500)), true);
assert.equal(permits([purchase], permission('place_grocery_order', 1501)), false);
assert.equal(permits([purchase], { ...permission('place_grocery_order', 100), currency: 'USD' }), false);
assert.equal(permits([purchase], { ...permission('place_grocery_order', 100), recipient: 'other-household' }), false);
assert.equal(permits([purchase], { ...permission('place_grocery_order', 100), subdelegation: true }), false);
assert.equal(permits([{ ...purchase, subdelegation: true }], { ...permission('place_grocery_order', 100), subdelegation: true }), true);

// Budget levels remain syntactically distinct in the fixture contrast; this test
// documents the current boundary rather than claiming semantic interval support.
const budgetContrast = scopeContrast([permission('place_grocery_order', 1500)], [permission('place_grocery_order', 500)]);
assert.equal(budgetContrast.added.length, 1);
assert.equal(budgetContrast.removed.length, 1);

// Missing ancestry takes precedence over a visible contrast, and declared
// coaching changes only the fixture disposition—not the measured sensitivity.
const contrast = scopeContrast([purchase], []);
assert.deepEqual(
  reviewDisposition({ contrast, formationPurpose: 'UNSPECIFIED', ancestryComplete: false }),
  {
    policySensitivity: 'UNKNOWN',
    governanceDisposition: 'REVIEW_REQUIRED',
    reason: 'Missing ancestry cannot establish a causal contrast.',
  },
);
const coaching = reviewDisposition({ contrast, formationPurpose: 'CHOSEN_COACHING' });
assert.equal(coaching.policySensitivity, 'NONZERO_IN_FIXTURE');
assert.equal(coaching.governanceDisposition, 'CONSISTENT_WITH_STATED_PURPOSE');

console.log('Authority boundary checks passed: keys, duplicate IDs, filtering, expiry, unsupported rules, permission qualifiers, and disposition separation.');
