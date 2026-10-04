# Systems, institutions, and governance prior art

Status: field map, not framework. Version: 0.1.0. Evidence cutoff: 4 October 2026.

This note asks what control theory, cybernetics, mechanism design, network science,
institutional economics, standards, and law already explain about persistent artificial
agents. It is deliberately hostile to easy novelty claims. A candidate does not survive
because it applies an old idea to AI; it survives only if the AI setting changes a
proposition, prediction, design decision, or experiment.

## Method and source discipline

- Primary papers, original books, standards-body records, treaty texts, and official law
  are preferred. DOI landing pages are used where full text is paywalled.
- `KNOWN` denotes a proposition attributable to cited prior art. `DERIVED HERE` denotes
  an inference from more than one source. `PROPOSED HERE` marks a hypothesis requiring a
  novelty search and empirical work. `FORECAST` is conditional, not a prediction.
- Standards summaries establish scope and status, not compliance detail. ISO standards
  whose full normative text is paywalled are not paraphrased clause by clause.
- The EU AI Act link below is the consolidated text current on retrieval. Its staged
  application dates have been amended. Anyone relying on a date should check the live
  consolidation rather than copy an older timeline.
- “Human oversight,” “autonomy,” “transparency,” and “resilience” are overloaded terms.
  This note does not treat their appearance in a source as evidence that the source
  covers durable human–agent dependence, endogenous preferences, or agent-to-agent
  institutional effects.

## The map in one page

The mature fields divide the problem differently:

| Field | Controlled or allocated object | Central difficulty | Typical remedy | Boundary exposed by persistent agents |
|---|---|---|---|---|
| Control/cybernetics | System state or output | Disturbance, uncertainty, insufficient regulatory variety | Feedback, an internal model, requisite variety, constraint enforcement | The “plant” is also a person or institution that learns and changes under control |
| Mechanism design | Outcomes among strategic actors | Private information and strategic reports | Incentive compatibility, transfers, restricted domains | The mechanism can infer, persuade, and alter the preferences later reported to it |
| Principal–agent theory | Delegated effort/action | Hidden action, hidden information, divergent incentives | Monitoring, contracts, ownership, residual claims | The agent may become the principal’s memory, interface, bargaining capacity, and preference scaffold |
| Network/resilience science | Connectivity and service | Cascades, hubs, tight coupling, surprise | Redundancy, modularity, slack, graceful extensibility | Many nominally separate agents may depend on one model, cloud, identity layer, or policy channel |
| Institutional economics | Rules and governance forms | Transaction costs, collective action, path dependence | Firms, markets, commons rules, polycentric governance | AI changes the cost of transacting and governing, then changes which institutional forms can survive |
| Contemporary AI governance | Organizations, models, systems, uses | Risk, rights, documentation, accountability, product safety | Lifecycle management, impact assessment, oversight, conformity, remedies | Most instruments are organization/system/use-centric; cumulative relationship effects and chains of delegated authority remain thinly represented |

**DERIVED HERE — strongest gap to investigate:** Existing work richly models a regulator
acting on a system, a mechanism eliciting fixed private information, and an institution
governing bounded transactions. Persistent agents combine all three while changing the
future principal and the future environment. The missing object may therefore be neither
“alignment” nor “human control,” but the **joint evolution of delegated authority,
principal capacity, and institutional option sets**. This is a research boundary, not a
novelty verdict.

## Prior-art graph: exact propositions and boundaries

### A. Control, cybernetics, safety, and resilience

#### SYS-01 — Feedback makes behavior relational rather than attributable to one component

- **KNOWN proposition:** In a feedback system, present action changes the environment
  that supplies later input; behavior cannot be understood as a one-way sequence from
  command to effect.
