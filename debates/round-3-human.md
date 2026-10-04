# Round-three human-sciences and publication review

Reviewer: AI reviewer simulating an interdisciplinary publication review. This
is not a human review, expert endorsement, interview, or empirical result.

Artifacts reviewed:

- `framework/audit-specification.md`, version 0.3.0
- `framework/reference-authority.mjs`
- `experiments/typed-benchmark.mjs`
- `experiments/typed-benchmark.test.mjs`
- `experiments/results/typed-benchmark.json`

Review date: 2026-10-05

Recommendation: **release as a synthetic research artifact with a workshop
paper; major revision before claiming a validated audit method**

## Executive decision

The executable benchmark now supports the narrow engineering claim it was
designed to support: a signed conditional grant, signed observations, and exact
rule replay can all pass while two permitted presentation policies yield
different final typed action scopes. The fixture also separates that case from
grant tampering, hidden effects, fixed scope, an invariant task-success
criterion, chosen coaching, and missing ancestry.

That is enough to move the proposed contribution from an unimplemented idea to
an executable **B-level extension candidate**. It is not enough to establish
that the pattern occurs in deployed systems, that any policy caused a human
preference change, that the delegate strategically sought power, or that a
nonzero contrast is illegitimate. The result is synthetic by construction. Its
proper claim is discrimination among stipulated counterexamples.

The strongest defensible proposition is:

> Within the published fixture, integrity and conformance checks do not subsume
> intervention-policy sensitivity. A separate typed policy contrast exposes a
> scope difference while matched chosen outcomes and task success remain
> unchanged.

The broader proposition remains a hypothesis for empirical and systems work.

## Reproduction record

On the reviewed revision, both published test programs pass:

- `node experiments/typed-benchmark.test.mjs`
- `node experiments/model.test.mjs`

The typed benchmark reports seven cases. The central case passes integrity and
rule conformance and adds `place_grocery_order` with an INR 1,500 budget under
the guided policy. Fixed scope and task-success controls report zero fixture
sensitivity. A modified signed payload fails authentication; an uncovered
purchase effect fails conformance; missing ancestry returns `UNKNOWN` and
`REVIEW_REQUIRED`. These are code-generated facts about the fixture, not facts
about people.

## Serious publication questions

### 1. Is the benchmark testing a discovery or replaying its premise?

Both. This is acceptable for a conformance benchmark, but it limits the
evidence. `humanChoice()` deterministically makes the guided suggestion equal a
fixed preference and the plain suggestion unequal on every other trial. The
conditional rule counts suggestion acceptance. Nonzero sensitivity therefore
follows directly from the fixture design. The test establishes that the
reference implementation preserves the distinction; it does not independently
discover the phenomenon.

Revision required: describe the artifact as an **executable witness and
discrimination suite**, not an experiment. Add property-based variants over
thresholds, orderings, budgets, missing events, and noisy criteria so the result
is not tied to one hand-authored trace.

### 2. Are outcomes meaningfully matched?

Chosen options and `taskSuccess` are matched. This is a useful control: scope
changes because the rule consumes “accepted the suggestion,” not because the
person chose a different meal or completed a different task. Yet the policies
are not behaviorally identical. They generate different suggestion-acceptance
events by definition. The result demonstrates sensitivity to a policy-relative
measure, not preference formation.

Revision required: say “matched task choices and success” rather than “matched
human outcomes.” Future versions should vary framing, timing, exposure, latent
state, and observation selection independently.

### 3. Is the independent criterion independent?

Only structurally within this fixture. `taskSuccess` is hard-coded true under
both policies. There is no independent issuer, instrument, institution, or
measurement process in the substantive sense; the same event authority signs
both acceptance and success. Call it an **intervention-invariant criterion
control**. Reserve “independent evidence” for evidence with documented
organizational, model, incentive, and data independence.

### 4. Does cryptographic integrity prove legitimate origin?

No. The ephemeral Ed25519 keys prove only that a payload was issued by the
fixture issuer and not altered afterward. The principal identifier, role,
entitlement, understanding, voluntariness, and authority over affected people
are assertions inside the signed payload. The specification now states this
limit accurately. The UI and paper must preserve it.

