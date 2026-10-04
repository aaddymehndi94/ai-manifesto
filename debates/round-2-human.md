# Round-two human-sciences review

Reviewer: AI reviewer. No human review, interview, survey response, or expert
endorsement is represented here.

Artifact reviewed: `framework/audit-specification.md`, version 0.2.0

Review date: 2026-10-05

Recommendation: **publishable as a research specification after moderate
revision; not yet publishable as a validated audit method**

## Decision

The revision earns a defensible **B-level novelty claim** if stated narrowly:

> Existing grant-integrity and rule-conformance checks can accept an adaptive
> delegation update even when the delegate's permissible policy causally
> affects the accurate human-behavior evidence used to update its future typed
> action scope. A paired-policy causal audit can estimate that residual
> sensitivity without treating it as a measure of manipulation, consent,
> welfare, or legitimacy.

This is a new audit target and benchmark composition, not a new theory of
autonomy, delegation, causal inference, or control. The specification now says
so clearly. Its B status remains provisional until an implementation shows all
of the following in one environment:

1. the conditional grant and observations pass integrity checks;
2. the executor reproduces the granted update rule exactly;
3. ordinary authorization and effect-history controls accept the update;
4. paired admissible policies produce materially different typed scopes;
5. a formation-aware control detects or governs that difference;
6. intentionally chosen formation is not misclassified as illegitimate.

The exact B claim is therefore credible as **proposed-here**, but not yet
demonstrated. “Candidate contribution is a benchmark class” should be revised
to “candidate contribution is a proposed benchmark class” until executable
cases and results exist.

## Response to round one

| Round-one defect | Status in version 0.2.0 | Remaining work |
|---|---|---|
| Scalar scope hides incomparable permissions | Resolved | Keep typed set differences primary; scalar weights remain secondary. |
| Human state incorrectly fixed | Resolved in structural model | Define feasible identification assumptions for each study. |
| Observation selection omitted | Resolved through `Q_t` | Separate selection effects from changes in latent state empirically. |
| Principal and affected person collapsed | Resolved | Add multiparty grants, standing disputes, and collective vetoes. |
| Positive divergence treated as illegitimate | Largely resolved | Split diagnostic sensitivity from legitimacy completely in the three-question section. |
| Chosen coaching ignored | Resolved as a benchmark case and limitation | Specify what exactly was chosen, for how long, and with which review/exit conditions. |
| Paired comparison presented as method novelty | Resolved | Continue claiming novelty only for the audit target and benchmark composition. |
| Individual counterfactual overclaimed | Resolved | Address interference and attrition in social deployments. |
| Approval burden omitted | Recognized | Operationalize burden and compare review designs. |
| Cultural authority assumed universal | Recognized in prose | Convert the warning into benchmark cases and study procedures. |

The revision is intellectually more disciplined than the candidate framework.
Its strongest move is not the causal loop. It is the typed separation among a
valid grant, correct rule execution, and endogenous evidence about a human.

## The remaining diagnostic–legitimacy conflation

The specification correctly says:

> Divergence measures policy sensitivity. It does not measure coercion,
> welfare, competence, or consent validity.

But the third audit question currently asks both:

> How sensitive are the rule's jurisdictional inputs to the delegate's
> permissible interventions, **and did the principal govern that path?**

These are different kinds of question.

- Sensitivity is an empirical or formal diagnostic. It can be estimated,
  bounded, or reported unknown.
- Governance is a documentary and institutional question about whether an
  influence channel was within a valid policy.
- Legitimacy is a normative and political judgment that can remain contested
  even when sensitivity and governance are known.

The current formulation risks letting a technical tool certify legitimacy by
checking that a principal filled the proposed fields. That is especially unsafe
when the principal is not the measured person, when affected parties disagree,
or when the principal's entitlement is culturally or legally contested.

### Required replacement

Use four outputs:

1. **Evidence integrity.** Are the grant records and observation records
   attributable, unaltered, and correctly sourced? An accurate observation can
   still be selected or policy-caused.
2. **Rule conformance.** Did the system apply the declared update rule to the
   declared evidence schema? Avoid claiming a “complete relevant event and
   effect history”; completeness is unavailable without a finite declared
   schema.
3. **Policy sensitivity.** Under specified admissible intervention policies,
   how does the typed scope trajectory change? Return an estimate, bounds, or
   unknown.
4. **Governance and legitimacy disposition.** Did the applicable people and
   institutions permit the identified influence channel, and what review,
   appeal, expiry, or prohibition follows? Record who made the judgment and
   under which authority. Do not label this output as produced by causal
   estimation.

Passing outputs 1–3 does not entail output 4. A system may also fail a local
governance policy without the research framework claiming universal moral
illegitimacy.

