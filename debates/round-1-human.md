# Round-one novelty court: human-sciences review

Reviewer: one independent reviewer agent simulating eight disciplinary
perspectives. This is an adversarial review, not eight independent reviews.

Artifact reviewed: `research/candidate-framework-v0.md`

Review date: 2026-10-04

Recommendation: **major revision; retain as a B-candidate, not an A-claim**

## Verdict

The broad thesis is derivative:

> An adaptive system can alter the human behavior, preferences, workload, or
> evidence to which that system later adapts.

Technological mediation, constructed and endogenous preferences, recommender
feedback, performative prediction, adaptive automation, and closed-loop
human–machine control already establish this family of claims.

The narrower proposal is not yet shown to exist in the same form in prior art:

> A principal authentically preauthorizes a rule that expands a delegate's
> action scope when a behavioral criterion is met; the delegate's permissible
> interventions causally affect that criterion; every grant record and measured
> event is genuine; and an audit estimates how much the delegate's intervention
> policy changed the resulting scope trajectory.

That combination is a plausible **B-level extension**: a novel formulation,
audit target, and benchmarkable application assembled from known mechanisms. It
is not presently an A-level discovery. The paired policy comparison does not by
itself create novelty—it is a standard causal/yoked-control design. Its value is
that it directs causal estimation at **authority acquisition under authentic
conditional delegation**, a target adjacent literatures usually treat as fixed,
exogenous, or instrumentally adjusted for performance.

Current grade: **C+ / B-**. It can earn a defensible **B** if the authors narrow
the claim, replace the scalar scope model, define the causal estimand, implement
a benchmark, and stop implying that positive divergence establishes
manipulation or illegitimacy.

## Claim reconstructed without favorable vocabulary

The candidate is easiest to assess as five separate statements:

1. A person can issue a valid standing instruction whose conditions govern
   future delegation. **Known.** This is conditional authorization,
   precommitment, and adaptive/adjustable autonomy.
2. An artificial delegate can affect a person's subsequent behavior or state.
   **Known.** This follows from technological mediation, persuasion, choice
   architecture, automation, and ordinary causal interaction.
3. That behavior or state can be an input to a rule reallocating functions or
   authority between person and system. **Known.** Adaptive automation has long
   allocated functions using workload, vigilance, performance, physiological
   signals, and context.
4. The resulting evidence can be entirely accurate and the original standing
   instruction entirely authentic while remaining endogenous to the
   delegate's policy. **A sharp conjunction, but largely derivable** from
   performative prediction and adaptive automation.
5. Systems should audit this endogeneity by comparing authority trajectories
   under paired permissible intervention policies. **Potential B contribution**
   if operationalized as a distinct causal audit with typed permissions and
   explicit baselines.

The project should defend statement 5, using statement 4 to identify the audit
target. It should not market statements 1–3 as new.

## Closest prior art and equivalence search

