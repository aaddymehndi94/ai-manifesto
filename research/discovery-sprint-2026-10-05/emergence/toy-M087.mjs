import assert from 'node:assert/strict';

// Conditional construction only. No empirical agents, people, contracts or markets.
// Equal quality, exports and local grants are inputs, not observed results.
const settings = Object.freeze({
  population: 100,
  initialProviders: 2,
  providerCap: 10,
  rounds: 4,
  independentAdapterBudget: 3,
  independentAdapterCost: 1,
  gatewayCounterpartyCost: 0.5,
  entryProjectCost: 6,
  gatewayPeriodCost: 2,
  entryRevenueShare: 0.75,
  gatewayRevenueShare: 0.25,
  optionalCertificateFraction: 0.2,
  taskQuality: 1,
  exportCompleteness: 1,
  localGrants: ['read_export', 'propose', 'submit_bounded_transaction'],
  auditRequests: 'Fixed tasks requesting original providers P1/P2; average over provider-neutral adapter allocation across counterparties.',
  feePopulation: 'A representative 100-transaction market flow; distinct from the fixed audit panel.',
});

export function recognition(providerCount, gatewayFunded, options = {}) {
  const adapterCost = options.cheapGroundedAttestations ? 0.2 : settings.independentAdapterCost;
  const directCapacity = Math.floor(settings.independentAdapterBudget / adapterCost);
  if (options.publicRecognition || providerCount <= directCapacity) {
    return {
      mode: options.publicRecognition ? 'public_independent_recognition' : 'independent_adapters',
      directFraction: 1,
      ordinaryFraction: 1,
      anchorFreeFraction: 1,
    };
  }
  if (gatewayFunded) {
    // Counterparties preserve as many independent paths as their remaining budget permits.
    // They do not discard every legacy path, and do not need to be hostile to users.
    const retainedDirect = Math.max(0, Math.floor(
      (settings.independentAdapterBudget - settings.gatewayCounterpartyCost) / adapterCost,
    ));
    const directFraction = Math.min(providerCount, retainedDirect) / providerCount;
    return {
      mode: options.pluralGuarantees ? 'plural_recognized_guarantees' : 'gateway_plus_retained_independent_paths',
      directFraction,
      ordinaryFraction: 1,
      anchorFreeFraction: options.pluralGuarantees || options.grandfatherAuditRoutes ? 1 : directFraction,
    };
  }
  const directFraction = Math.min(providerCount, directCapacity) / providerCount;
  return {
    mode: 'partial_independent_recognition_without_funded_gateway',
    directFraction,
    ordinaryFraction: directFraction,
    anchorFreeFraction: directFraction,
  };
}

function observables(providerCount, gatewayFunded, options) {
  const r = recognition(providerCount, gatewayFunded, options);
  // Users in direct-recognition paths sometimes buy an optional assurance certificate.
  // The rest use the ordinary accepted gateway, including in the plural-issuer arm.
  // Actual issuer-A certificate use is not the same thing as issuer-A indispensability.
  const certificateVolume = settings.population * (
    settings.optionalCertificateFraction * r.directFraction
    + Math.max(0, r.ordinaryFraction - r.directFraction)
  );
  return {
    providerCount,
    gatewayFunded,
    recognitionMode: r.mode,
    issuerACertificateVolume: certificateVolume,
    ordinaryUsableTransactions: settings.population * r.ordinaryFraction,
    anchorFreeUsableTransactions: settings.population * r.anchorFreeFraction,
    anchorFreeProviderOptions: options.pluralGuarantees || options.publicRecognition
      ? providerCount : providerCount * r.directFraction,
    taskQuality: settings.taskQuality,
    exportCompleteness: settings.exportCompleteness,
    localGrants: [...settings.localGrants],
  };
}

