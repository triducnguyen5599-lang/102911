import React from 'react';
import { AlertOctagon, ShieldAlert, CheckCircle, Ban, HelpCircle, ArrowRight } from 'lucide-react';

export const AsfHighlightSection: React.FC = () => {
  return (
    <section id="asf-warning" className="py-16 bg-red-950/10 dark:bg-red-950/20 border-b border-red-200 dark:border-red-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Urgent Alert Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-red-200 uppercase">
                <AlertOctagon className="w-4 h-4 shrink-0" />
                <span>Critical Biosecurity Warning · Zero Tolerance</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                African Swine Fever (ASF) Pork Ban: NT$200,000 Fine on 1st Offense
              </h2>
              
              <p className="text-sm sm:text-base text-red-100 leading-relaxed max-w-3xl">
                Taiwan strictly prohibits bringing ANY pork products into the country from countries affected by African Swine Fever (including China, Vietnam, Thailand, Philippines, Indonesia, Malaysia, Russia, and affected European nations).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-red-50">
                <div className="p-3 bg-red-700/50 rounded-lg border border-red-500/40">
                  <strong className="block text-white text-sm mb-0.5">1st Offense Fine:</strong>
                  NT$200,000 (~$6,500 USD). Non-residents unable to pay immediately at customs are <strong>denied entry and deported</strong> on the next flight.
                </div>
                <div className="p-3 bg-red-700/50 rounded-lg border border-red-500/40">
                  <strong className="block text-white text-sm mb-0.5">2nd Offense Fine:</strong>
                  NT$1,000,000 (~$32,000 USD) + 5-year entry ban. Strict enforcement by biosecurity beagles and x-ray scanners.
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-white space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-red-200">
                What Items Are Prohibited?
              </div>
              <ul className="space-y-2 text-xs text-red-50 leading-relaxed">
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-red-200 shrink-0 mt-0.5" />
                  <span><strong>Pork Jerky & Dried Meat:</strong> Bakkwa, pork floss (rousong), pork crisps.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-red-200 shrink-0 mt-0.5" />
                  <span><strong>Sausages:</strong> Chinese lap cheong, Vietnamese giò chả, hot dogs, salami.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-red-200 shrink-0 mt-0.5" />
                  <span><strong>Souvenir Pastries:</strong> Mooncakes, meat pies, or egg rolls containing pork or lard filling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Ban className="w-4 h-4 text-red-200 shrink-0 mt-0.5" />
                  <span><strong>Canned Pork & Meals:</strong> Spam, canned ham, flight meal leftovers with meat.</span>
                </li>
              </ul>
              <div className="pt-2 text-[11px] text-red-200 border-t border-white/10">
                Even vacuum-packed or commercially packaged pork is 100% illegal.
              </div>
            </div>

          </div>
        </div>

        {/* 3 Critical Practical Rules */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-red-600 dark:text-red-400 font-bold text-sm mb-1">
              Rule 01: Discard Before Immigration
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              If you discover an airline ham sandwich, fruit snack, or meat pastry in your bag upon disembarking, throw it into the yellow Agricultural Quarantine disposal bins in the hallway. No penalty is given.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-red-600 dark:text-red-400 font-bold text-sm mb-1">
              Rule 02: Sniffer Beagles Never Miss
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Do not rely on ziplock bags, perfume, or vacuum packaging. Taiwan's quarantine detector beagles are trained to smell cured, cooked, and packaged pork through multiple luggage barriers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-red-600 dark:text-red-400 font-bold text-sm mb-1">
              Rule 03: Declare at Red Channel
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              If you aren't sure whether your instant noodles or foreign snacks contain meat, walk straight to the Red Channel and ask an inspector. Proactive declaration protects you from all fines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
