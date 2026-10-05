# E4:M005: explicit risk-ranking and comparative measurement

Dated extension: 2026-10-05. BLUE TEAM only. The original E4:M005 in
`raw/stream-a.json` remains unchanged. This extension makes its ranking edge
conditional and corrects an overly broad interpretation of its knowledge claim.
No literature searches, scores, novelty courts, pruning or winner selection.

## Strongest conditional statement

If an evaluator allocates a fixed trial/calibration budget to the largest
**risk-adjusted index** `R_i = mu_i - kappa * sigma_i`, where `kappa > 0`,
and observations mainly calibrate the provider/regime selected for those trials,
then a more-measured provider can receive more future measurements at **equal
true quality and equal truthfully computed mean estimates**. Its index advantage
can reinforce itself because its uncertainty falls faster, not because its
estimated quality rises.

The same allocation can leave comparative precision substantially worse than an
equal-budget independent allocation. In a stationary cumulative model this does
**not** imply that absolute comparative knowledge deteriorates. Exact loss of
identification needs an additional missing-support condition, such as a new
unprobed response regime whose parameter is independent of its old regime.

`mu - kappa*sigma` is an LCB-like decision index, not automatically a calibrated
confidence limit or a proved safety guarantee. The evaluator might legitimately
prefer a better-known service. A higher index is not evidence of higher mean
quality, superior welfare or wrongdoing by a provider.

## State and return loop

There are two hypothetical providers, A and B, with equal true response quality
`theta_A = theta_B = 0.5`. The evaluator does not know their equality. It maintains
independent Beta(1,1) priors and reports their actual posterior means and standard
deviations from a standardized calibration record.

One selected probe pair produces two response observations and supplies their
two calibration updates. These are the **same** observations, not four separate
resources. Every round permits two pairs: four trial observations and four
calibration updates. All comparison arms receive the same total budget.

The constructed realized observation path is deliberately balanced: each pair
contains one success and one failure. This is a possible finite independent
Bernoulli realization, but it was hand-selected to isolate precision from sample
mean fluctuations. It is not a random simulation or evidence that the trajectory
is likely. Reporting this path as discovered stochastic lock-in would be wrong.

For an even count `n_i`, the posterior is Beta(1+n_i/2, 1+n_i/2), so:

```
mu_i = 0.5
sigma_i^2 = 1 / [4(n_i + 3)]
R_i = 0.5 - kappa / [2 sqrt(n_i + 3)]
```

Start with the same unequal pilot counts in every arm: `n_A=8`, `n_B=2`.
Their prior, true quality and mean estimates are matched; the initial measurement
advantage is explicitly present rather than attributed to an invented quality
difference. Legibility or earlier routing could create that seed, but the code
does not test explanation wording or establish the seed's empirical origin.

With `kappa > 0`, `n_A > n_B` gives `R_A > R_B`. Selecting A adds observations to
A, decreases `sigma_A`, and increases `R_A-R_B` while B's count stays fixed:

```
more usable A calibration
  -> smaller sigma_A
  -> larger R_A - R_B at equal mu
  -> more A trial allocation
  -> more usable A calibration
```

The count allocation also consumes the fixed budget that could have measured B.
This is the cross-component return edge: **risk-adjusted ranking controls the
next policy-specific measurement support**. Removing it should remove the
reinforcing precision advantage, not necessarily erase every inherited ranking
difference.

The state consists of `(n_A, n_B, mu_A, mu_B, sigma_A, sigma_B)` plus allocation
and any regime-validity labels. Unlike a generic claim that accurate simulators
improve rankings, this specifies what is ranked and how precision affects it.

## Paired measurements: decision advantage versus comparative precision

Define:

```
G = R_A - R_B                            # decision-index advantage
V_delta = Var(theta_A-theta_B | record) # comparative posterior variance
D = V_delta(coupled) - V_delta(independent, same total budget)
```

In this independent-posterior construction,
`V_delta = sigma_A^2 + sigma_B^2`. `D` is a counterfactual measurement debt, not
a welfare loss or a number that certifies novelty.

After 20 rounds, all arms have 90 total observations including the same pilot,
and 80 new observations. The executable model gives:

| Allocation rule | Final `(n_A,n_B)` | Final LCB-like gap `G` | Comparative variance `V_delta` |
|---|---|---:|---:|
| Coupled risk-penalized argmax | (88,2) | 0.171193 | 0.052747 |
| Fixed balanced, ranking edge removed | (48,42) | 0.004522 | 0.010458 |
| Half-budget reserve for the less-measured regime | (48,42) | 0.004522 | 0.010458 |
| Uncertainty-pursuing `mu+kappa*sigma` | (46,44) | 0.001504 | 0.010421 |
| Ignore precision, `kappa=0`, alternating ties | (48,42) | 0 | 0.010458 |

The initial gap was 0.072851 and initial comparative variance was 0.072727.
Thus coupled allocation strengthens its index lead but its comparative variance
still **falls** from 0.072727 to 0.052747. The supported adverse comparison is
with the same-budget balanced counterfactual, not with its own past: its final
comparative variance is about **5.04 times** that counterfactual's.

In every arm both posterior means stay 0.5. Independent continuous posteriors
are symmetric around that value, so `Pr(theta_A > theta_B | record)=0.5`.
The evaluator's increasing preference for A is therefore not an increasing
posterior probability that A has higher mean quality. It is a preference about
uncertainty under the specified index.

