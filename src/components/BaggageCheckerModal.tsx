import React, { useState } from 'react';
import { X, Check, AlertTriangle, ShieldAlert, Luggage, ArrowRight, RotateCcw } from 'lucide-react';

interface BaggageCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AuditQuestions {
  hasPorkOrMeat: boolean;
  hasFreshFruitOrSeeds: boolean;
  hasVapesOrHTP: boolean;
  hasPowerBankInChecked: boolean;
  hasExcessAlcoholOrTobacco: boolean;
  hasExcessCurrency: boolean;
  hasControlledDrugs: boolean;
}

export const BaggageCheckerModal: React.FC<BaggageCheckerModalProps> = ({ isOpen, onClose }) => {
  const [originCountry, setOriginCountry] = useState<string>('vietnam');
  const [answers, setAnswers] = useState<AuditQuestions>({
    hasPorkOrMeat: false,
    hasFreshFruitOrSeeds: false,
    hasVapesOrHTP: false,
    hasPowerBankInChecked: false,
    hasExcessAlcoholOrTobacco: false,
    hasExcessCurrency: false,
    hasControlledDrugs: false,
  });

  if (!isOpen) return null;

  const isHighRiskOrigin = [
    'vietnam', 'china', 'thailand', 'philippines', 'indonesia', 'malaysia', 'cambodia', 'laos', 'myanmar', 'russia'
  ].includes(originCountry);

  const toggleAnswer = (key: keyof AuditQuestions) => {
    setAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetAudit = () => {
    setAnswers({
      hasPorkOrMeat: false,
      hasFreshFruitOrSeeds: false,
      hasVapesOrHTP: false,
      hasPowerBankInChecked: false,
      hasExcessAlcoholOrTobacco: false,
      hasExcessCurrency: false,
      hasControlledDrugs: false,
    });
  };

  // Determine violations
  const hasSevereViolation = answers.hasPorkOrMeat || answers.hasFreshFruitOrSeeds || answers.hasVapesOrHTP;
  const hasAviationSafetyViolation = answers.hasPowerBankInChecked;
  const needsRedChannelDeclaration = answers.hasExcessAlcoholOrTobacco || answers.hasExcessCurrency || answers.hasControlledDrugs;

  const isGreenChannelSafe = !hasSevereViolation && !hasAviationSafetyViolation && !needsRedChannelDeclaration;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div 
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close auditor"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 text-red-600 dark:text-red-400 font-bold text-xs uppercase tracking-wider mb-1">
          <Luggage className="w-4 h-4" />
          <span>Interactive Baggage Clearance Auditor</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Taiwan Pre-Flight Baggage Inspection
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Answer a few quick questions about what you packed to verify if your baggage will clear Taiwan customs without fines.
        </p>

        {/* Flight Origin Selector */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase tracking-wide">
            1. Select Your Departure Origin Airport:
          </label>
          <select
            value={originCountry}
            onChange={(e) => setOriginCountry(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white font-medium"
          >
            <option value="vietnam">Vietnam (Hanoi, HCMC, Da Nang) - ASF High-Risk Zone</option>
            <option value="china">China (Mainland) - ASF High-Risk Zone</option>
            <option value="thailand">Thailand (Bangkok, Chiang Mai, Phuket) - ASF High-Risk Zone</option>
            <option value="philippines">Philippines (Manila, Cebu) - ASF High-Risk Zone</option>
            <option value="indonesia">Indonesia (Jakarta, Bali) - ASF High-Risk Zone</option>
            <option value="malaysia">Malaysia - ASF High-Risk Zone</option>
            <option value="japan">Japan (Tokyo, Osaka, Fukuoka, Okinawa)</option>
            <option value="korea">South Korea (Seoul, Busan)</option>
            <option value="usa">United States & Canada</option>
            <option value="europe">European Union / United Kingdom</option>
            <option value="singapore">Singapore</option>
            <option value="other">Other Global Destinations</option>
          </select>

          {isHighRiskOrigin && (
            <div className="mt-2 text-xs text-amber-800 dark:text-amber-300 font-medium">
              ⚠ High Biosecurity Alert: Inbound flights from this region undergo 100% hand luggage X-ray scans and sniffer dog checks at Taiwan airports.
            </div>
          )}
        </div>

        {/* Baggage Items Checklist */}
        <div className="mt-6 space-y-3">
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
            2. Check Any Items Currently in Your Bags:
          </label>

          {/* Item 1: Pork & Meat */}
          <div 
            onClick={() => toggleAnswer('hasPorkOrMeat')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasPorkOrMeat
                ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasPorkOrMeat 
                ? 'bg-red-600 border-red-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasPorkOrMeat && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Pork or terrestrial meat products (Jerky, sausages, pork floss, spam, mooncakes with meat)
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Even vacuum-packed, dried, or cooked.
              </div>
            </div>
          </div>

          {/* Item 2: Fresh Fruit & Plants */}
          <div 
            onClick={() => toggleAnswer('hasFreshFruitOrSeeds')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasFreshFruitOrSeeds
                ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasFreshFruitOrSeeds 
                ? 'bg-red-600 border-red-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasFreshFruitOrSeeds && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Fresh fruits, living plants, unroasted seeds in husks, or soil
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Apples, oranges, mangoes, plant cuttings, potting soil.
              </div>
            </div>
          </div>

          {/* Item 3: Vapes / E-cigarettes */}
          <div 
            onClick={() => toggleAnswer('hasVapesOrHTP')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasVapesOrHTP
                ? 'bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasVapesOrHTP 
                ? 'bg-red-600 border-red-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasVapesOrHTP && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Electronic cigarettes, disposable vapes, pods, e-liquid, or IQOS heated tobacco
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                100% illegal under 2023 Tobacco Hazards Prevention Act.
              </div>
            </div>
          </div>

          {/* Item 4: Power banks in checked bags */}
          <div 
            onClick={() => toggleAnswer('hasPowerBankInChecked')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasPowerBankInChecked
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasPowerBankInChecked 
                ? 'bg-amber-600 border-amber-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasPowerBankInChecked && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Power banks or spare camera batteries packed inside CHECKED luggage
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Aviation safety law requires lithium batteries to be in cabin carry-on only.
              </div>
            </div>
          </div>

          {/* Item 5: Excess Alcohol or Tobacco */}
          <div 
            onClick={() => toggleAnswer('hasExcessAlcoholOrTobacco')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasExcessAlcoholOrTobacco
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasExcessAlcoholOrTobacco 
                ? 'bg-amber-600 border-amber-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasExcessAlcoholOrTobacco && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Alcohol &gt; 1.0 Liter OR Traditional Cigarettes &gt; 200 sticks (1 carton)
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Exceeds duty-free quota, requires customs tax declaration.
              </div>
            </div>
          </div>

          {/* Item 6: Excess Currency */}
          <div 
            onClick={() => toggleAnswer('hasExcessCurrency')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasExcessCurrency
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasExcessCurrency 
                ? 'bg-amber-600 border-amber-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasExcessCurrency && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Foreign cash $\ge$ US$10,000, TWD cash &gt; NT$100,000, or RMB &gt; 20,000
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Must declare at Red Channel; undeclared amounts are permanently confiscated.
              </div>
            </div>
          </div>

          {/* Item 7: Controlled medicines */}
          <div 
            onClick={() => toggleAnswer('hasControlledDrugs')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
              answers.hasControlledDrugs
                ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
              answers.hasControlledDrugs 
                ? 'bg-amber-600 border-amber-600 text-white' 
                : 'border-slate-300 dark:border-slate-600'
            }`}>
              {answers.hasControlledDrugs && <Check className="w-3.5 h-3.5" />}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                Prescription sleep aids, ADHD medications (Ritalin/Concerta), or strong pain relievers
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Requires official doctor prescription and potential TFDA certificate.
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Verdict Result Box */}
        <div className="mt-8 p-5 sm:p-6 rounded-xl border">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Final Clearance Assessment
          </div>

          {hasSevereViolation && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-extrabold text-lg">
                <ShieldAlert className="w-6 h-6 shrink-0" />
                <span>SEVERE VIOLATION DETECTED</span>
              </div>
              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-1.5">
                {answers.hasPorkOrMeat && (
                  <div className="text-red-700 dark:text-red-300">
                    <strong>• Pork/Meat in bag:</strong> Immediate risk of <strong>NT$200,000 fine</strong> (~$6,500 USD) and immediate deportation if unable to pay. Throw it away in the airport arrival amnesty bin before immigration!
                  </div>
                )}
                {answers.hasFreshFruitOrSeeds && (
                  <div className="text-red-700 dark:text-red-300">
                    <strong>• Fresh Fruit/Seeds:</strong> Up to NT$15,000 fine. Consume or discard in quarantine bins before customs.
                  </div>
                )}
                {answers.hasVapesOrHTP && (
                  <div className="text-red-700 dark:text-red-300">
                    <strong>• E-Cigarettes/Vapes:</strong> Fines between NT$50,000 and NT$5,000,000. Do NOT bring them into Taiwan.
                  </div>
                )}
              </div>
            </div>
          )}

          {!hasSevereViolation && hasAviationSafetyViolation && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-base sm:text-lg">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Aviation Hazard: Move Power Bank to Carry-On</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Power banks and spare lithium batteries are strictly prohibited in checked baggage. You must remove them immediately and carry them inside your cabin hand baggage.
              </p>
            </div>
          )}

          {!hasSevereViolation && !hasAviationSafetyViolation && needsRedChannelDeclaration && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-extrabold text-base sm:text-lg">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>RED CHANNEL DECLARATION MANDATORY</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                You do not have prohibited biosecurity goods, but you possess items exceeding standard duty-free limits (cash $\ge$ $10k, excess alcohol/tobacco, or controlled medications). <strong>You MUST walk through the Red Channel</strong> upon landing.
              </p>
            </div>
          )}

          {isGreenChannelSafe && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold text-base sm:text-lg">
                <Check className="w-6 h-6 shrink-0" />
                <span>GREEN CHANNEL SAFE · READY TO FLY</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Based on your selections, your luggage contains no prohibited meat, fresh fruits, vapes, or excess dutiable goods. You are clear to take the <strong>Green Channel (Nothing to Declare)</strong> upon landing at Taiwan airports.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={resetAudit}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Audit</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg transition-colors cursor-pointer"
          >
            Done & Save Review
          </button>
        </div>

      </div>
    </div>
  );
};
