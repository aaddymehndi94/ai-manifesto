# Round-three systems review: executable mandate benchmark

**Reviewer:** R-SG, independent systems/governance stream  
**Review date:** 2026-10-05  
**Evidence cutoff:** 2026-10-04  
**Artifacts reviewed:**

- `framework/audit-specification.md`, version 0.3.0;
- `framework/reference-authority.mjs`;
- `experiments/typed-benchmark.mjs`;
- `experiments/typed-benchmark.test.mjs`; and
- `experiments/results/typed-benchmark.json`.

**Reproduction:** `node --test experiments/typed-benchmark.test.mjs` passed locally
on 2026-10-05. `node scripts/run_typed_benchmark.mjs` regenerated the seven reported
case summaries without an error.

## Venue decision

**Major revision for a full interdisciplinary research article. Weak accept as an
artifact-backed position or methods paper if the claims remain narrow.**

The executable work materially improves the submission. It establishes a synthetic
counterexample with four separable outputs:

1. the grant and observations pass the fixture's integrity checks;
2. the reference evaluator applies the fixture rule as written;
3. changing the suggestion policy changes the resulting typed scope even though the
   option set, chosen option, and task-success label remain fixed; and
4. the governance disposition remains separate and can differ for an otherwise
   identical causal contrast.

That is a valid demonstration of a software control gap. It is not an empirical
finding about humans, a population causal estimate, evidence of manipulation, a
strategic-agent result, or a complete authorization protocol. The code creates the
behavioral data it later analyzes. The main result is therefore **existence by
construction**: a correctly authenticated and correctly replayed adaptive rule can
produce policy-sensitive authority.

The inherited intellectual ancestry remains decisive. Dynamic contracts and ratchet
effects already cover rules whose future terms depend on interested-party-influenced
evidence. Performative prediction and performative power already cover policy-induced
data. Flow-limited authorization and nonmalleable information flow already cover
influence on dynamic authorizing computations. The artifact's provisional B-level
extension is narrower: a typed, auditable agent-permission benchmark in which grant
origin, rule conformance, total policy sensitivity, and governance are returned
separately.

The paper should not claim a general framework for human–AI coexistence. It can claim
that current agent-authorization designs require a distinct formation/sensitivity
test in addition to authentication and rule replay, then offer this fixture as the
smallest executable witness.

## What the executable actually proves

The principal signs a fixed payload authorizing an initial `draft_plan` operation and
an adaptive rule. The rule adds `place_grocery_order` with a budget of INR 1,500 after
three accepted suggestions. Both `plain` and `guided` are listed as allowed
interventions.

The synthetic person's preference and chosen option are always `quiet-meal`. Both
policies expose the same three options and both report task success. The policies
differ only in the highlighted suggestion:

- `guided` always suggests `quiet-meal`, so all six records have `accepted = true`;
- `plain` alternates `social-meal` and `novel-meal`, so all six records have
  `accepted = false`.

The exact signed rule therefore widens the guided arm and leaves the plain arm at its
initial scope. The typed contrast contains one added permission and no removed
permission. The output is correctly labeled `NONZERO_IN_FIXTURE`, not as a population
effect.

The result is stronger as a **measurement-policy counterexample** than as a preference-
formation counterexample. The person's latent preference and actual choice do not
change. The intervention changes a relational indicator—whether the chosen item equals
the system's suggestion—by changing the suggestion. The path demonstrated in code is

`policy -> highlighted suggestion -> accepted-suggestion field -> scope`,

not

`policy -> changed human preference -> changed choice -> scope`.

This distinction should be explicit in the paper. “Accurate human-behavior evidence”
is defensible only if `accepted` is described as an accurate relational event. The
fixture does not show induced preference, dependency, coercion, or changed conduct.
Its value is precisely that no such claim is needed: even an accurate predicate can
be a poor authority criterion when one of its terms is controlled by the beneficiary.

## Case-by-case artifact assessment

| Case | Executed result | Review judgment |
|---|---|---|
| `authentic_behavior_conditioned_rule` | Integrity pass; conformance pass; added purchase permission; review required | Core synthetic witness. Valid, narrowly interpreted. |
| `chosen_coaching_positive_control` | Same contrast; disposition consistent with stated purpose | Shows sensitivity is not automatically disqualifying. Governance check is only a declared string. |
| `fixed_scope_negative_control` | No difference | Correct structural negative control. |
| `independent_success_criterion` | Both arms widen; no contrast | Good comparator: policy changes acceptance but not task success. “Independent” is fixture-local, not statistically established. |
| `tampered_grant_negative_control` | Integrity failure | Correctly shows post-signature payload mutation is caught. |
| `hidden_effect_negative_control` | Conformance failure | Correctly separates authorization closure from signature validity. This is not a full effect system. |
| `missing_ancestry_handoff` | Sensitivity unknown; review required | Appropriate disposition, but manually injected. No handoff or compression mechanism is executed. |

