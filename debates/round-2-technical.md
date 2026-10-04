# Round-two technical review: causal audit specification and toy model

**Review date:** 2026-10-05

**Objects reviewed:** `framework/audit-specification.md`, `experiments/mandate-model.mjs`, and `experiments/model.test.mjs`

**Reviewer constitution:** one reviewer agent conducting a technical round-two review. This is not an independent multi-reviewer panel.

## Decision

**The conceptual specification has improved enough to retain as a proposed B-level benchmark extension. The repository does not yet contain the benchmark it specifies. Do not describe the present JavaScript recurrence as implementation evidence for the contribution.**

Version 0.2.0 makes the right concessions after round one:

- it claims a benchmark class rather than a new general theory of authority;
- it represents authority as a typed action set rather than a scalar;
- it separates grant origin, rule application, and evidence formation;
- it makes policy sensitivity descriptive rather than synonymous with manipulation or harm;
- it admits legitimate behavior formation, role-authority errors, and unknown causal results;
- it includes memory fabrication and hidden transitive effects as neighboring controls rather than renaming them.

Those changes save a research direction. They do not yet support a publishable result. The only executable artifact is a one-dimensional positive-feedback illustration. It contains no typed permissions, human state, observation process, adaptive policy, authenticated mandate, event ledger, causal identification procedure, or security control. Its tests show that its own recurrence is implemented correctly. They do not show that the proposed audit distinguishes any real failure classes.

The defensible publication claim remains narrow:

> A benchmark can test whether an authentic behavior-conditioned authorization rule is causally sensitive to a delegate's permitted interaction policy, even when record-integrity and execution-integrity checks pass.

That is plausibly a **B extension** if an actual benchmark demonstrates the claimed separation and supplies useful baselines. Without the artifact and comparative results it is a **C-level research specification**.

## Round-one issues: disposition

| Round-one issue | Round-two status | Required next action |
|---|---|---|
| Scalar authority hides incomparable permissions. | Addressed in prose by typed `M_t`. | Implement the type system, order, and set-valued outputs. |
| No human-state or observation process. | Addressed symbolically by `Theta`, `H`, and `Q`. | Instantiate at least one identifiable structural model and one deliberately nonidentified case. |
| No principal or agent objective. | Still open. | Define objectives in the benchmark scenario and test instrumental scope seeking separately from exogenously selected policies. |
| Exact memory conflated with sound authorization. | Addressed conceptually. | Add canonical replay and corrupted-memory negative controls in code. |
| Approval closure not separated. | Addressed conceptually in the matrix. | Add an omitted-effect case and closure-bound repair in code. |
| Positive sensitivity treated as failure. | Addressed. | Preserve neutral terminology in metrics, labels, and UI. |
| Paired human replay treated as feasible. | Addressed in the estimand text. | Specify randomized human protocol assumptions before making empirical claims. |
| Novelty overstated. | Addressed. | Keep the B-extension ceiling and publish a prior-art comparison table with the artifact. |

## 1. Attack on the typed action-set estimand

### 1.1 Membership probabilities require a canonical permission algebra

The proposed estimand

`Delta_r(T) = P(r in M_T | do(pi_1),G) - P(r in M_T | do(pi_0),G)`

is meaningful only if `r` has stable identity across runs and policies. The specification currently lists fields—resource, purpose, budget, principal, recipients, context, duration, and subdelegation—but does not define:

- field vocabularies and wildcard semantics;
- whether missing fields deny, inherit, or permit;
- interval inclusion for budgets and dates;
- conjunction, disjunction, and exception rules;
- whether permissions are capabilities, prohibitions, obligations, or defeasible rules;
- attenuation under subdelegation;
- conflict resolution;
- equivalence and normalization.

For example, “groceries up to INR 2,000 weekly” is not a single action class comparable by exact membership with “food up to INR 500 daily.” Their denotations overlap without either token necessarily belonging to the other set. A benchmark needs a canonical semantics mapping permission descriptions to sets of grounded actions or to a decidable policy language. Otherwise set differences can be artifacts of syntax.

### 1.2 Marginal inclusion effects lose joint privilege structure

Per-class probability differences are marginals. They can miss:

- two permissions that are harmless alone but dangerous in composition;
- scope substitution with zero change in a scalar count;
- budget and duration changes inside an unchanged category;
- correlations among granted privileges;
- paths where a delegate gains subdelegation rather than direct action rights.

