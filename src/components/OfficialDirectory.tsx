import React, { useState } from 'react';
import { Phone, MapPin, ChevronDown, ChevronUp, ExternalLink, ShieldAlert, FileText } from 'lucide-react';
import { OFFICIAL_HOTLINES } from '../data/customsItems';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Pork & Meat',
    question: 'Can I bring instant noodles into Taiwan?',
    answer: 'Yes, but ONLY if the noodle packet contains artificial flavor powders, dehydrated seafood, or vegetables. Instant noodles with vacuum-sealed retort pouches containing REAL chunks of pork or beef are strictly prohibited unless certified. If your noodle packaging shows real meat pieces on the picture, declare it at the Red Channel to have an officer inspect it safely.'
  },
  {
    category: 'Vapes & Tobacco',
    question: 'Are electronic cigarettes or IQOS heated tobacco allowed if I declare them?',
    answer: 'NO. Since the March 2023 amendment to the Tobacco Hazards Prevention Act, all electronic cigarettes, vape juices, and unapproved heated tobacco devices are completely prohibited in Taiwan. There is NO tourist exemption. Declaring them at the Red Channel will prevent criminal evasion fines, but the items will still be confiscated and destroyed immediately.'
  },
  {
    category: 'Food Souvenirs',
    question: 'Can I bring Taiwanese pineapple cakes, suncakes, or tea into Taiwan?',
    answer: 'Standard Taiwanese pineapple cakes (鳳梨酥), suncakes (太陽餅), and commercially packaged oolong tea are completely fine. However, watch out for foreign souvenirs like Cantonese mooncakes or pastries from overseas containing pork floss, minced meat fillings, or unrendered lard, which are strictly banned under ASF regulations.'
  },
  {
    category: 'Medication',
    question: 'How many bottles of over-the-counter medicine or vitamins can I bring?',
    answer: 'Taiwan Food and Drug Administration (TFDA) enforces the "12/36 Rule": You may carry a maximum of 12 containers of any single medicine or supplement, with a maximum aggregate total of 36 containers across all non-prescription medications and dietary supplements for personal use.'
  },
  {
    category: 'Customs Declaration',
    question: 'What actually happens if I declare an illegal item at the Red Channel?',
    answer: 'Under Taiwan Customs regulations, if you voluntarily choose the Red Channel (應申報檯) and present the item for inspection, NO FINES will be assessed even if the item turns out to be prohibited. The item will simply be surrendered and destroyed. Fines (like the NT$200,000 ASF penalty) ONLY apply if you walk through the Green Channel or attempt to evade inspection.'
  },
  {
    category: 'Cash & Foreign Currency',
    question: 'Is there a tax or fee for declaring more than US$10,000 cash?',
    answer: 'No! There is absolutely ZERO tax or fee for declaring foreign currency or traveler checks exceeding US$10,000. It is purely a money-laundering transparency measure. However, undeclared foreign currency exceeding US$10,000 will be completely confiscated by customs without refund.'
  }
];

export const OfficialDirectory: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="directory" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Official Contact & Hotlines */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                Official Directory
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Government Helplines & Airport Customs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Direct contacts for Taiwan Customs Administration, Animal and Plant Health Inspection Agency (APHIA), and TFDA.
              </p>
            </div>

            <div className="space-y-3">
              {OFFICIAL_HOTLINES.map((hotline, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {hotline.agency}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {hotline.description}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0">
                      {hotline.hours}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
                    <a
                      href={`tel:${hotline.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-mono font-bold text-slate-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    >
                      {hotline.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Agency Links */}
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs space-y-2 text-slate-600 dark:text-slate-300">
              <div className="font-bold text-slate-900 dark:text-white">Official Regulatory Portals:</div>
              <div>• Customs Administration, Ministry of Finance (MOF)</div>
              <div>• Animal & Plant Health Inspection Agency (APHIA)</div>
              <div>• Taiwan Food and Drug Administration (TFDA)</div>
              <div>• Civil Aeronautics Administration (CAA)</div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7">
            <div>
              <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                Traveler Questions
              </div>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Frequently Asked Customs Questions
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                Detailed answers to the most common traveler scenarios at Taiwan airport customs.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-red-600 dark:text-red-400">
                        {faq.category}
                      </div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                        {faq.question}
                      </div>
                    </div>
                    <div className="text-slate-400 shrink-0">
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {openFaqIndex === idx && (
                    <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
