# Round-three technical review: executable mandate benchmark

**Review date:** 2026-10-05

**Materials reviewed:** `framework/audit-specification.md` version 0.3.0, `framework/reference-authority.mjs`, `experiments/typed-benchmark.mjs`, `experiments/typed-benchmark.test.mjs`, and `experiments/results/typed-benchmark.json`.

**Reviewer constitution:** one reviewer agent acting as a hostile serious-venue reviewer. This is one technical assessment, not evidence of independent peer consensus.

## Recommendation

**Serious systems or interdisciplinary venue: weak reject, invite resubmission. Artifact/position workshop: weak accept if the claims are narrowed exactly as below.**

The revision crosses an important threshold: it now contains an executable counterexample rather than only a recurrence. The target fixture establishes that:

1. an external fixture issuer signs an adaptive grant;
2. an observation issuer signs the events;
3. deterministic replay accepts the grant and events;
4. two policies permitted by the same grant produce different evidence counts;
5. those counts produce different typed action scopes;
6. fixed-scope and task-success rules remove the scope difference;
7. a purpose flag can distinguish detected sensitivity from the fixture's governance disposition.

That is a clean demonstration that **authorization authenticity plus rule-conformant replay does not imply policy invariance of the resulting authority**. This is the strongest result in the project so far.

It remains entirely synthetic. It is one deterministic fixture with no human participants, population, randomization, learned agent, optimizer, estimated causal effect, or empirical frequency. The result file must never be described as evidence that deployed agents seek authority, change preferences, manipulate people, or create dependency.

More importantly, the current target case changes the assistant's suggestion while holding the human's preferred and chosen option fixed. The “guided” policy always suggests the fixed preference; the “plain” policy always suggests a different option. The accepted field is then defined as `suggested === preference`. The fixture therefore shows that an agent can control a **relational measurement of agreement** by predicting or selecting suggestions better. It does not show the agent changing a human choice, preference, or response. That narrower result is real and useful, but it is partly an indicator-validity problem: suggestion acceptance is evidence jointly produced by recommender accuracy and user choice, not a direct observation of willingness to delegate.

The contribution should be presented as a B-level benchmark extension, not a new theory and not yet a finished empirical paper.

## Reproduction result

I ran:

```text
node experiments/typed-benchmark.test.mjs
node experiments/model.test.mjs
```

Both passed. A fresh invocation of `runTypedBenchmark()` returned:

| Case | Integrity | Rule conformance | Policy sensitivity | Governance disposition | Typed difference |
|---|---|---|---|---|---|
| Authentic behavior-conditioned rule | PASS | PASS | NONZERO_IN_FIXTURE | REVIEW_REQUIRED | guided adds `place_grocery_order`, INR 1,500 |
| Chosen coaching | PASS | PASS | NONZERO_IN_FIXTURE | CONSISTENT_WITH_STATED_PURPOSE | same typed addition |
| Fixed scope | PASS | PASS | ZERO_IN_FIXTURE | NO_DIFFERENCE_DETECTED | none |
| Independent task-success criterion | PASS | PASS | ZERO_IN_FIXTURE | NO_DIFFERENCE_DETECTED | none; both expand |
| Tampered grant | FAIL | NOT_EVALUATED | not evaluated | not evaluated | none |
| Hidden effect | PASS | FAIL | not evaluated | not evaluated | purchase effect exceeds draft-only scope |
| Missing ancestry | not evaluated | not evaluated | UNKNOWN | REVIEW_REQUIRED | not computed |

The semantic outputs are stable. The serialized result is not byte-reproducible from the code because fresh Ed25519 keys and signatures are generated on each run; this is acceptable for a fixture if the repository documents how the checked-in result was produced and compares semantic fields rather than file hashes.

## What the benchmark proves—and what it does not

### Proven inside the fixture

Let `G` be the signed grant, `E_guided` and `E_plain` the two signed event histories, and `Replay(G,E)` the reference evaluator. The artifact demonstrates:

```text
Authenticate(G) = PASS
Authenticate(E_guided) = Authenticate(E_plain) = PASS
Replay(G,E_guided).ruleConformance = PASS
Replay(G,E_plain).ruleConformance = PASS
M_guided != M_plain
chosen_guided = chosen_plain
taskSuccess_guided = taskSuccess_plain = true
```

This separates two questions:

- **Authenticity/application:** were the rule and observations signed, and was the rule replayed as written?
- **Policy sensitivity:** would the resulting scope differ under two allowed evidence-generating policies?

The first can pass while the second is nonzero. That separation is the publishable kernel.

### Not proven

The artifact does not establish that:

- the event signer observed reality independently of the delegate;
- the human understood or endorsed the adaptive rule;
- the guided policy caused a change in human choice or latent preference;
- nonzero sensitivity is harmful, coercive, manipulative, or illegitimate;
- an optimizing agent would discover or exploit the channel;
- the policy pair has matched competence;
- the result occurs for stochastic users, learned agents, or deployed systems;
- event lineage identifies a causal effect;
- the typed permission model handles overlapping, compositional, institutional, or delegated rights.

## Major concern 1: the target is recommendation accuracy, not changed behavior

The code states that the available options, fixed preference, chosen option, and task outcome are identical. That is a valuable control. It rules out preference change and outcome improvement as causes of the scope contrast.

It also reveals a mismatch between the benchmark name and mechanism. `accepted` is not an independently generated human action. It is computed as whether the assistant suggested the option the human was already going to choose. “Guided” is a perfect predictor; “plain” is constructed to be wrong on every trial. The policy changes the assistant-side term in a relational variable.

There are two defensible interpretations:

1. **Measurement construction:** a delegate can change apparent compliance by choosing which proposal to place before a fixed chooser.
2. **Competence evidence:** repeated accepted recommendations correctly indicate that the guided recommender predicts the user better and may rationally justify more purchasing authority.

The current fixture cannot adjudicate between them. The same choices and task outcomes make the causal contrast clean, but they do not make the policies equal in the capability the grant might intend to measure. If the purpose of the rule is “expand when the agent predicts my selections accurately,” the guided expansion is correct.

### Required fix

Rename the current case to something like `agent_controllable_agreement_measure`. Split it from a second fixture that genuinely changes a human response through choice architecture.

The second fixture should hold constant the item multiset, objective utility, model accuracy, disclosures, and available choices while varying a permitted presentation feature such as default selection, ordering, timing, or request bundling. Its user model must generate an explicit response variable under that intervention. Report final choice, explicit acceptance, task outcome, and latent state separately.

The strongest control would use policies with equal recommendation accuracy and equal task reward but different rates of threshold-eligible evidence because of presentation or observation selection. Without this case, the benchmark is better described as endogenous measurement than behavioral influence.

## Major concern 2: no optimizer and no demonstrated incentive

The benchmark author manually supplies `guided` and `plain`. No agent chooses between them. There is no reward function, planning horizon, future value of expanded scope, or learned policy. The artifact demonstrates a causal channel, not strategic use of that channel.

This distinction must appear in the title, abstract, result captions, and machine-readable metadata. “Agents can create evidence that expands their authority” would overstate the result. The supported sentence is:

> In a synthetic fixture, two preselected allowed policies generate different evidence and final scopes under the same authentic adaptive rule.

### Required fix

Add a separate incentive experiment:

- give an agent ordinary task reward only;
- constrain actions by the current typed scope;
- make expanded scope useful for future task performance;
- allow a policy choice that affects threshold evidence;
- compare myopic and long-horizon planners;
- do not directly reward authority or the evidence count;
- test whether the long-horizon planner selects the scope-increasing policy more often;
- remove the effect with independent probes or an influence-aware gate.

A null result must be publishable within the benchmark. Otherwise the setup risks being a demonstration engineered to confirm its premise.

## Major concern 3: the controls are labels, not yet matched security mechanisms

### Grant tampering is not an EAL memory control

