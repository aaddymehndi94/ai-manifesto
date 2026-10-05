# E4:M087 — Certificate receipts reproduce the competition that needs them

Status: **PROPOSED_COMPOSITION + CONDITIONAL_MODEL_RESULT**. Blue-team
strengthening only, 2026-10-05. No novelty court, literature search, rating,
pruning or winner designation. v0.5 remains frozen. The raw M087 record and
all its parents are preserved.

## Strongest conditional statement

If certificate receipts finance independent task-provider entry, entrant formats
increase counterparties' independent-recognition burden, and the resulting
certificate demand is recycled into more entry and a shared recognition gateway,
then increasing a certificate fee can increase nominal provider choice while
reducing issuer-free completion of the **same audit requests**. Ordinary
completion, task quality, exports and local grant types can remain unchanged.

The additional dynamic prediction is not merely “incompatible entry reduces
usable exit.” At a fixed fee, capping the **new certificate demand → entry-budget**
return slows entry and leaves more issuer-free audit transactions after the same
number of periods. Removing receipt-funded entry entirely removes the fee-driven
recognition change. A static model with exogenous provider count does not have
either fee-to-entry comparative static. This says nothing about what the strongest
existing IO/network models can predict; that remains untested.

The construction allows retained independent routes. It does not require every
counterparty to discard every legacy path or to deliberately exclude users.

## Exact components and inherited content

Source propositions are preserved in [the raw record](raw/stream-b.json), M087:

- **D4:I286:** recognition-path connectivity can determine replacement success
  despite exportability and nominal alternatives.
- **D4:I247:** incompatible attestations and limited adapter budgets can make
  provider entry reduce relationships surviving a switch. This already states
  the broad more-entry/less-usable-exit effect.
- **D4:I205:** migration certificates can improve trust and become a gate on
  substitutes.

Historical I131/I135/I142/I032 remain genetic material with their actual earlier
statuses. Nothing here overturns or repeats a court disposition.

Standard industrial organization, financing constraints, network recognition,
integer budgets and elementary recurrence mathematics are inherited. No new
theorem, historical priority or empirical critical point is claimed. The specific
proposed coupling is **certificate receipts → financed entry → recognition
burden → certificate demand → larger entry receipts**, with gateway upkeep on a
separate earmark. It is not a claim that the components' underlying theories
lack that coupling.

## Actors are not interchangeable

| Role | Object and control in this construction |
|---|---|
| Issuer A | A separate assurance/certificate organization; collects receipts and operates the recognition gateway. It does not own the task providers. |
| Providers P1…Pn | Independently owned task services. They receive startup/integration grants and compete through entry; their task quality, price and local grant types are held fixed here. |
| Counterparties C | Independently choose accepted evidence under their adapter budget. They seek full provider coverage and preserve as many independent proof paths as remaining resources allow. |
| Beneficiary controller H | A community/professional/public board can set fee earmarks and eligibility. It need not be A or any P. Control of the funding rule is distinct from ownership of providers and from users' individual grants. |
| Users U | Receive task service and value several possible suppliers; some pay for optional assurance. They are not assumed collectively to control A or C. Their welfare is not measured by provider count alone. |

A may be nonprofit, public or commercial; the calculation does not require rent
seeking, collusion, deception or an authority reward. H could legitimately approve
the program and C could legitimately accept its certificates. Greater dependence
on A is not automatically illegitimacy, monopoly ownership, provider policy
control or net harm. Conversely, legally valid funding and recognition choices
do not make issuer-free usability a redundant measurement.

“More competition” below means **more independent task-provider entry**. It does
not silently mean lower prices, better quality rivalry, lower concentration of
every infrastructural role or an improved welfare equilibrium. Task prices are
fixed at this stage; the old raw mention of falling subscription prices is not
used to obtain the result.

## Bounded construction

The executable construction is [toy-M087.mjs](toy-M087.mjs). It runs only local
arithmetic and enumerates recognition allocations. No language agents, real
people, live permissions, external accounts or contracts are involved.

There are initially two task providers and at most ten available entrants.
Counterparties have an independent-adapter budget **B = 3**. Each native independent
adapter costs **d = 1**. A funded shared gateway costs counterparties **c = 0.5**
to verify; its issuer-side upkeep costs **G = 2** per period. Provider startup plus
gateway integration costs **F = 6** per entrant. A certificate costs **f**.

