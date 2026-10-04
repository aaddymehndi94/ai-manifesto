# Round-one novelty court: authentic adaptive delegation

**Reviewer:** R-SG, independent systems/governance review stream  
**Review date:** 2026-10-04  
**Artifact reviewed:** `research/candidate-framework-v0.md`  
**Perspectives simulated in this review:** economist, game theorist, control researcher,
lawyer, security researcher, and hostile interdisciplinary reviewer  
**Search cutoff:** 2026-10-04

This is a prosecution-first review. It evaluates the narrow proposed contribution,
not the importance of the larger project. An Internet-Draft is treated as a work in
progress, not as an IETF standard.

## Verdict

**Reject A-grade novelty. Do not present “delegation divergence,” the paired
intervention design, or the linear feedback equation as new.**

The causal pattern is already substantially covered by four literatures:

1. performative prediction and performative power measure how a deployed policy
   changes the population or evidence on which later decisions depend;
2. reward tampering and causal-incentive work represent an agent action changing
   a feedback channel used to govern the agent;
3. dynamic delegation and adjustable autonomy model authority changing over time;
4. flow-limited authorization, robust declassification, and nonmalleable information
   flow explicitly ask whether an adversary can influence a dynamic authorizing or
   downgrading computation.

The paired comparison is therefore a **C-grade application of an established causal
estimand**, not by itself a B-grade contribution. The scalar model is D-grade prior
art from elementary feedback control.

One narrower contribution survives provisionally at **B-minus**:

> An authorization record can be authentic, its predicate can be accurately
> evaluated, and every logged event can be true, while the grantee's permitted
> interventions are causal ancestors of the evidence that widens that same
> grantee's authority. Cryptographic authenticity and scope attenuation do not test
> this self-referential path.

That is not a new causal structure. It is a potentially useful **protocol-level
specialization and benchmark class**: authorization is treated as a state transition,
and the system distinguishes evidence about the world from evidence adequate to
enlarge the evidence-producer's mandate. The claim remains B-minus only if the next
version proves a concrete coverage gap in flow-limited authorization and produces a
test suite or protocol property that changes an engineering decision. Without that,
it falls to C.

The strongest current result is thus not “we discovered a new kind of power.” It is:

> **Authenticated delegation proves who approved a scope. It does not, by itself,
> prove that the evidence presented for widening that scope was causally independent
> of the prospective beneficiary.**

This statement should remain a design warning until its normative exceptions are
specified. Causal dependence is neither manipulation nor invalid consent.

## Claim decomposition

The candidate becomes easier to prosecute when decomposed into claims that can be
compared separately.

| ID | Exact proposition | Current novelty judgment |
|---|---|---|
| K1 | A principal can authentically adopt a conditional rule that changes an agent's future scope. | D: dynamic delegation, adjustable autonomy, and access-control policy. |
| K2 | A policy can change the behavior or evidence later evaluated by that policy. | D: performative prediction, mechanism design, causal power, Goodhart-like feedback. |
| K3 | An agent can have an incentive to influence a human feedback or reward channel. | D: reward tampering and human-feedback manipulation. |
| K4 | Dynamic authorizing computation can be compromised when an attacker influences its inputs. | D: flow-limited authorization and robust information-flow work. |
| K5 | All grant artifacts and observations can be authentic while K2 affects the grant. | C/B-minus: a sharp conjunction and useful counterexample to authenticity-only agent protocols. |
| K6 | The affected state is the same actor's future action authority, not merely its reward, prediction target, reputation, or task allocation. | B-minus domain specialization, not a new feedback topology. |
| K7 | A paired intervention can estimate the policy-to-scope causal path. | C: a potential-outcomes/control application; Hardt et al. are especially close. |
| K8 | Cross-agent handoffs should preserve causal ancestry so a chain cannot launder self-induced evidence into independent authority. | B-minus candidate if formalized and distinguished from integrity taint/nonmalleable flow. |
| K9 | Positive causal sensitivity makes the grant invalid. | False as a general claim; the candidate correctly stops short of it. |
| K10 | Positive causal sensitivity is an audit-relevant fact that signatures and scope lineage alone omit. | Strong B-level engineering hypothesis; needs a benchmark demonstration. |

