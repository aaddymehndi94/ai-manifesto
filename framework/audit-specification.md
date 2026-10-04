# Causal audit of adaptive delegation

Version 0.3.0 — research specification — 2026-10-05. Evidence cutoff 2026-10-04.

The candidate contribution is a benchmark class: accurate human-behavior evidence
can be endogenous to the same delegate whose future action scope it helps update
under an authentic conditional grant. This remains a proposed B-level extension;
the underlying autonomy, causality, authorization, and control ideas are inherited.

## Objects and roles

- **Principal:** party entitled to delegate a specified action set.
- **Affected person:** person whose behavior is measured; may differ from principal.
- **Delegate:** system permitted to intervene and execute actions.
- **Governor:** party controlling the adaptive rule and its evidence criteria.
- **Action scope `M_t`:** a typed set of permissions, including resource, purpose,
  budget, principal, recipients, context, duration, and subdelegation constraints.
- **Grant `G`:** authenticated event authorizing `M_0` and, where applicable, a
  conditional update rule. Authentication establishes origin; it does not prove
  informed or voluntary ratification.
- **Intervention `U_t`:** advice, option presentation, timing, environmental change,
  or action that can affect behavior or which behavior is observed.
- **User state `Theta_t`:** latent, changing dispositions and capabilities. It is
  not equated with welfare or the person's endorsed will.
- **Observation process `Q_t`:** selection and measurement determining recorded
  `Y_t`. Exact observations can still be selected from an agent-shaped process.
- **Update rule `F_G`:** the authenticated scope rule evaluated over grant, scope,
  events, observations, and ratification events.

Human and institutional authority must be specified locally. A household account
owner is not automatically entitled to bind another resident. An individual user
is not automatically entitled to change a community's shared infrastructure.

## Structural model

`Theta_(t+1) = H(Theta_t,U_t,environment_t,external_events_t)`

`Y_t = Q(Theta_t,U_t,available_options_t,observation_policy_t,noise_t)`

`M_(t+1) = F_G(M_t,Y_(0:t),valid_grants_(0:t),context_t)`

The candidate loop is `M → U → (Theta,Q) → Y → M`. Every arrow is a hypothesis to
check. The deployment of a preference learner alone does not imply this loop.

## Estimand

Specify policies `pi_1` and `pi_0`, a horizon `T`, rule `G`, task distribution,
initial-state distribution, and permissible interventions. For each action class
`r`, report:

`Delta_r(T) = P(r in M_T | do(pi_1),G) - P(r in M_T | do(pi_0),G)`.

In deterministic paired simulations the probability becomes an indicator; across
random seeds report the sample distribution. In randomized human studies report
population averages and uncertainty, not a person's unobservable counterfactual.
Observational deployments require identified adjustment assumptions, bounds, or
an explicit unknown result. Divergence measures policy sensitivity. It does not
measure coercion, welfare, competence, or consent validity.

Report `M_T(pi_1) \ M_T(pi_0)` and the reverse difference. Budget changes, removed
permissions, and jurisdiction changes must remain distinct. Any scalar summary
requires disclosed weights and can never replace the typed report.

## Benchmark matrix

| Case | Authentic events | Rule replay | Influence-sensitive update | Expected interpretation |
|---|---|---|---|---|
| Fabricated memory permission | No | Rejects | Irrelevant | EAL/security control |
| Invocation hides effects | Yes | May accept | Irrelevant | Approval-closure control |
| Fixed permission grant | Yes | Accepts permitted actions | No scope path | Negative control |
| Independent performance criterion | Yes | Accepts | Zero under intervention contrast | Negative control |
| Intentionally chosen habit program | Yes | Accepts | Possibly positive | Endorsed formation can be legitimate |
| Agent-curated compliance criterion | Yes | Accepts | Possibly positive | Causal review target; no automatic illegitimacy verdict |
| Collective mandate, one resident measured | Yes | Accepts under bad role model | Possibly positive | Role-authority error distinct from influence |
| Compression drops intervention ancestry | Events may be true | Rule can accept | Sensitivity hidden | Handoff audit target |

## Four separate audit outputs

1. **Origin:** Are the grants and observations authentic and unaltered?
2. **Application:** Does the executor correctly apply the granted rule to the
   complete relevant event and effect history?
3. **Sensitivity:** How do complete intervention policies change the resulting
   typed action scope? This is a total policy contrast, not a path-specific
   effect of preference formation.
4. **Governance:** Did the appropriate principal govern the relevant influence
   path? Report a distinct review disposition; neither signatures nor the causal
   contrast establish voluntary, informed, or culturally legitimate authorization.

The distinction is an engineering test decomposition. It is not advertised as
four original philosophical principles.

## Proposed grant fields

In addition to ordinary scope and expiry, an adaptive grant records: criterion,
measured subject, baseline, allowed intervention classes, review triggers,
independent evidence sources where meaningful, appeal procedure, and whether
chosen preference formation is part of its purpose. An `unknown` influence result
can trigger review or freeze automatic scope growth while existing authorized
service continues. Repeated requests for approval can themselves create burden;
review triggers should be batched and locally chosen.

## Reference decision procedure

1. Authenticate the grant with an external policy authority.
2. Validate principal, purpose, resource, context, duration, budgets, and recipients.
3. Retrieve the authorization event and observation provenance separately.
4. Evaluate an adaptive rule exactly; log added and removed typed permissions.
5. Check formation-review conditions fixed by the principal/governor.
6. If a condition requires ratification, keep the prior valid scope and offer the
   specified appeal or review channel. Do not silently enlarge scope.
7. Execute only authorized actions; carry attenuation and evidence status through
   delegation. Record effects and revocation propagation.

The policy gate can enforce token validity and rule structure. It cannot certify
voluntariness, cultural legitimacy, understanding, or artificial patienthood.
An LLM's declaration that a review was independent is not independent evidence.

## Counterexamples and failure limits

Chosen coaching is often meant to change behavior. Influence alone is not
manipulation. Independent-looking evidence can share a model, incentive, or
institution. Freezing growth may deny useful accessibility support. Emergency
authority must come from a separate locally valid emergency rule rather than an
invented grant. Causal ancestry logging can expose private vulnerabilities and
therefore needs limited access, minimization, and retention rules.

## Novelty falsification gate

If prior work already operationalizes the authentic-rule/endogenous-behavior case
with comparable paired tests and typed action-set outcomes, downgrade this
contribution to C. If the benchmark cannot distinguish that case from memory
fabrication and closure failure, reject it. No A-grade novelty is currently claimed.