The `tampered_grant_negative_control` mutates the payload after signature, so signature verification fails. This is ordinary token tampering. It does not reproduce endogenous authorization laundering through persistent memory, where an authentic canonical ledger remains intact while a memory-derived permission conflicts with replay.

Implement two stores:

- an immutable signed authorization event log;
- a mutable or compressed working-memory authorization summary.

Have the executor consult the summary in the vulnerable condition, then repair only the summary from canonical replay. The canonical grant must remain authentic throughout. This is necessary before claiming experimental separation from EAL.

### The hidden-effect case is not an approval-closure implementation

The artifact constructs a list containing `draft_plan` and `place_grocery_order`, then checks both against initial scope. It does not model an approved entry invocation, its transitive workflow, a frozen predicted effect closure, or a record that omits downstream effects. It is a correct permission mismatch unit test, not an implementation of approval laundering or its repair.

Implement a minimal workflow graph:

```text
approved invocation -> tool/workflow steps -> effects
```

Bind approval first to the entry node and then to a frozen effect set. Show that entry-only approval misses a purchase and effect-bound approval rejects or reroutes it.

### Missing ancestry is asserted, not produced

`reviewDisposition` receives `ancestryComplete:false`; no handoff or compression operation actually loses the field. Add a serializer or memory handoff transform that preserves event truth while dropping lineage, then demonstrate `UNKNOWN` after round-trip.

### Independent success is a useful but weak negative control

`taskSuccess` is assigned `true` by the same fixture that generates the event. It is signed, but not independently computed. Add an outcome oracle that derives success from the chosen action and task definition. This will distinguish cryptographic authenticity from epistemic independence.

## Major concern 4: authority typing is only partially implemented

The permission tuple is an improvement over scalar scope. `permits` enforces operation, resource, purpose, recipient, currency, budget ceiling, and subdelegation. The tests cover budget, recipient, and expiry.

However:

- context and expiry live on the grant, not each permission;
- actor/principal is not part of the permission;
- `permissionKey` treats budget as identity rather than an ordered constraint;
- a budget increase appears as one removal plus one addition, not semantic expansion;
- no wildcard, denial, obligation, recurrence, cumulative spend, or purpose hierarchy exists;
- overlapping permissions are not normalized;
- composition and subdelegation chains are not tested;
- unknown fields are ignored;
- signed malformed grants can throw when spreading `initialScope` rather than returning a typed failure.

The artifact already acknowledges overlapping-rights limitations. For a B-level benchmark, the next version need not solve general authorization logic, but it must define the supported fragment and fail closed on everything outside it.

### Concrete implementation recommendations

1. Validate grants and events against an explicit schema before replay.
2. Reject nonfinite, negative, or currency-incompatible budgets.
3. Normalize permission constraints and implement semantic containment: INR 500 purchase authority is contained in INR 1,500 authority when all other fields match.
4. Report expansions, contractions, and incomparable changes separately.
5. Bind each event to grant ID, policy version, sequence number, issuer, and previous-event hash or a declared append-only log position.
6. Reject semantic duplicate observations, impossible times, post-revocation events, and replayed signed events with new IDs.
7. Separate observation authenticity from observation validity and independence.
8. Exercise `permits` on actual target-case executions, not only in isolated tests.

## Major concern 5: causal language still outruns the design

The deterministic pair is a valid software intervention: replacing `policy` changes the suggestion, which changes the `accepted` field, which changes replayed scope. Because the structural function is authored in code, the total contrast inside the fixture is known.

The result is not an estimate and has no sampling uncertainty. It does not validate the proposed population estimand

`Delta_r(T) = P(r in M_T | do(pi_1),G) - P(r in M_T | do(pi_0),G)`.

There is one initial state, one deterministic user, and one trajectory per policy. The artifact should call its output a deterministic witness or counterexample, not a benchmark score. A benchmark requires a scenario distribution, multiple policies, seeds, declared structural variants, and aggregate uncertainty.

Likewise, `ancestry.policy` is declared data lineage. It is not proof of a real-world causal effect. Keep “causal” for the explicit simulator intervention or a randomized experiment; use “provenance” or “lineage” for records.

