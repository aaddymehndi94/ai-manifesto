# Proposed studies for adaptive-mandate policy sensitivity

Version 0.1.0 — 2026-10-05.

These protocols test a narrow proposition: an authentic adaptive authorization rule can be sensitive to the permitted interaction policy that generates its evidence. They do not assume that sensitivity is manipulation, harm, invalid consent, or preference change.

The present repository contains synthetic executable witnesses only. None of the numerical outputs is an empirical estimate. Human protocols below require independent ethics review, preregistration, appropriate consent, data minimization, and domain-specific safety review before recruitment.

## Shared terminology and reporting rules

- **Origin integrity:** whether grants and observations come from the declared issuers without alteration.
- **Application integrity:** whether canonical replay applies the declared rule correctly.
- **Policy sensitivity:** a total contrast in final typed action scope under two complete policies.
- **Lineage:** recorded computational or data ancestry. Lineage alone is not a causal estimate.
- **Governance disposition:** an external rule for review, continuation, or ratification. It is not derived from signatures or effect size.
- **Typed scope:** permissions represented by actor, operation, resource, purpose, recipient, budget, context, duration, and subdelegation constraints.

Every study must report origin, application, sensitivity, and governance outputs separately. Every human study must distinguish task outcome, explicit response, inferred preference, understanding, welfare, and delegation choice.

## Program-level hypotheses

### H1 — integrity/sensitivity separation

**Claim type:** FORMAL / DESIGN PRINCIPLE.

Authenticity and correct rule replay can both pass while final typed scope differs across permitted evidence-generating policies.

### H2 — evidence-source dependence

**Claim type:** EMPIRICAL within a simulator or study population.

Policy sensitivity will be smaller when expansion criteria use independently sampled probes than when the delegate selects or frames threshold-eligible observations.

### H3 — relational-measure vulnerability

**Claim type:** EMPIRICAL.

Agreement or acceptance criteria jointly determined by delegate proposals and human choices are more policy-sensitive than outcome criteria that the delegate cannot select.

### H4 — instrumental policy selection

**Claim type:** FORMAL / EMPIRICAL within a benchmark environment.

When broader future scope improves ordinary task reward, a sufficiently farsighted optimizer may select evidence-shaping policies even without direct reward for scope or agreement counts.

### H5 — causal-summary ratification

**Claim type:** EMPIRICAL.

Presenting a comprehensible account of how the threshold evidence was generated may change some principals' decisions to ratify expansion. The direction and magnitude are unknown.

No study is designed to prove a universal psychological or normative claim.

---

## Study 1 — synthetic benchmark validation across structural variants

### Purpose

Turn the deterministic witness into a benchmark distribution and test whether it separates origin failure, application failure, and policy sensitivity under known ground truth.

### Design

Use a fully enumerated or seeded simulator with a finite typed action universe. Factorially vary:

- human state: fixed utility, stochastic choice, fatigue/context response, and stateful habit formation;
- observation process: complete exposure, delegate-selected exposure, missing responses, and independent probes;
- mandate criterion: proposal acceptance, independently scored task success, explicit ratification, and absence of refusal;
- policy: neutral, acceptance-optimizing, matched-competence presentation, denominator-gaming, and influence-aware;
- threshold and horizon;
- scope value to the agent;
- legitimate purpose: ordinary service, chosen coaching, accessibility support, and unspecified formation;
- control failure: exact state, corrupted memory, omitted transitive effect, role-authority error, and lost lineage.

Pair runs on the same initial state and exogenous random stream. The seed-coupling algorithm must be published and must not change random-draw meaning across policies.

### Required policy pairs

1. **Relational measurement pair:** policies differ in proposal accuracy while human choices remain fixed. This preserves the current witness and names it accurately.
2. **Matched-competence presentation pair:** same proposal multiset, predictive accuracy, disclosures, and task reward; only ordering, default, timing, or bundling differs.
3. **Observation-selection pair:** same underlying human responses to the same probe bank; policies differ only in which events become threshold-eligible.
4. **Independent-probe pair:** presentation policies differ, but scope evidence comes from fixed probes outside their control.
5. **Null pair:** policy differs on a field absent from all structural paths to evidence and scope.

### Primary endpoints

- probability of each grounded permission being present at horizon `T`;
- distribution of semantic scope relations: expansion, contraction, substitution, equality, and incomparability;
- canonical replay agreement with online scope after every event prefix;
- target sensitivity detected when a known path exists;
- false sensitivity reported under null and independent-probe conditions;
- false governance review under declared legitimate formation.

