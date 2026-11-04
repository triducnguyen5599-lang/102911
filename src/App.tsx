import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AsfHighlightSection } from './components/AsfHighlightSection';
import { ItemSearchEngine } from './components/ItemSearchEngine';
import { CustomsCalculator } from './components/CustomsCalculator';
import { ArrivalWalkthrough } from './components/ArrivalWalkthrough';
import { CustomsPhraseCard } from './components/CustomsPhraseCard';
import { OfficialDirectory } from './components/OfficialDirectory';
import { Footer } from './components/Footer';
import { BaggageCheckerModal } from './components/BaggageCheckerModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isAuditorOpen, setIsAuditorOpen] = useState<boolean>(false);

  // Sync dark class on html root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-red-500 selection:text-white transition-colors duration-200">
      
      {/* 3-Zone Header Contract */}
      <Header
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenAuditor={() => setIsAuditorOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenAuditor={() => setIsAuditorOpen(true)}
          onExploreItems={() => scrollToSection('prohibited-search')}
        />

        {/* African Swine Fever & Pork Zero Tolerance Deep Dive */}
        <AsfHighlightSection />

        {/* 60+ Regulated Items Interactive Search & Catalog */}
        <ItemSearchEngine />

        {/* Interactive Quota & Duty Calculator */}
        <CustomsCalculator />

        {/* 5-Step Airport Arrival Walkthrough with Biosecurity & Scanner Photography */}
        <ArrivalWalkthrough />

        {/* Bilingual Customs Emergency Phrase Cards */}
        <CustomsPhraseCard />

        {/* Official Contact Directory & FAQs */}
        <OfficialDirectory />
      </main>

      {/* Authoritative Footer */}
      <Footer />

      {/* Interactive Baggage Pre-Flight Audit Modal */}
      <BaggageCheckerModal
        isOpen={isAuditorOpen}
        onClose={() => setIsAuditorOpen(false)}
      />

    </div>
  );
}