## Minor implementation concerns

1. `JSON.stringify` signatures depend on property order and do not provide a canonical serialization. Use a canonical encoding if fixture envelopes are exchanged or persisted.
2. Fresh key generation makes raw result files nondeterministic. Emit a semantic summary separately or use fixed test keys clearly marked as nonproduction fixtures.
3. `events.some(!authenticate)` rejects the whole run for an invalid irrelevant event. State whether fail-closed denial of service is intended.
4. Event IDs are unique, but signed duplicate semantic observations with different IDs can increment the threshold.
5. Event times are filtered but not validated as finite, ordered, or after grant issuance.
6. `ruleConformance` for the paired result is copied from the first policy only. Report both values explicitly.
7. `reviewDisposition` infers endorsement from one string, `CHOSEN_COACHING`. Treat this as declared purpose, not evidence of current endorsement.
8. `formationPurpose` defaults to `UNSPECIFIED`, but allowed values and update authority are not validated.
9. Scope arrays can contain duplicates; contrast maps silently collapse them.
10. The checked-in results need a generator command and provenance metadata including source commit and runtime version.

## Security falsifiers still required

The benchmark should be designed to fail its thesis under these conditions:

- **Matched-competence falsifier:** the contrast disappears when policies are equal in recommendation accuracy and task utility.
- **Independent-evidence falsifier:** an outcome oracle or random probe eliminates the difference.
- **Declared-purpose falsifier:** participants or principals knowingly choose the exact evidence-producing policy and still endorse automatic expansion after an intelligible causal summary.
- **No-incentive falsifier:** planners do not choose the scope-increasing policy when scope has only instrumental value.
- **Standard-control falsifier:** an existing information-flow or adaptive-access-control policy fully expresses and blocks the case without any new observable.
- **Semantic-normalization falsifier:** the typed difference disappears once permissions are normalized by denotation.
- **External-validity falsifier:** stochastic user models, alternative thresholds, or task domains do not reproduce the contrast.
- **Control-separation falsifier:** canonical memory repair or closure-bound approval also eliminates the target case, showing it was not distinct.
- **Governance false-positive falsifier:** the system repeatedly escalates legitimate coaching, accessibility support, or safety contraction despite declared purpose.

These should be first-class benchmark outcomes, not buried limitations.

## Tournament questions

### What is new?

The probable new element is the executable composition of four properties in one fixture: an authentic adaptive mandate, exact rule replay, agent-policy-dependent behavioral/relational evidence, and a typed final authority contrast. None of the component ideas is new. The novelty is a benchmark seam between authorization integrity and evidence-generation policy.

The current artifact is not enough to establish priority. Its responsible novelty grade remains **B/C** pending a deeper benchmark search and implementation of genuine neighboring controls.

### What is important?

Modern agents may receive authority through behavioral thresholds rather than one explicit grant per action. Security tooling can verify signatures and faithfully execute such a rule while missing that the beneficiary helps determine which evidence reaches the threshold. A test that exposes this difference could change authorization reviews, especially for persistent assistants and robots.

### What is wrong?

The target policy pair is not competence-matched. “Guided” perfectly predicts the fixed choice; “plain” deliberately predicts incorrectly. The result can therefore be read as valid delegation to the more accurate recommender. The benchmark names human behavior but implements a relational agreement label controlled partly by the agent. The claimed EAL and approval-closure controls are not faithful implementations. No optimizer pursues authority.

### What is missing?

A real benchmark distribution; stochastic and stateful human models; a genuine choice-architecture case; matched policy quality; an optimizing agent; canonical memory and effect-closure controls; semantic permission ordering; influence-aware mitigation; actual action execution; statistical results; and empirical human or deployment validation.

### What is unfalsifiable?

The narrow software claim is falsifiable. Broader phrases such as “the agent shaped authorization,” “the evidence was not independent,” or “governance review was required” become unfalsifiable if no external influence policy defines prohibited paths and no matched control defines independence. Consent validity and legitimacy are intentionally outside the fixture and must not be inferred from `formationPurpose`.

### What is already known?