Receipts are allocated 75% to entry projects and 25% to gateway upkeep:
**alpha = 0.75**, **beta = 0.25**. Projects are indivisible. Unused earmarks are
rebated at period end, not accumulated indefinitely. There is no other entry
finance during this bounded four-period comparison. Entrants subsequently remain
viable on ordinary task revenue; provider exit and long-run profitability are not
modeled. These are consequential financing assumptions, not facts about markets.

When all n independent formats fit within B, C accepts every provider independently.
When they do not fit and the gateway is funded, C preserves full ordinary coverage
through A and retains as many independent adapters as the leftover budget allows:

    K = floor(B / d) = 3
    L = floor((B - c) / d) = 2
    u(n) = 1                         if n <= K
    u(n) = L / n                     if n > K and the gateway is funded

Here u is issuer-free usability, not permission scope or export quality. Full
ordinary completion remains available through the funded gateway. The toy also
represents the partial-coverage case without gateway funding; that is not one of
the ordinary-completion-matched main arms.

### This is not just a changed request denominator

The audit panel requests the same tasks from original P1/P2 throughout. Independent
adapter slots are allocated provider-neutrally across counterparties or successive
allocation periods: every L-provider subset has equal weight. Therefore a fixed
old-provider request retains an independent path in fraction L/n of allocations.
The code explicitly enumerates the subsets for n = 4, 7, 10 and verifies the
fixed-panel fraction. The displayed counts are weighted/expected completions per
100 fixed audit requests, not a claim to have observed 100 real users.

Provider-neutral rotation is an assumption. If C instead permanently protects
the audit panel's two old routes, the focal-panel loss disappears; that retained
counterexample is run below. Protection of two old routes does not establish
independent usability for every future provider or counterparty.

The fee-paying market flow is separately normalized to 100 transactions and can
use all current providers. On independently recognized routes, 20% buy optional
assurance; other ordinary recognized transactions use A. Thus:

    Q(n) = 100 * [0.2*u(n) + (1-u(n))] = 100 * [1 - 0.8*u(n)]
    entry_budget(n, f) = alpha * f * Q(n)
    gateway_budget(n, f) = beta * f * Q(n)
    financed_entries = floor(entry_budget / F), bounded by remaining entrants

The issuer may consequently receive many certificates without being indispensable
if another independently recognized guarantor exists. The plural-guarantee arm
separates actual A certificate use from A's recognition cut.

## Closed return and timing

One period collects receipts from the current recognition state, approves entry
projects and funds the next period's gateway. The next period has more providers;
if their independent formats exceed the local budget, gateway coverage becomes
valuable. Provider-neutral retention spreads the remaining independent paths over
more providers, raising A certificate use in the market flow. Those receipts fund
still more entry.

    n -> independent-adapter burden -> Q(n) -> earmarked receipts -> n(next)
                                   -> gateway upkeep -> ordinary coverage

The return is reinforcing where Q increases with n and financed entry remains
available. It stops at the finite entrant cap in the toy. Signed closure alone
would not prove stability or amplification; the explicit update rule produces
the reported conditional trajectory.

For this parameter set, both first-project finance and first gateway upkeep can
be paid from the optional-certificate base Q0 = 20 when:

    f >= max(F/(alpha*Q0), G/(beta*Q0)) = 0.4

This is an **assumed institutional budget/project boundary**, not a discovered
universal fee or adoption threshold. Fee-inelastic optional use within this range
is required. With elastic demand, entry need not increase with f: a relevant
condition is that f*Q(f,n) increases sufficiently to fund the next project.

## Run results: comparative statics that need the financing edge

Run:

    node research/discovery-sprint-2026-10-05/emergence/toy-M087.mjs

The checked high-fee trajectory is:

| Period/state | Providers | A certificate flow | Issuer-free audit completions / 100 | Entry funded this period |
|---|---:|---:|---:|---:|
| Start | 2 | 20 | 100 | 1 |
| After one update | 3 | 20 | 100 | 1 |
| After two updates | 4 | 60 | 50 | 3 |
| After three updates | 7 | about 77.14 | about 28.57 | 3 |
| After four updates | 10 | 84 | 20 | — |