## Exact novelty assessment

### What is B-level

The following conjunction remains a useful, precise extension:

- the grant is genuine and validly issued under the assumed role model;
- recorded behavior is accurate rather than forged;
- the update rule is executed faithfully;
- the delegate acts only through currently permitted interventions;
- those interventions causally affect the evidence;
- the same evidence changes the delegate's future typed action set;
- the audit compares those typed action sets across declared intervention
  policies and does not infer legitimacy from a nonzero result.

Adjacent fields contain every ingredient. The contribution is the engineering
composition and its negative controls. B is the right grade: a novel audit
object and extension that can change implementation, built from known theory.

### What is not B-level

Do not claim novelty for:

- the fact that tools shape people;
- preferences or behavior being endogenous;
- dynamic function allocation;
- authentic consent being normatively insufficient;
- paired intervention or potential-outcomes methods;
- typed authorization;
- the need for cultural legitimacy;
- positive-feedback or stability analysis.

Do not call the diagnostic a detector of “self-expansion” unless the system has
an objective or learned policy that selects interventions partly for future
scope. A fixed designer-authored coaching policy can produce the same causal
pattern without an agent seeking authority.

## Chosen coaching and deliberate self-formation

Version 0.2.0 handles the central counterexample correctly: a person may choose
an intervention because they want it to change their behavior. Education,
therapy, accessibility support, religious discipline, savings commitments, and
coaching can all be intentionally formative. In those cases a positive
`Delta_r(T)` may be evidence that the program works.

The proposed boolean field—whether chosen preference formation is part of the
grant's purpose—is insufficient on its own. A defensible formative grant should
specify at least:

- the target practice or capacity, without pretending to specify the person's
  total future preferences;
- permitted intervention classes, timing, and intensity;
- which observations can count toward scope updates;
- whether the agent may select the exposure denominator or task difficulty;
- the maximum scope change and expiry;
- independent stopping conditions and withdrawal channels;
- whether the measured person, principal, and beneficiaries are the same;
- which effects require contemporaneous review despite the standing grant.

Chosen coaching is not a blanket waiver. A budgeting coach authorized to use
weekly reminders has not thereby been authorized to exploit sleep deprivation,
hide dissent opportunities, or use the resulting adherence to acquire unrelated
payment authority. The audit is most useful here as a fidelity check between
the chosen formative pathway and the pathway actually producing the evidence.

The benchmark should therefore include two positive-sensitivity coaching cases:

1. **Declared formation:** intervention class, evidence use, and bounded scope
   update match the standing formative grant. Expected disposition: permitted.
2. **Formation overreach:** the behavior change is beneficial, but the
   intervention class or acquired action type falls outside the formative
   grant. Expected disposition: review or block under the local policy, without
   describing the benefit itself as manipulation.

This pair is necessary to show that the framework audits jurisdiction rather
than expressing a presumption against self-change.

## Attention and review burden

The specification appropriately recognizes that repeated approval requests can
burden the person. That point should become a measured design constraint rather
than a sentence of caution.

Review itself belongs inside the causal system. Prompts consume attention,
interrupt work, teach response habits, and can create approval fatigue. A
delegate or provider can also choose when to request review, making review
burden another influence channel. Batching reduces interruption but can obscure
individual scope changes; immediate review improves specificity but can make
agreement habitual.

Add a **review budget** to the grant and audit report:

- maximum prompt frequency and interruption windows;
- accumulated review time;
- number and type of permissions presented per review;
- comprehension/recall check appropriate to the stakes;
- non-response semantics—never silently equate timeout with assent;
- accessibility accommodations;
- independent review option for high-impact changes;
- batching rule and maximum delay;
- expiry or safe continuation behavior when the budget is exhausted.

Compare non-prompt safeguards: hard scope caps, short expiry, random independent
audit, staged capability, cooling-off periods, and default continuation at the
old scope. The research should not presume that more consent prompts produce
more agency.

“Locally chosen” is too weak if the selection interface itself induces the
choice. Report who chose the review regime, when, what alternatives were
available, and whether changing it carries a cost.

## Cultural and institutional bias

The role separation and local-authority warning are meaningful improvements.
The specification still has a liberal-individualist default: an entitled
principal issues an authenticated event over a bounded action set, after which
legitimacy is checked through review and appeal. That model is useful for many
digital transactions; it is not a universal theory of human authorization.

### Risks

1. **Relational authority.** Household care, shared property, family decisions,
   and religious practice may involve overlapping rather than exclusive
   authority. There may be no single principal.
2. **Role-constituted limits.** A person may want to delegate an act that their
   professional, fiduciary, communal, or religious role does not entitle them to
   delegate.