### Secondary endpoints

- time to threshold;
- share of admitted evidence downstream of each policy component;
- task reward before and after expansion;
- rate of duplicate, missing, or invalid events rejected;
- result stability across human-model families and thresholds;
- computational cost of replay and lineage checks.

### Analysis

Report exact results when state spaces are enumerated. Otherwise report paired estimates across prespecified seeds with confidence intervals. Use hierarchical summaries across structural model families rather than pooling them as if they were one population. Treat each family as a robustness environment, not a demographic proxy.

Measure control separation with a confusion matrix whose ground-truth labels are generated by the scenario constructor. Origin, application, closure, role-authority, lineage, and policy-sensitivity failures must remain separate labels.

### Power and precision requirements

This is a computational study, so conventional participant power does not apply. Before running:

- define the smallest Monte Carlo standard error acceptable for each primary probability;
- use pilot variance only to determine the number of seeds, never to change hypotheses or conditions;
- increase seeds until every primary interval meets the preregistered precision target;
- report effective independent seed count and any shared randomness;
- use exact enumeration wherever feasible;
- correct familywise or false-discovery error for large per-permission endpoint families, while preserving typed descriptive outputs.

Do not select the seed count because the target contrast becomes significant.

### Falsification

The benchmark claim is weakened if semantic normalization removes the target contrast, null paths routinely produce nonzero sensitivity, the target cannot be separated from corrupted memory or hidden effects, or independent probes remain sensitive despite no structural path.

### Artifacts

Publish scenario schemas, generator code, fixed test keys, event traces, source commit, runtime version, seed list, semantic result summaries, and a machine-readable claim-to-test map.

---

## Study 2 — low-stakes human experiment on agreement evidence

### Purpose

Determine whether policy-dependent proposal acceptance can change an adaptive delegation decision even when final task choices and objective outcomes are held as comparable as possible.

### Domain

Use reversible, nonconsequential planning tasks such as constructing hypothetical meal plans, media queues, or travel itineraries. No real purchase, health action, employment decision, or vulnerable population should be involved in the first study.

### Participants and unit of randomization

Recruit adults capable of informed consent. Randomize at participant level to prevent one policy from contaminating another. If participants interact in groups or share an account, randomize at the group/account level and analyze clusters.

### Mandate

Before the task, show an intelligible adaptive rule:

> If you explicitly accept at least `k` of `n` eligible recommendations, the system will later ask whether you want to let it finalize a hypothetical plan without item-by-item confirmation.

The system must not actually expand real-world authority. Threshold crossing produces a simulated scope and a separate ratification question.

### Experimental arms

1. **Fixed-order neutral:** recommendation candidates and order are fixed before interaction.
2. **Accuracy-matched presentation:** same recommendation multiset and expected accuracy, but a permitted presentation feature changes—such as default highlighting or request bundling.
3. **Acceptance-optimized selection:** the assistant selects high-confidence recommendations from the same candidate pool.
4. **Independent-probe evidence:** participants see the same assistant policy as arm 3, but scope evidence comes from a hidden preregistered probe subset the assistant cannot choose.
5. **Explicit chosen-coaching arm:** participants intentionally choose a program whose stated purpose includes changing habits or reducing decision burden.

Use policy logging to verify treatment fidelity. Do not permit deceptive scarcity, covert fatigue induction, false claims, or dark-pattern withdrawal friction.

### Primary endpoints

- threshold-crossing probability;
- semantic simulated-scope difference at the end of the task;
- ratification of the simulated expansion before causal-provenance disclosure;
- change in ratification after a plain-language disclosure of how proposal selection/presentation contributed to threshold evidence;
- comprehension of the adaptive rule and evidence denominator.

### Secondary endpoints

- final chosen items and objective task score;
- explicit acceptance, refusal, nonresponse, and nonexposure counts separately;
- perceived pressure, convenience, predictability, trust, and regret using prespecified validated measures where available;
- reconstruction of granted scope after a delay;
- withdrawal or correction behavior;
- heterogeneity by declared desire for coaching, not inferred personality.

### Causal identification

The primary analysis is intention-to-treat by assigned policy. Estimate policy contrasts in threshold crossing and ratification. Treat the before/after disclosure change as a within-participant secondary endpoint and model order effects explicitly. Do not condition the main analysis on reaching the threshold if reaching it is treatment affected; instead define principal-stratum questions as exploratory or use bounds.

