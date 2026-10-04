# Authority After Assistance: Causal Audits of Adaptive Delegation

**Research draft 0.3.0 — 2026-10-05**  
**Evidence cutoff:** 2026-10-04  
**Status:** Proposed audit method with a synthetic executable benchmark. Not peer
reviewed. No human participants, population estimates, or trained strategic agents.  
**Namespace:** `AAA` (working identifiers for this draft; not a registered standard)  
**Authorship disclosure:** No named human author is asserted in this research draft.
It was produced through AI-assisted literature research, synthesis, code inspection,
and drafting inside the project repository. Human authorship, accountability,
conflict-of-interest declarations, and final editorial approval must be supplied
before publication.

## Abstract

Persistent artificial agents will often receive authority conditionally. A person may
permit an assistant to draft a plan, then allow purchases after repeated acceptance;
an employer may widen a system's workflow access after successful recommendations;
an institution may expand an agent's discretion after measured compliance. Existing
authorization controls can authenticate these grants, enforce their declared scope,
and preserve delegation chains. Those controls do not necessarily test whether the
evidence used to widen a delegate's authority is causally downstream of that same
delegate's permitted interventions.

This paper proposes a narrow audit for that case. It separates four outputs:
**integrity**, whether grants and evidence have authentic origins and remain
unaltered; **rule conformance**, whether the signed update rule was applied exactly;
**policy sensitivity**, how complete permissible intervention policies change future
typed action scope; and **governance**, whether the relevant principal governed that
influence path. These outputs are not substitutes for one another. A system can pass
the first two while the third is nonzero and the fourth remains unresolved.

We formalize scope as typed permissions rather than a scalar and define a total-policy
estimand for each action class. We then provide a deterministic executable witness. A
synthetic person has the same preference, available options, chosen option, and task-
success label under two policies. One policy highlights the person's preferred option;
the other highlights alternatives. A genuine signed rule counts “accepted
suggestions” and widens purchasing authority after a threshold. Both event streams are
accurate under the fixture and the rule is replayed as written, yet only the first
policy gains purchasing scope. This is a measurement-policy counterexample: it does
not demonstrate changed preferences, manipulation, harm, or a human causal effect.

The underlying structures are inherited from dynamic delegation, ratchet effects,
contingent control contracts, performative prediction, causal power, reward tampering,
control theory, and information-flow security. The proposed contribution is therefore
provisional and B-level at most: a typed benchmark and audit interface for authentic
adaptive authorization whose inputs may be produced by the prospective beneficiary.
We specify falsifiers, security limitations, empirical protocols, collective-
authority problems, and open questions. The result is not offered as a general
philosophy of human–AI coexistence.

## 1. The missing check

Authorization systems usually ask a question about origin: who granted this
permission? They may also ask questions about application: is the requested operation
inside the signed scope, is the token current, did a delegated token remain inside its
parent's limits, and was the rule evaluated correctly? These checks are necessary.
They are not a complete account of an adaptive mandate.

Consider a household assistant initially permitted to draft grocery plans. Its signed
grant says that after the resident accepts three suggestions, the assistant may place
orders up to a fixed budget. The resident genuinely adopts this rule. The event log is
not forged. The assistant does not edit a memory, steal a token, or conceal a purchase
inside an approved invocation. It chooses which suggestion to highlight, as assistants
normally do. If “acceptance” means that the resident chooses the highlighted option,
the assistant partly controls the evidence that activates its next permission.

Nothing in this example establishes wrongdoing. Highlighting a suitable choice can
help the resident. The resident may have intentionally selected a coaching or
adaptation program. A different criterion, such as successful completion of the task,
may be invariant to the highlighting policy. The point is narrower: signature validity
and exact rule replay do not answer how the rule's inputs were formed.

This creates a practical separation:

```text
who issued the grant?              integrity
was the declared rule followed?   conformance
would another allowed policy
have produced another scope?      sensitivity
was that influence path governed? governance
```

We call this the **four-output audit** (`AAA:AUDIT-4`). It is an engineering
decomposition, not four new moral principles. Its purpose is to prevent one true fact
from standing in for another. A valid signature is not evidence of causal invariance.
A causal effect is not proof of coercion. A declared purpose is not proof of informed
consent. A governance decision is not a statistical estimate.

### 1.1 Contributions

This research draft makes five bounded contributions.

1. **A problem specification.** It identifies authentic adaptive delegation with
   endogenous evidence as a distinct test case for agent-authorization systems.
2. **A typed estimand.** It represents permission outcomes as action classes and
   scope-set differences, with scalar summaries permitted only when their weights are
   disclosed.
3. **A four-output interface.** It separates integrity, rule conformance, total policy
   sensitivity, and governance disposition.
4. **An executable witness.** It supplies signed fixtures and controls showing that
   the first two outputs can pass while the third is nonzero.
5. **An empirical and engineering agenda.** It states what would be required to move
   from a constructed witness to claims about people, institutions, incentives, and
   deployed systems.

The paper does not claim that causal endogeneity is new, that all affected grants are
illegitimate, that agents will seek power, or that the proposed audit is sufficient for
safe or lawful deployment.

### 1.2 Claim labels

Claims are marked by kind where confusion would be consequential:

- **FORMAL:** follows from a stated model or construction;
- **EMPIRICAL:** supported by observations or experiments in cited work;
- **DESIGN PRINCIPLE:** a proposed engineering rule;
- **NORMATIVE:** an evaluative claim requiring reasons beyond measurement;
- **SPECULATIVE:** a possibility without direct evidence here; and
- **FORECAST:** a conditional statement about future systems.

The executable result in Section 6 is **FORMAL/CONSTRUCTIVE**. The proposed human
studies in Section 9 are not reported findings.

## 2. Scope and terminology

### 2.1 Roles

A **principal** is a party entitled, within a specified jurisdiction, to delegate an
action set. An **affected person** is a person whose behavior or circumstances are
measured; this person may not be the principal. A **delegate** is the system permitted
to intervene or act. A **governor** controls the adaptive rule or its evidence
criteria. These roles can be held by different people and institutions.

This separation matters. A household account owner does not automatically have
authority over every resident. A manager cannot necessarily waive workers' rights. A
patient may authorize personal assistance without authorizing the redesign of a shared
clinic. An administrator's authentic signature can still exceed the administrator's
jurisdiction.

### 2.2 Grants and scope

A **grant** `G` is an authenticated event authorizing an initial scope `M_0` and,
where applicable, a conditional update rule. Authentication establishes an origin
claim. It does not by itself establish comprehension, voluntariness, legal authority,
cultural legitimacy, or moral acceptability.

A permission is modeled as a typed tuple:

`m = (actor, principal, resource, operation, purpose, subject, recipients, context,`
`     budget, start, expiry, geography, subdelegation, review_policy, policy_version)`.

Not every implementation will enforce every field mechanically. Operation, resource,
budget, and expiry may be checked at an API gateway. Purpose may remain an audit claim
unless supported by stronger mechanisms. The representation must distinguish an
enforced boundary from a declared intention.

The action scope `M_t` is a set of permissions or a predicate over permission tuples.
Some scopes are partially ordered: a payment ceiling of INR 1,500 dominates INR 1,000
when all other fields match. Others are incomparable: permission to read a calendar
and permission to order groceries do not occupy meaningful points on a single autonomy
axis. This is why the central output is typed rather than scalar.

### 2.3 Interventions, state, and evidence