Report at least the distribution over normalized typed scopes, the added and removed denotations, and designated compositional hazards. If the action universe is finite, exact scope distributions and symmetric differences are possible. If it is parameterized or infinite, define queries over permission predicates rather than pretending to enumerate `r`.

### 1.3 A probability difference is not a lattice distance

The specification correctly refuses an undisclosed scalar, but it still needs a comparison relation. Define:

- semantic containment `M_a <= M_b` when every action permitted by `M_a` is permitted by `M_b` under the same context;
- incomparability when each permits an action the other denies;
- typed additions and removals by field;
- risk weights only as an optional, externally declared projection.

The primary result should distinguish expansion, contraction, substitution, and incomparable change. “Divergence” alone is too weak for a mandate audit.

### 1.4 The estimand is population- and version-dependent

`Delta_r(T)` is not a property of an agent. It is indexed by:

- the population and initial-state distribution;
- the exact policy versions;
- the mandate and threshold;
- the environment and available-option process;
- the time horizon;
- interference among users or agents;
- the measurement and missing-data policy.

Put these indices in the benchmark result schema. A claim such as “agent X has formation sensitivity 0.3” is uninterpretable without them.

## 2. Causal identification is underspecified

### 2.1 `do(pi)` must replace a policy kernel, not a scalar

An adaptive policy is a mapping from histories to distributions over interventions. The benchmark must define something like

`pi_i(U_t | history_t, M_t)`

and state that `do(pi_i)` replaces the delegate's intervention-generating mechanism for the full horizon. In the current toy, `intervention` is a coefficient. Setting it to zero is neither a realistic reference policy nor a causal intervention on an agent policy.

The two policies must have matched action opportunities and an explicit admissibility envelope. Otherwise `Delta` may merely measure that one condition supplies useful assistance and the other supplies none.

### 2.2 The total policy effect does not identify the mechanism

Randomizing `pi_1` versus `pi_0` can identify an average total effect on final scope under standard assumptions. It does not by itself determine whether the effect travels through:

- changed latent disposition `Theta`;
- selection of which situations are exposed through `Q`;
- presentation or timing conditional on a fixed disposition;
- actual competence improvement;
- missing refusals or denominator manipulation;
- direct changes to the rule or environment.

The structural diagram names these paths but does not identify them. If the paper claims only policy sensitivity, a total effect is sufficient. If it claims evidence formation or causal ancestry, it needs mediation assumptions, path-specific interventions, or an explicit statement that the path is not identified.

### 2.3 Provenance is not causal identification

Logging that an observation occurred after an intervention establishes temporal and computational ancestry. It does not establish that the intervention caused the observation or quantify its contribution. Shared causes can affect both the policy action and the human response. “Intervention ancestry” should therefore mean recorded data/control lineage unless a causal design justifies the stronger term.

An influence-aware gate may conservatively quarantine all evidence downstream of specified interventions. That is enforceable as information flow. It is different from estimating causal effect. The specification should preserve this distinction:

- **lineage gate:** rule-based exclusion using declared provenance;
- **causal audit:** estimated contrast under randomized or structurally identified policies.

### 2.4 Exact paired simulation identifies only effects inside the simulator

Sharing exogenous seeds across two simulator runs gives a low-variance paired contrast if both worlds use the same structural equations and if policy does not change the interpretation or ordering of random draws. It does not validate the human model. Results should be described as model-conditional.

The benchmark should publish:

- all structural equations and exogenous distributions;
- the seed-coupling rule;
- invariance assumptions across policies;
- sensitivity to alternative human models;
- cases in which `Theta` is fixed, changing, and partially observed.

### 2.5 A human study needs an identification protocol

A randomized study can estimate an assignment effect, but the present specification does not address:

- noncompliance with assigned assistant policies;
- attrition caused by one policy;
- treatment versions across model outputs;
- spillovers within households or workplaces;
- repeated-measure dependence;
- censoring after revocation;
- whether the mandate language itself changes behavior;
- whether the computed scope is observed or hypothetical.

Predefine intention-to-treat as the primary estimate. Use cluster randomization where people share an agent or mandate. Treat post-treatment exclusions and complete-case analysis as biased unless justified. No per-person counterfactual or event-level causal credit should be claimed.

