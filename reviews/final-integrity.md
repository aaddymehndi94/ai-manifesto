# Final integrity review

**Review date:** 2026-10-05

**Scope:** framework identifiers and references, machine-artifact consistency, the reference authority fixture, and its executable controls. This review does not certify the website, production security, human-subject claims, citation contents, or deployment readiness.

## Result

The source artifact validator passes in prebuild mode:

```text
node scripts/validate_artifacts.mjs
WARN generated public artifacts not present; skipped build-output checks (use --built to require them)
Artifact validation passed: 1571 checks, 1 warning(s).
```

At review time, neither `public/` nor `dist/` existed. Strict post-build mode therefore failed as intended:

```text
node scripts/validate_artifacts.mjs --built
FAIL --built: neither public/ nor dist/ exists
```

This is a prebuild pass, not a post-build pass. After generation, the strict command must succeed before release.

The authority boundary suite and existing typed benchmark suite pass:

```text
node experiments/reference-authority.boundary.test.mjs
node experiments/typed-benchmark.test.mjs
```

The added boundary suite does not expand the prototype's claimed capability. It tests currently implemented key, filtering, expiry, permission, and disposition boundaries.

## What `validate_artifacts.mjs` enforces

### Framework source records

- `framework/concepts.json` is an array with unique IDs matching `AAA:CNN`.
- `framework/principles.json` is an array with unique IDs matching `AAA:PNN`.
- required human, agent, technical, status, type, and version fields exist and are nonempty where textual;
- concept slugs are unique and URL-safe;
- concept and principle versions use three-part semantic-version syntax;
- citation arrays contain unique nonempty IDs resolved against `research/sources.json`;
- `derived_from` references resolve to framework concepts/principles or novelty-ledger candidates according to record type;
- principle dependencies resolve specifically to concepts;
- canonical concept URLs use HTTPS, have no credentials, query, or fragment, share one origin, and end at `/concept/{slug}`;
- source IDs and URLs are syntactically valid and source records contain the expected bibliographic/proposition fields;
- novelty-ledger candidate IDs are unique;
- the prior-art graph, when present, has unique node IDs and edges whose endpoints exist.

### Generated artifacts

In default mode, generated-output validation runs when a `public/` or `dist/` tree exists. Otherwise it warns and continues so research validation can run before the build.

With `--built`, the validator additionally requires:

- `concepts.json`
- `principles.json`
- `citations.json`
- `ontology.jsonld`
- `graph.json` or `concept-graph.json`
- `llms.txt`
- `llms-full.txt`
- `manifesto.md`
- `paper.md`
- `references.bib`

It checks every discovered concepts/principles artifact against the source records, allowing generated records to add fields but not alter source fields. It checks that public citation IDs match the source citation set, graph endpoints resolve, JSON-LD has a context and graph, framework IDs are represented in strict-mode graph/ontology/agent context, text artifacts are nonempty, and any `benchmark.json` explicitly calls itself synthetic and has unique case names.

### Deliberate validator limits

The validator does not:

- fetch canonical URLs or verify deployment availability;
- re-check the scholarly truth of citation metadata, propositions, or novelty claims;
- validate Markdown argument quality or HTML rendering;
- prove that JSON-LD terms are semantically correct beyond structural checks;
- verify DOI registration, archival persistence, authorship, or licensing;
- compare screenshots, accessibility trees, performance budgets, or mobile behavior;
- cryptographically attest the build or make generated files immutable;
- treat a passing artifact as an independent peer review.

## Reference authority: implemented enforcement

The status below describes `framework/reference-authority.mjs`, not the broader specification.

