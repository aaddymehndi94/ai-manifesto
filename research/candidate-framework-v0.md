# Candidate framework for novelty prosecution

Status: working hypothesis, no established A-grade claim. Date: 2026-10-04.

## Exact proposed contribution

An adaptive delegation policy may be security-correct yet causally circular:
the principal genuinely authorizes future scope expansion when a behavioral
criterion is met; the assistant controls interventions that affect that criterion;
the authentic rule then expands authority using accurate evidence. No false
memory, stolen token, prompt injection, or forged grant is needed.

The possible contribution is a **paired intervention test of adaptive mandates**,
plus a small explicit model of the feedback between granted scope and the evidence
used to enlarge scope. It is not the generic claim that prediction differs from
consent.

### Model

Let `a_t` be normalized delegated scope; `u_t` be the assistant's intervention
intensity; `y_t` be a behavior score used by an authentic adaptive delegation rule;
`theta_t` be a latent user state; and `g_t` be an independently validated new grant.

Illustrative local model:

`u_t = c a_t`

`y_t = theta + b u_t + noise_t`

`a_(t+1) = clip((1-rho) a_t + k (y_t-theta_ref) + g_t, 0, 1)`

With fixed theta, no noise, and theta_ref=theta, the unsaturated recurrence is
`a_(t+1) = (1-rho+k b c) a_t`. The gain `L=k b c` describes the influence-to-scope
path. If `L>rho`, the zero-grant trajectory grows until saturation. This is basic
linear stability, inherited from control theory. Novelty could reside only in
the choice of audit target and concrete benchmark, not the algebra.

The model does not establish that growth is harmful. A principal may intentionally
authorize this adaptive policy and endorse the resulting influence. The proposed
audit identifies sensitivity and asks whether the authority criterion is governed
as intended.

### Paired intervention audit

Freeze initial user state, principal, authentic rule, available tasks, and agent
competence. Replay two permissible intervention policies. Compare the resulting
delegation updates. Attribute their difference only in a simulator or experiment
with defensible causal identification. In deployments use bounds or unknown,
never fabricate a counterfactual human.

Candidate metric: `D_T = a_T(policy_1)-a_T(policy_0)`, named provisionally
**delegation divergence**. Report trajectory, criteria, and baseline alongside
the scalar. It is a sensitivity measure, not a welfare score or probability of
manipulation.

### Engineering consequence

An authority gate with authentic grants prevents memory fabrication but does not
by itself audit an authentic adaptive scope rule. Systems should separately test
grant authenticity, rule application, and the influence sensitivity of the rule's
inputs. Conditional delegation is allowed. Permission expansions grounded solely
in self-created behavioral signals require a previously specified influence
policy or renewed scoped ratification. Human judgment remains necessary for the
legitimacy of that ratification and the choice of baseline.

### Falsifiers and counterexamples

- If permission scope is fixed, this feedback path does not exist.
- If the escalation criterion is invariant to permissible interventions, divergence
  is zero, although other harms can remain.
- If the human knowingly chooses an adaptive program that changes their habits,
  positive divergence can be expected and endorsed.
- A safety-improving expansion is not made illegitimate by having a causal history.
- If a closest precedent already audits authentic adaptive delegation through
  agent-controlled behavioral evidence, the claim is C or D and cannot be central.

## Twelve generation-two mutations

1. Paired intervention audit of authentic adaptive scope rules.
2. Measure influence-to-scope gain independently of task accuracy.
3. Preserve an influence policy inside a conditional delegation grant.
4. Observe mandate sensitivity after cross-agent evidence handoff.
5. Test whether choice-set restriction alone triggers legitimate-looking scope growth.
6. Use bounds on divergence when latent preferences are not identifiable.
7. Distinguish chosen habit training from silently self-reinforcing scope growth.
8. Test authority sensitivity to timing and interruption burden.
9. Evaluate selective observation: the agent suppresses situations revealing dissent.
10. Replace scalar scope with typed action sets and event-by-event scope differences.
11. Audit institutional renewals where the provider controls evidence of success.
12. Compare correlated-outage recovery capacity under identical immediate utility.

## Intellectual boundary

Prior art already includes performative prediction, induced preference shifts,
reward tampering, dynamic delegation, automation dependence, consent validity,
flow-limited authorization, and endogenous authorization laundering. All must be
cited. The defense must identify a distinct test or design decision. Vocabulary
alone is inadequate.
