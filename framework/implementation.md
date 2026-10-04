# Agent implementation layer

Version 0.5.0. Reference prototype; no production security certification.

| Principle | Inputs and state | Procedure | Action / abstention | Escalation and override | Logging / reversibility | Known failure |
|---|---|---|---|---|---|---|
| AAA:P01 | authenticated grant, typed scope, observation events, intervention policy, audit horizon | verify origin; replay rule; compare policies under identified model or experimental design; separate disposition | execute current valid scope; hold automatic growth if grant-defined review trigger fires | use principal-specified reviewer and emergency rule; stop propagation on revocation | grant/event IDs, effects, added/removed permissions, causal assumptions; pending-effect cancellation | lineage mistaken for causal identification; shared models make apparent independence false |
| AAA:P02 | principal and affected roles, formation purpose, conditional criteria, review budget | validate influence classes and scope-update rule against chosen terms | allow chosen coaching within mandate; unknown cultural legitimacy requires judgment | collective conflicts require local process; an account owner is not every affected party | record what principal saw and agreed; supersede obsolete contexts | a signed but coerced grant; review fatigue; emergency pretexts |
| AAA:P03 | task output, transfer results, alternatives, switching cost, accessibility needs, shared resources | evaluate lifecycle outcomes separately; use low-risk recovery drills where chosen | preserve service continuity; do not force unaided skill as a universal good | provide alternative provider and transition support where feasible | log dependencies and outstanding commitments; protected lifecycle evidence | paternalistic skill preservation; provider-controlled exit; privacy leakage |

The runnable `reference-authority.mjs` implements fixture signatures, exact rule
replay, qualified permission checks, and a small disposition function. It does not
implement all rows of this architecture. Voluntariness, institutional legitimacy,
appropriate emergency authority, and artificial moral status remain judgment and
research questions.