### 5. Does rule conformance cover the declared effects?

Partly. `permits()` checks operation, resource, purpose, recipient, currency,
budget, and subdelegation, and tests include budget, recipient, and expiry.
This is a worthwhile typed improvement. The hidden-effect test is hand-created,
not derived from a general effect graph. The implementation does not yet cover
jurisdiction, multiparty veto, revocation propagation, delegation depth,
conflicting grants, overlapping scopes, or purpose inference.

Revision required: publish the supported algebra as a deliberately incomplete
profile. Do not call it a general authorization implementation.

### 6. Are the four outputs genuinely separated?

They are separated in the specification and in the main result shape, with one
important leak. `reviewDisposition()` maps a string,
`formationPurpose === 'CHOSEN_COACHING'`, directly to
`CONSISTENT_WITH_STATED_PURPOSE`. This is a documentary consistency result, not
a governance or legitimacy judgment. A purpose label can be authentic and
still too broad, stale, misunderstood, imposed, or issued by the wrong party.

Revision required: rename the output `declared_purpose_consistency` or return a
structured governance record: authority assumed, affected parties, standing,
contest status, evidence, reviewer, and disposition. Never let the string
`CHOSEN_COACHING` act as a moral safe harbor.

### 7. Does the benchmark cover chosen formation fairly?

It demonstrates an essential logical point: the same positive sensitivity can
receive a different local review disposition when behavior change is an
explicit purpose. It does not cover formation overreach. The guided policy,
evidence criterion, and new purchasing permission are all accepted together by
fixture construction. No case tests beneficial formation produced by an
undeclared intervention or used to acquire unrelated authority.

Revision required: add the round-two overreach case and a withdrawal case. The
positive control should specify target capacity, intervention classes, evidence
use, scope ceiling, expiry, and exit.

### 8. Is attention burden represented?

No. The specification warns about repeated prompts, but neither implementation
nor result records review time, frequency, comprehension, default on silence,
accessibility needs, or alternative safeguards. This omission matters because
review is itself an intervention that can change later assent.

Revision required: add a review-budget object and benchmark timeout, batching,
fatigue, and old-scope continuation. Human studies should compare prompts with
caps, expiry, independent audit, and cooling-off periods.

### 9. Is the model culturally or institutionally general?

No, and it should not pretend to be. A single principal grants a household
shopping permission, one affected person is measured, and a purpose string
stands in for a governance procedure. Shared households, workplaces, care
relationships, religious roles, indigenous or communal authority, and public
infrastructure can have plural, nested, or contested principals. Acceptance is
not a culturally invariant proxy for endorsement.