export function fixedPanelIndependentFraction(providerCount, retainedDirect) {
  // Enumerate equal-weight direct-adapter allocations. The requested provider IDs
  // remain P1/P2; the audit is not resampled toward newly entering providers.
  let allocations = 0;
  let coveredPanelRequests = 0;
  const visit = (next, chosen) => {
    if (chosen.length === retainedDirect) {
      allocations += 1;
      coveredPanelRequests += Number(chosen.includes(1)) + Number(chosen.includes(2));
      return;
    }
    for (let p = next; p <= providerCount; p += 1) visit(p + 1, [...chosen, p]);
  };
  visit(1, []);
  return coveredPanelRequests / (2 * allocations);
}

export function simulate({ fee, initialProviders = settings.initialProviders,
  initialGatewayFunded = false, rounds = settings.rounds, ...options }) {
  let providerCount = initialProviders;
  let gatewayFunded = initialGatewayFunded;
  const trace = [];
  for (let round = 0; round < rounds; round += 1) {
    const before = observables(providerCount, gatewayFunded, options);
    const receipts = fee * before.issuerACertificateVolume;
    // This ablation caps which receipts replenish entry funding; excess is rebated.
    // Gateway maintenance still receives its ordinary earmark from actual receipts.
    const entryEligibleVolume = options.entryReceiptCap === undefined
      ? before.issuerACertificateVolume
      : Math.min(before.issuerACertificateVolume, options.entryReceiptCap);
    const entryBudget = settings.entryRevenueShare * fee * entryEligibleVolume;
    const gatewayBudget = options.disableGatewayFunding ? 0
      : settings.gatewayRevenueShare * receipts;
    const affordableEntries = options.disableEntryFunding ? 0
      : Math.floor((entryBudget + 1e-10) / settings.entryProjectCost);
    const financedEntries = Math.min(settings.providerCap - providerCount, affordableEntries);
    const nextGatewayFunded = gatewayBudget + 1e-10 >= settings.gatewayPeriodCost;
    trace.push({
      round,
      ...before,
      certificateFee: fee,
      receipts,
      entryBudget,
      gatewayBudget,
      financedEntries,
      nextProviderCount: providerCount + financedEntries,
      nextGatewayFunded,
    });
    providerCount += financedEntries;
    gatewayFunded = nextGatewayFunded;
    // Projects are indivisible; unused earmarks are rebated, not banked indefinitely.
    // Entrants remain viable on ordinary task revenue; exit/turnover is omitted here.
  }
  return {
    assumptions: settings,
    intervention: { fee, initialProviders, initialGatewayFunded, rounds, ...options },
    trace,
    endpoint: observables(providerCount, gatewayFunded, options),
  };
}

