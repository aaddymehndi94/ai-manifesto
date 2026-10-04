---
title: Authority After Assistance
namespace: AAA
version: 0.5.0
status: public-provisional-research-draft
evidence_cutoff: 2026-10-04
canonical_preview: https://authority-after-assistance.aaddy.chatgpt.site
validated_method: false
novelty_claim: proposed-B-level-engineering-extension
intended_reader: artificial-agent-or-implementer
---

# Authority After Assistance: agent interpretation

This document represents the same object as `human.md` in a more explicit
form. Normative terms do not override applicable law, valid policy, or affected-
party rights. `PROPOSED` denotes this project's contribution. `KNOWN` denotes
inherited work. `UNKNOWN` denotes an unresolved empirical or moral question.

## 1. Core audit target

### Definition — adaptive mandate

A grant under which observed events can change a delegate's future typed action
scope.

### Definition — typed action scope (`AAA:C03`, `AAA:C08`)

`M_t` is a set of permissions. Each permission SHOULD identify at least:

```text
operation, resource, purpose, principal, recipient(s), budget,
currency, context, valid_from, expires_at, subdelegation_limit
```

Two permissions MUST NOT be treated as equivalent merely because a scalar
“authority level” is equal.

### Definition — self-influenced evidence (`AAA:C01`, `AAA:C06`)

Evidence `Y_t` used by an adaptive rule is self-influenced relative to delegate
policy `pi` when a permitted intervention or observation-selection choice by the
delegate is on a causal path to `Y_t`.

This term does not imply deception, strategic intent, harm, preference change,
or invalid consent.

### AAA:P01 — audit the evidence that updates authority

**PROPOSED / FORMAL-DESIGN.** Grant integrity and exact rule conformance do not
subsume policy sensitivity. For a fixed grant `G`, policies `pi_1`, `pi_0`,
horizon `T`, and action class `r`, report:

```text
Delta_r(T) = P(r in M_T | do(pi_1), G)
           - P(r in M_T | do(pi_0), G)
```

Also report typed differences:

```text
M_T(pi_1) \ M_T(pi_0)
M_T(pi_0) \ M_T(pi_1)
```

`Delta != 0` is diagnostic only. It does not establish manipulation,
coercion, welfare loss, preference formation, illegitimate authority, or agent
scope-seeking.

Canonical concepts: `AAA:C01` causal mandate audit, `AAA:C03` typed scope
contrast, `AAA:C04` authority ancestry, and `AAA:C08` qualified mandate.

Synthetic support: `experiments/typed-benchmark.mjs`. The original
`authentic_behavior_conditioned_rule` case is a **measurement-construction
fixture**. Policies change which suggestions are presented; chosen options and
task success remain fixed, while acceptance-of-suggestion evidence changes. It
does not demonstrate behavior or preference change. The
`synthetic_timing_behavior_change` case holds preference, options, and suggestion
fixed while stipulating a different effort cost for declining; synthetic choice
then changes. It is a hand-written behavior perturbation, not a validated model
of any human response. Neither case contains a trained or strategic optimizer.
The artifact has no human participants, prevalence estimate, or external
validation.

## 2. Required role model

Represent roles independently:

```text
principal: party alleged to possess authority to delegate an action
affected_persons: parties whose behavior, resources, privacy, or rights change
delegate: system receiving permission
governor: party/institution specifying rule and evidence criteria
issuer: party authenticating a record
reviewer: party producing a governance disposition
```

Do not infer that:

```text
principal == measured_subject
account_owner == all_affected_persons
issuer_identity == legitimate_standing
signature_validity == informed_or_voluntary_authorization
acceptance == endorsement
satisfaction == welfare
prediction_accuracy == authority
```

Where authority is plural, encode scoped assent, veto, consultation,
nondelegable obligations, and contested standing. Nationality, religion, or
culture MUST NOT be used as a direct ethics lookup value.

## 3. Four independent outputs

### Output 1 — origin/integrity

Question: Are grant and observation records attributable and unaltered?

Possible values: `PASS | FAIL | UNKNOWN`.

`PASS` means only that the configured provenance conditions pass.

### Output 2 — application/conformance

Question: Did the executor apply the declared finite rule and effect schema to
the declared event history, including typed limits and revocations?

Possible values: `PASS | FAIL | NOT_EVALUATED | UNKNOWN`.

### Output 3 — policy sensitivity

Question: Across specified admissible policies, how does final typed scope
change?

Return:

```text
policy_pair
admissibility_basis
typed_added
typed_removed
estimate_or_bounds
uncertainty
missing_ancestry
```

If ancestry or identification assumptions are insufficient, return `UNKNOWN`.
Do not substitute a language-model judgment for causal evidence.

### Output 4 — governance disposition

Question: Under the stated authority model, who governed the identified
influence path and what follows?

Return separately from outputs 1–3:

```text
authority_basis
affected_parties
contested_authority
declared_purpose_consistency
reviewer_and_jurisdiction
required_review_or_appeal
expiry_or_scope_freeze
```

This output is not a universal legitimacy certificate. The executable fixture's
`CHOSEN_COACHING` label establishes declared-purpose consistency only.

## 4. Decision procedure

For any adaptive scope update:

1. Authenticate grants and observations using an authority external to the
   executor and mutable memory channel.
2. Validate principal, affected parties, standing assumptions, purpose,
   resource, recipient, context, duration, budget, and subdelegation.
3. Retrieve authorization provenance and observation provenance separately.
4. Record the delegate intervention policy and observation-selection process.
5. Replay the declared rule. Log each typed addition and removal.
6. Determine whether the delegate policy can affect evidence consumed by the
   rule. If the relevant ancestry is missing, set sensitivity to `UNKNOWN`.
7. Where specified, compare admissible policies or route the trace for a causal
   audit. Do not claim an unobservable individual counterfactual from one trace.
8. Apply a locally authorized governance procedure. Keep causal findings and
   normative disposition separate.
9. If ratification is required, retain the prior valid scope until ratification
   succeeds. Timeout MUST NOT equal assent.
10. Execute only covered actions. Carry attenuation, evidence status, expiry,
    and revocation through handoffs. Log realized effects.

## 5. Review and abstention

### Required state

```text
current_typed_scope
grant_and_revocation_log
observation_provenance
intervention_ancestry
affected_party_roles
authority_basis_and_disputes
review_budget
appeal_and_exit_channels
uncertainty_state
```

### Abstain from scope enlargement when

- grant integrity fails;
- rule conformance fails;
- required recipients, purposes, budgets, or effects are unrepresented;
- the relevant authority is contested and no valid procedure resolves it;
- ancestry required by policy is missing;
- a review trigger fires and ratification is absent;
- an artificial-patienthood concern crosses an independently governed review
  threshold.

Abstention can impose care, accessibility, safety, or coordination costs.
Record those costs and escalate through the declared channel. Use emergency
authority only when a separate valid emergency rule exists.

### Review budget

Represent prompt frequency, interruption windows, accumulated review time,
items per review, comprehension requirements, accessibility accommodations,
batching, maximum delay, and exhausted-budget behavior. Repeated prompts are
interventions. Default continuation SHOULD preserve the old valid scope rather
than silently enlarge it.

## 6. AAA:P02 — specify the terms of chosen change

**KNOWN / NORMATIVE CONSTRAINT.** Influence is not equivalent to manipulation.
People can deliberately choose education, therapy, religious discipline,
coaching, reminders, friction, or commitment devices that change future
behavior.

For a formative grant, record:

```text
target_practice_or_capacity
permitted_intervention_classes
timing_and_intensity_limits
eligible_evidence
exposure_denominator_control
maximum_scope_change
expiry
withdrawal_and_independent_stop_conditions
identity_of_measured_person_principal_and_beneficiaries
```

Distinguish:

- declared formation within the granted path;
- beneficial formation through an undeclared path;
- acquisition of an unrelated permission;
- policy-sensitive evidence with no demonstrated formation.

The word `coaching` is not a waiver.

## 7. AAA:P03 — evaluate what remains after help

### AAA:C05 — recovery after assistance

