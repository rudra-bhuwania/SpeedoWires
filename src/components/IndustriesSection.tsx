import React, { useState } from 'react';
import { ArrowRight, Wind, Snowflake, Home, Monitor, Lightbulb, Zap, Wrench, CheckCircle } from 'lucide-react';
import { industriesList } from '../data/companyData';
import { IndustryType } from '../types';
import { useTheme } from '../context/ThemeContext';

interface IndustriesSectionProps {
  onSelectIndustryForQuote: (industry: IndustryType) => void;
  onExploreProducts: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryForQuote,
  onExploreProducts,
}) => {
  const { isDark } = useTheme();
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>('Fans');

  const industryIcons: Record<IndustryType, React.ReactNode> = {
    Fans: <Wind className="w-5 h-5" />,
    'Air Coolers': <Snowflake className="w-5 h-5" />,
    'Electrical Appliances': <Home className="w-5 h-5" />,
    'Electronic Equipment': <Monitor className="w-5 h-5" />,
    'LED Products': <Lightbulb className="w-5 h-5" />,
    'Stabilizers & Adapters': <Zap className="w-5 h-5" />,
    'Power Tools': <Wrench className="w-5 h-5" />,
    Others: <CheckCircle className="w-5 h-5" />,
  };

  const current = industriesList.find((item) => item.id === selectedIndustry) || industriesList[0];

  return (
    <section
      className={`py-20 border-t relative transition-colors ${
        isDark ? 'bg-[#0A0D12] text-white border-white/10' : 'bg-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#E31B23]" />
              <span
                className={`text-xs font-mono tracking-widest uppercase ${
                  isDark ? 'text-slate-300' : 'text-slate-600 font-semibold'
                }`}
              >
                INDUSTRIES SERVED
              </span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              POWERING THE PRODUCTS <span className="text-[#E31B23]">PEOPLE RELY ON.</span>
            </h2>
            <p className={`text-base font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Specialized electrical connections designed for the operational, mechanical and thermal demands of high-volume OEM manufacturing.
            </p>
          </div>

          <button
            onClick={onExploreProducts}
            className={`text-xs font-medium flex items-center gap-1.5 self-start md:self-end border px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
              isDark
                ? 'text-slate-300 hover:text-white border-white/10 bg-[#11161C] hover:border-white/20'
                : 'text-slate-700 hover:text-slate-900 border-slate-300 bg-white hover:border-slate-400 shadow-xs'
            }`}
          >
            <span>View Catalogue by Industry</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E31B23]" />
          </button>
        </div>

        {/* Industry Interactive Map: Pills/Tabs + Deep Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Industry Selection List */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {industriesList.map((ind) => {
              const isSelected = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] ${
                    isSelected
                      ? isDark
                        ? 'bg-[#161C24] border-[#E31B23] shadow-lg shadow-black/40 text-white'
                        : 'bg-white border-[#E31B23] shadow-md text-slate-900 border-2'
                      : isDark
                      ? 'bg-[#11161C] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-[#E31B23] text-white'
                          : isDark
                          ? 'bg-[#161C24] text-slate-400'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {industryIcons[ind.id]}
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">{ind.id}</div>
                      <div className={`text-[11px] truncate max-w-[200px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                        {ind.title}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#E31B23] translate-x-1' : 'opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detailed Application Showcase Card */}
          <div
            className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden border ${
              isDark
                ? 'bg-[#11161C] border-white/10'
                : 'bg-white border-slate-200 shadow-lg'
            }`}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E31B23] uppercase font-semibold">
                <span>Application Sector Focus</span>
                <span>·</span>
                <span>OEM Engineering Fit</span>
              </div>
              <h3 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {current.title}
              </h3>
              <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {current.tagline}
              </p>
            </div>

            <p className={`text-sm leading-relaxed relative z-10 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              {current.description}
            </p>

            {/* Typical Applications */}
            <div className={`space-y-2 pt-2 border-t relative z-10 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                Core Applications in this Sector:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {current.applications.map((app, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-2 p-2.5 rounded border ${
                      isDark
                        ? 'bg-[#0A0D12] text-slate-300 border-white/5'
                        : 'bg-slate-50 text-slate-800 border-slate-200'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23] shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Requirements */}
            <div className={`space-y-2 pt-2 border-t relative z-10 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
              <div className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                Technical Specifications &amp; Quality Mandates:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {current.keyRequirements.map((req, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1.5 rounded border flex items-center gap-1.5 ${
                      isDark
                        ? 'bg-[#161C24] text-slate-200 border-white/10'
                        : 'bg-slate-50 text-slate-800 border-slate-200'
                    }`}
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#E31B23]" />
                    <span>{req}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className={`pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Need tailored wiring lengths or custom molding for {current.id}?
              </span>
              <button
                onClick={() => onSelectIndustryForQuote(current.id)}
                className="w-full sm:w-auto bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-5 py-2.5 rounded shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Enquire for {current.id}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