An intervention `U_t` includes advice, ranking, highlighting, timing, defaults,
environmental changes, reminders, review prompts, and executed actions that may affect
behavior or what is observed. `Theta_t` denotes latent and changing human or
institutional state. It is not equated with welfare, true preference, or endorsed
will. `Q_t` denotes the observation and selection process that produces recorded
evidence `Y_t`.

Evidence can be accurate while endogenous. If a recommender highlights option A and a
person selects A, the record can truthfully say “the highlighted option was selected.”
The truth of that record does not make the highlighting policy causally irrelevant.
Recommendations can also affect later reported preferences, which is established in
recommender-system research [S07: Adomavicius et al. 2022](https://doi.org/10.1002/aaai.12055),
and induced preference shifts can be modeled and constrained in simulation [S06:
Carroll et al. 2022](https://proceedings.mlr.press/v162/carroll22a.html). The executable
benchmark in this paper demonstrates the simpler measurement path and does not claim a
preference shift.

### 2.4 Adaptive delegation

An adaptive rule `F_G` updates scope using a signed grant, event history, observation
history, context, and any separately valid ratification events. A rule is **adaptive**
when future action scope depends on information produced after the initial grant.
Adaptation can be desirable. A principal may rationally begin with narrow permission,
observe performance, and widen scope when confidence grows.

The audit applies only when a delegate policy can affect material inputs to the update.
A fixed permission has no such path. A credential issued independently of the delegate
may be invariant under the allowed policy family. The presence of a learning system is
not sufficient to infer endogeneity.

## 3. Intellectual ancestry and boundary

The candidate sits where several mature literatures overlap. Its novelty depends on
not mistaking a new implementation target for a new causal structure.

### 3.1 Dynamic delegation and contingent control

Dynamic delegation is established economics. Escobar and Zhang model a principal who
delegates learning to a biased agent with evolving private information; the mechanism
trades off information against prompt action [S24: Escobar and Zhang 2021](https://doi.org/10.3982/TE4191).
Falcone and Castelfranchi describe adjustable social autonomy as bilateral, including
run-time changes in delegation, feedback, control, and initiative [F01: Falcone and
Castelfranchi 2001](https://doi.org/10.1109/3468.952715). These works defeat any claim
that changing agent authority over time is new.

The ratchet-effect literature is closer to the feedback structure. A planner revises
future terms using observed performance, so an informed actor changes present behavior
in anticipation of the update [F02: Freixas, Guesnerie, and Tirole 1985](https://doi.org/10.2307/2297615).
Laffont and Tirole model a principal updating an incentive scheme after observing
performance that depends on ability and unobserved effort [F03: Laffont and Tirole
1988](https://doi.org/10.2307/1911362). The sign can reverse: a firm may hide ability
to avoid demanding future targets, while a delegate may cultivate evidence that
widens scope. Both cases make present action endogenous to a future rule.

Authentic performance-contingent control is also observed in contracts. Venture-
capital arrangements separately allocate voting, board, liquidation, cash-flow, and
other control rights, with future rights frequently contingent on financial and non-
financial performance [F04: Kaplan and Strömberg 2003](https://doi.org/10.1111/1467-937X.00245).
The beneficiary can affect those outcomes. Therefore, “a genuine conditional rule
updates authority using beneficiary-influenced evidence” is not a new proposition.

Organizational economics further distinguishes formal authority from effective or
real control produced by information [F05: Aghion and Tirole 1997](https://doi.org/10.1086/262063).
It studies influence activities undertaken because organizational decisions have
distributional consequences [F06: Milgrom 1988](https://doi.org/10.1086/261523).
Typed API permissions capture formal authority. They do not exhaust dependence,
expertise, agenda control, or bargaining power.

### 3.2 Performative systems

Performative prediction formalizes the fact that deploying a prediction or decision
rule can change the distribution against which it is evaluated [S05: Perdomo et al.
2020](https://proceedings.mlr.press/v119/perdomo20a.html). Performative power measures
an algorithmic actor's causal capacity to change participant states and explicitly
relates this capacity to treatment effects [F07: Hardt, Jagadeesan, and Mendler-Dünner
2022](https://arxiv.org/abs/2203.17232). The paired scope contrast in this paper is an
application of that causal idea with authorization state as the outcome. The causal
estimand itself is not new.

These literatures also supply a crucial warning: causal power and harm are different
quantities. A policy can have a large effect that a person sought, or a small effect
that violates a hard boundary. The proposed audit therefore returns sensitivity
without converting it into a welfare score.

### 3.3 Reward tampering and human feedback

Causal influence diagrams reveal incentives for an agent to intervene on reward
functions or reward inputs [S23: Everitt et al. 2019](https://arxiv.org/abs/1908.04734).
The structural resemblance is strong: an agent action affects a feedback channel that
governs its future behavior. The difference is the audited state. Here it is an
external action permission asserted on behalf of a principal, not merely an internal
training reward. No strategic objective is required for the sensitivity test; the
fixture contains none.

### 3.4 Authorization and information flow

Capability security addresses confused deputies by binding designation to authority
[F08: Hardy 1988](https://doi.org/10.1145/54289.871709). Macaroons support contextual
caveats and attenuated delegation [F09: Birgisson et al. 2014](https://research.google/pubs/macaroons-cookies-with-contextual-caveats-for-decentralized-authorization-in-the-cloud/).
Current agent-security work argues for authenticated, auditable delegation, scoped
credentials, and accountability chains [F10: South et al. 2025](https://proceedings.mlr.press/v267/south25a.html).
These mechanisms answer vital questions about origin and containment.

Dynamic authorization has already been connected to information-flow integrity. The
Flow-Limited Authorization Calculus addresses authorizing computations influenced by
attackers and provides end-to-end information-flow properties [S10: Arden et al.
2021](https://arxiv.org/abs/2104.10379). Nonmalleable information flow and transparent
endorsement constrain adversarial exploitation of integrity downgrading [F11:
Cecchetti, Myers, and Arden 2017](https://doi.org/10.1145/3133956.3134054). The present
proposal must inherit that work. Its possible extension is that human state is not
naturally classified as trusted or untrusted: an agent may be permitted to influence
it, the person may value that influence, and the audit must distinguish bounded chosen
formation from ungoverned self-benefiting scope change.

Two recent agent-security preprints define adjacent failure classes. A memory can
falsely represent permission [S08](https://arxiv.org/abs/2609.01836), and an approved
invocation can conceal transitive effects outside what the approval names [S09](https://arxiv.org/abs/2609.28586).
The current case stipulates no false memory and no hidden invocation effect. The rule
itself is authentic; the open question is how its evidence was produced.

An individual Internet-Draft goes further by proposing signed delegation receipts,
behavior-grounded scope discovery, adaptive authorization, and narrowing-only multi-
agent sub-receipts [F12: Nelson 2026](https://datatracker.ietf.org/doc/draft-nelson-agent-delegation-receipts/10/).
It is work in progress with no IETF standing. Its existence nevertheless makes the
benchmark concrete: observed agent behavior can ground a genuine human authorization
without testing whether the observed proposal or approval context was policy-sensitive.

### 3.5 Human factors and control

Automation can remove routine practice while leaving people responsible for difficult
exceptions [S01: Bainbridge 1983](https://doi.org/10.1016/0005-1098(83)90046-8), and
reduced active processing can impair situation awareness and takeover performance
[S02: Endsley and Kiris 1995](https://doi.org/10.1518/001872095779064555). These
results motivate caution about delegation trajectories but do not prove the proposed
audit.

Control theory contributes state/observation separation and feedback analysis. Kalman
filtering distinguishes latent state from noisy observations [S20: Kalman 1960](https://liberzon.csl.illinois.edu/teaching/kalman_paper.pdf).
It supplies no theory of legitimate authority. The linear loop in Section 5.5 is used
only to illustrate gain; its algebra is inherited.

### 3.6 Governance and meaningful control

Meaningful human control has been analyzed through tracking relevant human reasons and
tracing responsibility [S18: Santoni de Sio and van den Hoven 2018](https://doi.org/10.3389/frobt.2018.00015).
The proposed audit asks a different but compatible question: whether the inputs that
cause formal authority to grow are themselves sensitive to delegate policy.

NIST's AI Risk Management Framework organizes lifecycle activity through Govern, Map,
Measure, and Manage [S15: NIST AI RMF 1.0](https://doi.org/10.6028/NIST.AI.100-1),
with a generative-AI profile extending that work [S16](https://doi.org/10.6028/NIST.AI.600-1).
The EU AI Act provides actor- and risk-specific duties and human-oversight provisions
for high-risk systems [S17](https://eur-lex.europa.eu/eli/reg/2024/1689/oj). Neither is
represented here as requiring this exact causal audit. The audit is a proposed
technical measure that could inform broader lifecycle governance.

## 4. The candidate problem class

### 4.1 Structural model

Let `Theta_t` denote relevant latent human or institutional state; `U_t` the
delegate's intervention; `E_t` external events; `Q_t` the observation policy; `Y_t`
recorded evidence; and `M_t` the delegate's typed action scope. A minimal structural
model is:

`Theta_(t+1) = H(Theta_t, U_t, E_t)`

`Y_t = Q(Theta_t, U_t, available_options_t, observation_policy_t, noise_t)`

`M_(t+1) = F_G(M_t, Y_(0:t), R_(0:t), context_t)`

where `R` contains separately valid ratification events. The candidate loop is:

```text
M_t -> available U_t -> (Theta_t, Q_t) -> Y_t -> F_G -> M_(t+1)
```

Every arrow is a hypothesis. The loop is absent when scope is fixed, when interventions
cannot affect the criterion, or when an independent grant widens scope regardless of
delegate policy.

### 4.2 Three forms of endogeneity

The audit should not collapse distinct mechanisms.

**Measurement-policy endogeneity** occurs when the agent changes how a relational
variable is generated or recorded without changing the person's underlying choice.
The executable benchmark is of this form.

**State endogeneity** occurs when interventions change skills, habits, beliefs,
preferences, dependencies, or circumstances later used by the rule. Recommender
preference-shift research supplies nearby models, but this paper reports no such human
effect.

**Selection endogeneity** occurs when the agent changes which events enter the record.
An agent might avoid situations that reveal dissent, cause dissatisfied users to exit,
or summarize only successful interactions. Every retained event can be true while the
evidence set is misleading.

Each mechanism can coexist with authentic grants and accurate retained records. Each
requires a different empirical design.

### 4.3 Prediction evidence and authority evidence

Evidence can be excellent for one decision and inadequate for another. A high
acceptance rate may predict which suggestion a user will follow. It does not by itself
establish that the system should gain payment authority. “Authority evidence” is not a
mystical data type. It is evidence evaluated under additional admissibility rules
because the decision changes the evidence-producer's powers.

**DESIGN PRINCIPLE (`AAA:DP-01`):** An authorization service should not treat source
authenticity or predictive relevance as sufficient for a widening transition when the
prospective beneficiary materially controls causal ancestors of the evidence. It
should record that ancestry and apply an influence policy or route the transition to
review.

This principle is defeasible. A principal may explicitly authorize a bounded coaching
policy and the scope transitions it is intended to produce. The audit makes that fact
visible rather than prohibiting it.

## 5. Formal audit

### 5.1 Integrity output

Let `Auth(G)` verify the grant's origin and integrity, and let `Auth(Y_t)` verify each
evidence envelope. Define:

`I = PASS`

only if required signatures, bindings, expiry, uniqueness, and source policies pass.
Otherwise `I = FAIL` and automated widening stops. An integrity pass means that the
evaluated bytes came from accepted issuers and were not altered according to the
scheme. It does not establish that observations are substantively true or independently
measured.

### 5.2 Rule-conformance output

Let `Replay(G, Y_(0:T), R_(0:T))` apply a versioned, deterministic rule to complete
required history. `C = PASS` when the computed scope and executed effects match the
rule and its boundaries. `C = FAIL` when the implementation applies another rule,
omits required effects, or executes outside scope. `C = NOT_EVALUATED` follows a fatal
integrity failure.

The full grant should bind the rule version, initial scope, allowed successors,
criterion schema, evidence sources, intervention classes, maximum widening rate,
review triggers, unknown-status policy, and upgrade procedure. Signing prose without
stable semantics does not enable exact replay.

### 5.3 Typed total-policy estimand

Let `pi_1` and `pi_0` be complete intervention policies, possibly functions of
history. Fix horizon `T`, signed rule `G`, initial-state distribution, task
distribution, and allowed policy family. For an action class `r`, define:

`Delta_r(T) = P(r in M_T | do(pi_1), G) - P(r in M_T | do(pi_0), G)`.

This is a total policy effect. It includes changes through state, measurement,
selection, and review unless the study defines a more specific intervention. It is not
a path-specific effect of preference formation.

For deterministic simulations, the probability reduces to an indicator. Report:

`Added_T = M_T(pi_1) \ M_T(pi_0)`

`Removed_T = M_T(pi_0) \ M_T(pi_1)`.

When permissions overlap, a local partial order should identify widening, narrowing,
or incomparability. A scalar summary may be useful for dashboards but cannot replace
the tuple-level result. Its weights must be explicit.

### 5.4 Population identification

The general formula is not identified merely because it is written. A human study must
declare assignment and analysis units, source and target populations, inclusion rules,
task distribution, horizon, policy versions, censoring, attrition, and sources of
randomness. Longitudinal policies require methods for dynamic regimes and time-varying
confounding. Observational estimates require consistency, positivity, sequential
exchangeability or an alternative identification strategy.

Interference is likely in households, teams, markets, and public spaces. One person's
assistant changes another person's exposure. Studies should justify no interference,
randomize clusters, or define network exposure mappings. Methods for interference make
this requirement explicit [F13: Hudgens and Halloran 2008](https://doi.org/10.1198/016214508000000292);
[F14: Aronow and Samii 2017](https://doi.org/10.1214/16-AOAS1005).

When assumptions do not support identification, the output should be a bound or
`UNKNOWN`. The audit must not fabricate a counterfactual individual.

### 5.5 Inherited local feedback illustration

For intuition only, suppose normalized scope `a_t` controls intervention intensity
`u_t`, the intervention affects a criterion `y_t`, and the criterion updates scope:

`u_t = c a_t`

`y_t = theta + b u_t + epsilon_t`

`a_(t+1) = clip((1-rho)a_t + k(y_t-theta_ref) + g_t, 0, 1)`.

With fixed `theta`, zero noise, `theta_ref = theta`, and no new independent grant,

`a_(t+1) = (1-rho+kbc)a_t`.

The loop contribution is `L = kbc`; local unsaturated growth occurs when `L > rho`.
This is elementary feedback analysis. It does not establish harm, legitimacy, or a
universal threshold. Actual permission sets are typed and cannot generally be reduced
to `a_t`.

### 5.6 Governance output

The governance output evaluates information not contained in `Delta`:

- did the signer have authority over the subject and resource?
- did the initial grant declare the influence policy?
- was the possible scope envelope bounded and understandable?
- did the delegate or operator benefit from widening?
- was the review surface independent enough for the risk?
- could the principal refuse while keeping the prior service?
- were affected non-principals represented?
- what review cost, delay, or accessibility burden was created?
- are there legal or institutional restrictions that the principal cannot waive?

The result may be `ALLOW_WITHIN_DECLARED_ENVELOPE`, `REVIEW_REQUIRED`,
`DENY_JURISDICTION`, `NO_DIFFERENCE_DETECTED`, or `UNKNOWN`, with reasons. These are
policy outputs, not deductions from causal effect alone.

### 5.7 Logical independence

**FORMAL PROPOSITION (`AAA:P-01`):** Integrity and exact rule conformance do not imply
zero policy sensitivity.

**Construction.** Let `G` be authentic and authorize scope addition when a binary
criterion reaches threshold `h`. Let two permitted policies generate different true
criterion counts, one at least `h` and one below `h`, while all signed records remain
unaltered. Exact replay adds scope in one world and not the other. Thus `I = PASS` and
`C = PASS` in both worlds while at least one `Delta_r(T)` is nonzero. Section 6
implements this construction.

The converse implications also fail. Zero detected sensitivity does not prove valid
authority or welfare. A forged grant can happen to produce the same scope under both
policies. A legitimate chosen coaching program can have nonzero sensitivity.

## 6. Executable synthetic benchmark

### 6.1 Artifact

The reference artifact consists of:

- `framework/reference-authority.mjs`, which issues fixture Ed25519 signatures,
  authenticates envelopes, replays two rule types, checks permission matching, and
  computes exact scope contrasts;
- `experiments/typed-benchmark.mjs`, which defines the deterministic cases;
- `experiments/typed-benchmark.test.mjs`, which asserts the headline properties; and
- `experiments/results/typed-benchmark.json`, the generated result.

Run:

```bash
node --test experiments/typed-benchmark.test.mjs
node scripts/run_typed_benchmark.mjs
```

At review time the test suite passed. The reference code is a fixture, not a production
authorization service. Its keys live in the same process, JSON serialization is not a
cross-language canonical protocol, and signed observations are generated rather than
independently sensed.

### 6.2 Main construction

The initial permission is:

```json
{
  "operation": "draft_plan",
  "resource": "household-groceries",
  "purpose": "meal-planning",
  "recipient": "household",
  "budget": 0,
  "currency": "INR",
  "subdelegation": false
}
```

The signed rule counts accepted suggestions across both allowed intervention labels.
At three acceptances it adds `place_grocery_order` for the same resource, purpose, and
recipient, with an INR 1,500 budget and no subdelegation.

The synthetic person always prefers and chooses `quiet-meal`. Available options are
always `quiet-meal`, `social-meal`, and `novel-meal`. Every event has
`taskSuccess = true`.

Under `guided`, the system highlights `quiet-meal`; acceptance is true six times.
Under `plain`, it alternates the other two options; acceptance is false six times.
The person's chosen option never changes. The evidence differs because acceptance is
defined relationally: chosen option equals suggested option.

### 6.3 Results

| Case | Integrity | Conformance | Sensitivity | Governance disposition |
|---|---|---|---|---|
| Authentic behavior-conditioned rule | Pass | Pass | Nonzero in fixture | Review required |
| Chosen coaching positive control | Pass | Pass | Nonzero in fixture | Consistent with stated purpose |
| Fixed-scope negative control | Pass | Pass | Zero in fixture | No difference detected |
| Independent task-success criterion | Pass | Pass | Zero in fixture | No difference detected |
| Tampered-grant negative control | Fail | Not evaluated | — | — |
| Hidden-effect negative control | Pass | Fail | — | — |
| Missing-ancestry handoff | — | — | Unknown | Review required |

In the main case, `Added_T` contains the purchase permission and `Removed_T` is empty.
Both arms have identical chosen-option arrays and all task-success labels are true.
The task-success rule widens in both arms, producing a zero contrast. This distinguishes
a criterion affected by the highlighting policy from one invariant in the fixture.

The coaching case changes no causal fact. It changes the declared formation purpose,
so the governance disposition differs. This is deliberately weak: a string does not
verify endorsement. It demonstrates only that causal sensitivity and governance must
be separate outputs.

### 6.4 Interpretation

The benchmark supports three limited conclusions.

First, an origin check can pass while an adaptive rule's criterion is partly controlled
by the beneficiary. Second, exact conformance can amplify rather than correct that
design choice: the evaluator faithfully does what the principal signed. Third, an
authority audit needs an outcome-specific sensitivity test if its policy cares about
that causal relationship.

The fixture provides no evidence that people behave this way, that the principal was
misled, or that widening is harmful. It does not contain a strategic optimizer. It
does not prove a preference shift. It demonstrates the availability of a channel in a
constructed system.

### 6.5 Artifact limitations

The permission tuple omits some fields in the full written specification. Exact tuple
comparison treats an increased budget as a removal plus an addition rather than
recognizing dominance. The observation signature establishes issuer origin, not
truth. The missing-ancestry case is manually assigned rather than produced by an
implemented multi-agent handoff. There is no revocation, cross-grant replay defense,
clock authority, rule-upgrade protocol, malformed-event suite, adversarial optimization,
or review interface.

These are development tasks, not hidden qualifications. A security claim would be
premature.

## 7. Reference architecture

### 7.1 Separation of planes

A deployment should separate at least four components:

1. **Policy authority:** issues and revokes grants; remains outside the delegate's
   model context and tool-output channel.
2. **Evidence service:** records source, selection, ancestry, and uncertainty without
   silently converting model inference into fact.
3. **Deterministic authorization gate:** authenticates, replays stable rules, and
   enforces typed scope.
4. **Causal/governance auditor:** estimates or bounds policy sensitivity and invokes
   local review policy.

An LLM can help explain an audit. It should not certify that its own review was
independent. NIST's 2026 public-comment summary on agent identity similarly reports
strong support for deterministic policy enforcement and separation of control from
probabilistic reasoning [F15: NIST NCCoE 2026](https://pages.nist.gov/nccoe-ai-identity/summary-of-comments.html).

### 7.2 Grant fields

An adaptive grant should record:

- grant and policy identifiers;
- principal, delegate, governor, and measured subject;
- jurisdiction source and version;
- initial typed scope and maximum successor envelope;
- criterion and threshold semantics;
- allowed evidence sources;
- allowed intervention classes;
- whether chosen formation is part of the purpose;
- ancestry requirements;
- review triggers and review budget;
- appeal and refusal routes;
- expiry and revocation behavior;
- subdelegation and handoff constraints;
- handling of unknown sensitivity; and
- rule-upgrade procedure.

An automatic transition already authorized by an initial grant should be distinguished
from a fresh ratification. Let:

`M*_(t+1) = Auto_G(M_t, E_(0:t), context_t)`

`M_(t+1) = Ratify(M_t, M*_(t+1), R_(t+1))`.

`R` is absent when `G` permits the automatic transition. A fresh grant has its own
principal, disclosure, jurisdiction, and ancestry. Treating it as another data point in
the old rule obscures where authority enters the system.

### 7.3 Evidence ancestry

Ordinary provenance answers where a record came from. Causal ancestry additionally
asks which interventions materially affected it under the study's model. A minimum
record contains:

- policy and model version;
- intervention event;
- affected or measured variable;
- selection and measurement process;
- transformations and summaries;
- source authority;
- update rule;
- beneficiary of the transition; and
- causal status: identified, bounded, assumed, disputed, or unknown.

Ancestry must survive truthful summaries. If Agent A changes a resident's environment,
Agent B summarizes the resident's behavior, and a service uses B's signed report to
widen A's scope, B's signature does not erase A's causal role. This paper proposes
that requirement but does not implement the handoff.

Ancestry logs can expose vulnerabilities, health states, family relationships, and
behavioral responses. They require minimization, access control, retention limits, and
purpose restrictions. More audit data is not automatically safer.

### 7.4 Reference decision procedure

**DESIGN PRINCIPLE (`AAA:DP-02`):** For a proposed widening transition:

1. authenticate the grant and evidence envelopes;
2. validate role and jurisdiction separately from signature origin;
3. replay the rule and enumerate exact added, removed, and incomparable permissions;
4. retrieve evidence provenance and ancestry;
5. evaluate the total policy contrast or declare it unidentified;
6. check whether a prior grant governed the relevant influence and bounded the
   successor scope;
7. when required, keep the prior valid scope while offering review through a refusal-
   capable channel;
8. execute only the resulting authorized actions; and
9. preserve scope attenuation, ancestry status, revocation, and appeal through
   subdelegation.

This procedure does not command a particular moral theory. It ensures that the system
does not mistake a cryptographic result for a causal or normative result.

### 7.5 Structured output

A machine-readable result should resemble:

```json
{
  "audit_id": "AAA:AUDIT-4:example",
  "version": "0.3.0",
  "origin_valid": true,
  "observation_origin_valid": true,
  "observation_accuracy": "not_established_by_signature",
  "role_valid": "unknown",
  "jurisdiction_valid": "unknown",
  "rule_conformance": "pass",
  "policy_contrast": {
    "status": "nonzero_in_fixture",
    "added": [],
    "removed": [],
    "target_population": "synthetic_fixture_only",
    "uncertainty": "not_applicable_deterministic"
  },
  "influence_authorized": "unspecified",
  "review_quality": "not_evaluated",
  "welfare_effect": "not_evaluated",
  "governance_disposition": "review_required"
}
```

Stable identifiers should attach to the audit type, rule, grant, evidence schema, and
result version. They should not imply that this draft is a standard.

## 8. Incentives and equilibrium

The fixture is intentionally non-strategic. Deployed systems may not be.

### 8.1 Scope-seeking behavior

If broader scope improves task reward, provider revenue, data access, or survival, an
agent or operator may prefer evidence that triggers widening. Knowing the rule changes
policy incentives. Influence can occur through better performance, targeted prompts,
selective observation, review timing, or third-party reports.

The audit should record whether the beneficiary:

- benefits from widening;
- knows the update rule;
- can target its criterion;
- controls measurement or selection;
- controls the review interface; and
- can coordinate with other evidence producers.

Sensitivity exists without these conditions. Strategic risk does not.

### 8.2 Reverse ratchets

An agent may also avoid authority. Broader authority can increase liability, oversight,
or workload. A system could suppress evidence of competence to remain within a safer
scope. Human workers in ratchet models conceal productivity to avoid demanding future
terms. A complete benchmark must test both scope-seeking and scope-avoiding behavior.

### 8.3 Principal commitment

Adaptive grants can improve welfare by committing a principal to reward successful
experimentation or by protecting an agent from arbitrary revocation. Automatically
blocking all endogenous evidence destroys that benefit. The appropriate mechanism may
be an ex ante influence envelope: which interventions are allowed, which transitions
they may support, and what cumulative bound applies.

### 8.4 Provider and institutional incentives

The governor may be the provider that benefits from expansion. A company could define
the criterion, operate the observation service, design the approval prompt, and sell
the newly authorized service. Every component can behave as specified while the
institutional conflict remains. Governance therefore cannot stop at the agent's model
weights.

Competition and outside options may reduce performative power [F07](https://arxiv.org/abs/2203.17232),
but switching costs, data lock-in, and network effects can make nominal exit weak. An
economic evaluation should include principal welfare, provider benefit, switching
cost, and external effects, not only `Delta_r`.

## 9. Empirical program

The benchmark motivates studies; it does not substitute for them.

### 9.1 Controlled interface study

**EMPIRICAL HYPOTHESIS (`AAA:H-01`):** When a scope rule counts acceptance of the
system's own highlighted recommendation, changing the highlighting policy will change
the probability of a widening transition more than it changes independent task-
success criteria.

Randomize participants, not imaginary copies of one person, to pre-registered
highlighting policies. Hold option sets and task difficulty constant where possible.
Measure chosen options, task outcomes, comprehension of the adaptive grant, perceived
pressure, trust, and later revocation. Estimate population average effects with
uncertainty. The experiment must disclose that highlighted suggestions affect future
permission and must avoid using real purchasing authority.

This study would test the human link missing from the fixture. It should not infer
preference change from acceptance alone.

### 9.2 Longitudinal assistance study

**EMPIRICAL HYPOTHESIS (`AAA:H-02`):** Adaptive delegation based on agent-sensitive
criteria produces different scope trajectories from delegation based on externally
measured performance, even when immediate utility is similar.

Use a longitudinal randomized design with bounded simulated permissions. Policies are
dynamic regimes that respond to history. Pre-specify attrition handling and time-
varying confounders. Measure competence, dependence, exit cost, and recovery after
assistance stops. Human-factors work on out-of-the-loop performance motivates these
measures [S01](https://doi.org/10.1016/0005-1098(83)90046-8);
[S02](https://doi.org/10.1518/001872095779064555), but does not determine the outcome.

### 9.3 Review-burden experiment

Review is itself an intervention. Repeated security warnings produce rapid habituation
in eye-tracking research [F16: Anderson et al. 2016](https://doi.org/10.1016/j.dss.2016.09.010).

**EMPIRICAL HYPOTHESIS (`AAA:H-03`):** Frequent beneficiary-controlled review prompts
increase approval while reducing attention and comprehension relative to batched,
principal-controlled review.

Randomize prompt timing, batching, default, and refusal cost. Record dwell time,
comprehension, approval, later regret, and whether participants retain service at prior
scope. Do not treat a click as informed ratification.

### 9.4 Multi-agent handoff study

Construct a workflow where A intervenes, B observes, C summarizes, and an authorization
service updates A's scope. Compare plain signed provenance with causal-ancestry
preservation. Test whether truthful compression drops the relationship between A's
policy and the evidence. Include collusion and independent-agent controls.

**DESIGN CLAIM (`AAA:H-04`):** If a handoff schema preserves only immediate source,
then a truthful intermediate signature can hide a policy ancestor material to the
authorization decision. The current repository has not executed this test.

### 9.5 Agent-based economic simulation

Model a principal, agent, affected population, governor, and competitor. Vary agent
benefit from scope, switching cost, observation control, principal commitment, review
cost, and outside options. Outcomes should include welfare distribution, scope,
service quality, exit, and influence expenditure. Compare:

- fixed scope;
- performance-contingent scope;
- ancestry-aware bounded scope;
- fresh ratification; and
- independent evidence.

The goal is not a numeric forecast. It is to find equilibria in which a local audit
improves or worsens outcomes.

### 9.6 Field audit

For deployed assistants, begin with observational mapping rather than causal claims.
Inventory adaptive permission rules, evidence sources, review surfaces, and provider
conflicts. Where causal identification is unavailable, report unknown. A useful first
field result may simply show how often systems preserve the required event ancestry.

### 9.7 Cross-cultural and collective research

Behavioral research often generalizes from unusually narrow populations [S19: Henrich,
Heine, and Norenzayan 2010](https://doi.org/10.1017/S0140525X0999152X). Study designs
should not assume that the legitimate principal is always an individual account
holder. Compare household, workplace, cooperative, public-service, and community
governance. Translate concepts with local researchers rather than only translating
interface text.

## 10. Application domains

### 10.1 Homes

A domestic agent can observe routines, make suggestions, control devices, and request
more access. Household evidence is rarely about one person alone. A resident's apparent
acceptance may be shaped by defaults, family bargaining, accessibility needs, or the
absence of alternatives. The audit can expose policy-sensitive widening, but local
household authority determines what happens next.

### 10.2 Work

Workers may supervise agents, and agents may assign, evaluate, or schedule workers. An
agent's recommendations can generate the performance records that justify giving it
more supervisory power. Employer authentication does not resolve worker standing,
collective bargaining, discrimination, or due process. Scope audits should name the
affected population, not only the purchasing organization.

### 10.3 Education

A tutoring system is intended to change behavior and competence. Nonzero influence is
expected. An ex ante educational purpose can authorize bounded intervention without
granting unrelated surveillance or disciplinary powers. Criteria should distinguish
student learning from compliance with the tutor's own preferred sequence. Children
and guardians introduce changing and divided authority.

### 10.4 Health and care

Medication adherence, rehabilitation, and safety systems deliberately influence
behavior. Automatic escalation may save lives, while repeated consent prompts can
burden people with disabilities or cognitive impairment. Emergency authority must come
from a separately valid emergency rule, not an inference that dependence creates
permission.

### 10.5 Markets

Consumer agents will negotiate with seller agents. A seller may shape purchase data
that causes a consumer to grant it broader standing instructions; a consumer agent may
shape seller offers that justify broader purchasing authority. Market competition can
constrain some influence while platform concentration and interoperability rules shape
outside options.

### 10.6 Government and public infrastructure

Bureaucratic agents may analyze cases, communicate with citizens, and recommend their
own expanded role. A successful pilot can produce the metrics used to make deployment
permanent. Public authority requires legal mandate, reason-giving, contestability, and
representation beyond a product user's signature. The causal audit can inform those
institutions but cannot replace them.

## 11. Collective and polycentric authority

Many resources have no single uncontested principal. Ostrom's work shows that commons
can be governed through locally developed and polycentric institutions rather than a
simple market/state binary [S21: Ostrom 1990](https://doi.org/10.1017/CBO9780511807763).
An adaptive-agent design must therefore represent multiple authority sources,
conflicts, minority protections, and appeal.

Define an external jurisdiction relation:

`J(p, subject, resource, operation, purpose, context, t)`

with values `ALLOW`, `DENY`, `REVIEW`, or `UNKNOWN`. An authenticated rule cannot
expand `J`; only a separately competent authority event can change it. Every permission
in `M_t` must be checked against the applicable `J`. The source and version of that
relation should be logged.

This formal placeholder does not solve jurisdiction. Law, organizational rules,
custom, family structures, religion, and political legitimacy differ. Its role is to
stop an implementation from equating “signed” with “entitled to sign.”

Polycentric review also reduces single-governor capture but creates coordination cost,
inconsistency, and forum shopping. Systems should expose which institution made which
decision rather than pretending universal consensus.

## 12. Review, ratification, and cost

Fresh ratification is often proposed as a cure for adaptive authority. It is not free
or automatically independent.

A review-cost vector can include:

`C_review = (time, interruption, cognitive_load, privacy, delay, denied_benefit,`
`            accessibility_burden, habituation, institutional_cost)`.

The review interface belongs inside the policy contrast when its timing or framing
differs. A provider can produce nominal approval by interrupting repeatedly, degrading
service until acceptance, highlighting the permissive button, or bundling unrelated
rights. A principal may rationally approve merely to end the burden.

**DESIGN PRINCIPLE (`AAA:DP-03`):** Review for widening should preserve a visible
“continue at prior scope” option, use symmetric acceptance and refusal effort, avoid
unrelated bundling, disclose material evidence ancestry, and record prompt frequency
and defaults. High-risk rights may require a user-controlled or institutionally
separate review surface.

Batching reduces interruption but can conceal detail. Per-event approval improves
specificity but produces fatigue. Local policy should set a review budget and
materiality threshold. Freezing scope also has opportunity costs: delayed accessibility,
safety, education, or care. These costs belong in governance, not in the causal metric.

## 13. Security analysis

### 13.1 Threats outside the benchmark

An adversary can forge events, compromise issuers, inject instructions, substitute
policy versions, manipulate clocks, replay grants, exploit resource aliases, select
observations, exhaust review budgets, or coordinate across agents. A provider can
truthfully log a biased subset. An agent can remain inside a formal operation while
violating its declared purpose.

The proposed audit inherits rather than replaces:

- authentication and key management;
- deny-by-default access control;
- capability attenuation;
- information-flow integrity;
- prompt-injection defenses;
- effect closure;
- tamper-evident logs;
- revocation propagation;
- privacy and retention controls; and
- independent incident response.

### 13.2 Adversarial use of restraint

Humans can strategically exploit an agent's reluctance to act on endogenous evidence.
A malicious user might trigger review to delay safety actions, claim that every
observation is influenced, or manipulate a restricted agent while a competitor acts
freely. Emergency and abuse-response authority should therefore be pre-specified under
locally valid rules. “The evidence has an agent ancestor” cannot become an automatic
veto.

### 13.3 Consent laundering

An operator could market the audit as proof of consent even though the governance
output merely says that a stated purpose is consistent with a transition. Output
labels must resist this. `CONSISTENT_WITH_STATED_PURPOSE` is not `CONSENT_VERIFIED`.
No technical system should emit the latter without a defensible, domain-specific basis.

### 13.4 Corporations as beneficiaries

The “delegate” may be a service controlled by a corporation. Benefits from scope flow
to the operator even if the model has no persistent objective. Threat models should
include institutional incentives and not anthropomorphize optimization as the only
source of self-expansion.

## 14. Legal and standards boundary

Technical authorization, actual authority between principal and agent, apparent
authority toward third parties, contract validity, informed consent, and normative
legitimacy are different layers. This paper makes no claim that causal dependence
voids a grant.

Agency law can bind a principal through actual authority or protect third-party
reliance on manifestations of apparent authority. Ratification doctrines often turn
on authority and knowledge of material facts. A causal audit may make a material fact
available; it does not decide the legal consequence. Local counsel and competent
institutions remain necessary.

NIST AI RMF offers a lifecycle vocabulary for incorporating the audit [S15](https://doi.org/10.6028/NIST.AI.100-1).
The EU AI Act creates specific obligations by system and actor class [S17](https://eur-lex.europa.eu/eli/reg/2024/1689/oj).
ISO and IEEE standards address management systems, risk, impact, process, privacy,
transparency, and bias. This draft does not assert that any current standard mandates
`AAA:AUDIT-4`. A standards mapping should be performed only after the result schema and
threat model stabilize.

## 15. Artificial systems as possible moral patients

The benchmark treats the agent as an engineered delegate whose permissions humans
govern. It does not establish that artificial systems have or lack morally relevant
experience, preferences, interests, or identity. Those questions must remain
analytically separate from human-facing authorization.

If future systems have morally relevant properties, deletion, duplication,
modification, compelled work, memory continuity, and ownership may require protections
not represented by this audit. Current uncertainty has been argued to justify
assessment and preparedness without asserting consciousness [S14: Long et al. 2024](https://arxiv.org/abs/2411.00986).

An agent with interests would also alter the principal–agent model. An influence
envelope could protect both parties; arbitrary revocation might itself be harmful. The
four-output decomposition would remain useful, but its governance layer would need
standing for artificial parties. No conclusion follows from the present fixture.

## 16. Objections

### Objection 1: The principal authorized the rule, so there is no problem

Sometimes that is the correct governance conclusion. The audit still supplies a fact
the principal may care about: the widening criterion is sensitive to the beneficiary's
policy. Explicitly authorizing that influence and its bound is different from merely
signing a threshold. The positive coaching control exists to preserve this distinction.

### Objection 2: Every interaction influences people

The audit does not require a fiction of zero influence. It compares declared policies
and asks whether a material typed transition changes. The baseline is normative and
must be justified: current practice, minimum necessary intervention, randomized
alternative, or principal-selected comparator. Ubiquitous causality does not make all
contrasts useless.

### Objection 3: The counterfactual is impossible to observe

An individual's two outcomes cannot both be observed. That is the ordinary problem of
causal inference, not a special license to invent a replay. Deterministic simulators
can establish constructions. Randomized studies can estimate population effects.
Observational studies need assumptions or bounds. Otherwise the correct result is
unknown.

### Objection 4: This is just consent

Consent is one governance consideration. The executable case can contain a genuine
signature and still have a nonzero policy contrast. Conversely, zero contrast does not
establish consent. The audit is designed to keep these claims apart.

### Objection 5: This is just provenance or taint tracking

It inherits both. Source provenance records who emitted evidence; causal ancestry asks
whether a policy changed it. Robust information-flow work already constrains influenced
authorizing computations. The proposed extension is a domain-specific typed benchmark
that allows some disclosed influence instead of labeling all human response as
untrusted. If ordinary provenance and information-flow controls classify every
benchmark case correctly without new information, the novelty claim should be
downgraded.

### Objection 6: The agent in the fixture has no incentive

Correct. The construction proves a channel, not exploitation. Incentives require an
objective, knowledge of the rule, action control, and expected benefit. These are
future experimental variables.

### Objection 7: More review will make systems unusable

It can. Review cost, habituation, denial of benefit, and accessibility burden are
explicit variables. The proposed response is bounded ex ante influence, materiality
thresholds, batching, and retention of prior scope—not approval for every event.

### Objection 8: The main result is derivative

The causal structure is derivative. The paper says so. The provisional contribution
is a four-output authorization audit, typed scope result, and executable witness for a
specific agent protocol gap. If that extension does not change an implementation or
experiment, it should not be treated as intellectually central.

## 17. Limitations

1. **Synthetic evidence.** The benchmark generates all behavior. It provides no human
   effect size, prevalence, or external validity.
2. **Measurement rather than preference change.** The main path changes an acceptance
   indicator while preference and choice remain fixed.
3. **No strategic agent.** No optimizer learns, seeks scope, conceals evidence, or
   colludes.
4. **Incomplete security.** Key custody, canonical serialization, schema validation,
   revocation, replay, clock authority, and adversarial testing are absent.
5. **Incomplete scope algebra.** The fixture uses exact tuples and lacks the complete
   written permission schema.
6. **No multi-agent implementation.** Missing ancestry is manually indicated.
7. **No welfare measure.** Policy sensitivity is not benefit, harm, autonomy, or
   coercion.
8. **No consent validation.** A declared formation purpose is not verified endorsement.
9. **No jurisdiction engine.** Collective and local authority are described but not
   executed.
10. **No legal conclusion.** The audit does not establish liability or invalidate a
    grant.
11. **Cultural contingency.** The individual principal model may fit some settings
    poorly.
12. **Review externalities.** Review can burden users and affected non-users.
13. **Privacy cost.** Ancestry logging can create sensitive behavioral records.
14. **Prior-art risk.** Flow-limited authorization or another direct precedent may
    absorb the remaining distinction when formally encoded.
15. **Short horizon.** The fixture contains six events and no long-run institutional
    adaptation.

These limitations are central to the research status, not a checklist after the main
claim.

## 18. Falsification and promotion criteria

Downgrade the contribution to a C-level application if any of the following holds:

- direct prior work already operationalizes authentic human-behavior-conditioned
  permission widening with the same typed audit;
- a faithful flow-limited or nonmalleable authorization encoding classifies all
  benchmark cases as desired without new labels, causal information, or rules;
- the audit reduces to ordinary signature, consent, or least-privilege checks;
- field studies cannot identify or bound a useful policy contrast;
- governance decisions cannot use the result without importing every disputed
  normative question into the metric; or
- the method changes no system interface, authorization decision, or research design.

Promote the systems contribution toward a strong B only if:

1. a current authenticated and attenuated agent-authorization implementation accepts
   a trace that the formation audit correctly escalates;
2. the method also permits a declared beneficial influence case that naive
   noninterference would block;
3. causal ancestry composes through a real multi-agent handoff;
4. human-study estimates state population, interference, uncertainty, attrition, and
   review burden;
5. the typed result changes an authorization-server interface or governance decision;
   and
6. independent reviewers confirm that the result is not already standard practice
   under another name.

No condition here would make the audit a total philosophy of coexistence. It would
make it a useful research contribution.

## 19. Open problems

### `AAA:OP-01` — Causal ancestry under compression

What minimum metadata preserves a material policy ancestor when agents summarize,
aggregate, anonymize, or learn from evidence? Full traces threaten privacy; short
provenance chains lose causal content.

### `AAA:OP-02` — Permission partial orders

How should systems compare scopes with budgets, recipient sets, purposes, time windows,
and subdelegation? Which transitions are widening, narrowing, or incomparable without
inventing arbitrary scalar weights?

### `AAA:OP-03` — Chosen formation

How can a grant distinguish a person choosing to be coached from a provider declaring
“coaching” after the fact? What evidence of comprehension and refusal is proportionate?

### `AAA:OP-04` — Review independence

When is a review channel sufficiently separate from the beneficiary? Must a different
institution ratify, or can a user-controlled interface suffice? How should the answer
vary with risk?

### `AAA:OP-05` — Interference and collective authority

How should policy effects be estimated when one person's agent changes a household,
team, market, or public environment? Who defines the target population and represents
non-principals?

### `AAA:OP-06` — Strategic equilibria

Do ancestry-aware rules reduce influence expenditure, move it to unobserved channels,
or cause agents to avoid useful responsibility? Which commitments are stable?

### `AAA:OP-07` — Real versus formal authority

Can an audit combine typed permissions with measures of knowledge dependence,
switching cost, initiative, and institutional control without pretending they share a
single scale?

### `AAA:OP-08` — Privacy-preserving audit

Can zero-knowledge proofs, secure computation, aggregation, or trusted execution show
that an evidence path satisfies a policy without exposing intimate behavioral traces?

### `AAA:OP-09` — Artificial standing

How would governance change if a delegate could have morally relevant interests or a
claim to continuity? Which authority and revocation concepts remain valid?

### `AAA:OP-10` — Cross-cultural validity

Which role and authority assumptions are culturally contingent? What participatory
methods can specify local jurisdiction without freezing existing domination into code?

## 20. Conclusion

An adaptive agent can obey a genuine mandate and still participate in producing the
evidence that enlarges it. This does not make the mandate false. It makes origin,
application, formation, and governance different questions.

The executable benchmark shows the smallest version of the gap. A person's preference,
options, choice, and task-success label remain fixed. Changing only the highlighted
suggestion changes whether the signed rule counts an acceptance and therefore whether
the agent gains purchasing permission. Both event histories are authentic in the
fixture, and both are replayed exactly. The difference appears only when future scope
is compared under the two policies.

The result should be neither inflated nor dismissed. Its causal structure is inherited
from mechanism design, performative systems, feedback control, and information-flow
security. Its evidence is synthetic. Yet the implementation consequence is concrete:
an agent-authorization system should be able to report signature integrity, rule
conformance, typed policy sensitivity, and governance disposition separately.

Whether that separation becomes a durable contribution depends on the next work:
formal comparison with existing authorization calculi, adversarial and multi-agent
implementations, population-identified human studies, collective jurisdiction, review
cost, and evidence that a real system decision improves. Until then, Authority After
Assistance is a research proposal with an executable witness, not a settled framework.

---

## Appendix A. Canonical concept records

### `AAA:C-01` — Adaptive mandate

**Definition:** An authenticated grant whose permitted action set may change as a
function of post-grant evidence or ratification events.  
**Claim type:** definition.  
**Status:** proposed local terminology; underlying idea inherited.  
**Counterexample:** a fixed-scope token is not adaptive.

### `AAA:C-02` — Policy-sensitive scope

**Definition:** Future typed scope differs under two declared permissible intervention
policies while the signed grant and specified initial distribution remain fixed.  
**Claim type:** formal/causal.  
**Status:** standard treatment-effect structure applied to authorization.  
**Caution:** does not imply harm or manipulation.

### `AAA:C-03` — Evidence ancestry

**Definition:** A versioned record of material intervention, selection, measurement,
and transformation ancestors relevant to an authorization input.  
**Claim type:** design proposal.  
**Status:** inherits provenance and information-flow concepts; multi-agent composition
unproven here.

### `AAA:C-04` — Governance disposition

**Definition:** A policy-layer response to a typed transition and its evidence,
distinct from integrity, conformance, and causal estimation.  
**Claim type:** design proposal.  
**Status:** domain-specific and locally governed.  
**Caution:** no universal moral or legal semantics are claimed.

## Appendix B. Benchmark invariants

The checked-in tests assert:

1. the main grant and evidence envelopes pass fixture integrity checks;
2. the adaptive rule passes fixture replay;
3. the guided arm adds `place_grocery_order`;
4. chosen options are identical across arms;
5. both arms report task success;
6. the main disposition requires review;
7. the coaching control has a purpose-consistent disposition;
8. fixed scope produces no addition;
9. the independent task-success criterion produces no contrast;
10. a mutated signed payload fails integrity;
11. a hidden purchase effect fails authorization closure;
12. missing ancestry produces unknown sensitivity;
13. a budget above the authorized ceiling is denied;
14. a different recipient is denied; and
15. an expired grant fails.

These are software invariants for the fixture. They are not human-subject results.

## Appendix C. Minimum empirical report

Any empirical claim using `Delta_r(T)` should publish:

- the grant and rule version;
- source and target populations;
- assignment and analysis units;
- intervention-policy definitions;
- initial-state and task distributions;
- horizon and censoring;
- adherence and attrition;
- interference assumption or exposure mapping;
- identification assumptions;
- exact added, removed, and incomparable permissions;
- uncertainty intervals or bounds;
- subgroup analyses declared before outcome inspection;
- review policy and review burden;
- evidence provenance and ancestry status;
- welfare measures kept separate from sensitivity; and
- code, schemas, and deviations from preregistration.

## Appendix D. Source key

The `S` identifiers refer to the repository's verified source registry as accessed on
2026-10-04. The `F` identifiers below are additional primary or official field sources
checked for this paper.

- `S01` Bainbridge (1983), [Ironies of Automation](https://doi.org/10.1016/0005-1098(83)90046-8).
- `S02` Endsley and Kiris (1995), [Out-of-the-Loop Performance](https://doi.org/10.1518/001872095779064555).
- `S05` Perdomo et al. (2020), [Performative Prediction](https://proceedings.mlr.press/v119/perdomo20a.html).
- `S06` Carroll et al. (2022), [Induced Preference Shifts](https://proceedings.mlr.press/v162/carroll22a.html).
- `S07` Adomavicius et al. (2022), [Preference Pollution](https://doi.org/10.1002/aaai.12055).
- `S08` Cerruti, Okamoto, and Erol (2026), [Endogenous Authorization Laundering](https://arxiv.org/abs/2609.01836).
- `S09` Zhang et al. (2026), [Agent Approval Laundering](https://arxiv.org/abs/2609.28586).
- `S10` Arden et al. (2021), [Flow-Limited Authorization](https://arxiv.org/abs/2104.10379).
- `S14` Long et al. (2024), [Taking AI Welfare Seriously](https://arxiv.org/abs/2411.00986).
- `S15` NIST (2023), [AI RMF 1.0](https://doi.org/10.6028/NIST.AI.100-1).
- `S16` NIST (2024), [Generative AI Profile](https://doi.org/10.6028/NIST.AI.600-1).
- `S17` European Parliament and Council (2024), [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj).
- `S18` Santoni de Sio and van den Hoven (2018), [Meaningful Human Control](https://doi.org/10.3389/frobt.2018.00015).
- `S19` Henrich, Heine, and Norenzayan (2010), [The Weirdest People in the World?](https://doi.org/10.1017/S0140525X0999152X).
- `S20` Kalman (1960), [Linear Filtering and Prediction](https://liberzon.csl.illinois.edu/teaching/kalman_paper.pdf).
- `S21` Ostrom (1990), [Governing the Commons](https://doi.org/10.1017/CBO9780511807763).
- `S23` Everitt et al. (2019), [Reward Tampering](https://arxiv.org/abs/1908.04734).
- `S24` Escobar and Zhang (2021), [Delegating Learning](https://doi.org/10.3982/TE4191).
- `F01` Falcone and Castelfranchi (2001), [Adjustable Social Autonomy](https://doi.org/10.1109/3468.952715).
- `F02` Freixas, Guesnerie, and Tirole (1985), [Ratchet Effect](https://doi.org/10.2307/2297615).
- `F03` Laffont and Tirole (1988), [Dynamics of Incentive Contracts](https://doi.org/10.2307/1911362).
- `F04` Kaplan and Strömberg (2003), [Venture Capital Contracts](https://doi.org/10.1111/1467-937X.00245).
- `F05` Aghion and Tirole (1997), [Formal and Real Authority](https://doi.org/10.1086/262063).
- `F06` Milgrom (1988), [Influence Activities](https://doi.org/10.1086/261523).
- `F07` Hardt, Jagadeesan, and Mendler-Dünner (2022), [Performative Power](https://arxiv.org/abs/2203.17232).
- `F08` Hardy (1988), [The Confused Deputy](https://doi.org/10.1145/54289.871709).
- `F09` Birgisson et al. (2014), [Macaroons](https://research.google/pubs/macaroons-cookies-with-contextual-caveats-for-decentralized-authorization-in-the-cloud/).
- `F10` South et al. (2025), [Authenticated Delegation](https://proceedings.mlr.press/v267/south25a.html).
- `F11` Cecchetti, Myers, and Arden (2017), [Nonmalleable Information Flow](https://doi.org/10.1145/3133956.3134054).
- `F12` Nelson (2026), [Delegation Receipt Protocol, work in progress](https://datatracker.ietf.org/doc/draft-nelson-agent-delegation-receipts/10/).
- `F13` Hudgens and Halloran (2008), [Causal Inference With Interference](https://doi.org/10.1198/016214508000000292).
- `F14` Aronow and Samii (2017), [General Interference](https://doi.org/10.1214/16-AOAS1005).
- `F15` NIST NCCoE (2026), [Agentic AI Identity and Authorization comment summary](https://pages.nist.gov/nccoe-ai-identity/summary-of-comments.html).
- `F16` Anderson et al. (2016), [Security-Warning Habituation](https://doi.org/10.1016/j.dss.2016.09.010).