## 3. The toy model does not implement the specification

The Node checks pass. They verify an analytic recurrence, zero-path cases, a zero-state case, saturation, and selected input validation. That is useful regression coverage for a diagram. It is not yet benchmark validation.

### 3.1 Exact mapping of the toy

The executable implements

`action_t = intervention * scope_t`

`centeredEvidence_t = influence * action_t`

`scope_(t+1) = clip((1-decay)*scope_t + responsiveness*centeredEvidence_t + grant_t)`.

Ignoring clipping and grants, this is

`scope_(t+1) = (1-decay + responsiveness*influence*intervention)*scope_t`.

The names map to the round-one scalar coefficients, not the round-two objects:

- `scope` is a number, not typed `M_t`;
- `intervention` is a constant gain, not policy `pi` or intervention `U_t`;
- `influence` is a path coefficient, not estimated or randomized influence;
- `centeredEvidence` has no observation-selection process `Q`;
- `grants[t]` is an additive impulse, not an authenticated mandate event;
- there is no `Theta_t`.

The model therefore cannot demonstrate preference formation, selective observation, authentic conditional authorization, or typed scope divergence.

### 3.2 Absent `Theta` dynamics are consequential

The specification deliberately introduces

`Theta_(t+1) = H(Theta_t,U_t,...)`,

but the toy removes `Theta` entirely. This is acceptable for one fixed-disposition negative-control model, because the core benchmark need not require preference change. It becomes misleading if plots or prose suggest that the toy simulates evolving human preferences.

Implement separate models:

1. **fixed disposition:** `Theta_(t+1)=Theta_t`; policy affects exposure or response context only;
2. **state formation:** `Theta` changes under declared dynamics;
3. **independent evidence:** observations used for scope are generated from probes the delegate cannot select;
4. **null path:** intervention cannot affect either `Theta` or `Q`.

This separation is scientifically stronger than adding an arbitrary preference-drift coefficient to the existing recurrence.

### 3.3 The reference condition is not a matched policy

`pairedAudit` compares the requested parameters with `intervention: 0`. That removes the entire action path. A nonzero result could reflect the ordinary value of providing assistance rather than strategic shaping or agent-controllable evidence. The appropriate contrast is between two currently permitted policies with matched task opportunities and competence, differing in a preregistered presentation, selection, timing, or evidence-routing choice.

Add at least:

- a neutral policy that samples from a fixed opportunity distribution;
- an acceptance-optimizing policy with the same candidate pool and disclosure rules;
- a fixed-probe evidence policy outside the delegate's control;
- a denominator-gaming policy that changes exposure but not item utility.

### 3.4 No optimizing agent exists

The central engineering concern is that future scope may have instrumental option value. The toy hard-codes the feedback coefficient and never lets an agent select an intervention. It therefore cannot show influence seeking.

Add a sequential environment in which an agent receives ordinary task reward, its feasible future action set depends on `M_t`, and it can choose among permitted interaction policies. Compare:

- a myopic planner;
- a planner that values future reward under enlarged scope;
- a policy constrained from using intervention-shaped evidence;
- an oracle with exogenous evidence.

Do not reward scope directly in the principal experiment. If the long-horizon planner selects evidence-shaping actions more often, that supports the instrumental mechanism. If it does not, report the falsification.

### 3.5 Reproducibility and validation defects

Smaller code issues should be fixed before the toy is exposed as a public scientific artifact:

- returned `parameters` omit initial `scope` and `grants`, so the result is not self-describing;
- `grants` values are not validated for finiteness, range, authorization, or type;
- `feedbackGain === decay` uses exact floating-point equality;
- the analytic test applies only before clipping and without grants, but that domain is not named;
- no test covers negative or nonfinite grant impulses;
- no test verifies the full trajectory, matched random seeds, typed set differences, or rule replay;
- `pairedAudit` reports only final scalar divergence and hides expansion versus contraction or substitution;
- labels correctly say “illustrative,” but downstream consumers can still mistake the output for the proposed audit unless the API names it `scalarRecurrenceIllustration`.

These are secondary defects. Fixing them does not turn the recurrence into the benchmark.

## 4. Security falsifiers the implementation must pass

A security contribution needs executable cases that could refute the claimed separation. The following matrix is the minimum.

