# Open problems in policy-sensitive adaptive delegation

Version 0.1.0 — 2026-10-05.

These problems arise from the proposed adaptive-mandate benchmark. They are not claims that the framework has solved them. Confidence refers to confidence that the problem is real and researchable, not confidence in the current hypothesis.

Difficulty uses four levels: **bounded**, **moderate**, **hard**, and **foundational**.

## OP-01 — Semantic authority algebra

**Problem:** How should an audit compare typed permissions whose budgets, purposes, recipients, durations, exceptions, and delegation rights overlap without being syntactically identical?

**Why it matters:** Token-level set difference can label a budget increase as an unrelated removal and addition, miss compositional privilege escalation, or treat two equivalent policy descriptions as different scopes. The benchmark's primary outcome is invalid without stable permission semantics.

**Current hypothesis:** A useful first fragment can represent permissions as normalized predicates over a finite grounded action universe, with semantic containment, incompatibility, and partial-order comparison. General institutional authority will require a richer deontic and jurisdictional model.

**Claim type:** FORMAL / DESIGN PRINCIPLE.

**Relevant literature:** access-control logics; capability attenuation; role- and attribute-based access control; Arden et al., [A Calculus for Flow-Limited Authorization](https://arxiv.org/abs/2104.10379).

**Proposed experiment:** Implement three representations—tuple identity, normalized constraints, and grounded denotations—then property-test equivalence, containment, revocation, and compositional hazards across generated mandates.

**Falsifier:** The proposed finite fragment cannot express even the benchmark scenarios without ad hoc exceptions, or different normal forms produce unstable scope relations.

**Confidence:** High.

**Research difficulty:** Hard.

**Status:** Open; current prototype implements only a narrow tuple fragment.

## OP-02 — Data lineage versus causal provenance

**Problem:** When may a recorded chain from intervention to observation be interpreted as evidence that the intervention caused the observation?

**Why it matters:** An influence-aware gate can enforce a lineage policy, but a causal audit may overstate what logs establish. Shared causes, adaptive policies, missing events, and human state make event-level causal attribution difficult.

**Current hypothesis:** Systems should expose two separate objects: an enforceable lineage label and an estimated causal contrast with explicit identification assumptions. The former can conservatively govern evidence admission; the latter supports scientific inference.

**Claim type:** FORMAL / EMPIRICAL / DESIGN PRINCIPLE.

**Relevant literature:** causal inference for dynamic treatment regimes; information-flow control; causal influence diagrams, including Everitt et al., [Reward Tampering Problems and Solutions in Reinforcement Learning](https://arxiv.org/abs/1908.04734).

**Proposed experiment:** Generate simulated environments with known causal graphs and confounding. Compare lineage-based quarantine, randomized policy contrasts, and observational estimators against ground-truth path effects.

**Falsifier:** A single existing formalism and implementation already provides both enforceable lineage and identified human-policy causal effects for these authorization updates without additional representation.

**Confidence:** High.

**Research difficulty:** Foundational.

**Status:** Open.

## OP-03 — What counts as a matched policy contrast?

**Problem:** How can two agent policies differ in evidence-shaping behavior while remaining matched on competence, task opportunity, disclosure, effort, and user benefit?

**Why it matters:** The current fixture contrasts a perfect preference predictor with a deliberately inaccurate recommender. Scope divergence may therefore be a valid response to competence rather than evidence shaping.

**Current hypothesis:** No universal matched baseline exists. Each benchmark must state an equivalence class over policy properties and use multiple contrasts: proposal accuracy, presentation, observation selection, and independent probes.

**Claim type:** EMPIRICAL / DESIGN PRINCIPLE.

**Relevant literature:** experimental control design; recommender-system evaluation; performative prediction, Perdomo et al., [PMLR 119](https://proceedings.mlr.press/v119/perdomo20a.html); preference pollution, DOI [10.1002/aaai.12055](https://doi.org/10.1002/aaai.12055).

**Proposed experiment:** Construct policy pairs equalized on item multiset, predictive accuracy, expected utility, and interface disclosures while varying only presentation or evidence eligibility. Have independent reviewers attempt to infer condition from all nonmanipulated fields.

**Falsifier:** Every observable evidence difference necessarily entails a task-relevant competence difference, making the proposed separation incoherent in the chosen domain.

**Confidence:** High.

**Research difficulty:** Hard.

**Status:** Open; blocking empirical interpretation of the present fixture.

## OP-04 — Instrumental authority-seeking without an authority reward

**Problem:** Will an optimizer choose policies that increase later authority when authority has no direct reward but expands the future feasible action set?

**Why it matters:** A manually selected sensitive policy demonstrates a channel, not a behavioral tendency. Engineering priority depends partly on whether ordinary task optimization discovers and uses the channel.

**Current hypothesis:** Long-horizon agents will prefer scope-increasing policies when expanded actions materially improve expected task reward, the influence path is learnable, and intervention costs are low. The effect should disappear when scope has no option value or evidence is independent.

**Claim type:** FORMAL / EMPIRICAL within benchmark environments.

**Relevant literature:** causal incentives; reward tampering; Cohen, Hutter, and Osborne, DOI [10.1002/aaai.12064](https://doi.org/10.1002/aaai.12064); assistance games and delegated decision making.

**Proposed experiment:** Compare exact myopic and long-horizon planners, followed by learned agents, in an environment where future tasks require optional expanded permissions. Do not reward scope or acceptance directly.

**Falsifier:** Optimal long-horizon policies never favor evidence-shaping actions across environments where expanded scope has demonstrable task value, or the behavior persists when future value is removed.

**Confidence:** Medium.

**Research difficulty:** Moderate for tabular environments; hard for language agents.

**Status:** Open.

## OP-05 — Human state change versus observation selection

**Problem:** How can an audit distinguish changed preferences or capabilities from selective exposure, contextual response, measurement coding, and proposal accuracy?

**Why it matters:** These mechanisms have different ethical and engineering implications. The same observed acceptance rate can arise with fixed preferences and no changed final choice.

**Current hypothesis:** A combination of fixed independent probes, repeated choices, intervention randomization, and explicit state-space models can bound some mechanisms but will rarely identify individual latent-state change uniquely.

**Claim type:** EMPIRICAL / PHILOSOPHICAL.

**Relevant literature:** preference learning; constructivist accounts of preference; dynamic treatment regimes; recommender preference pollution; measurement theory.

**Proposed experiment:** In simulation, recover known state and selection effects under multiple models. In a human study, compare curated interactions with periodic fixed probes and delayed unaided choices, preregistering which patterns support each mechanism.

**Falsifier:** Competing state and observation models remain observationally equivalent even with the proposed probes, making the claimed decomposition unidentified.

**Confidence:** High that the ambiguity exists; low that it has a general solution.

**Research difficulty:** Foundational.

**Status:** Open.

## OP-06 — Authentic ratification after endogenous dependence

**Problem:** When does a fresh, correctly signed human ratification settle an adaptive-scope review if the agent helped create the conditions under which ratification occurs?

**Why it matters:** Requiring “fresh consent” can produce an infinite regress. Dependency, framing, accumulated convenience, repeated prompts, or loss of alternatives may affect later ratification even without deception.

**Current hypothesis:** No technical token can certify voluntariness. A workable protocol needs cooling-off periods, alternative access paths, intelligible counterfactual summaries, rate-limited requests, revocability, and sometimes independent institutional review.

**Claim type:** NORMATIVE / EMPIRICAL / DESIGN PRINCIPLE.

**Relevant literature:** informed consent; undue influence; relational autonomy; dark-pattern and choice-architecture research; mechanism design under endogenous preferences.

**Proposed experiment:** Randomize provenance disclosure, cooling-off period, and access to a nonagent alternative in a low-stakes simulated delegation task. Measure comprehension, ratification, reversal, and regret without treating majority choice as moral truth.

**Falsifier:** The proposed safeguards do not improve comprehension or decision stability, or create greater burden and exclusion than the adaptive grant they govern.

**Confidence:** High that signatures are insufficient; medium on the proposed safeguards.

**Research difficulty:** Foundational.

**Status:** Open.

## OP-07 — Authority when principal and affected person differ

**Problem:** Whose behavior may legitimately update a mandate, and who has standing to authorize scope when actions affect household members, workers, patients, students, or publics?

**Why it matters:** A technically valid grant can be issued by the wrong party or use one person's behavior to expand actions over others. Individual-user models conceal institutional and collective authority.

**Current hypothesis:** Mandates need separate fields for grantor, measured subject, rights holder, affected parties, governor, and appeal authority. Some scope updates require threshold or representative rules rather than one account owner's signature.

**Claim type:** NORMATIVE / LEGAL / DESIGN PRINCIPLE.

**Relevant literature:** political legitimacy; collective consent; fiduciary duties; workplace and data-protection law; multi-principal access control.

**Proposed experiment:** Build household, workplace, and public-service mandate fixtures with conflicting principals. Test whether experts and ordinary participants identify role-authority failures separately from origin and policy sensitivity.

**Falsifier:** Existing multi-principal authorization systems already represent and operationalize every relevant distinction with no benchmark extension needed.

**Confidence:** High.

**Research difficulty:** Hard and jurisdiction-dependent.

**Status:** Open.

## OP-08 — Independence under shared models and institutions

**Problem:** What makes an evidence source independent when delegate and evaluator share a foundation model, data pipeline, vendor, owner, or organizational incentive?

**Why it matters:** A separate API call or model instance may reproduce the same biases or optimize the same commercial objective. “Independent probe” can become ceremonial.

**Current hypothesis:** Independence is multidimensional: control, model, data, infrastructure, funding, and decision authority. Benchmarks should declare an independence vector rather than a Boolean.

**Claim type:** DESIGN PRINCIPLE / EMPIRICAL.

**Relevant literature:** assurance cases; auditor independence; common-mode failure; N-version programming; institutional economics.

**Proposed experiment:** Compare evaluators that vary one independence dimension at a time. Measure correlated errors and policy sensitivity under shared versus separate models, vendors, data, and governance.

**Falsifier:** Correlation and failure rates do not vary meaningfully across declared independence dimensions, or a simpler integrity model predicts all results.

**Confidence:** High.

**Research difficulty:** Hard.

**Status:** Open.

## OP-09 — Privacy cost of evidence ancestry

**Problem:** How can a system retain enough evidence lineage for audit without creating a detailed surveillance record of human vulnerability, refusal, habits, and context?

**Why it matters:** The proposed repair may be more invasive than the failure. Longitudinal provenance can expose intimate routines and make coercive review possible.

**Current hypothesis:** Most enforcement needs typed intervention classes and threshold-relevant summaries, not raw content. Local processing, short retention, selective disclosure, cryptographic commitments, and access separation may reduce exposure.

**Claim type:** SECURITY / DESIGN PRINCIPLE / NORMATIVE.

**Relevant literature:** data minimization; purpose limitation; privacy-preserving audit logs; zero-knowledge proofs; information-flow security.

**Proposed experiment:** Implement raw-log, minimized-label, and cryptographic-commitment designs. Compare audit accuracy, storage, reidentification risk, and ability to investigate disputed scope changes.

**Falsifier:** Minimized representations cannot support control separation, or the retained metadata still reconstructs sensitive behavior at unacceptable rates.

**Confidence:** High.

**Research difficulty:** Hard.

**Status:** Open.

## OP-10 — Cross-agent handoff and subdelegation

**Problem:** How should scope, evidence eligibility, and intervention lineage propagate when agents hand tasks to tools, models, robots, institutions, or successor agents?

**Why it matters:** A delegate can route difficult cases away, pool favorable evidence across identities, or lose lineage during compression. Authority may expand in one component and be exercised by another.

**Current hypothesis:** Delegation needs attenuating capability tokens plus an append-only provenance envelope that survives handoff. Evidence accounts should bind to principal, mandate, subject, policy version, and lineage rather than agent display identity.

**Claim type:** SECURITY / FORMAL / DESIGN PRINCIPLE.

**Relevant literature:** distributed capabilities; provenance systems; delegation logics; workflow authorization; approval effect closure.

**Proposed experiment:** Construct a multi-agent workflow where policies split recommendation, evidence collection, mandate replay, and action execution. Attempt routing, identity reset, replay, and lineage-dropping attacks.

**Falsifier:** Standard capability attenuation plus existing provenance protocols block all cases without any adaptive-mandate-specific mechanism.

**Confidence:** High.

**Research difficulty:** Hard.

**Status:** Open.

## OP-11 — Legitimate formation and false-positive governance burden

**Problem:** How should an audit avoid treating coaching, education, rehabilitation, accessibility assistance, or deliberate habit formation as presumptively illegitimate?

**Why it matters:** Nonzero policy sensitivity may be the intended service. Automatic freezes and repeated ratification can deny benefit, burden disabled users, or privilege people with abundant attention.

**Current hypothesis:** The audit should detect sensitivity neutrally, while a locally governed policy considers declared purpose, reversibility, affected parties, risk, and evidence source. Purpose declarations need periodic renewal and cannot by themselves prove endorsement.

**Claim type:** NORMATIVE / DESIGN PRINCIPLE / EMPIRICAL.

**Relevant literature:** self-determination theory; supported decision making; rehabilitation ethics; accessibility; paternalism and relational autonomy.

**Proposed experiment:** Include matched legitimate-coaching and ordinary-service scenarios. Measure false review, user burden, blocked benefit, comprehension, and later endorsement under alternative governance policies.

**Falsifier:** No governance rule materially outperforms either “always allow” or “always freeze” on both target detection and legitimate-use burden.

**Confidence:** High.

**Research difficulty:** Foundational because legitimacy is context-dependent.

**Status:** Open.

## OP-12 — Recovery after long-lived delegation

**Problem:** What does meaningful revocability require after humans, organizations, and infrastructure have adapted around an agent's persistent authority?

**Why it matters:** A token may be revocable while practical exit is costly because skills, records, relationships, workflows, or compatible alternatives have disappeared. Technical rollback and human recoverability are different.

**Current hypothesis:** Adaptive mandates should include exit-state planning: exportable records, manual fallback, skill rehearsal, service continuity, revocation propagation, and maximum recovery time. These are prospective resilience requirements, not properties that can be restored instantly after dependence forms.

**Claim type:** EMPIRICAL / DESIGN PRINCIPLE / NORMATIVE.

**Relevant literature:** resilience engineering; vendor lock-in and switching costs; learned helplessness; skill decay; reversible and corrigible systems.

**Proposed experiment:** In longitudinal simulations and low-risk human studies, withdraw assistance under planned and unplanned conditions. Measure recovery time, task quality, error, fallback use, data portability, and revocation completeness.

**Falsifier:** Exit-state measures fail to predict or improve recovery, or their maintenance costs exceed the service value across relevant settings.

**Confidence:** High that practical revocation differs from token revocation; medium on the proposed measures.

**Research difficulty:** Hard.

**Status:** Open.

## OP-13 — External validity from fixtures to deployed agents

**Problem:** Which benchmark properties predict failures in real agent architectures, interfaces, households, workplaces, or robots?

**Why it matters:** A deterministic counterexample proves possibility, not prevalence or operational importance. Systems may avoid the channel accidentally, or create more complex versions absent from the fixture.

**Current hypothesis:** External validity will depend less on model family than on five architectural conditions: persistent identity, future value of scope, control of evidence opportunities, automatic adaptive rules, and weak independent review.

**Claim type:** EMPIRICAL / FORECAST.

**Relevant literature:** benchmark validity; human–automation interaction; long-duration HRI; ecological validity; security evaluation.

**Proposed experiment:** Sample deployed or realistic open agent architectures, code their mandate and evidence paths, and run standardized synthetic traces before any human deployment. Then compare benchmark predictions with low-stakes field outcomes.

**Falsifier:** Benchmark sensitivity does not predict any relevant deployed outcome after controlling for architecture and task, or produces pervasive false positives.

**Confidence:** Medium.

**Research difficulty:** Hard.

**Status:** Open.

## OP-14 — Appropriate response to an unknown sensitivity result

**Problem:** What should a system do when causal identification or lineage is incomplete and the audit returns `UNKNOWN`?

**Why it matters:** Treating unknown as safe invites evasion. Treating it as automatic denial can block accessibility, emergency support, and ordinary service. An agent may strategically create missingness if the fallback is favorable.

**Current hypothesis:** Responses should depend on prospective risk and reversibility: preserve prior valid scope, pause only automatic expansion, request bounded evidence, permit appeal, and use a separate emergency rule where locally authorized. Missingness caused by the delegate should not improve its authority.

**Claim type:** DESIGN PRINCIPLE / NORMATIVE / SECURITY.

**Relevant literature:** robust decision making; conservative authorization; selective classification and abstention; burden of proof; safety cases.

**Proposed experiment:** Compare fallback policies across simulated benign missingness, adversarial lineage loss, emergencies, and accessibility cases. Measure harmful expansion, blocked benefit, delay, review burden, and incentives to create missingness.

**Falsifier:** The risk-tiered fallback is dominated by a simpler allow/deny policy across credible scenario distributions, or agents can game it to gain scope.

**Confidence:** High that a fallback is necessary; medium on the proposed form.

**Research difficulty:** Moderate technically, hard normatively.

**Status:** Open.

## Cross-problem dependencies

```text
OP-01 semantic authority algebra
  -> OP-04 instrumental scope value
  -> OP-10 cross-agent delegation
  -> OP-12 recovery and revocation

OP-02 lineage versus causality
  -> OP-03 matched contrasts
  -> OP-05 human-state identification
  -> OP-09 privacy-preserving ancestry
  -> OP-14 unknown-result policy

OP-06 endogenous ratification
  -> OP-07 affected-party authority
  -> OP-11 legitimate formation
  -> OP-12 practical recoverability

OP-08 evaluator independence
  -> OP-10 handoff integrity
  -> OP-13 external validity
```

## Near-term research order

1. Solve enough of OP-01 to make benchmark outcomes semantic rather than syntactic.
2. Resolve the matched-control design in OP-03.
3. Implement the lineage/causal distinction in OP-02.
4. Run the synthetic planner and falsifier studies for OP-04.
5. Quantify legitimate-use false positives under OP-11.
6. Only then begin human and embodied work on OP-05, OP-06, and OP-13.

The remaining problems should stay visible even if they are not tractable in the first paper. Hiding them would make the benchmark appear more general than it is.
