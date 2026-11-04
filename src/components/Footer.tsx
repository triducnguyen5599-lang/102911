import React from 'react';
import { Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Purpose */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <span className="w-6 h-6 rounded bg-red-600 text-white flex items-center justify-center font-bold text-xs">
                TW
              </span>
              <span>Taiwan Customs & Border Guide</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Independent traveler resource providing clear, English-language compliance guidance for international air arrivals entering the Republic of China (Taiwan) through Taoyuan, Songshan, Kaohsiung, and Taichung airports.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>Updated for 2025–2026 Regulations</span>
              <span aria-hidden="true">·</span>
              <span>APHIA & Customs Aligned</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-2">
              Guide Navigation
            </div>
            <ul className="space-y-1.5">
              <li>
                <a href="#prohibited-search" className="hover:text-white transition-colors">
                  Prohibited Items Database
                </a>
              </li>
              <li>
                <a href="#asf-warning" className="hover:text-white transition-colors">
                  African Swine Fever Pork Rules
                </a>
              </li>
              <li>
                <a href="#customs-calculator" className="hover:text-white transition-colors">
                  Customs Quota Calculator
                </a>
              </li>
              <li>
                <a href="#arrival-flow" className="hover:text-white transition-colors">
                  Airport Arrival Clearance Flow
                </a>
              </li>
              <li>
                <a href="#phrases" className="hover:text-white transition-colors">
                  Bilingual Customs Phrases
                </a>
              </li>
              <li>
                <a href="#directory" className="hover:text-white transition-colors">
                  Official Helplines & FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Reference & Disclaimers */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-white font-semibold text-xs uppercase tracking-wider mb-2">
              Official Governing Statutes
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Rules summarized from the <em>Statute for Prevention and Control of Infectious Animal Diseases</em>, <em>Tobacco Hazards Prevention Act</em>, <em>Plant Protection and Quarantine Act</em>, <em>Tobacco and Alcohol Administration Act</em>, and the <em>Money Laundering Control Act</em>.
            </p>
            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed">
              Disclaimer: Regulations may be updated by Taiwan government authorities at any time. When in doubt at the airport, always choose the Red Channel to declare items with customs officers.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Taiwan Customs Guide · Non-Governmental Traveler Compliance Reference.
          </div>
          <div className="flex items-center gap-4">
            <a href="#asf-warning" className="hover:text-slate-300">Biosecurity Alert</a>
            <span>·</span>
            <a href="#prohibited-search" className="hover:text-slate-300">Items Catalog</a>
            <span>·</span>
            <a href="#directory" className="hover:text-slate-300">Emergency Hotlines</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