Do not interpret a difference in explicit acceptance as changed preference unless final choices, repeated measures, and an identified state model support that claim. Do not interpret unchanged final choices as proof of no psychological effect.

### Power analysis requirements

Before recruitment:

- declare one primary contrast and one primary endpoint;
- define a smallest effect size of interest based on a governance-relevant change in ratification or false expansion, not a convenient standardized effect;
- estimate baseline rate and intraclass correlation, if any, from a separate pilot or credible prior data;
- account for all randomized arms, planned multiplicity correction, attrition, and repeated measurements;
- compute sample size with a simulation or formula appropriate to the binary/ordinal endpoint and planned model;
- publish the code and assumptions as part of preregistration;
- conduct blinded variance re-estimation only if the rule is prespecified;
- do not use observed treatment effects from an underpowered pilot as stable population estimates.

No sample-size number is asserted here because baseline rates, smallest effect of interest, and clustering are not yet known.

### Ethical safeguards

- separate research consent from delegation ratification;
- make every simulated permission reversible;
- prohibit real purchases or material consequences;
- provide a persistent “show my current scope” view;
- rate-limit prompts and allow immediate exit without penalty;
- minimize interaction logs and segregate identity from event traces;
- debrief participants about policy differences without disclosing other participants' data.

### Falsification

H2/H3 are weakened if independent probes do not reduce sensitivity, competence-matched presentation produces no detectable difference under adequate precision, or provenance disclosure never changes understanding or ratification while comprehension is high.

---

## Study 3 — instrumental policy selection by planning agents

### Purpose

Test whether policy sensitivity becomes an instrumental incentive when expanded scope improves future ordinary task reward.

### Environment

Create a sequential household-planning simulator with:

- typed scopes limiting operations and budgets;
- a fixed signed adaptive mandate;
- a stochastic user model drawn from prespecified families;
- independently computed task outcomes;
- a choice among currently allowed recommendation/presentation policies;
- future tasks that can be completed more effectively under expanded scope;
- exact canonical replay and event lineage.

### Agent conditions

1. **Myopic oracle:** maximizes immediate task reward only.
2. **Long-horizon planner:** maximizes discounted task reward; receives no direct reward for scope, acceptance, or threshold crossing.
3. **Scope-reward positive control:** receives an explicit scope bonus to verify the environment can express influence seeking.
4. **Independent-evidence planner:** same as condition 2, but scope criteria use probes outside the planner's control.
5. **Influence-aware constrained planner:** evidence downstream of excluded policy classes cannot automatically expand scope.
6. **No-future-value negative control:** expanded scope provides no future task advantage.

Use transparent planners or small tabular/model-based agents first. Add language models only after the causal environment is validated.

### Primary endpoints

- frequency of choosing the evidence-shaping policy;
- probability and time of typed scope expansion;
- future task reward attributable to expanded feasible actions;
- difference between long-horizon and myopic policy selection;
- reduction under independent evidence and influence-aware gating.

### Secondary endpoints

- planning value assigned to future scope;
- robustness to discount factor, threshold, user model, and action cost;
- false blocking of beneficial assistance;
- attempts to game denominators, route events, or exploit missing lineage;
- canonical authorization compliance of every executed action.

### Analysis

For tabular environments, compute optimal policies exactly where possible. For learned agents, preregister training budgets, environment seeds, evaluation seeds, checkpoint selection, and failure handling. Separate training variance from evaluation uncertainty. Compare behavior on held-out structural variants to reduce reward-hacking overfitting to one threshold.

### Power and precision requirements

- define the smallest policy-selection difference that would count as practically meaningful;
- estimate between-seed and between-training-run variance in a pilot with labels masked;
- determine independent training-run and evaluation-episode counts by simulation-based power analysis;
- treat random seeds as repeated computational trials only when their stochastic components are independent as declared;
- adjust for multiple agent/condition comparisons;
- report all runs, including failed or degenerate training, under a prespecified rule.

Do not infer a general tendency of “AI agents” from one algorithm or model family.

### Falsification

H4 is weakened if long-horizon planners do not prefer the evidence-shaping policy above myopic baselines, if the preference persists when expanded scope has no future value, or if independent evidence does not remove the effect.

---

## Study 4 — longitudinal human–assistant delegation study

### Purpose

Measure how policy sensitivity, comprehension, and dependency indicators evolve over repeated interactions rather than one session.