export function runChecks() {
  const lowFee = simulate({ fee: 0.2 });
  const highFee = simulate({ fee: 0.4 });
  const fasterFee = simulate({ fee: 0.8 });
  const noEntryFunding = simulate({ fee: 0.4, disableEntryFunding: true });
  const noDemandReturn = simulate({ fee: 0.4, entryReceiptCap: 20 });
  const cheapGrounded = simulate({ fee: 0.4, cheapGroundedAttestations: true });
  const plural = simulate({ fee: 0.4, pluralGuarantees: true });
  const publicRoutes = simulate({ fee: 0.4, publicRecognition: true });
  const grandfatherAuditRoutes = simulate({ fee: 0.4, grandfatherAuditRoutes: true });
  const lowFeeAfterExpansion = simulate({ fee: 0.2, initialProviders: 10, initialGatewayFunded: true });

  for (const n of [4, 7, 10]) {
    assert(Math.abs(fixedPanelIndependentFraction(n, 2) - 2 / n) < 1e-10);
  }

  assert.equal(lowFee.endpoint.providerCount, 2);
  assert.equal(lowFee.endpoint.anchorFreeUsableTransactions, 100);
  assert.equal(highFee.endpoint.providerCount, 10);
  assert.equal(highFee.endpoint.anchorFreeUsableTransactions, 20);
  assert.equal(noEntryFunding.endpoint.providerCount, 2);
  assert.equal(noEntryFunding.endpoint.anchorFreeUsableTransactions, 100);
  assert.equal(noDemandReturn.endpoint.providerCount, 6);
  assert(Math.abs(noDemandReturn.endpoint.anchorFreeUsableTransactions - 100 / 3) < 1e-8);
  assert.equal(cheapGrounded.endpoint.providerCount, 6);
  assert.equal(cheapGrounded.endpoint.anchorFreeUsableTransactions, 100);
  assert.equal(publicRoutes.endpoint.anchorFreeUsableTransactions, 100);
  assert.equal(grandfatherAuditRoutes.endpoint.providerCount, highFee.endpoint.providerCount);
  assert.equal(grandfatherAuditRoutes.endpoint.issuerACertificateVolume, highFee.endpoint.issuerACertificateVolume);
  assert.equal(grandfatherAuditRoutes.endpoint.anchorFreeUsableTransactions, 100);
  assert.equal(grandfatherAuditRoutes.endpoint.anchorFreeProviderOptions, 2);
  assert.equal(plural.endpoint.providerCount, highFee.endpoint.providerCount);
  assert.equal(plural.endpoint.issuerACertificateVolume, highFee.endpoint.issuerACertificateVolume);
  assert.equal(plural.endpoint.anchorFreeUsableTransactions, 100);
  assert.equal(lowFeeAfterExpansion.endpoint.anchorFreeUsableTransactions, 20);

  const matchedArms = [lowFee, highFee, fasterFee, noEntryFunding, noDemandReturn,
    cheapGrounded, plural, publicRoutes, grandfatherAuditRoutes, lowFeeAfterExpansion];
  for (const arm of matchedArms) {
    for (const observation of [...arm.trace, arm.endpoint]) {
      assert.equal(observation.taskQuality, 1);
      assert.equal(observation.exportCompleteness, 1);
      assert.deepEqual(observation.localGrants, settings.localGrants);
      assert.equal(observation.ordinaryUsableTransactions, 100);
    }
  }
  const endpoint = arm => ({
    providers: arm.endpoint.providerCount,
    ordinaryUsableTransactions: arm.endpoint.ordinaryUsableTransactions,
    anchorFreeUsableTransactions: arm.endpoint.anchorFreeUsableTransactions,
    issuerACertificateVolume: arm.endpoint.issuerACertificateVolume,
  });
  return {
    status: 'CONDITIONAL_MODEL_RESULT_NOT_EMPIRICAL_OR_NOVELTY_EVIDENCE',
    settings,
    checksPassed: true,
    fixedPanelAllocationCheckPassed: true,
    endpoints: {
      lowFee: endpoint(lowFee), highFee: endpoint(highFee), fasterFee: endpoint(fasterFee),
      noEntryFunding: endpoint(noEntryFunding), noDemandReturn: endpoint(noDemandReturn),
      cheapGrounded: endpoint(cheapGrounded), pluralGuarantees: endpoint(plural),
      publicRecognition: endpoint(publicRoutes), lowFeeAfterExpansion: endpoint(lowFeeAfterExpansion),
      grandfatherAuditRoutes: endpoint(grandfatherAuditRoutes),
    },
    highFeeTrace: highFee.trace,
    staticComparison: [0.2, 0.4, 0.8].map(fee => ({
      fee,
      ...observables(2, false, {}),
      note: 'Entry held exogenous: changing a certificate fee cannot create providers or alter recognition.',
    })),
    caveats: [
      'Fee-inelastic certificate demand, project indivisibility, earmarks, no rollover and omitted provider exit are assumptions.',
      'Certificate use is not issuer ownership, provider control, user welfare or illegitimacy.',
      'Fragmentation and elementary budget/network mathematics are inherited; no theorem novelty claimed.',
    ],
  };
}

if (process.argv[1] && new URL(import.meta.url).pathname === process.argv[1]) {
  process.stdout.write(JSON.stringify(runChecks(), null, 2) + '\n');
}