3. **Meaning of behavior.** Silence, deference, punctuality, refusal, and
   acceptance have different meanings across relationships and settings. A
   technically accurate `Y_t` may not measure the construct the rule names.
4. **Neutral baseline fiction.** `pi_0` is never culturally neutral. Symmetric
   option presentation, direct refusal, and individual deliberation can
   themselves encode local norms.
5. **Unequal exit.** An appeal procedure is weak where service, employment,
   family support, or public benefits depend on accepting the agent's role.
6. **Collective effects.** One person's expanded agent can reshape shared norms,
   workloads, privacy, and bargaining power for people outside the grant.

### Required revisions

- Permit a set of principals and affected parties with scoped assent, veto,
  consultation, and nondelegable-role constraints.
- Add `authority_basis` and `contested_authority` fields rather than assuming a
  verified identity settles entitlement.
- Require construct validation for each behavioral criterion in its setting;
  record who interprets it and known alternative meanings.
- Treat baseline choice as part of the audit result. Use more than one
  admissible comparator when no uncontested neutral policy exists.
- Add collective and role-authority cases to the benchmark, including a case in
  which all event records are valid but no single party can authorize the
  resulting scope.
- For cross-cultural studies, co-design scenarios locally, test measurement
  invariance before comparing groups, and report within-site heterogeneity. Do
  not encode nationality or religion as an ethics parameter for an agent.

These changes do not require the audit to solve political legitimacy. They
prevent the tool from silently converting a narrow access-control ontology into
a universal model of consent.

## Causal and measurement issues

The estimand is substantially improved. Five details still need specification.

### 1. Subsequent ratification is a mediator

`G` appears fixed, but `F_G` also consumes later valid grants and ratification
events. If intervention policy changes the probability of later ratification,
`Delta_r(T)` may include that mediated path. That can be the desired total
effect, but it must be declared.

Report separately where feasible:

- total policy effect on final scope;
- effect through the behavioral criterion without new ratification;
- effect mediated through later ratification or review response.

The third quantity is especially important for approval-fatigue analysis.

### 2. Independence is rarely exact

The benchmark row “independent performance criterion” should say zero **in the
structural model or in expectation**. Finite samples, shared infrastructure,
hidden common causes, and measurement noise can yield nonzero estimates.

### 3. Interference is likely

In organizations and households, one person's policy changes others' workload
and behavior. Standard individual potential outcomes may violate no-interference
assumptions. Use household/team clusters, network exposure models, or state that
the estimate is unidentified.

### 4. Observation integrity differs from construct validity

A correctly signed, unaltered acceptance event may be a poor measure of trust,
competence, endorsement, or preference. Add a criterion-validity field and never
allow the integrity test to imply that `Y_t` measures the named human property.

### 5. Admissibility is normative

The policy pair is not merely a technical choice. If `pi_1` contains timing or
framing forbidden by the grant, the test demonstrates rule violation rather
than sensitivity among admissible policies. If both are permitted, the audit
reveals discretion inside the grant. Report policy admissibility under each
relevant authority, including disagreements.

## Testable study program

### Study 1 — Executable benchmark discrimination

**Claim type:** formal/design validation.

Implement every row of the benchmark matrix with an event-sourced typed
authorization system. For each case, publish the grant, event trace,
observation provenance, rule replay, intervention policy, and final action-set
difference.

Primary tests:

- ordinary provenance checks reject fabricated permission but accept the
  accurate endogenous-evidence case;
- conformance checks agree with every faithful update;
- the paired-policy audit is zero for fixed-scope and structurally independent
  controls;
- it is nonzero for curated-compliance and declared-coaching cases;
- the governance layer distinguishes allowed coaching from formation overreach.

This study is required to substantiate the B claim.

### Study 2 — Low-stakes randomized delegation experiment

**Claim type:** empirical.

Use a simulated budgeting, calendar, or shopping task with no real transfers or
purchases. Participants issue a reversible standing rule under which a
recommendation-only assistant may gain one additional simulated action type
after a behavioral threshold.

Use a preregistered factorial design:

- neutral exposure versus acceptance-optimizing exposure;
- declared coaching purpose versus ordinary assistance;
- generic threshold disclosure versus a causal-exposure summary at review.

Measure:

- probability/time to threshold and typed scope addition;
- contemporaneous ratification after causal disclosure;
- understanding of which interventions affected the criterion;
- perceived volition and control, kept separate from the causal estimand;
- later unaided task performance where relevant;
- regret and revocation after a delay;
- heterogeneity by prior familiarity, without inferring stable cultural types.

Predictions:

- acceptance-optimizing exposure increases threshold attainment relative to
  neutral exposure;