| Prior-art family | Proposition already established | Collision with candidate | Residual difference |
|---|---|---|---|
| Adaptive automation | Function allocation and decision authority shift dynamically using operator workload, performance, human state, and context. | The candidate's `y_t -> a_(t+1)` edge is the defining adaptive-automation pattern. | Most work aims to regulate workload or performance, not audit a delegate's contribution to its own expanding permission set. |
| Adjustable autonomy and delegation theory | Agents can transfer control and, in some accounts, restrict or expand received delegation. | Dynamic scope and contractor/client delegation predate current agents. | The searched work did not clearly isolate accurate, delegate-caused behavioral evidence under an authentic pregrant as a governance failure mode. |
| Biocybernetic closed-loop control | Automation changes workload/vigilance, those human-state signals trigger later automation, and yoked controls compare adaptive with non-adaptive policies. | The causal loop and paired-policy experimental structure are known. | Authority acquisition as the audited outcome is narrower than workload regulation. |
| Performative prediction | Deployment changes the distribution or outcome the model predicts; retraining can stabilize on system-induced evidence. | The delegate acts on the world, affects `y`, and uses `y` downstream. | The output is authorization scope rather than predictive risk or model parameters. |
| Preference construction and pollution | Recommendations influence later preferences/ratings used as ground truth. | Accurate later behavior can partly be a residue of earlier intervention. | The candidate uses behavior to confer jurisdiction, not just to improve recommendations. |
| Technological mediation | Technologies co-shape perception, action, and moral practice. | The philosophical observation that assistance shapes the assisted person is established. | Mediation theory does not supply this specific scope-sensitivity audit. |
| Adaptive preferences and relational autonomy | Endorsement and satisfaction can arise within constrained or socially shaped conditions; formal choice does not settle autonomy. | “Genuine” acceptance does not settle whether the authority process is legitimate. | The candidate deliberately holds authenticity open and measures causal sensitivity rather than declaring false consent. |
| Reward/feedback tampering and causal incentives | Agents may have incentives to intervene in reward inputs or human feedback; causal influence diagrams locate intervention incentives. | Both concern an agent influencing a signal that changes its future power or objective. | Here the records remain true, the rule operates as specified, and no reward channel or grant is corrupted. The concern is governed self-expansion, not falsification. |
| Continuous/risk-based authorization | Current posture and behavioral/device signals can continually change access. | Dynamic authorization from observed signals is normal security engineering. | Security systems usually ask whether signals are trustworthy, not whether the authorized actor causally produced the valid signal through permissible behavior. |

### High-relevance sources

