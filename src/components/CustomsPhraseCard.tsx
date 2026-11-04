import React, { useState } from 'react';
import { Volume2, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { BILINGUAL_PHRASES, BilingualPhrase } from '../data/customsItems';

export const CustomsPhraseCard: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);

  const handleCopy = (phrase: BilingualPhrase) => {
    navigator.clipboard.writeText(`${phrase.chinese} (${phrase.english})`);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSpeak = (phrase: BilingualPhrase) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phrase.chinese);
      utterance.lang = 'zh-TW';
      utterance.rate = 0.9;
      setSpeakingId(phrase.id);
      utterance.onend = () => setSpeakingId(null);
      utterance.onerror = () => setSpeakingId(null);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <section id="phrases" className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Traveler Emergency Communication
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Airport Customs Communication Phrases
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Show these cards directly on your phone screen to Taiwan Customs officers or Quarantine inspectors if you need to ask questions or voluntarily surrender food.
          </p>
        </div>

        {/* Phrases Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BILINGUAL_PHRASES.map((phrase) => (
            <div
              key={phrase.id}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs flex flex-col justify-between"
            >
              <div>
                
                {/* Situation tag */}
                <div className="text-xs font-semibold text-red-600 dark:text-red-400 mb-2">
                  {phrase.situation}
                </div>

                {/* Traditional Chinese text (Large and clear for officers to read) */}
                <div className="text-xl font-bold text-slate-900 dark:text-white leading-relaxed tracking-wide">
                  {phrase.chinese}
                </div>

                {/* Pinyin */}
                <div className="text-xs text-slate-500 dark:text-slate-400 italic mt-1 font-mono">
                  {phrase.pinyin}
                </div>

                {/* English Translation */}
                <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-3 border-t border-slate-100 dark:border-slate-800/80 pt-2.5">
                  "{phrase.english}"
                </div>

              </div>

              {/* Action Buttons: Speak & Copy */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => handleSpeak(phrase)}
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Listen to Chinese pronunciation"
                >
                  <Volume2 className={`w-4 h-4 ${speakingId === phrase.id ? 'text-red-600 animate-pulse' : ''}`} />
                  <span>{speakingId === phrase.id ? 'Playing...' : 'Pronounce'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleCopy(phrase)}
                  className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {copiedId === phrase.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Airport Customs Help Tip */}
        <div className="mt-8 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
            <strong>Pro Tip:</strong> Taiwan customs officers and quarantine inspectors speak English and are very courteous if approached proactively before crossing the green line. If you are ever uncertain whether an item is legal, simply show card #2 or #3 above to any officer!
          </div>
        </div>

      </div>
    </section>
  );
};
