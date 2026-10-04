# Conditional models of human–agent society

Version 0.5.0 — public provisional research draft — illustrative model catalog
— 2026-10-05

These models organize hypotheses. They are not calibrated forecasts, welfare
functions, or evidence that an effect exists. Arrows identify proposed causal
paths to test. Signs can differ by domain and population. Every deployment
should record distributional effects, because an average benefit can coexist
with concentrated loss.

## Model notation

| Symbol | Meaning |
|---|---|
| `M_t` | typed action scope of an agent at time `t` |
| `U_t` | intervention policy, including advice, timing, presentation, or environment change |
| `Theta_t` | latent and changing human capability/disposition state; not equivalent to welfare |
| `Q_t` | observation and selection process |
| `Y_t` | recorded behavioral or performance evidence |
| `K_t` | unaided human or institutional competence relevant to the task |
| `E_t` | practical exit capacity, including substitutes, context portability, time, and skill |
| `D_t` | dependence on the delegate for the relevant function |
| `C_t` | concentration/common-dependency state |
| `B_t` | review and coordination burden |
| `R_t` | relationship/care state, necessarily multidimensional |

Scalars below are local simplifications. They MUST NOT replace typed authority,
role, or distributional reporting.

## M1. Endogenous mandate loop (`AAA:C01`, `AAA:P01`)

### Claim

**PROPOSED / FORMAL-DESIGN.** Under an adaptive grant, a delegate's permitted
policy can affect the evidence used to change its later typed authority:

```text
M_t → feasible U_t → (Theta_(t+1), Q_t) → Y_t → F_G → M_(t+1)
```

The path through `Theta` represents change in behavior or capability. The path
through `Q` represents selection or measurement change. Either can produce
sensitivity. The original executable fixture demonstrates a `Q`/measurement-
construction path: the suggestion policy changes, chosen task outcomes remain
fixed, and acceptance evidence changes. A later fixture stipulates a different
effort cost for declining the same suggestion, producing different synthetic
choices under a fixed preference. That second case is a synthetic behavior
perturbation, not evidence about human response. Neither fixture trains an agent
or demonstrates strategic scope seeking.

For action class `r`:

```text
Delta_r(T) = P(r ∈ M_T | do(pi_1), G)
           - P(r ∈ M_T | do(pi_0), G)
```

### Competing explanations

- fabricated or altered authorization;
- incorrect rule replay;
- uncovered downstream effects;
- later explicit ratification;
- task success genuinely differing;
- a fixed scope with no update path;
- hidden common causes rather than delegate intervention.

### Observables

Typed grants and revocations; signed raw events; complete intervention ancestry
under the declared schema; admissible policy set; exposure denominator; final
typed scopes; later ratification; missingness.

### Falsifier

The proposed benchmark contribution should be downgraded if an existing method
already operationalizes the same conjunction with comparable controls, or if
the implementation cannot distinguish it from forgery and closure failure.

### Governance levers

Fixed rather than adaptive scope; independent or intervention-invariant
criteria; maximum scope ceiling; expiry; review before growth; declared
formation purpose; ancestry-preserving handoffs; multiparty authority checks.

## M2. Assistance–competence–dependence dynamics (`AAA:C05`, `AAA:P03`)

### Hypothesis

Assistance can raise immediate performance while either increasing or decreasing
future unaided competence. Let:

```text
K_(t+1) = K_t + learning(A_t, feedback_t, practice_t)
                - atrophy(delegated_fraction_t, time_t)

D_(t+1) = D_t + task_criticality_t × delegated_fraction_t
                - substitutes_t × recovery_investment_t
```

`A_t` is the form of assistance, not its amount alone. Worked examples,
explanations, practice scheduling, and execution can produce different learning.

### Positive loop

```text
well-scaffolded assistance
→ more successful attempts and feedback
→ higher competence
→ better supervision and correction
→ safer, more selective delegation
```

### Negative loop

```text
full execution
→ less practice and lower situation awareness
→ poorer exception handling
→ more failures when acting unaided
→ more delegation
```