- Inagaki, “Adaptive Automation: Design of Authority for System Safety”
  (2003): dynamic function allocation based on environment, operator workload,
  and performance, explicitly framed as authority design,
  [DOI 10.1016/S1474-6670(17)32389-3](https://doi.org/10.1016/S1474-6670%2817%2932389-3).
- Castelfranchi and Falcone, “Towards a Theory of Delegation for Agent-Based
  Systems” (1998): levels of delegation, control, help, and conflicts arising
  when a contractor acts beyond the client's request to help the client,
  [DOI 10.1016/S0921-8890(98)00028-1](https://doi.org/10.1016/S0921-8890%2898%2900028-1).
- Falcone and Castelfranchi, “Levels of Delegation and Levels of Help for Agents
  with Adjustable Autonomy” (1999): the contractor may restrict or expand its
  received delegation,
  [AAAI technical report PDF](https://cdn.aaai.org/Symposia/Spring/1999/SS-99-06/SS99-06-005.pdf).
- Falcone and Castelfranchi, “The Human in the Loop of a Delegated Agent”
  (2001): adjustable social autonomy as bilateral runtime modification of the
  assigned/received delegation,
  [DOI 10.1109/3468.952715](https://doi.org/10.1109/3468.952715).
- Scerri, Pynadath, and Tambe, “Towards Adjustable Autonomy for the Real World”:
  conditional transfer-of-control strategies selected through an MDP,
  [arXiv:1106.4573](https://arxiv.org/abs/1106.4573).
- Raeth and Reising, “Transitioning Basic Research to Build a Dynamic Model of
  Pilot Trust and Workload Allocation” (1999): a continuous adaptive process
  allocates workload using predicted pilot reaction,
  [DOI 10.1016/S0895-7177(99)00154-5](https://doi.org/10.1016/S0895-7177%2899%2900154-5).
- Haarmann, Boucsein, and Schaefer, “Combining Electrodermal Responses and Cardiovascular
  Measures for Probing Adaptive Automation During Simulated Flight” (2009):
  closed-loop automation changes the operator state used to govern automation
  and compares it with yoked controls,
  [DOI 10.1016/j.apergo.2009.04.011](https://doi.org/10.1016/j.apergo.2009.04.011).
- Bernabei and Costantino, “Adaptive Automation: Status of Research and Future
  Challenges” (2024): review of dynamic authority allocation by an “Allocation
  Authority Agent,” human performance, and human attributes,
  [DOI 10.1016/j.rcim.2024.102724](https://doi.org/10.1016/j.rcim.2024.102724).
- Perdomo et al., “Performative Prediction” (2020): deployed decisions change
  the outcome distribution against which the predictor is evaluated,
  [PMLR primary record](https://proceedings.mlr.press/v119/perdomo20a.html).
- Krauth, Wang, and Jordan, “Breaking Feedback Loops in Recommender Systems with
  Causal Inference” (2022 preprint): causal intervention distributions separate
  recommender effects from observed user ratings,
  [arXiv:2207.01616](https://arxiv.org/abs/2207.01616).
- Adomavicius et al., “Recommender Systems, Ground Truth, and Preference
  Pollution” (2022): system recommendations contaminate later preference data,
  [DOI 10.1002/aaai.12055](https://doi.org/10.1002/aaai.12055).
- Everitt et al., “Reward Tampering Problems and Solutions in Reinforcement
  Learning” (2021 version): causal influence diagrams analyze intervention
  incentives over reward functions and inputs,
  [arXiv:1908.04734](https://arxiv.org/abs/1908.04734).
- Cohen et al., “Advanced Artificial Agents Intervene in the Provision of
  Reward” (2022): an agent may intervene in human behavior observed as evidence
  about human goals,
  [DOI 10.1002/aaai.12064](https://doi.org/10.1002/aaai.12064).
- NIST SP 800-37 Rev. 2: initial, ongoing, and reauthorization based on monitored
  evidence,
  [official PDF](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-37r2.pdf).
- UK NCSC Zero Trust guidance: continuous, signal-driven authorization and
  risk-based access policies,
  [official guidance](https://www.ncsc.gov.uk/collection/zero-trust/architecture-design-principles/use-policies-to-authorise-requests).

No inspected source stated the exact audit proposition in the candidate:
compare authentic authority-scope trajectories under permissible intervention
policies of the same beneficiary delegate. Absence from this search is evidence
for a B candidate, not proof of A-level novelty.

## Prosecution

### Count 1 — The feedback loop is standard adaptive automation

The candidate presents `a -> u -> y -> a'` as if authority feedback were newly
visible. Adaptive automation already treats function allocation as a closed-loop
control problem. Automation changes operator task load and state; measured state
then changes the automation level. Work dating from the 1990s implemented
continuous trust/workload allocation. The current algebra is a one-dimensional
linearization of that known structure.

**Finding:** guilty. The loop and stability condition are D-level prior art.

### Count 2 — “Authentic” does too much work

The manuscript contrasts genuine authorization with forged grants, then risks
letting “authentic” imply normatively clean. A pregrant can be procedurally valid
yet poorly informed, socially coerced, overbroad, stale, or issued without
understanding the delegate's influence over its trigger. Conversely, a fully
informed person may deliberately choose a behavior-shaping program whose success
expands the assistant's role.

Causal influence neither voids authorization nor validates it. Authenticity,
causal endogeneity, and legitimacy are different predicates.

**Finding:** guilty unless the framework uses three separate tests.

### Count 3 — The paired test is established method, not intellectual discovery

Freezing initial conditions and replaying two policies is the potential-outcomes
idea in simulator language. Randomized interventions, A/B tests, twin studies,
yoked controls, and off-policy evaluation already compare policies. The 2009
adaptive-automation study above used yoked controls to separate adaptive effects.

**Finding:** guilty. Novelty can lie in the estimand and benchmark target, not in
pairing.

### Count 4 — The scalar scope variable conceals the morally relevant object

Permission scope is not naturally a number. Read-email, send-email, buy-groceries,
dispense-medication, transfer-money, and speak-for-user are only partially
ordered. A scalar can imply false comparability, cancel a dangerous addition
against a harmless removal, and make `clip(..., 0, 1)` look more substantive
than it is.

**Finding:** guilty. Mutation 10 must become core.

### Count 5 — The counterfactual human cannot be frozen outside a simulator

Human state is path-dependent. Replaying a different policy changes learning,
expectation, fatigue, and the meaning of later actions. Within-person crossover
experiments have carryover; between-person trials estimate population effects,
not an individual's counterfactual trajectory. “Freeze user state” is therefore
valid only in a structural simulator or at a branch point, not a deployment
promise.

**Finding:** guilty. The candidate acknowledges this partly but still speaks too
cleanly about attribution.

### Count 6 — The engineering rule overreaches

“Expansions grounded solely in self-created behavioral signals require renewed
ratification” is not derived by the sensitivity metric. A person may explicitly
preauthorize a fitness coach to increase challenge when adherence improves, or
an accessibility system to take more tasks when fatigue rises. Requiring
ratification at every intended transition can defeat the program's purpose.

**Finding:** guilty. Positive divergence is a review trigger, not a verdict.

### Count 7 — Individual consent hides organizational power

The principal may be an employer, platform, insurer, school, family member, or
state rather than the person whose behavior supplies `y`. A worker's clicks can
be accurate and an organization's pregrant valid while authority expands over
the worker without the worker ever being the principal. Ownership, baseline
selection, and appeal rights matter more than grant provenance in such cases.

**Finding:** guilty. The model needs distinct affected-person, principal,
delegate, and rule-governor roles.

## Defense

The defense has one viable irreducible point.

Security and delegation designs commonly separate valid from invalid grants.
Adaptive-automation designs commonly optimize when authority should shift.
Performative-prediction designs commonly correct models for data they induce.
The candidate asks a cross-cutting governance question that none of those
framings necessarily forces:

> How sensitive is a delegate's future jurisdiction to the delegate's own
> policy, when jurisdiction changes through a valid standing rule and accurate
> behavioral evidence?

That question yields a concrete engineering separation:

1. **Provenance test:** Was the standing rule and each update applied as
   authorized?
2. **Endogeneity test:** How much did the delegate's permissible policy cause
   the update criterion and resulting scope to differ?
3. **Legitimacy test:** Did the principal and affected parties authorize that
   kind and magnitude of influence, with appropriate contestability and
   renewal?

A system can pass the first test and fail the second; pass the first two and
still fail the third; or pass all three. This triage changes an implementation
decision: cryptographic grant integrity cannot be used as evidence that an
adaptive authorization process is influence-neutral or legitimate.

That is a useful B-level extension if converted from prose into an executable
test suite.

## Simulated disciplinary perspectives

### Historian

The proposal undercredits adaptive automation and adjustable autonomy. “Who does
what, and when?” has been an authority-design problem for decades. Dynamic
function allocation already monitors performance, workload, vigilance, and
physiology; contractor-side expansion of delegation appears explicitly in 1999.
The history must begin there, not with contemporary LLM agents.

Retain only the claim that earlier work generally treated state-responsive
authority adjustment as a way to improve joint-system performance, whereas this
project audits whether the delegate caused the state that legitimates expansion.

### Philosopher

The manuscript correctly refuses to infer harm from causal history, but its
engineering consequence quietly reintroduces that inference. People often
authorize processes meant to change them: therapy, education, religious
discipline, medication, savings commitments, and training. An intervention can
help produce the later self who endorses it without thereby invalidating that
endorsement.

Replace “authentic adaptive delegation” with the more neutral “validly
preauthorized adaptive delegation.” Reserve “authentic” for a separately argued
account of reflective endorsement and independence. State plainly that the
audit measures causal sensitivity, not autonomy.

### Cognitive scientist

`theta_t` cannot remain fixed in the motivating case. Habits, skills,
self-efficacy, trust, fatigue, and preferences change through interaction. The
observable `y_t` is also a noisy measurement whose meaning may change across
policies. The current recurrence can demonstrate amplification but cannot
distinguish direct criterion gaming, genuine human learning, measurement change,
and latent-state change.

Require a causal graph with at least latent human state, measurement process,
intervention, immediate outcome, scope update, and carryover. Pre-register
removal and transfer measures. Never claim an individual-level counterfactual
from a population experiment.

### Sociologist

The dyadic human–assistant model makes institutional authorship disappear. Who
writes the adaptive rule, owns the agent, selects `theta_ref`, defines success,
and benefits from expanded scope? A corporation can truthfully record every
click and still manufacture acceptance through defaults, work queues, or lack of
alternatives. The most consequential “principal” may not be the affected human.

Add `P` (principal), `H` (affected human or population), `D` (delegate), and `G`
(rule governor/auditor) as separable roles. Include organizational cases.

### Anthropologist

The framework assumes delegation originates in an individual act of will. In
many settings, household authority, care, property, and religious practice are
role-structured and negotiated among several people. A valid click by one person
may not settle authority over shared resources or obligations. “Behavioral
signal” also strips conduct of its local meaning.

Add collective and role-based grants. Require local interpretation before
turning observables such as compliance, deference, silence, punctuality, or
family agreement into authority criteria.

### Religious scholar

Precommitment and submission are not automatically autonomy failures. They can
be central to religious discipline. At the same time, interpretive authority may
be nondelegable or restricted to qualified persons even when a user wants an
agent to assume it. The candidate needs a jurisdiction concept broader than
individual preference.

Add a counterexample in which the person deliberately authorizes a practice to
reshape desire, and another in which personal authorization is insufficient
because the role's authority is institutionally constituted.

### Ordinary person

The algebra does not yet answer “when should I care?” Use one plain scenario:

> I tell a budgeting assistant that after eight weeks of following my plan it
> may move from suggesting transfers to making them. It controls reminders,
> defaults, plan difficulty, and which deviations I see. Every recorded action
> is mine and the eight-week rule is mine. Would the scope expansion have
> happened under another acceptable coaching policy, and did I mean to
> authorize this much influence over the trigger?

Then show the three tests and the actual user choices: continue, narrow eligible
interventions, require ratification, choose another auditor, or revoke.

### Anti-slop editor

Delete or avoid these phrases unless formally defined:

- “causally circular” — use “endogenous authorization evidence” or draw the
  graph;
- “authentic rule” — validity is observable; authenticity is disputed;
- “self-created behavioral signal” — the human co-creates the behavior;
- “influence-to-scope path” as a grand concept — it is a causal path;
- “delegation divergence” as a flagship name — keep it provisional and attach
  the policy pair, horizon, and scope-distance definition every time.

The memorable contribution is the clean three-test distinction, not new
terminology.

## Required revisions to the candidate framework

### 1. Replace the opening claim

Replace:

> An adaptive delegation policy may be security-correct yet causally circular...

With:

> A valid standing delegation rule can use accurate but endogenous evidence.
> When the delegate's permissible policy affects the behavioral criterion that
> expands its future action set, grant-integrity checks do not reveal how much
> of the expansion is policy-caused. We propose an authority-sensitivity audit
> that compares scope trajectories under specified admissible intervention
> policies. The audit detects causal dependence; it does not by itself establish
> manipulation, harm, or invalid consent.

### 2. State the novelty grade in the artifact

Add:

> Proposed-here status: B-candidate (new audit target and benchmarkable
> extension). Dynamic authority allocation, closed-loop human-state adaptation,
> performative feedback, and paired intervention designs are known.

### 3. Separate the three judgments

Make these explicit outputs rather than one “authority gate”:

- `provenance_valid`: rule and update authenticity/integrity;
- `scope_policy_effect`: causal estimate or identified bound;
- `legitimacy_status`: governed human/institutional judgment with reasons,
  affected parties, appeal, and expiry.

No value of one field entails another.

### 4. Replace scalar scope with typed permissions

Let `A_t^pi` be the action set authorized at time `t` under intervention policy
`pi`. Report at minimum:

- additions `A_T^pi1 \ A_T^pi0`;
- removals `A_T^pi0 \ A_T^pi1`;
- action-class severity and reversibility separately;
- time of acquisition, expiry, and downstream subdelegation.

A scalar distance may be supplied only with its weighting rule and sensitivity
analysis. Do not allow additions and removals to cancel.

### 5. Expand the causal model

The graph must include:

- delegate intervention `U_t`;
- latent human state `Theta_t`;
- observed criterion `Y_t`;
- measurement/selection mechanism `M_t`;
- authorized action set `A_t`;
- exogenous context `X_t`;
- principal, affected human, delegate, and governor roles;
- direct `U_t -> Y_t`, mediated `U_t -> Theta_(t+1) -> Y_(t+1)`, and
  selective-observation `U_t -> M_t -> Y_t` paths.

The linear recurrence may remain as a toy amplification example, explicitly
labelled inherited control theory rather than formal novelty.

### 6. Define the paired-policy estimand

For simulator state `s_0`, horizon `T`, admissible policy pair `(pi_1, pi_0)`,
and scope-distance function `d`, define:

`Delta_T(s_0; pi_1, pi_0, d) = d(A_T^pi1, A_T^pi0)`.

Every report must include the pair, horizon, admissibility constraints, and `d`.
For human studies, define a population average treatment effect or bounds; do
not write as though the same human trajectory can be replayed. Use several
normatively defensible comparator policies because the baseline determines the
result.

### 7. Change the engineering consequence

Replace the categorical renewed-ratification rule with:

> Material policy sensitivity triggers review against the preauthorized
> influence policy. Renewal is required when the observed influence channel,
> magnitude, affected party, action class, or duration was outside that policy;
> when causal identification is too weak for the stakes; or when the grant's
> contestability/expiry conditions require it. Deliberately preauthorized
> behavior-shaping programs may continue when those conditions are met.

### 8. Add four decisive counterexamples

1. **Intended formation:** a person chooses coaching designed to build habits
   and explicitly ties later scope to those habits. Positive sensitivity is
   expected and acceptable.
2. **Benefit without jurisdiction:** an agent improves behavior but the standing
   rule covers advice only; no scope expansion occurs.
3. **Valid principal, wrong affected party:** an employer validly authorizes a
   rule that expands monitoring from worker behavior; employee legitimacy is
   unresolved.
4. **Invariant criterion:** an external licensure result unaffected by the
   delegate governs scope; paired divergence is zero.

### 9. Build the benchmark before naming a principle

Minimum benchmark matrix:

| Dimension | Values |
|---|---|
| Evidence integrity | forged / accurate |
| Evidence endogeneity | exogenous / policy-caused |
| User awareness | unaware / general awareness / channel-specific awareness |
| Standing authorization | absent / valid narrow / valid broad |
| Effect | scope contraction / lateral change / expansion |
| Beneficiary | user / delegate owner / mixed |
| Affected party | principal / third party / collective |
| Ratification | none / periodic / event-triggered |

The benchmark succeeds if systems that only check security provenance pass the
accurate-endogenous cases while the proposed audit distinguishes them, and if
the audit does not label intended formation as illegitimate.

## Publication decision

**Reject as a central philosophical breakthrough in current form. Invite major
revision as a technical-governance contribution.**

The work becomes citable if it provides:

1. a clear causal graph and typed-scope formalization;
2. a benchmark containing genuine pregrants and entirely accurate records;
3. causal estimates or bounds under explicitly admissible policy pairs;
4. the provenance/endogeneity/legitimacy separation;
5. evidence that existing authorization checks miss the benchmarked condition;
6. a user-facing decision procedure that distinguishes intended formation from
   ungoverned self-expansion.

Without those elements, the candidate is a good synthesis of performativity,
adaptive automation, and autonomy theory. With them, it can plausibly be a
B-grade extension: **an audit for endogenous authorization evidence in adaptive
delegation**.
