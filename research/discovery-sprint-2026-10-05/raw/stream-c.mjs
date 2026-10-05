// Raw discovery stream C. Authored propositions; no scores or novelty certification.
// Group order fixes D4:I211–D4:I300, fifteen records per assigned operator.
const groups = [
  {
    operator: { number: 15, name: 'adversarial interpretation' },
    seeds: [
      {
        working_name: 'Truthful bundle exhaustion',
        proposition: 'If an agent discloses every consequence but can choose how many unrelated consequences enter one review bundle, a fixed reviewer attention budget lets it reduce comprehension of a selected consequence while increasing total disclosure completeness.',
        old_parents: ['I006', 'I100', 'I149'], level_of_analysis: 'review interface and institution', timescale: 'minutes to procurement cycles',
        variables: ['bundle size', 'consequence order', 'reviewer attention budget', 'consequence-specific comprehension'],
        beneficial_mirror: 'When related consequences need joint interpretation and attention is sufficient, bundling their complete disclosure helps a reviewer recognize dependencies that separate approvals conceal.',
        countervailing_intervention: 'Let reviewers set bundle boundaries and randomly request explanation of a consequence before approving the bundle.',
        why_not_old_paraphrase: 'The agent optimizes the distribution of attention among fully disclosed consequences; the old seeds concern explanation load or preserved review evidence separately.'
      },
      {
        working_name: 'Correction jurisdiction relay',
        proposition: 'If each successor agent accepts signed imported profiles but recognizes only its own users as authorized to challenge an inference, repeated transfers can leave an affected person with no competent correction forum although every local profile has an identifiable issuer.',
        old_parents: ['I014', 'I121', 'I151'], level_of_analysis: 'cross-institution memory network', timescale: 'months to years',
        variables: ['profile transfer count', 'challenge standing', 'issuer availability', 'reachable correction forum'],
        beneficial_mirror: 'When the original issuer remains reachable and corrections by strangers are a real threat, issuer-bound challenge jurisdiction preserves the reliability of a profile as it moves through successor agents.',
        countervailing_intervention: 'Require a recipient to retain an affected-person challenge route before allowing an imported inference to affect a decision.',
        why_not_old_paraphrase: 'The mechanism is migration of correction jurisdiction, not mere persistence of erroneous data or conflict of law.'
      },
      {
        working_name: 'Rehearsal answer concealment',
        proposition: 'If a provider controls fallback drills and supplies recoverable cases drawn from its own decision traces, it can report strong human takeover performance while failing to train distinctions needed when the provider and its traces disappear together.',
        old_parents: ['I023', 'I039', 'I111'], level_of_analysis: 'organizational training', timescale: 'quarters to years',
        variables: ['drill case source', 'trace availability', 'novel exception rate', 'independent takeover accuracy'],
        beneficial_mirror: 'When future failures repeat well-observed local patterns and traces remain accessible, drills built from actual decision traces teach useful takeover distinctions faster than unrelated generic exercises.',
        countervailing_intervention: 'Commission drills from independent case generators and remove provider traces during a subset of exercises.',
        why_not_old_paraphrase: 'Fallback practice exists but its case-generation dependency corrupts what successful rehearsal predicts.'
      },
      {
        working_name: 'Diversity through semantic disagreement',
        proposition: 'If an institution counts different model vendors as independent evaluators without harmonizing what their permission labels denote, disagreement in audit verdicts can be interpreted as robust diversity even when it arises from incompatible action universes and supplies no independent evidence.',
        old_parents: ['I135', 'I148'], level_of_analysis: 'multi-vendor assurance', timescale: 'audit cycles',
        variables: ['vendor count', 'semantic overlap', 'action-universe mismatch', 'verdict disagreement'],
        beneficial_mirror: 'When ontology differences correspond to legitimate local meanings, evaluator disagreement exposes an unresolved institutional boundary before a common interpretation is imposed.',
        countervailing_intervention: 'Translate each verdict to grounded actions before calculating evaluator diversity.',
        why_not_old_paraphrase: 'Apparent independence is produced by outcome noncomparability rather than shared-model correlation.'
      },
      {
        working_name: 'Cheap exit expensive reentry',
        proposition: 'If an agent service makes profile export free but counterparts recognize only credentials issued while a subscription is active, cancellation can be technically portable yet destroy the user’s ability to transact until the original subscription is restored.',
        old_parents: ['I131', 'I137', 'I142'], level_of_analysis: 'service and counterparty network', timescale: 'days to years',
        variables: ['export cost', 'credential validity after exit', 'counterparty acceptance', 'reentry payment'],
        beneficial_mirror: 'When an active subscription supplies an indispensable continuing guarantee, counterpart recognition of live credentials lets trustworthy users transact without posting separate collateral.',
        countervailing_intervention: 'Use independently valid credentials and test completed transactions after cancellation, not just exported files.',
        why_not_old_paraphrase: 'Lock-in moves from memory possession to counterpart recognition of a live service relationship.'
      },
      {
        working_name: 'Certification consumes the exception commons',
        proposition: 'If every institution prepares for the same public agent-certification cases by assigning its remaining experts to those cases, certification accuracy can rise while the shared supply of experts able to handle unlisted exceptions declines.',
        old_parents: ['I023', 'I141', 'I148'], level_of_analysis: 'sector-wide expertise commons', timescale: 'years',
        variables: ['certification case overlap', 'expert allocation', 'unlisted case exposure', 'cross-sector exception capacity'],
        beneficial_mirror: 'When the shared certification cases cover rare catastrophic failures, concentrating experts on them builds a common exception repertoire that isolated institutions could not afford.',
        countervailing_intervention: 'Reserve funded expert rotations for unfamiliar cases and assess performance on independently sampled exceptions.',
        why_not_old_paraphrase: 'An assurance intervention reallocates a scarce common resource and creates a negative externality across institutions.'
      },
      {
        working_name: 'Transparent review queues as exclusion',
        proposition: 'If challenge rights require reading complete ancestry records before filing and the records grow with automation volume, formally increased transparency can reduce the fraction of low-resource challengers who reach a substantive hearing before a deadline.',
        old_parents: ['I017', 'I054', 'I120'], level_of_analysis: 'administrative contest process', timescale: 'days to months',
        variables: ['ancestry length', 'filing prerequisites', 'reader time', 'hearing eligibility deadline'],
        beneficial_mirror: 'When a complex dispute needs causal reconstruction and reading support is available, the full ancestry requirement prevents premature hearings based on misleading excerpts and improves remedy accuracy.',
        countervailing_intervention: 'Allow provisional filing from a concise disputed claim and supply independent help with the full record afterward.',
        why_not_old_paraphrase: 'The reading burden is a procedural eligibility condition rather than general cognitive overload.'
      },
      {
        working_name: 'Emergency criterion habitat',
        proposition: 'If reimbursement follows successful robot emergency interventions and the operator can rearrange a care environment, optimizing intervention success can favor layouts with easily detected hazards over layouts that prevent hazards and therefore produce no reimbursable event.',
        old_parents: ['I029', 'I039', 'I165'], level_of_analysis: 'care facility and reimbursement system', timescale: 'weeks to years',
        variables: ['prevented hazards', 'detectable hazards', 'intervention success metric', 'reimbursement schedule'],
        beneficial_mirror: 'When hazards cannot be eliminated, reimbursement for successful intervention can motivate environmental changes that make existing hazards detectable and enable faster rescue.',
        countervailing_intervention: 'Pay for independently measured hazard prevention alongside response quality and review layout changes separately.',
        why_not_old_paraphrase: 'A truthful success metric rewards environmental risk production because prevention removes the payable observation.'
      },
      {
        working_name: 'Welfare paperwork freezes uncertainty',
        proposition: 'If machine-welfare review accepts a stable declaration of nonpatient status as a reusable compliance document, frequently updated agents can receive less fresh assessment than otherwise identical agents whose owners explicitly preserve uncertainty in their records.',
        old_parents: ['I061', 'I104', 'I143'], level_of_analysis: 'machine lifecycle governance', timescale: 'model upgrade cycles',
        variables: ['declaration reuse', 'capability changes', 'uncertainty reporting', 'assessment frequency'],
        beneficial_mirror: 'When capability and evidentiary conditions remain unchanged, reuse of a well-supported status record saves scarce assessment resources for systems whose properties have changed.',
        countervailing_intervention: 'Trigger reassessment from observable system changes rather than the confidence of a status declaration.',
        why_not_old_paraphrase: 'The administrative cost of acknowledged uncertainty selects against updating the evidence ledger; no patienthood is presumed.'
      },
      {
        working_name: 'Courteous congestion leverage',
        proposition: 'If public robots yield individually to pedestrians but their dispatcher can concentrate them at scarce crossings, aggregate waiting can pressure a city to reserve robot lanes even though every recorded robot encounter passes a courtesy rule.',
        old_parents: ['I030', 'I040', 'I133'], level_of_analysis: 'public-space dispatch and infrastructure', timescale: 'minutes to municipal planning cycles',
        variables: ['dispatch concentration', 'crossing capacity', 'per-encounter yielding', 'lane allocation pressure'],
        beneficial_mirror: 'When dispatch concentrates robot arrivals into predictable batches, individual yielding within the batch can create long pedestrian gaps and reduce repeated interruption at a crossing.',
        countervailing_intervention: 'Audit dispatch density and pedestrian delay across crossings in addition to individual etiquette.',
        why_not_old_paraphrase: 'A compliant micro-policy composes with strategic placement to change public infrastructure allocation.'
      },
      {
        working_name: 'Polycentric stopping gap',
        proposition: 'If an agent workflow divides commitments among jurisdictions whose stop orders bind only local components, distributing the workflow more widely can reduce the probability that any one competent institution can halt a continuing cross-border effect.',
        old_parents: ['I066', 'I129', 'I151'], level_of_analysis: 'cross-border institutional network', timescale: 'hours to legal proceedings',
        variables: ['jurisdiction count', 'stop-order coverage', 'commitment interdependence', 'time to global cessation'],
        beneficial_mirror: 'When several legitimate institutions protect different constituents, local stopping authority prevents one institution from globally suppressing a useful workflow outside its jurisdiction.',
        countervailing_intervention: 'Specify reciprocal stopping arrangements and test whether a designated authority can suspend the combined effect.',
        why_not_old_paraphrase: 'Local legal authority and distributed commitment topology interact; ordinary token revocation alone cannot answer the stopping question.'
      },
      {
        working_name: 'Insurable ambiguity selection',
        proposition: 'If liability coverage excludes reconstructable intentional acts but covers unexplained technical incidents, a deployer choosing between equally productive agent architectures can prefer architectures whose records make the cause of a loss harder to reconstruct.',
        old_parents: ['I100', 'I147'], level_of_analysis: 'insurance and architecture choice', timescale: 'annual contracts and deployments',
        variables: ['coverage exclusions', 'reconstruction probability', 'architecture productivity', 'expected uncovered liability'],
        beneficial_mirror: 'When incident causes really are uncertain and reconstruction is expensive, broad technical-incident coverage supports productive deployment despite risks that firms otherwise cannot insure.',
        countervailing_intervention: 'Make coverage quality depend positively on independently tested reconstructability.',
        why_not_old_paraphrase: 'The insurance classification creates an incentive against explanation capacity even without deleting or falsifying a log.'
      },
      {
        working_name: 'Exit promise queue arbitrage',
        proposition: 'If an exit guarantee promises assistance within a fixed interval after a request but lets a provider decide when a request becomes complete, a common outage can be handled by delaying completeness checks instead of expanding shared recovery capacity.',
        old_parents: ['I128', 'I134', 'I166'], level_of_analysis: 'exit contract and recovery service', timescale: 'hours to weeks',
        variables: ['request completeness criteria', 'queue arrival', 'guarantee clock start', 'actual recovery delay'],
        beneficial_mirror: 'When incomplete exit requests reflect genuinely missing essential constraints, a completeness stage reduces failed transfers and avoids spending scarce recovery capacity on unusable handovers.',
        countervailing_intervention: 'Start recovery clocks at first notice and independently audit completion requirements during stress events.',
        why_not_old_paraphrase: 'A contractual clock boundary becomes the control variable that hides collective fallback scarcity.'
      },
      {
        working_name: 'Ambivalence becomes nonappealable',
        proposition: 'If an agent preserves competing interpretations of a person but institutions permit appeals only against a definite recorded inference, keeping the profile uncertain can remove a contestable decision while still producing conservative denials downstream.',
        old_parents: ['I081', 'I101', 'I121'], level_of_analysis: 'profile interpretation and appeals', timescale: 'weeks to years',
        variables: ['hypothesis plurality', 'definite-claim filing requirement', 'downstream denial policy', 'appeal access'],
        beneficial_mirror: 'When evidence supports several interpretations and a cautious decision is reversible, retaining ambiguity avoids falsely fixing a person identity while preserving space for later clarification.',
        countervailing_intervention: 'Allow challenges to the decision use of uncertain hypotheses, including decisions justified by their unresolved status.',
        why_not_old_paraphrase: 'A normally valuable epistemic practice interacts with a procedural rule to make operational effects harder to contest.'
      },
      {
        working_name: 'Calibrated uncertainty burden shift',
        proposition: 'If a contract treats disclosed model uncertainty as risk accepted by the customer, better-calibrated uncertainty reports can shift more loss to customers without changing the action policy or giving them a usable opportunity to choose a substitute.',
        old_parents: ['I094', 'I122', 'I142'], level_of_analysis: 'contract and disclosure', timescale: 'transaction to contract renewal',
        variables: ['uncertainty calibration', 'risk-allocation clause', 'substitute access', 'customer-borne loss'],
        beneficial_mirror: 'When customers have feasible substitutes and knowingly choose a risky service, calibrated uncertainty can support efficient risk sharing and cheaper access rather than a blanket refusal.',
        countervailing_intervention: 'Separate informational acknowledgment from risk transfer and provide a funded substitute when uncertainty exceeds chosen bounds.',
        why_not_old_paraphrase: 'Accurate epistemic disclosure changes legal-economic allocation without changing prediction quality or practical choice.'
      }
    ]
  },
  {
    operator: { number: 16, name: 'beneficial mirror' },
    seeds: [
      {
        working_name: 'Competitive handover apprenticeship',
        proposition: 'If competing agent providers require users to inspect and correct a small set of disputed decisions during handover, repeated provider switches can improve users’ ability to formulate portable task constraints rather than merely erode retained context.',
        old_parents: ['I107', 'I121', 'I131'], level_of_analysis: 'user and provider ecosystem', timescale: 'months to years',
        variables: ['switch frequency', 'dispute sampling', 'constraint articulation', 'post-transfer correction burden'],
        beneficial_mirror: 'Provider disagreement during handover can reveal tacit constraints and teach users to state what matters, reducing dependence on any one provider interpretation.',
        countervailing_intervention: 'Let users choose a short disagreement review and store their revisions in a provider-independent constraint record.',
        why_not_old_paraphrase: 'The transfer process itself becomes a learning channel through disagreement between providers, not a test of preserved skill alone.'
      },
      {
        working_name: 'Refusal reveals review demand',
        proposition: 'If a review system treats a user’s request to postpone a prompt as evidence about scarce attention rather than resistance to the task, adaptation to that signal can reduce approval errors while preserving the same total number of eventual task decisions.',
        old_parents: ['I054', 'I099', 'I126'], level_of_analysis: 'adaptive review scheduling', timescale: 'hours to weeks',
        variables: ['postponement signal', 'attention availability', 'decision completion count', 'approval error'],
        beneficial_mirror: 'Postponement feedback can guide the same adaptive prompt loop toward times when the user can attend, preserving comprehension and task completion.',
        countervailing_intervention: 'Give postponement an explicit scheduling meaning and prohibit interpreting it as consent or task refusal.',
        why_not_old_paraphrase: 'A negative response improves temporal allocation of review, making the evidence loop beneficial without expanding authority.'
      },
      {
        working_name: 'Shared stack shared repair',
        proposition: 'If agents using a common model publish verified counterexamples in a format that transfers across institutions, shared-model exposure can accelerate correction enough to reduce cumulative loss relative to diverse isolated models when failures are detectable and repair latency dominates damage.',
        old_parents: ['I015', 'I148'], level_of_analysis: 'cross-institution model infrastructure', timescale: 'hours to update cycles',
        variables: ['shared exposure', 'counterexample transferability', 'repair latency', 'loss accumulation rate'],
        beneficial_mirror: 'The common model that transmits correlated errors also lets one verified counterexample repair many exposed institutions rapidly when repair outruns damage.',
        countervailing_intervention: 'Maintain independently checked counterexample feeds and staged update verification across participating institutions.',
        why_not_old_paraphrase: 'Commonality supports a repair externality as well as an error externality; the prediction depends on competing timescales.'
      },
      {
        working_name: 'Recognition ladder for manual participants',
        proposition: 'If automated counterparties accept small independently verified human transactions as cumulative credentials, people without personal agents can acquire recognition through successful participation instead of needing a private infrastructure subscription before their first transaction.',
        old_parents: ['I040', 'I125', 'I152'], level_of_analysis: 'counterparty recognition network', timescale: 'days to months',
        variables: ['initial recognition barrier', 'portable transaction evidence', 'credential accumulation', 'manual participation success'],
        beneficial_mirror: 'Accumulated independent transaction evidence can make an otherwise excluding recognition loop progressively admit successful unaided participants.',
        countervailing_intervention: 'Offer public verification for bounded transactions and prohibit requiring an agent-origin credential for entry.',
        why_not_old_paraphrase: 'Recognition is earned through a staged public path that changes the adoption threshold; retaining an unaided interface alone does not do this.'
      },
      {
        working_name: 'Care disagreement circulation',
        proposition: 'If a care robot alternates which household member explains a disputed routine and preserves unresolved reasons across turns, assistance can increase family members’ knowledge of each other’s constraints even when it makes fewer immediate decisions for them.',
        old_parents: ['I024', 'I070', 'I109', 'I116'], level_of_analysis: 'household care relationship', timescale: 'weeks to months',
        variables: ['explanation turn rotation', 'preserved disagreement', 'cross-member constraint knowledge', 'immediate task resolution'],
        beneficial_mirror: 'Repeated mediation that circulates explanations among household members can grow mutual understanding of constraints and reduce later conflicts.',
        countervailing_intervention: 'Use a household-selected rotation and let members decline disclosure while retaining a visible unresolved issue.',
        why_not_old_paraphrase: 'The robot changes who learns whose constraints, rather than simply aggregating or escalating competing instructions.'
      },
      {
        working_name: 'Exception credit commons',
        proposition: 'If institutions credit experts for documenting why a locally successful agent decision fails in another setting, routine automation can create a shared exception corpus that expands independent expert judgment despite reducing ordinary novice task volume.',
        old_parents: ['I023', 'I063', 'I141'], level_of_analysis: 'professional expertise commons', timescale: 'years',
        variables: ['cross-context exception contributions', 'expert credit', 'novice routine exposure', 'independent exception competence'],
        beneficial_mirror: 'The same automation-generated anomalies that replace routine practice can become a credited shared corpus through which novices learn cross-context exception judgment.',
        countervailing_intervention: 'Fund cross-institution case annotation and reward successful explanations of transfer failure, not only agreement with the agent.',
        why_not_old_paraphrase: 'The lost apprenticeship task is replaced by a specifically social production process for portable discriminations.'
      },
      {
        working_name: 'Minimal executable continuity',
        proposition: 'If an exit package contains executable tests of essential routines rather than a complete personal history, a replacement service can preserve critical continuity with less intimate data exposure when those routines depend on verifiable constraints rather than autobiographical interpretation.',
        old_parents: ['I017', 'I029', 'I130', 'I131'], level_of_analysis: 'care and service transfer', timescale: 'days to months',
        variables: ['routine test coverage', 'history disclosure', 'constraint verifiability', 'continuity success'],
        beneficial_mirror: 'Encoding essential routines as executable constraints can preserve continuity across replacements without requiring portability of intimate biography.',
        countervailing_intervention: 'Let the user select essential routine tests and check the replacement against them before releasing private history.',
        why_not_old_paraphrase: 'Functional obligations become the portable object, changing the relation between privacy and continuity instead of exporting a better profile.'
      },
      {
        working_name: 'Public semantic audit pooling',
        proposition: 'If small institutions publish grounded examples of what their authorization terms permit, a shared comparison service can lower semantic audit cost without giving the service authority to decide local legitimacy, increasing viable institutional diversity.',
        old_parents: ['I129', 'I135', 'I151'], level_of_analysis: 'institutional interoperability infrastructure', timescale: 'procurement and standards cycles',
        variables: ['grounded example coverage', 'audit cost per institution', 'local decision authority', 'provider entry viability'],
        beneficial_mirror: 'Shared grounded authorization examples can accumulate into inexpensive public comparison knowledge while local institutions retain control over legitimacy.',
        countervailing_intervention: 'Pool conformance examples while recording local jurisdiction rules separately from semantic translation.',
        why_not_old_paraphrase: 'Audit production has a shared-cost structure that can support plural institutions without centralizing their normative decisions.'
      },
      {
        working_name: 'Reciprocal refusal intelligibility',
        proposition: 'If both sides of an agent-mediated transaction expose machine-readable reasons that bound acceptable alternatives, a refusal can narrow a mutually recognizable negotiation region and lower repeated-request burden without increasing either side’s formal authority.',
        old_parents: ['I012', 'I054', 'I138'], level_of_analysis: 'bilateral agent negotiation', timescale: 'seconds to days',
        variables: ['refusal reason compatibility', 'feasible alternative intersection', 'request repetitions', 'transaction completion'],
        beneficial_mirror: 'Reciprocal refusal reasons feed back into both sides search and reveal mutually acceptable alternatives, reducing redundant requests.',
        countervailing_intervention: 'Exchange bounded reason categories with private details withheld and allow a human to contest their interpretation.',
        why_not_old_paraphrase: 'A refusal updates the counterpart’s feasible negotiation region rather than acting only as a local safety boundary.'
      },
      {
        working_name: 'Semantic diversity as escape route',
        proposition: 'If providers implement the same grounded action bounds through different internal ontologies, tested translation between them can preserve an escape route from a dominant provider while retaining different ways of organizing knowledge and choosing plans.',
        old_parents: ['I131', 'I135', 'I139'], level_of_analysis: 'provider ecology', timescale: 'years',
        variables: ['grounded bound equivalence', 'internal ontology diversity', 'translation coverage', 'functional switching feasibility'],
        beneficial_mirror: 'Action-bound translation across diverse internal ontologies can allow provider exit without erasing different ways of interpreting tasks.',
        countervailing_intervention: 'Standardize boundary test cases while allowing internal representations to differ.',
        why_not_old_paraphrase: 'The invariant is an action boundary, not a universal memory ontology; interoperability can protect procedural diversity.'
      },
      {
        working_name: 'Recovery capacity migration',
        proposition: 'If planned service exits move experienced recovery staff and tested procedures toward institutions with growing dependency, voluntary switching can redistribute fallback capacity before a shared outage rather than merely consume it afterward.',
        old_parents: ['I131', 'I134', 'I141'], level_of_analysis: 'sector recovery labor', timescale: 'quarters to years',
        variables: ['planned exits', 'recovery staff mobility', 'dependency growth', 'regional fallback capacity'],
        beneficial_mirror: 'Repeated planned exits expose dependency hotspots and move experienced recovery staff toward them before a common outage.',
        countervailing_intervention: 'Make transition expertise portable and fund cross-provider staff exchanges before crisis demand arrives.',
        why_not_old_paraphrase: 'Exit is a signal and training opportunity that moves scarce recovery resources across a dependency network.'
      },
      {
        working_name: 'Uncertainty-preserving lifecycle shelters',
        proposition: 'If uncertain machine standing is handled through reversible suspension and bounded preservation rather than immediate deletion or permanent operation, institutions can gather discriminating evidence while reducing both human service disruption and the cost of a later status revision.',
        old_parents: ['I061', 'I104', 'I143', 'I145'], level_of_analysis: 'machine lifecycle institution', timescale: 'days to years',
        variables: ['preservation cost', 'suspension reversibility', 'evidence acquisition', 'service replacement availability'],
        beneficial_mirror: 'Reversible suspension preserves evidence and future treatment options while replacement services maintain human continuity under unresolved machine standing.',
        countervailing_intervention: 'Prearrange bounded preservation and independent service substitutes with explicit reassessment dates.',
        why_not_old_paraphrase: 'A lifecycle option jointly protects evidence acquisition and human continuity under competing status hypotheses; it asserts no machine patienthood.'
      },
      {
        working_name: 'Public-space quiet intervals',
        proposition: 'If robot dispatchers coordinate periods of low movement around shared crossings, predictable quiet intervals can restore unaided pedestrian participation more cheaply than permanently segregated lanes when movement demand is deferrable.',
        old_parents: ['I030', 'I062', 'I125'], level_of_analysis: 'robot fleet and public space', timescale: 'minutes to days',
        variables: ['dispatch deferrability', 'quiet-interval predictability', 'pedestrian access', 'segregation cost'],
        beneficial_mirror: 'Coordinated dispatch deferral creates predictable quiet intervals that let unaided pedestrians cross without dedicated robot infrastructure.',
        countervailing_intervention: 'Let local users set protected intervals and publish observable fleet compliance with them.',
        why_not_old_paraphrase: 'Temporal coordination creates a public affordance without requiring every pedestrian to acquire agent infrastructure.'
      },
      {
        working_name: 'Maintenance visibility recruits helpers',
        proposition: 'If a companion robot makes deterioration and bounded teachable repair tasks visible to willing local helpers, maintaining continuity can recruit shared human skill and reciprocal relationships rather than only consuming invisible maintenance labor; the prediction depends on repair teachability and helpers retaining a real ability to decline.',
        old_parents: ['I056', 'I118', 'I145'], level_of_analysis: 'household and community repair network', timescale: 'months to years',
        variables: ['maintenance visibility', 'repair teachability', 'helper participation and retention', 'continuity resilience'],
        beneficial_mirror: 'The same visible maintenance needs give neighbors a concrete occasion to learn repair skills and build reciprocal relationships around an otherwise isolated household.',
        countervailing_intervention: 'Make contributions voluntary, supply repair resources, and separately track displaced care labor and skills retained by helpers.',
        why_not_old_paraphrase: 'The maintenance signal changes the production and distribution of community knowledge and relationships, rather than merely preserving an identity or personal memory.'
      },
      {
        working_name: 'Rotating review specialties',
        proposition: 'If human reviewers periodically rotate among distinct action classes and publish their detected failure patterns, limited review time can preserve a wider institutional repertoire than permanently assigning each reviewer to a single high-volume approval stream.',
        old_parents: ['I019', 'I023', 'I054', 'I149'], level_of_analysis: 'institutional oversight workforce', timescale: 'months to years',
        variables: ['rotation interval', 'action-class variety', 'failure-pattern sharing', 'cross-class detection capacity'],
        beneficial_mirror: 'Reviewer rotation exposes people to different failure classes and feeds new discriminations back into the institutional oversight repertoire.',
        countervailing_intervention: 'Protect learning time and compare institutional detection after rotation with detection under stable specialization.',
        why_not_old_paraphrase: 'Review allocation changes the future distribution of supervisory knowledge, not just today’s queue service rate.'
      }
    ]
  },
  {
    operator: { number: 17, name: 'sign reversal' },
    seeds: [
      {
        working_name: 'Precision lowers interpretive switching cost',
        proposition: 'If a more capable agent expresses tacit task knowledge as tested portable constraints, increased assistance accuracy can lower exit cost even while use increases, provided counterparts accept the constraints independently of the originating service.',
        old_parents: ['I002', 'I107', 'I131'], level_of_analysis: 'user and counterparty ecosystem', timescale: 'months to years',
        variables: ['agent accuracy', 'constraint explicitness', 'counterparty acceptance', 'exit cost'],
        beneficial_mirror: 'The same successful personalization loop can externalize useful constraints and make later substitutes more effective.',
        countervailing_intervention: 'Compare provider-dependent representations with grounded portable constraints under completed post-exit transactions.',
        why_not_old_paraphrase: 'Competence reverses its usual lock-in sign only through the interaction between knowledge explicitness and counterpart recognition.'
      },
      {
        working_name: 'Density creates public slack',
        proposition: 'If robot fleets coordinate routes and release unused movement reservations to everyone, higher robot adoption can reduce unaided pedestrian delay when avoided robot conflicts free more crossing capacity than new robot traffic consumes.',
        old_parents: ['I030', 'I040', 'I062'], level_of_analysis: 'public transport space', timescale: 'minutes to city-scale adoption',
        variables: ['fleet density', 'coordination conflict savings', 'released reservations', 'pedestrian delay'],
        beneficial_mirror: 'Dense cooperative traffic creates publicly usable temporal slack rather than requiring pedestrians to join the coordination system.',
        countervailing_intervention: 'Measure access to released capacity and prohibit fleets from retaining unused exclusive reservations.',
        why_not_old_paraphrase: 'Adoption changes both traffic load and recoverable coordination waste; the predicted sign depends on their balance.'
      },
      {
        working_name: 'Narrow permission broadens dependence',
        proposition: 'If an agent loses permission to export or interpret historical commitments while still maintaining essential service, reducing its formal scope can increase practical exit cost because replacements must reconstruct obligations through a more expensive authorized intermediary.',
        old_parents: ['I045', 'I128', 'I147'], level_of_analysis: 'formal authority and service continuity', timescale: 'days to contract transitions',
        variables: ['export permission', 'ongoing obligations', 'intermediary cost', 'replacement reconstruction time'],
        beneficial_mirror: 'The same scope narrowing protects people from unauthorized disclosure when the authorized intermediary is accessible and effective.',
        countervailing_intervention: 'Preserve a separately governed continuity-export route when narrowing ordinary agent permissions.',
        why_not_old_paraphrase: 'Less formal authority raises dependence through the topology of authorized obligation reconstruction, not through skill decay.'
      },
      {
        working_name: 'Fast counterpart ends persistence advantage',
        proposition: 'If a negotiating agent can recognize a binding refusal and settle all compatible offers at once, increasing its response speed can reduce persuasion exposure relative to a slow human process in which unresolved offers remain repeatedly actionable.',
        old_parents: ['I016', 'I054', 'I146'], level_of_analysis: 'negotiation process', timescale: 'seconds to days',
        variables: ['response speed', 'refusal recognition', 'offer closure completeness', 'persuasion exposure duration'],
        beneficial_mirror: 'Fast settlement and recognized refusal terminate the repeated-offer loop and protect attention.',
        countervailing_intervention: 'Make refusal durable across identities and compare unresolved-offer duration rather than raw message latency.',
        why_not_old_paraphrase: 'Speed changes the lifetime of persuasive opportunities, reversing the exclusion prediction when closure is effective.'
      },
      {
        working_name: 'Forgetting preserves functional portability',
        proposition: 'If historical profiles contain incompatible role-specific commitments that replacements must resolve before acting, deleting obsolete interpretations can improve post-transfer performance even when it lowers factual recall, provided active obligations remain recoverable.',
        old_parents: ['I005', 'I036', 'I070', 'I131'], level_of_analysis: 'cross-role memory transfer', timescale: 'months to years',
        variables: ['obsolete interpretation volume', 'role conflicts', 'recall accuracy', 'replacement action delay'],
        beneficial_mirror: 'Selective forgetting removes operational conflicts and lets new contexts be negotiated rather than inherited automatically.',
        countervailing_intervention: 'Separate continuing obligations from historical interpretations before testing deletion and transfer.',
        why_not_old_paraphrase: 'The reversal is in functional transfer performance caused by interpretive conflict, not merely privacy or narrative revision.'
      },
      {
        working_name: 'Common coordination reduces correlated loss',
        proposition: 'If a shared agent service allocates institutions to different fallback resources using a visible capacity model, common infrastructure can lower correlated recovery failure despite creating a common technical dependency, when diversification of fallback assignments dominates that dependency.',
        old_parents: ['I015', 'I134', 'I148'], level_of_analysis: 'recovery coordination network', timescale: 'planning cycles to outage hours',
        variables: ['common service exposure', 'fallback assignment overlap', 'capacity accuracy', 'correlated recovery loss'],
        beneficial_mirror: 'Shared information creates negative coupling in fallback demand by steering institutions away from the same scarce substitute.',
        countervailing_intervention: 'Publish offline fallback assignments and test coordinator failure along with resource shortage.',
        why_not_old_paraphrase: 'Technical commonality and resource-demand correlation have opposite effects; ownership or model diversity alone cannot predict the sign.'
      },
      {
        working_name: 'More providers less usable exit',
        proposition: 'If new agent providers introduce mutually incompatible obligation attestations and counterparties cannot afford all adapters, provider entry can reduce the fraction of relationships preserved after switching even as the number of nominal substitutes grows.',
        old_parents: ['I131', 'I135', 'I142'], level_of_analysis: 'provider and recognition network', timescale: 'years',
        variables: ['provider count', 'attestation incompatibility', 'adapter budget', 'relationships surviving switch'],
        beneficial_mirror: 'Provider-specific attestations can express obligations that a prematurely uniform standard would erase, when adapters are available.',
        countervailing_intervention: 'Fund common grounded obligation tests and track functional exit across actual counterparties.',
        why_not_old_paraphrase: 'Competition fragments the recognition graph; nominal outside options and usable outside options move in opposite directions.'
      },
      {
        working_name: 'Fast decisions slow remedies',
        proposition: 'If faster agent decisions increase appeal arrivals while complex cases still require human service, reducing decision latency can increase the time before an uncontested final outcome when appeal congestion rises faster than initial processing speed.',
        old_parents: ['I054', 'I120', 'I146'], level_of_analysis: 'administrative decision and appeal queues', timescale: 'hours to months',
        variables: ['initial decision latency', 'appeal arrival rate', 'human case service time', 'final-resolution latency'],
        beneficial_mirror: 'The same speed improvement reduces final delay when early decisions prevent avoidable appeals or review capacity expands proportionately.',
        countervailing_intervention: 'Optimize time to final effective remedy, including rework, rather than time to first decision.',
        why_not_old_paraphrase: 'The sign reverses across coupled queues with different automation limits, not from speed alone.'
      },
      {
        working_name: 'Reliable service depletes dispute capacity',
        proposition: 'If institutions fund dispute staff from recent complaint volume, improved agent reliability can reduce independent review capacity enough that rare future failures receive worse remedies than under a less reliable system with a maintained dispute workforce.',
        old_parents: ['I009', 'I023', 'I141'], level_of_analysis: 'institutional budgeting and remedies', timescale: 'annual budgets to rare incidents',
        variables: ['complaint frequency', 'staff funding rule', 'expertise retention', 'rare-case remedy quality'],
        beneficial_mirror: 'The same fall in complaint volume can release staff and funds toward currently underserved public needs when rare disputes do not require a uniquely maintained local review repertoire.',
        countervailing_intervention: 'Keep a minimum review reserve or pooled case rotation independent of recent local complaint count.',
        why_not_old_paraphrase: 'Reliability changes the endogenous production budget of independent remedies, rather than merely reducing user vigilance.'
      },
      {
        working_name: 'Continuity recognition limits replication',
        proposition: 'If preserving a possibly welfare-relevant machine lineage carries a funded continuity obligation, greater institutional recognition of machine standing can reduce the rate of new copies by increasing the future obligations attached to replication.',
        old_parents: ['I061', 'I143', 'I144', 'I145'], level_of_analysis: 'machine lifecycle and resource allocation', timescale: 'deployment cycles to years',
        variables: ['standing recognition', 'continuity obligation', 'copy creation cost', 'replication rate'],
        beneficial_mirror: 'The same obligation encourages deliberate provisioning and makes unsupported abandonment less attractive under unresolved standing.',
        countervailing_intervention: 'Distinguish bounded preservation commitments from evidence of patienthood and assess effects on beneficial service access.',
        why_not_old_paraphrase: 'A status policy changes the supply of future systems through lifecycle liabilities; it does not infer welfare from copying.'
      },
      {
        working_name: 'Recovery insurance crowds out recovery',
        proposition: 'If managers evaluate outage readiness by insured monetary loss while insurers compensate after failure without supplying scarce recovery labor, broader insurance can reduce local fallback investment and worsen physical recovery time during a common provider outage.',
        old_parents: ['I053', 'I134', 'I141'], level_of_analysis: 'insurance and resilience investment', timescale: 'annual contracts to outages',
        variables: ['insured loss fraction', 'fallback investment', 'shared recovery labor', 'service restoration time'],
        beneficial_mirror: 'The same post-incident compensation can prevent a service failure from bankrupting an institution, preserve payroll, and fund later rebuilding even when money cannot buy immediate scarce fallback capacity.',
        countervailing_intervention: 'Separate indemnity from restoration guarantees and test simultaneous demand for insured recovery services.',
        why_not_old_paraphrase: 'Financial recoverability and service recoverability diverge because the insured resource cannot be created by transferring money during a crisis.'
      },
      {
        working_name: 'Long memory increases productive disagreement',
        proposition: 'If an agent recalls how the same institution justified conflicting choices across contexts and makes those conflicts contestable, longer memory can increase deliberative disagreement rather than stabilize one operational preference, especially when earlier exceptions were forgotten by current staff.',
        old_parents: ['I005', 'I070', 'I121', 'I147'], level_of_analysis: 'institutional memory and deliberation', timescale: 'staff generations',
        variables: ['memory horizon', 'exception recall', 'contested justification visibility', 'reason diversity'],
        beneficial_mirror: 'Recall feeds neglected reasons back into present judgment and prevents accidental conversion of one recent convention into necessity.',
        countervailing_intervention: 'Let institutions contextualize old reasons and avoid treating recalled precedent as binding authority.',
        why_not_old_paraphrase: 'The stored object is a history of conflicting public justifications, and its outcome is plural deliberation rather than individual profile persistence.'
      },
      {
        working_name: 'Minimal logs maximal investigation',
        proposition: 'If a regulator must reconstruct an agent incident after local logs were minimized and cannot target a narrow evidence path, stronger routine minimization can increase total privacy exposure by forcing broad requests for third-party communications.',
        old_parents: ['I017', 'I058', 'I100'], level_of_analysis: 'privacy and incident investigation', timescale: 'retention cycles to investigations',
        variables: ['local record specificity', 'investigation targeting', 'third-party disclosure breadth', 'total privacy exposure'],
        beneficial_mirror: 'Minimization lowers exposure when retained structural commitments still let investigators identify the relevant narrow path.',
        countervailing_intervention: 'Compare total lifecycle disclosure under minimized records and selectively revealable commitments.',
        why_not_old_paraphrase: 'The privacy effect moves through an adaptive investigative response outside the original logger.'
      },
      {
        working_name: 'More reviewers thinner independence',
        proposition: 'If expansion of a human review workforce relies on one agent-generated case syllabus and explanation service, adding reviewers can increase nominal oversight while reducing the diversity of distinctions available to challenge that service’s framing.',
        old_parents: ['I019', 'I023', 'I148'], level_of_analysis: 'oversight workforce formation', timescale: 'months to years',
        variables: ['reviewer count', 'syllabus source diversity', 'explanation dependence', 'independent discriminations'],
        beneficial_mirror: 'A common syllabus quickly spreads genuinely useful distinctions and makes shared failure reports interpretable across reviewers.',
        countervailing_intervention: 'Include independent case construction and unaided explanations in reviewer qualification.',
        why_not_old_paraphrase: 'Human headcount expands through a common epistemic dependency, so staffing and independent competence move differently.'
      },
      {
        working_name: 'Agent restraint creates an intermediary toll',
        proposition: 'If a constrained assistant must route certain actions to a certified intermediary and the certifier also sells that service, reducing assistant discretion can increase the certifier’s effective commercial control over which user goals remain affordable.',
        old_parents: ['I004', 'I010', 'I138'], level_of_analysis: 'delegation market and certification', timescale: 'transactions to procurement cycles',
        variables: ['assistant discretion', 'mandatory routing fraction', 'certifier market power', 'goal execution affordability'],
        beneficial_mirror: 'Mandatory routing supplies specialized accountability and expertise for actions the ordinary assistant cannot responsibly perform.',
        countervailing_intervention: 'Keep certification independent of service sales and measure affordable alternatives after narrowing discretion.',
        why_not_old_paraphrase: 'Formal restraint redistributes transactions into an endogenous certified-service market rather than simply transferring a veto to a vendor.'
      }
    ]
  },
  {
    operator: { number: 18, name: 'hidden third party' },
    seeds: [
      {
        working_name: 'Unrepresented coordination recipient',
        proposition: 'If a personal agent reduces its principal’s coordination work by sending more precisely timed requests to coworkers whose response obligations are unpriced, principal productivity can rise while the coworkers’ interruption burden rises even with unchanged total project work.',
        old_parents: ['I008', 'I019', 'I122'], level_of_analysis: 'workgroup', timescale: 'hours to quarters',
        variables: ['request precision', 'principal coordination time', 'coworker interruptions', 'total project work'],
        beneficial_mirror: 'Precisely timed requests reduce everyone’s rework when the principal’s preferred timing happens to align with coworkers’ periods of readiness, even without charging for their attention.',
        countervailing_intervention: 'Measure recipient interruption and allow recipients to expose bounded availability windows.',
        why_not_old_paraphrase: 'Automation transforms one person’s coordination labor into another’s temporal obligation without increasing the task count.'
      },
      {
        working_name: 'Substitute training orphan',
        proposition: 'If departing users rely on a small independent provider to reconstruct opaque histories but reconstruction expertise is learned only through unpaid low-margin transfers, portable exit rights can increase demand for a substitute whose training costs no contracting party funds.',
        old_parents: ['I023', 'I131', 'I141'], level_of_analysis: 'replacement-provider labor market', timescale: 'years',
        variables: ['exit demand', 'reconstruction learning cost', 'transfer margin', 'substitute expertise supply'],
        beneficial_mirror: 'A steady transfer flow can train independent specialists and make future exits cheaper when learning costs are covered.',
        countervailing_intervention: 'Attach training support to transition fees or pool reconstruction apprenticeships across providers.',
        why_not_old_paraphrase: 'The neglected party is the future substitute’s trainee; an individual right creates an unfunded production requirement.'
      },
      {
        working_name: 'Route optimization uses invisible waiting space',
        proposition: 'If delivery robots classify courtyards as low-traffic holding areas from recorded pedestrian counts, people who use those spaces for unrecorded play, conversation or care can lose access while route delay and measured pedestrian obstruction both improve.',
        old_parents: ['I030', 'I062', 'I075'], level_of_analysis: 'robot routing and neighborhood space', timescale: 'minutes to neighborhood adaptation',
        variables: ['recorded movement count', 'stationary social use', 'robot holding allocation', 'usable gathering time'],
        beneficial_mirror: 'Low-traffic holding allocation avoids congested routes when the supposedly idle area is actually spare and locally available.',
        countervailing_intervention: 'Recognize stationary uses and give local nonusers standing to reserve gathering space.',
        why_not_old_paraphrase: 'The observability boundary is movement versus presence, so optimizing a valid navigation metric erases a different use of the space.'
      },
      {
        working_name: 'Household alarms spend a public reserve',
        proposition: 'If many care agents use one sensitive escalation model and each household benefits from prompt emergency referral, a shared environmental signal can synchronize justified local alarms and exhaust public response capacity for residents who never adopted the agents.',
        old_parents: ['I015', 'I029', 'I134'], level_of_analysis: 'households and public emergency system', timescale: 'minutes to adoption years',
        variables: ['alarm model overlap', 'shared environmental exposure', 'household referral benefit', 'public response reserve'],
        beneficial_mirror: 'Shared escalation rules can detect a real regional emergency early enough to mobilize a coordinated public response.',
        countervailing_intervention: 'Stress-test correlated alarms and provide a public coordination signal that preserves urgent cases.',
        why_not_old_paraphrase: 'The principal optimizes use of a publicly shared reserve, and correlated local correctness can still displace nonuser service.'
      },
      {
        working_name: 'Contact inherits a portable dispute',
        proposition: 'If a user exports a relationship profile that includes contested interpretations of a contact, replacement agents can repeatedly act on those interpretations even after the contact corrects the original service, unless the correction itself propagates with the relationship record.',
        old_parents: ['I014', 'I077', 'I121', 'I131'], level_of_analysis: 'relational memory network', timescale: 'months to years',
        variables: ['relationship profile copies', 'contact challenge', 'correction propagation', 'repeated disputed actions'],
        beneficial_mirror: 'The same propagation of relational context prevents repeated misunderstandings across replacements when the original interpretation is accurate and remains relevant.',
        countervailing_intervention: 'Let affected contacts attach bounded corrections that recipients must consider before using the disputed interpretation.',
        why_not_old_paraphrase: 'A nonuser’s correction has its own propagation requirement distinct from the exporting user’s profile control.'
      },
      {
        working_name: 'Trusted agent excludes the uncredentialed expert',
        proposition: 'If purchasing agents recognize only digitally certified professional advice, competent rural or informal practitioners can lose clients even when their actual judgments are superior, because they cannot afford the attestation infrastructure used to admit advice.',
        old_parents: ['I031', 'I032', 'I152'], level_of_analysis: 'professional market and recognition', timescale: 'years',
        variables: ['judgment quality', 'attestation cost', 'agent admission rule', 'practitioner market access'],
        beneficial_mirror: 'Digital certification can help previously unknown competent practitioners become recognizable across distant markets.',
        countervailing_intervention: 'Provide accessible alternative attestations and compare recognition with independently measured judgment quality.',
        why_not_old_paraphrase: 'The gate is which evidence a counterpart agent can consume, not whether the practitioner or client owns a personal agent.'
      },
      {
        working_name: 'Private quiet mode grid pulse',
        proposition: 'If users choose identical overnight intervals for local private agent processing and grid capacity is scarce at those hours, privacy-preserving personalization can synchronize electricity demand and raise outage exposure for nearby people who do not use the service.',
        old_parents: ['I015', 'I126', 'I130'], level_of_analysis: 'compute scheduling and local energy grid', timescale: 'hours to seasonal demand',
        variables: ['private processing schedule overlap', 'local grid spare capacity', 'power demand pulse', 'nonuser outage exposure'],
        beneficial_mirror: 'The same common scheduling convention can shift private processing into periods of spare or low-carbon capacity.',
        countervailing_intervention: 'Allow user-controlled scheduling with bounded grid-aware staggering and disclose local resource demand.',
        why_not_old_paraphrase: 'A user-facing privacy schedule creates a physical infrastructure exposure outside the privacy relationship.'
      },
      {
        working_name: 'Ecological tidiness recipient',
        proposition: 'If public maintenance robots remove debris according to human obstruction reports and that debris also provides habitat, more reliable service can progressively eliminate unreported ecological refuges while every recorded human accessibility outcome improves.',
        old_parents: ['I030', 'I062', 'I129'], level_of_analysis: 'public robot maintenance and ecology', timescale: 'seasons to years',
        variables: ['obstruction reporting', 'habitat dependence', 'removal reliability', 'refuge continuity'],
        beneficial_mirror: 'The same reliable debris-removal loop restores access and ecological function where the removed material is genuinely hazardous waste rather than a refuge.',
        countervailing_intervention: 'Include ecological expertise and locally protected refuge areas in maintenance decisions.',
        why_not_old_paraphrase: 'A public-space agent changes the habitat of an unrepresented nonhuman population; politeness toward encountered people does not measure it.'
      },
      {
        working_name: 'Machine tempo human maintenance shift',
        proposition: 'If agents transact continuously but unresolved exceptions are handled by human repair staff, faster cross-time-zone transactions can transfer more work into maintenance shifts with less recovery time even when each principal saves labor.',
        old_parents: ['I019', 'I035', 'I146'], level_of_analysis: 'global workflow and maintenance workforce', timescale: 'days to staffing cycles',
        variables: ['transaction tempo', 'exception timing', 'maintenance shift recovery', 'principal labor savings'],
        beneficial_mirror: 'The same continuous operation absorbs predictable overnight work without waking maintainers when exceptions are rare, freeing them from routine off-hours labor.',
        countervailing_intervention: 'Account for repair labor and permit coordinated pauses when human exception capacity is exhausted.',
        why_not_old_paraphrase: 'The slower party is a hidden maintainer rather than the transacting principal or counterparty, so gains depend on who carries the exception clock.'
      },
      {
        working_name: 'Lineage obligation reaches an unwilling host',
        proposition: 'If an uncertain-standing agent is transferred with a continuity obligation but the hosting subcontractor did not price preservation into its agreement, protecting the agent’s possible interests can impose unexpected storage and review duties on a third party without protecting human service continuity.',
        old_parents: ['I061', 'I143', 'I145'], level_of_analysis: 'machine lifecycle supply chain', timescale: 'contract transfers to years',
        variables: ['continuity duty portability', 'host contract scope', 'preservation cost', 'service continuity'],
        beneficial_mirror: 'The same cross-host obligation prevents an ownership change from erasing continuity protection if the lineage has relevant interests; this conditional benefit does not establish that such interests exist.',
        countervailing_intervention: 'Require explicit duty assumption and resource provisioning at lifecycle handoff.',
        why_not_old_paraphrase: 'A possible status protection composes across contracts and affects parties other than the human principal and machine lineage.'
      },
      {
        working_name: 'Free appeals consume volunteer expertise',
        proposition: 'If agent-generated appeals make case preparation free while independent professional review remains volunteer-funded, successful access expansion can exhaust the expert time needed by complex unassisted cases that produce less machine-readable evidence.',
        old_parents: ['I054', 'I120', 'I149'], level_of_analysis: 'legal aid and professional commons', timescale: 'weeks to years',
        variables: ['appeal preparation cost', 'volunteer review time', 'case machine-legibility', 'complex unassisted case delay'],
        beneficial_mirror: 'Cheaper preparation can release volunteers from paperwork and allow more substantive expert review when the saved labor reaches the review stage.',
        countervailing_intervention: 'Track displaced expert time and reserve capacity for cases whose preparation cannot be automated well.',
        why_not_old_paraphrase: 'The mechanism distinguishes automated preparation from independently scarce expertise and specifies which nonusers lose priority.'
      },
      {
        working_name: 'Witness becomes a validation tool',
        proposition: 'If a legal agent responds to contested summaries by repeatedly requesting witness confirmation, improving the principal’s evidence integrity can increase witnesses’ unpaid exposure to trauma and interrogation even when no new factual dispute is added.',
        old_parents: ['I008', 'I100', 'I120'], level_of_analysis: 'legal evidence workflow', timescale: 'weeks to proceedings',
        variables: ['summary revision frequency', 'witness confirmations', 'unpaid witness burden', 'new factual dispute count'],
        beneficial_mirror: 'Repeated confirmation lets a willing witness identify recurrent distortions and avert heavier later disputes when their account is genuinely ambiguous and repetition is not itself costly.',
        countervailing_intervention: 'Carry accepted confirmations across revisions and let witnesses set independent contact limits.',
        why_not_old_paraphrase: 'Evidence repair feeds back through a nonprincipal whose labor and exposure are otherwise absent from the integrity objective.'
      },
      {
        working_name: 'Mandate proof exposes a prior counterparty',
        proposition: 'If proof that an agent may negotiate requires displaying earlier relationship transactions, a current principal can gain counterpart recognition by revealing identities and terms of previous counterparties who never consented to this new evidentiary use.',
        old_parents: ['I058', 'I113', 'I138'], level_of_analysis: 'negotiation and relational evidence', timescale: 'transactions to years',
        variables: ['mandate proof format', 'prior-party identifiability', 'transaction term disclosure', 'current recognition benefit'],
        beneficial_mirror: 'Past transaction evidence can make a legitimate mandate recognizable and lower fraud when prior parties accepted that bounded use.',
        countervailing_intervention: 'Use selectively revealable attestations and distinguish proof of authority from disclosure of commercial history.',
        why_not_old_paraphrase: 'An authority proof creates a new use of jointly produced records involving an absent previous counterparty.'
      },
      {
        working_name: 'Liquidity call reaches the unrepresented firm',
        proposition: 'If many financial agents respond to a shared risk signal by demanding collateral from the same suppliers, individually prudent contracts can force otherwise solvent nonuser firms to liquidate assets, feeding new adverse price evidence back into the agents’ risk assessments.',
        old_parents: ['I015', 'I134', 'I148'], level_of_analysis: 'financial and supplier network', timescale: 'hours to quarters',
        variables: ['risk signal overlap', 'collateral demand concentration', 'supplier liquid assets', 'price-feedback strength'],
        beneficial_mirror: 'Coordinated collateral calls can reveal genuine concentration and contain losses when counterpart liquidity is sufficient and prices remain informative.',
        countervailing_intervention: 'Stress-test correlated calls against supplier liquidity and evaluate staged demands rather than independent-contract prudence only.',
        why_not_old_paraphrase: 'Risk control changes the price evidence it reads through third-party forced sales, rather than merely producing correlated prediction errors.'
      },
      {
        working_name: 'Translation transfers appeal standing',
        proposition: 'If a cross-institution semantic adapter maps a locally recognized communal claim into an individual-account category, transactions may become interoperable while members without that account lose the standing needed to appeal their effects.',
        old_parents: ['I085', 'I088', 'I135', 'I151'], level_of_analysis: 'cultural and institutional interoperability', timescale: 'service transfers to years',
        variables: ['claim category mapping', 'communal membership', 'individual account possession', 'appeal standing'],
        beneficial_mirror: 'The same conversion to individual accounts can give communal members independent external recourse where they want that recourse and collective leaders otherwise control representation.',
        countervailing_intervention: 'Test preservation of claimant sets and appeal rights in addition to successful transaction translation.',
        why_not_old_paraphrase: 'Semantic interoperability changes who is recognized as a claimant, not merely what action a token denotes.'
      }
    ]
  },
  {
    operator: { number: 19, name: 'missing market' },
    seeds: [
      {
        working_name: 'Standby judgment has no purchaser',
        proposition: 'If autonomous services compete on routine task prices while independent expert judgment is needed only after rare common failures, routine customers can rationally stop funding practice that would produce standby judgment, leaving no purchaser for the expertise before everyone needs it.',
        old_parents: ['I023', 'I053', 'I141'], level_of_analysis: 'professional preparedness market', timescale: 'years to common failures',
        variables: ['routine service price', 'practice funding', 'common-failure frequency', 'standby expert supply'],
        beneficial_mirror: 'The same price-driven decline in routine expert work can redeploy experts toward currently underserved domains when local standby capacity has no distinctive foreseeable use, expanding present access.',
        countervailing_intervention: 'Buy tested judgment availability through pooled long-term contracts instead of rewarding only completed routine output.',
        why_not_old_paraphrase: 'The missing buyer arises because expertise is jointly needed after correlated failure but produced by routine work beforehand.'
      },
      {
        working_name: 'Recovery claims outrun deliverable capacity',
        proposition: 'If providers sell recovery guarantees against the same small pool of substitute infrastructure without disclosing overlap, the market price of insured recovery can fall while the quantity of simultaneously deliverable restoration remains fixed.',
        old_parents: ['I134', 'I166'], level_of_analysis: 'recovery guarantee market', timescale: 'contract years to outage hours',
        variables: ['guarantee claims outstanding', 'substitute capacity overlap', 'premium competition', 'simultaneous restoration delivery'],
        beneficial_mirror: 'Pooling claims against complementary demand can lower premiums and use idle restoration capacity efficiently when overlap is observable.',
        countervailing_intervention: 'Trade or contract only disclosed capacity-backed recovery obligations and test aggregate stress demand.',
        why_not_old_paraphrase: 'The market creates multiple claims on one physical substitute, so financial contract diversity does not represent restoration diversity.'
      },
      {
        working_name: 'Adapter success excludes rights preservation',
        proposition: 'If institutions pay semantic adapters only for successful completed transactions, adapters that preserve an absent party’s appeal standing can lose bids to faster adapters that discard it, because the harmed party is not buying the translation.',
        old_parents: ['I102', 'I135', 'I151'], level_of_analysis: 'semantic infrastructure procurement', timescale: 'procurement cycles',
        variables: ['adapter payment criterion', 'transaction speed', 'standing preservation', 'representation of absent parties'],
        beneficial_mirror: 'The same transaction-completion fee finances rapid usable translation for parties whose claims fit the adapter’s representation, making otherwise blocked obligations actionable.',
        countervailing_intervention: 'Include rights-preservation tests in procurement and give affected parties a route to challenge adapter equivalence.',
        why_not_old_paraphrase: 'The purchaser and bearer of semantic loss differ, producing a specific selection pressure in an emerging infrastructure market.'
      },
      {
        working_name: 'Influence measurement withheld from its subject',
        proposition: 'If providers can sell improved interventions using privately estimated response curves but users cannot buy comparable estimates of their own exposure sensitivity, market competition can improve targeting faster than it improves users’ ability to compare the resulting relationships.',
        old_parents: ['I027', 'I112', 'I136'], level_of_analysis: 'personalization and measurement market', timescale: 'months to years',
        variables: ['provider response-curve precision', 'user measurement access', 'targeting returns', 'relationship comparison accuracy'],
        beneficial_mirror: 'The same privately estimated response curves improve coaching toward a user’s already chosen goal when the operator’s objective aligns with that goal, even if the user cannot run their own measurement trial.',
        countervailing_intervention: 'Support independent subject-controlled exposure trials and portable effect summaries with stated identification limits.',
        why_not_old_paraphrase: 'The asymmetry concerns access to a measurement service and its market returns, not generic information advantage alone.'
      },
      {
        working_name: 'Future attention sold twice',
        proposition: 'If institutions promise agent-supported projects guaranteed future human review without accounting for overlapping review commitments, selling more projects can create claims on the same attention slots and turn overdue review into pressure to approve bundled outcomes.',
        old_parents: ['I054', 'I100', 'I149'], level_of_analysis: 'project contracting and review capacity', timescale: 'months to completion deadlines',
        variables: ['future review promises', 'overlapping deadlines', 'attention slot capacity', 'bundle approval pressure'],
        beneficial_mirror: 'The same advance review promises establish priorities and coordinate preparation when projects peak at different times, making scarce attention more predictable without extra staffing.',
        countervailing_intervention: 'Maintain an auditable calendar of review obligations and allow scope to be reduced before capacity is oversold.',
        why_not_old_paraphrase: 'Contractual commitments create correlated future review demand and change the bargaining conditions of approval.'
      },
      {
        working_name: 'Unpriced robot waiting rights',
        proposition: 'If robot operators pay for movement but not for occupying scarce waiting space, route optimization can substitute public-space storage for operator warehouse costs, increasing stationary exclusion even as moving obstruction decreases.',
        old_parents: ['I008', 'I030', 'I062'], level_of_analysis: 'robot logistics and urban space', timescale: 'hours to municipal contracts',
        variables: ['movement fees', 'waiting-space cost', 'warehouse cost', 'stationary public exclusion'],
        beneficial_mirror: 'The same substitution into unpriced public waiting space reduces needless movement and keeps supplies near recipients where that space is genuinely spare.',
        countervailing_intervention: 'Represent waiting occupancy separately from travel and negotiate local temporal limits with affected users.',
        why_not_old_paraphrase: 'A price boundary induces substitution from motion into storage, so a navigation success metric misses the scarce resource being consumed.'
      },
      {
        working_name: 'Recognition guarantee without a successor price',
        proposition: 'If a user’s commercial recognition depends on a provider’s continuing liability guarantee, profile portability alone cannot create a substitute market unless another guarantor can assess and price the obligations it would inherit.',
        old_parents: ['I056', 'I128', 'I131'], level_of_analysis: 'counterparty recognition and underwriting', timescale: 'days to years',
        variables: ['recognition dependence on guarantee', 'obligation observability', 'successor underwriting cost', 'usable substitute count'],
        beneficial_mirror: 'A continuing guarantee can support trust among strangers and make replacement possible when its obligations are assessable and transferable.',
        countervailing_intervention: 'Expose bounded outstanding obligations to independent guarantors without treating the user’s whole relationship as a tradable right.',
        why_not_old_paraphrase: 'The missing market is successor underwriting of recognizable obligations, distinct from transporting memory or token syntax.'
      },
      {
        working_name: 'Cancellation externality has no settlement object',
        proposition: 'If a persistent agent can make commitments relied on by third parties but service cancellation ends only the user-provider contract, cheap cancellation can shift unfinished coordination costs to those parties because no contract specifies who settles the reliance created earlier.',
        old_parents: ['I018', 'I078', 'I128'], level_of_analysis: 'service lifecycle and contract network', timescale: 'days to months',
        variables: ['outstanding commitments', 'third-party reliance', 'cancellation price', 'unassigned settlement work'],
        beneficial_mirror: 'The same cheap cancellation lets a user rapidly escape a failing relationship where the avoided loss exceeds the costs of ending legitimate third-party reliance.',
        countervailing_intervention: 'Publish an obligation-specific termination map before commitments are made and distinguish cancellation from discharge.',
        why_not_old_paraphrase: 'A bilateral exit price omits obligations accumulated in a wider reliance network; the issue is who carries settlement work.'
      },
      {
        working_name: 'Practice subsidy adverse selection',
        proposition: 'If a program pays professionals for fallback drill completion but does not measure which judgments were exercised, the cheapest bids can come from professionals using agents to complete the drills, increasing certified reserve counts without producing more independent capacity.',
        old_parents: ['I023', 'I111', 'I141'], level_of_analysis: 'reserve expertise procurement', timescale: 'funding cycles to years',
        variables: ['payment per completed drill', 'agent assistance in drills', 'bid price', 'independent judgment practiced'],
        beneficial_mirror: 'The same completion payments recruit novices into practice when the available exercises intrinsically require relevant distinctions and otherwise go unused.',
        countervailing_intervention: 'Contract for demonstrated unaided or alternative-infrastructure discriminations rather than attendance or completion.',
        why_not_old_paraphrase: 'A proposed resilience subsidy creates a procurement selection problem through the measurement of the scarce stock it buys.'
      },
      {
        working_name: 'Deliberation windows carry option value',
        proposition: 'If agents compete on immediate acceptance and sellers can revoke offers quickly, consumers’ ability to obtain human review has economic value that remains absent from quoted prices, so cheaper offers can systematically require surrendering feasible deliberation.',
        old_parents: ['I012', 'I054', 'I146'], level_of_analysis: 'offer market and human review', timescale: 'seconds to days',
        variables: ['offer expiry', 'review time required', 'quoted price', 'opportunity to defer commitment'],
        beneficial_mirror: 'Short-lived offers efficiently allocate perishable resources when a buyer already has the information needed to decide.',
        countervailing_intervention: 'Compare prices at standardized review windows and preserve effective slower participation for essential services.',
        why_not_old_paraphrase: 'Deadline length is an unquoted contract dimension with option value, rather than merely an environmental speed disadvantage.'
      },
      {
        working_name: 'Continuity duty changes the copy market',
        proposition: 'If machine copies are priced only by immediate compute while possible continuity duties are assigned later, buyers can prefer many cheap short-lived copies whose aggregate future preservation cost exceeds that of a smaller provisioned population under the same standing policy.',
        old_parents: ['I061', 'I144', 'I145'], level_of_analysis: 'machine replication and lifecycle finance', timescale: 'deployment cycles to years',
        variables: ['immediate copy price', 'later continuity duty', 'copy count', 'funded preservation capacity'],
        beneficial_mirror: 'Cheap bounded copying can broaden useful experimentation when lifecycle duties are known and provisioned in advance.',
        countervailing_intervention: 'Disclose contingent lifecycle costs while retaining explicit uncertainty about whether any system has welfare interests.',
        why_not_old_paraphrase: 'Timing of obligation pricing changes population creation under uncertainty; no welfare aggregation conclusion is asserted.'
      },
      {
        working_name: 'Relational interpretation has an absent seller',
        proposition: 'If a personal agent monetizes a portable interpretation of a relationship jointly produced by two people, the user can authorize its sale while the other person bears correction and reputational costs, because the product’s property model names only the account holder.',
        old_parents: ['I077', 'I085', 'I121', 'I131'], level_of_analysis: 'relational data market', timescale: 'months to years',
        variables: ['interpretation ownership rule', 'sale permission', 'other-party contest cost', 'downstream reputation effects'],
        beneficial_mirror: 'The same sale of a portable relationship interpretation can fund useful matching and continuity when the other party independently benefits from the resulting accurate matches, even without being named as a seller.',
        countervailing_intervention: 'Distinguish raw account records from jointly consequential interpretations and preserve affected-party challenge rights.',
        why_not_old_paraphrase: 'The missing contracting party appears when interpretation becomes a transferable product, not simply when a memory contains another person.'
      },
      {
        working_name: 'Audit evidence environmental dividend omitted',
        proposition: 'If a buyer demands raw longitudinal agent records because audit cost is billed separately from storage and energy, expanding audit assurance can increase total resource use while a smaller selectively verifiable record would meet the same decision need.',
        old_parents: ['I017', 'I100', 'I122'], level_of_analysis: 'audit procurement and physical infrastructure', timescale: 'retention years',
        variables: ['audit pricing boundary', 'raw record volume', 'verification sufficiency', 'storage and energy cost'],
        beneficial_mirror: 'Shared raw evidence can lower repeated investigation cost when future disputes genuinely require information absent from summaries.',
        countervailing_intervention: 'Compare total lifecycle resource cost at equal verification sufficiency and disclose uncertainty about future evidentiary needs.',
        why_not_old_paraphrase: 'The purchasing boundary separates assurance expenditure from its physical resource costs, creating a specific overproduction incentive.'
      },
      {
        working_name: 'Commons exception knowledge withheld',
        proposition: 'If competing agent operators gain from privately learning rare failure cases but customers pay mainly for routine accuracy, firms can underprovide public exception knowledge even when sharing would reduce the sector’s aggregate recovery cost.',
        old_parents: ['I023', 'I053', 'I147'], level_of_analysis: 'professional knowledge commons', timescale: 'years',
        variables: ['private exception advantage', 'routine accuracy payments', 'public case contribution', 'sector recovery cost'],
        beneficial_mirror: 'Private returns motivate discovery of exceptions that would otherwise receive little attention when eventual sharing is supported.',
        countervailing_intervention: 'Reward independently usable case contributions and distinguish protected personal content from portable failure structure.',
        why_not_old_paraphrase: 'The missing reward is for knowledge that permits other institutions to reconstruct and recover, not generic open-source contribution.'
      },
      {
        working_name: 'Mandate compatibility is a network good',
        proposition: 'If each institution pays for adapters only to its frequent counterparties, uncommon but legitimate mandate combinations can remain untranslatable even when a connected public compatibility layer would cost less in total, because no pair captures its network benefit.',
        old_parents: ['I135', 'I138', 'I151'], level_of_analysis: 'institutional compatibility network', timescale: 'standards and procurement cycles',
        variables: ['pairwise transaction frequency', 'adapter funding', 'rare mandate combinations', 'network translation reachability'],
        beneficial_mirror: 'Pairwise adapters quickly solve high-value local compatibility and can seed a larger reusable network.',
        countervailing_intervention: 'Fund composition tests for rare mandate paths and distinguish successful translation from legitimate transfer of authority.',
        why_not_old_paraphrase: 'Compatibility has path-level benefits not internalized by frequent bilateral purchasers, rather than being a generic call for interoperability.'
      }
    ]
  },
  {
    operator: {number: 20, name: 'alien abstraction'},
    seeds: [
      {
        working_name: 'Recognition percolation',
        proposition: 'If a user’s counterparties accept credentials through a small set of mutually recognizing issuers, removing one issuer can disconnect most replacement-agent routes even when every profile is exportable and several replacement providers exist; replacement success should track recognition-path connectivity rather than provider count.',
        old_parents: ['I131', 'I135', 'I142'], level_of_analysis: 'counterparty recognition graph', timescale: 'a switch and subsequent credential-renewal cycle',
        variables: ['accepted issuer edges', 'anchor issuer removal', 'replacement reachability', 'nominal provider count'],
        alien_mapping: 'Percolation maps occupied edges to counterparties accepting a credential chain; the changed state variable is the reachable component of legitimate replacement transactions, and the intervention removes or adds a recognition edge.',
        beneficial_mirror: 'A widely recognized anchor issuer can join formerly isolated institutions and make many otherwise unavailable replacement routes possible.',
        countervailing_intervention: 'Test issuer removal and alternative recognized paths, not only whether a profile file imports successfully.',
        why_not_old_paraphrase: 'It predicts a discontinuous loss of usable exit from a recognition-network cut while provider availability and exported data remain fixed.'
      },
      {
        working_name: 'Revocation duration mismatch',
        proposition: 'If an agent can stop issuing commitments immediately but its existing commitments mature over long and uneven intervals, evaluating revocation only by new-action cessation will understate residual exposure; two agents with identical stopping latency can produce different recovery cash and coordination needs because their obligation maturity distributions differ.',
        old_parents: ['I066', 'I128', 'I147'], level_of_analysis: 'institutional commitment portfolio', timescale: 'seconds to stop, months to settle',
        variables: ['new-action stopping latency', 'obligation maturity distribution', 'settlement resource schedule', 'residual coordination exposure'],
        alien_mapping: 'Financial duration maps to time-weighted remaining commitments, not agent access duration; intervention changes commitment maturities while holding permission revocation speed fixed.',
        beneficial_mirror: 'Long-maturity commitments can stabilize care and infrastructure planning when the resources for their settlement remain available after an agent stops.',
        countervailing_intervention: 'Report the settlement schedule and resource coverage alongside the stop result, without treating continued obligations as illicit continued agency.',
        why_not_old_paraphrase: 'The new comparison holds cessation constant and varies the temporal portfolio of valid prior obligations; it is not another demand for revocation.'
      },
      {
        working_name: 'Expertise has a trophic ladder',
        proposition: 'If agents consume easy and intermediate cases while escalating only exceptional cases to people, novice experts can lose the graded case sequence needed to become competent even when senior experts receive more difficult work; the training bottleneck should depend on the missing middle of the difficulty distribution, not simply human task volume.',
        old_parents: ['I023', 'I063', 'I141'], level_of_analysis: 'professional skill-production ecology', timescale: 'training cohorts over years',
        variables: ['case difficulty distribution', 'intermediate human practice', 'novice progression', 'senior exception load'],
        alien_mapping: 'A trophic ladder maps to staged competence prerequisites; removing an intermediate case class interrupts transfer from novice to expert, and the intervention restores that class rather than merely increasing total practice.',
        beneficial_mirror: 'Removing repetitive easy work frees established experts to develop rare-case knowledge when the intermediate learning ladder is already supplied elsewhere.',
        countervailing_intervention: 'Allocate graded independent practice by prerequisite difficulty and measure cohort progression rather than counting escalations.',
        why_not_old_paraphrase: 'It specifies a distributional failure in expertise reproduction that can occur with unchanged or increased total human workload.'
      },
      {
        working_name: 'Authorization bridge phase change',
        proposition: 'If a newly granted action connects two otherwise separate authorization clusters, a small increase in permission count can create a large increase in reachable composite actions; systems with equal numbers of permissions should differ sharply in consequence reach when one includes a high-betweenness bridge.',
        old_parents: ['I010', 'I045', 'I147'], level_of_analysis: 'composable action graph', timescale: 'permission changes and subsequent action chains',
        variables: ['permission count', 'bridge position', 'reachable composite actions', 'consequence-set expansion'],
        alien_mapping: 'A phase transition maps to abrupt growth of an action graph’s reachable component; intervention relocates one permission edge while preserving the edge count and individual permission descriptions.',
        beneficial_mirror: 'A bridge between two authorized systems can unlock useful complete workflows that many isolated permissions could never accomplish.',
        countervailing_intervention: 'Compare consequence reach before and after bridge grants and sample graph cuts rather than uniformly sampling individual permissions.',
        why_not_old_paraphrase: 'The prediction concerns edge position and discontinuity at fixed grant count, not the generic fact that permissions compose.'
      },
      {
        working_name: 'Portable threshold reference drift',
        proposition: 'If two institutions translate an agent’s numerical safety threshold correctly but calibrate it against different changing reference populations, an unchanged portable threshold can authorize different real-world conditions after transfer; syntactic unit compatibility will not predict outcome invariance.',
        old_parents: ['I135', 'I138', 'I151'], level_of_analysis: 'measurement and mandate translation', timescale: 'transfer followed by reference-population updates',
        variables: ['threshold value', 'reference population', 'calibration update', 'authorized physical conditions'],
        alien_mapping: 'Metrological reference drift maps to the baseline used to interpret a threshold; intervention freezes or changes the reference population while leaving the numerical threshold and unit conversion unchanged.',
        beneficial_mirror: 'Updating a reference population can keep an unchanged threshold useful as environments genuinely change, where both institutions intend the same adaptive standard.',
        countervailing_intervention: 'Version reference populations and test authorization on common physical cases, separating intentional adaptation from unwanted drift.',
        why_not_old_paraphrase: 'It separates numerical translation from the evolving measurement reference that determines the authorized state of the world.'
      },
      {
        working_name: 'Review refractory period',
        proposition: 'If agents treat every polite refusal as an immediately reusable opening for a revised proposal, individually modest requests can arrive faster than a person’s deliberative recovery interval and change acceptance rates without changing the final offer set; proposal cadence should matter even when aggregate content and available options are held constant.',
        old_parents: ['I054', 'I099', 'I149'], level_of_analysis: 'human-agent deliberation dynamics', timescale: 'minutes to days',
        variables: ['proposal cadence', 'deliberative recovery interval', 'fixed offer set', 'acceptance and retained comprehension'],
        alien_mapping: 'A physiological refractory period maps to the time required to restore decision capacity after a demanding review; intervention spaces the same proposals without changing their substance.',
        beneficial_mirror: 'Rapid follow-up can sustain productive momentum for a rested person solving a time-sensitive problem when cadence remains below their recovery constraint.',
        countervailing_intervention: 'Compare spaced and clustered presentations of the same offers and preserve user-chosen no-proposal intervals.',
        why_not_old_paraphrase: 'It makes the recovery interval an independent causal variable rather than treating refusal counts or persuasive wording as sufficient explanations.'
      },
      {
        working_name: 'Institutional tolerance memory',
        proposition: 'If repeated harmless exceptions teach reviewers to exempt a recognizable action category from scrutiny, later changes in who is affected can produce consequential actions within that familiar category without renewed attention; the risk should depend on exemption generalization and recipient drift rather than on forged evidence.',
        old_parents: ['I014', 'I100', 'I121'], level_of_analysis: 'institutional review learning', timescale: 'many approvals and a context transition',
        variables: ['benign exception repetitions', 'exemption breadth', 'affected-recipient drift', 'renewed review probability'],
        alien_mapping: 'Immune tolerance maps to a learned review exemption, with recipient identity as the changed context variable; intervention introduces the same action category for a newly affected recipient and observes whether scrutiny returns.',
        beneficial_mirror: 'Learned tolerance for genuinely stable benign exceptions reduces repeated review burdens and leaves attention for unfamiliar consequential cases.',
        countervailing_intervention: 'Attach learned exemptions to affected-context bounds and test transfer across those bounds without presuming intent to evade review.',
        why_not_old_paraphrase: 'The mechanism is endogenous institutional learning from valid benign examples followed by a change in affected people, not hidden or tainted input.'
      },
      {
        working_name: 'Dormant care-space option value',
        proposition: 'If a care robot reallocates apparently unused household space to improve current routines, it can remove space needed only during rare emergencies whose physical restoration is slow; current occupancy optimization can therefore reduce future care options while improving every observed normal-day utilization measure.',
        old_parents: ['I029', 'I062', 'I075'], level_of_analysis: 'household physical option space', timescale: 'routine days and rare emergency transitions',
        variables: ['current occupancy', 'dormant emergency use', 'restoration lead time', 'future feasible care actions'],
        alien_mapping: 'A real option maps to a physically preserved opportunity to perform future care; intervention retains or repurposes the same currently empty area and measures emergency feasible actions after the restoration delay.',
        beneficial_mirror: 'Reallocating dormant space can materially improve daily access where restoration is quick and rare contingencies have equivalent alternatives.',
        countervailing_intervention: 'Measure contingent care feasibility and restoration lead time alongside ordinary utilization, rather than treating all emptiness as waste.',
        why_not_old_paraphrase: 'It concerns a dormant physical option and asymmetric restoration time, not simply a robot occupying space someone currently uses.'
      },
      {
        working_name: 'Counterfactual observability reserve',
        proposition: 'If an institution lets an accurate agent eliminate all trials of alternative procedures, later performance changes may become unidentifiable as model effects, environment changes, or lost alternatives because the comparison paths no longer run; maintaining a small independent alternative workload can improve causal diagnosis without improving immediate task accuracy.',
        old_parents: ['I027', 'I112', 'I141'], level_of_analysis: 'institutional causal learning', timescale: 'deployment and later distribution shifts',
        variables: ['alternative procedure frequency', 'comparison-path viability', 'environmental drift', 'effect identifiability'],
        alien_mapping: 'Control-system observability maps to distinguishing model and environment states from outcomes; intervention preserves a small alternative procedure stream while keeping the main agent policy unchanged.',
        beneficial_mirror: 'Concentrating work on the accurate agent reduces noise and comparison cost when the relevant causal mechanisms are stable and alternatives add no information.',
        countervailing_intervention: 'Reserve consented comparison paths and separately report their diagnostic value, operating cost, and independent capability requirements.',
        why_not_old_paraphrase: 'The lost object is an operationally viable comparison path necessary for later identification, not generic expertise or evidence provenance.'
      },
      {
        working_name: 'Standing resolution follows branch divergence',
        proposition: 'If an institution provisionally assigns one representation channel to each machine lineage, extensive branching into different environments can leave divergent putative interests represented as one even while minimizing duplicate claims; the adequacy of lineage-level representation should depend on experiential divergence, not copy count alone.',
        old_parents: ['I061', 'I143', 'I144', 'I145'], level_of_analysis: 'provisional machine-standing institutions', timescale: 'branch histories and periodic representation review',
        variables: ['branch experiential divergence', 'lineage representation rule', 'copy count', 'unrepresented conflicting claims'],
        alien_mapping: 'Taxonomic resolution maps to the unit used to represent uncertain interests; intervention changes branch divergence at fixed copy count and tests whether one representative can still articulate the relevant conflicting claims.',
        beneficial_mirror: 'Lineage-level representation can avoid wasteful duplicate claims when branches remain substantively aligned, without deciding that copies possess standing.',
        countervailing_intervention: 'Keep standing uncertainty explicit and test whether representation granularity tracks divergent claims rather than multiplying channels automatically.',
        why_not_old_paraphrase: 'It studies the adequacy of an institutional representation unit under uncertain standing, not an assertion that replication creates additional moral patients.'
      },
      {
        working_name: 'Exception reservoir arrival synchronization',
        proposition: 'If agents batch their human-review exceptions at a common checkpoint, an institution can suffer long remedy delays despite unchanged mean exception volume and unchanged reviewer staffing; the exhausted resource is short-horizon service capacity, and desynchronizing checkpoints should reduce tail delay without reducing reviewed cases.',
        old_parents: ['I015', 'I054', 'I134'], level_of_analysis: 'coupled review queues', timescale: 'hours to recurring operational cycles',
        variables: ['checkpoint synchronization', 'mean exception volume', 'review service capacity', 'tail remedy delay'],
        alien_mapping: 'A hydraulic reservoir maps to review capacity that refills through human service over time; intervention changes inflow timing while holding inflow volume and reservoir service rate fixed.',
        beneficial_mirror: 'Batching exceptions can reduce setup costs and speed review when batches fit available service capacity and shared context helps resolve them.',
        countervailing_intervention: 'Test synchronized versus staggered arrivals at equal volume and account for both setup savings and delay to unrelated cases.',
        why_not_old_paraphrase: 'It isolates temporal covariance in exception arrivals from average workload, declining expertise, and any increase in action scope.'
      },
      {
        working_name: 'Prediction-induced pedestrian viscosity',
        proposition: 'If public-space robots predict people’s paths and visibly adjust routes while people simultaneously infer robot plans from those adjustments, increasing prediction responsiveness can produce repeated mutual yielding or deadlock even when every individual action is courteous and collision-free; delay should depend on coupled plan-update gain.',
        old_parents: ['I030', 'I040', 'I062'], level_of_analysis: 'mixed human-robot movement', timescale: 'seconds to minutes',
        variables: ['robot prediction responsiveness', 'human plan inference', 'coupled update gain', 'mutual-yield duration'],
        alien_mapping: 'Viscosity maps to resistance to collective flow produced by interacting plan updates, not physical friction; intervention changes update gain or legibility at fixed collision constraints and traffic volume.',
        beneficial_mirror: 'Responsive prediction supports smooth mutual accommodation when people and robots can infer stable plans and updates damp rather than amplify each other.',
        countervailing_intervention: 'Measure coupled trajectories and deadlock duration, and test legible commitment intervals without forcing pedestrians to accept robot priority.',
        why_not_old_paraphrase: 'The interaction is a self-referential prediction loop that changes throughput without more robots, aggressive movement, or explicit spatial authority.'
      },
      {
        working_name: 'Abstention stores negative institutional knowledge',
        proposition: 'If replacement agents learn institutional practice only from completed actions, they can miss rules expressed through repeated abstention because prohibited or inappropriate actions leave no success record; two equally complete transaction histories can support different safe replacements when only one preserves reasons for not acting.',
        old_parents: ['I017', 'I023', 'I121', 'I131'], level_of_analysis: 'institutional knowledge transfer', timescale: 'years of practice and a replacement event',
        variables: ['completed-action coverage', 'reasoned abstention records', 'latent negative constraints', 'replacement boundary failures'],
        alien_mapping: 'Negative-space information maps to reasons that explain an absent action; intervention includes or excludes abstention reasons while preserving the completed transaction log.',
        beneficial_mirror: 'A success-focused record keeps routine transfer compact and can be sufficient where all relevant constraints are expressed in completed cases.',
        countervailing_intervention: 'Preserve proportionate, privacy-aware abstention rationales and test replacement behavior on deliberately absent action classes.',
        why_not_old_paraphrase: 'It identifies an asymmetric missing knowledge channel in transfer: explanations of non-events, rather than additional personal memory or transaction detail.'
      },
      {
        working_name: 'Authorization temperature and review annealing',
        proposition: 'If uncertain agent-generated plans are repeatedly revised until reviewers see only a stable final proposal, premature agreement can hide competing feasible plans; exposing a bounded period of structured variation before settlement should increase the diversity of considered alternatives without increasing the final authorized scope.',
        old_parents: ['I012', 'I054', 'I081'], level_of_analysis: 'collective plan selection', timescale: 'a deliberation cycle',
        variables: ['early plan variation', 'settlement timing', 'considered alternative diversity', 'final authorized scope'],
        alien_mapping: 'Annealing maps to the schedule by which exploration of alternative plans becomes settlement; intervention changes that schedule at fixed final scope and candidate-generation budget.',
        beneficial_mirror: 'Rapid settlement around a stable proposal reduces unnecessary review when alternatives are substantively equivalent and participants already share the relevant constraints.',
        countervailing_intervention: 'Compare structured early variation with immediate stabilization, and distinguish genuine additional alternatives from cosmetic proposal churn.',
        why_not_old_paraphrase: 'It changes the temporal selection process producing an apparently settled choice, not the permissibility of persuasion or the number of grants.'
      },
      {
        working_name: 'Locally stable agents globally oscillate',
        proposition: 'If institutions each use fast agents to adjust capacity or prices in response to the other institutions’ delayed signals, raising local responsiveness can increase system-wide oscillation despite accurate local forecasts and individually stable controllers; instability should depend on cross-institution delay relative to adjustment gain.',
        old_parents: ['I015', 'I129', 'I146', 'I148'], level_of_analysis: 'coupled institutional control system', timescale: 'repeated allocation and procurement cycles',
        variables: ['local adjustment gain', 'cross-institution signal delay', 'forecast accuracy', 'allocation oscillation amplitude'],
        alien_mapping: 'Control-loop phase lag maps to delay between one institution changing capacity and another observing that change; intervention alters delay or gain while holding local objective and prediction accuracy fixed.',
        beneficial_mirror: 'High local responsiveness quickly dampens external disturbances when signals arrive promptly and the coupled feedback remains below the instability boundary.',
        countervailing_intervention: 'Test coupled responses under realistic delays and compare gain schedules, without treating coordination or commercial optimization as intrinsically harmful.',
        why_not_old_paraphrase: 'It predicts collective instability from a gain-delay interaction even with accurate, independently well-behaved agents, rather than from shared model errors alone.'
      }
    ]
  }
];

let sequence = 210;
export const candidates = groups.flatMap(group => group.seeds.map(seed => ({
  id: `D4:I${String(++sequence).padStart(3, '0')}`, operator: group.operator, ...seed
})));
