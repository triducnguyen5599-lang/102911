import React, { useState, useMemo } from 'react';
import { Search, Filter, AlertCircle, X, ShieldAlert, Luggage, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { CUSTOMS_ITEMS, CATEGORIES, CustomsItem, Category, ItemStatus } from '../data/customsItems';

export const ItemSearchEngine: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<ItemStatus | 'all'>('all');
  const [activeItemModal, setActiveItemModal] = useState<CustomsItem | null>(null);

  // Filter logic
  const filteredItems = useMemo(() => {
    return CUSTOMS_ITEMS.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.chineseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.commonExamples.some(ex => ex.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.details.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const getStatusBadge = (status: ItemStatus) => {
    switch (status) {
      case 'prohibited':
        return (
          <span className="text-red-700 dark:text-red-400 font-semibold text-xs tracking-tight">
            Strictly Prohibited
          </span>
        );
      case 'restricted':
        return (
          <span className="text-amber-700 dark:text-amber-400 font-semibold text-xs tracking-tight">
            Restricted / Allowance Cap
          </span>
        );
      case 'carry_on_only':
        return (
          <span className="text-sky-700 dark:text-sky-400 font-semibold text-xs tracking-tight">
            Carry-On Cabin Only
          </span>
        );
      case 'checked_only':
        return (
          <span className="text-indigo-700 dark:text-indigo-400 font-semibold text-xs tracking-tight">
            Checked Luggage Only
          </span>
        );
      case 'free_allowance':
        return (
          <span className="text-emerald-700 dark:text-emerald-400 font-semibold text-xs tracking-tight">
            Allowed (Reasonable Quota)
          </span>
        );
      default:
        return null;
    }
  };

  const getLuggageRuleLabel = (rule: CustomsItem['luggageRule']) => {
    switch (rule) {
      case 'both_prohibited':
        return 'Banned in Cabin & Checked Bags';
      case 'carry_on_only':
        return 'Hand Carry / Cabin Baggage Only';
      case 'checked_only':
        return 'Checked Baggage Only (Forbidden in Cabin)';
      case 'both_allowed':
        return 'Allowed in Cabin or Checked (Within Quota)';
    }
  };

  return (
    <section id="prohibited-search" className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
            Interactive Database
          </div>
          <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Search Prohibited & Restricted Items
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            Check official regulations, legal limits, and potential fines before packing your suitcase for Taiwan.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 space-y-4">
          
          {/* Main Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items e.g., pork jerky, vapes, power bank, mooncake, apple, cash, EVE medicine, alcohol..."
              className="w-full pl-12 pr-10 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented Control per §1.A) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              All Categories ({CUSTOMS_ITEMS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = CUSTOMS_ITEMS.filter(i => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 font-medium rounded-lg whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-white'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Status Sub-Filters */}
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <span className="text-slate-500 dark:text-slate-400 font-medium">Filter by Rule:</span>
            <button
              type="button"
              onClick={() => setSelectedStatus('all')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                selectedStatus === 'all'
                  ? 'font-bold text-slate-900 dark:text-white underline underline-offset-4'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              All Rules
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setSelectedStatus('prohibited')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                selectedStatus === 'prohibited'
                  ? 'font-bold text-red-600 dark:text-red-400 underline underline-offset-4'
                  : 'text-slate-500 dark:text-slate-400 hover:text-red-600'
              }`}
            >
              Strictly Prohibited
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setSelectedStatus('restricted')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                selectedStatus === 'restricted'
                  ? 'font-bold text-amber-600 dark:text-amber-400 underline underline-offset-4'
                  : 'text-slate-500 dark:text-slate-400 hover:text-amber-600'
              }`}
            >
              Restricted / Quota
            </button>
            <span className="text-slate-300 dark:text-slate-700">·</span>
            <button
              type="button"
              onClick={() => setSelectedStatus('carry_on_only')}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                selectedStatus === 'carry_on_only'
                  ? 'font-bold text-sky-600 dark:text-sky-400 underline underline-offset-4'
                  : 'text-slate-500 dark:text-slate-400 hover:text-sky-600'
              }`}
            >
              Carry-On Cabin Only
            </button>
          </div>

        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div>
            Showing <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono tabular-nums">{filteredItems.length}</span> regulated items
            {searchQuery && <span> for "{searchQuery}"</span>}
          </div>
          <div className="hidden sm:block">
            Click any item card for legal penalty breakdown & customs advice
          </div>
        </div>

        {/* Items Grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItemModal(item)}
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-400 dark:hover:border-slate-700 transition-all hover:shadow-sm cursor-pointer flex flex-col justify-between"
            >
              <div>
                
                {/* Header: Status & Agency (Unboxed text with dots) */}
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  {getStatusBadge(item.status)}
                  <span className="text-slate-400 dark:text-slate-500 text-[11px] font-mono">
                    {item.agency.split(' ')[0]}
                  </span>
                </div>

                {/* Title & Chinese Name */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.name}
                </h3>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.chineseName}
                </div>

                {/* Excerpt Details */}
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {item.details}
                </p>

                {/* Common Examples */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Examples:</span>
                  {item.commonExamples.slice(0, 2).map((ex, i) => (
                    <span key={i} className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300">
                      {ex}
                    </span>
                  ))}
                  {item.commonExamples.length > 2 && (
                    <span className="text-slate-400">+{item.commonExamples.length - 2} more</span>
                  )}
                </div>

              </div>

              {/* Card Footer: Luggage Rule & Penalty Callout */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-medium truncate max-w-[200px]">
                  {getLuggageRuleLabel(item.luggageRule)}
                </span>
                <span className="text-red-600 dark:text-red-400 font-semibold flex items-center gap-1 shrink-0">
                  <span>Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="py-16 text-center rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700">
            <HelpCircle className="w-10 h-10 mx-auto text-slate-400 mb-3" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              No matching regulated items found
            </h4>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Try searching with common terms like "pork", "sausage", "fruit", "vape", "cigarette", "battery", or "cash".
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedStatus('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Detailed Item Modal */}
        {activeItemModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div 
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-xl p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveItemModal(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Status Header */}
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                {getStatusBadge(activeItemModal.status)}
                <span aria-hidden="true">·</span>
                <span>{activeItemModal.agency}</span>
              </div>

              {/* Name & Chinese Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {activeItemModal.name}
              </h3>
              <div className="text-sm font-semibold text-red-600 dark:text-red-400 mt-0.5">
                {activeItemModal.chineseName}
              </div>

              {/* Luggage Guideline Pill Container */}
              <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Luggage className="w-4 h-4 text-slate-600 dark:text-slate-300 shrink-0" />
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Luggage Rules:
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {getLuggageRuleLabel(activeItemModal.luggageRule)}
                  </span>
                </div>
              </div>

              {/* Allowance Limit if applicable */}
              {activeItemModal.allowanceLimit && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 text-xs">
                  <div className="font-semibold text-emerald-900 dark:text-emerald-300 mb-0.5">
                    Official Allowance Limit:
                  </div>
                  <div className="text-emerald-800 dark:text-emerald-200">
                    {activeItemModal.allowanceLimit}
                  </div>
                </div>
              )}

              {/* Penalty Warning Box */}
              <div className="mt-3 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 text-xs">
                <div className="flex items-start gap-2.5">
                  <ShieldAlert className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-red-900 dark:text-red-300">
                      Legal Penalty & Consequences (If Undeclared):
                    </div>
                    <div className="mt-1 text-red-800 dark:text-red-200 font-medium leading-relaxed">
                      {activeItemModal.penaltyWarning}
                    </div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Details */}
              <div className="mt-5 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                    Regulatory Explanation
                  </h4>
                  <p className="leading-relaxed text-xs sm:text-sm">
                    {activeItemModal.details}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                    Key Airport Advice
                  </h4>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 bg-amber-50 dark:bg-amber-950/30 p-2.5 rounded border border-amber-200 dark:border-amber-900/40">
                    {activeItemModal.keyAdvice}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider mb-1">
                    Common Specific Examples
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeItemModal.commonExamples.map((ex, i) => (
                      <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Governing Statute:</span> {activeItemModal.governingLaw} · <span className="font-medium">Enforcement:</span> {activeItemModal.agency}
                </div>
              </div>

              {/* Close Button in Footer */}
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveItemModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  Close Regulation Card
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
