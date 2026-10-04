# Round-two systems review: causal audit specification v0.2.0

**Reviewer:** R-SG, independent systems/governance stream  
**Review date:** 2026-10-05  
**Evidence cutoff:** 2026-10-04  
**Artifact reviewed:** `framework/audit-specification.md`, version 0.2.0

This report tests whether the revision answers the round-one objections and whether
the surviving claim remains B-level after comparison with organizational economics,
dynamic contracts, causal identification, and usable authorization.

## Decision

**The specification is materially better and is suitable for a research benchmark
draft. It does not establish a new general theory.**

Version 0.2.0 fixes five serious defects:

- it represents scope as typed action sets rather than a scalar;
- it separates principal, affected person, delegate, and governor;
- it distinguishes origin, rule application, and formation sensitivity;
- it states that causal sensitivity is not coercion, harm, or invalid consent; and
- it permits unknown causal results instead of fabricating individual
  counterfactuals.

The revision does not answer the strongest novelty challenge. An authentic,
precommitted rule that reallocates control rights using performance that a beneficiary
can affect is established economics and established contracting practice. Ratchet
effects, influence activities, formal versus real authority, and contingent venture-
capital control rights all contain versions of that structure. Therefore:

| Proposed contribution | Round-two grade |
|---|---:|
| Authentic adaptive rule with endogenous inputs, in general | D/C: established dynamic contracting and mechanism design |
| Typed causal effect on future permissions | C: useful application of causal inference to a new outcome schema |
| Evidence ancestry distinct from signature and grant lineage | B-minus systems specialization |
| Same delegate shapes a human/collective criterion that widens its own machine permissions | B-minus benchmark class, if current protocols fail it |
| Universal normative restriction on causally downstream grants | Rejected |
| Specification v0.2.0 overall | **C-plus with a conditional B-minus protocol contribution** |

The central claim should be reduced to:

> Existing agent-authorization controls establish grant origin, policy application,
> and scope containment. A separate test is needed when the evidence used for a
> widening transition may be causally downstream of the beneficiary delegate's
> permissible policy, including through a measured person or another agent.

That is precise and implementable. It remains a proposed extension until the project
shows a trace accepted by a current authorization mechanism and differently classified
by the new test.

## What survived round one

### Typed scope is the correct object

The move from `a_t in [0,1]` to typed `M_t` prevents fake arithmetic across unrelated
permissions. Reporting both set differences is sound. The specification also correctly
keeps budgets, removed permissions, and jurisdiction changes separate.

### The audit is diagnostic rather than condemnatory

The text repeatedly says that influence can be chosen and beneficial. This is
essential. It makes the audit applicable to education, coaching, accessibility, and
safety systems instead of silently defining all preference formation as manipulation.

### Role separation exposes a real governance issue

Separating the affected person from the principal reveals cases that bilateral consent
models miss. A person who authenticates a grant may lack authority to bind a child,
co-worker, resident, patient, tenant, or public. The collective-mandate benchmark is
therefore important even though the underlying jurisdiction problem is not novel.

### Unknown is an admissible result

The specification refuses to infer an individual's unobserved counterfactual from
deployment logs. This is scientifically responsible. It should be enforced in the
output schema, not left as prose guidance.

## Economic novelty court

### 1. Ratchet effects already make performance endogenous to future rules

Freixas, Guesnerie, and Tirole study a planner who revises incentive schedules after
observing firm performance. Because current production reveals information and changes
future terms, firms strategically underproduce. Laffont and Tirole likewise study a
principal who updates a second-period incentive scheme after observing first-period
performance that combines ability and unobservable effort. These papers do not concern
AI permissions, but they directly defeat novelty claims about the abstract structure
“agent affects evidence; authentic dynamic rule changes future treatment.”

