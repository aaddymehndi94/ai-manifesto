import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';

/**
 * BLUE-TEAM CONDITIONAL CONSTRUCTION, not a simulated behavioral discovery.
 * True qualities are equal. All reported means and dispersions follow the
 * declared Beta-Bernoulli model. The observation path is deliberately balanced:
 * each probe observes one success and one failure, a possible finite iid path.
 * It is NOT a random draw or a claim that this path is typical.
 *
 * One probe pair consumes two trial observations and two calibration updates;
 * the updates use those same observations, not four distinct measurements.
 * Budgets are identical across arms. No output file is written by this module.
 */

export function betaReport(observations) {
  assert(Number.isInteger(observations) && observations >= 0 && observations % 2 === 0);
  const alpha = 1 + observations / 2;
  const beta = 1 + observations / 2;
  const total = alpha + beta;
  return {
    mean: alpha / total,
    variance: alpha * beta / (total * total * (total + 1)),
    sigma: Math.sqrt(alpha * beta / (total * total * (total + 1))),
    observations,
    posterior: { alpha, beta },
  };
}

export function score(report, rule, kappa = 1) {
  if (rule === 'lcb') return report.mean - kappa * report.sigma;
  if (rule === 'ucb') return report.mean + kappa * report.sigma;
  throw new Error(`Unknown score rule: ${rule}`);
}

function state(observations, kappa) {
  const reports = observations.map(betaReport);
  return {
    calibrationObservations: [...observations],
    truthfulMeans: reports.map(r => r.mean),
    posteriorSigmas: reports.map(r => r.sigma),
    lcbScores: reports.map(r => score(r, 'lcb', kappa)),
    lcbGapAminusB: score(reports[0], 'lcb', kappa) - score(reports[1], 'lcb', kappa),
    comparativeVariance: reports[0].variance + reports[1].variance,
    // Independent posteriors are continuous and symmetric about the same .5.
    // Thus their difference is symmetric: this is an algebraic fact here,
    // not a numerical estimate of a real-world superiority probability.
    posteriorProbabilityAsuperior: 0.5,
  };
}

export function runCase({ name, mode, rounds = 20, kappa = 1 }) {
  assert(Number.isInteger(rounds) && rounds > 0);
  const observations = [8, 2];
  const allocatedPairs = [0, 0];
  let tieCursor = 0;
  let probeNumber = 0;
  const initial = state(observations, kappa);
  const history = [];

  function chooseMaximum(values) {
    const gap = values[0] - values[1];
    if (Math.abs(gap) < 1e-14) {
      const choice = tieCursor;
      tieCursor = 1 - tieCursor;
      return choice;
    }
    return gap > 0 ? 0 : 1;
  }

  for (let round = 0; round < rounds; round++) {
    for (let slot = 0; slot < 2; slot++) {
      const reports = observations.map(betaReport);
      let chosen;
      if (mode === 'fixed-balanced') {
        // Remove score -> future trial allocation. Ranking is still reported.
        chosen = slot;
      } else if (mode === 'uncertainty-pursuing') {
        chosen = chooseMaximum(reports.map(r => score(r, 'ucb', kappa)));
      } else if (mode === 'reserved-lcb' && slot === 1) {
        // Half this tiny budget is reserved for the less-measured regime.
        chosen = chooseMaximum(reports.map(r => r.sigma));
      } else if (mode === 'coupled-lcb' || mode === 'reserved-lcb') {
        chosen = chooseMaximum(reports.map(r => score(r, 'lcb', kappa)));
      } else {
        throw new Error(`Unknown allocation mode: ${mode}`);
      }
      observations[chosen] += 2;
      allocatedPairs[chosen]++;
      probeNumber++;
      history.push({ probeNumber, round, chosen: chosen === 0 ? 'A' : 'B', ...state(observations, kappa) });
    }
  }

  const final = state(observations, kappa);
  assert.deepEqual(final.truthfulMeans, [0.5, 0.5]);
  assert.equal(observations[0] + observations[1], 10 + 4 * rounds);
  assert.equal(allocatedPairs[0] + allocatedPairs[1], 2 * rounds);
  return {
    name, mode, kappa,
    status: 'CONDITIONAL_MODEL_RESULT_ON_A_HAND_SELECTED_BALANCED_PATH',
    trueQuality: [0.5, 0.5],
    initial, final,
    uniqueNewTrialObservations: 4 * rounds,
    calibrationUpdatesUsingThoseSameObservations: 4 * rounds,
    allocatedProbePairs: allocatedPairs,
    meanAdvantage: 0,
    observationPath: 'Each selected pair is [success, failure]; all posteriors use Beta(1,1) and the exact observed counts.',
    history,
  };
}