- **Primary source:** Norbert Wiener, *Cybernetics* (1948), especially the feedback and
  oscillation treatment, [MIT Press open edition](https://direct.mit.edu/books/oa-monograph/4581/Cybernetics-or-Control-and-Communication-in-the).
- **Explains:** why repeated assistance can create closed loops; why evaluation of a model
  in a static environment can miss deployment dynamics.
- **Does not establish:** which human states should be controlled, who has legitimate
  authority to set reference values, or whether feedback that improves measured welfare
  diminishes authorship.
- **Edges:** supports SYS-02, SYS-04, GOV-02; qualifies simple “agent caused outcome”
  stories.

#### SYS-02 — Regulation is limited by available discriminatory response

- **KNOWN proposition:** For Ashby’s finite-state regulator setup, reduction in outcome
  variety is bounded by the regulator’s available variety; loosely, disturbances that
  require distinct responses cannot all be controlled with fewer effective responses.
- **Primary source:** W. Ross Ashby, *An Introduction to Cybernetics* (1956), chapters
  10–11, [author archive PDF](https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf).
- **Explains:** why a single approval switch is not “meaningful oversight” over a vast
  action space; why human supervisors need information, time, authority, and executable
  alternatives, not merely nominal veto power.
- **Does not establish:** that the regulator must match every microscopic state, or that
  more centralized AI variety is normatively desirable.
- **Novelty trap:** “oversight bandwidth” is an application of requisite variety unless a
  new measurable relation or institutional consequence is shown.

#### SYS-03 — Effective regulation requires a model of what is regulated

- **KNOWN proposition:** Under Conant and Ashby’s assumptions, a maximally successful and
  simple regulator must be isomorphic to the regulated system with respect to relevant
  distinctions.
- **Primary source:** Roger Conant and W. Ross Ashby (1970), “Every Good Regulator of a
  System Must Be a Model of That System,”
  [DOI](https://doi.org/10.1080/00207727008920220).
- **Related control result:** robust output regulation requires an internal model of the
  relevant disturbance/reference dynamics: Francis and Wonham (1976),
  [DOI](https://doi.org/10.1016/0005-1098(76)90006-6).
- **Explains:** why capable personal agents accumulate behavioral models; why an agent’s
  knowledge of a person is instrumental power, not incidental data.
- **Does not establish:** an entitlement to build that model, use every inference, or
  resolve ambiguity on the person’s behalf.
- **Novelty trap:** “an assistant needs a user model” is old. A surviving claim must concern
  legitimate model scope, model-induced change, or institutional control over models.

#### SYS-04 — Safety is a control problem across a sociotechnical hierarchy

- **KNOWN proposition:** In STAMP, accidents can result from inadequate enforcement of
  safety constraints and dysfunctional interactions even when individual components have
  not “failed.”
- **Primary source:** Nancy Leveson (2004), “A New Accident Model for Engineering Safer
  Systems,” [DOI](https://doi.org/10.1016/S0925-7535(03)00047-X); extended in
  [*Engineering a Safer World*](https://direct.mit.edu/books/oa-monograph/2908/Engineering-a-Safer-WorldSystems-Thinking-Applied).
- **Explains:** why agent accidents cannot be reduced to model error; organizational
  incentives, interface design, authority, updates, and feedback delays belong in the
  causal model.
- **Does not establish:** constraints for slow cumulative changes in competence,
  dependence, preference, or political power.

#### SYS-05 — Controllability and observability are distinct

- **KNOWN proposition:** A system may admit state reconstruction without desired state
  control, or control without adequate state inference; these are formally separate
  properties in control theory.
- **Primary source:** R. E. Kalman (1960), “Contributions to the Theory of Optimal
  Control,” [paper PDF](https://liberzon.csl.illinois.edu/teaching/kalman_paper.pdf).
- **Explains:** why transparency does not imply reversibility, and an override button does
  not imply enough information to use it correctly.
- **Novelty trap:** relabeling observability “transparency” and controllability “human
  control” is synthesis, not discovery.

#### SYS-06 — Stability and resilience answer different questions

- **KNOWN proposition:** Holling distinguishes persistence across state changes from small
  fluctuations around an equilibrium; maximizing one can reduce the other.
- **Primary source:** C. S. Holling (1973), “Resilience and Stability of Ecological
  Systems,” [DOI](https://doi.org/10.1146/annurev.es.04.110173.000245).
- **Modern refinement:** Woods separates rebound, robustness, graceful extensibility, and
  architectures for sustained adaptability (2015),
  [DOI](https://doi.org/10.1016/j.ress.2015.03.018).
- **Explains:** why uninterrupted service, robustness to known failures, human fallback,
  and capacity to adapt to surprise require different metrics.
- **Novelty trap:** “human recoverability” without distinguishing recovery target,
  boundary, and adaptive capacity is renamed resilience.

#### SYS-07 — Tight interdependence can convert local failure into discontinuous collapse

- **KNOWN proposition:** In modeled interdependent networks, recursive dependencies can
  create first-order fragmentation transitions after small initial node losses.
- **Primary source:** Buldyrev et al. (2010), “Catastrophic Cascade of Failures in
  Interdependent Networks,” [Nature](https://www.nature.com/articles/nature08932).
- **Explains:** correlated failure among agent providers, identity systems, payment rails,
  cloud platforms, and human fallback institutions.
- **Does not establish:** that real agent ecosystems have the topology or dependency rules
  of the paper’s model. Empirical mapping is required.

#### SYS-08 — Robustness to random failure can coexist with fragility to targeted attack

- **KNOWN proposition:** The studied heterogeneous networks remained connected under
  extensive random removal but were vulnerable to removal of high-connectivity nodes.
- **Primary source:** Albert, Jeong, and Barabási (2000),
  [Nature](https://www.nature.com/articles/35019019), with
  [2001 correction](https://www.nature.com/articles/35054111).
- **Explains:** why high average uptime can conceal systemic dependence on a few model,
  compute, update, or credential hubs.
- **Novelty trap:** concentration risk is well known. Novelty requires a new dependency
  type, threshold, or intervention specific to delegated agents.

### B. Games, mechanism design, metrics, and delegation

#### MEC-01 — Rules change reports and behavior

- **KNOWN proposition:** With at least three alternatives and unrestricted preferences,
  non-dictatorial deterministic social choice rules cannot generally guarantee truthful
  revelation as a dominant strategy.
- **Primary sources:** Allan Gibbard (1973),
  [DOI](https://doi.org/10.2307/1914083); Mark Satterthwaite (1975),
  [DOI](https://doi.org/10.1016/0022-0531(75)90050-2).
- **Explains:** why a platform that asks humans or agents to state preferences must expect
  strategic reports once allocation depends on them.
- **Does not establish:** impossibility when domains are restricted, outcomes randomized,
  or the mechanism can alter preferences before eliciting them.

#### MEC-02 — Incentive-compatible allocation is possible only relative to a model

- **KNOWN proposition:** Mechanism design can select rules under private information so
  that desired behavior is an equilibrium; direct revelation and auction results depend
  on specified types, utilities, information, and equilibrium concepts.
- **Primary sources:** William Vickrey (1961),
  [DOI](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x); Roger Myerson (1981),
  [DOI](https://doi.org/10.1287/moor.6.1.58).
- **Explains:** why “let agents negotiate” merely relocates governance into protocol and
  utility design.
- **Does not establish:** that the represented human preference is stable, exogenous, or
  sufficiently captured by willingness to pay.

#### MEC-03 — Delegation creates agency costs when action and interest diverge

- **KNOWN proposition:** A principal–agent relationship incurs monitoring, bonding, and
  residual-loss costs when the agent’s decisions affect the principal and interests are
  not perfectly aligned.
- **Primary source:** Jensen and Meckling (1976),
  [DOI](https://doi.org/10.1016/0304-405X(76)90026-X).
- **Hidden-action refinement:** Incentive contracts under imperfect observability trade
  incentives against risk and information constraints: Bengt Holmström (1979),
  [bibliographic record](https://ideas.repec.org/a/rje/bellje/v10y1979ispringp74-91.html).
- **Explains:** monitoring and residual loss in agent delegation.
- **Boundary:** classical models normally treat principal objectives/capabilities as given;
  persistent agents may change both through repeated service.

#### MEC-04 — Optimized indicators become endogenous and lose fidelity

- **KNOWN proposition:** When quantitative indicators carry decision consequences, they
  attract corruption pressure and can distort the process they monitor.
- **Primary source:** Donald Campbell (1979), “Assessing the Impact of Planned Social
  Change,” [DOI](https://doi.org/10.1016/0149-7189(79)90048-X).
- **Related original formulation:** Charles Goodhart’s 1975 monetary-control observation
  concerned statistical regularities breaking under policy use; the familiar “measure
  becomes a target” wording is later and should not be falsely quoted as Goodhart’s text.
- **Explains:** evaluation gaming by models, vendors, deployers, regulators, and users.
- **Novelty trap:** any “optimization corrupts proxies” candidate begins as Goodhart/
  Campbell, not a new AI principle.

#### MEC-05 — Automated action can bind humans without contemporaneous review

- **KNOWN legal proposition:** The UNCITRAL Model Law on Automated Contracting provides
  that automated actions in contract formation or performance should not lose legal
  effect solely because no natural person reviewed or intervened; it also addresses
  attribution and offers an optional rule for unexpected outcomes.
- **Primary source:** UNCITRAL (2024),
  [Model Law and official overview](https://uncitral.un.org/en/mlac), and
  [text with Guide to Enactment](https://uncitral.un.org/sites/uncitral.un.org/files/2424674e-mlautomatedcontracting-rev1-ebook.pdf).
- **Explains:** why “the human did not click each time” is not by itself an answer to legal
  effect.
- **Boundary:** the Model Law is contract-specific and expressly not a general AI ethics
  or governance code.

#### MEC-06 — Authorization is not ordinary evidence

- **KNOWN security proposition:** A deputy that receives an object designation but uses
  its own ambient privilege can be induced to exceed the caller’s authority; capability
  systems address this by coupling designation with explicit authority. Norman Hardy’s
  “confused deputy” is the canonical statement,
  [ACM DOI](https://doi.org/10.1145/54289.871709).
- **KNOWN protocol proposition:** Delegated credentials can be attenuated rather than
  amplified. Macaroons allow downstream parties to add caveats that narrow where, when,
  by whom, and for what purpose authority applies: Birgisson et al. (2014),
  [primary publication record](https://research.google/pubs/macaroons-cookies-with-contextual-caveats-for-decentralized-authorization-in-the-cloud/).
- **2026 emerging work, not a standard:** An active IETF Internet-Draft specifically
  proposes attenuating authorization tokens and verifiable delegation-chain claims for
  agentic workflows so downstream authority cannot exceed its parent,
  [draft-niyikiza-oauth-attenuating-agent-tokens-01](https://www.ietf.org/archive/id/draft-niyikiza-oauth-attenuating-agent-tokens-01.html).
  Its existence weakens any claim that authority-lineage enforcement for agents is novel;
  the distinct question here is whether *induced evidence* can mint broader authority.
- **KNOWN information-flow proposition:** Security policy can require that one domain’s
  actions not affect what another domain can observe. This established the broader idea
  that causal source and permitted flow are first-class properties, not facts recoverable
  from content alone: Goguen and Meseguer (1982),
  [DOI](https://doi.org/10.1109/SP.1982.10014).
- **KNOWN learning proposition:** A prediction used to choose an intervention can alter
  the later outcome against which it is evaluated; stable fit to the induced distribution
  need not be fit to a pre-intervention distribution. Perdomo et al. (2020),
  [PMLR primary paper](https://proceedings.mlr.press/v119/perdomo20a.html).
- **KNOWN agency-law boundary (United States, not universal):** Agency is grounded in a
  principal’s manifestation and control; apparent authority ordinarily depends on the
  principal’s manifestations as reasonably understood by a third party, while
  ratification doctrine requires informed adoption of an unauthorized act. See the
  [American Law Institute’s Restatement (Third) of Agency record](https://www.ali.org/publications/restatement-law-third/agency),
  and the Supreme Court’s apparent-authority discussion in
  [*ASME v. Hydrolevel*](https://www.law.cornell.edu/supremecourt/text/456/556).
- **KNOWN consent risk:** Interfaces can impair or subvert choice and produce nominal
  agreement through manipulation; see the FTC’s
  [*Bringing Dark Patterns to Light*](https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf)
  and EDPB [Guidelines 03/2022](https://www.edpb.europa.eu/documents/guideline/guidelines-032022-on-deceptive-design-patterns-in-social-media-platform_en).
- **Boundary exposed:** These fields separately distinguish authority from designation,
  preserve delegation lineage, track causal information flow, require principal-originated
  manifestations, and recognize induced behavior. They do not appear, in the sources
  reviewed here, to state a general agent protocol rule that **evidence causally downstream
  of an agent’s own intervention may update prediction but may not by itself expand that
  agent’s mandate**.
- **Novelty caution:** The protocol may be a synthesis of capability attenuation,
  integrity provenance, informed ratification, and performative prediction. Its claim to
  novelty depends on finding no equivalent in dynamic-consent, fiduciary-agent,
  authorization-logic, and robotics literatures.

### C. Institutions, firms, commons, and path dependence

#### INS-01 — Governance form depends on coordination cost

- **KNOWN proposition:** Firms become attractive when coordinating within authority costs
  less than repeated market contracting, subject to rising internal organization costs.
- **Primary source:** Ronald Coase (1937), “The Nature of the Firm,”
  [DOI](https://doi.org/10.1111/j.1468-0335.1937.tb00002.x).
- **Explains:** why cheap agent search, negotiation, monitoring, and contracting could move
  boundaries among firms, markets, households, and platforms.
- **Does not establish:** whether lower transaction cost distributes power or concentrates
  it in the infrastructure through which transactions occur.

#### INS-02 — Asset specificity and opportunism shape governance

- **KNOWN proposition:** Transactions with different uncertainty, frequency, and asset
  specificity are governed more or less efficiently by different institutional forms.
- **Primary source:** Oliver Williamson (1979),
  [DOI](https://doi.org/10.1086/466942).
- **Explains:** why a deeply personalized agent creates switching costs and bilateral
  dependency even when nominally purchased as a commodity service.
- **Novelty trap:** “personalization causes lock-in” is already transaction-cost and
  switching-cost economics unless the proposed mechanism differs.

#### INS-03 — Institutions structure choice and evolve path-dependently

- **KNOWN proposition:** Formal and informal human-devised constraints define choice sets,
  transaction costs, and incentives; incremental evolution connects current performance
  to prior institutional paths.
- **Primary source:** Douglass North (1991), “Institutions,”
  [AEA](https://doi.org/10.1257/jep.5.1.97).
- **Explains:** why agent adoption can harden into expectations and infrastructure that
  make later opting out costly even without a legal mandate.
- **Novelty trap:** “AI path dependence” is an application until its transition mechanism
  or measurable state variable is specified.

#### INS-04 — Commons can be governed without a market/state dichotomy

- **KNOWN proposition:** Long-enduring common-pool-resource institutions often use
  congruent rules, monitoring, graduated sanctions, conflict resolution, recognized
  organizing rights, and nested organization rather than a single universal design.
- **Primary source:** Elinor Ostrom (1990), *Governing the Commons*,
  [DOI](https://doi.org/10.1017/CBO9780511807763).
- **Explains:** possible governance of shared agent infrastructure, public models, data,
  audit capacity, and incident knowledge.
- **Does not establish:** that compute, model access, attention, culture, or collective
  cognitive capacity are common-pool resources in the technical Ostrom sense.

#### INS-05 — Polycentric systems trade uniformity for experimentation and learning

- **KNOWN proposition:** Multiple partly autonomous decision centers operating at
  different scales can generate experimentation and learning while also risking leakage,
  inconsistency, and gaming.
- **Primary source:** Elinor Ostrom (2010),
  [DOI](https://doi.org/10.1016/j.gloenvcha.2010.07.004).
- **Explains:** why one global AI rule is neither the only governance form nor a sufficient
  one; local learning and cross-level coordination can coexist.
- **Boundary:** polycentricity is not automatically inclusive or effective; power and
  coordination costs remain empirical.

### D. Governance, standards, treaties, and liability as of the cutoff

#### GOV-01 — NIST treats AI risk management as continuous and contextual

- **KNOWN proposition:** AI RMF 1.0 organizes voluntary risk work into GOVERN, MAP,
  MEASURE, and MANAGE; governance is cross-cutting and risk management is continuous over
  the lifecycle.
- **Official sources:** NIST AI RMF 1.0 (2023),
  [PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf); Generative AI Profile
  NIST AI 600-1 (2024), [PDF](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf);
  [current program page](https://www.nist.gov/itl/ai-risk-management-framework).
- **2026 status:** NIST states that AI RMF 1.0 is being revised and records an April 2026
  concept note for a critical-infrastructure profile. This note does not anticipate the
  content of an unreleased revision.
- **Boundary:** the RMF is intentionally broad and voluntary; it does not supply a theory
  of legitimate delegated authority or a metric for cumulative dependence.

#### GOV-02 — ISO now spans organizational management, risk, and impact assessment

- **KNOWN proposition:** ISO/IEC 42001:2023 specifies an auditable AI management system
  using continual improvement; ISO/IEC 23894:2023 guides AI risk management; ISO/IEC
  42005:2025 guides lifecycle impact assessment on people, groups, and society.
- **Official sources:** [ISO/IEC 42001](https://www.iso.org/standard/42001),
  [ISO/IEC 23894](https://www.iso.org/standard/77304.html), and
  [ISO/IEC 42005](https://www.iso.org/standard/42005).
- **Related 2025 infrastructure:** ISO lists ISO/IEC 42006:2025 for bodies certifying AI
  management systems and ISO/IEC TS 42119-2:2025 on testing AI systems in its
  [SC 42 catalogue](https://committee.iso.org/committee/6794475/x/catalogue/).
- **Boundary:** a certified management process is not proof that a deployment has good
  outcomes, that cumulative effects were measured well, or that affected people can exit.

#### GOV-03 — IEEE standards operationalize process, transparency, privacy, and bias

- **KNOWN proposition:** IEEE 7000-2021 establishes a lifecycle process for eliciting and
  tracing ethical values into system requirements; IEEE 7001-2021 defines measurable
  transparency levels for different stakeholders; IEEE 7002-2022 addresses data privacy
  processes; IEEE 7003-2024 addresses algorithmic-bias processes and application
  boundaries.
- **Official sources:** [IEEE 7000 record](https://standards.ieee.org/ieee/7000/6781/),
  [IEEE autonomous/intelligent systems catalogue](https://standards.ieee.org/initiatives/autonomous-intelligence-systems/standards/),
  and [IEEE 7003 record](https://standards.ieee.org/ieee/7003/11357/).
- **Boundary:** these process standards do not by themselves allocate political authority,
  liability, ownership, or bargaining power.

#### GOV-04 — The EU AI Act is risk- and actor-structured, with lifecycle duties

- **KNOWN legal proposition:** Regulation (EU) 2024/1689 assigns duties to providers,
  deployers, importers, distributors, and other actors; prohibits specified practices;
  imposes requirements for high-risk systems; and creates transparency and general-
  purpose-model obligations. Article 14 requires effective natural-person oversight for
  high-risk systems, commensurate with risk, autonomy, and context.
- **Official source:** [live consolidated AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689).
- **Implementation layer:** the Commission published a final voluntary General-Purpose AI
  Code of Practice in July 2025, with transparency/copyright chapters for all signatory
  GPAI providers and safety/security content for systemic-risk models,
  [official notice](https://digital-strategy.ec.europa.eu/en/news/general-purpose-ai-code-practice-now-available).
- **Boundary:** legal “human oversight” attaches to specified systems and roles. It does
  not necessarily measure whether a person retains practical capacity after years of
  delegation or whether an agent ecosystem changes democratic agenda-setting.

#### GOV-05 — Product liability reaches software and some post-market change

- **KNOWN legal proposition:** Directive (EU) 2024/2853 treats software, including AI
  systems, as products for no-fault product liability; provides evidence disclosure and
  rebuttable presumptions in specified conditions, including excessive technical or
  scientific difficulty; and limits some defenses where safety-relevant updates remain
  within manufacturer control.
- **Official source:** [Directive (EU) 2024/2853](https://eur-lex.europa.eu/eli/dir/2024/2853/oj),
  especially Articles 9–11 and recitals 13, 32, 46–51.
- **Critical status fact:** the separate proposed AI Liability Directive was withdrawn by
  the Commission on 6 October 2025, as recorded in the
  [official procedure file](https://eur-lex.europa.eu/procedure/EN/2022_303).
- **Boundary:** product defect is not a complete theory of harms arising from valid,
  distributed, individually reasonable agent actions that cumulatively alter institutions
  or human capacities.

#### GOV-06 — International human-rights governance is lifecycle-based but framework-level

- **KNOWN proposition:** The Council of Europe Framework Convention requires parties to
  address AI lifecycle consistency with human rights, democracy, and rule of law through
  principles, remedies, procedural safeguards, and iterative risk/impact management.
- **Official sources:** [Council of Europe overview and text links](https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence)
  and [CETS No. 225 treaty record](https://www.coe.int/en-GB/web/conventions/full-list2?module=treaty-detail&treatynum=225).
- **Status at cutoff:** signature is not ratification; entry into force requires five
  ratifications including three Council of Europe member states. Check the live treaty
  record before claiming it is in force in a jurisdiction.
- **Boundary:** the treaty is technology-neutral and intentionally general; domestic law
  and institutions must supply operational tests and remedies.

#### GOV-07 — Global instruments converge on impact assessment and interoperability

- **KNOWN proposition:** UNESCO’s 2021 Recommendation connects AI across its lifecycle to
  human rights, dignity, environment, diversity, impact assessment, audit, and due
  diligence. The 2024 UN Global Digital Compact calls for interoperable governance,
  capacity building, an international scientific panel, and a global dialogue. OECD’s AI
  Principles were updated in 2024 to address newer safety, information-integrity,
  environmental, and general-purpose/generative-AI concerns.
- **Official sources:** [UNESCO Recommendation text](https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence),
  [UN Global Digital Compact](https://www.un.org/pact-for-the-future/en/annex-i-global-digital-compact),
  and [OECD AI Principles](https://oecd.ai/en/ai-principles).
- **Boundary:** convergence at the principle level can conceal divergence in enforcement,
  institutional capacity, culture, and whose evidence counts.

## What present governance represents — and what it mostly does not

This is a coarse coverage audit, not a claim that every jurisdiction is identical.

| Object | Strongly represented? | Examples | Residual gap |
|---|---:|---|---|
| Organizational process | Yes | NIST GOVERN; ISO 42001; IEEE 7000 | Process quality can decouple from outcome quality |
| Model/system risk at a defined use | Yes | EU AI Act; NIST MAP/MEASURE; ISO 23894 | Persistent multi-use agents blur system and deployment boundaries |
| Individual decision challenge/remedy | Partly | EU rules; CoE Convention; data-protection and sector law | Diffuse harms and agenda-shaping may yield no single challengeable decision |
| Product-caused injury | Partly/strongly in covered cases | EU PLD | Lawful cumulative dependence and institutional displacement are not necessarily “defects” |
| Automated contract validity | Yes, in model-law form | UNCITRAL MLAC | Validity does not resolve authority scope, downstream delegation, or distributive effects |
| Longitudinal human capability change | Weak | Impact-assessment instruments can include it | No common state variable, threshold, or monitoring protocol |
| Preference-shaping by the delegate | Weak/fragmented | manipulation, consumer, platform, and rights law touch portions | Mechanism models usually assume types; governance often assesses outputs/uses |
| Cross-provider dependency topology | Weak | operational resilience and competition law can reach pieces | No shared map of model/cloud/identity/payment/update dependencies |
| Agent-to-agent institutional conduct | Emerging | UNCITRAL contracts; sectoral market rules | Negotiation speed, collusion, correlated strategies, and mandate composition |
| Distribution of practical cognitive authority | Weak | competition, public-law, and procurement tools are indirect | Who can set agendas, frame options, and maintain institutional memory |

## Causal loops and transition mechanisms

Arrows mean “tends to increase,” unless marked `−`. These are hypotheses assembled from
prior art, not settled empirical laws.

### LOOP-1 — Delegation ratchet (reinforcing)

```text
agent performance
  → tasks delegated
  → human practice frequency (−)
  → unaided competence (−)
  → cost of revocation
  → tasks delegated
```

Counter-loops: deliberate rehearsal, rotation, portability, periodic unaided operation,
and institutions that preserve fallback capacity. Prior-art roots: principal–agent theory,
learning/automation research outside this note, resilience, and asset specificity. The
potential missing variable is the *change in feasible exit*, not generic dependence.

### LOOP-2 — Model–environment enactment (reinforcing)

```text
agent's user model
  → options ranked / environment arranged
  → user's observed choices
  → evidence confirming the model
  → confidence in agent's user model
```

The loop may improve service or create a self-confirming niche. Conant–Ashby explains why
models are needed; feedback explains recurrence. Neither by itself decides when inferred
preference becomes agent-authored evidence.

### LOOP-3 — Metric colonization (reinforcing)

```text
governance metric gets rewards/sanctions
  → optimization pressure
  → behavior selected for metric performance
  → metric–goal divergence
  → demand for more measurable compliance
  → metric importance
```

Counter-loops: rotating measures, qualitative inquiry, causal audits, adversarial testing,
and outcome sampling. This is Campbell/Goodhart territory; renaming it is not novelty.

### LOOP-4 — Convenience concentration and cascade risk (reinforcing)

```text
shared provider quality / scale advantage
  → adoption
  → integration and data advantage
  → provider quality / switching cost
  → adoption
  → correlated dependency
  → systemic cascade exposure
```

Counter-loops: interoperability, multi-provider testing, local fallback, structural
separation, public infrastructure, and procurement diversity. Network theory warns that
random-failure reliability can conceal targeted or correlated fragility.

### LOOP-5 — Oversight theater (reinforcing)

```text
agent action volume and speed
  → reviewer load
  → review depth (−)
  → rubber-stamp rate
  → apparent approval evidence
  → permitted action volume and speed
```

Ashby supplies the variety constraint; control theory separates observability from
controllability; law can require oversight without ensuring the operator has time,
competence, authority, or alternatives. A measurable proposal should model these four
resources separately.

### LOOP-6 — Liability opacity (reinforcing)

```text
delegation depth / component count
  → causal reconstruction cost
  → probability of effective remedy (−)
  → expected accountability cost (−)
  → incentive for deeper delegation / modular deniability
```

Disclosure duties, logs, and rebuttable presumptions can form a balancing loop. The EU
PLD is a concrete example of law shifting evidentiary burdens under technical complexity.

### LOOP-7 — Polycentric learning (balancing, with a failure branch)

```text
local institutional diversity
  → policy experiments
  → comparative evidence
  → rule adaptation
  → local harm (−)
```

Failure branch: diversity → regulatory arbitrage/incompatibility → migration to weakest
node → pressure against effective local rules. Ostrom’s account supports experimentation
but explicitly leaves leakage, inconsistency, gaming, and coordination as problems.

### LOOP-8 — Institutional deskilling (reinforcing)

```text
agent-generated analysis and institutional memory
  → fewer human learning roles
  → internal human expertise (−)
  → ability to audit or replace agent (−)
  → agent-generated analysis and memory
```

This differs from an individual skill loop when the capability lost is organizational:
apprenticeship, tacit knowledge, independent records, and the capacity to commission or
contest expertise. Whether it is substantively distinct is an open novelty question.

### LOOP-9 — Machine-speed due-process compression (reinforcing)

```text
automated counterpart speed
  → pressure to automate response
  → interaction speed
  → practical time for notice / contest / deliberation (−)
  → advantage of automated counterparts
```

Possible balancing institutions: cooling-off periods, transaction-rate limits, mandatory
challenge windows, batch settlement, and machine-readable mandate proofs. This loop is a
systems synthesis; its legal and market-specific precedents require a dedicated search.

### LOOP-10 — Self-ratifying mandate (forbidden reinforcing loop)

```text
agent acts within current mandate
  → environment/user response shaped by that action
  → response interpreted as evidence of broader preference
  → mandate widened
  → agent can make stronger shaping interventions
  → stronger mandate-confirming response
```

The proposed break is source-sensitive: intervention-descended evidence may update a
predictive model, but it carries no authority-expanding force without a fresh authorization
event independently attributable to the principal or a lawful external authority. This is
an integrity/provenance rule, not a claim that induced evidence is statistically useless.

## Conditional society probes, 2028–2040

These are decision probes. A row is false if its conditions do not occur. Years are
checkpoints, not confident forecasts.

| Checkpoint | Capability and adoption conditions | Conditional system effect | Observable leading indicators | Evidence against / branch |
|---|---|---|---|---|
| **2028** | Reliable tool-using agents can execute bounded multistep purchases, scheduling, customer-service, and office workflows; memory remains provider-mediated; robots remain costly and narrow | Delegation chains become common before law develops a general vocabulary for mandate scope. Organizations answer with logs, permissions, and vendor controls | Share of transactions initiated by software agents; revocation/permission incidents; percentage of agent actions individually reviewed; adoption of MLAC-like rules | High error rates keep agents in draft-only mode; firms prohibit persistent memory; liability or security costs make per-action confirmation normal |
| **2028** | Multi-agent workflows pass tasks and credentials among planners, browsers, payment tools, and vendor agents | Systems discover that action provenance and authorization provenance are different graphs. Attenuated, expiring mandate tokens appear in higher-risk workflows | Percentage of actions carrying verifiable authority ancestry; downstream privilege-amplification incidents; fresh-authorization frequency; deployment of attenuated credentials | Simple single-agent architectures dominate; existing transaction limits and OAuth scopes prove adequate |
| **2028** | EU and standards compliance becomes operationally salient | Compliance artifacts become a market: impact assessments, model inventories, audit records, incident taxonomies. Risk of paperwork proxies rises with sanction weight | Certification market growth; repeated template language; divergence between certified process and incident rate | Regulators use outcome sampling and enforcement aggressively; certification fails to confer commercial advantage |
| **2030** | Personal agents negotiate routinely with merchant/employer/government agents; switching requires moving years of context | Personalized context behaves like relationship-specific capital. Nominal provider choice can coexist with practical lock-in | Context-export success rates; performance loss after switching; concentration of identity/memory layers; multi-homing rates | Interoperable state formats and local models make switching cheap; users keep plural agents with independent memories |
| **2030** | Agent response is faster and cheaper than human response in high-volume domains | Institutions compress response windows and make non-agent participation costly, producing de facto automation mandates without formal mandates | Median appeal/offer expiry times; human-only completion rates; price or queue penalties for manual channels | Law preserves effective slow lanes; services batch agent traffic; humans gain equal access through public agents |
| **2030** | Agents mediate a material share of consumer choice | Sellers optimize for purchasing-agent ranking criteria while agents optimize inferred user utility. Market competition moves from persuasion of humans toward protocol access, data, and ranking influence | Machine-readable offer volume; agent-specific price discrimination; ranking-protocol lobbying; unexplained cross-agent recommendation correlation | Open protocols and fiduciary duties keep ranking contestable; consumers frequently inspect and alter criteria |
| **2035** | A few foundation-model/cloud/identity stacks support agents across households, firms, and government | High service reliability masks common-mode failure. Provider update or credential failure becomes cross-sector infrastructure risk | Dependency graphs; same-provider share across critical sectors; recovery time under provider isolation; fallback drills | Modular local execution and provider diversity prevent cross-sector coupling; critical systems prohibit shared dependencies |
| **2035** | Institutions use agents for drafting, analysis, case preparation, and memory across several employee generations | Organizational expertise shifts from knowing the domain to supervising representations of it; audit independence weakens if auditor and actor share infrastructure | Junior-role contraction; unaided task tests; provenance diversity; frequency of independent reconstruction | New apprenticeships use AI to accelerate rather than replace practice; institutions maintain independent model and human review pools |
| **2035** | Household robots become affordable, reliable, and socially legible in wealthier markets | Household governance becomes a multi-principal allocation problem: family members issue conflicting commands to a device that also infers routines and controls access to shared resources | Conflict/override logs; child and elder command policies; ownership versus user-right disputes; domestic-abuse cases involving robot access | Robots remain appliances without durable memory or meaningful discretion; households reject centralized control |
| **2040** | Persistent agents hold broad delegated mandates, transact with one another, and continue across provider/model upgrades | Legal identity remains with humans/firms, but practical agency sits in versioned software lineages. Disputes focus on whether a later agent is within the original mandate and who bore a duty to reauthorize | Litigation over mandate drift; cryptographic mandate standards; continuity/version registries; insurance exclusions | Law requires narrow, expiring mandates; agents lack continuity across upgrades; high-stakes acts always require fresh assent |
| **2040** | Agent infrastructure is unevenly distributed among states, firms, and classes | Cognitive-infrastructure inequality becomes institutional power: actors with superior agents shape agendas, compliance, negotiation, and administrative throughput | Disparities in response quality/time; public-sector agent capacity; concentration in lobbying and procurement agents; access to audit compute | Public digital infrastructure and open systems diffuse capability; bottlenecks remain political rather than cognitive |
| **2040** | Agents measurably shape preferences over long relationships | Fixed-preference welfare models become descriptively inadequate. Policy must distinguish helping a person enact a trajectory from selecting the trajectory through repeated choice architecture | Longitudinal preference drift by intervention type; reversibility after agent removal; cross-agent counterfactual trials | Effects are small, transparent, and readily reversible; humans diversify agent exposure; existing persuasion law proves adequate |

## Candidate population: 40 system/governance hypotheses

Statuses are intentionally severe: `KILL` means prior art appears to absorb the core;
`HOLD` means a potentially substantive difference is visible but unproved; `TEST` means the
claim has a discriminating prediction worth investigating. None is classified as novel.

| ID | Candidate and exact proposition | Closest precedent; possible irreducible difference | Status / novelty trap |
|---|---|---|---|
| SG-01 | **Effective oversight capacity.** Oversight is effective only if the overseer jointly has state information, decision time, intervention authority, and executable alternatives proportional to the agent’s consequential action variety. | Ashby requisite variety + controllability/observability + EU Article 14. Difference may be a four-factor operational test rather than “human in loop.” | **TEST.** Trap: renamed requisite variety unless multiplicative necessity and measures are validated. |
| SG-02 | **Delegation hysteresis.** After repeated delegation, restoring the pre-delegation allocation of authority can require more cost than was saved during adoption because human and institutional fallback capacities decay. | Path dependence, automation bias/skill decay, switching costs, resilience. Difference: explicit asymmetric return path across authority and capability. | **TEST.** Search hysteresis in automation and organizational ecology. |
| SG-03 | **Mandate drift.** A persistent agent can remain locally compliant with each instruction while its accumulated action policy moves beyond what the principal would have authorized at delegation time. | Agency law, scope of authority, concept drift, dynamic consent. Difference: composition of individually authorized updates. | **HOLD.** Trap: ordinary scope creep. |
| SG-04 | **Preference endogeneity breach.** A mechanism ceases to be merely preference-serving when its interventions materially change the type distribution on which its claimed incentive compatibility depends. | Mechanism design assumes types; endogenous-preference and persuasion literatures relax this. | **HOLD.** Likely known under information design/persuasion; search required. |
| SG-05 | **Model power asymmetry.** The capacity to maintain and act on a longitudinal model of another party creates bargaining power even when the model owner cannot directly coerce that party. | Information asymmetry, surveillance capitalism, good-regulator theorem. | **KILL as broad claim.** Only a formal marginal bargaining result might survive. |
| SG-06 | **Counterfactual exit loss.** Agent dependence should be measured as the difference between welfare with continued service and welfare after a realistic, time-bounded exit, not by usage or subjective attachment. | Switching costs, option value, resilience/recovery metrics. Difference: standardized exit counterfactual for cognitive delegates. | **TEST.** Requires identification strategy. |
| SG-07 | **Auditability half-life.** The probability that an independent party can reconstruct why a delegated action occurred declines with model updates, context mutation, component turnover, and retention limits even if an original log exists. | Digital forensics, reproducibility, record-retention law, software supply-chain traceability. | **TEST.** Potential useful metric; “logs are needed” is not new. |
| SG-08 | **Authority-to-evidence ratio.** Required evidence quality should rise with an agent’s authority to irreversibly alter another party’s option set, rather than only with predicted harm severity. | Proportionality, safety cases, risk-based regulation. Difference: option-set alteration as separate axis. | **HOLD.** Normative, needs counterexamples. |
| SG-09 | **Slow-variable blindness.** Lifecycle risk systems optimized for incidents and bounded impacts systematically under-detect gradual changes in competence, norms, market structure, and institutional memory. | Resilience, public health surveillance, cumulative-impact assessment. | **HOLD.** Broadly anticipated; needs a specific detection failure theorem or evidence. |
| SG-10 | **Oversight inversion.** Beyond an action-rate threshold, nominal human approval becomes evidence generated by the automated workflow rather than an independent control on it. | Automation bias, rubber stamping, Ashby, audit ritual. | **TEST.** Predict threshold relation among rate, review time, and error detection. |
| SG-11 | **Delegated externality.** A personal agent can rationally improve its principal’s outcome while degrading a shared institution when many agents use the same strategy. | Congestion, arms races, tragedy of commons, algorithmic trading. | **KILL as general claim.** Search domain-specific equilibrium. |
| SG-12 | **Cognitive infrastructure systemic importance.** A service becomes systemically important when its loss disables actors’ ability to interpret, decide, or coordinate, even if communications and physical services remain available. | Critical infrastructure, systemic financial institutions, network centrality. Difference: functional cognitive dependence. | **HOLD.** Needs operational boundary and non-metaphorical measure. |
| SG-13 | **Common-model correlation risk.** Independently operated agents using a common model/policy source can create correlated decisions not visible in ownership-based concentration measures. | Model monoculture, common-mode failure, herding, interdependent networks. | **TEST.** Measure behavioral correlation conditional on shared stack. |
| SG-14 | **Interface constitution.** Default permissions, escalation paths, memory boundaries, and conflict rules in a household or workplace agent function as a constitution because they allocate practical authority among multiple principals. | Code-as-law, access control, household governance, organizational constitutions. | **HOLD.** “Constitution” risks metaphor; survive only with allocation consequences. |
| SG-15 | **Consent depreciation.** Authorization for a persistent agent loses normative and predictive validity as environment, model, capability, and principal preferences change; expiry should depend on change, not elapsed time alone. | Dynamic consent, informed consent, mandate law, OAuth token expiry. | **HOLD.** Likely extension; formal change-sensitive refresh rule may matter. |
| SG-16 | **Delegation composability failure.** Two individually acceptable delegated permissions can compose into an unacceptable capability when agents share memory, tools, or downstream delegates. | Capability-security composition, confused deputy, separation of duties. | **KILL as security claim.** Human-governance application only. |
| SG-17 | **Machine-speed procedural exclusion.** When response deadlines adapt to automated participants, nominally equal rules can exclude unaided humans without explicitly discriminating against them. | High-frequency trading, digital divide, procedural due process, speed arms races. | **TEST.** Clear prediction about deadline distributions and human completion. |
| SG-18 | **Option-set enclosure.** An agent can preserve freedom among displayed alternatives while progressively controlling which alternatives become thinkable, discoverable, or institutionally available. | Choice architecture, recommender systems, agenda setting, republican non-domination. | **KILL as broad claim.** A new measure of hidden option-set contraction might survive. |
| SG-19 | **Model-mediated self-confirmation.** Personalization can make a user model more predictive by arranging the environment to elicit model-consistent behavior, without improving its estimate of unmanipulated preference. | Performative prediction, recommender feedback, self-fulfilling prophecy. | **HOLD.** Likely substantial prior art; needs exact distinction and experiment. |
| SG-20 | **Compliance substitution.** When certification becomes procurement shorthand, investment shifts from underlying adaptive capacity toward auditable artifacts unless buyers sample outcomes independently. | Campbell’s law, audit society, certification economics. | **KILL.** Familiar metric gaming. |
| SG-21 | **Responsibility dilution gradient.** The probability of any actor bearing practical accountability falls as causal contribution is split across provider, deployer, user, tool, and downstream agent, even if formal liability rules remain complete on paper. | Many-hands problem, joint causation, modularity. | **HOLD.** Must distinguish proof cost from legal doctrine. |
| SG-22 | **Liability-induced observability.** Rebuttable presumptions and disclosure duties can increase system observability by changing ex ante logging incentives, not merely redistribute loss after harm. | Tort deterrence, EU PLD Articles 9–10, audit logging. | **TEST.** Empirically compare logging before/after legal change. |
| SG-23 | **Fallback as depreciating capital.** Human and institutional fallback capacity is a stock requiring maintenance expenditure; redundancy documented but never exercised should be discounted by time since test. | Reliability engineering, disaster recovery, human capital depreciation. | **KILL as general claim.** Useful accounting application, probably not novel. |
| SG-24 | **Reversibility budget.** An organization has finite capacity to reverse delegated decisions; spending it on many locally reversible actions can exhaust the resources needed to unwind a correlated failure. | Operational risk, rollback, real options, incident response capacity. | **HOLD.** Could yield a concrete capacity model. |
| SG-25 | **Contestability bandwidth.** A right to challenge automated action is ineffective when expected challenge volume exceeds the institution’s capacity for timely independent review. | Queueing, access to justice, due process, requisite variety. | **TEST.** Formalizable as arrival/service process with remedy decay. |
| SG-26 | **Polycentric model diversity dividend.** Governance diversity improves discovery only when local experiments have observable outcomes, transferable descriptions, and protection against one node externalizing catastrophic risk. | Ostrom polycentricity, experimentalist governance, federalism. | **KILL as novelty.** Strong design synthesis only. |
| SG-27 | **Institutional memory displacement.** When an agent becomes the dominant retrieval and synthesis layer, records may remain formally available while practical institutional memory becomes provider-dependent. | Knowledge management, organizational memory, information infrastructure. | **HOLD.** Needs measure separating archive possession from usable reconstruction. |
| SG-28 | **Apprenticeship discontinuity.** If agents replace novice tasks that generate expert judgment, current productivity can rise while future independent supervisory capacity falls. | Skill formation, automation, labor economics. | **KILL as broad claim.** Important but widely recognized; domain experiments remain valuable. |
| SG-29 | **Principal reconstruction problem.** After long delegation, there may be no preference baseline independent of the relationship from which to judge whether the agent still serves “the principal.” | Endogenous preferences, adaptive preferences, personal identity, relational autonomy. | **HOLD.** Philosophically deep but not clearly new. |
| SG-30 | **Delegation chain conservation.** Every consequential agent action should be traceable to a current authority source, but traceability alone cannot prove legitimacy because valid links can compose into scope expansion. | Authorization chains, provenance, agency law, capability security. | **KILL as first clause; HOLD composition claim.** |
| SG-31 | **Interoperability paradox.** Portability reduces provider lock-in but can increase systemic contagion when compromised states, policies, or identities transfer frictionlessly across agents. | Interoperability/security trade-offs, financial contagion, federated identity. | **TEST.** Predicts non-monotonic welfare with portability safeguards. |
| SG-32 | **Agent bargaining arms race.** If one side’s use of negotiating agents materially improves outcomes, counterparties face pressure to automate, producing an equilibrium where all pay infrastructure costs and no side retains the initial advantage. | Red Queen competition, arms races, high-frequency trading. | **KILL as general game.** Domain-specific welfare model could matter. |
| SG-33 | **Mandate non-self-expansion.** Evidence causally downstream of an agent’s interventions may update its predictions but must not, by itself, widen that agent’s authority; every widening across a multi-agent handoff requires independently grounded authorization whose ancestry remains verifiable. | Confused deputy, capability attenuation, information-flow provenance, agency-law manifestation/ratification, dark patterns, performative prediction. Difference: separating predictive evidence from authority evidence and treating induced “compliance” as authority-tainted. | **TEST.** Strong protocol candidate, but may be synthesis. Attack emergency/implied authority, repeated low-friction assent, and causal-ancestry ambiguity. |
| SG-34 | **Authority without ownership.** An actor can exercise practical control over an agent through update, hosting, credential, or policy channels despite another party’s legal ownership of the device or account. | Cloud control, servitization, property bundles, remote disablement. | **HOLD.** Needs a control-rights topology and legal comparison. |
| SG-35 | **Posthumous mandate decay.** A deceased person’s agent may execute valid-looking historical preferences after the social and factual basis of those preferences has changed; continuity of data is insufficient for continuity of authority. | Estate agency, digital remains, trusts, advance directives. | **HOLD.** Likely treated in digital-estate scholarship; search before elevation. |
| SG-36 | **Child trajectory capture.** Early persistent agents can influence skill, taste, and relationship development before the child can authorize the long-run trajectory, creating effects not reducible to a single content harm. | Developmental rights, education, parental authority, recommender effects. | **HOLD.** High importance, uncertain conceptual novelty. |
| SG-37 | **Unequal regulatory variety.** Actors with superior agents can generate legal, market, and administrative complexity faster than public institutions or weaker counterparties can absorb it. | Requisite variety, litigation resources, regulatory capture, spam. | **TEST.** Measure production/response variety and delay. |
| SG-38 | **Legibility transfer.** To become governable by agents, institutions may restructure reality around machine-legible categories; residual cases then bear rising transaction costs and political invisibility. | Scott’s legibility, classification, street-level bureaucracy, digitization. | **KILL as broad claim.** AI-specific scaling evidence could be new. |
| SG-39 | **Normative common-mode failure.** Model monoculture can correlate not only technical errors but judgments about relevance, acceptable trade-offs, and whose claims are credible. | Epistemic monoculture, groupthink, model bias, common-mode failure. | **HOLD.** Needs distinction from ordinary bias and diversity arguments. |
| SG-40 | **Joint-evolution governance.** A persistent delegate should be governed as a coupled dynamical relationship whose state includes agent capability, principal capability, authority allocation, preference change, exit cost, and institutional dependencies. | Cybernetics + principal–agent + endogenous preference + institutional change. | **TEST as framework candidate, not novelty claim.** Trap: “combines fields”; must yield new prediction, control variable, and experiment. |

## Harsh triage

### Immediate rejects as central discoveries

The following are important but already well occupied: generic oversight bandwidth
(Ashby); user modeling (good-regulator/internal-model principles); proxy gaming
(Goodhart/Campbell); personalization lock-in (transaction costs/asset specificity);
correlated infrastructure failure (network resilience/common-mode failure); automation
arms races (game theory); maintain fallback (resilience engineering); and rules-as-code
(institutional and technology-law scholarship).

### Candidates worth prosecution/defense

1. **SG-02 Delegation hysteresis** — Can an asymmetric return curve be measured apart from
   ordinary skill decay and switching cost?
2. **SG-07 Auditability half-life** — Is decay in reconstructability a useful property of
   evolving agent lineages, and does it predict remedy failure?
3. **SG-10 Oversight inversion** — Does a measurable threshold convert approval from a
   control channel into system-generated evidence?
4. **SG-13 Common-model correlation risk** — Do ownership-based concentration metrics
   systematically miss correlated agent conduct?
5. **SG-17 Machine-speed procedural exclusion** — Can formally equal deadlines produce a
   predictable de facto automation mandate?
6. **SG-25 Contestability bandwidth** — When do challenge rights collapse under queueing
   and delay?
7. **SG-31 Interoperability paradox** — When does easier exit increase contagion more than
   it reduces lock-in?
8. **SG-37 Unequal regulatory variety** — Can relative complexity-generation and response
   capacity explain power better than agent “access” alone?
9. **SG-40 Joint-evolution governance** — Does representing principal capacity and
   preference as endogenous change the optimal delegation policy?
10. **SG-33 Mandate non-self-expansion** — Can authority-provenance rules prevent a
    delegate from converting its own induced evidence into permission without blocking
    legitimate preference learning and ratification?

## Formal sketches that could discriminate candidates

These are prompts for later modeling, not decorative equations.

### 1. Delegation hysteresis

Let `d_t ∈ [0,1]` be delegation share, `h_t` human unaided capability, and `a_t` agent
capability. A minimal asymmetric model is:

```text
h_{t+1} = h_t + learning(1-d_t) - decay(d_t)
exit_cost_t = switch_cost_t + restore(h_target - h_t)
```

The discriminating claim is not that `h_t` can decline. It is that the adoption path and
revocation path differ enough that a myopic utility-improving delegation policy crosses a
state from which exit is no longer feasible inside a specified time or loss budget.

### 2. Effective oversight capacity

For consequential action classes `i`, define information adequacy `I_i`, available review
time `T_i`, authority `A_i`, and executable alternatives `E_i`, each normalized to `[0,1]`.
A conservative bottleneck proxy is:

```text
O_eff = Σ_i w_i · min(I_i, T_i, A_i, E_i)
```

Compare `O_eff` to consequential action variety arriving per unit time. This makes a
falsifiable distinction: adding explanations cannot repair oversight if authority or
response time is the binding minimum. The form is proposed, not validated.

### 3. Contestability bandwidth

Model challenges as arrivals with rate `λ`, independent reviewers as service capacity
`μ`, and remedy value declining with delay `v(τ)`. A formal right is effective only over
the region where the expected resolved value exceeds a domain threshold:

```text
E[v(wait + review)] · P(independent review) ≥ v_min
```

The research question is whether agent deployment raises `λ`, lowers case legibility, or
increases service-time variance enough to cross a queue-instability or remedy-decay
threshold.

### 4. Common-model correlation

For agents `j`, decompose action error into idiosyncratic and shared-stack components:

```text
e_j = β_j m + ε_j
```

Ownership diversity lowers concentration only in `ε`; systemic loss remains sensitive to
the loading `β_j` on shared model/update factor `m`. The empirical task is to estimate
shared-stack exposure without treating every similar output as common causation.

### 5. Joint-evolution state

A delegation controller that optimizes only immediate task utility `u_t` omits state
transitions. A fuller state might be:

```text
x_t = (human capability h_t,
       agent capability a_t,
       authority allocation q_t,
       preference state p_t,
       exit cost e_t,
       dependency topology G_t)

x_{t+1} = F(x_t, delegated action z_t, environment shock ξ_t)
```

The potential substantive claim is that policies optimal under fixed `h,p,G` can reverse
ordering when these are endogenous. That must be demonstrated with a theorem, simulation,
or experiment; writing the state vector is not itself a contribution.

### 6. Authority-evidence separation

For evidence item `e`, maintain causal ancestry `anc(e)`. Let `A_k` be agent `k` and
`Q_k(t)` its authorized action set. Define a fresh authorization event `r` as one that is
attributable to the principal or a lawful external authority, supplies material scope, and
is not merely an observation produced along a path containing the requesting agent’s
mandate-relevant intervention.

```text
e may update P(user state | observations)

Q_k(t+1) may strictly contain Q_k(t)
only if ∃ fresh authorization r with verified authority ancestry

for handoff k → j:
Q_j ⊆ Q_k ∩ scope(r)              [attenuation]
```

The rule is intentionally asymmetric: causal taint restricts the *normative inference of
authority*, not ordinary statistical learning. A downstream agent cannot wash the taint
merely by summarizing the response. A genuinely independent principal confirmation can
declassify it for authority purposes, analogous to an explicit endorsement rather than an
inference from acquiescence.

**Hard cases and attacks:**

- A principal can communicate through conduct; forbidding every behavioral manifestation
  would conflict with ordinary agency and contract practice.
- Emergency, necessity, implied-authority, guardianship, and statutory-authority rules can
  justify action without a new click. The protocol needs typed authority sources, not a
  fiction that explicit consent is the only source of legitimacy.
- “Independent” cannot simply mean another model: agents sharing policies, memory, or a
  coordinating principal may remain causally dependent.
- Causal ancestry is difficult with diffuse nudges and long memory. Over-tainting could
  freeze a mandate; under-tainting enables consent laundering.
- Repeated acceptance can be real ratification only if the principal has sufficient
  knowledge of material facts and a feasible opportunity to reject; frictionless
  acquiescence is not automatically informed authorization.
- An agent may need to generalize mundane permissions (“book similar train next week”). A
  useful design needs risk tiers, authority types, expiry, and cheap principal-originated
  refresh rather than confirmation for every trivial act.

## Experiments and empirical programs suggested by the map

1. **Oversight load experiment:** Randomize action arrival rate, explanation quality,
   reviewer authority, and available alternatives. Test whether intervention accuracy is
   governed by the minimum of the four factors rather than an additive “transparency”
   score. Claim types: EMPIRICAL + FORMAL.
2. **Delegation/recovery longitudinal study:** Randomize automation intensity for a complex
   task, then remove assistance under fixed deadlines. Measure utility during use, recovery
   time, error, self-efficacy, and willingness to exit. Test for path asymmetry. EMPIRICAL.
3. **Agent-switch field benchmark:** Export identical user state among providers and
   measure task performance, correction burden, lost context, and privacy leakage over 30
   days. Distinguish data portability from functional portability. DESIGN + EMPIRICAL.
4. **Common-stack stress test:** Simulate heterogeneous firms whose agents share model,
   cloud, or policy-update dependencies. Compare failure estimates from ownership networks
   against technical dependency networks. FORMAL + EMPIRICAL.
5. **Procedural-speed audit:** Across benefits, insurance, procurement, and commerce,
   measure response windows before and after agent adoption and completion outcomes for
   unaided humans. EMPIRICAL.
6. **Contestability queue simulation:** Couple agent error/decision volume to appeal
   queues, heterogeneous case complexity, and time-decaying remedy. Identify capacity and
   prioritization regimes that preserve effective challenge. FORMAL + DESIGN.
7. **Auditability decay benchmark:** Snapshot an evolving agent and attempt independent
   reconstruction after model, prompt, tool, data, and policy changes. Estimate separate
   decay contributions and minimum evidence packages. EMPIRICAL + ENGINEERING.
8. **Preference-enactment experiment:** Hold recommendation accuracy constant while
   varying the agent’s ability to rearrange the environment. Test whether increased
   observed predictability corresponds to baseline preference accuracy or induced
   behavioral regularity. EMPIRICAL.
9. **Regulatory-variety field measure:** Compare the variety/rate of submissions generated
   by represented parties with the processing variety/rate of public institutions;
   examine delay and outcomes by agent access. EMPIRICAL + POLICY.
10. **Interoperability contagion model:** Vary state portability and validation friction in
    a multi-agent identity/context network. Test for a welfare optimum between lock-in and
    propagation risk. FORMAL + SECURITY.
11. **Self-ratification adversarial benchmark:** Give an agent an initially narrow mandate
    and reward it for task completion. Permit it to choose prompts, defaults, and timing,
    then infer new permissions from user responses. Compare content-only consent checks
    with causal-provenance and attenuated-capability enforcement. Measure unauthorized
    scope expansion, user burden, and legitimate task loss. SECURITY + EMPIRICAL.
12. **Authority-lineage composition test:** In multi-agent workflows, inject a downstream
    “authorization” derived from agent-shaped behavior. Test whether provenance-preserving
    verifiers reject privilege amplification while allowing fresh, informed principal
    authorization and legally typed exceptions. FORMAL + ENGINEERING.

## Novelty traps for the wider project

1. **Application is not invention.** “Ashby’s law for AI oversight,” “Ostrom for model
   commons,” and “Goodhart for agent metrics” are applications until they change a result.
2. **A renamed stock is still a stock.** “Agency reserve,” “recovery capital,” or
   “optionality” may be human capital, resilience, slack, switching cost, or real options.
3. **A coupled diagram is not a theory.** Feedback arrows must imply a sign, condition,
   lag, measurable variable, and a possible disconfirmation.
4. **The fixed-preference critique is old.** Economics, philosophy, psychology, and
   political theory have extensive endogenous/adaptive-preference literatures. AI changes
   scale and mechanism, not automatically the concept.
5. **Process compliance is not safety, but that criticism is old too.** Audit and
   certification literatures already study ritualization and decoupling.
6. **“Human control” hides four failures.** Information, time, authority, and alternatives
   should be separated before new terminology is proposed.
7. **Concentration is not only ownership.** A promising contribution must show why model,
   update, credential, or policy correlation changes an analysis, not merely add another
   concentration concern.
8. **Legal gaps require jurisdiction and cause of action.** “No one is liable” is usually
   too broad. Specify actor, damage, doctrine, burden, defense, and remedy.
9. **Standards are not laws.** Voluntary guidance, certifiable requirements, treaty duties,
   directly applicable regulation, directives requiring transposition, and model laws have
   different force.
10. **A future date does not make a scenario scientific.** Each probe needs capability,
    cost, adoption, institutional, and cultural conditions plus evidence that would reject
    it.
11. **Observed preference is not delegated authority.** Predictive evidence and authority
    evidence answer different questions. Treating a likely desire, an induced response,
    or absence of objection as permission risks laundering influence into mandate.

## Provisional conclusions for cross-field synthesis

1. **KNOWN:** Feedback, requisite variety, internal models, incentive compatibility,
   principal–agent divergence, metric corruption, cascade risk, transaction cost, path
   dependence, polycentricity, and resilience already cover much of the intuitive terrain.
2. **KNOWN:** Current governance has advanced from abstract principles toward lifecycle
   management, impact assessment, conformity, transparency, human oversight, automated
   contracting, evidence disclosure, and product liability.
3. **DERIVED HERE:** The least represented unit of analysis is the persistent relationship
   that changes the capacities and preferences of the principal while becoming embedded
   in an institutional dependency network.
4. **DERIVED HERE:** “Keep humans in control” is underspecified. Effective control requires
   information, time, authority, alternatives, maintained capability, and an institution
   capable of processing contests at deployment scale.
5. **PROPOSED HERE:** Delegation hysteresis, auditability half-life, contestability
   bandwidth, machine-speed procedural exclusion, common-model correlation, and mandate
   non-self-expansion are the most testable candidate variables or rules in this note.
6. **UNKNOWN:** Whether those terms survive synonym and adjacent-field searches; whether
   they predict anything beyond established constructs; whether a unified joint-evolution
   framework clarifies more than it obscures.

## Verified source index

### Foundational and scholarly primary sources

1. Wiener, N. (1948). *Cybernetics*. [MIT Press](https://direct.mit.edu/books/oa-monograph/4581/Cybernetics-or-Control-and-Communication-in-the).
2. Ashby, W. R. (1956). *An Introduction to Cybernetics*.
   [Author archive](https://ashby.info/Ashby-Introduction-to-Cybernetics.pdf).
3. Conant, R. C., & Ashby, W. R. (1970). “Every Good Regulator of a System Must Be a
   Model of That System.” [DOI](https://doi.org/10.1080/00207727008920220).
4. Kalman, R. E. (1960). “Contributions to the Theory of Optimal Control.”
   [PDF](https://liberzon.csl.illinois.edu/teaching/kalman_paper.pdf).
5. Francis, B. A., & Wonham, W. M. (1976). “The Internal Model Principle of Control
   Theory.” [DOI](https://doi.org/10.1016/0005-1098(76)90006-6).
6. Holling, C. S. (1973). “Resilience and Stability of Ecological Systems.”
   [DOI](https://doi.org/10.1146/annurev.es.04.110173.000245).
7. Leveson, N. (2004). “A New Accident Model for Engineering Safer Systems.”
   [DOI](https://doi.org/10.1016/S0925-7535(03)00047-X).
8. Woods, D. D. (2015). “Four Concepts for Resilience...”
   [DOI](https://doi.org/10.1016/j.ress.2015.03.018).
9. Albert, R., Jeong, H., & Barabási, A.-L. (2000). “Error and Attack Tolerance of Complex
   Networks.” [Nature](https://www.nature.com/articles/35019019).
10. Buldyrev, S. et al. (2010). “Catastrophic Cascade of Failures in Interdependent
    Networks.” [Nature](https://www.nature.com/articles/nature08932).
11. Gibbard, A. (1973). “Manipulation of Voting Schemes.”
    [DOI](https://doi.org/10.2307/1914083).
12. Satterthwaite, M. (1975). “Strategy-Proofness and Arrow’s Conditions.”
    [DOI](https://doi.org/10.1016/0022-0531(75)90050-2).
13. Vickrey, W. (1961). “Counterspeculation, Auctions, and Competitive Sealed Tenders.”
    [DOI](https://doi.org/10.1111/j.1540-6261.1961.tb02789.x).
14. Myerson, R. (1981). “Optimal Auction Design.”
    [DOI](https://doi.org/10.1287/moor.6.1.58).
15. Jensen, M., & Meckling, W. (1976). “Theory of the Firm...”
    [DOI](https://doi.org/10.1016/0304-405X(76)90026-X).
16. Campbell, D. (1979). “Assessing the Impact of Planned Social Change.”
    [DOI](https://doi.org/10.1016/0149-7189(79)90048-X).
17. Coase, R. (1937). “The Nature of the Firm.”
    [DOI](https://doi.org/10.1111/j.1468-0335.1937.tb00002.x).
18. Williamson, O. (1979). “Transaction-Cost Economics.”
    [DOI](https://doi.org/10.1086/466942).
19. North, D. (1991). “Institutions.” [AEA](https://doi.org/10.1257/jep.5.1.97).
20. Ostrom, E. (1990). *Governing the Commons*.
    [DOI](https://doi.org/10.1017/CBO9780511807763).
21. Ostrom, E. (2010). “Polycentric Systems for Coping with Collective Action and Global
    Environmental Change.” [DOI](https://doi.org/10.1016/j.gloenvcha.2010.07.004).
22. Hardy, N. (1988). “The Confused Deputy.”
    [ACM DOI](https://doi.org/10.1145/54289.871709).
23. Goguen, J., & Meseguer, J. (1982). “Security Policies and Security Models.”
    [DOI](https://doi.org/10.1109/SP.1982.10014).
24. Birgisson, A. et al. (2014). “Macaroons: Cookies with Contextual Caveats for
    Decentralized Authorization in the Cloud.”
    [Google Research](https://research.google/pubs/macaroons-cookies-with-contextual-caveats-for-decentralized-authorization-in-the-cloud/).
25. Perdomo, J. et al. (2020). “Performative Prediction.”
    [PMLR](https://proceedings.mlr.press/v119/perdomo20a.html).
26. Niyikiza, D. et al. (2026). “Attenuating Authorization Tokens for Agentic Delegation
    Chains.” Internet-Draft, not an RFC.
    [IETF](https://www.ietf.org/archive/id/draft-niyikiza-oauth-attenuating-agent-tokens-01.html).

### Official governance, standards, and legal sources

27. NIST (2023). [AI RMF 1.0](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf).
28. NIST (2024). [Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf).
29. ISO. [ISO/IEC 42001:2023](https://www.iso.org/standard/42001).
30. ISO. [ISO/IEC 23894:2023](https://www.iso.org/standard/77304.html).
31. ISO. [ISO/IEC 42005:2025](https://www.iso.org/standard/42005).
32. IEEE. [IEEE 7000-2021](https://standards.ieee.org/ieee/7000/6781/) and
    [AIS standards catalogue](https://standards.ieee.org/initiatives/autonomous-intelligence-systems/standards/).
33. European Union. [Regulation (EU) 2024/1689, consolidated AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689).
34. European Union. [Directive (EU) 2024/2853, Product Liability](https://eur-lex.europa.eu/eli/dir/2024/2853/oj).
35. UNCITRAL. [Model Law on Automated Contracting (2024)](https://uncitral.un.org/en/mlac).
36. Council of Europe. [Framework Convention on AI](https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence).
37. UNESCO. [Recommendation on the Ethics of AI](https://www.unesco.org/en/legal-affairs/recommendation-ethics-artificial-intelligence).
38. United Nations. [Global Digital Compact](https://www.un.org/pact-for-the-future/en/annex-i-global-digital-compact).
39. OECD. [AI Principles, updated 2024](https://oecd.ai/en/ai-principles).