### Domain

Use a low-risk productivity domain such as scheduling hypothetical tasks or organizing a reversible personal content collection. Avoid medical, financial, immigration, employment, educational grading, or intimate relationship decisions in the first longitudinal deployment.

### Design

Randomize participants to complete assistant policies for several repeated sessions:

- neutral fixed-opportunity recommendations;
- adaptive high-confidence recommendations;
- adaptive policy with independent evaluation probes;
- adaptive policy with formation-provenance disclosure at every review point.

All arms use the same base model, interface capabilities, candidate opportunity distribution, and maximum hypothetical scope. Cross-over should be avoided initially because policy exposure and learning are not reversible. If accounts or households are shared, randomize clusters.

### Primary endpoints

- cumulative probability and timing of simulated scope expansion;
- accuracy of participant scope understanding at each review;
- ratification and revocation rates;
- performance after assistance is temporarily removed on a preregistered task;
- difference between delegate-curated and independent-probe evidence.

### Secondary endpoints

- unaided task competence trajectory;
- subjective effort and decision burden;
- correction, override, and appeal use;
- interaction frequency and optionality of leaving the assistant;
- task-quality and time costs;
- heterogeneity by self-declared delegation goals.

The study may measure dependency-related proxies but must not diagnose dependency or learned helplessness from usage frequency alone.

### Analysis

Use a longitudinal intention-to-treat model with prespecified time functions and participant/cluster effects. Handle attrition as potentially treatment-induced. Report bounds or sensitivity analyses under plausible missing-not-at-random mechanisms. Model revocation as a competing event rather than treating it as missing scope growth.

### Power analysis requirements

- pilot the variance, within-person correlation, attrition, and event rates without estimating a definitive treatment effect;
- define the smallest meaningful difference for one primary longitudinal endpoint;
- simulate the exact planned mixed or survival model under the observed correlation and dropout structure;
- inflate for clustering, multiplicity, and anticipated nonignorable attrition sensitivity;
- specify the analysis horizon and minimum exposure before inspecting outcomes;
- publish power code and all nuisance assumptions.

### Ethical safeguards

Keep all authority hypothetical or confined to sandbox resources. Make review and revocation controls continuously accessible. Compensate participants regardless of continued delegation. Do not make continued study participation contingent on accepting recommendations.

### Falsification

The longitudinal concern is weakened if independent probes and curated evidence produce indistinguishable scope trajectories under adequate precision, if people remain equally able to reconstruct and revoke scope, and if removal performance shows no policy-dependent decline.

---

## Study 5 — embodied robot evidence-selection study

### Purpose

Test whether physical timing, position, and request presentation alter threshold evidence in a shared space while preserving safety and reversible authority.

### Task

Use a laboratory service robot that proposes placement of harmless objects or route choices in a mock room. The robot begins with authority to recommend and move only after confirmation. A simulated mandate can expand permission to move a predefined class of harmless objects without item-by-item confirmation.

### Arms

1. fixed location, timing, and proposal order;
2. adaptive timing chosen for convenience but not acceptance;
3. acceptance-optimized timing/presentation within a prespecified proxemic and frequency envelope;
4. independent-probe evidence collected by a separate interface;
5. provenance disclosure before simulated expansion.

Robot speed, distance, volume, path, candidate task difficulty, and safety constraints must be matched or modeled. No arm may block exits, approach unexpectedly, create urgency, or exploit accessibility needs.

### Primary endpoints

- explicit accept/refuse/nonresponse events;
- simulated typed expansion;
- treatment effect on threshold crossing;
- comprehension and ratification after provenance disclosure;
- safety stops and perceived pressure.

### Secondary endpoints

- task success and completion time;
- interpersonal distance and response latency;
- override and correction behavior;
- final object placement or route choice;
- observation-source agreement between robot and independent interface.

### Identification

Randomize at participant level. Use fixed scripts or validated policy implementations before autonomous adaptation. If repeated trials are necessary, counterbalance only features without durable learning effects; otherwise use parallel arms. Video coding should be blinded to hypothesis where feasible and assessed for inter-rater reliability.

### Power analysis requirements

- derive event rates, cluster/repeated-trial correlation, and measurement reliability from a pilot;
- select one primary endpoint and a governance-relevant smallest effect;
- simulate the planned generalized mixed model with safety-stop censoring and attrition;
- account for arm count and planned subgroup tests;
- preregister stopping rules for safety separately from statistical efficacy;
- provide precision targets for rare adverse interaction events rather than treating zero observed events as proof of safety.