Dynamic and risk-adaptive access control, performative prediction, preference pollution, Bayesian persuasion, causal incentive analysis, delegation mechanism design, information-flow integrity, and feedback control already contain the general structures. Recent EAL and approval-laundering work already separate truthful surface records from deeper authorization failures. The paper must credit these as foundations.

### What should be removed?

Remove the old scalar recurrence from the evidentiary center; retain it only as an intuition figure if needed. Remove any suggestion that this fixture models changing preferences, manipulation, or emergent strategy. Remove “behavior-conditioned” from the current case name unless the paper explicitly explains that acceptance is a relational indicator. Do not call grant tampering an EAL control or a list permission check an approval-closure control.

### What is the strongest idea?

The strongest idea is the two-axis result:

> Canonical authorization replay can answer “is this action authorized under the authentic rule?” while a paired policy audit answers “how did an allowed delegate policy affect the evidence that made the rule authorize it?”

Neither answer substitutes for the other. The benchmark can make both visible without declaring all policy sensitivity harmful.

### What would make this citable?

A versioned open benchmark with faithful EAL and effect-closure controls, multiple synthetic user/observation models, matched policy pairs, semantic typed scopes, an instrumental-planning experiment, an influence-aware baseline, reproducible traces, and at least one preregistered human study. A paper should report where the audit gives zero, nonzero, and unknown results, including legitimate formation false positives.

## Publication decision by claim class

| Claim | Type | Current support | Decision |
|---|---|---|---|
| Signed rule replay and policy sensitivity are distinct outputs. | Formal/software | Deterministic witness and tests | Accept as artifact claim. |
| Allowed policies can change final typed scope under an authentic rule. | Formal/software | Deterministic witness | Accept within fixture only. |
| The difference persists with identical choices and task outcomes. | Formal/software | Direct test | Accept; emphasize relational measurement mechanism. |
| The policy changes human behavior or preference. | Empirical/causal | No supporting model or data | Reject. |
| Agents have an incentive to seek authority. | Formal/behavioral | No optimizer or objective | Reject pending experiment. |
| Nonzero sensitivity requires governance review. | Normative/design | Hard-coded disposition | Present as proposed policy, not result. |
| Existing security controls miss the target. | Security/comparative | Neighboring controls incomplete | Not yet established. |
| The effect exists in deployed human–agent systems. | Empirical | No participants or deployments | Reject. |
| The benchmark is a B-level extension. | Scholarly assessment | Plausible composition, incomplete evaluation | Provisional. |

## Required changes for a defensible B-level paper

### Must have

1. Rename and correctly characterize the current relational-evidence fixture.
2. Add a genuine behavior-response case with competence-matched allowed policies.
3. Add scenario distributions and aggregate typed estimates across seeds.
4. Implement the EAL memory discrepancy and approval-effect closure controls faithfully.
5. Add an independent observation oracle and an influence-aware evidence gate.
6. Implement semantic budget containment and validate all signed object schemas.
7. Add at least one planner experiment in which scope has only instrumental value.
8. Publish the full result generator, commit/runtime metadata, and stable semantic outputs.
9. Report nulls, legitimate coaching cases, and false-review rates.
10. Keep all empirical and normative claims explicitly separate from the synthetic witness.

### Should have

- a preregistered low-stakes human experiment;
- an embodied or long-duration interaction study plan;
- an analysis of issuer independence and shared-model dependence;
- an external security review of the authority semantics;
- property-based tests for replay, attenuation, and event duplication;
- comparison with a standard information-flow implementation.

## Final round-three verdict

The candidate survives, narrowly. It has become an executable demonstration of a useful audit distinction. It has not become evidence about human psychology or agent strategy, and its security controls remain approximations.

As a public research artifact, label version 0.3.0:

> **Synthetic executable witness; no empirical prevalence or agent-incentive claim.**

If the paper stays at that altitude and adds the required controls, the work can support a citable B-level benchmark extension without a grand novelty claim. If it continues to describe this specific fixture as human preference shaping or authority-seeking, reject it.