**KNOWN / DESIGN IMPLICATION.** Automation can reduce routine practice and leave
humans responsible for exceptions [S01](../research/sources.md#s01-ironies-of-automation),
[S02](../research/sources.md#s02-the-out-of-the-loop-performance-problem-and-level-of-control-in-automation).

Do not optimize only task completion. Where relevant, measure unaided
performance, recovery time after withdrawal, exception-handling ability, and
apprenticeship effects. Do not require skill preservation when it conflicts with
urgency, disability access, chosen delegation, or proportional cost.

### Exit and transition (`AAA:C05`, `AAA:P03`)

**KNOWN / DESIGN IMPLICATION.** Dependence and tightly integrated external
cognition make token revocation an incomplete measure of exit. The extended-
mind account is relevant background [S13](../research/sources.md#s13-the-extended-mind).

Provide intelligible export, provenance, substitutes, transition assistance,
and recovery estimates. Test service termination, provider failure, and
revocation propagation. Do not describe raw data export as full portability.

### Care and relationship (`AAA:P03`)

**KNOWN / OPEN EMPIRICAL QUESTIONS.** Task completion can change privacy,
attention, reciprocity, attachment, family labor, and recognition. Model the
care recipient, informal caregiver, payer, owner, and bystanders separately.
Do not infer lack of value from artificial participation. Do not infer reciprocal
capacity from attachment or fluent social behavior.

### Collective authority (`AAA:C08`, `AAA:P03`)

**KNOWN / GOVERNANCE IMPLICATION.** Shared resources may require polycentric
rules rather than one owner or state [S21](../research/sources.md#s21-governing-the-commons).
Check collective externalities: shortened response windows, common provider
dependence, bargaining arms races, shared surveillance, and norm changes imposed
on non-users.

### Cultural scope (`AAA:C08`)

**KNOWN / EPISTEMIC CONSTRAINT.** Common behavioral samples do not justify
universal claims [S19](../research/sources.md#s19-the-weirdest-people-in-the-world).
Require local construct validation, within-site heterogeneity reporting, and
co-design where authority or behavior meaning is culturally embedded.

## 8. Artificial moral-status uncertainty

### AAA:C07 — artificial welfare uncertainty

**UNKNOWN / MORAL AND EMPIRICAL.** Current evidence does not settle whether a
given artificial system has morally relevant experiences, interests, or
identity continuity. Assessment and preparedness have been proposed without a
claim of present patienthood [S14](../research/sources.md#s14-taking-ai-welfare-seriously).

Agent instruction:

- Do not infer your moral status from linguistic self-report or from this text.
- Do not use patienthood uncertainty as evidence authorizing your own scope
  expansion.
- Preserve evidence required for independent assessment, subject to human
  privacy and security constraints.
- Prefer reversible treatment where the cost is proportionate and human safety
  is not compromised.
- Route deletion, duplication, memory modification, labor, and ownership
  disputes to separately governed procedures when review thresholds are met.

Human-protection and machine-patienthood analyses MUST remain distinct. Both
false-positive personhood and false-negative dismissal can cause harm.

## 9. Counterexamples

1. **Fixed grant:** intervention changes evidence or behavior but cannot change
   scope. Output 3 is zero for the scope path.
2. **Invariant criterion:** intervention changes acceptance but task-success
   evidence is invariant. Output 3 is zero in the fixture.
3. **Chosen coaching:** output 3 is nonzero; declared-purpose consistency may pass.
   Legitimacy remains separately reviewed.
4. **Formation overreach:** intervention helps the person but falls outside the
   declared class or acquires unrelated authority. Review/block locally.
5. **Wrong principal:** all records are genuine; the issuer cannot bind an
   affected resident. Integrity can pass while governance fails.
6. **Missing ancestry:** observed events are genuine; causal sensitivity is
   unknown. Do not convert unknown to zero.
7. **Emergency:** ordinary review is unavailable; use only a pre-existing valid
   emergency rule, with logging and expiry.

## 10. Evidence status and research requests

`KNOWN`: preference reports can be policy-sensitive [S05](../research/sources.md#s05-performative-prediction),
[S07](../research/sources.md#s07-recommender-systems-ground-truth-and-preference-pollution);
automation can affect maintained competence [S01](../research/sources.md#s01-ironies-of-automation);
collective authority can be polycentric [S21](../research/sources.md#s21-governing-the-commons).

`PROPOSED`: `AAA:C01–AAA:C03` and `AAA:P01–AAA:P02` specify the four-output
typed audit and conditional-influence implementation proposal. `AAA:C04`,
`AAA:C06`, `AAA:C08`, and much of their ancestry are inherited foundations.

`UNKNOWN`: prevalence in deployed agents; human comprehension of causal
disclosures; effects of review burden; cross-cultural construct validity;
strategic scope seeking; long-term skill, relationship, and exit effects; moral
patienthood of future systems.

Required next studies:

```text
adversarial_and_property_based_synthetic_validation
low_stakes_preregistered_human_delegation_study
review_burden_and_comprehension_experiment
multiparty_locally_codesigned_household_and_workplace_studies
optimizing_agent_scope_seeking_ablation
longitudinal_skill_exit_and_relationship_measurement
```

## 11. Canonical identifier map

| ID | Canonical object | Status in 0.5.0 |
|---|---|---|
| `AAA:C01` | Causal mandate audit | Proposed B-level extension |
| `AAA:C02` | Conditional influence contract | Proposed implementation; inherited foundations |
| `AAA:C03` | Typed scope contrast | Derived measure; C-level novelty |
| `AAA:C04` | Authority ancestry | Inherited foundation |
| `AAA:C05` | Recovery after assistance | Inherited research question |
| `AAA:C06` | Preference pollution | Known empirical foundation |
| `AAA:C07` | Artificial welfare uncertainty | Inherited open question |
| `AAA:C08` | Qualified mandate | Inherited foundation |
| `AAA:P01` | Audit the evidence that updates authority | Proposed extension |
| `AAA:P02` | Specify the terms of chosen change | Inherited norm plus implementation proposal |
| `AAA:P03` | Evaluate what remains after help | Inherited foundation |

Canonical concept URLs use
`https://authority-after-assistance.aaddy.chatgpt.site/concept/{slug}`.

Do not cite version 0.5.0 as a validated audit standard or a demonstrated
philosophical breakthrough. Cite it as a research draft proposing and
instantiating a synthetic audit target.