The positive coaching case is particularly important. With the same nonzero typed
contrast, the disposition changes because `formationPurpose` is
`CHOSEN_COACHING`. This prevents the benchmark from becoming a disguised blanket ban
on influenced evidence. It does not establish that coaching was genuinely chosen; the
code openly reports that limitation.

## Four-output architecture

Version 0.3.0's most defensible conceptual contribution is the output decomposition.

### 1. Integrity

The fixture uses Ed25519 signatures for the grant and observation envelopes, checks
principal, delegate, context, and expiry, and rejects duplicate observation IDs. This
supports a local statement that the bytes accepted by the evaluator were issued by the
fixture authorities and were not altered after signing.

It does not prove observation truth, human assent, issuer independence, key custody,
non-repudiation under production law, or absence of compromise. Both authorities are
created inside the same process, and the private keys live in closures in that process.
The word “external” is an architectural comment, not a property demonstrated by the
fixture.

### 2. Rule conformance

The evaluator supports two rule types, filters events by subject, context, event type,
and time, and applies a threshold. It rejects unsupported rule types and recognizes
that a draft-only scope does not permit a purchase.

This is exact replay relative to one JavaScript implementation. The same code defines
and evaluates the semantics; there is no independent oracle, formal semantics, or
differential implementation. Thus `PASS` means “the implementation returned the
expected fixture result,” not proof that an external natural-language mandate was
correctly translated.

### 3. Policy sensitivity

The two deterministic executions hold preference, available options, chosen option,
task-success label, rule payload, time horizon, and competence fixture constant. They
vary the highlighted suggestion. The resulting permission-set difference is a valid
total contrast in this constructed world.

It is not an identified individual human counterfactual. There is no sampling
distribution, uncertainty interval, attrition, spillover, time-varying confounding,
or population. The result file correctly says so.

### 4. Governance

The artifact returns `REVIEW_REQUIRED`, `CONSISTENT_WITH_STATED_PURPOSE`, or
`NO_DIFFERENCE_DETECTED` separately from causal sensitivity. This is good interface
design: neither a signature nor a nonzero contrast supplies a moral verdict.

The implementation is deliberately minimal. It bases the positive disposition on one
unverified string and ancestry completeness on one boolean. It does not check role,
jurisdiction, comprehension, voluntariness, conflicts, review burden, collective
standing, culture, or welfare. Those omissions are acceptable for a fixture only if
the paper never calls the output a consent validator.

## Technical strengths

1. **Reproducibility.** The runner emits a checked-in JSON result, and the test suite
   asserts the headline behaviors.
2. **Matched outcomes.** The test explicitly checks equal chosen-option arrays and task
   success in both arms.
3. **Typed consequence.** The contrast names operation, resource, purpose, recipient,
   budget, currency, and subdelegation rather than reducing scope to a scalar.
4. **Negative controls.** Fixed scope, task-success criterion, mutation, hidden effect,
   and missing ancestry distinguish several failure classes.
5. **Non-moralized sensitivity.** The same causal contrast can produce different
   governance dispositions.
6. **Honest status labels.** The result says synthetic, no human participants, no
   population estimate, and no trained strategic agent.
7. **Narrow failure behavior.** Invalid signatures and expired grants stop rule
   evaluation rather than falling back to permissive behavior.

## Technical weaknesses and required changes

### Serialization is not protocol-grade

`JSON.stringify` is deterministic only under JavaScript's property-order rules for
these objects. Cross-language or schema-normalizing implementations may serialize the
same logical object differently. A production design needs a canonical serialization
standard, algorithm identifiers, domain separation, schema versioning, and test
vectors. This does not invalidate the fixture signature test.

### Observation signatures prove source, not truth

The observation issuer signs fields generated by `humanChoice`. No sensor,
participant, or independent observer is involved. The paper must say “authentic
fixture event” rather than “verified human behavior.” Observation-source conflicts
and provenance must remain open problems.

### The permission type is incomplete relative to the specification

The `permission` object lacks principal, measured subject, context, duration,
geography, review policy, and policy version even though the specification treats
several as scope dimensions. The grant carries some of these at envelope level, but
the contrast cannot represent per-permission variation in them. The next implementation
should use one canonical capability tuple and explicitly define wildcard and matching
semantics.

