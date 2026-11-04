import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

export const CustomsCalculator: React.FC = () => {
  // Active Tab
  const [activeTab, setActiveTab] = useState<'alcohol' | 'tobacco' | 'cash' | 'meds'>('alcohol');

  // Alcohol state
  const [alcoholLiters, setAlcoholLiters] = useState<number>(1);
  const [passengerAge, setPassengerAge] = useState<number>(25);

  // Tobacco state
  const [cigaretteCount, setCigaretteCount] = useState<number>(200);

  // Cash state
  const [twdCash, setTwdCash] = useState<number>(50000);
  const [foreignUsdCash, setForeignUsdCash] = useState<number>(5000);
  const [rmbCash, setRmbCash] = useState<number>(5000);
  const [goldValueUsd, setGoldValueUsd] = useState<number>(0);

  // Medicines state
  const [singleTypeCount, setSingleTypeCount] = useState<number>(6);
  const [totalMedsCount, setTotalMedsCount] = useState<number>(18);

  return (
    <section id="customs-calculator" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Interactive Duty & Allowance Estimator
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Taiwan Customs Quota & Channel Calculator
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Verify whether your items fall within Taiwan's duty-free allowances or require Red Channel declaration upon landing.
          </p>
        </div>

        {/* Tab Controls (Segmented Control §1.A) */}
        <div className="mt-8 flex items-center gap-2 p-1.5 bg-slate-200 dark:bg-slate-800 rounded-xl overflow-x-auto max-w-2xl">
          <button
            type="button"
            onClick={() => setActiveTab('alcohol')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'alcohol'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Alcohol Quota (1L)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('tobacco')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'tobacco'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Tobacco Cigarettes (200 sticks)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cash')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'cash'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Cash & Currencies
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('meds')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'meds'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            OTC Meds (12/36 Rule)
          </button>
        </div>

        {/* Tab Content Box */}
        <div className="mt-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs">
          
          {/* 1. ALCOHOL CALCULATOR */}
          {activeTab === 'alcohol' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Alcohol Duty-Free & Passenger Allowance
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Statute: Tobacco & Alcohol Administration Act. Legal drinking & duty-free import age in Taiwan is <strong>18 years old</strong>.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Passenger Age (Years):
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={120}
                      value={passengerAge}
                      onChange={(e) => setPassengerAge(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Total Volume of Alcohol Brought (Liters):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min={0}
                        max={8}
                        step={0.5}
                        value={alcoholLiters}
                        onChange={(e) => setAlcoholLiters(parseFloat(e.target.value))}
                        className="w-full max-w-xs accent-red-600"
                      />
                      <span className="text-base font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                        {alcoholLiters} L
                      </span>
                    </div>
                    <div className="mt-2 flex gap-2">
                      {[0.7, 1.0, 1.5, 2.0, 3.0, 5.0].map((vol) => (
                        <button
                          key={vol}
                          type="button"
                          onClick={() => setAlcoholLiters(vol)}
                          className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                        >
                          {vol}L
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                  <strong>Luggage Placement:</strong> All liquids exceeding 100ml must be in <em>Checked Baggage</em> unless purchased at the departure airport duty-free secure area and sealed in an official STEB bag.
                </div>
              </div>

              {/* Verdict Card */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Customs Clearance Verdict
                </div>

                {passengerAge < 18 ? (
                  <div className="space-y-3">
                    <div className="text-red-600 dark:text-red-400 font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Zero Allowance (Underage)</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Passengers under 18 years of age are not entitled to carry any alcoholic beverages into Taiwan. Any alcohol carried will be confiscated.
                    </p>
                  </div>
                ) : alcoholLiters <= 1.0 ? (
                  <div className="space-y-3">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>100% Duty-Free (Green Channel OK)</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      You are carrying <strong className="font-mono">{alcoholLiters}L</strong>, which is within Taiwan's duty-free allowance of <strong>1.0 Liter</strong>. You may walk through the Green Channel with no customs duty.
                    </p>
                    <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200">
                      Estimated Tax Payable: <strong className="font-mono">NT$0</strong>
                    </div>
                  </div>
                ) : alcoholLiters <= 5.0 ? (
                  <div className="space-y-3">
                    <div className="text-amber-600 dark:text-amber-400 font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Red Channel Declaration Required</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      The first 1.0L is duty-free. The remaining <strong className="font-mono">{(alcoholLiters - 1.0).toFixed(1)}L</strong> must be declared at the <strong>Red Channel</strong> counter. Customs duty and tobacco/alcohol tax will be assessed.
                    </p>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200">
                      <strong>Warning:</strong> If you pass through the Green Channel without declaring, excess alcohol will be confiscated + fine of <strong>NT$2,000 per undeclared liter</strong>.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-red-600 dark:text-red-400 font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Exceeds Passenger Limit (&gt; 5L)</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Travelers cannot bring more than 5.0 Liters without a commercial tobacco and alcohol import permit. Any volume exceeding 5 Liters cannot be cleared as passenger baggage.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 2. TOBACCO CALCULATOR */}
          {activeTab === 'tobacco' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Traditional Cigarette Allowance
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Notice: <strong>Minimum age for tobacco in Taiwan is 20 years old</strong>. Electronic vapes and heated tobacco products are <strong>100% BANNED</strong>.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Cigarettes Brought (Count of Sticks):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={0}
                        max={2000}
                        step={20}
                        value={cigaretteCount}
                        onChange={(e) => setCigaretteCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                      <span className="text-xs text-slate-500">
                        ({(cigaretteCount / 200).toFixed(1)} cartons)
                      </span>
                    </div>
                    <div className="mt-2 flex gap-2">
                      {[100, 200, 400, 600, 1000].map((sticks) => (
                        <button
                          key={sticks}
                          type="button"
                          onClick={() => setCigaretteCount(sticks)}
                          className="px-2 py-1 text-xs rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
                        >
                          {sticks} sticks ({sticks / 200} carton{sticks > 200 ? 's' : ''})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs text-red-900 dark:text-red-200">
                  <strong>Zero Vape Exemption:</strong> Do not confuse cigarettes with vape pods, disposable e-cigarettes, or IQOS heatsticks. Vapes have NO allowance and carry fines between NT$50,000 and NT$5,000,000.
                </div>
              </div>

              {/* Verdict Card */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Customs Clearance Verdict
                </div>

                {cigaretteCount <= 200 ? (
                  <div className="space-y-3">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>Duty-Free (1 Carton / 200 Sticks)</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      You are carrying <strong className="font-mono">{cigaretteCount} sticks</strong>, which is within the standard 200-cigarette duty-free allowance. Pass through the <strong>Green Channel</strong>.
                    </p>
                  </div>
                ) : cigaretteCount <= 1000 ? (
                  <div className="space-y-3">
                    <div className="text-amber-600 dark:text-amber-400 font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Red Channel Declaration Required</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      You have <strong>{cigaretteCount - 200} excess sticks</strong> beyond the duty-free limit. You must choose the <strong>Red Channel</strong> and pay customs duty + tobacco health welfare surcharges.
                    </p>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200">
                      <strong>Fine Warning:</strong> Undeclared excess cigarettes are seized + fined <strong>NT$1,000 to NT$10,000 per carton</strong>.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-red-600 dark:text-red-400 font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Exceeds Maximum Passenger Limit (&gt; 1,000 Sticks)</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Passengers cannot carry more than 1,000 cigarettes (5 cartons) even with declaration, unless holding a commercial import permit.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 3. CASH & CURRENCY CALCULATOR */}
          {activeTab === 'cash' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Currency, Cash & Precious Metals Quotas
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Statute: Money Laundering Control Act. Non-declaration leads to <strong>100% permanent confiscation</strong> of undeclared excess funds.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      New Taiwan Dollar (TWD) Cash:
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">NT$</span>
                      <input
                        type="number"
                        min={0}
                        step={10000}
                        value={twdCash}
                        onChange={(e) => setTwdCash(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Hard limit: NT$100,000</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Foreign Currencies (USD Equivalent):
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">US$</span>
                      <input
                        type="number"
                        min={0}
                        step={1000}
                        value={foreignUsdCash}
                        onChange={(e) => setForeignUsdCash(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Declaration threshold: US$10,000</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Chinese Renminbi (RMB / CNY):
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">¥</span>
                      <input
                        type="number"
                        min={0}
                        step={5000}
                        value={rmbCash}
                        onChange={(e) => setRmbCash(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Hard limit: RMB 20,000</span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Gold Bullion Value (USD):
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400">US$</span>
                      <input
                        type="number"
                        min={0}
                        step={5000}
                        value={goldValueUsd}
                        onChange={(e) => setGoldValueUsd(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                    </div>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">Trade permit threshold: US$20,000</span>
                  </div>
                </div>
              </div>

              {/* Verdict Card */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Customs Clearance Verdict
                </div>

                <div className="space-y-3">
                  {/* TWD check */}
                  <div className={`p-2.5 rounded text-xs border ${
                    twdCash > 100000 
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900 text-red-800 dark:text-red-200' 
                      : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  }`}>
                    <strong>TWD Cash:</strong> {twdCash > 100000 ? (
                      <span>Exceeds NT$100,000 limit by NT${(twdCash - 100000).toLocaleString()}. Cannot enter without prior Central Bank written permit!</span>
                    ) : (
                      <span>Within NT$100,000 limit. (Green Channel OK)</span>
                    )}
                  </div>

                  {/* Foreign Currency check */}
                  <div className={`p-2.5 rounded text-xs border ${
                    foreignUsdCash >= 10000 
                      ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-200' 
                      : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  }`}>
                    <strong>Foreign Cash:</strong> {foreignUsdCash >= 10000 ? (
                      <span>$10,000+ USD equivalent requires <strong>Red Channel Declaration</strong>. (Declaration is free and legal).</span>
                    ) : (
                      <span>Under US$10,000. No declaration required.</span>
                    )}
                  </div>

                  {/* RMB check */}
                  <div className={`p-2.5 rounded text-xs border ${
                    rmbCash > 20000 
                      ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900 text-red-800 dark:text-red-200' 
                      : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  }`}>
                    <strong>RMB Cash:</strong> {rmbCash > 20000 ? (
                      <span>Exceeds RMB 20,000 limit. Excess held in bonded storage.</span>
                    ) : (
                      <span>Within RMB 20,000 limit.</span>
                    )}
                  </div>

                  <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400">
                    *Declaring foreign currency does NOT incur any tax or fee. Failing to declare leads to total seizure.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. MEDICINES & SUPPLEMENTS CALCULATOR */}
          {activeTab === 'meds' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    TFDA 12/36 Rule for Medicines & Supplements
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Statute: Pharmaceutical Affairs Act & TFDA Personal Import Criteria.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Bottles/Boxes of Any Single Specific Medicine or Supplement:
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={0}
                        max={50}
                        value={singleTypeCount}
                        onChange={(e) => setSingleTypeCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                      <span className="text-xs text-slate-500">Max allowed: 12</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Total Aggregate Containers (All OTC drugs + supplements combined):
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={totalMedsCount}
                        onChange={(e) => setTotalMedsCount(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full max-w-xs px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm font-mono"
                      />
                      <span className="text-xs text-slate-500">Max allowed: 36</span>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                  <strong>Prescription Medicines:</strong> If you carry doctor-prescribed medications, bring your doctor's official prescription or diagnostic letter to carry up to a 6-month supply.
                </div>
              </div>

              {/* Verdict Card */}
              <div className="lg:col-span-5 bg-slate-50 dark:bg-slate-800/60 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Customs Clearance Verdict
                </div>

                {singleTypeCount > 12 || totalMedsCount > 36 ? (
                  <div className="space-y-3">
                    <div className="text-amber-600 dark:text-amber-400 font-bold text-lg flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                      <span>Exceeds TFDA Personal Limit</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {singleTypeCount > 12 && <div>• Exceeds the 12-bottle limit for a single type ({singleTypeCount} &gt; 12).</div>}
                      {totalMedsCount > 36 && <div>• Exceeds the 36-container aggregate total limit ({totalMedsCount} &gt; 36).</div>}
                    </p>
                    <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded border border-amber-200 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-200">
                      Excess units may be retained by customs for TFDA commercial licensing or confiscated.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold text-lg flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>Compliant with TFDA Personal Use Quota</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Both your single-item count (<strong className="font-mono">{singleTypeCount}/12</strong>) and total container count (<strong className="font-mono">{totalMedsCount}/36</strong>) are within legal personal limits.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
