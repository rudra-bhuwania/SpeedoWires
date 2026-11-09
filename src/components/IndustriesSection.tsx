import React, { useState } from 'react';
import { ArrowRight, Wind, Snowflake, Home, Monitor, Lightbulb, Zap, Wrench, CheckCircle } from 'lucide-react';
import { industriesList } from '../data/companyData';
import { IndustryType } from '../types';

interface IndustriesSectionProps {
  onSelectIndustryForQuote: (industry: IndustryType) => void;
  onExploreProducts: () => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryForQuote,
  onExploreProducts,
}) => {
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
    <section className="bg-[#0A0D12] text-white py-20 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#E31B23]" />
              <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                INDUSTRIES SERVED
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              POWERING THE PRODUCTS <span className="text-[#E31B23]">PEOPLE RELY ON.</span>
            </h2>
            <p className="text-base text-slate-300 font-normal">
              Specialized electrical connections designed for the operational, mechanical and thermal demands of high-volume OEM manufacturing.
            </p>
          </div>

          <button
            onClick={onExploreProducts}
            className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 self-start md:self-end border border-white/10 px-3.5 py-2 rounded-lg bg-[#11161C] hover:border-white/20 transition-all cursor-pointer"
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
                      ? 'bg-[#161C24] border-[#E31B23] shadow-lg shadow-black/40 text-white'
                      : 'bg-[#11161C] border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? 'bg-[#E31B23] text-white'
                          : 'bg-[#161C24] text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {industryIcons[ind.id]}
                    </div>
                    <div>
                      <div className="text-sm font-bold leading-tight">{ind.id}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
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
          <div className="lg:col-span-7 bg-[#11161C] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E31B23] uppercase">
                <span>Application Sector Focus</span>
                <span>·</span>
                <span>OEM Engineering Fit</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.title}
              </h3>
              <p className="text-sm text-slate-300 font-medium">
                {current.tagline}
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed relative z-10">
              {current.description}
            </p>

            {/* Typical Applications */}
            <div className="space-y-2 pt-2 border-t border-white/5 relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Core Applications in this Sector:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {current.applications.map((app, i) => (
                  <div key={i} className="flex items-center gap-2 bg-[#0A0D12] p-2.5 rounded border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23] shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Requirements */}
            <div className="space-y-2 pt-2 border-t border-white/5 relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Technical Specifications &amp; Quality Mandates:
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {current.keyRequirements.map((req, i) => (
                  <span
                    key={i}
                    className="bg-[#161C24] text-slate-200 px-3 py-1.5 rounded border border-white/10 flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#E31B23]" />
                    <span>{req}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-slate-400">
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