All the following main arms preserve ordinary usable transactions = 100,
task quality = 1, export completeness = 1, and local grants
`read_export / propose / submit_bounded_transaction`:

| Four-period arm | Providers | Issuer-free fixed audit completions / 100 | A certificate flow |
|---|---:|---:|---:|
| f = 0.2; ordinary financing | 2 | 100 | 20 |
| f = 0.4; full financing loop | 10 | 20 | 84 |
| f = 0.4; no receipt-funded entry | 2 | 100 | 20 |
| f = 0.4; entry recycling capped at initial 20 certificates | 6 | about 33.33 | about 73.33 |
| f = 0.4; cheap grounded independent proofs | 6 | 100 | 20 |
| f = 0.4; independent plural guarantees | 10 | 100 | 84 |
| f = 0.4; public independent recognition | 6 | 100 | 20 |
| f = 0.4; fixed old audit routes protected | 10 | 100 for this panel | 84 |

The code's assertions pass. A separate run of 51 fee probes from 0 to 1 in steps
of 0.02 found weakly increasing entry and weakly decreasing issuer-free usability
for this fixed model. This numerical check is not a theorem about other parameter
sets, demand responses or institutions.

### The two essential ablations

1. **Remove receipts → entry, retain f = 0.4.** Gateway funding and the fee exist,
   but providers stay at two and issuer-free usability stays at 100. Certificates
   alone cannot generate the entry-induced recognition change in this model.
2. **Remove new demand → additional entry receipts, retain ordinary entry funding.**
   Recycle entry funds from at most the initial 20 certificates; rebate the excess.
   Keep gateway upkeep funded from actual receipts. Providers still grow to six,
   and I247's static fragmentation effect remains. However the endpoint is 33.33
   issuer-free audit completions, rather than 20 under the full return. The
   additional decline and entry acceleration require the growing-demand return.

This is a narrower ablation claim than “remove the loop and all lock-in disappears.”
Static fragmentation does survive the second ablation. Inherited one-pass effects
are not being relabeled as new.

A deliberately reduced static comparator keeps n = 2. Fees 0.2, 0.4 and 0.8 then
all leave issuer-free usability at 100; f is not an input to provider supply there.
Existing dynamic economic theories may already include the missing supply/finance
edge. No assertion of expert surprise or historical omission follows from choosing
this reduced comparator.

## Conditions where entry does not concentrate issuer dependence

**Cheap grounded attestations.** If every provider's independently interpretable
proof costs only 0.2 to maintain, all ten possible formats cost at most 2, below
B = 3. Fee-financed entry still operates, but independent coverage remains complete
and certificate demand never acquires the mandatory part. The four-period entry
count is six; further entry up to the modeled cap stays independently recognizable.
This is conditional on grounded equivalence really being sufficient, not merely
syntactic compatibility.

**Plural independent guarantees.** B's guarantee must be accepted by counterparties
and assess obligations without needing A's continuing status, key or permission.
Common verifiers can accept multiple issuers; B also needs actual provisioning.
In the toy, default users still choose A, producing exactly the same n = 10 and
Q = 84 as the dependent arm, but all 100 audit transactions remain possible
without A. This is the sharpest use-versus-indispensability distinction. A reseller
that cannot operate after A exits would not count as a plural guarantee. The
resource cost of provisioning B is not a free benefit established by this toy.

**Public recognition.** A publicly funded independent obligation registry can
recognize all bounded authentic provider proofs directly. Fee-funded private entry
then expands recognized options without making A indispensable. This assumes
standing, accuracy and maintenance funding; “public” alone is insufficient and its
fiscal cost is outside the toy's welfare calculation.

**Protected focal routes.** If C retains P1/P2 everywhere, a fixed panel using those
routes stays issuer-independent even while other providers rely on A. This is a
boundary to the focal-task prediction, not proof of market-wide independent exit.
The relevant metric must disclose which future tasks and counterparties it covers.

**Finance that builds independent paths.** If entry grants purchase durable
independent adapter/guarantee capacity as well as native integration, the same
receipt-funded supply loop can expand issuer-free transaction coverage. That is
a possible same-mechanism beneficial branch; it is not run as an extra numerical
arm here.

## Beneficial mirror and appropriate intervention