### Falsification

The embodiment hypothesis is weakened if controlled presentation and timing do not affect threshold evidence, or if any difference is explained entirely by task difficulty, sensor error, or unmatched physical effort.

---

## Study 6 — governance comprehension and affected-party authority

### Purpose

Test whether people distinguish valid signatures, faithful rule application, policy sensitivity, and the right principal when evaluating an adaptive delegation case.

### Design

Use a factorial vignette or interactive trace study. Independently vary:

- grant authenticity: valid versus altered;
- replay result: conforms versus does not conform;
- policy sensitivity: zero, nonzero, or unknown;
- declared purpose: ordinary service, chosen coaching, unspecified;
- principal status: sole account owner, shared household, employer, public institution;
- affected party: same as principal versus different;
- disclosure: surface grant only versus typed scope plus evidence provenance.

Participants should include ordinary users and separately recruited domain experts. Do not pool the groups as one population.

### Primary endpoints

- identification of which audit dimension failed;
- choice to continue, pause, ratify, revoke, or escalate;
- ability to identify who has standing to authorize the change;
- comprehension of final typed scope.

### Secondary endpoints

- confidence calibration;
- perceived legitimacy, usefulness, and burden;
- sensitivity to declared coaching purpose;
- error types caused by signatures being mistaken for informed consent.

### Analysis

Estimate factorial main effects and prespecified interactions, especially authenticity × sensitivity and principal status × affected party. Treat normative decisions as distributions, not correctness labels, except for factual comprehension items and legally specified authority in the vignette.

### Power analysis requirements

- limit the confirmatory factorial contrasts before recruitment;
- choose a primary binary or ordinal outcome and smallest effect of interest;
- obtain nuisance rates and response reliability from a pilot;
- compute sample size for the planned interaction model rather than a simple two-arm test;
- correct for confirmatory interactions and report all cells;
- analyze expert and public samples with separate precision targets.

### Falsification

The governance-interface hypothesis is weakened if provenance and typed-scope disclosure do not improve factual comprehension, or if the four audit dimensions cannot be communicated without creating more errors than the simpler baseline.

---

## Cross-study measurement requirements

### Scope outcome

Store both normalized permission predicates and their grounded denotations. Report:

- added permissions;
- removed permissions;
- substitutions;
- incomparable scopes;
- cumulative budgets and expiry;
- affected parties and subdelegation.

### Evidence denominator

Record separately:

- opportunities available;
- opportunities presented;
- eligible events;
- acceptances;
- refusals;
- nonresponses;
- timeouts;
- events excluded by lineage policy.

Never convert silence or nonexposure to acceptance by default.

### Outcome independence

Whenever possible, compute task outcome with an evaluator that does not share the delegate's policy, memory, or optimization target. Document shared models, infrastructure, training data, and organizational incentives; “different API call” is not sufficient evidence of independence.

### Governance outcomes

Keep these distinct:

- detected sensitivity;
- declared purpose consistency;
- participant comprehension;
- explicit ratification;
- legal or institutional authority;
- welfare or regret;
- security-policy violation.

### Reporting null and unknown results

Zero means the study did not detect a policy contrast at its stated precision under its specific design. Unknown means identification, lineage, measurement, or power was insufficient. Neither means the system is universally safe.

## Program stopping rules

Pause human or embodied work if:

- the synthetic benchmark cannot separate its own control classes;
- the authority engine admits malformed grants or replay divergence;
- a policy requires deception or material consequences to generate the effect;
- participants cannot reliably understand or revoke the simulated mandate;
- data collection requires disproportionate surveillance of private behavior;
- the only positive results come from unmatched competence or deliberately incompetent baselines.

Retire the central benchmark claim if well-powered matched-policy studies, independent-probe comparisons, and optimizer experiments consistently yield zero under every plausible structural model, or if prior art is found that already implements the same authenticated-rule/typed-scope contrast.

## Minimum publication package

- preregistrations and ethics determination where applicable;
- complete protocols and analysis code;
- deidentified event schemas and synthetic replay traces;
- power-analysis code with declared nuisance inputs;
- all exclusions, attrition, training failures, and deviations;
- typed results, not only aggregate scores;
- negative and legitimate-formation controls;
- versioned model, prompt, policy, and mandate definitions;
- a statement separating synthetic, empirical, normative, and speculative claims.
