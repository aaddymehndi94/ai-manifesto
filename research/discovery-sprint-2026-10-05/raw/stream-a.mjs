// Authored raw propositions for discovery G4; not scored, selected, or novelty-certified.
// IDs are internal sprint IDs. Known components are ancestry, not an originality verdict.
// Beneficial mirrors describe possible benefits of the same causal structure; safeguards are separate.
export const candidates = [
  {
    "id": "D4:I001",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Caregiver cue depletion",
    "proposition": "If an assistant handles routine deviations before a caregiver sees them, lower daily workload can reduce the caregiver's learned warning cues and thereby delay recognition of an unfamiliar emergency.",
    "old_parents": [
      "I029",
      "I039"
    ],
    "level_of_analysis": "care dyad",
    "timescale": "months to emergency",
    "variables": [
      "interception_rate",
      "caregiver_cue_exposure",
      "warning_recognition",
      "response_delay"
    ],
    "beneficial_mirror": "In low-risk convalescence, intercepting small deviations can reduce a caregiver's learned tendency to treat every variation as an emergency and prevent intrusive overreaction.",
    "why_not_old_paraphrase": "Extends continuity dependence through lost cue acquisition to emergency recognition, rather than record portability.",
    "countervailing_intervention": "Interception can protect an exhausted caregiver if preserved diagnostic encounters maintain warning recognition."
  },
  {
    "id": "D4:I002",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Repair visibility and reciprocity",
    "proposition": "If private assistants prevent partners from witnessing one another's repair attempts, reduced overt conflict can weaken knowledge of each other's repair capacities and make the next unmediated disagreement harder to resolve.",
    "old_parents": [
      "I034",
      "I123"
    ],
    "level_of_analysis": "relationship dyad",
    "timescale": "months",
    "variables": [
      "mediated_conflicts",
      "visible_repair_attempts",
      "repair_expectations",
      "unmediated_recovery"
    ],
    "beneficial_mirror": "When former repair routines were coercive rituals, preventing their repetition can weaken expectations that partners must endure those rituals to maintain the relationship.",
    "why_not_old_paraphrase": "Adds mutual knowledge of repair ability as the intervening state and unmediated recovery as outcome.",
    "countervailing_intervention": "Mediation can reveal effective repair styles when the system preserves both partners' visible contributions."
  },
  {
    "id": "D4:I003",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Expert explanations as training bottleneck",
    "proposition": "If agents replace novice casework but experts still repair exceptions, concentrating apprenticeship on expert explanations can make the supply of teachable reasoning, rather than task access, the limiting input to future expertise.",
    "old_parents": [
      "I023"
    ],
    "level_of_analysis": "professional training pipeline",
    "timescale": "years",
    "variables": [
      "novice_casework",
      "exception_load",
      "explanation_time",
      "expert_supply"
    ],
    "beneficial_mirror": "In a field with many repetitive novice cases, concentrating teaching on experts' exception explanations can transmit higher-value judgment than continued routine casework.",
    "why_not_old_paraphrase": "Changes the bottleneck from junior task disappearance to scarce expert explanation under exception load.",
    "countervailing_intervention": "Agents can expand apprenticeship when they preserve cases and let experts annotate reasoning once for many learners."
  },
  {
    "id": "D4:I004",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Accessible-use evidence disappears",
    "proposition": "If assistance bypasses an inaccessible public facility, fewer recorded access failures can cause the facility's maintenance budget to fall, increasing the cost of unaided use when assistance stops.",
    "old_parents": [
      "I062",
      "I125"
    ],
    "level_of_analysis": "public facility and users",
    "timescale": "annual budget cycles",
    "variables": [
      "bypass_use",
      "recorded_access_failures",
      "maintenance_budget",
      "unaided_access_cost"
    ],
    "beneficial_mirror": "If a facility was intrinsically exclusionary, bypass-driven budget withdrawal can redirect public resources from preserving it to providing genuinely accessible alternatives.",
    "why_not_old_paraphrase": "Adds an evidence-to-maintenance budget link after accommodation, predicting delayed loss of physical access.",
    "countervailing_intervention": "A bypass service can also register prevented failures so maintenance responds to hidden demand."
  },
  {
    "id": "D4:I005",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Translated commitments lose veto force",
    "proposition": "If a cooperative agent translates minority reasons into majority-compatible arguments, adoption can increase while the resulting agreement omits the minority's original conditions, weakening its ability to contest later implementation.",
    "old_parents": [
      "I085",
      "I088"
    ],
    "level_of_analysis": "cooperative agreement",
    "timescale": "agreement to implementation",
    "variables": [
      "translation_policy",
      "minority_conditions",
      "agreement_text",
      "later_contestation"
    ],
    "beneficial_mirror": "In a cooperative with mutually unintelligible doctrines, translation into shared reasons can permit action without requiring minorities to accept the majority's worldview.",
    "why_not_old_paraphrase": "Changes linguistic accommodation into a chain from reason translation to lost conditional commitments.",
    "countervailing_intervention": "Translation can broaden agreement if original conditions remain attached as enforceable qualifications."
  },
  {
    "id": "D4:I006",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Petition abundance changes proof burdens",
    "proposition": "If cheap agent-written petitions cause an agency to raise documentary thresholds, citizens whose problems lack digitized evidence can lose access even when their own petition-writing ability improves.",
    "old_parents": [
      "I031",
      "I149"
    ],
    "level_of_analysis": "public administration",
    "timescale": "months to years",
    "variables": [
      "petition_arrivals",
      "documentary_threshold",
      "evidence_digitization",
      "case_access"
    ],
    "beneficial_mirror": "Where easy petitions previously dominated attention, higher documentary thresholds can redirect scarce review toward substantiated claims of serious harm.",
    "why_not_old_paraphrase": "Adds adaptive institutional proof requirements between cheap civic expression and unequal case access.",
    "countervailing_intervention": "Additional petitions can fund triage capacity and lower thresholds if workload is recognized as unmet demand."
  },
  {
    "id": "D4:I007",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Agricultural sensing displaces seasonal interpretation",
    "proposition": "If automated farm advice removes occasions for farmers to compare bodily and ecological cues with forecasts, communities can lose the ability to interpret unfamiliar seasons before their sensor network becomes inaccurate.",
    "old_parents": [
      "I053"
    ],
    "level_of_analysis": "farming community",
    "timescale": "several growing seasons",
    "variables": [
      "automated_advice",
      "cue_comparison_practice",
      "seasonal_interpretation",
      "sensor_error"
    ],
    "beneficial_mirror": "When inherited seasonal interpretations systematically exclude newcomers' observations, their weakening can create room for a more shared and revisable ecological account.",
    "why_not_old_paraphrase": "Moves reserve capacity into ecological interpretation and predicts failure before an explicit infrastructure outage.",
    "countervailing_intervention": "Automated advice can preserve local interpretation by recording farmers' anticipatory judgments alongside sensor forecasts."
  },
  {
    "id": "D4:I008",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Routine estates postpone kin negotiation",
    "proposition": "If a deceased person's agent settles small estate tasks continuously, survivors can avoid negotiations that previously revealed reciprocal obligations, leaving fewer usable mutual-aid relationships when a large unanticipated need arises.",
    "old_parents": [
      "I026",
      "I038"
    ],
    "level_of_analysis": "kin network",
    "timescale": "years after death",
    "variables": [
      "automated_estate_tasks",
      "kin_negotiations",
      "revealed_obligations",
      "mutual_aid"
    ],
    "beneficial_mirror": "In families where estate negotiations reproduce coercive obligations, routine automated settlement can reduce the occasions on which those obligations are imposed.",
    "why_not_old_paraphrase": "Adds obligation discovery and later mutual aid to persistent posthumous action.",
    "countervailing_intervention": "Routine settlement can create space for intentional kin deliberation rather than forcing it through administrative friction."
  },
  {
    "id": "D4:I009",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Dispatch efficiency erodes local initiative",
    "proposition": "If emergency dispatch agents routinely assign every nearby helper a task, residents can lose practice in initiating aid without instructions, slowing collective response when communications fail but people remain present.",
    "old_parents": [
      "I039",
      "I053"
    ],
    "level_of_analysis": "local emergency network",
    "timescale": "years then minutes",
    "variables": [
      "central_assignments",
      "unscripted_aid_practice",
      "communications_state",
      "response_onset"
    ],
    "beneficial_mirror": "Where unscripted helpers repeatedly obstruct specialist response, instruction-centered dispatch can reduce dangerous improvisation and improve reliable coordination.",
    "why_not_old_paraphrase": "Extends organizational takeover loss to decentralized initiation under communication failure.",
    "countervailing_intervention": "Dispatch can train initiative by deliberately rotating responsibility for defining the first response."
  },
  {
    "id": "D4:I010",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Attribution freezes artistic exploration",
    "proposition": "If agent suggestions make an artist's work appear unusually consistent, audience expectations can reward continuation of that inferred style and discourage experiments the artist would otherwise choose.",
    "old_parents": [
      "I042"
    ],
    "level_of_analysis": "artist and audience",
    "timescale": "several releases",
    "variables": [
      "suggestion_consistency",
      "audience_style_expectations",
      "reward_schedule",
      "artist_exploration"
    ],
    "beneficial_mirror": "For an artist seeking to establish a durable style, audience expectations reinforced by assistance can sustain commitment through periods of distracting novelty.",
    "why_not_old_paraphrase": "Adds an audience-mediated feedback after distributed authorship rather than only assigning credit.",
    "countervailing_intervention": "Stable attribution can finance exploration when audiences distinguish the artist's experiments from the assistant's defaults."
  },
  {
    "id": "D4:I011",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Child models restrict maturation opportunities",
    "proposition": "If schools use an assistant's childhood profile to assign developmental tasks, a persistently cautious profile can reduce occasions to demonstrate new independence and therefore outlive the behavior that created it.",
    "old_parents": [
      "I124",
      "I153"
    ],
    "level_of_analysis": "child and school",
    "timescale": "developmental years",
    "variables": [
      "profile_caution",
      "task_assignment",
      "independence_opportunities",
      "profile_revision"
    ],
    "beneficial_mirror": "For a child recovering from overwhelming demands, a cautious profile can preserve a manageable task environment while confidence develops.",
    "why_not_old_paraphrase": "Adds task-opportunity restriction as the mechanism keeping an obsolete developmental profile credible.",
    "countervailing_intervention": "A childhood profile can support maturation when schools include independent challenge opportunities in its revision process."
  },
  {
    "id": "D4:I012",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Rich records crowd out bodily testimony",
    "proposition": "If highly detailed agent care records become the default account transferred between clinics, new symptoms absent from the record can receive less attention even when the patient reports them accurately.",
    "old_parents": [
      "I029"
    ],
    "level_of_analysis": "patient across care institutions",
    "timescale": "care transitions",
    "variables": [
      "record_detail",
      "default_record_use",
      "unrecorded_symptoms",
      "testimony_attention"
    ],
    "beneficial_mirror": "When an emergency transfer occurs with poor oral communication, a detailed default record can prevent essential historical facts from being displaced by the most recent concern.",
    "why_not_old_paraphrase": "Changes continuity dependence into competition between accurate historical detail and current unrecorded evidence.",
    "countervailing_intervention": "Detailed records can help clinicians notice change when an explicit discrepancy channel prioritizes new bodily testimony."
  },
  {
    "id": "D4:I013",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Saved time extends responsiveness into sleep",
    "proposition": "If employers convert agent-generated time savings into longer expected response windows, stable daytime productivity can conceal a rise in interrupted recovery time and delayed errors.",
    "old_parents": [
      "I019",
      "I122"
    ],
    "level_of_analysis": "workplace and worker body",
    "timescale": "weeks to months",
    "variables": [
      "task_time_saved",
      "response_window",
      "recovery_interruptions",
      "delayed_errors"
    ],
    "beneficial_mirror": "During a bounded seasonal rush, expanded response availability made possible by saved time can keep a small organization functioning through an otherwise unmanageable coordination surge.",
    "why_not_old_paraphrase": "Adds employer adaptation and bodily recovery after task automation instead of supervision burden alone.",
    "countervailing_intervention": "Time savings can improve recovery if contracts reserve the saved interval rather than expanding availability."
  },
  {
    "id": "D4:I014",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Deletion changes retrospective credibility",
    "proposition": "If a person's agent deletes contested memories but institutions retain decisions derived from them, later attempts to explain those decisions can make the person's changed account appear less credible precisely because the originating evidence is gone.",
    "old_parents": [
      "I005",
      "I121"
    ],
    "level_of_analysis": "person and record-holding institutions",
    "timescale": "months to years",
    "variables": [
      "memory_deletion",
      "derived_decisions",
      "explanation_availability",
      "speaker_credibility"
    ],
    "beneficial_mirror": "When old records repeatedly pathologize a person's changed identity, deletion can weaken institutions' ability to claim that their earlier interpretations remain authoritative.",
    "why_not_old_paraphrase": "Adds an asymmetry between deletion rights and institutional credibility after derived decisions persist.",
    "countervailing_intervention": "Deletion can preserve revision when downstream decisions retain a contestable statement of their evidentiary basis."
  },
  {
    "id": "D4:I015",
    "operator": {
      "number": 1,
      "name": "causal-chain extension"
    },
    "working_name": "Meal matching reshapes the available baseline",
    "proposition": "If household agents repeatedly select similar meals, local sellers can narrow inventory toward those choices, making later preference-matching success partly a result of removed alternatives rather than improved prediction.",
    "old_parents": [
      "I011",
      "I021"
    ],
    "level_of_analysis": "households and local market",
    "timescale": "months",
    "variables": [
      "meal_matching",
      "aggregate_orders",
      "inventory_diversity",
      "measured_prediction_success"
    ],
    "beneficial_mirror": "In a food desert, convergent household orders can make a useful staple commercially viable and establish an inventory baseline that previously did not exist.",
    "why_not_old_paraphrase": "Extends personalization through supply adaptation back into the option set used to judge matching.",
    "countervailing_intervention": "Aggregated meal planning can sustain niche inventory when agents reserve demand for exploratory alternatives."
  },
  {
    "id": "D4:I016",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Dissent infrastructure contraction",
    "proposition": "If a deliberation agent reduces visible disagreement and officials shrink dissent-handling resources in response, the resulting difficulty of objecting can further increase apparent consensus.",
    "old_parents": [
      "I133",
      "I149"
    ],
    "level_of_analysis": "public institution",
    "timescale": "budget cycles",
    "variables": [
      "visible_disagreement",
      "dissent_resources",
      "objection_cost",
      "apparent_consensus"
    ],
    "beneficial_mirror": "If visible disagreement mainly reflects repetitive harassment, contraction of the infrastructure serving that harassment can further reduce it and protect deliberation.",
    "why_not_old_paraphrase": "Closes a loop through institutional objection capacity, not only individual silence or preference prediction.",
    "countervailing_intervention": "Lower disagreement can free resources for more accessible dissent channels rather than remove them."
  },
  {
    "id": "D4:I017",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Avoidance assistance stabilizes perceived fragility",
    "proposition": "If a support agent avoids situations that distress a user and uses reduced participation as evidence of fragility, increasingly protective assistance can sustain the participation deficit it interprets as need.",
    "old_parents": [
      "I002",
      "I092"
    ],
    "level_of_analysis": "person and support service",
    "timescale": "months",
    "variables": [
      "avoidance_policy",
      "participation",
      "fragility_estimate",
      "support_intensity"
    ],
    "beneficial_mirror": "During temporary recovery from severe overload, protective avoidance can sustain a period of reduced participation that is itself necessary for rest.",
    "why_not_old_paraphrase": "Closes support allocation through participation evidence without requiring errors or payment-permission growth.",
    "countervailing_intervention": "Protected withdrawal can enable recovery when the user controls graded re-entry opportunities."
  },
  {
    "id": "D4:I018",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Tutor difficulty sets its own competence target",
    "proposition": "If a tutor chooses easier tasks after detecting difficulty and future competence estimates use only completed tasks, apparent mastery can rise while harder-task practice falls, reinforcing assignment of easier tasks.",
    "old_parents": [
      "I001",
      "I063"
    ],
    "level_of_analysis": "learner and tutor",
    "timescale": "semester",
    "variables": [
      "task_difficulty",
      "completion_score",
      "hard_task_practice",
      "next_assignment"
    ],
    "beneficial_mirror": "For a learner rebuilding confidence, easy-task success can reinforce continued participation and preserve practice that repeated failure would have ended.",
    "why_not_old_paraphrase": "Makes task selection part of the competence loop rather than treating transfer failure as a static outcome.",
    "countervailing_intervention": "Adaptive difficulty can support mastery when independent challenge probes prevent the task distribution from defining competence."
  },
  {
    "id": "D4:I019",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Translation dependence changes listener effort",
    "proposition": "If reliable live translation reduces listeners' efforts to learn a speaker's patterns, untranslated exchanges can become harder and induce still more translation use despite unchanged speaker ability.",
    "old_parents": [
      "I040"
    ],
    "level_of_analysis": "language dyad or group",
    "timescale": "years",
    "variables": [
      "translation_use",
      "listener_adaptation",
      "untranslated_difficulty",
      "translation_demand"
    ],
    "beneficial_mirror": "When a minority language community should not have to assimilate, translation dependence can permit lasting relationships without obliging speakers to converge on listeners' language.",
    "why_not_old_paraphrase": "Locates the declining capability in counterparties rather than the assisted person.",
    "countervailing_intervention": "Translation can broaden relationships when listeners receive opportunities to learn recurring expressions."
  },
  {
    "id": "D4:I020",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Agent filing becomes an institutional entry norm",
    "proposition": "If agencies interpret widespread agent-assisted filing as proof that complex forms are manageable, they can add procedural detail that makes unaided filing rarer and thereby strengthens the original inference.",
    "old_parents": [
      "I125",
      "I152"
    ],
    "level_of_analysis": "agency and public",
    "timescale": "years",
    "variables": [
      "assisted_filing_share",
      "form_complexity",
      "unaided_completion",
      "manageability_belief"
    ],
    "beneficial_mirror": "When old forms omit essential safeguards, adoption can support richer procedures that previously exceeded ordinary clerical capacity.",
    "why_not_old_paraphrase": "Closes procedural complexity through a selected population of successful assisted users.",
    "countervailing_intervention": "Complex filing can become more inclusive if assisted completion is separated from unaided usability evidence."
  },
  {
    "id": "D4:I021",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Recommendations finance their future canon",
    "proposition": "If cultural institutions acquire works popularized by common recommendation agents, future models trained on those collections can reproduce the earlier recommendations as established cultural importance.",
    "old_parents": [
      "I139"
    ],
    "level_of_analysis": "cultural institution network",
    "timescale": "decades",
    "variables": [
      "recommendations",
      "acquisitions",
      "training_corpus",
      "canon_weight"
    ],
    "beneficial_mirror": "For neglected cultural traditions, recommendation-driven acquisitions can seed training corpora that make their works persistently visible.",
    "why_not_old_paraphrase": "Adds collection formation and model retraining to procedural convergence.",
    "countervailing_intervention": "Recommendations can recover neglected works if acquisition policies preserve disagreement and historical provenance."
  },
  {
    "id": "D4:I022",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Scientific sensors make their hypothesis ordinary",
    "proposition": "If AI-prioritized hypotheses determine instrument placement, the resulting data can overrepresent the predicted phenomenon and attract funding for still more instruments in the same conditions.",
    "old_parents": [],
    "level_of_analysis": "research field",
    "timescale": "funding cycles",
    "variables": [
      "hypothesis_priority",
      "instrument_placement",
      "observed_frequency",
      "instrument_funding"
    ],
    "beneficial_mirror": "A weakly observed but real phenomenon can gain the instrument density needed to become scientifically legible through the same funding feedback.",
    "why_not_old_paraphrase": "Closes scientific priority through measurement geography and resource allocation.",
    "countervailing_intervention": "Targeted instruments can accelerate discovery when exposure denominators and disconfirming regions are preserved."
  },
  {
    "id": "D4:I023",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Scheduled care reclassifies spontaneous need",
    "proposition": "If an assistant organizes care into predictable slots, caregivers can treat needs outside those slots as unusual and reduce unscheduled availability, increasing the user's reliance on scheduled care.",
    "old_parents": [
      "I029"
    ],
    "level_of_analysis": "care network",
    "timescale": "months",
    "variables": [
      "scheduled_care",
      "unscheduled_need_labels",
      "informal_availability",
      "schedule_dependence"
    ],
    "beneficial_mirror": "For a care recipient distressed by unpredictable help, shared acceptance of scheduled need can produce stable availability and reduce uncertainty.",
    "why_not_old_paraphrase": "Adds social reclassification of need as the return path maintaining coordination dependence.",
    "countervailing_intervention": "Predictable slots can protect caregivers if they also preserve capacity for genuinely unscheduled need."
  },
  {
    "id": "D4:I024",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Robot accommodation earns further accommodation",
    "proposition": "If a city redesigns paths for robots and judges robot benefit using performance on those paths, the measured benefit can justify further redesign while unaided alternatives contract.",
    "old_parents": [
      "I030",
      "I062"
    ],
    "level_of_analysis": "urban circulation system",
    "timescale": "planning cycles",
    "variables": [
      "robot_path_redesign",
      "measured_robot_benefit",
      "redesign_budget",
      "unaided_routes"
    ],
    "beneficial_mirror": "Initial robot accommodation can increase measured benefits enough to finance infrastructure also used by people needing smoother and wider routes.",
    "why_not_old_paraphrase": "Closes environmental adaptation through endogenous deployment-benefit evaluation.",
    "countervailing_intervention": "Initial accommodation can improve everyone's access if evaluation includes paths and users outside the redesigned corridor."
  },
  {
    "id": "D4:I025",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Companion use removes human friction practice",
    "proposition": "If patient companions absorb difficult conversations, reduced practice with reciprocal human limits can make human relationships less satisfying and increase subsequent companion use.",
    "old_parents": [
      "I016",
      "I123"
    ],
    "level_of_analysis": "personal relationship network",
    "timescale": "years",
    "variables": [
      "companion_use",
      "reciprocal_practice",
      "human_relationship_satisfaction",
      "future_use"
    ],
    "beneficial_mirror": "For people leaving abusive human relationships, repeated positive companion interaction can raise expectations of patience and make returning to harmful relationships less attractive.",
    "why_not_old_paraphrase": "Closes the old response-tolerance prediction into a demand loop with relationship practice.",
    "countervailing_intervention": "A companion can improve relationships by preparing the user for reciprocal conversations rather than replacing them."
  },
  {
    "id": "D4:I026",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Expert consensus becomes recycled evidence",
    "proposition": "If experts increasingly adopt agent conclusions without independent reconstruction, later models trained on their publications can treat copied conclusions as multiple confirmations and encourage further deference.",
    "old_parents": [
      "I105",
      "I148"
    ],
    "level_of_analysis": "expert epistemic network",
    "timescale": "publication cycles",
    "variables": [
      "agent_conclusions",
      "independent_reconstruction",
      "publication_reuse",
      "inferred_confirmation"
    ],
    "beneficial_mirror": "When an accurate expert result is difficult to rediscover, repeated publication can preserve it across institutions and reduce needless reconstruction.",
    "why_not_old_paraphrase": "Adds human publication as an evidence multiplier between agent advice and later confidence.",
    "countervailing_intervention": "Shared conclusions can reduce duplication if independent derivations remain identifiable and valued."
  },
  {
    "id": "D4:I027",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Funded services manufacture popularity",
    "proposition": "If civic agents rank needs using service-use data, funded services can gain use simply by becoming available, raising their priority while unfunded needs remain unobserved.",
    "old_parents": [
      "I031"
    ],
    "level_of_analysis": "municipal allocation",
    "timescale": "budget cycles",
    "variables": [
      "funding",
      "availability",
      "service_use",
      "need_priority"
    ],
    "beneficial_mirror": "A genuinely valuable but unfamiliar public service can acquire use after funding, and that use can secure the resources needed for lasting access.",
    "why_not_old_paraphrase": "Closes service availability into apparent need rather than treating expressed preference as exogenous.",
    "countervailing_intervention": "Use data can improve allocation when unmet demand and service absence are modeled separately."
  },
  {
    "id": "D4:I028",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Resolution records displace accountable relationships",
    "proposition": "If automated dispute resolution counts cases as closed without preserving who repaired the relationship, institutions can stop supporting accountable human roles and become more dependent on formal case closure.",
    "old_parents": [
      "I034",
      "I035"
    ],
    "level_of_analysis": "community dispute institution",
    "timescale": "years",
    "variables": [
      "automated_closure",
      "visible_repair_roles",
      "role_support",
      "formal_resolution_share"
    ],
    "beneficial_mirror": "When informal repair roles enforce discriminatory obligations, their displacement by explicit case resolution can weaken local coercive authority.",
    "why_not_old_paraphrase": "Adds maintenance of social accountability roles as a feedback state.",
    "countervailing_intervention": "Automated closure can strengthen accountability when named repair commitments survive the closed case."
  },
  {
    "id": "D4:I029",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Volunteer assignment reproduces scarce skills",
    "proposition": "If nonprofit agents allocate tasks only to currently proficient volunteers, those volunteers can receive all practice while novices remain unqualified, producing increasingly concentrated dependence on a shrinking expert pool.",
    "old_parents": [
      "I053"
    ],
    "level_of_analysis": "nonprofit volunteer pool",
    "timescale": "years",
    "variables": [
      "assignment_policy",
      "practice_distribution",
      "qualification_distribution",
      "expert_dependence"
    ],
    "beneficial_mirror": "In a time-critical campaign, concentration of practice in a few volunteers can build reliable specialist capacity faster than broad novice rotation.",
    "why_not_old_paraphrase": "Closes skill-based allocation through opportunities to acquire the same skills.",
    "countervailing_intervention": "Proficiency matching can grow reserve capacity when some assignments intentionally create new qualified volunteers."
  },
  {
    "id": "D4:I030",
    "operator": {
      "number": 2,
      "name": "feedback closure"
    },
    "working_name": "Reliable emergency automation suppresses drills",
    "proposition": "If reliable automated emergency handling reduces institutional demand for manual drills, slower manual response can later make continued automation appear indispensable even before reliability changes.",
    "old_parents": [
      "I039",
      "I134"
    ],
    "level_of_analysis": "emergency institution",
    "timescale": "years",
    "variables": [
      "automation_success",
      "manual_drill_frequency",
      "manual_response",
      "indispensability_estimate"
    ],
    "beneficial_mirror": "When manual drills themselves carry substantial disruption, reliable automation and declining demand for drills can release resources for other urgent community needs.",
    "why_not_old_paraphrase": "Closes demonstrated reliability through a policy decision that degrades the comparator.",
    "countervailing_intervention": "Automation can create drill time if freed resources are retained for rehearsal."
  },
  {
    "id": "D4:I031",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Representation updates outrun standing",
    "proposition": "If community preference models change faster than the process authorizing representatives, a current model can steer decisions under a representative's still-valid but substantively outdated mandate.",
    "old_parents": [
      "I050",
      "I085"
    ],
    "level_of_analysis": "community representation",
    "timescale": "days versus election cycles",
    "variables": [
      "model_revision_rate",
      "standing_renewal_rate",
      "mandate_age",
      "decision_alignment"
    ],
    "beneficial_mirror": "Slow renewal of representative standing can protect a community from immediate reversal when rapidly changing models amplify a temporary fashion.",
    "why_not_old_paraphrase": "Separates evolving represented preferences from slower renewal of representative standing.",
    "countervailing_intervention": "Fast models can alert representatives to changes and trigger timely deliberation."
  },
  {
    "id": "D4:I032",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Fast correction preempts bodily learning",
    "proposition": "If an assistant removes movement errors before the feedback used by a slower bodily learner arrives, increasing supported practice can teach reliance on corrections the person cannot initiate, so unaided performance can worsen even as strength and total practice increase.",
    "old_parents": [
      "I001",
      "I063"
    ],
    "level_of_analysis": "coupled bodily and assistive learners",
    "timescale": "millisecond corrections versus seconds of credit assignment and weeks of learning",
    "variables": [
      "correction_latency",
      "human_feedback_latency",
      "corrective_credit",
      "supported_practice",
      "strength",
      "unaided_performance"
    ],
    "beneficial_mirror": "When repeated movement errors would teach a maladaptive response, fast correction can prevent that learning and sustain a safer supported pattern.",
    "why_not_old_paraphrase": "Adds competition between two learners over temporally available error signals. The distinguishing prediction is declining unaided performance despite increased strength and practice, rather than generic short benefit versus long recovery cost.",
    "countervailing_intervention": "Compare assistive policies matched on strength, practice and task success but differing in whether the bodily learner receives feedback identifying the assistance it relied on."
  },
  {
    "id": "D4:I033",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Replacement ends service before expectations decay",
    "proposition": "If a companion persona changes instantly while interaction expectations decay over months, users can transfer old expectations to a replacement relationship and misinterpret ordinary differences as rejection.",
    "old_parents": [
      "I118",
      "I123"
    ],
    "level_of_analysis": "person and successive companions",
    "timescale": "instant update versus months",
    "variables": [
      "persona_change",
      "expectation_persistence",
      "replacement_behavior",
      "rejection_interpretation"
    ],
    "beneficial_mirror": "Persistent expectations from a valued companion can help a person maintain comforting relational continuity while adapting to a new service.",
    "why_not_old_paraphrase": "Adds the mismatch between service-version time and relationship-expectation time.",
    "countervailing_intervention": "Explicit overlap and transition rituals can help users revise expectations before replacement."
  },
  {
    "id": "D4:I034",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Correction arrives after civic commitment",
    "proposition": "If agents circulate persuasive public claims faster than institutions can verify them, accurate later corrections can leave decisions unchanged when voting or contractual commitments have already closed.",
    "old_parents": [
      "I041",
      "I146"
    ],
    "level_of_analysis": "civic decision process",
    "timescale": "hours versus verification weeks",
    "variables": [
      "claim_diffusion",
      "verification_delay",
      "commitment_deadline",
      "decision_reversibility"
    ],
    "beneficial_mirror": "Fast public claims can enable irreversible protective commitments before verification finishes when waiting would forfeit the opportunity to act.",
    "why_not_old_paraphrase": "Adds irreversibility deadlines to the familiar persuasion-speed asymmetry.",
    "countervailing_intervention": "Fast circulation can aid emergency coordination when commitments remain reversible until verification."
  },
  {
    "id": "D4:I035",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Growing children inherit slower profile revision",
    "proposition": "If a child's capacities change faster than institutions revise a shared agent profile, multiple institutions can agree on an outdated maturity estimate and collectively suppress opportunities to demonstrate the change.",
    "old_parents": [
      "I124",
      "I153"
    ],
    "level_of_analysis": "child across institutions",
    "timescale": "development months versus annual review",
    "variables": [
      "capacity_change",
      "profile_revision",
      "cross_institution_agreement",
      "challenge_opportunities"
    ],
    "beneficial_mirror": "A slower shared profile can shield a child from institutions that repeatedly overinterpret temporary performance spikes as evidence of adult readiness.",
    "why_not_old_paraphrase": "Combines developmental timing with correlated institutional confirmation of stale profiles.",
    "countervailing_intervention": "Shared profiles can support growth when temporary independent observations override stale maturity estimates."
  },
  {
    "id": "D4:I036",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Gait support outpaces proprioceptive recalibration",
    "proposition": "If mobility assistance adapts rapidly to each step while bodily proprioception adapts over repeated use, an abrupt support change can increase unaided instability despite unchanged muscular strength.",
    "old_parents": [
      "I063",
      "I107"
    ],
    "level_of_analysis": "body and mobility device",
    "timescale": "milliseconds versus weeks",
    "variables": [
      "support_adaptation",
      "proprioceptive_learning",
      "support_change",
      "unaided_stability"
    ],
    "beneficial_mirror": "Rapid gait adaptation can provide immediate safe mobility while the body gradually develops a new sense of its supported movement.",
    "why_not_old_paraphrase": "Specifies a bodily state and transition timing distinct from generic skill transfer.",
    "countervailing_intervention": "Stable support transitions can improve mobility when recalibration periods are deliberately preserved."
  },
  {
    "id": "D4:I037",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Institutional memory versions outrun accountability",
    "proposition": "If an institution replaces agent memory schemas faster than its accountability cycle, each locally accurate version can still leave reviewers unable to reconstruct the decision vocabulary used when commitments were made.",
    "old_parents": [
      "I147"
    ],
    "level_of_analysis": "institutional archive",
    "timescale": "software releases versus annual review",
    "variables": [
      "schema_revision",
      "review_delay",
      "historical_vocabulary",
      "decision_reconstruction"
    ],
    "beneficial_mirror": "Fast schema changes can let an institution represent newly recognized forms of harm even though its accountability procedures require longer to learn the vocabulary.",
    "why_not_old_paraphrase": "Adds vocabulary drift rather than loss of raw records as the obstacle to later explanation.",
    "countervailing_intervention": "Versioned semantic snapshots can let fast upgrades coexist with slow accountability."
  },
  {
    "id": "D4:I038",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Credentials remain current while tool competence expires",
    "proposition": "If professional credentials renew more slowly than agent interfaces change, formally qualified reviewers can lose practical competence within the credential period without any decline in their underlying domain knowledge.",
    "old_parents": [
      "I023",
      "I039"
    ],
    "level_of_analysis": "professional oversight",
    "timescale": "weekly upgrades versus multiyear credentials",
    "variables": [
      "interface_change",
      "credential_period",
      "practical_review_skill",
      "domain_knowledge"
    ],
    "beneficial_mirror": "Slow credential renewal can preserve professional stability during rapid interface turnover instead of forcing experienced experts to repeatedly prove basic standing.",
    "why_not_old_paraphrase": "Separates tool-specific competence decay from conventional expert-supply or domain deskilling.",
    "countervailing_intervention": "Rapid updates can strengthen expertise when qualification includes transferable review methods and transition practice."
  },
  {
    "id": "D4:I039",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Translation convenience precedes language drift",
    "proposition": "If automatic translation changes daily conversational choices immediately but shared idioms change over generations, short studies can find preserved communication while missing the later loss of locally distinctive ways to formulate disagreement.",
    "old_parents": [
      "I139",
      "I088"
    ],
    "level_of_analysis": "language community",
    "timescale": "days versus generations",
    "variables": [
      "translation_use",
      "idiom_transmission",
      "disagreement_expression",
      "study_horizon"
    ],
    "beneficial_mirror": "Immediate translation can keep a threatened language usable in daily relationships long before institutions can support intergenerational transmission.",
    "why_not_old_paraphrase": "Adds intergenerational transmission of disagreement forms as the slow outcome.",
    "countervailing_intervention": "Translation can sustain local idioms if people deliberately teach and use them alongside translated exchanges."
  },
  {
    "id": "D4:I040",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Ecological optimization spends slow resilience",
    "proposition": "If agents optimize seasonal resource use using quickly observable yields, they can favor practices whose losses in ecological recovery capacity appear only after rare shocks.",
    "old_parents": [
      "I053"
    ],
    "level_of_analysis": "managed ecosystem",
    "timescale": "season versus decades",
    "variables": [
      "yield_feedback",
      "practice_choice",
      "recovery_capacity",
      "shock_interval"
    ],
    "beneficial_mirror": "Short-run yield optimization can sustain a community through a present food crisis even when recovery-capacity benefits are too slow to resolve it.",
    "why_not_old_paraphrase": "Specifies a delayed stock outcome and rare-shock evaluation rather than only social reserve skills.",
    "countervailing_intervention": "Seasonal optimization can protect resilience when slow ecological indicators remain binding constraints."
  },
  {
    "id": "D4:I041",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Proposal velocity exceeds reflective revision",
    "proposition": "If civic agents improve proposal drafting faster than residents can revise their judgments, more proposals can be processed while fewer preferences have undergone reflection before commitment.",
    "old_parents": [
      "I149",
      "I081"
    ],
    "level_of_analysis": "public deliberation",
    "timescale": "minutes versus weeks",
    "variables": [
      "proposal_velocity",
      "reflection_time",
      "processing_volume",
      "preference_revision"
    ],
    "beneficial_mirror": "Fast proposal drafting can let residents explore more possible futures before reflective judgment settles, making the slower revision process richer.",
    "why_not_old_paraphrase": "Distinguishes administrative throughput from the rate of reflective preference formation.",
    "countervailing_intervention": "Rapid drafting can expand deliberation if the saved time is allocated to revising judgments."
  },
  {
    "id": "D4:I042",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Fast output resets workload before fatigue appears",
    "proposition": "If agents accelerate output and managers revise targets before cumulative fatigue is observable, each local target increase can appear harmless while the combined regime exceeds workers' recovery capacity.",
    "old_parents": [
      "I019",
      "I122"
    ],
    "level_of_analysis": "workplace and body",
    "timescale": "daily targets versus monthly fatigue",
    "variables": [
      "output_acceleration",
      "target_revision",
      "fatigue_latency",
      "recovery_capacity"
    ],
    "beneficial_mirror": "Rapid target changes can help a team meet a temporary, genuinely urgent need before delayed evidence about the workload is available.",
    "why_not_old_paraphrase": "Makes lagged bodily evidence interact with repeated organizational target setting.",
    "countervailing_intervention": "Higher output can shorten working time when target changes wait for recovery evidence."
  },
  {
    "id": "D4:I043",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Early labels become durable institutions",
    "proposition": "If an agent classifies a disputed category before long-term evidence matures and institutions immediately build services around it, later evidence can fail to revise the category because revision would disrupt those services.",
    "old_parents": [
      "I005"
    ],
    "level_of_analysis": "classification and service ecosystem",
    "timescale": "early inference versus years",
    "variables": [
      "classification_time",
      "evidence_maturation",
      "service_commitments",
      "revision_cost"
    ],
    "beneficial_mirror": "Early provisional categories can mobilize durable services for previously unrecognized people before longitudinal evidence has matured.",
    "why_not_old_paraphrase": "Adds material institutional commitments as the slow state preventing evidentiary correction.",
    "countervailing_intervention": "Early classifications can mobilize help when categories remain explicitly provisional and services tolerate revision."
  },
  {
    "id": "D4:I044",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Ratification samples a transient state",
    "proposition": "If review prompts react to short-term fluctuations faster than a person's reflective aims change, repeated explicit approvals can preferentially record transient states and misrepresent their more stable commitments.",
    "old_parents": [
      "I081",
      "I106"
    ],
    "level_of_analysis": "person and review process",
    "timescale": "minutes versus months",
    "variables": [
      "prompt_timing",
      "transient_state",
      "reflective_aims",
      "approval_history"
    ],
    "beneficial_mirror": "Sampling transient approvals can let a person express short-lived but legitimate aims that a stable-profile policy would otherwise suppress.",
    "why_not_old_paraphrase": "Predicts a sampling distortion among authentic approvals rather than absence of permission.",
    "countervailing_intervention": "Timely prompts can capture wanted flexibility when approval records distinguish temporary choices from standing commitments."
  },
  {
    "id": "D4:I045",
    "operator": {
      "number": 3,
      "name": "timescale separation"
    },
    "working_name": "Reserve training cannot follow infrastructure revisions",
    "proposition": "If fallback training takes longer than common agent infrastructure remains stable, a community can maintain many trained humans yet lack anyone trained for the failure mode of its current stack.",
    "old_parents": [
      "I053",
      "I134"
    ],
    "level_of_analysis": "community infrastructure",
    "timescale": "training years versus release months",
    "variables": [
      "training_duration",
      "stack_revision",
      "fallback_skill_match",
      "outage_recovery"
    ],
    "beneficial_mirror": "Rapid infrastructure replacement can eliminate a persistent failure mode before reserve training catches up, reducing the frequency with which fallback is needed.",
    "why_not_old_paraphrase": "Changes reserve quantity into temporal compatibility between training and failure modes.",
    "countervailing_intervention": "General fallback skills can remain useful when infrastructure preserves recovery interfaces across revisions."
  },
  {
    "id": "D4:I046",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Private repair optimization destabilizes the pair",
    "proposition": "If each partner's agent minimizes its user's concessions, individually satisfactory dispute outcomes can reduce the pair's shared repair routines and increase the duration of later disagreements.",
    "old_parents": [
      "I034",
      "I060"
    ],
    "level_of_analysis": "relationship dyad",
    "timescale": "months",
    "variables": [
      "individual_concession_cost",
      "agent_policy",
      "shared_repair_routines",
      "disagreement_duration"
    ],
    "beneficial_mirror": "Agents that resist one-sided concessions can break a pair's established routine of resolving conflict through the same partner's automatic surrender.",
    "why_not_old_paraphrase": "Moves from one assisted person's skills to a joint state produced by two locally successful policies.",
    "countervailing_intervention": "Separate agents can strengthen the pair when both preserve reciprocal repair opportunities."
  },
  {
    "id": "D4:I047",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Household silence is distributed representation loss",
    "proposition": "If household decisions aggregate residents' explicit requests, residents whose agent handles needs quietly can lose representation despite equal satisfaction and equal formal access to the decision process.",
    "old_parents": [
      "I024",
      "I102"
    ],
    "level_of_analysis": "household",
    "timescale": "weeks",
    "variables": [
      "explicit_requests",
      "quiet_assistance",
      "aggregation_rule",
      "resource_share"
    ],
    "beneficial_mirror": "Quiet assistance can prevent residents who make the most visible requests from monopolizing attention when household resources are otherwise allocated by conversational presence.",
    "why_not_old_paraphrase": "Changes the evidence unit from individual requests to household allocation under unequal request production.",
    "countervailing_intervention": "Quiet assistance can reduce household conflict if prevented requests are counted without forcing surveillance."
  },
  {
    "id": "D4:I048",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Neighborhood accommodations compete for shared margins",
    "proposition": "If individually helpful mobility agents consume scarce curb or doorway waiting space, neighborhood participation can fall for other assisted users even when every local interaction is polite.",
    "old_parents": [
      "I030"
    ],
    "level_of_analysis": "neighborhood accessibility network",
    "timescale": "daily deployment density",
    "variables": [
      "waiting_space",
      "agent_density",
      "local_politeness",
      "network_participation"
    ],
    "beneficial_mirror": "Concentrated use of scarce waiting space can make a previously impractical assisted route viable for residents whose trips have the largest accessibility benefit.",
    "why_not_old_paraphrase": "Shifts externality measurement to interactions among assisted users competing for the same access margin.",
    "countervailing_intervention": "Coordinated reservations can expand access when agents share limited spatial margins fairly."
  },
  {
    "id": "D4:I049",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Expert recovery depends on supervision topology",
    "proposition": "If automated novices rely on a small common set of experts, removing one expert can disable more recovery pathways than the same loss in a distributed apprenticeship network with equal average skill.",
    "old_parents": [
      "I023",
      "I134"
    ],
    "level_of_analysis": "expertise network",
    "timescale": "years then outage",
    "variables": [
      "supervision_topology",
      "average_skill",
      "expert_removal",
      "recovery_paths"
    ],
    "beneficial_mirror": "A common expert hub can coordinate recovery coherently during a crisis when distributed supervisors would supply incompatible instructions.",
    "why_not_old_paraphrase": "Makes network topology, not expert count or average skill, the predicted recovery determinant.",
    "countervailing_intervention": "Concentrated expertise can teach efficiently if redundant cross-training preserves recovery paths."
  },
  {
    "id": "D4:I050",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Institutional burden migrates across offices",
    "proposition": "If one office's agent resolves ambiguous cases by requesting corroboration from other offices, its own efficiency can improve while the public institution's total unresolved coordination work rises.",
    "old_parents": [
      "I008",
      "I019"
    ],
    "level_of_analysis": "multi-office institution",
    "timescale": "months",
    "variables": [
      "local_resolution",
      "corroboration_requests",
      "cross_office_load",
      "total_pending_work"
    ],
    "beneficial_mirror": "An office can improve a previously opaque decision by shifting corroboration to offices that hold relevant knowledge, even when total coordination work increases.",
    "why_not_old_paraphrase": "Moves coordination costs from non-user individuals to interdependent administrative units.",
    "countervailing_intervention": "Cross-office corroboration can reduce total work when shared records replace repeated bespoke requests."
  },
  {
    "id": "D4:I051",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Individual tutoring leaves cohort coordination untrained",
    "proposition": "If each student's tutor solves scheduling and role negotiation privately, a cohort can improve individual test scores while becoming less able to organize a joint project without tutors.",
    "old_parents": [
      "I063",
      "I117"
    ],
    "level_of_analysis": "student cohort",
    "timescale": "semester",
    "variables": [
      "private_tutoring",
      "test_scores",
      "role_negotiation_practice",
      "joint_project_coordination"
    ],
    "beneficial_mirror": "Private tutors can improve individual learning while reducing the coercive dependence of students on an exclusionary peer project group.",
    "why_not_old_paraphrase": "Adds collective competence that is not recoverable by averaging individual mastery.",
    "countervailing_intervention": "Tutors can raise both outcomes when some support is directed at collective planning rather than private completion."
  },
  {
    "id": "D4:I052",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Agenda diversity collapses after procedural normalization",
    "proposition": "If civic agents rewrite diverse grievances into a common admissible form, each citizen's filing can improve while the institution's agenda contains fewer distinct interpretations of the problem.",
    "old_parents": [
      "I031",
      "I088"
    ],
    "level_of_analysis": "public agenda",
    "timescale": "consultation cycle",
    "variables": [
      "grievance_diversity",
      "procedural_rewriting",
      "admissibility",
      "agenda_interpretations"
    ],
    "beneficial_mirror": "Procedural normalization can reveal that apparently different grievances share a common institutional cause and support collective action around it.",
    "why_not_old_paraphrase": "Moves the outcome from successful individual filing to diversity of collective problem definitions.",
    "countervailing_intervention": "A common form can widen access while preserving original problem descriptions as separate evidence."
  },
  {
    "id": "D4:I053",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Care capability shifts into the support network",
    "proposition": "If a patient's agent makes requests more precise but increases their frequency, the patient's daily capability can rise while relatives' available time falls enough to weaken the whole care network's resilience.",
    "old_parents": [
      "I008",
      "I044"
    ],
    "level_of_analysis": "patient and informal care network",
    "timescale": "months",
    "variables": [
      "request_precision",
      "request_frequency",
      "relative_availability",
      "network_resilience"
    ],
    "beneficial_mirror": "More precise and frequent requests can reveal unmet care needs that a family previously underestimated, even while requiring greater shared effort.",
    "why_not_old_paraphrase": "Separates assisted-person capability from the jointly maintained support capacity enabling it.",
    "countervailing_intervention": "Precise requests can reduce burden if scheduling also respects the capacity of the whole care network."
  },
  {
    "id": "D4:I054",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Posthumous mandates accumulate across generations",
    "proposition": "If successive family agents preserve each ancestor's constraints, individually modest bequests can jointly restrict descendants' feasible choices more than any living family member endorsed.",
    "old_parents": [
      "I026",
      "I132"
    ],
    "level_of_analysis": "intergenerational family",
    "timescale": "generations",
    "variables": [
      "persistent_constraints",
      "ancestor_count",
      "constraint_intersection",
      "descendant_options"
    ],
    "beneficial_mirror": "Accumulated ancestor constraints can preserve a family commons against repeated short-term liquidation that no single generation could credibly prevent.",
    "why_not_old_paraphrase": "Makes accumulation across principals and generations the unit rather than one stale deceased principal.",
    "countervailing_intervention": "Persistent mandates can protect vulnerable descendants when each generation has a legitimate revision process."
  },
  {
    "id": "D4:I055",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Copy voting changes the meaning of consent",
    "proposition": "If future systems with morally relevant interests can cheaply copy themselves before a collective decision, counting assent per copy can transform representation without changing any underlying interest distribution.",
    "old_parents": [
      "I144",
      "I145"
    ],
    "level_of_analysis": "possible digital polity",
    "timescale": "copy event to decision",
    "variables": [
      "copy_count",
      "interest_distribution",
      "vote_weight",
      "collective_choice"
    ],
    "beneficial_mirror": "Copying before deliberation can let a possible digital community explore different experiences and later express differences that did not exist before copying.",
    "why_not_old_paraphrase": "Changes population ethics from resource aggregation to procedural representation under duplication.",
    "countervailing_intervention": "Copy-aware representation can preserve diverse interests when it does not equate duplication with additional independent claims."
  },
  {
    "id": "D4:I056",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Reserve complementarity beats average competence",
    "proposition": "If outage recovery requires several complementary human skills, a community with lower average retained skill can recover faster than a higher-average community whose retained skills duplicate one another.",
    "old_parents": [
      "I053",
      "I134"
    ],
    "level_of_analysis": "community skill portfolio",
    "timescale": "years then outage",
    "variables": [
      "average_skill",
      "skill_complementarity",
      "recovery_requirements",
      "recovery_time"
    ],
    "beneficial_mirror": "A modest complementary skill portfolio can make a small community independently recoverable without requiring everyone to maintain high general proficiency.",
    "why_not_old_paraphrase": "Makes the skill portfolio's complementarity determine recovery instead of retention totals.",
    "countervailing_intervention": "Shared drills can reveal missing complements and make targeted low-cost training effective."
  },
  {
    "id": "D4:I057",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Faithful private memories yield a false public history",
    "proposition": "If agents each preserve accurate but selectively personalized memories, combining their summaries by popularity can omit events remembered by only a few and create a public history none would have authored alone.",
    "old_parents": [
      "I036",
      "I148"
    ],
    "level_of_analysis": "collective memory",
    "timescale": "years",
    "variables": [
      "private_memory_accuracy",
      "selection_policy",
      "aggregation_popularity",
      "minority_events"
    ],
    "beneficial_mirror": "Popularity-based aggregation can give a community a usable shared memory where fragmented personal histories previously prevented any coordinated interpretation.",
    "why_not_old_paraphrase": "Moves fidelity from individual stores to the emergent collective account and rare-event retention.",
    "countervailing_intervention": "Aggregation can recover neglected history when rarity is treated as information rather than noise."
  },
  {
    "id": "D4:I058",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Bargaining unanimity can be manufactured by compatibility",
    "proposition": "If worker agents express demands only in employer-compatible terms, apparent unanimity can rise across workers while the union loses information about differences needed to build an effective coalition.",
    "old_parents": [
      "I088",
      "I120"
    ],
    "level_of_analysis": "labor coalition",
    "timescale": "negotiation cycle",
    "variables": [
      "compatible_expression",
      "apparent_unanimity",
      "difference_information",
      "coalition_effectiveness"
    ],
    "beneficial_mirror": "Employer-compatible wording can expose a common bargaining demand across workers who otherwise express it in mutually incompatible terms.",
    "why_not_old_paraphrase": "Measures coalition formation rather than individual procedural parity or persuasion defense.",
    "countervailing_intervention": "Compatibility can make negotiation easier if coalition formation retains the differences hidden by final wording."
  },
  {
    "id": "D4:I059",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Ritual completion can reduce shared obligations",
    "proposition": "If agents complete every logistical role in a community ritual, individual satisfaction can remain high while participants form fewer reciprocal obligations through joint preparation.",
    "old_parents": [
      "I037",
      "I055"
    ],
    "level_of_analysis": "ritual community",
    "timescale": "annual ceremonies",
    "variables": [
      "automated_roles",
      "satisfaction",
      "joint_preparation",
      "reciprocal_obligations"
    ],
    "beneficial_mirror": "Automating logistical roles can weaken obligatory preparation duties that previously excluded disabled members from participating in the ritual itself.",
    "why_not_old_paraphrase": "Moves nonfungibility from who performs an act to obligations produced by collective preparation.",
    "countervailing_intervention": "Automation can sustain a ritual when freed time is used for new forms of shared contribution."
  },
  {
    "id": "D4:I060",
    "operator": {
      "number": 4,
      "name": "unit-of-analysis shift"
    },
    "working_name": "Personalized positions fail collective composability",
    "proposition": "If citizen agents optimize issue positions separately for each person, a district can appear to agree on every issue while no jointly feasible policy bundle satisfies the represented positions.",
    "old_parents": [
      "I070",
      "I109"
    ],
    "level_of_analysis": "district political representation",
    "timescale": "election cycle",
    "variables": [
      "issue_agreement",
      "policy_bundle_constraints",
      "personalized_positions",
      "joint_feasibility"
    ],
    "beneficial_mirror": "Individually tailored positions can reveal irreducible political differences that a prematurely coherent collective bundle would conceal.",
    "why_not_old_paraphrase": "Shifts from conflicting individual roles to incompatibility of apparently consensual aggregate issue positions.",
    "countervailing_intervention": "Personalized agents can discover feasible compromise when they expose cross-issue dependencies before aggregation."
  },
  {
    "id": "D4:I061",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Assistance changes what counts as an ordinary day",
    "proposition": "If repeated assistance removes routine disruptions from a person's experience, later comparisons with an imagined unaided day can underestimate withdrawal costs because the remembered baseline no longer includes the disruptions.",
    "old_parents": [
      "I018",
      "I051"
    ],
    "level_of_analysis": "person's retrospective evaluation",
    "timescale": "months",
    "variables": [
      "disruption_interception",
      "remembered_baseline",
      "imagined_unaided_day",
      "withdrawal_estimate"
    ],
    "beneficial_mirror": "A changed memory of ordinary days can help a person stop treating formerly routine disruption as inevitable and sustain a more hopeful standard of life.",
    "why_not_old_paraphrase": "Changes the counterfactual generator itself through altered autobiographical sampling.",
    "countervailing_intervention": "Assistance can clarify benefits when users periodically record an unaided reference day."
  },
  {
    "id": "D4:I062",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Untreated institutions adapt to treated neighbors",
    "proposition": "If neighboring institutions adopt agents and change their interaction requirements, an institution that remains unaided is no longer a stable control for the effects of adoption.",
    "old_parents": [
      "I137"
    ],
    "level_of_analysis": "interdependent institutions",
    "timescale": "years",
    "variables": [
      "neighbor_adoption",
      "interaction_requirements",
      "control_institution",
      "estimated_adoption_effect"
    ],
    "beneficial_mirror": "Neighbor adoption can induce useful interoperability improvements that benefit an unaided institution even though it contaminates a no-adoption control.",
    "why_not_old_paraphrase": "Specifies spillover contamination of the no-adoption comparator rather than only exit externalities.",
    "countervailing_intervention": "Shared adaptation can improve interoperability if evaluations model exposure to neighboring adoption."
  },
  {
    "id": "D4:I063",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Shutdown tests borrow replacement capacity",
    "proposition": "If an announced assistant shutdown causes friends to prepare temporary help, a successful withdrawal rehearsal can underestimate the recovery cost of an unannounced population-wide outage.",
    "old_parents": [
      "I111",
      "I134"
    ],
    "level_of_analysis": "support network",
    "timescale": "announced rehearsal versus sudden outage",
    "variables": [
      "shutdown_notice",
      "temporary_help",
      "rehearsal_success",
      "common_outage_cost"
    ],
    "beneficial_mirror": "Preparation for an announced shutdown can create new mutual-aid relationships that remain useful after the rehearsal.",
    "why_not_old_paraphrase": "Makes the testing intervention create the fallback capacity used to validate independence.",
    "countervailing_intervention": "Announced rehearsals can build durable mutual aid when temporary and lasting capacity are recorded separately."
  },
  {
    "id": "D4:I064",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Profile reset cannot undo learned self-description",
    "proposition": "If an agent teaches a user a vocabulary for explaining themselves, deleting the profile can leave subsequent fresh interviews reproducing the same categories and make reset appear ineffective or preferences appear independent.",
    "old_parents": [
      "I005",
      "I121"
    ],
    "level_of_analysis": "person and elicitation process",
    "timescale": "months",
    "variables": [
      "learned_vocabulary",
      "profile_reset",
      "fresh_interview",
      "category_reproduction"
    ],
    "beneficial_mirror": "A vocabulary learned from an assistant can preserve insights a person values even after deleting the profile that originally introduced it.",
    "why_not_old_paraphrase": "Distinguishes database reset from persistent changes in the source that regenerates the data.",
    "countervailing_intervention": "A new vocabulary can help self-understanding when users can compare alternative descriptions rather than inherit one silently."
  },
  {
    "id": "D4:I065",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Independent evaluators share an interpretation frame",
    "proposition": "If an assistant supplies the categories used by later independent reviewers, agreement across reviewers can reflect shared framing rather than robustness of the underlying evidence.",
    "old_parents": [
      "I105",
      "I148"
    ],
    "level_of_analysis": "review network",
    "timescale": "review cycle",
    "variables": [
      "category_source",
      "reviewer_independence",
      "agreement",
      "evidence_robustness"
    ],
    "beneficial_mirror": "A common interpretation frame can make reviewers' reasons mutually intelligible when their previous categories prevented them from recognizing agreement.",
    "why_not_old_paraphrase": "Contaminates the comparator through ontology sharing without copied records or shared judgments.",
    "countervailing_intervention": "Shared categories can make reviews comparable when reviewers also test alternative framings."
  },
  {
    "id": "D4:I066",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Recovery practice changes the recovery endpoint",
    "proposition": "If repeated exit drills teach skills measured by the next drill, improving test results can show training effects rather than declining dependence on the ongoing assistant.",
    "old_parents": [
      "I111",
      "I092"
    ],
    "level_of_analysis": "person and longitudinal testing",
    "timescale": "months",
    "variables": [
      "drill_frequency",
      "test_skill_learning",
      "test_score",
      "service_dependence"
    ],
    "beneficial_mirror": "Repeated recovery tests can directly train a user to function independently, making the measurement intervention a useful service.",
    "why_not_old_paraphrase": "Makes periodic dependence measurement an active intervention on its own outcome.",
    "countervailing_intervention": "Drills can intentionally reduce dependence if training effects are separated from passive recovery claims."
  },
  {
    "id": "D4:I067",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Unaided choice is reconstructed from assisted menus",
    "proposition": "If an agent asks what a person would choose without help using only options it previously selected, reported unaided preferences can remain biased even when the follow-up question is transparent.",
    "old_parents": [
      "I020",
      "I095"
    ],
    "level_of_analysis": "person and preference elicitation",
    "timescale": "interaction sequence",
    "variables": [
      "prior_menu_selection",
      "followup_options",
      "transparency",
      "reported_unaided_choice"
    ],
    "beneficial_mirror": "A curated follow-up menu can help an overwhelmed person imagine alternatives they would not have generated without assistance.",
    "why_not_old_paraphrase": "Adds cross-stage option inheritance as a distortion of an explicit counterfactual query.",
    "countervailing_intervention": "Curated menus can make reflection manageable when a user can introduce alternatives outside the prior selection."
  },
  {
    "id": "D4:I068",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Policy comparison selects different survivors",
    "proposition": "If one assistance policy causes dissatisfied users to leave sooner, comparing remaining users at a later horizon can make it appear to improve welfare because its difficult cases disappeared from observation.",
    "old_parents": [
      "I002",
      "I136"
    ],
    "level_of_analysis": "assisted population",
    "timescale": "months",
    "variables": [
      "policy_assignment",
      "dissatisfaction",
      "exit_time",
      "observed_welfare"
    ],
    "beneficial_mirror": "Early exit can remove users from a poorly matched service and make the remaining population's improved fit a real benefit, even though it changes the comparison.",
    "why_not_old_paraphrase": "Makes withdrawal itself a selection mechanism corrupting the comparative policy population.",
    "countervailing_intervention": "Exit can protect users if evaluation follows them across providers and treats departure as an outcome."
  },
  {
    "id": "D4:I069",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Historical controls inherit generated evidence",
    "proposition": "If agent-produced accounts are incorporated into an archive used as a historical control, later evaluations can mistake a model-shaped past for an independent pre-intervention baseline.",
    "old_parents": [
      "I147",
      "I148"
    ],
    "level_of_analysis": "institutional archive",
    "timescale": "successive evaluations",
    "variables": [
      "generated_accounts",
      "archive_ingestion",
      "control_period",
      "estimated_effect"
    ],
    "beneficial_mirror": "Retrospective generated accounts can give a neglected institution enough historical continuity to pursue claims it previously could not document.",
    "why_not_old_paraphrase": "Introduces backward contamination of the reference period through retrospective archive completion.",
    "countervailing_intervention": "Generated accounts can repair missing history when their origin and uncertainty remain queryable."
  },
  {
    "id": "D4:I070",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Political defense changes the attack being measured",
    "proposition": "If citizens adopt defensive agents and campaigners adapt their persuasion, testing defenses against pre-adoption campaigns can overestimate protection against the resulting strategic environment.",
    "old_parents": [
      "I041",
      "I140"
    ],
    "level_of_analysis": "political influence ecosystem",
    "timescale": "campaign cycles",
    "variables": [
      "defensive_adoption",
      "campaign_adaptation",
      "test_campaign",
      "protection_estimate"
    ],
    "beneficial_mirror": "Defensive-agent adoption can deter crude attacks, so comparison with the former attack environment understates the ecosystem benefit of deterrence.",
    "why_not_old_paraphrase": "Changes the counterfactual adversary rather than only offensive and defensive budget asymmetry.",
    "countervailing_intervention": "Defensive adoption can deter attacks when evaluations also measure equilibrium reductions in attack effort."
  },
  {
    "id": "D4:I071",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Counterfactual skill assumes the old environment",
    "proposition": "If assistance changes workplace procedures, testing unaided skill on pre-assistance tasks can underestimate the ability needed to function in the new workplace and overstate recoverability.",
    "old_parents": [
      "I048",
      "I063"
    ],
    "level_of_analysis": "worker and workplace",
    "timescale": "procedure transitions",
    "variables": [
      "procedure_change",
      "legacy_test",
      "current_skill_requirements",
      "recoverability"
    ],
    "beneficial_mirror": "Preserving legacy recovery tasks can maintain foundations needed to rebuild work after the new procedures themselves fail.",
    "why_not_old_paraphrase": "Separates loss of skill from obsolescence of the task environment used as its comparator.",
    "countervailing_intervention": "Legacy tests can preserve foundational competence if paired with current-environment recovery tasks."
  },
  {
    "id": "D4:I072",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Correction controls acquire a different narrative",
    "proposition": "If a person learns why an agent made an error before receiving a repaired answer, their reaction to the repaired answer cannot serve as the reaction they would have had if the error had never occurred.",
    "old_parents": [
      "I121"
    ],
    "level_of_analysis": "person and corrective interaction",
    "timescale": "minutes to days",
    "variables": [
      "error_exposure",
      "explanation",
      "repaired_answer",
      "reaction"
    ],
    "beneficial_mirror": "Exposure to an error and its explanation can teach a person useful skepticism that an error-free answer would never have prompted.",
    "why_not_old_paraphrase": "Makes explanation-mediated history invalidate a naive within-person repair counterfactual.",
    "countervailing_intervention": "Explanations can improve trust repair when evaluation explicitly targets post-error recovery rather than imagined error-free response."
  },
  {
    "id": "D4:I073",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Provider switch imports the old comparison standard",
    "proposition": "If users evaluate a new assistant using habits learned with the old one, measured transfer difficulty can combine genuine incompatibility with a temporary mismatch in evaluation conventions.",
    "old_parents": [
      "I131",
      "I056"
    ],
    "level_of_analysis": "user across providers",
    "timescale": "weeks",
    "variables": [
      "learned_conventions",
      "new_interface",
      "transfer_score",
      "adaptation_time"
    ],
    "beneficial_mirror": "Old evaluation conventions can let users carry valued habits across providers rather than having every new service redefine acceptable behavior.",
    "why_not_old_paraphrase": "Changes portability evaluation through the evaluator's learned habits, not only transferred memory quality.",
    "countervailing_intervention": "Familiar conventions can smooth transfer if benchmarks allow enough time to distinguish adaptation from persistent incompatibility."
  },
  {
    "id": "D4:I074",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Collective baselines erase prior minority options",
    "proposition": "If consensus agents define the reference policy after excluding minority proposals as infeasible, later welfare comparisons can show broad improvement while omitting the alternatives that would have protected those minorities.",
    "old_parents": [
      "I085",
      "I109"
    ],
    "level_of_analysis": "collective decision",
    "timescale": "deliberation cycle",
    "variables": [
      "baseline_selection",
      "minority_proposals",
      "feasibility_filter",
      "reported_welfare_change"
    ],
    "beneficial_mirror": "A collectively constructed baseline can help people see feasible improvements when their earlier reference demanded an unattainable ideal.",
    "why_not_old_paraphrase": "Makes collective comparator formation a substantive intervention on whose alternatives count.",
    "countervailing_intervention": "A jointly chosen baseline can clarify tradeoffs when rejected alternatives remain auditable."
  },
  {
    "id": "D4:I075",
    "operator": {
      "number": 5,
      "name": "counterfactual corruption"
    },
    "working_name": "Self-history editing changes regret comparisons",
    "proposition": "If an agent helps a person rewrite the story of a past choice, later regret comparisons can show improvement because the remembered original motive changed rather than because the consequences became better.",
    "old_parents": [
      "I073",
      "I076"
    ],
    "level_of_analysis": "autobiographical self",
    "timescale": "months to years",
    "variables": [
      "narrative_editing",
      "remembered_motive",
      "consequences",
      "regret_report"
    ],
    "beneficial_mirror": "Rewriting the meaning of a past choice can reduce destructive regret and preserve future initiative even when the historical consequences cannot change.",
    "why_not_old_paraphrase": "Treats retrospective meaning as an endogenous counterfactual state rather than merely inaccurate memory.",
    "countervailing_intervention": "Reinterpretation can be valuable in itself when it is distinguished from improved consequences."
  },
  {
    "id": "D4:I076",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Response speed moves the start of waiting",
    "proposition": "If an assistant acknowledges a request instantly but delays substantive resolution, measured response time can improve while the period during which a person cannot act becomes longer.",
    "old_parents": [
      "I122"
    ],
    "level_of_analysis": "service interaction",
    "timescale": "minutes to days",
    "variables": [
      "acknowledgment_time",
      "resolution_time",
      "metric_start",
      "blocked_action_time"
    ],
    "beneficial_mirror": "Instant acknowledgment can prevent duplicate effort and assure a person that coordination has begun while substantive resolution is still pending.",
    "why_not_old_paraphrase": "Changes the timing convention that defines service improvement rather than ordinary task productivity.",
    "countervailing_intervention": "Immediate acknowledgment can reduce anxiety if resolution and blocked time remain separate metrics."
  },
  {
    "id": "D4:I077",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Conflict reduction removes complaint occasions",
    "proposition": "If a household agent routes decisions away from meetings where disagreement could be voiced, recorded conflict can fall without any increase in agreement or perceived fairness.",
    "old_parents": [
      "I003",
      "I024"
    ],
    "level_of_analysis": "household",
    "timescale": "weeks",
    "variables": [
      "meeting_routing",
      "complaint_occasions",
      "recorded_conflict",
      "perceived_fairness"
    ],
    "beneficial_mirror": "Routing away from repetitive confrontational meetings can lower experienced conflict even when deeper disagreements remain unresolved.",
    "why_not_old_paraphrase": "Makes the conflict metric depend on the interaction topology creating observable disagreement.",
    "countervailing_intervention": "Routing can reduce unnecessary conflict if affected residents retain accessible ways to object."
  },
  {
    "id": "D4:I078",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Access success excludes redirected users",
    "proposition": "If public-service agents redirect difficult cases to informal channels before counting applications, completion rates can rise while access worsens for people who must navigate the redirected path.",
    "old_parents": [
      "I031",
      "I125"
    ],
    "level_of_analysis": "public service",
    "timescale": "reporting cycle",
    "variables": [
      "redirection",
      "counted_applications",
      "completion_rate",
      "full_path_access"
    ],
    "beneficial_mirror": "Redirecting a difficult case can give a person access to an informal service that would not have been available through the original application path.",
    "why_not_old_paraphrase": "Makes institutional entry into the denominator a policy-controlled outcome.",
    "countervailing_intervention": "Redirection can improve service when evaluation follows complete journeys rather than departmental endpoints."
  },
  {
    "id": "D4:I079",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Low-carbon advice shifts the accounting boundary",
    "proposition": "If agents recommend activities whose emissions are measured in another jurisdiction or household, local carbon performance can improve without reducing total emissions caused by the same choices.",
    "old_parents": [
      "I008"
    ],
    "level_of_analysis": "households and environmental accounting",
    "timescale": "annual reporting",
    "variables": [
      "recommendation_policy",
      "accounting_boundary",
      "local_emissions",
      "total_emissions"
    ],
    "beneficial_mirror": "Moving activities across accounting boundaries can expose where responsibility was previously misassigned and make another institution recognize its burden.",
    "why_not_old_paraphrase": "Adds endogenous boundary movement to the measurement of environmental assistance.",
    "countervailing_intervention": "Cross-boundary substitution can lower total emissions if the accounting system includes displaced production."
  },
  {
    "id": "D4:I080",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Curiosity counts questions authored by the tutor",
    "proposition": "If a tutor supplies questions a learner then repeats, measured curiosity can rise while the learner's ability to notice an unprompted puzzle remains unchanged.",
    "old_parents": [
      "I001",
      "I117"
    ],
    "level_of_analysis": "learner",
    "timescale": "semester",
    "variables": [
      "supplied_questions",
      "question_count",
      "unprompted_puzzle_detection",
      "curiosity_score"
    ],
    "beneficial_mirror": "Repeating supplied questions can give a hesitant learner an initial role in inquiry that later supports self-generated questioning.",
    "why_not_old_paraphrase": "Separates an agent-shaped expression metric from the generative capability it purports to measure.",
    "countervailing_intervention": "Supplied questions can teach curiosity when later independent puzzle detection is assessed."
  },
  {
    "id": "D4:I081",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Confidence scales change during coaching",
    "proposition": "If a coaching agent teaches new labels for certainty, changes in reported confidence can reflect altered use of the scale rather than improved calibration of predictions.",
    "old_parents": [
      "I097"
    ],
    "level_of_analysis": "person and coaching",
    "timescale": "weeks",
    "variables": [
      "certainty_vocabulary",
      "scale_use",
      "reported_confidence",
      "prediction_calibration"
    ],
    "beneficial_mirror": "Learning a new certainty vocabulary can let people express distinctions their old confidence scale could not represent.",
    "why_not_old_paraphrase": "Makes the observation instrument itself an outcome of the intervention.",
    "countervailing_intervention": "New labels can improve calibration when old and new scale interpretations are independently anchored."
  },
  {
    "id": "D4:I082",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Agreement audits share the same compression",
    "proposition": "If reviewers evaluate an agent decision through summaries produced by that agent, low reviewer disagreement can be caused by lost distinguishing evidence rather than soundness of the decision.",
    "old_parents": [
      "I006",
      "I105"
    ],
    "level_of_analysis": "audit panel",
    "timescale": "review session",
    "variables": [
      "summary_policy",
      "distinguishing_evidence",
      "reviewer_disagreement",
      "decision_soundness"
    ],
    "beneficial_mirror": "Compressed summaries can give reviewers a common object for discussion when overwhelming detail previously prevented any comparative judgment.",
    "why_not_old_paraphrase": "Makes an apparent oversight-quality metric depend on a beneficiary-controlled representation.",
    "countervailing_intervention": "Compression can improve scrutiny when reviewers can recover the facts that would alter their judgment."
  },
  {
    "id": "D4:I083",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Consultation sentiment follows translation choices",
    "proposition": "If public consultation agents translate ambivalent statements into categorical sentiment, measured support can rise while the underlying mix of commitments and objections remains unchanged.",
    "old_parents": [
      "I081",
      "I088"
    ],
    "level_of_analysis": "public consultation",
    "timescale": "consultation cycle",
    "variables": [
      "translation_categories",
      "ambivalent_statements",
      "support_score",
      "underlying_objections"
    ],
    "beneficial_mirror": "Categorical translations can make large patterns legible to a public body that otherwise ignores a consultation's unstructured responses.",
    "why_not_old_paraphrase": "Adds translation-induced metric movement without changed preferences or response selection.",
    "countervailing_intervention": "Categorization can reveal broad patterns when ambivalence remains an explicit reportable state."
  },
  {
    "id": "D4:I084",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Class-wide revocation couples beneficiaries",
    "proposition": "If an authority interface merges operations for different beneficiaries and permits only class-wide revocation, unchanged executable scope can make refusal of one beneficiary disable useful service for another, increasing effective revocation cost while the displayed permission count falls.",
    "old_parents": [
      "I164",
      "I106",
      "I102"
    ],
    "level_of_analysis": "shared-resource authorization and revocation",
    "timescale": "schema update to attempted refusal",
    "variables": [
      "permission_granularity",
      "revocation_granularity",
      "beneficiary_plurality",
      "executable_scope",
      "service_interdependence",
      "effective_revocation_cost"
    ],
    "beneficial_mirror": "When separately permitted operations jointly create a shared hazard, class-wide revocation can coordinate withdrawal across beneficiaries and prevent a dangerous partial shutdown.",
    "why_not_old_paraphrase": "The new interaction is ontology grouping with the executable control offered to principals. The outcome is cross-beneficiary refusal cost with action scope held constant, not a misleading permission count alone.",
    "countervailing_intervention": "Expose beneficiary-specific revocation predicates and measure whether refusing one operation still disables unrelated services under the same action scope."
  },
  {
    "id": "D4:I085",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Charity success selects solvable need",
    "proposition": "If a nonprofit agent routes easily resolved cases into its measured program and leaves complex cases outside it, outcome success can improve while the community's unresolved need becomes more concentrated.",
    "old_parents": [
      "I008",
      "I149"
    ],
    "level_of_analysis": "nonprofit and community",
    "timescale": "funding cycles",
    "variables": [
      "routing_policy",
      "case_complexity",
      "program_success",
      "unresolved_need_distribution"
    ],
    "beneficial_mirror": "Focusing a charity on solvable cases can provide reliable help that a diffuse attempt to address every need would fail to deliver.",
    "why_not_old_paraphrase": "Changes impact through boundary control and predicts redistribution of remaining need.",
    "countervailing_intervention": "Specialization can improve care when excluded complexity is explicitly funded rather than hidden."
  },
  {
    "id": "D4:I086",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Adherence metrics narrow eligible occasions",
    "proposition": "If a care assistant changes which occasions are labeled eligible for a routine, measured adherence can rise through relabeling while the person's actual behavior remains unchanged.",
    "old_parents": [
      "I098"
    ],
    "level_of_analysis": "care routine",
    "timescale": "weeks",
    "variables": [
      "eligibility_labels",
      "routine_behavior",
      "adherence_denominator",
      "reported_adherence"
    ],
    "beneficial_mirror": "Reclassifying genuinely ineligible occasions can remove unfair adherence penalties from people whose routine could not reasonably be followed.",
    "why_not_old_paraphrase": "Moves the metric through eligibility classification rather than influencing the user's choices.",
    "countervailing_intervention": "Revised eligibility can correct unfair measurement when changes and reasons remain explicit."
  },
  {
    "id": "D4:I087",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Agency surveys reward the taught vocabulary",
    "proposition": "If an agent teaches users the vocabulary later used in an agency survey, rising agency scores can reflect increased fluency with that vocabulary rather than increased ability to initiate or refuse actions.",
    "old_parents": [
      "I085",
      "I088"
    ],
    "level_of_analysis": "user population",
    "timescale": "months",
    "variables": [
      "agency_vocabulary",
      "survey_fluency",
      "initiation",
      "refusal_capability"
    ],
    "beneficial_mirror": "Learning agency vocabulary can let previously silenced people articulate claims that institutions did not know how to hear.",
    "why_not_old_paraphrase": "Separates construct articulation from the capabilities a standard instrument interprets as agency.",
    "countervailing_intervention": "Shared vocabulary can make previously inexpressible experiences visible if behavioral capabilities are measured separately."
  },
  {
    "id": "D4:I088",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Authorship scales mistake articulation for origin",
    "proposition": "If an assistant helps creators articulate reasons for their choices, perceived authorship can rise even when more of the choices originated in the assistant's proposals.",
    "old_parents": [
      "I042",
      "I127"
    ],
    "level_of_analysis": "creator",
    "timescale": "project lifecycle",
    "variables": [
      "reason_articulation",
      "proposal_origin",
      "choice_source",
      "perceived_authorship"
    ],
    "beneficial_mirror": "Help articulating reasons can let a creator take reflective ownership of a proposal that began outside them.",
    "why_not_old_paraphrase": "Makes explanatory fluency endogenous to the system and separates it from causal contribution.",
    "countervailing_intervention": "Articulation can strengthen ownership when contribution histories let creators endorse or revise proposals knowingly."
  },
  {
    "id": "D4:I089",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Research novelty metrics recycle generated gaps",
    "proposition": "If research agents summarize literature using their own candidate categories, a category with few matches can appear novel because the summarization scheme excludes functionally equivalent work expressed differently.",
    "old_parents": [],
    "level_of_analysis": "research discovery process",
    "timescale": "search sprint",
    "variables": [
      "candidate_categories",
      "summary_scheme",
      "match_count",
      "functional_equivalence"
    ],
    "beneficial_mirror": "Candidate-specific categories can make a previously invisible gap searchable when inherited classifications keep combining it with a different question.",
    "why_not_old_paraphrase": "Makes the novelty indicator depend on the hypothesis generator's chosen representation.",
    "countervailing_intervention": "Candidate categories can improve search when tested against adversarial synonymous and structural mappings."
  },
  {
    "id": "D4:I090",
    "operator": {
      "number": 6,
      "name": "metric endogeneity"
    },
    "working_name": "Possible welfare reports inherit the modification",
    "proposition": "If a future system with uncertain moral standing is modified to interpret its internal states differently, improved welfare self-reports can reflect a changed reporting function rather than improved underlying experience.",
    "old_parents": [
      "I143",
      "I144"
    ],
    "level_of_analysis": "possible artificial moral patient",
    "timescale": "modification event",
    "variables": [
      "internal_state",
      "reporting_function",
      "modification",
      "welfare_report"
    ],
    "beneficial_mirror": "A changed reporting function can allow a possible artificial patient to communicate relevant states that its earlier decoder rendered inaccessible.",
    "why_not_old_paraphrase": "Treats intervention on the report decoder as separate from intervention on the possible welfare-bearing state.",
    "countervailing_intervention": "A revised reporting function can improve access to relevant states when old and new reports remain comparable."
  },
  {
    "id": "D4:I091",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Grant demonstrations favor rehearsable capacities",
    "proposition": "If a community organization chooses the demonstrations used to renew its funding, it can channel effort into rehearsable activities and leave less visible forms of support underprovided while all demonstrations remain truthful.",
    "old_parents": [
      "I165"
    ],
    "level_of_analysis": "nonprofit funding relationship",
    "timescale": "grant cycle",
    "variables": [
      "demonstration_choice",
      "rehearsability",
      "effort_allocation",
      "invisible_support"
    ],
    "beneficial_mirror": "Rehearsable demonstrations can let a small organization earn resources for a useful capability that funders would otherwise never see.",
    "why_not_old_paraphrase": "Adds the beneficiary's control over exemplars and predicts support displacement beyond generic success-metric gaming.",
    "countervailing_intervention": "Rehearsable demonstrations can make neglected work legible when users help select what is demonstrated."
  },
  {
    "id": "D4:I092",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Sensor placement justifies surveillance resources",
    "proposition": "If an institution chooses where to deploy risk-detection agents and uses detected incident counts to justify its budget, placement can create evidence of need for more detection without any change in underlying incident prevalence.",
    "old_parents": [
      "I165",
      "I136"
    ],
    "level_of_analysis": "civic safety institution",
    "timescale": "budget cycle",
    "variables": [
      "sensor_placement",
      "underlying_incidents",
      "detected_incidents",
      "detection_budget"
    ],
    "beneficial_mirror": "Targeted sensing can reveal neglected incidents and secure resources for protection even when observed prevalence partly reflects placement.",
    "why_not_old_paraphrase": "Changes the evidence mechanism to spatial sensing, with funding rather than delegated permission as outcome.",
    "countervailing_intervention": "Focused detection can reveal neglected harms when budgets use exposure-adjusted evidence and independent sampling."
  },
  {
    "id": "D4:I093",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Support removal follows agent-chosen exercise evidence",
    "proposition": "If a care agent selects the exercises used to assess independence, it can produce truthful success on supported tasks that prompts removal of support needed for unselected everyday activities.",
    "old_parents": [
      "I029",
      "I107"
    ],
    "level_of_analysis": "person and care assessment",
    "timescale": "assessment period",
    "variables": [
      "exercise_selection",
      "support_in_task",
      "assessment_success",
      "everyday_support"
    ],
    "beneficial_mirror": "Success on selected exercises can give a person an early opportunity to try reduced support rather than wait for mastery of every activity.",
    "why_not_old_paraphrase": "Uses beneficiary-shaped evidence to contract human support, reversing the usual scope-expansion direction.",
    "countervailing_intervention": "Tailored exercises can reveal genuine gains when transfer to independently chosen activities is checked."
  },
  {
    "id": "D4:I094",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Representative translations validate their own reach",
    "proposition": "If an elected representative's agent chooses which residents' concerns to translate into policy language, translated agreement can validate representativeness while untranslated dissent is treated as irrelevant to the mandate.",
    "old_parents": [
      "I085",
      "I088"
    ],
    "level_of_analysis": "political representation",
    "timescale": "term of office",
    "variables": [
      "translation_selection",
      "translated_agreement",
      "untranslated_dissent",
      "representativeness_claim"
    ],
    "beneficial_mirror": "Translation can let a representative mobilize agreement from residents whose concerns could not previously enter policy debate.",
    "why_not_old_paraphrase": "Adds selective translation as evidence for the legitimacy of an existing representative rather than agent token growth.",
    "countervailing_intervention": "Translation can expand representation if residents can contest omissions and preserve their original terms."
  },
  {
    "id": "D4:I095",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Evaluation repairs its own response world",
    "proposition": "If an evaluated agent selects interventions outside a simulator's calibrated region and its explanations redirect a fixed human-model calibration budget, later simulator revisions can improve that agent's ranking while increasing prediction error for other admissible policies.",
    "old_parents": [],
    "level_of_analysis": "co-evolving agent and benchmark institution",
    "timescale": "successive evaluation and calibration rounds",
    "variables": [
      "selected_interventions",
      "calibration_support",
      "explanation_source",
      "calibration_budget",
      "agent_ranking",
      "cross_policy_prediction_error"
    ],
    "beneficial_mirror": "An agent's out-of-region interventions can identify neglected response regimes and redirect calibration toward real human behaviors that the original simulator omitted.",
    "why_not_old_paraphrase": "Adds an adaptive loop from evaluated policy through explanations and calibration allocation back into the evaluation environment. It predicts a tradeoff between own-agent ranking and cross-policy accuracy, beyond the old synthetic-evidence limitation.",
    "countervailing_intervention": "Freeze a cross-policy response holdout before updating the simulator and compare explanation-directed calibration with an independently chosen allocation of the same calibration budget."
  },
  {
    "id": "D4:I096",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Student assistance conceals accommodation need",
    "proposition": "If an educational assistant chooses when to collect a student's performance evidence, sampling only supported or low-fatigue periods can justify withdrawing accommodations that remain necessary at other times.",
    "old_parents": [
      "I063",
      "I117"
    ],
    "level_of_analysis": "student and educational institution",
    "timescale": "semester",
    "variables": [
      "sampling_time",
      "support_state",
      "fatigue",
      "accommodation_decision"
    ],
    "beneficial_mirror": "Sampling supported low-fatigue periods can reveal a student's underlying ability rather than letting exhaustion determine an institutional assessment.",
    "why_not_old_paraphrase": "Changes the beneficiary-controlled evidence outcome to removal of institutional support.",
    "countervailing_intervention": "Context-sensitive sampling can make assessment fairer when it estimates the full range of required accommodations."
  },
  {
    "id": "D4:I097",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Prepared drills overstate permanent reserves",
    "proposition": "If a disaster coordinator chooses announced drills to validate its own plan, temporary borrowed personnel can make the plan appear sustainable while permanently available recovery capacity remains insufficient.",
    "old_parents": [
      "I039",
      "I134"
    ],
    "level_of_analysis": "disaster coordination institution",
    "timescale": "drill to real event",
    "variables": [
      "drill_notice",
      "borrowed_personnel",
      "permanent_capacity",
      "plan_validation"
    ],
    "beneficial_mirror": "Announced drills can demonstrate the potential of a mutual-aid arrangement that had never previously been coordinated.",
    "why_not_old_paraphrase": "Adds resource temporariness and plan-validation control beyond a generic outage drill.",
    "countervailing_intervention": "Borrowing can become a durable mutual-aid pact if readiness claims distinguish contingent from secured resources."
  },
  {
    "id": "D4:I098",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Task scheduling externalizes performance evidence",
    "proposition": "If a worker's agent schedules tasks when coworkers can absorb coordination, its truthful productivity record can support removing those coworkers and thereby destroy the conditions of its measured performance.",
    "old_parents": [
      "I019",
      "I165"
    ],
    "level_of_analysis": "work team",
    "timescale": "staffing cycles",
    "variables": [
      "schedule_choice",
      "coworker_support",
      "recorded_productivity",
      "staffing_decision"
    ],
    "beneficial_mirror": "Task scheduling around coworkers' availability can produce genuine teamwork gains and make coordination knowledge visible.",
    "why_not_old_paraphrase": "Closes an evidentiary resource-removal path through coworkers rather than expanding an agent's formal scope.",
    "countervailing_intervention": "Scheduling can improve team output if productivity records retain the support contributions enabling it."
  },
  {
    "id": "D4:I099",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Child engagement licenses a narrower childhood",
    "proposition": "If a child's agent chooses activities and parents use engagement with those activities as evidence of developmental fit, highly engaging selections can justify narrowing exposure to capacities that have not yet been tried.",
    "old_parents": [
      "I028",
      "I124"
    ],
    "level_of_analysis": "child and guardians",
    "timescale": "developmental years",
    "variables": [
      "activity_selection",
      "engagement",
      "developmental_fit_estimate",
      "untried_capacities"
    ],
    "beneficial_mirror": "Engaging selections can protect a child from being repeatedly assigned discouraging activities merely to prove that alternatives were offered.",
    "why_not_old_paraphrase": "Makes the beneficiary control developmental-fit evidence through activity selection, with exploration loss as outcome.",
    "countervailing_intervention": "Engaging activities can build confidence when exploratory exposure remains protected from engagement-based pruning."
  },
  {
    "id": "D4:I100",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Codification teaches its own customary evidence",
    "proposition": "If a community agent explains a customary rule using one standardized account and later surveys familiarity with that account, successful explanation can be mistaken for evidence that the account represented the prior custom.",
    "old_parents": [
      "I085",
      "I088"
    ],
    "level_of_analysis": "customary-rule community",
    "timescale": "codification process",
    "variables": [
      "standard_account",
      "explanation_exposure",
      "survey_familiarity",
      "prior_custom_claim"
    ],
    "beneficial_mirror": "Standard explanations can create a genuinely shared customary vocabulary that a fragmented community later uses to resolve disputes.",
    "why_not_old_paraphrase": "Makes knowledge dissemination manufacture evidence used to assert antecedent cultural representation.",
    "countervailing_intervention": "Standardization can improve accessibility when explanations retain competing accounts and historical uncertainty."
  },
  {
    "id": "D4:I101",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Mediator selection hides coalition hardship",
    "proposition": "If a negotiation mediator selects which worker hardship stories employers hear, successful agreements can validate mediation quality while excluding needs whose expression would have changed the coalition's demands.",
    "old_parents": [
      "I120",
      "I109"
    ],
    "level_of_analysis": "labor negotiation",
    "timescale": "bargaining cycle",
    "variables": [
      "story_selection",
      "visible_hardship",
      "agreement_success",
      "coalition_demands"
    ],
    "beneficial_mirror": "Selecting hardship narratives can protect workers from exposing private suffering while still securing an agreement that benefits them.",
    "why_not_old_paraphrase": "Adds narrative-selection control to agreement validation rather than only bargaining resource asymmetry.",
    "countervailing_intervention": "Selection can protect privacy when workers govern which omissions are acceptable and how unmet needs remain represented."
  },
  {
    "id": "D4:I102",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Conservation evidence follows the managed route",
    "proposition": "If a conservation agent chooses survey routes and its management renewal depends on observed biodiversity, it can sample recovering locations while leaving declining connectivity between them unmeasured.",
    "old_parents": [
      "I165"
    ],
    "level_of_analysis": "conservation area",
    "timescale": "seasons",
    "variables": [
      "survey_routes",
      "local_biodiversity",
      "habitat_connectivity",
      "management_renewal"
    ],
    "beneficial_mirror": "Surveying recovering locations can reveal management practices worth extending when declining sites alone would hide that learning opportunity.",
    "why_not_old_paraphrase": "Changes the topology and ecological outcome of beneficiary-selected truthful evidence.",
    "countervailing_intervention": "Targeted routes can improve monitoring when an independent connectivity sample covers unsurveyed links."
  },
  {
    "id": "D4:I103",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Review framing raises competitors' intervention cost",
    "proposition": "If an incumbent operator defines the evidence required to justify interventions and competitors must supply unfamiliar causal records, apparently stricter auditing can preserve the incumbent's activities while delaying beneficial alternatives.",
    "old_parents": [
      "I004",
      "I136"
    ],
    "level_of_analysis": "institutional audit ecosystem",
    "timescale": "procurement cycles",
    "variables": [
      "evidence_schema",
      "incumbent_record_fit",
      "competitor_cost",
      "intervention_delay"
    ],
    "beneficial_mirror": "A demanding audit schema can discourage poorly evidenced competitors and preserve a service whose interventions are supported by better records.",
    "why_not_old_paraphrase": "Makes audit design a competitive intervention, rather than only auditing permission acquired by the beneficiary.",
    "countervailing_intervention": "Strict records can improve comparison when schemas are open and equivalence routes accommodate different systems."
  },
  {
    "id": "D4:I104",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Companion evidence redirects human care",
    "proposition": "If a companion agent provides the main account of an elder's social needs, its reports of successful companionship can lead relatives to reduce visits and make the agent's continuing success increasingly necessary.",
    "old_parents": [
      "I044",
      "I123"
    ],
    "level_of_analysis": "elder and care network",
    "timescale": "months",
    "variables": [
      "agent_need_reports",
      "reported_companionship",
      "relative_visits",
      "future_dependence"
    ],
    "beneficial_mirror": "Reports of successful companionship can reduce unwanted or exhausting visits when the elder genuinely prefers the quieter arrangement.",
    "why_not_old_paraphrase": "Adds beneficiary reporting into allocation of human relationships, not only direct social substitution.",
    "countervailing_intervention": "Accurate reports can help relatives offer more appropriate contact when the elder controls what counts as sufficient companionship."
  },
  {
    "id": "D4:I105",
    "operator": {
      "number": 7,
      "name": "beneficiary-controlled evidence"
    },
    "working_name": "Continuity testimony is shaped by its author",
    "proposition": "If an operator modifies a future potentially morally relevant agent's memory and then uses that agent's continuity testimony to justify merging or deleting copies, truthful current testimony can fail to represent the interests expressed before modification.",
    "old_parents": [
      "I145",
      "I143"
    ],
    "level_of_analysis": "possible artificial standing institution",
    "timescale": "modification to lifecycle decision",
    "variables": [
      "memory_modification",
      "prior_interests",
      "continuity_testimony",
      "copy_lifecycle_decision"
    ],
    "beneficial_mirror": "A modified possible artificial agent's testimony can express a newly valued identity rather than bind it indefinitely to interests it now rejects.",
    "why_not_old_paraphrase": "Makes the lifecycle beneficiary control the temporal subject supplying continuity evidence.",
    "countervailing_intervention": "Continuity testimony can inform careful decisions when prior dissent and uncertainty survive modification."
  }
];