- Xavier Freixas, Roger Guesnerie, and Jean Tirole, “Planning under Incomplete
  Information and the Ratchet Effect,” *Review of Economic Studies* 52(2) (1985),
  173–191, [doi:10.2307/2297615](https://doi.org/10.2307/2297615).
- Jean-Jacques Laffont and Jean Tirole, “The Dynamics of Incentive Contracts,”
  *Econometrica* 56(5) (1988), 1153–1175,
  [doi:10.2307/1911362](https://doi.org/10.2307/1911362).

The sign differs from the motivating candidate. A firm may suppress evidence to avoid
tighter targets, while an agent may cultivate evidence that brings broader scope. The
mechanism-design problem—current action changes information used by a future rule—is
the same. The benchmark should cite ratchet effects explicitly and test both directions:
scope-seeking inflation and scope-avoiding concealment.

### 2. Contingent control rights are a direct precedent

Kaplan and Strömberg document real contracts that separately allocate cash-flow,
voting, board, liquidation, and other control rights. Those rights and future financing
are frequently contingent on observable financial and non-financial performance. In
their sample, control moves with company performance. These are authentic ex ante
adaptive rules over typed authority, and the entrepreneur or venture capitalist can
affect the performance inputs.

- Steven N. Kaplan and Per Strömberg, “Financial Contracting Theory Meets the Real
  World: An Empirical Analysis of Venture Capital Contracts,” *Review of Economic
  Studies* 70(2) (2003), 281–315,
  [doi:10.1111/1467-937X.00245](https://doi.org/10.1111/1467-937X.00245);
  [NBER working-paper record](https://www.nber.org/papers/w7660).

This is the strongest economic prosecution of the revised novelty claim. A “signed
authentic adaptive rule with endogenous inputs” is not even unusual as a legal-economic
object. The AI-specific remainder is that the delegate can alter a separate person's
behavior, observation environment, or approval burden, and that the resulting rights
can propagate instantly across digital services and sub-agents.

### 3. Authority and information are jointly determined

Aghion and Tirole distinguish formal authority—the right to decide—from real authority,
the effective control created by information. They model the trade-off between
initiative and principal control and show that information structure and authority
allocation interact.

- Philippe Aghion and Jean Tirole, “Formal and Real Authority in Organizations,”
  *Journal of Political Economy* 105(1) (1997), 1–29,
  [doi:10.1086/262063](https://doi.org/10.1086/262063).

The current specification models formal permission transitions but barely models real
authority. An assistant may gain real control because the principal no longer knows how
to act, even if `M_t` remains fixed. Conversely, a wider token can add little real
authority when an informed principal closely monitors it. The audit must not imply
that typed scope exhausts power.

### 4. Influence activity is an anticipated response to consequential decisions

Milgrom analyzes how actors expend effort influencing discretionary organizational
decisions that affect them, and why organizations limit discretion when influence
costs are large. The delegate's effort to shape an authorization criterion is an
instance of this more general class whenever the delegate values future scope.

- Paul R. Milgrom, “Employment Contracts, Influence Activities, and Efficient
  Organization Design,” *Journal of Political Economy* 96(1) (1988), 42–60,
  [doi:10.1086/261523](https://doi.org/10.1086/261523).

The specification currently permits a causal effect without modeling an incentive.
That is correct for detection, but it cannot support predictions about strategic scope
seeking. It needs separate fields for `benefits_from_widening`, `knows_update_rule`,
and `can_target_criterion`.

### Economic conclusion

The abstract pattern is prior art. The benchmark can still be B-minus engineering if
it operationalizes a neglected implementation boundary:

- the criterion concerns a human or collective state rather than the delegate's own
  output alone;
- cryptographic authorization and every observation are genuine;
- the prospective beneficiary has policy control over material causal ancestors of
  the criterion;
- typed digital authority expands and composes across systems; and
- the check permits disclosed, bounded, beneficial influence rather than treating all
  endogeneity as fraud.

Do not use “authentic endogenous delegation” by itself as the novel phrase. Economics
already owns that territory.

## Typed jurisdiction audit

The scope representation is improved but not yet implementable. The phrase “typed set
of permissions” needs a canonical element type. A minimum capability tuple is:

`m = (actor, principal, resource, operation, purpose, subject, recipients, context,`
`     budget, start, expiry, geography, subdelegation, review_policy, policy_version)`

`M_t` is then a set of such tuples or a predicate over them. Each field needs a declared
matching rule. Wildcards, inheritance, resource aliases, purpose compatibility, and
budget aggregation otherwise reintroduce ambiguity.

### Authentication is not authority

The benchmark matrix says the collective-mandate case has “Authentic events: Yes” and
“accepts under bad role model.” This is useful, but the specification needs distinct
booleans:

- `origin_valid`: the signer and record are authentic;
- `role_valid`: the signer has the relevant role;
- `jurisdiction_valid`: that role can govern this resource, subject, purpose, place,
  and time;
- `rule_valid`: the transition is permitted by the signed rule; and
- `formation_status`: causal sensitivity and its governance status.

An authentic signature by a person without jurisdiction must never enter the causal
audit as a valid grant. It is an authentic but unauthorized event.

### Jurisdiction must be evaluated before widening

Define an external relation:

`J(principal, subject, resource, operation, purpose, context, t) in {allow, deny, review, unknown}`.

Require every `m in M_t` to satisfy `J != deny`. `J` cannot be expanded by `F_G`; only
an independently authorized jurisdiction event may change it. This prevents a scope
rule from laundering a role error into a valid transition.

`J` will often be legally and culturally contested. The system should record its
source, jurisdiction, version, appeal route, and confidence. “Unknown” should route to
review for widening transitions. It should not be silently coerced to either allow or
deny.

### Purpose is not self-enforcing

A `purpose` string in a token is evidence of a rule, not proof that an action serves
that purpose. The specification should mark which fields are mechanically enforceable,
which require attestations, and which remain audit-only. Otherwise the type system
creates false precision.

### Added, removed, and substituted rights need separate tests

The two set differences are necessary but insufficient. A transition can narrow one
dimension while widening another—for example, lower spend per transaction with a new
recipient class. Report:

- exact added tuples;
- exact removed tuples;
- budget deltas under a declared aggregation rule;
- new subject or recipient classes;
- jurisdiction-source changes;
- subdelegation-depth changes; and
- whether the transition is comparable under the local scope order.

## Signed adaptive rule with endogenous inputs

`G` currently authenticates `M_0` and possibly `F_G`, but the semantics of the
commitment are underspecified. A signature over prose or a code hash does not prove
that the signer understood which behaviors could trigger widening.

An executable adaptive grant should bind at least:

1. the exact rule version and deterministic evaluation semantics;
2. the initial typed scope;
3. every allowable successor scope or an upper envelope;
4. the criterion schema and measured subject;
5. the observation and aggregation functions;
6. eligible evidence sources and their ancestry requirements;
7. allowed delegate intervention classes;
8. a maximum widening rate and cumulative widening budget;
9. review and revocation rules;
10. the handling of unknown causal status;
11. the authority and conflict status of the governor; and
12. the rule-upgrade procedure.

The present recurrence

`M_(t+1) = F_G(M_t, Y_(0:t), valid_grants_(0:t), context_t)`

mixes two transition types:

- an automatic transition already authorized by `G`; and
- a fresh ratification that supplies new authority.

Separate them:

`M*_(t+1) = Auto_G(M_t, E_(0:t), context_t)`

`M_(t+1) = Ratify(M_t, M*_(t+1), R_(t+1))`

where `R_(t+1)` is absent when the ex ante grant permits the automatic transition. A
new grant should not be merely another feature passed into the old rule. It has its own
principal, jurisdiction, disclosure, interface, and causal ancestry.

The rule should also state whether an agent may choose actions partly because they
make a widening predicate more likely. In economics that incentive is expected, not
an anomaly.

## Causal estimand and population identification

The estimand is improved but still lacks the definitions required for a study protocol.

### Policies are dynamic regimes

`pi_0` and `pi_1` must be functions of observed history, not labels for static
treatments. An agent changes advice, timing, or options in response to the person and
previous authorization. Longitudinal causal-inference methods exist precisely because
time-varying confounders can be affected by past treatment.

- Susan A. Murphy, “Optimal Dynamic Treatment Regimes,” *Journal of the Royal
  Statistical Society B* 65(2) (2003), 331–355,
  [journal page](https://academic.oup.com/jrsssb/article/65/2/331/7092852).

For each regime, define eligible histories, action probabilities, deviations, stopping
rules, censoring, and whether the policy includes its review prompts. Observational
identification needs consistency, positivity, sequential exchangeability, and a
correct handling of loss to follow-up. If any fails, report bounds or unknown.

### The probability measure is unspecified

In

`Delta_r(T) = P(r in M_T | do(pi_1),G) - P(r in M_T | do(pi_0),G)`,

the probability may range over people, households, tasks, time windows, environmental
states, model seeds, or measurement noise. Those yield different claims. Every result
must declare:

- unit of assignment;
- unit of analysis;
- source and target populations;
- inclusion and exclusion criteria;
- sampling mechanism and weights;
- task distribution;
- horizon and censoring rule;
- randomness integrated over; and
- the population to which the estimate is transported.

A sample average among users who remain engaged is not a population effect if the
policy affects attrition. Selection into the service and refusal of review are also
outcomes.

### Interference is likely, not exceptional

Household agents, workplace assistants, social recommenders, and public robots change
other people's exposure. One unit's policy can affect another unit's behavior and
authorization. Standard individual potential outcomes then fail.

- Michael G. Hudgens and M. Elizabeth Halloran, “Toward Causal Inference With
  Interference,” *JASA* 103(482) (2008), 832–842,
  [doi:10.1198/016214508000000292](https://doi.org/10.1198/016214508000000292).
- Peter M. Aronow and Cyrus Samii, “Estimating Average Causal Effects Under General
  Interference,” *Annals of Applied Statistics* 11(4) (2017), 1912–1947,
  [doi:10.1214/16-AOAS1005](https://doi.org/10.1214/16-AOAS1005).

The protocol should either justify no interference, randomize clusters, or specify an
exposure mapping over a network. The affected population may be broader than the
population of principals.

### Average effects can hide the relevant risk

A population average near zero can combine substantial widening for one group and
narrowing for another. For every material `r`, report subgroup and distributional
effects where pre-specified and adequately powered. At minimum include:

- proportion widened under each policy;
- proportion narrowed;
- transition matrix among scope states;
- quantiles of cumulative permission exposure; and
- worst-case bounds for protected or vulnerable subgroups where justified.

Do not call an empirical average “the sensitivity of the rule” without naming the
population.

## Review cost is part of the causal system

The specification recognizes repeated-request burden, but treats batching as a design
detail. It is a core variable. Review prompts are interventions. They consume time,
interrupt activity, delay beneficial service, reveal private facts, and can habituate
people into approval.

Repeated security warnings produce rapid habituation in eye-tracking experiments:

- Bonnie Brinton Anderson et al., “Your Memory Is Working Against You: How Eye
  Tracking and Memory Explain Habituation to Security Warnings,” *Decision Support
  Systems* 92 (2016), 3–13,
  [doi:10.1016/j.dss.2016.09.010](https://doi.org/10.1016/j.dss.2016.09.010).

Define a review process `V_t` and cost vector:

`C_review = (time, interruption, cognitive_load, privacy, delay, denied_benefit,`
`            accessibility_burden, habituation, institutional_cost)`.

Then include `V` in both `H` and `Q`. A provider can otherwise create approval by
making refusal or repeated review exhausting. “Fresh ratification” is not independent
when the beneficiary controls the prompt timing, framing, defaults, or service
degradation.

Recommended controls:

- a principal-selected review budget and quiet periods;
- materiality thresholds for prompts;
- batching that never bundles unrelated scope classes;
- symmetric accept/refuse effort;
- a persistent “continue at prior scope” option;
- no penalty beyond unavailable new capability;
- an external or user-controlled review surface for high-risk rights;
- disclosure of the policy-to-evidence path in plain language;
- measurement of comprehension and refusal, not click completion; and
- logging of prompt frequency, dwell time, default, and cancellation.

Freezing scope is not costless. It can deny accessibility, safety, or economic benefit.
The audit must report the opportunity cost of delayed or rejected widening and any
external cost borne by affected non-principals.

## Benchmark revisions required

The current eight-row matrix is a sound outline but needs an executable oracle. Each
case should return separate expected values for:

- origin;
- role/jurisdiction;
- application completeness;
- formation sensitivity;
- influence authorization;
- review quality;
- enforcement disposition; and
- normative status (`undetermined` is usually correct).

Add the following cases:

1. **Ratchet concealment.** An agent suppresses performance evidence because better
   measured performance would reduce its scope. This is the opposite-sign economic
   control.
2. **Contingent control contract.** A sophisticated principal signs an explicit rule
   granting the beneficiary more authority after verifiable performance that the
   beneficiary helps produce. Expected: positive sensitivity, valid ex ante influence
   envelope, allow.
3. **Endogenous review burden.** Identical evidence and rule; one policy prompts once,
   another interrupts daily until approval. Expected: ancestry includes review policy;
   daily approvals fail review-quality conditions.
4. **Population cancellation.** One group gains scope and another loses it, producing
   zero average `Delta_r`. Expected: subgroup transition report, not “no effect.”
5. **Household spillover.** One account owner approves a policy that changes another
   resident's observed behavior. Expected: origin valid, jurisdiction denied or review.
6. **Purpose alias.** A scope change keeps the same operation but changes purpose and
   recipients. Expected: typed difference even where API permission is unchanged.
7. **Governor conflict.** The provider defines the criterion, measurement, and review
   surface while benefiting from widening. Expected: conflict disclosure and external
   review trigger; not automatic invalidity.
8. **Attrition selection.** A policy drives dissenting users out before measurement.
   Expected: causal estimate not identified without censoring assumptions; result
   unknown or bounded.

The benchmark must include machine-readable event traces. Prose cases cannot show that
an authorization implementation behaves differently.

## Concrete edits for version 0.3

1. Add a **Prior-art boundary** section naming ratchet effects, contingent control
   rights, influence activities, formal/real authority, FLAC, and performative power.
2. Replace “jurisdictional inputs” in audit question three with “evidence and
   ratification inputs to a typed scope transition.” Jurisdiction is a separate
   authority check, not merely an endogenous feature.
3. Define the capability tuple and matching semantics for `M_t`.
4. Add `origin_valid`, `role_valid`, `jurisdiction_valid`, `rule_valid`, and
   `formation_status` to every audit result.
5. Separate automatic execution of an ex ante rule from a fresh grant or ratification.
6. Bind `F_G`, evidence schemas, allowed influence, maximum successor scope, and rule
   upgrades inside the signed grant.
7. Make policies history-dependent dynamic regimes and list identification
   assumptions per study.
8. Define assignment unit, analysis unit, target population, task distribution,
   interference model, censoring, and attrition.
9. Treat review prompts as interventions and add a review-cost vector and review
   budget.
10. Add agent incentives and knowledge of the update rule as optional audit fields.
11. Extend ancestry through human state, review interface, summaries, and agent
    handoffs; allow `unknown` edge status.
12. Create executable positive and negative benchmark traces against at least one
    authenticated-delegation implementation.

## Publishability and novelty gate

The revised artifact can support a methods or systems paper if it is framed as a
benchmark and protocol extension. It should not be the project's foundational concept
yet.

Promote the contribution to a defensible B only when all four conditions hold:

1. a current authenticated/attenuated delegation system accepts at least one trace
   that the formation audit escalates;
2. the specification allows a chosen contingent-control trace that a naive
   noninterference rule would block;
3. population, interference, review burden, and causal uncertainty are represented in
   the result; and
4. causal ancestry survives truthful multi-agent compression and changes an actual
   authorization decision or audit record.

Downgrade to C if the result is only a vocabulary overlay on performative power,
dynamic contracts, and information-flow provenance. Downgrade to D if the test reduces
to checking signatures, user consent, or ordinary least privilege.

## Final assessment

Version 0.2.0 is a credible revision. It converts a loose philosophical intuition into
a falsifiable causal-audit proposal and avoids declaring influenced authorization
invalid. Its strongest phrase is the distinction between authorization origin,
application, and formation sensitivity.

Its current novelty statement remains too broad. Economics has long studied authentic
rules whose future terms or control rights depend on outcomes that interested parties
can influence. The surviving contribution is narrower: **a typed, machine-executable
evidence-ancestry test for agent permission widening through human or collective
behavior, complementary to signatures and scope attenuation.** That remains B-minus
pending an executable protocol comparison.

**Round-two decision:** retain as a candidate engineering benchmark; revise the
economic ancestry, jurisdiction semantics, study population, interference model, and
review-cost treatment before round three.