For indefinite stationary continuation, B's two observations remain the same in
the coupled arm, leaving `V_delta -> 1/[4(2+3)] = 0.05`. Balanced or adequately
reserved probing makes both counts diverge and `V_delta -> 0`. This is failure
of consistent comparative precision under a bounded alternative sample, not
structural nonidentification of a stationary Bernoulli parameter from the
distribution of its existing observed samples. The asymptotic observation is
conditional algebra; no new bandit or statistical theorem is claimed.

## Counterexamples and cross-edge removals

1. **Fixed balanced calibration/trials:** scores are still calculated honestly,
   but they do not determine future probes. The pilot count difference remains
   bounded and the index gap shrinks, rather than increasing. This removes the
   return edge and kills the reinforcing effect.
2. **Reserved exploration:** a positive lasting reserve gives B new observations
   even while exploitation prefers A. The half-budget reserve is tested here;
   a smaller fixed positive reserve yields less comparative precision but can
   still eliminate the stationary variance floor if it gives each regime
   infinitely many valid observations. A reserve that vanishes too fast or never
   covers a relevant rare regime need not suffice.
3. **Uncertainty pursuit:** using `mu+kappa*sigma` with the same equal means
   favors the less-measured regime until its precision catches up. Precision is
   no longer the positive allocation advantage assumed by the original arrow.
4. **Mean-only selection:** with `kappa=0` and count-independent tie handling,
   precision has no ranking effect. An identity-biased tie rule might still
   produce a monopoly, but that would be a different causal explanation.
5. **Perfect transferable calibration:** if one valid observation calibrates
   both response regimes equally, A's trials also reduce B's uncertainty and
   there is no policy-local starvation mechanism. This boundary is analytical,
   not an additional tested arm.
6. **Changing means or objectives:** in real samples a mean revision can dominate
   the uncertainty change. For example B wins when
   `mu_B-mu_A > kappa*(sigma_B-sigma_A)`. A comparison-seeking evaluator, rather
   than one optimizing a safe current service index, can rationally allocate
   probes differently. The loop does not follow from precision alone.

Reserved or balanced probing need **not flip the exploitation ranking**. In the
fixed-balanced arm A still has six more pilot observations and a slightly larger
finite-time index. What the control restores is comparative support and the
absence of reinforcing advantage. The original phrase that a small reserve
"can break persistence" must not be read as guaranteeing a rank reversal.

## When knowledge actually becomes unidentifiable

Add an explicit response-support change: A's old regime remains valid, but B
enters a new regime with an independent current parameter. The main matched
world can still have both true current qualities 0.5. Old B calibration no
longer measures its current parameter; that fact must be established, not
inferred just from fewer trials.

If all subsequent probes are A-only, worlds with B's new quality 0.2, 0.5 or 0.8
have identical post-change observations. Conditional on that missing-support
information set, current comparative quality is not identified. In a declared
uniform prior the new B standard deviation is 0.288675 rather than the previous
0.223607; with A at 88 observations, comparative variance is 0.086081. That is
an actual increase only because a **new independent unobserved state** entered,
not because collecting more cumulative evidence destroyed existing knowledge.

This extra construction does not establish that real simulator regimes drift,
that old observations are always unusable or that every unselected provider
becomes unidentifiable. Independent post-change probing or a validated
cross-regime transport relation defeats the obstruction.

## Same-mechanism beneficial case

Suppose only A is feasible in the intended physical deployment setting, while B
is still relevant to a broader comparative research exercise. Concentrating the
same budget on A makes its estimate sufficiently precise sooner. In the
balanced-path example, the administrative index threshold `R_A >= 0.4` requires
22 A observations: starting at eight, coupled selection needs seven new paired
probes, while an A/B alternation reaches its seventh A pair only at the thirteenth
probe slot. This is a genuine faster local-assurance benefit of the same
precision/allocation loop; it does not require a quality mean advantage.

The threshold is a chosen toy decision rule, not a medical or deployment safety
standard. B's lost comparison support may have little practical cost in that
setting, or matter greatly for public learning about future alternatives. A
provider benefit and a social harm are independent variables.

## Test status, falsifier and limits

`strengthened-M005-model.mjs` was executed with assertions for all five arms,
matching budgets, matched true/posterior means, count updates, increasing versus
shrinking index gaps, the stationary comparison debt, the zero-precision arm and
the explicitly separate fresh-support case. It prints results without writing
files. The observation path, priors, ranking rule and routing are hand-specified.
No humans or language agents were simulated; stochastic replication is **unrun**.

Minimal falsifier of the specific return mechanism: at equal mean reports and
valid policy-local calibration, a greater usable count neither increases the
declared risk index nor induces more future probes; or independently balancing
probes fails to remove the reinforcing gap under the otherwise unchanged model.
The first would contradict the chosen algebra here, but is a real empirical
question about whether an institution actually uses this rule and count mapping.

The proposed useful paired object is **risk-index advantage versus comparative
measurement debt**, supplemented by regime-validity coverage. LCB/UCB selection,
Beta-Bernoulli updating, partial-feedback exploration and sample allocation
mathematics are inherited material. The construction is not a new theorem,
certified novelty, measured prevalence, final candidate grade or a reason to
discard its components. All previous records remain available.