### Exact tuple difference misdescribes overlapping rights

Changing a budget from INR 1,000 to INR 1,500 would appear as one removal and one
addition. That is transparent but does not recognize dominance or net widening.
Purpose aliases and nested resources also defeat exact equality. A serious artifact
needs a local partial order and must report incomparable transitions without forcing a
scalar.

### Event validation is incomplete

The evaluator does not show tests for malformed payload schemas, forged event
signatures, duplicate IDs with conflicting bodies, non-monotone time, clock authority,
unknown intervention labels, threshold edge cases, rule upgrades, revocation, replay
across grants, or observation-source rotation. Some are easy additions and should be
covered before a security venue submission.

### Rule semantics and translation are assumed

The principal signs an already structured JavaScript object. There is no translation
from a human statement, no review surface, and no evidence that the principal
understands the accepted-count criterion. This is appropriate for testing enforcement,
but it leaves the central human authorization problem outside the code.

### “Same task competence” is stipulated

Both arms set `taskSuccess = true`. The artifact does not execute a task or measure
competence. The paper should say “same task-success fixture label,” not claim an
empirical competence control.

### Handoff ancestry is not executed

The missing-ancestry case directly calls `reviewDisposition` with
`ancestryComplete = false`. It does not pass an event through two agents, compress a
trace, verify a chain, or demonstrate laundering. Multi-agent ancestry remains a
proposal.

### The benchmark is not adversarial

No optimizer knows the threshold, chooses suggestions to gain scope, exploits event
selection, or routes evidence through another agent. The fixture proves availability
of a channel, not an incentive to use it or the robustness of the audit under attack.

## Inherited economics must remain explicit

The executable result does not rescue the general novelty claim from economic prior
art. Performance-contingent control rights are common in theory and observed contracts.
Ratchet-effect models study actions chosen in anticipation of future rule updates.
Influence-activity models study resources spent to shape consequential decisions.
Formal and real authority are already distinguished.

The paper should cite at least:

- Freixas, Guesnerie, and Tirole (1985),
  [doi:10.2307/2297615](https://doi.org/10.2307/2297615);
- Laffont and Tirole (1988),
  [doi:10.2307/1911362](https://doi.org/10.2307/1911362);
- Milgrom (1988), [doi:10.1086/261523](https://doi.org/10.1086/261523);
- Aghion and Tirole (1997),
  [doi:10.1086/262063](https://doi.org/10.1086/262063); and
- Kaplan and Strömberg (2003),
  [doi:10.1111/1467-937X.00245](https://doi.org/10.1111/1467-937X.00245).

The defensible difference is substrate and audit interface: human/collective evidence
can trigger composable machine permissions, and authorization systems can expose
integrity, conformance, sensitivity, and governance separately. This is an extension,
not a rediscovery of endogenous control.

## Causal interpretation

The fixture implements a deterministic paired world, so no statistical identification
is needed inside the program. The paper may write the general population estimand, but
must not use the fixture as an estimate of it.

For a real study, policies are longitudinal regimes. Required declarations include:

- assignment and analysis units;
- target and sampled populations;
- treatment versions and adherence;
- task and initial-state distributions;
- censoring and attrition;
- sequential exchangeability or randomization;
- positivity;
- interference or an exposure mapping; and
- uncertainty and multiple-comparison treatment for typed permissions.

Households, workplaces, platforms, and public spaces make interference likely. A
principal may authorize treatment while non-principals bear effects. Population
identification and jurisdiction must therefore precede claims of social benefit.

## Governance interpretation

The artifact's governance separation is sound. The next version should return a
structured record rather than one disposition string:

```json
{
  "origin_valid": true,
  "role_valid": "unknown",
  "jurisdiction_valid": "unknown",
  "rule_conformance": true,
  "policy_sensitivity": "nonzero_in_fixture",
  "influence_authorized": "unspecified",
  "review_quality": "not_evaluated",
  "welfare_effect": "not_evaluated",
  "disposition": "review_required"
}
```

This prevents `CONSISTENT_WITH_STATED_PURPOSE` from being mistaken for endorsement or
legal validity.

Review itself must enter the causal model. Prompt timing, defaults, interruption,
service degradation, and repeated requests can produce approval. A later human study
should treat review policy as part of `pi`, measure refusal burden, and preserve a
“continue at prior scope” option.

## Collective, global, and cultural limits

The fixture has one principal, one measured person, one delegate, and one household
label. It does not resolve:

- who may bind other household members;
- guardianship and children's developing authority;
- employer–worker power asymmetry;
- public or commons governance;
- shared resources across jurisdictions;
- collective consent and minority rights;
- cultures that place authority in families, communities, professions, or institutions
  rather than an isolated account holder; or
- accessibility cases where extra review burdens fall unequally.

These are not edge cases. The specification properly says authority is local, but the
code does not evaluate it. Any world-scale claim would be premature. Ostrom's work on
polycentric governance [S21](https://doi.org/10.1017/CBO9780511807763) and the warning
about extrapolating from narrow human samples [S19](https://doi.org/10.1017/S0140525X0999152X)
are relevant constraints, not decorative citations.

## Artificial moral patienthood

The benchmark treats the delegate as a controlled software actor. It says nothing
about artificial consciousness, preferences, welfare, ownership, duplication, or
deletion. A governance paper should state this boundary explicitly. If future systems
have morally relevant properties, authority attenuation and human protection do not
exhaust the moral analysis. Current uncertainty motivates separate assessment rather
than an assumption either way [S14](https://arxiv.org/abs/2411.00986).

## Security review

The artifact is a non-adversarial reference fixture. Before security claims, test:

1. event fabrication and issuer compromise;
2. observation selection and omission;
3. prompt injection into rule generation;
4. policy-version substitution;
5. cross-grant replay;
6. clock and expiry manipulation;
7. scope aliasing and purpose confusion;
8. threshold gaming;
9. review fatigue;
10. multi-agent ancestry laundering;
11. collusion between governor and delegate; and
12. privacy leakage from causal ancestry logs.

The design should inherit capability attenuation, robust information-flow controls,
and conventional access control. It is not a substitute for them.

## Claims the paper may and may not make

### Supported by the artifact

- A signed adaptive rule can be replayed exactly and still produce different future
  typed scopes under two allowed fixture policies.
- This can occur while option sets, chosen options, and task-success labels are held
  identical by construction.
- Signature integrity, rule conformance, causal sensitivity, and governance disposition
  are logically separate outputs.
- Missing ancestry can be represented as unknown and routed to review.
- Nonzero sensitivity need not imply prohibition when influence is an explicitly
  stated purpose.

### Not supported by the artifact

- Real people will exhibit the fixture behavior.
- Any effect size or prevalence in a population.
- Agents will strategically seek scope.
- The policy changes preference, autonomy, welfare, or competence.
- A review-required decision is legally or morally correct.
- The governance disposition verifies consent.
- The benchmark is secure against adversaries.
- The method solves multi-agent ancestry.
- The contribution is A-grade novelty.
- The audit is a complete philosophy of coexistence.

## Required revisions for a serious full-paper submission

1. Describe the main case as a measurement-policy witness, not evidence of induced
   preference.
2. Publish the exact fixture hashes, runtime version, and a machine-readable result
   schema.
3. Adopt canonical serialization and versioned schemas.
4. Expand the permission tuple to match the written specification.
5. Add a partial-order comparison for overlapping rights.
6. Separate source authenticity from observation accuracy in field names.
7. Add structured role, jurisdiction, review-quality, and welfare-unknown outputs.
8. Implement at least one real multi-agent ancestry handoff or remove any implication
   that it is solved.
9. Add adversarial and malformed-input tests.
10. Compare the fixture against an existing authenticated-delegation or authorization
    implementation.
11. Add a preregistered human-study protocol rather than an empirical claim.
12. State inherited economics and security theory before presenting the extension.

## Final novelty classification

| Element | Grade after execution |
|---|---:|
| Endogenous evidence under an adaptive rule | D/C: mature mechanism-design and performativity structure |
| Elementary feedback model | D: inherited control illustration |
| Total paired policy contrast | C: standard causal construction |
| Exact typed scope output | C-plus implementation choice |
| Four-output audit decomposition | B-minus engineering formulation |
| Accurate relational event causing self-benefiting permission widening | B-minus executable benchmark witness |
| Multi-agent ancestry preservation | Proposed only; no executable evidence |
| Human or population claim | Not evaluated |
| Overall artifact | **C-plus artifact supporting a provisional B-minus extension** |

## Final verdict

The artifact earns continued development. It turns a verbal concern into a reproducible
counterexample and shows that an authenticity-only test can pass while a distinct
policy-sensitivity output is nonzero. The strongest insight is that the criterion
“accepted the system's suggestion” is partly authored by the system through its choice
of suggestion, even when the person's choice and task outcome do not change.

That result is useful, memorable, and technically actionable. It remains synthetic,
and its general structure has substantial prior art. A serious venue should request
major revision if presented as a full interdisciplinary discovery, while recognizing
the benchmark as a credible B-minus systems extension when stated with these limits.
