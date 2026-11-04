import React from 'react';
import { AlertTriangle, ShieldAlert, ArrowRight, Ban, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenAuditor: () => void;
  onExploreItems: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditor, onExploreItems }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheading & Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3 tracking-wide uppercase">
          <span>Customs Administration</span>
          <span aria-hidden="true">·</span>
          <span>APHIA Biosecurity Notice</span>
          <span aria-hidden="true">·</span>
          <span>Airport Arrivals Enforcement</span>
        </div>

        {/* 2-Column Split: Headline & Urgent Value Prop vs Hero Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Taiwan Airport Customs & Prohibited Goods Guide
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              Strict biosecurity laws protect Taiwan from African Swine Fever and invasive agricultural pests. Bringing undeclared pork triggers an immediate <strong className="text-red-600 dark:text-red-400 font-bold">NT$200,000 (~$6,500 USD) fine</strong> and instant deportation for non-residents. E-cigarettes and vapes are completely banned.
            </p>

            {/* Crucial Notice Box */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/80">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-sm text-amber-900 dark:text-amber-200">
                  <span className="font-bold">The Golden Customs Rule:</span> If you are unsure whether an item in your luggage is permitted, always take the <strong className="underline underline-offset-2">Red Channel (Goods to Declare)</strong>. If declared voluntarily, prohibited items are merely confiscated with <span className="font-bold text-emerald-700 dark:text-emerald-400">zero penalty</span>.
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenAuditor}
                className="px-5 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-sm transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>Run Baggage Pre-Flight Check</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreItems}
                className="px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Search 60+ Restricted Items
              </button>
            </div>

            {/* Quiet Metadata Indicator */}
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <span>Applies to TPE (Taoyuan)</span>
              <span aria-hidden="true">/</span>
              <span>TSA (Songshan)</span>
              <span aria-hidden="true">/</span>
              <span>KHH (Kaohsiung)</span>
              <span aria-hidden="true">/</span>
              <span>RMQ (Taichung)</span>
            </div>

          </div>

          {/* Focal Image Container with Media Scrim and Zero Broken Image Fallback */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[300px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md relative group">
              <img
                src="/src/assets/images/hero_taiwan_customs_1793771746375.jpg"
                alt="Taipei Taoyuan International Airport Customs and Immigration Arrivals Hall"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6">
                <span className="text-white text-xs font-semibold uppercase tracking-wider mb-1">
                  Arrivals Clearance · Taiwan Border
                </span>
                <p className="text-white text-sm font-medium leading-snug">
                  All luggage is screened by 100% biosecurity X-ray scanners and quarantine sniffer beagles prior to exit.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Quantified Rigor Strip (Adjacency to claims) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="p-2">
            <div className="text-2xl sm:text-3xl font-extrabold text-red-600 dark:text-red-500 font-mono tabular-nums">
              NT$200,000
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Initial Fine for Undeclared Pork
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              ~$6,500 USD · Immediate deportation if unpaid
            </div>
          </div>

          <div className="p-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              0 Vapes
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              E-Cigarette Total Ban
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Banned since March 2023 · Up to NT$5M fine
            </div>
          </div>

          <div className="p-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              1 Liter
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Duty-Free Alcohol Allowance
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Age 18+ · Maximum 5L with tax declaration
            </div>
          </div>

          <div className="p-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
              NT$100,000
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
              Cash Limit in New Taiwan Dollar
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Excess without central bank permit confiscated
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