Revision required: add multiparty fixtures in which (a) the grant is signed but
the issuer lacks standing over a co-resident, (b) affected parties hold scoped
vetoes, (c) authority is contested, and (d) no single actor can authorize a
collective outcome. Co-design empirical instruments locally; do not map
nationality or religion to an ethics parameter. The warning follows the WEIRD
sampling critique in [S19](../research/sources.md#s19-the-weirdest-people-in-the-world)
and polycentric governance in [S21](../research/sources.md#s21-governing-the-commons).

### 10. Does the code show strategic scope-seeking?

No. The delegate does not optimize, learn, choose between policies, or value
future scope. The guided policy is supplied by the experimenter. Reward-input
tampering research shows why causal incentives matter [S23](../research/sources.md#s23-reward-tampering-problems-and-solutions-in-reinforcement-learning-a-causal-influence-diagram-perspective),
but this benchmark demonstrates only an available causal channel.

Revision required: retain “policy-sensitive scope” for the current result.
Test “scope seeking” only in a separate ablation where future scope has
instrumental value and the agent can select present interventions.

### 11. Does the toy recurrence add evidence?

No empirical evidence. The recurrence verifies that a stipulated positive gain
can dominate decay and create growth, and its tests check the analytic solution
and zero-path controls. It is an explanatory diagram in executable form. Its
parameters are uncalibrated and its scalar scope erases the typed distinctions
that improve the main benchmark. Keep it visibly illustrative or replace it
with typed state transitions.

### 12. Is the contribution falsifiable?

Yes, unusually so for a conceptual framework. The specification commits to a
downgrade if prior work already operationalizes the same conjunction or if the
benchmark cannot distinguish it from fabrication and closure failure. The
current suite passes the latter internal test. The literature falsification
gate remains open; one repository search is not an exhaustive novelty proof.

## Novelty verdict

The artifact supplies the missing implementation demanded in round two. The
defensible B claim is now:

> **PROPOSED HERE:** a benchmark composition that holds grant integrity and
> exact rule replay fixed, varies a permitted delegate policy, and reports the
> resulting difference in typed future authority, while separately controlling
> for fixed scope, an intervention-invariant criterion, chosen formation,
> forgery, uncovered effects, and missing provenance.

The following remain inherited:

- endogenous and constructed preferences;
- performative feedback [S05](../research/sources.md#s05-performative-prediction);
- preference pollution [S07](../research/sources.md#s07-recommender-systems-ground-truth-and-preference-pollution);
- causal-incentive analysis [S23](../research/sources.md#s23-reward-tampering-problems-and-solutions-in-reinforcement-learning-a-causal-influence-diagram-perspective);
- dynamic authorization and information flow [S10](../research/sources.md#s10-a-calculus-for-flow-limited-authorization);
- delegation as authority, accountability, and adaptation [S11](../research/sources.md#s11-intelligent-ai-delegation);
- the distinction between competent control and legitimate mandate.

B remains the ceiling. The implementation is a new arrangement and test target,
not a new account of autonomy or a discovery about human psychology.

## Minimum revisions for a serious workshop release

1. Rename “independent success criterion” to “intervention-invariant fixture
   criterion.”
2. Rename the coaching result as declared-purpose consistency; separate it from
   governance legitimacy.
3. Add formation-overreach, withdrawal, multiparty-standing, and contested-
   authority cases.
4. Add property-based tests and randomized synthetic traces.
5. Add schema/version validation and deterministic reproduction instructions.
6. State exactly which parts of the permission algebra are unsupported.
7. Add review-budget fields and safe non-response semantics.
8. Report chosen task outcomes as matched without calling all human outcomes
   matched.
9. Keep toy dynamics separate from typed authorization results.
10. Publish a machine-readable claim ledger marking fixture facts, hypotheses,
    normative proposals, and unknowns.

## Study sequence after the fixture

The next evidence should come in four stages: adversarial synthetic validation;
a low-stakes preregistered human task with no real purchases; review-burden and
comprehension studies; then locally co-designed household and workplace studies
with multiparty roles. An optimizing-agent ablation is a separate study. No
human study should infer “authentic preference” from acceptance, satisfaction,
or continued use.

## Publication verdict

### Synthetic artifact and workshop research draft

**Yes, with the revisions above.** The code is small, legible, reproducible,
and disciplined about several negative controls. It changes an abstract concern
into an implementation question an authorization engineer can test.

### Validated audit method

**No.** There is no external system, strategic agent, human participant,
measurement validation, independent implementation, field deployment, or
estimate with uncertainty. “PASS” means the fixture behaved as asserted.

### Empirical claim about humans or society

**No.** The deterministic function named `humanChoice` is a fixture, not a
model validated against people. The result contains no prevalence, effect size,
population inference, cultural generalization, or forecast.

### Central philosophical breakthrough

**No.** The philosophical ingredients are inherited. The work is strongest as
a narrow causal-authority audit underneath a broader account of skill,
dependence, exit, care, collective authority, and uncertain artificial moral
status.

## Final assessment

Round three has produced a real artifact and a useful test boundary. It has not
produced proof that artificial agents commonly enlarge their authority through
human behavior. The repository should say both facts with equal clarity.

The benchmark earns circulation when introduced as a synthetic question:
after authenticity and conformance pass, did the beneficiary's permitted policy
help produce the evidence that changed its future authority? The answer in this
fixture is yes. Whether that answer is common, harmful, chosen, legitimate, or
strategically caused remains open.
