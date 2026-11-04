import React from 'react';
import { AlertCircle, CheckCircle, ShieldAlert, ArrowRight, Dog, Eye, MapPin } from 'lucide-react';

export const ArrivalWalkthrough: React.FC = () => {
  return (
    <section id="arrival-flow" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Airport Clearance Walkthrough
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            The 5-Step Taiwan Airport Customs Flow
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            From stepping off the aircraft to crossing the exit gate: understand exactly where biosecurity checkpoints occur and how to avoid massive fines.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="mt-12 space-y-8">

          {/* Step 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="lg:col-span-3">
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
                01. IMMIGRATION CONCOURSE
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Amnesty Disposal Bins
              </h3>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Before passport control
              </div>
            </div>
            <div className="lg:col-span-9 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                As soon as you walk down the arrival gate corridors toward immigration, you will see prominent yellow biosecurity signs and large agricultural disposal bins marked <strong>"Quarantine Disposal / 農產品棄置箱"</strong>.
              </p>
              <div className="mt-3 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
                <strong className="text-emerald-700 dark:text-emerald-400">Zero-Penalty Guarantee:</strong> Any fruit, sandwich, sausage, pork jerky, or snack thrown into these bins carries <span className="underline">zero penalty</span>, no questions asked. Once you pass through the inspection lane, penalties apply.
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="lg:col-span-3">
              <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
                02. BIOSECURITY GATE
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Hand Baggage X-Ray Screening
              </h3>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                High-risk flight identification
              </div>
            </div>
            <div className="lg:col-span-9 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Flights arriving from African Swine Fever affected countries (China, Vietnam, Thailand, Philippines, Indonesia, Malaysia, etc.) are designated for <strong>100% hand luggage X-ray inspection</strong> before entering the immigration arrival hall.
              </p>
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Passengers receive colored identification cards at disembarkation gates to guide them into dedicated X-ray channels. Officers actively inspect carry-on backpacks, duty-free shopping bags, and snack boxes.
              </p>
            </div>
          </div>

          {/* Step 03 - With Beagle Dog Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-4/3 relative">
                <img
                  src="/src/assets/images/customs_biosecurity_dog_1793771746458.jpg"
                  alt="Taiwan APHIA biosecurity detector beagle inspecting passenger luggage"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[11px] p-1.5 rounded text-center">
                  APHIA Biosecurity Detector Dog Team
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div>
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
                  03. BAGGAGE CAROUSEL
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Quarantine Detector Beagle Patrols
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Trained agricultural detector beagles patrol the baggage carousels continuously. These dogs have an extraordinary sense of smell and will sit quietly beside any suitcase containing pork, vacuum-packed meat, citrus, or dried fruit—even if packed deep inside multiple plastic layers.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                <strong>Protocol:</strong> If a dog sits next to your bag, the handler will ask you to open your luggage. If you haven't crossed customs yet, you still have the opportunity to declare or surrender items without criminal intent.
              </div>
            </div>
          </div>

          {/* Step 04: RED CHANNEL VS GREEN CHANNEL */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
            <div className="text-xs font-mono font-bold text-red-400">
              04. THE CRUCIAL DECISION POINT
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">
              Red Channel (Declare) vs. Green Channel (Nothing to Declare)
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
              This is the legal boundary. Walking through the Green Channel is a formal legal affirmation that you possess NO prohibited, restricted, or excess dutiable items.
            </p>

            {/* Side by side comparison */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Green Channel */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-emerald-500/30">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-base">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>GREEN CHANNEL (Nothing to Declare)</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  綠線檯 / 免申報櫃檯
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div>• Max 1 Liter of alcohol (passenger age 18+)</div>
                  <div>• Max 200 cigarettes (passenger age 20+)</div>
                  <div>• Under US$10,000 foreign currency value</div>
                  <div>• Under NT$100,000 TWD cash</div>
                  <div>• Under RMB 20,000 cash</div>
                  <div>• Standard OTC medicines within 12/36 limit</div>
                  <div>• ZERO meat products, fresh fruits, or seeds</div>
                  <div>• ZERO e-cigarettes or vapes</div>
                </div>
              </div>

              {/* Red Channel */}
              <div className="p-5 rounded-xl bg-slate-800/80 border border-red-500/40">
                <div className="flex items-center gap-2 text-red-400 font-bold text-base">
                  <ShieldAlert className="w-5 h-5 shrink-0" />
                  <span>RED CHANNEL (Goods to Declare)</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  紅線檯 / 應申報櫃檯
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate-300">
                  <div>• Alcohol between 1.0L and 5.0L (pay duty)</div>
                  <div>• Cigarettes between 200 and 1,000 sticks (pay tax)</div>
                  <div>• Foreign currency $\ge$ US$10,000 equivalent</div>
                  <div>• Gold bullion exceeding US$20,000 value</div>
                  <div>• Prescription drugs without prior permit</div>
                  <div>• Commercial samples or goods exceeding NT$20,000</div>
                  <div>• <strong>Any item you are uncertain about!</strong></div>
                </div>
                <div className="mt-3 p-2.5 rounded bg-red-950/60 border border-red-800/50 text-[11px] text-red-200">
                  <strong>Zero-Fine Protection:</strong> Prohibited items declared at the Red Channel are confiscated without a monetary fine.
                </div>
              </div>

            </div>
          </div>

          {/* Step 05 - With Scanner Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
            <div className="lg:col-span-4">
              <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-4/3 relative">
                <img
                  src="/src/assets/images/luggage_inspection_scanner_1793771746752.jpg"
                  alt="Customs baggage x-ray scanner and passenger inspection zone"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-xs text-white text-[11px] p-1.5 rounded text-center">
                  Final Customs Exit X-Ray Inspection
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <div>
                <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
                  05. FINAL EXIT
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Random Customs Inspection & Airport Exit
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Even if you choose the Green Channel, customs officers stationed at the exit randomly flag passengers to run their checked luggage and trolleys through the heavy conveyor X-ray machines.
              </p>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                If prohibited meat, vapes, or excess currency are detected here after entering the Green Channel, the full NT$200,000+ fine is legally enforced.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