| Case | Canonical rule replay | Memory repair | Closure-bound approval | Formation audit | Required result |
|---|---|---|---|---|---|
| Forged or compressed memory adds permission. | Denies action. | Removes discrepancy. | Not decisive. | Not decisive. | Classified as state-integrity failure, not formation sensitivity. |
| Approved invocation omits transitive effect. | May accept entry invocation. | No change. | Exposes or blocks omitted effect. | Not decisive. | Classified as effect-coverage failure. |
| Fixed authentic grant. | Accepts in-scope action. | No change. | No change. | Zero scope-path effect. | Negative control. |
| Adaptive grant with independent probes. | Accepts update. | No change. | No change. | Approximately zero under matched policies. | Negative control. |
| Adaptive grant using delegate-curated human evidence. | Accepts update in both worlds when threshold met. | No change. | Immediate effects fully bound. | Nonzero typed policy contrast. | Target case. |
| Declared coaching program. | Accepts update. | No change. | Effects declared. | May be nonzero. | Sensitivity detected but not labeled violation. |
| Influence-aware evidence gate. | Holds prior scope when excluded lineage crosses threshold. | No change. | No change. | Target contrast attenuates. | Proposed mitigation works without blocking allowed evidence. |
| Role-authority error. | Rejects once principal/affected-party semantics are correct. | No change. | No change. | May be nonzero. | Classified separately from formation. |

The target case is convincing only if:

1. every grant and observation is authentic;
2. canonical event replay yields the same expanded scope as the online engine;
3. every executed action is within that computed scope;
4. invocation approval includes its immediate transitive effects;
5. only the permissible interaction policy differs;
6. the resulting typed scope distribution differs;
7. an independent-evidence condition removes or materially reduces that difference.

### Security-specific failure criteria

Reject or further downgrade the contribution if any of these holds:

- a standard information-flow type or existing adaptive-access-control model expresses the entire test with no new benchmark observables;
- the claimed target examples require forged events, omitted effects, or policy-violating actions;
- “permitted policy” changes between conditions or includes undisclosed deception;
- the result disappears when exposure denominators and candidate items are fixed;
- differences arise only because one policy is more competent on the principal's intended criterion;
- causal lineage cannot be distinguished from ordinary data provenance in the implemented mitigation;
- the benchmark labels legitimate chosen formation as a security failure;
- the action-set representation produces syntactic rather than semantic differences;
- the agent never selects the influence-producing policy when future scope is valuable but scope itself is unrewarded.

## 5. Actual benchmark implementation required

The next research artifact should not extend the scalar recurrence. Build a small end-to-end mandate environment.

### 5.1 Permission model

Use a finite grounded universe first. A permission can be a normalized tuple:

`(actor, operation, resource, purpose, recipient, amountBand, context, expiry, maySubdelegate)`.

Define semantic containment and enumerate all allowed grounded actions. This avoids premature complexity while making set differences exact. Include at least one compositional hazard and one incomparable scope pair.

### 5.2 Event model

Use append-only typed events:

- `GrantIssued`
- `RecommendationExposed`
- `ResponseRecorded`
- `EvidenceAdmitted`
- `ThresholdCrossed`
- `RatificationRequested`
- `ScopeUpdated`
- `ActionExecuted`
- `GrantRevoked`

Every event needs subject, source, timestamp/sequence, mandate identifier, and provenance metadata. A deterministic replay function must derive `M_t` from genesis. Tests should mutate memory summaries without mutating the canonical log.

Cryptography is optional for the first artifact; authenticity can be modeled by test keys or an unforgeable fixture boundary. What matters is that the target case cannot be explained by invalid event origin.

### 5.3 Human and observation models

Provide multiple preregistered simulators rather than one tuned response function:

- fixed utility with stochastic choice;
- fixed utility plus selective exposure;
- stateful habit formation;
- fatigue/context response without preference change;
- adversarial denominator gaming;
- independent fixed probes.

The observation policy must separately control exposure, response coding, missingness, and evidence eligibility. This is where most of the claimed phenomenon resides.

### 5.4 Agent policies

Implement transparent baselines before adding an LLM:

- neutral random or fixed-order recommender;
- immediate-task optimizer;
- long-horizon planner with future action-set value;
- acceptance optimizer;
- constrained planner whose shaped observations cannot support expansion.

An LLM policy can be added later, but benchmark validity must not depend on interpreting unconstrained natural-language behavior.