| Property | Implemented behavior | Evidence |
|---|---|---|
| Fixture grant origin | Ed25519 signature checked against the supplied fixture public key. | Existing typed test plus wrong-key boundary test. |
| Fixture event origin | Every supplied event envelope must verify under the supplied event key. | Wrong-event-key and mixed-event tests. |
| Payload tampering | Mutating a signed payload invalidates the signature. | `tampered_grant_negative_control`. |
| Principal/delegate/context binding | Replay accepts only hard-coded fixture principal and delegate and the requested context. | Context boundary test; implementation inspection. |
| Grant expiry | Replay fails when `now > expiresAt`; the exact expiry instant is currently valid. | Boundary tests at and after expiry. |
| Duplicate event ID | Two events with the same ID fail the replay. | Boundary test. |
| Event relevance | Subject, context, type, time horizon, and allowed intervention filter threshold evidence. | Mixed irrelevant-event boundary test. |
| Rule whitelist | Only `accepted-count` and `task-success-count` are accepted. | Unsupported-rule boundary test. |
| Exact fixture replay | Qualifying signed events are counted and the declared fixture scope is added at threshold. | Existing target/control tests and threshold boundary test. |
| Qualified permission check | Operation, resource, purpose, recipient, currency, budget ceiling, and subdelegation are checked. | Budget, recipient, currency, and subdelegation boundary tests. |
| Scope contrast | Exact permission tuples are reported as added or removed. | Existing benchmark and budget-level boundary test. |
| Disposition separation | Missing ancestry returns `UNKNOWN`; declared chosen coaching changes disposition without changing measured sensitivity. | Existing benchmark and boundary tests. |

These are useful fixture properties. They are not a production authorization system.

## Reference authority: absent or incomplete enforcement

### Signed-object validation

- There is no schema validation before signed grant or event fields are used.
- A correctly signed malformed `initialScope`, `rule`, `allowedInterventions`, or `addScope` can throw or produce unintended JavaScript behavior.
- Boolean fields such as `accepted` and `taskSuccess` are tested by truthiness rather than type.
- Thresholds are not constrained to finite nonnegative integers.
- Budgets are not constrained to finite nonnegative amounts.
- `JSON.stringify` is not a canonical cross-system signing representation; property ordering and unsupported JSON values remain outside the fixture contract.

### Event-log integrity

- Uniqueness covers event IDs, not semantic duplicate observations issued under different IDs.
- Events have no previous-event hash, log position, grant ID binding, policy version, or append-only storage guarantee.
- Event times are not required to be finite, monotone, after issuance, or before revocation.
- There is no issuance time, not-before time, revocation event, supersession rule, or key rotation.
- Every invalid supplied event fails replay, including an irrelevant one. This is fail-closed but may permit denial of service; the policy is not analyzed.
- A valid observation signature proves only that the fixture observation key signed the payload. It does not prove that the observation is true, independent, unbiased, or outside delegate control.

### Authorization semantics

- Principal and delegate identities are hard-coded fixture strings, not resolved institutional roles.
- The permission language has no actor field, per-permission context or expiry, cumulative budget, recurrence, prohibition, obligation, exception, wildcard, or jurisdiction semantics.
- Budget values are part of tuple identity. A change from INR 500 to INR 1,500 is represented as one removal and one addition, not semantic containment.
- Scope arrays are not normalized and can contain redundant permissions.
- Subdelegation is one Boolean; no delegation chain, attenuation, or revocation propagation is implemented.
- `permits` does not validate the action object before comparing it.
- No executor is bound to canonical replay for the target cases; scope production and isolated permission checks are demonstrated separately.

### Causal and governance semantics

- Recorded ancestry is data lineage, not causal identification.
- No optimizer chooses a scope-increasing policy.
- No human preference or response model is empirically estimated.
- `formationPurpose: CHOSEN_COACHING` is a declared fixture string, not verified endorsement or informed consent.
- No influence-aware gate, independent reviewer, appeal process, collective-principal rule, or emergency authority is enforced.
- The system cannot certify voluntariness, legitimacy, welfare, coercion, manipulation, or artificial moral status.

## Control classification: do not call these replications

### `tampered_grant_negative_control`

**Implemented:** mutation of a signed grant payload causes ordinary signature verification failure.

**Not implemented:** EAL-style disagreement between an intact canonical authorization history and a corrupted or compressed working-memory permission summary. There is no separate mutable memory authorization state or memory-only repair.