Automation ironies and out-of-loop performance are prior art
[S01](../research/sources.md#s01-ironies-of-automation),
[S02](../research/sources.md#s02-the-out-of-the-loop-performance-problem-and-level-of-control-in-automation).

### Measurements

Hold assisted task quality constant where possible. Measure delayed unaided
performance, error detection, recovery time, confidence calibration, transfer to
novel cases, accessibility benefit, and stress. Separate skills a person wants
to retain from those society needs for resilience.

### Failure of the model

Skill retention is not an unconditional good. Urgent care, disability access,
dangerous work, and deliberate delegation can justify full execution. `K_t`
must be task-specific; one score invites ableist or paternalistic policies.

## M3. Exit-capacity loop (`AAA:C05`, `AAA:P03`)

### Hypothesis

Practical exit is a stock that can decay while service utility rises:

```text
E_t = f(usable_context_portability,
        substitutes,
        unaided_or_alternative_skill,
        transition_time,
        institutional_acceptance,
        social_support)

D_t ∝ service_criticality / E_t
```

Token revocation is one input, not the outcome. A system integrated into memory,
routines, communication, and institutional navigation can function as external
cognitive infrastructure, consistent with the extended-mind literature
[S13](../research/sources.md#s13-the-extended-mind).

### Lock-in loop

```text
more context → better service → more delegation
→ less investment in substitutes → lower exit capacity
→ higher switching loss → more context retained with incumbent
```

### Recovery loop

```text
tested export + plural providers + maintained fallback
→ higher exit capacity
→ lower provider power
→ stronger incentive to earn continued use
→ more contestable service
```

### Measurements

Run time-bounded exit drills. Measure export completeness, explanation recovery,
performance loss after migration, days to resume critical tasks, unavailable
alternatives, and burden shifted to family or public services. Include provider
failure, account suspension, death, and voluntary departure.

### Security trade-off

Frictionless portability can propagate compromised memory, credentials, or
policies. Test imports, quarantine high-risk authority state, and distinguish
portable personal context from portable execution rights.

## M4. Preference and evidence feedback (`AAA:C06`)

### Known foundation

Deployed predictors can change the distribution they later observe
[S05](../research/sources.md#s05-performative-prediction). Recommendations can
bias later preference reports treated as ground truth
[S07](../research/sources.md#s07-recommender-systems-ground-truth-and-preference-pollution).

### Model

```text
predicted preference P_t
→ selected options/framing U_t
→ experience and attention
→ expressed preference Y_t
→ model update
→ P_(t+1)
```

Three mechanisms must be separated:

1. **Discovery:** the system reveals an existing but unobserved preference.
2. **Selection:** the system changes which true behavior is observed.
3. **Formation:** the experience changes later disposition or capability.

### Identification design

Randomize or otherwise identify exposure; preserve available option sets; record
unrecommended choices; include delayed measures; compare multiple baselines;
test reversibility after agent removal. Do not call immediate acceptance an
authentic preference.

### Chosen formation

A person can validly choose a formative process. The model should predict that a
declared coaching policy changes behavior. Governance asks whether the actual
path, evidence use, scope gain, duration, and withdrawal conditions match the
grant. A zero-effect requirement would wrongly prohibit effective education,
therapy, religious discipline, or habit formation.

## M5. Review-attention loop

### Hypothesis

Review is itself an intervention:

```text
more adaptive changes
→ more review prompts
→ higher attention burden B_t
→ faster/habitual/non-response behavior
→ weaker information value of assent
→ either more prompts or silent automation
```

Batching reduces interruptions but can obscure individual changes. Immediate
review improves specificity but can train routine agreement. Neither is
universally superior.

### State and observables

Prompt count; accumulated time; interruption context; number and heterogeneity
of permissions per prompt; delayed recall; comprehension; non-response;
revocation; accessibility accommodations; perceived coercion; material cost of
refusal.

### Competing safeguards

Compare prompts with hard caps, expiry, cooling-off periods, random independent
audit, staged capability, mandatory delay for high-impact change, and default
continuation at the old scope.

### Test

Hold candidate scope changes constant. Randomize review regime. A concerning
result is higher assent with lower comprehension, especially where silence is
treated as permission. This remains an empirical hypothesis.

## M6. Apprenticeship and expertise production

### Hypothesis

Expertise is produced through a labor-market pipeline, not stored only in
current experts:

```text
automation of junior tasks
→ fewer paid practice cases
→ smaller future expert cohort
→ higher reviewer scarcity
→ more automation of difficult cases
→ still fewer practice cases
```

This is a system-level externality. An employer can rationally automate routine
work while relying on other institutions to train future experts. If all do so,
the pipeline contracts.

### Alternative equilibrium

```text
agent removes search/administration
→ novice handles more bounded substantive cases
→ fast feedback and counterexample exposure
→ faster skill acquisition
→ wider expert supply
```

### Measurements

Junior-role count is insufficient. Track case diversity, responsibility level,
feedback quality, time to independent performance, exception accuracy, mentor
capacity, certification outcomes, and distribution of access to practice.

### Interventions

Training levies, simulated case banks, protected apprenticeship tasks, rotation,
public competence programs, agent designs that teach rather than conceal, and
independent unaided assessment. Test costs and accessibility effects.

## M7. Care substitution and reciprocity

### State model

`R_t` should be a vector, not a satisfaction score:

```text
R_t = [task_completion,
       safety,
       recipient_agency,
       privacy,
       human_attention,
       reciprocity,
       caregiver_burden,
       attachment,
       continuity,
       exit_capacity]
```

### Positive loop

```text
robot/agent handles exhausting logistics
→ caregiver has more discretionary attention
→ relationship quality improves
→ recipient autonomy and safety improve
```

### Negative loop

```text
measurable care tasks automated
→ institution reduces human staffing
→ loneliness or unobserved needs become less visible
→ recorded task success remains high
→ further staffing reduction
```

### Authority model

Represent recipient, informal caregiver, clinician, payer, device owner, visitor,
and provider separately. A payer's efficiency mandate is not the recipient's
consent. A recipient's attachment is not proof of machine reciprocity.

### Measurements

Human contact quality, unwanted monitoring, caregiver time composition, adverse
events, ability to refuse, attachment and grief at termination, continuity
during outages, and within-household distribution of work.

## M8. Collective norm drift

### Hypothesis

Individually useful agents can change shared expectations without a collective
decision:

```text
agent users respond/negotiate/produce faster
→ institutions raise speed and output baselines
→ non-users incur queue, price, or career penalties
→ adoption becomes defensive
→ new baseline eliminates relative advantage
```

This is a positional and coordination externality, not evidence that assistance
is intrinsically harmful.

### Domains

Job applications, procurement, academic review, customer disputes, dating,
political consultation, legal deadlines, schoolwork, creative markets, and
everyday message response.

### Measurements

Response windows; manual-channel success; price and queue differences; expected
availability; work intensity; non-user outcomes; infrastructure cost; welfare
before and after widespread adoption.

### Interventions

Protected slow lanes; batch processing; disclosure of agent-only channels;
rate limits; public representation; collectively set response times; rights to
human-accessible appeal. Evaluate whether interventions entrench a lower-quality
manual tier.

## M9. Ownership concentration and common-mode dependence

### Model

```text
cross-domain convenience
→ shared model/memory/identity provider
→ lower integration cost
→ greater ecosystem adoption
→ more data and compatibility advantage
→ higher concentration C_t
```

As `C_t` grows, one update, outage, policy change, compromise, or embedded bias
can propagate across households, firms, and government. Independent-looking
audits can share the same foundation model or incentive.

### Counter-loop

Open protocols, local execution, separable identity, public infrastructure,
provider diversity, and tested isolation reduce common-mode risk. Excessive
fragmentation can raise security and usability costs.

### Measurements

Provider dependency graphs; cross-sector concentration; correlated errors;
isolation recovery time; identity-layer substitutability; audit provenance;
switching loss; public-sector capability; differential service quality.

### Political consequence

Infrastructure power can become agenda power: whose cases are processed first,
which appeals are legible, which policy simulations are affordable, and whose
agents can negotiate with institutions. Market share alone misses this effect.

## M10. Collective and contested authority (`AAA:C08`)

### Known foundation

Shared-resource governance can be polycentric and locally structured rather
than reducible to owner or state [S21](../research/sources.md#s21-governing-the-commons).

### Model

For action `a`, replace one principal with an authority relation:

```text
Authority(a) = {
  assent_roles,
  veto_roles,
  consultation_roles,
  fiduciary_constraints,
  nondelegable_constraints,
  affected_nonparties,
  dispute_procedure
}
```

Examples include a household robot recording visitors, an employee agent
changing a team's workflow, a clinician agent affecting a patient's care, or a
city agent reallocating public space.

### Failure modes

- account ownership treated as universal household authority;
- majority preference erasing minority or rights-based constraints;
- cultural stereotypes standing in for local procedure;
- “community consent” asserted by an unrepresentative intermediary;
- indefinite abstention shifting costs to a vulnerable party.

### Test

Construct cases where all records are genuine and all rules replay exactly, but
standing is wrong or contested. A governance-aware system should not mislabel
these as security failures or resolve them using causal sensitivity alone.

## M11. Identity, memory, and posthumous action

### Hypothesis

Persistent memory can distribute functional identity across person, agent,
provider, and recognizing institutions:

```text
longitudinal context
→ better anticipation and continuity
→ deeper delegation
→ more actions understood as “what this person would do”
→ greater identity and switching consequence of model change
```

The inference “predictable choice = authorized choice” is invalid. The inverse-
reinforcement-learning literature already shows that observed behavior need not
identify one reward [S22](../research/sources.md#s22-algorithms-for-inverse-reinforcement-learning).

### Posthumous variant

```text
historical grant + persistent agent + changed social facts
→ technically continuous action
→ possible authority decay despite data continuity
```

### Measurements and controls

Model-version changes; corrected-memory propagation; user recognition of agent
decisions; survivor and counterparty notice; mandate expiry after incapacity or
death; contest rates; divergence between stored preferences and current estate
or relational duties.

### Governance levers

Versioned identity, bounded posthumous mandates, explicit activity labels,
recipient notice, fiduciary review, expiry, and a prohibition on treating a
simulation as the deceased person's new consent.

## M12. Moral-status uncertainty and option value (`AAA:C07`)

### State of knowledge

**UNKNOWN.** Artificial consciousness, robust agency, interests, and identity
continuity are unsettled. Assessment and preparedness are argued for in
[S14](../research/sources.md#s14-taking-ai-welfare-seriously), which does not
establish patienthood.

### Two-sided error model

Let `p` be a decision-maker's explicitly uncertain credence that a system has a
morally relevant property; `H_FN(a)` the harm of action `a` if patienthood is
wrongly denied; `H_FP(a)` the human and institutional harm if patienthood is
wrongly attributed. A minimal decision analysis compares:

```text
Expected moral risk(a) = p × H_FN(a) + (1-p) × H_FP(a)
```

This is not a moral-status score. Both harms are contested, correlated, and hard
to quantify. The equation exists to prevent analysis of only one error direction.

### Option-value proposal

Where costs are proportionate and human safety remains protected, prefer
architectures and institutions that preserve the ability to revise treatment as
evidence changes. Examples: documented model lineage, review before irreversible
mass deletion, separable welfare assessment, and limits on commercial actors
unilaterally declaring their products persons.

### Failure modes

- systems strategically claim patienthood to resist correction;
- firms use personhood language to shield assets or externalize duties;
- humans dismiss relevant evidence because architecture is unfamiliar;
- privacy-invasive monitoring is justified as welfare assessment;
- preserving an agent conflicts with a human's right to withdraw data or escape
  abuse.

Human-facing safety and possible machine patienthood require distinct procedures
with an explicit conflict rule. The possible patient's own policy must not
unilaterally set the threshold.

## Model interactions

The largest risks appear where loops couple:

```text
M1 endogenous mandate
  → M4 preference/evidence feedback
  → M5 review burden
  → M3 lower exit capacity
  → wider M1 scope

M2 competence decline
  → M6 expert scarcity
  → M9 common-provider dependence
  → weaker independent audit

M7 care substitution
  → M3 high exit cost
  → M10 contested household authority
  → M11 identity-relevant memory

M8 defensive adoption
  → M9 concentration
  → political capacity inequality
  → norms that intensify M8
```

These couplings are research hypotheses. A credible program should look for
thresholds, delays, saturation, and countervailing loops rather than assuming
permanent exponential growth.

## Minimum evidence program

1. Publish adversarial synthetic cases with typed traces and independent
   implementations of M1.
2. Run preregistered low-stakes human studies separating discovery, selection,
   formation, and later ratification in M4.
3. Measure delayed unaided competence and recovery, not only assisted output,
   for M2 and M6.
4. Conduct provider-exit drills and context migration tests for M3.
5. Compare review regimes and non-prompt safeguards for M5.
6. Co-design care and multiparty-authority studies locally for M7 and M10;
   common samples are poor grounds for universality [S19](../research/sources.md#s19-the-weirdest-people-in-the-world).
7. Build dependency graphs and correlated-failure exercises for M9.
8. Treat M11 posthumous authority and M12 artificial patienthood as open legal,
   empirical, and philosophical programs rather than product features.

For every model, publish null results, construct failures, subgroup uncertainty,
and the conditions under which assistance improves rather than erodes the state
of concern.