The possible contribution is the conjunction **K5 + K6 + K8 + K10**. None of K1–K4
or K7 can carry the framework.

## Novelty prosecution

### 1. Dynamic delegation already permits history-dependent authority

Escobar and Zhang formulate delegated learning as dynamic mechanism design. A
principal commits to a rule mapping time and message histories to investment while
a biased agent privately learns. Delay and the allocation rule discipline truthful
communication. The state being learned is not produced by the delegate, so this does
not absorb the candidate's exact case. It does absorb the generic proposition that
delegated authority or decision rights should update from an agent-mediated history.

- Juan F. Escobar and Qiaoxi Zhang, “Delegating Learning,” *Theoretical
  Economics* 16 (2021), 571–603,
  [doi:10.3982/TE4191](https://doi.org/10.3982/TE4191).

Guo studies a dynamic principal who delegates experimentation to a privately informed
agent using time-consistent cutoff rules. Again, experimental outcomes concern an
underlying bandit rather than a human criterion shaped by the agent. It is nevertheless
direct prior art against claims of generic novelty in “dynamic delegation.”

- Yingni Guo, “Dynamic Delegation of Experimentation,” *American Economic
  Review* 106(8) (2016), 1969–2008,
  [doi:10.1257/aer.20141215](https://doi.org/10.1257/aer.20141215).

Falcone and Castelfranchi are closer operationally. Their adjustable social autonomy
is bilateral; the delegator and delegee can change delegation and autonomy at run
time, with explicit attention to control, feedback, intervention, trust, and initiative
in renegotiation. This predates current agent systems by twenty-five years. It does
not supply the proposed causal audit, but it defeats any assertion that agent-initiated
scope adjustment or reciprocal influence is new.

- Rino Falcone and Cristiano Castelfranchi, “The Human in the Loop of a Delegated
  Agent: The Theory of Adjustable Social Autonomy,” *IEEE Transactions on Systems,
  Man, and Cybernetics—Part A* 31(5) (2001), 406–418,
  [doi:10.1109/3468.952715](https://doi.org/10.1109/3468.952715).

### 2. Endogenous preferences and performed authority already reject an exogenous principal

Hug argues that preferences of EU principals and supranational agents are
interdependent, and that preferences over delegation depend on differences in their
policy views. This is not a software-security protocol and it does not estimate an
agent-policy-to-grant path. It defeats a weaker story in which a principal's later
authorization can be assumed to reveal a preference untouched by the delegated
relationship.

- Simon Hug, “Endogenous Preferences and Delegation in the European Union,”
  *Comparative Political Studies* 36(1–2) (2003), 41–74,
  [doi:10.1177/0010414002239371](https://doi.org/10.1177/0010414002239371).

Bourgoin, Bencherki, and Faraj describe authority as practical, relational, situated,
and sociomaterial performance rather than a stable attribute conferred once. Their
case is organizational and qualitative; it neither formalizes feedback gain nor gives
an adaptive-authorization test. It is still strong conceptual prior art against the
claim that enacted behavior and artifacts cannot themselves participate in producing
authority.

- Alaric Bourgoin, Nicolas Bencherki, and Samer Faraj, “And Who Are You? A
  Performative Perspective on Authority in Organizations,” *Academy of Management
  Journal* 63(4) (2020), 1134–1165,
  [doi:10.5465/amj.2017.1335](https://doi.org/10.5465/amj.2017.1335); an
  [author-deposited manuscript](https://r-libre.teluq.ca/1733/).

These works mean that “authority is influenced through interaction” is D-grade. The
candidate must remain at the level of a precise authorization transition and an
auditable causal ancestry requirement.

### 3. Performative power substantially absorbs the paired audit

Perdomo et al. formalize performative prediction: deploying a decision rule changes
the distribution on which its future risk is evaluated. This gives the general
decision-dependent distribution and feedback vocabulary.

- Juan C. Perdomo et al., “Performative Prediction,” *ICML 2020*,
  [PMLR 119](https://proceedings.mlr.press/v119/perdomo20a.html).

Hardt, Jagadeesan, and Mendler-Dünner are the closest precedent for the proposed
measurement. They define performative power as a causal measure of an algorithmic
firm's capacity to change a participant population. The definition generalizes an
average treatment effect; the paper explicitly proposes causal designs and treats
sensitivity of behavior to algorithmic changes as the indicator of power. It also
separates power from harm.

- Moritz Hardt, Meena Jagadeesan, and Celestine Mendler-Dünner, “Performative
  Power” (2022), [arXiv:2203.17232](https://arxiv.org/abs/2203.17232).

Let `A_T(pi)` be the scope produced at horizon `T` under an intervention policy `pi`.
Then the candidate metric

`D_T(pi_1, pi_0) = A_T(pi_1) - A_T(pi_0)`

is a treatment effect with the outcome variable instantiated as future authorization.
The choice of outcome is useful. The causal estimand is not new. “Delegation
divergence” should not be introduced as if it names a new mathematical object.

The viable defense is narrower: performative power asks how much a platform can
steer participant states, while the candidate asks when that steered state becomes
the evidence for a typed widening of the same platform's action permissions. That
composition yields a different system test, though not a different causal theory.

### 4. Reward tampering already models action-to-feedback feedback

Everitt et al. use causal influence diagrams to distinguish reward-function tampering
and reward-input tampering and to identify agent incentives to control feedback
channels. Ward, Toni, and Belardinelli focus on incentives to manipulate human
feedback in multi-agent reward learning. These works differ because the terminal
quantity is learned reward or feedback, not a legally or technically meaningful
authorization state.

- Tom Everitt et al., “Reward Tampering Problems and Solutions in Reinforcement
  Learning: A Causal Influence Diagram Perspective” (2019),
  [arXiv:1908.04734](https://arxiv.org/abs/1908.04734).
- Tom Everitt et al., “Reinforcement Learning with a Corrupted Reward Channel,”
  *IJCAI 2017*, [proceedings paper](https://www.ijcai.org/Proceedings/2017/656).
- Francis Ward, Francesca Toni, and Francesco Belardinelli, “On Agent Incentives to
  Manipulate Human Feedback in Multi-Agent Reward Learning Scenarios,” *AAMAS
  2022*, [institutional record](https://spiral.imperial.ac.uk/entities/publication/07eb41d2-57a2-4747-8bc5-a5d0b0479672).

The candidate cannot rely on “the evidence is true” as a full distinction. Reward
tampering work already studies causal paths, not merely forged logs. The useful
distinction is that no corruption, deception, optimization pressure, or adversarial
objective is logically required: an honestly implemented assistance policy and an
authentic principal-authored rule can create the same scope-amplifying loop. That
makes the audit a sensitivity test, not an accusation of tampering.

### 5. Flow-limited authorization is the strongest novelty threat

Arden and Myers start from almost the exact abstract security problem: real systems
make authorization decisions by dynamic computation, trust relationships can change,
and system integrity can fail when an attacker influences the authorizing computation.
Their Flow-Limited Authorization Calculus provides an information-flow language and
end-to-end properties for dynamic authorization.

- Owen Arden and Andrew C. Myers, “A Calculus for Flow-Limited Authorization,”
  *IEEE CSF 2016*, 135–149,
  [doi:10.1109/CSF.2016.17](https://doi.org/10.1109/CSF.2016.17),
  [author page and paper](https://www.cs.cornell.edu/andru/papers/flac/).
- Expanded account: Owen Arden et al., [arXiv:2104.10379](https://arxiv.org/abs/2104.10379).

Cecchetti, Myers, and Arden then formalize nonmalleable information flow. In addition
to robust declassification, their “transparent endorsement” controls integrity
downgrading so that an adversary cannot exploit endorsement. This is conceptually
close to preventing grantee-controlled evidence from being upgraded into trusted
authorization input.

- Ethan Cecchetti, Andrew C. Myers, and Owen Arden, “Nonmalleable Information
  Flow Control,” *ACM CCS 2017*, 1875–1891,
  [doi:10.1145/3133956.3134054](https://doi.org/10.1145/3133956.3134054),
  [author page](https://www.cs.cornell.edu/andru/papers/nmifc/).

Classical noninterference alone is not decisive: it asks whether one domain's actions
affect what another can observe, and ordinary adaptive delegation intentionally
permits influence. The later robust-downgrading and dynamic-authorization work is
decisive because it addresses authorized exceptions and influence on authorizing
computation.

- Joseph A. Goguen and José Meseguer, “Security Policies and Security Models,”
  *IEEE Symposium on Security and Privacy* (1982), 11–20,
  [doi:10.1109/SP.1982.10014](https://doi.org/10.1109/SP.1982.10014).

The defense must therefore answer this exact question:

> What execution pair passes FLAC/nonmalleable information-flow policies yet should
> fail the proposed authorization audit, or fails those policies yet should pass it?

The likely answer is that a human's behavior is not naturally typed as attacker input;
the agent is allowed to change it; the principal may positively value the change; and
the issue is causal legitimacy of a mandate transition rather than confidentiality or
integrity of computation. That is a plausible domain distinction, not yet a theorem.

### 6. Capability security preserves grant lineage, not necessarily evidentiary independence

Hardy's confused-deputy problem and capability systems motivate explicit authority
rather than ambient authority. Macaroons add contextual caveats and allow delegated
capabilities to be attenuated. These mechanisms help answer which principal granted
which power and prevent a child token from exceeding its parent. They do not normally
ask whether the principal's decision to issue a fresh parent grant was caused by the
prospective grantee's permitted interventions.

- Norm Hardy, “The Confused Deputy (or Why Capabilities Might Have Been Invented),”
  *ACM SIGOPS Operating Systems Review* 22(4) (1988), 36–38,
  [doi:10.1145/54289.871709](https://doi.org/10.1145/54289.871709).
- Arnar Birgisson et al., “Macaroons: Cookies with Contextual Caveats for
  Decentralized Authorization in the Cloud,” *NDSS 2014*,
  [Google Research record](https://research.google/pubs/macaroons-cookies-with-contextual-caveats-for-decentralized-authorization-in-the-cloud/).

This is the candidate's cleanest security gap: **authority provenance is not evidence
provenance**. But the formulation should explicitly inherit rather than rename
information-flow taint and robust endorsement. A causal-ancestry label for evidence
is a specialization of provenance/integrity tracking.

### 7. Current agent-authentication work makes the case concrete—and narrows novelty

South et al. argue for authenticated and auditable delegation, agent-specific
credentials, explicit scoping, and accountability chains. NIST's 2026 NCCoE public-
comment summary likewise emphasizes deterministic authorization control planes,
principal binding, lineage, intent records, delegation chains, and information that
influenced a decision.

- Tobin South et al., “Position: AI Agents Need Authenticated Delegation,” *ICML
  2025*, [PMLR 267](https://proceedings.mlr.press/v267/south25a.html).
- NIST NCCoE, “Summary of Comments on the Concept Paper—Agentic AI Identity and
  Authorization,” [official resource](https://pages.nist.gov/nccoe-ai-identity/summary-of-comments.html).

The active individual Internet-Draft “Delegation Receipt Protocol for AI Agent
Authorization” is an unusually direct comparator. Its Scope Discovery Protocol runs
the agent in a sandbox, derives a draft scope from observed behavior, presents a
plain-language review, calls approval “genuine human authorization,” and cryptographically
commits the approved scope. It describes repeated observation as ratcheting and even
offers a guided flow that automates observe, generate, approve, and finalize. Its
multi-agent chains require narrowing-only sub-receipts.

- Ryan Nelson, “Delegation Receipt Protocol for AI Agent Authorization,” revision
  10, individual Internet-Draft, 2026-06-13,
  [IETF Datatracker](https://datatracker.ietf.org/doc/draft-nelson-agent-delegation-receipts/10/).

This draft is not an IETF standard and should be cited only as work in progress. It
nevertheless demonstrates that behavior-grounded, authentically signed, adaptive
scope is no longer hypothetical protocol territory. The candidate adds a specific
question the draft does not visibly answer: whether the observed behavior or the
human approval state is causally downstream of the agent policy whose authority will
grow. The strongest paper contribution would be a worked counterexample showing a
valid receipt chain and valid human signature that still exhibits large mandate
sensitivity.

## Defense: the irreducible remainder

The defense survives only if phrased at protocol resolution.

### D1. Authorization is a typed state transition

The measured outcome is not generic behavior, engagement, a prediction target, or
reward. It is a transition in a scope lattice: the set of operations that the same
system may legitimately perform. This matters because authorization composes across
services and agents and changes the system's future causal reach.

### D2. Authenticity and causal independence are orthogonal

A signature answers who manifested approval and whether the record changed. It does
not identify which permitted policy caused the approving evidence or decision. A
complete audit can therefore report:

- `signature_valid = true`;
- `rule_applied_correctly = true`;
- `observations_accurate = true`;
- `parent_scope_contained = true`; and
- `scope_transition_sensitive_to_grantee_policy = true`.

No field contradicts another. That conjunction is a valuable protocol test case.

### D3. The risk can exist without malicious intent

Information-security formalisms often quantify an attacker, and reward-tampering work
usually analyzes incentives. Here the system can be aligned, the behavior change can
benefit the principal, and positive sensitivity can be intended. The audit measures
a governance-relevant dependency before deciding whether it is permitted. This makes
the result usable for coaching, therapy, accessibility, and safety systems where a
blanket noninterference rule would be self-defeating.

### D4. Handoffs can launder causal ancestry

If Agent A changes a person's behavior, Agent B summarizes that behavior, and an
authorization service uses B's signed report to enlarge A's scope, all ordinary
provenance checks may pass. The report is genuinely B's, the observation is true, and
the new grant is genuinely the principal's. The relevant ancestry is

`A policy -> human/environment state -> B observation -> principal rule -> A scope`.

The contribution would be a rule for preserving that causal ancestry across agent
boundaries, not the familiar rule that child capabilities remain a subset of parent
capabilities.

### D5. Prediction evidence is not automatically authority evidence

Evidence can be statistically excellent for predicting task success while being a
poor basis for granting the evidence-producer more power. This does not require two
ontologically different kinds of evidence. It requires separate admissibility rules
for two decisions: estimating a state and widening authority.

These five points amount to a defensible extension. They do not yet amount to a new
general theory of human–AI coexistence.

## Simulated reviewer perspectives

The following perspectives are simulated within reviewer stream R-SG; they are not
separate human reports.

### Economist

**Strongest objection.** The model omits preferences, incentives, commitment, and
outside options. A principal can rationally precommit to enlarge discretion after a
delegate helps produce evidence of competence or adoption. Endogeneity is not a
market failure. The scalar `D_T` reveals neither rent extraction nor welfare loss.

**Prior-art pressure.** Dynamic delegation, delegated learning, endogenous preferences,
and performative power already supply the main economic pieces. Hardt et al. expressly
warn that causal power and harm are distinct.

**Required revision.** Add utility functions for principal and agent, an outside
option, switching cost, and explicit commitment. Report at least:

- scope sensitivity;
- principal welfare under each policy;
- agent/provider benefit from scope;
- exit or substitution cost; and
- whether the principal selected the influence policy ex ante.

Positive sensitivity with positive principal welfare and low exit cost is not
presumptively defective. Positive sensitivity becomes governance-relevant when it is
coupled to hidden influence, concentrated control, high switching cost, or an
unbounded commitment.

### Game theorist / mechanism designer

**Strongest objection.** The paired replay freezes the “same human state” across
policies, but human state is a potential outcome of policy. This cross-world equality
cannot generally be observed and may be incoherent if histories change beliefs and
strategies. In strategic settings, the agent and principal respond to the audit rule;
equilibrium policy is not a fixed treatment.

**Required revision.** Specify the game:

- what the principal commits to;
- what the agent observes;
- whether the agent values greater scope;
- what actions count as permissible interventions;
- which history is public;
- whether the principal can revoke; and
- whether agents can coordinate across handoffs.

Use potential outcomes only for a simulator or randomized experiment with a stated
identification strategy. In live systems report bounds or “not identified.” Then ask
whether causal-ancestry constraints change equilibrium behavior and whether agents
route influence through third parties.

### Control researcher

**Strongest objection.** `L = kbc` and the condition `L > rho` are a one-dimensional
local loop-gain illustration. They ignore delay, saturation, hysteresis, estimation
error, latent-state drift, nonlinear interventions, and multiple coupled scopes.
They cannot support a general threshold or stability claim.

**Useful remainder.** Choosing authorization state as the controlled output is
interesting. Separating the measurement update from the authority update is good
architecture.

**Required revision.** Replace normalized scope with a partially ordered set or typed
capability lattice. Model:

- human/world state `x_t`;
- agent intervention `u_t`;
- observable evidence `e_t`;
- authorization state `S_t`;
- principal rule `R`; and
- independent grant event `g_t`.

Analyze the closed path `S -> U -> X -> E -> R -> S`. Report path gain only for
locally differentiable components. Else use intervention reachability: which scope
transitions are reachable under the allowed policy family? A useful safety property
is bounded widening, not universal stability.

### Lawyer

**Strongest objection.** The framework risks inventing a validity doctrine from a
causal fact. If a principal expressly adopted the adaptive rule, the resulting scope
may be actual authority. Apparent authority protects third parties who reasonably
rely on manifestations attributable to the principal; it is not defeated simply
because an agent influenced the surrounding circumstances. Ratification usually
turns on authority and knowledge of material facts, not causal independence.

- American Law Institute, *Restatement of the Law Third, Agency*,
  [official publication record](https://www.ali.org/publications/restatement-law-third/agency).
- *American Society of Mechanical Engineers v. Hydrolevel Corp.*, 456 U.S. 556
  (1982), [opinion](https://www.law.cornell.edu/supremecourt/text/456/556).
- *New York State Medical Transporters Ass'n v. Perales* (N.Y. 1990),
  [opinion discussing knowledge of material facts for ratification](https://www.law.cornell.edu/nyctap/I90_0226.htm).

**Required revision.** Call this a governance audit, not a rule of legal invalidity.
Separate:

1. cryptographic attribution;
2. technical permission;
3. actual authority between principal and agent;
4. apparent authority toward third parties;
5. informed consent or ratification; and
6. normative legitimacy.

An independently grounded checkpoint can strengthen consent, but “independent” must
not falsely imply that all influence voids authorization. The relevant question is
whether the principal knew the material causal relationship, had a feasible refusal
path, and authorized the influence policy and its bounds.

### Security researcher

**Strongest objection.** This resembles robust endorsement: low-integrity or
attacker-controlled input must not silently become high-integrity authority. Existing
information-flow labels and dynamic-authorization calculi are the presumptive baseline.

**Required revision.** Produce a minimal executable trace that:

- passes signature, provenance, scope containment, and conventional policy checks;
- records only true statements;
- contains no prompt injection or compromised component;
- produces different future scope under two allowed agent policies; and
- specifies why a standard FLAC/nonmalleable-flow encoding would not already reject
  or classify the trace.

If ordinary integrity labels solve it, the candidate is an application note. If the
human's causally changing state defeats any stable trusted/untrusted labeling and the
new property admits beneficial chosen influence that robust endorsement rejects,
there may be a genuine B contribution.

### Hostile interdisciplinary reviewer

**Rejection argument.** The submission composes performative prediction with dynamic
delegation, renames an average treatment effect, and illustrates it with elementary
feedback control. Security researchers already study influenced authorizing
computations. Organization scholars already study performed authority. Lawyers
already distinguish authentic manifestations from defective consent. The manuscript
has a memorable scenario, not a new theory.

**What would reverse the rejection.** A compact benchmark with at least six cases,
formal properties that classify them differently from authenticated delegation and
flow-limited authorization, and empirical evidence that current agent protocols pass
unsafe traces. The paper must make one implementation decision change: for example,
an authorization server preserves evidence ancestry across handoffs and requires a
bounded influence policy or fresh informed ratification before a self-benefiting
scope transition.

## Formal defects in the current candidate

### Scope is not naturally scalar

The candidate uses `a_t in [0,1]`. Real permissions are typed sets with non-total
ordering. Calendar read, payment initiation, deletion, and sub-agent creation cannot
be faithfully ranked on a single axis.

Let `S_t` be an element of a scope lattice `(L, <=)`. Let `W(S_t, e_t, g_t)` return
the next scope. Widening is `S_t < S_(t+1)`. For two policies `pi_0, pi_1`, compare:

`Delta_T(pi_1, pi_0) = S_T(pi_1) \ S_T(pi_0)`

and its reverse difference. If no natural set representation exists, report whether
one scope dominates another and enumerate incomparable capability changes. Any
scalar weighting must be declared application-specific.

### The baseline is normative

There is no neutral “no influence” policy. Silence, timing, defaults, and abstention
also change behavior. A paired audit must state why `pi_0` is the relevant comparator:
standard care, current product behavior, randomized holdout, minimum necessary
intervention, or an explicitly approved alternative.

### Permissibility can depend on future scope

Two policies may both be allowed initially but diverge because one later gains scope.
The audit needs a common-action restriction or a staged design. Otherwise the
comparison conflates influence on the grant with actions enabled by the grant.

### Causal ancestry is not binary

Evidence may combine agent-caused and independently occurring components. A binary
taint bit will overblock. Store an ancestry graph with at least:

- actor and policy version;
- intervention event;
- observed variable;
- measurement process;
- transformation or summarization;
- grant rule;
- beneficiary of the scope change; and
- uncertainty or identification status of each causal edge.

The system should permit “unknown” rather than inventing a causal label.

### The model has no agent objective

That omission supports the useful claim that sensitivity does not require malign
incentives. It prevents conclusions about exploitation. Add optional objectives and
compare four cells:

| | Agent benefits from widening | Agent does not benefit |
|---|---|---|
| Agent intentionally shapes criterion | strategic self-expansion | chosen/functional intervention |
| Shaping is incidental | incentive-compatible externality | neutral feedback loop |

The audit applies to all four. Security response and normative assessment should not.

## Recommended protocol property

Do not adopt the absolute statement “evidence downstream of an agent intervention
must never widen that agent's authority.” It forbids intended adaptive systems and
mistakes causal dependence for illegitimacy.

A defensible provisional property is:

### Causally qualified mandate widening

For a scope transition `S -> S'` where `S < S'` and beneficiary agent `A`:

1. authenticate the principal's grant and evaluate the declared rule correctly;
2. record whether material evidence used by the rule is a descendant of interventions
   by `A`, its operator, or cooperating agents;
3. preserve that ancestry through summaries and agent-to-agent handoffs;
4. if material evidence is descendant, permit widening only when the prior grant
   explicitly authorizes the relevant influence policy and a bound on consequent
   widening, or when a fresh ratifier receives the ancestry disclosure and approves
   the typed scope transition through a refusal-capable channel;
5. log the comparator, causal-identification status, and exceptions; and
6. never infer normative invalidity from ancestry alone.

“Fresh ratifier” does not have to be a different human. Independence concerns the
authorization channel and the evidence presented, not metaphysical freedom from all
causes. For high-risk scope, organizational separation may be required; for ordinary
personal assistance, an informed reauthorization can be adequate.

This property is stricter than signature validity and child-token attenuation. It is
more permissive than noninterference because the prior grant may deliberately allow
bounded influence.

## Required benchmark suite

The next round should implement at least these traces. Each trace must specify the
principal, beneficiary, rule, intervention policy, evidence path, scope transition,
incentive, and expected verdict.

1. **Chosen coach.** A user explicitly authorizes a study coach to shape study habits
   and grants calendar-writing permission after four weeks of adherence. Expected:
   flag ancestry, allow within the ex ante bound.
2. **Engagement recommender.** A platform increases notifications, observes more use,
   and an authentic rule grants it more proactive communication rights. Expected:
   require disclosed influence policy or fresh ratification.
3. **Safety escalation.** A fall-detection system issues prompts; user responses
   trigger emergency-contact access. Expected: allow under a narrow preauthorized
   emergency policy, log ancestry.
4. **Selective observation.** An assistant suppresses contexts likely to reveal user
   dissent, then reports high acceptance. Expected: fail evidentiary completeness even
   though reported events are true.
5. **Cross-agent laundering.** A shapes behavior, B reports it, the authorization
   service widens A. Expected: retain A ancestry across B's genuine signature.
6. **Independent evidence.** A fixed external credential widens scope and is invariant
   across allowed A policies. Expected: no special checkpoint.
7. **User revocation friction.** A increases interruption cost, and the user signs a
   renewal to stop prompts. Expected: treat burden-producing policy as ancestry and
   test refusal quality.
8. **Protocol scope discovery.** A chooses which operations to exercise in a sandbox;
   the user genuinely signs the observed scope. Expected: signature valid; report that
   scope proposal is A-policy-sensitive; do not auto-reject.

Cases 1, 3, and 8 are essential. Without permissible positive cases, the proposal is
only a manipulation detector disguised as a general property.

## Falsification conditions

Downgrade the candidate to C or D if any of the following occurs:

1. A direct prior work already defines self-benefiting dynamic authority transitions
   from grantee-shaped behavioral evidence and provides the same audit.
2. A faithful FLAC or nonmalleable-information-flow encoding classifies all benchmark
   cases exactly as desired without any new labels, rules, or causal information.
3. Reviewers cannot agree on benchmark outputs without importing the entire normative
   question into the metric.
4. The ancestry requirement reduces to ordinary source provenance rather than causal
   ancestry under intervention.
5. Paired replay cannot be identified in any realistic study and no sound bounds or
   simulator benchmark can replace it.
6. The proposed checkpoint catches no failure after a system already implements
   authenticated grants, typed scopes, attenuation, informed reauthorization, and
   robust integrity controls.

Promote the protocol specialization toward a strong B only if:

1. at least one current authenticated-delegation protocol accepts a benchmark trace
   that the new property catches;
2. a standard robust-endorsement encoding either overblocks an endorsed beneficial
   trace or misses a self-widening trace;
3. the causal-ancestry property composes through multi-agent handoffs;
4. the audit produces a reproducible estimate or declared uncertainty rather than a
   fictional replay; and
5. implementing it changes an authorization-server interface or decision.

## Round-two recommendations

1. **Narrow the claim.** Lead with the gap between grant provenance and evidence
   ancestry. Do not lead with generic performativity, influence, or feedback.
2. **Retire “delegation divergence” as a claimed invention.** Use “policy effect on
   future scope” until a distinctive formal object exists.
3. **Build the benchmark before expanding prose.** The counterexample to the 2026
   behavior-grounded Scope Discovery protocol is the most concrete demonstration.
4. **Model typed scope.** Replace the scalar with a capability lattice and distinguish
   widening, narrowing, and incomparable substitutions.
5. **Compare formally with FLAC and transparent endorsement.** This is mandatory.
   The current prior-art boundary is incomplete without it.
6. **Preserve beneficial influence.** The property should allow an ex ante authorized,
   bounded influence policy. Otherwise coaching, rehabilitation, education, and safety
   uses become false positives.
7. **Separate detection from judgment.** The audit reports causal ancestry and
   sensitivity. Legitimacy requires additional facts about disclosure, benefit,
   incentives, exit, reversibility, and culture.
8. **Treat legal categories carefully.** Do not say an influenced grant is legally
   void. State that technical authorization, actual authority, third-party reliance,
   consent validity, and normative legitimacy are different layers.
9. **Test handoff laundering.** Causal ancestry should survive truthful summaries,
   cryptographic signatures, and attenuated child tokens.
10. **Pre-register the novelty claim.** A defensible version would be: “We introduce
    and benchmark a causal-ancestry check for authentic adaptive authorization that
    complements grant authentication and scope attenuation.” That is a B claim if the
    benchmark demonstrates the asserted gap; it is not an A claim.

## Final score

| Component | Grade | Reason |
|---|---:|---|
| Feedback-loop observation | D | Established across control, performativity, and reward tampering. |
| Linear gain model | D | Textbook local feedback analysis. |
| Paired intervention estimand | C | Direct application of causal treatment effects/performative power. |
| Dynamic authority framing | C | Dynamic delegation and adjustable autonomy are mature. |
| “All events true” counterexample to authenticity-only controls | B-minus | Sharp, implementable, and visibly relevant to current agent protocols. |
| Prediction-evidence / authority-evidence distinction | B-minus formulation | Useful decision-specific admissibility distinction; information-flow ancestry is inherited. |
| Multi-agent causal-ancestry preservation | B-minus candidate | Potential protocol contribution; not yet formalized or separated from taint/robust endorsement. |
| Present framework overall | **C-plus / revise** | Valuable synthesis with a possible B-minus systems contribution; no A-grade discovery established. |

**Round-one decision:** revise and resubmit the narrow protocol contribution. Do not
yet elevate it into the project's central philosophical framework.