export function runChecks() {
  const cases = [
    runCase({ name: 'risk_penalized_coupled', mode: 'coupled-lcb' }),
    runCase({ name: 'edge_removed_fixed_balanced', mode: 'fixed-balanced' }),
    runCase({ name: 'reserved_exploration', mode: 'reserved-lcb' }),
    runCase({ name: 'uncertainty_pursuing', mode: 'uncertainty-pursuing' }),
    runCase({ name: 'precision_ignored', mode: 'coupled-lcb', kappa: 0 }),
  ];
  const [coupled, balanced, reserve, pursuing, ignored] = cases;

  assert.deepEqual(coupled.final.calibrationObservations, [88, 2]);
  assert.deepEqual(balanced.final.calibrationObservations, [48, 42]);
  assert(coupled.final.lcbGapAminusB > coupled.initial.lcbGapAminusB);
  assert(balanced.final.lcbGapAminusB < balanced.initial.lcbGapAminusB);
  assert(coupled.final.comparativeVariance < coupled.initial.comparativeVariance);
  assert(coupled.final.comparativeVariance > balanced.final.comparativeVariance);
  assert(reserve.final.calibrationObservations[1] > 2);
  assert(pursuing.final.calibrationObservations[1] > 2);
  assert.equal(ignored.final.lcbGapAminusB, 0);
  assert.deepEqual(ignored.allocatedProbePairs, [20, 20]);
  assert(coupled.history.every(x => x.chosen === 'A'));
  assert(cases.every(x => x.uniqueNewTrialObservations === 80));
  assert(cases.every(x => x.final.posteriorProbabilityAsuperior === 0.5));

  // Fresh response support: A keeps its valid calibrated regime; B's new
  // regime has not been probed. True quality can still equal .5 in this world.
  // Any other B quality gives the same A-only *post-change* observations.
  // The reset is an explicit extra assumption, not inferred from concentration.
  const newSupportState = state([88, 0], 1);
  assert(newSupportState.comparativeVariance > coupled.final.comparativeVariance);

  return {
    disclosure: 'No stochastic replication, user manipulation, agent emergence, historical novelty, or empirical prevalence claim. LCB/UCB and Beta variance are inherited statistical machinery.',
    cases,
    pairedState: {
      candidate: 'E4:M005',
      sameTrueMeansAndBudget: true,
      riskScoreGap: coupled.final.lcbGapAminusB,
      comparativeVarianceCoupled: coupled.final.comparativeVariance,
      comparativeVarianceBalanced: balanced.final.comparativeVariance,
      comparativeKnowledgeDebtAgainstBalanced: coupled.final.comparativeVariance - balanced.final.comparativeVariance,
      debtRatioAgainstBalanced: coupled.final.comparativeVariance / balanced.final.comparativeVariance,
      absoluteStationaryVarianceWorsened: false,
      posteriorProbabilityAsuperior: 0.5,
    },
    extraSupportChange: {
      status: 'EXPLICIT_EXTRA_ASSUMPTION_NOT_A_RESULT_OF_THE_STATIONARY_LOOP',
      description: 'A keeps valid support, while B enters an independently new unprobed response regime; prior B observations no longer identify its current parameter.',
      state: newSupportState,
      postChangeBparametersObservationallyEquivalentGivenAonly: [0.2, 0.5, 0.8],
      limit: 'Equivalence concerns only A-only post-change observations plus an explicitly independent new B parameter; old B records and unchanged regimes cannot justify it.',
    },
    checksPassed: true,
  };
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const result = runChecks();
  // Keep CLI output compact; importing callers can inspect complete histories.
  console.log(JSON.stringify({
    disclosure: result.disclosure,
    cases: result.cases.map(({ history, ...rest }) => rest),
    pairedState: result.pairedState,
    extraSupportChange: result.extraSupportChange,
    checksPassed: result.checksPassed,
  }, null, 2));
}