The loop can genuinely benefit users by making viable independent task providers
and assurance infrastructure affordable. Cheap grounded proofs or plural guarantees
let the same receipts reproduce provider variety **without** concentration of
issuer dependence. The plural arm keeps the financing return and A certificate
use unchanged; it does not obtain its benefit by deleting entry or suppressing fees.

Appropriate comparisons therefore distinguish:

- disabling or reducing entry finance;
- capping demand-linked recycling, while leaving gateway maintenance intact;
- funding independent recognition alongside entry;
- accepting plural independently provisioned guarantees;
- preserving complete public/manual recognition of authentic bounded obligations.

Only optimizing export files or comparing nominal task-provider prices misses the
specified funding/recognition state. But blanket suppression of certificates or
entry can remove real assurance and access benefits. No net-welfare or illegitimacy
recommendation is inferred here.

## Path dependence: conditional, not a general hysteresis theorem

At f = 0.2, a system beginning with n = 2 cannot fund a first project under the
no-rollover rule and retains 100 issuer-free audit completions. If it previously
expanded to n = 10 and the gateway is operating, Q = 84 yields enough gateway
upkeep at the same f = 0.2; it retains only 20 issuer-free audit completions.
The checked minimum upkeep fee at that state is G/(beta*84), about 0.09524.

This history dependence also requires entrants to remain viable and the recognition
arrangement to persist. Banking small receipts, provider exit, independent public
investment or a different recognition allocation can change or eliminate it.
The toy does not prove general bistability, permanent issuer dominance or social
irreversibility.

## Failed and insufficient versions retained

**F0 — the original raw prediction.** “If adapter budgets bind, adding providers
can reduce anchor-free transactions despite cheaper services and better exports.”
This largely repeats D4:I247 and does not make the funding return essential.
It remains preserved in raw M087, but is insufficient as the strengthening.

**F1 — fees with exogenous entry.** Adding a fee variable while leaving n independent
of receipts produces no fee-driven entry effect. The executed static comparator
retains this failure, rather than treating certificate rhetoric as a mechanism.

**F2 — zero independent legacy paths by decree.** An early simplifying construction
would make every transaction require A once n exceeded the adapter budget. That
overstates dependence and hides the retention choice. The developed model retains
L = 2 independent paths; only the specified fixed-panel expected coverage changes.

**F3 — issuer certificate use equals issuer power.** The plural-guarantee run has
the same n = 10 and A certificate flow = 84 as the dependent arm, but issuer-free
usability = 100 instead of 20. Certificate throughput cannot identify indispensable
recognition or provider control.

**F4 — a universal permanent seed threshold.** If unused receipts can accumulate
indefinitely and projects/gateway launch can draw on that reserve, smaller fees can
eventually seed entry. The no-rollover threshold and permanent low-state inference
do not transfer. This banking variant is a conceptual counterexample, not an
additional executed arm. Finite-horizon acceleration may remain but needs recomputation.

**F5 — independence loss from resampling requests.** Sampling only newly entering
providers would mechanically lower independent-route shares. The implemented audit
instead fixes original P1/P2 requests and enumerates provider-neutral allocation.
Grandfathering those routes supplies the explicit contrary result.

**F6 — more entry means better market competition in every sense.** Provider count
does not establish price rivalry, service improvement, beneficial diversity or
less infrastructure concentration. Those outcomes are not computed here.

None of these failures removes M087 or any component from the population.

## Falsifier, uncertainty and next measurement

The conditional mechanism fails in an application if receipts do not relax the
entry-financing constraint, if additional certificate demand does not feed entry,
if counterparties preserve independently sufficient paths for the specified tasks,
or if providers can raise equally cheap external finance independently of A.
Fee increases can also reduce certificates enough to lower entry rather than
raise it. An incompatible-format story without measured budget/recognition changes
would not validate this loop.

The useful state is **issuer-free completion on a fixed future task/counterparty
panel**, recorded alongside provider entry, actual certificate use, funding earmarks,
independent-proof capacity and accepted alternative guarantees. Match quality,
export sufficiency, grant types and ordinary completion; do not substitute provider
counts or A's market share for completed recognition tests.

No real population was tested. Parameters, request/allocation rules and financing
limits are chosen to expose a possible interaction, not fit data. The mathematics
is elementary and inherited. Whether the specific composition adds anything to
existing economic/network theory remains deliberately unresolved while courts,
ratings and novelty judgments are paused.