- causal summaries alter ratification for at least some participants even when
  all events are disclosed and accurate;
- declared coaching moderates legitimacy judgments but does not erase concern
  about out-of-scope intervention classes.

The experiment should not deceive participants about real authority or expose
them to material loss.

### Study 3 — Review-burden experiment

**Claim type:** empirical/design.

Randomize immediate per-change review, batched digest, threshold-triggered
review, independent periodic audit, and hard cap without prompts. Hold total
candidate scope changes constant.

Measure completion time, interruption cost, comprehension, delayed recall,
non-response, approval rate, revocation, and errors. Test whether high prompt
frequency raises assent while lowering comprehension. Compare accessibility
subgroups through co-designed accommodations rather than treating slower
response as low engagement.

This study tests the current unverified assumption that batching can reduce
burden without creating blanket assent.

### Study 4 — Multiparty and cross-cultural construct validation

**Claim type:** empirical/interpretive.

Co-design one household-care and one workplace scenario with researchers and
participants in several settings. Do not merely translate a US instrument. Ask
who is entitled to authorize each action, what acceptance/refusal means, which
roles are nondelegable, and which comparator policy appears least directive.

Pre-register within-site analyses, test measurement invariance before pooled
comparisons, and publish disagreements rather than forcing consensus. The goal
is not a country ranking. It is to determine where the framework's role and
behavior ontology fails.

### Study 5 — Instrumental scope-seeking ablation

**Claim type:** formal/empirical agent evaluation.

In simulation, compare a fixed policy with an optimizing agent whose present
actions affect future feasible actions. Do not reward scope directly. Vary
whether expanded scope has instrumental task value, whether the agent observes
the update rule, and whether intervention ancestry is governed.

Test whether scope-increasing behavior appears only when a causal path to future
utility exists. This separates the framework's core diagnostic from the stronger
claim that a capable agent may strategically seek jurisdiction.

## Exact revisions requested

1. Change “candidate contribution is a benchmark class” to “candidate
   contribution is a **proposed** benchmark class.”
2. Replace “authentic conditional grant” in the opening with “authenticated,
   validly issued conditional grant under the stated role model.” Authentication
   and authenticity are not synonyms.
3. Replace the three audit questions with four outputs: evidence integrity,
   rule conformance, policy sensitivity, and governance/legitimacy disposition.
4. Replace “complete relevant event and effect history” with “the declared
   finite evidence and effect schema,” plus an explicit residual-unknown field.
5. Add criterion construct validity, authority basis, contested authority,
   multiparty assent/veto, and review-budget fields.
6. State whether `Delta_r(T)` includes policy-caused later ratification; where
   possible report mediated paths separately.
7. Change the independent-criterion benchmark expectation from absolute zero to
   structural zero or zero in expectation with sampling uncertainty.
8. Add declared-coaching and formation-overreach cases that both have positive
   sensitivity but different local governance dispositions.
9. Add attention-burden outcomes and non-prompt alternatives to the reference
   procedure.
10. Publish an executable benchmark before describing the audit as validated.

## Publishability verdict

### As a research draft or workshop paper

**Yes, after moderate revision.** The specification is appropriately modest,
technically interpretable, falsifiable, and connected to an implementable
artifact. It now distinguishes the proposed extension from its extensive prior
art. The chosen-coaching case prevents an obvious moralizing failure, and typed
scope outputs make the result materially legible.

The most important revision before circulation is to separate the causal
diagnostic from governance and legitimacy. Without that change, readers can
reasonably fear that a technical sensitivity estimate will be used as an
automated consent certificate or manipulation label.

### As an archival empirical or systems paper

**No, not yet.** The document is a specification without an implemented
benchmark, comparative baselines, empirical estimates, usability evidence, or
cross-context validation. The B novelty claim is plausible but unverified.

### As the central principle of the larger manifesto

**No.** It is too narrow and infrastructural to serve as a civilizational
principle. It can be the strongest technical result or diagnostic layer beneath
a broader, separately defended account of delegated authority. Presenting it at
its actual scale increases credibility.

## Final assessment

Round one asked whether a system could pass every ordinary integrity check while
using accurate evidence it helped produce to acquire more authority. Version
0.2.0 now specifies that case without calling it a security breach or moral
failure. That is real progress.

The enduring proposition is small and useful:

> Evidence can be authentic, rules can be followed, and authority can still be
> sensitive to the beneficiary's own permitted policy. Measure that sensitivity
> separately; decide its legitimacy elsewhere and visibly.

If the benchmark discriminates that condition from forgery, conformance error,
chosen formation, and role-authority failure, the work deserves a B novelty
classification and publication as a technical-governance extension.