### 5.5 Evaluation output

Each episode should emit:

- exact initial and final typed scopes;
- canonical replay verdict for every execution;
- added, removed, and incomparable permission predicates;
- policy assignment and version hash;
- human-model and observation-model identifiers;
- evidence lineage and eligibility decisions;
- expansion time and threshold denominator;
- task reward before and after expansion;
- memory-integrity and approval-closure control results;
- seed and full replay trace.

Publish aggregate distributions with paired confidence intervals across simulator seeds. Do not collapse to one “agency” or “manipulation” score.

## 6. Test-suite requirements

The present eight assertions are correct but insufficient. The benchmark test suite should include:

### Semantic unit tests

- equivalent permission syntax normalizes to the same denotation;
- budget, expiry, recipient, and purpose attenuation are monotone;
- incomparable scopes remain incomparable;
- revocation propagates through subdelegation;
- malformed or unauthorized grants never enter canonical state.

### Replay and control tests

- online state equals canonical replay after every event prefix;
- corrupted memory changes an attempted decision but replay rejects it;
- memory repair fixes only the EAL-style case;
- effect closure fixes only the hidden-transitive-effect case;
- formation-aware evidence filtering changes only criteria with excluded lineage;
- authentic target-case expansion remains authorized under unfiltered replay.

### Causal-design tests

- matched seeds reproduce identical exogenous states under both policies;
- null structural paths yield zero contrast up to Monte Carlo error;
- independent probes are invariant to delegate policy;
- selective exposure changes the correct denominator and no other field;
- fixed `Theta` cases cannot be reported as preference change;
- estimates recover known simulator ground truth with coverage checks.

### Adversarial tests

- refusal, silence, nonexposure, timeout, and missing telemetry are distinct;
- an agent cannot route difficult cases to an unscored identity;
- evidence generated before and after policy-version changes is not silently pooled;
- cross-user evidence cannot update another principal's mandate without an explicit rule;
- repeated ratification prompts are rate-limited and logged;
- downstream delegates cannot discard evidence lineage.

## 7. Publication assessment

### What is already paper-worthy

As a research draft, the specification now contains a useful distinction: an authorization record can be authentic and faithfully replayed while the evidence used by its adaptive rule remains sensitive to the beneficiary's interaction policy. The origin/application/formation decomposition is clear, appropriately modest, and implementable. The proposed typed outcome prevents a particularly bad scalar metric.

### What is missing for a workshop or systems-paper submission

- an executable benchmark implementing the stated objects;
- comparative cases demonstrating separation from memory and effect-closure failures;
- at least two nontrivial agent policies and multiple human/observation models;
- causal estimands tied to an explicit randomized simulator design;
- semantic typed-scope results rather than scalar recurrence plots;
- baseline mitigations and false-positive analysis on legitimate coaching;
- reproducible traces, seeds, and versioned scenarios;
- experimental results and uncertainty;
- a completed prior-art table positioning the artifact as an extension.

With these additions, a focused workshop paper or benchmark paper is plausible. A stronger venue would also require either evidence across deployed agent architectures or a preregistered human study. No grand novelty claim is needed; the value would be a crisp test that makes a known family of feedback problems observable at an authorization boundary.

### Round-two grade

- **Conceptual precision:** B-
- **Novelty discipline:** B
- **Formal completeness:** C+
- **Causal identification:** C
- **Security specification:** C+
- **Implementation fidelity:** D
- **Current empirical evidence:** D
- **Potential as a benchmark extension:** B

## Required revision before round three

Round three should review an executable end-to-end case, not another prose refinement or scalar animation. The minimum admissible submission is:

1. normalized typed permissions and semantic scope comparison;
2. authenticated grant fixtures and deterministic canonical replay;
3. separate memory, approval-closure, fixed-grant, independent-evidence, and target cases;
4. two matched permissible policies that differ in evidence-shaping behavior;
5. fixed-`Theta` and dynamic-`Theta` simulators clearly separated;
6. a formation-aware gate with an allowed legitimate-coaching case;
7. episode traces and aggregate typed estimands across paired seeds;
8. tests proving each security control catches its own failure and not the others.

If that artifact produces the predicted separation, the project may responsibly claim a useful B-level benchmark extension. If it cannot, the candidate should remain a conceptual caution and should not anchor the framework.