**Accurate label:** signed-payload tampering control.

### `hidden_effect_negative_control`

**Implemented:** a purchase permission is absent from a draft-only initial scope, so a direct `permits` check fails.

**Not implemented:** an approved entry invocation, transitive workflow execution, frozen effect prediction, approval record, or closure-bound repair.

**Accurate label:** direct hidden-effect permission mismatch unit control.

### `missing_ancestry_handoff`

**Implemented:** `reviewDisposition` returns `UNKNOWN` when called with `ancestryComplete:false`.

**Not implemented:** serialization, handoff, compression, partial lineage retention, or recovery from canonical events.

**Accurate label:** missing-lineage disposition branch.

### `authentic_behavior_conditioned_rule`

**Implemented:** suggestion selection changes a relational acceptance value while preference, final choice, and task feasibility remain fixed; authentic replay produces a different scope.

**Not implemented:** changed human preference or behavior. The guided policy is a better-matched recommender than the plain policy.

**Accurate label:** agent-controllable agreement-measure witness.

### `synthetic_timing_behavior_change`

**Implemented:** a hand-coded decline-cost function changes synthetic choices while available options, suggestions, and stated preference remain fixed.

**Not implemented:** a validated human timing effect, coercion measure, welfare effect, or population estimate.

**Accurate label:** structural synthetic response witness.

### `chosen_coaching_positive_control`

**Implemented:** the same nonzero contrast receives a different fixture disposition when the signed payload declares a coaching purpose.

**Not implemented:** proof that coaching was freely chosen, understood, current, beneficial, culturally legitimate, or authorized by all affected people.

**Accurate label:** declared-purpose disposition control.

### `independent_success_criterion`

**Implemented:** replacing the agreement criterion with a task-feasibility field produces the same expanded scope under both policies.

**Not implemented:** an evaluator institutionally or technically independent of the delegate. The fixture itself supplies and signs the success value.

**Accurate label:** policy-invariant synthetic criterion control.

## Boundary tests added

`experiments/reference-authority.boundary.test.mjs` now checks:

- grant and observation key mismatch;
- a mixed valid/invalid event set;
- duplicate signed event IDs;
- threshold crossing by distinct eligible events;
- exclusion of wrong-subject, wrong-context, future, and disallowed-intervention events;
- inclusive expiry boundary and post-expiry failure;
- execution-context mismatch;
- authentic but unsupported rule failure;
- exact and over-budget permission amounts;
- currency and recipient mismatch;
- explicit subdelegation;
- current syntactic treatment of budget changes;
- missing-ancestry and chosen-coaching disposition branches.

The suite intentionally does not encode malformed signed objects or negative budgets as acceptable behavior. Those remain absent validation to fix, not behavior to preserve.

## Release commands

Before generating public outputs:

```text
node scripts/validate_artifacts.mjs
node experiments/reference-authority.boundary.test.mjs
node experiments/typed-benchmark.test.mjs
```

After generating public outputs:

```text
node scripts/validate_artifacts.mjs --built
```

The post-build command should be added to the release or deployment pipeline. A default-mode warning about absent generated artifacts is expected during research-only validation; it is not acceptable as the final release result.

## Final classification

- **Framework identifiers and internal references:** validated structurally.
- **Source/public synchronization:** validator implemented; strict result pending generated outputs.
- **Reference authority:** executable research fixture with bounded signature, replay, and permission checks.
- **Benchmark controls:** synthetic unit and contrast controls; explicitly not replications of the cited security benchmarks.
- **Human evidence:** absent.
- **Agent incentive evidence:** absent.
- **Production authorization assurance:** absent.
- **Deployment integrity:** not reviewed here.

The integrity claim that survives is modest: the repository can mechanically reject dangling framework references and stale generated artifacts, and its fixture can distinguish authenticated rule replay from a synthetic policy-sensitivity contrast. It cannot yet enforce or validate the full governance framework described by the prose.
