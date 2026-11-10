import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Flame, Activity } from 'lucide-react';
import { manufacturingStages } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface ConductorJourneyProps {
  onLearnMore?: () => void;
  onRequestQuote: () => void;
}

export const ConductorJourney: React.FC<ConductorJourneyProps> = ({
  onLearnMore,
  onRequestQuote,
}) => {
  const { isDark } = useTheme();
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = manufacturingStages[activeStageIndex];

  return (
    <section
      className={`py-20 relative overflow-hidden border-t border-b transition-colors ${
        isDark ? 'bg-[#0A0D12] text-white border-white/10' : 'bg-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      {/* Background industrial copper strands accent */}
      <div className="absolute -right-32 top-1/4 w-96 h-96 bg-[#C47A48]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-1/4 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span
              className={`text-xs font-mono tracking-widest uppercase ${
                isDark ? 'text-slate-300' : 'text-slate-600 font-semibold'
              }`}
            >
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            FROM RAW COPPER TO <span className="text-[#E31B23]">FINISHED CONNECTION.</span>
          </h2>
          <p className={`text-base font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Our in-house manufacturing capabilities support control over critical processes, product consistency, and dependable OEM supply.
          </p>
        </div>

        {/* Stage Timeline Navigation */}
        <div className="mt-12 pt-6">
          {/* Progress Line */}
          <div className="relative mb-6">
            <div
              className={`hidden md:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 ${
                isDark ? 'bg-white/10' : 'bg-slate-200'
              }`}
            />
            <div
              className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-[#E31B23] -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${((activeStageIndex + 1) / manufacturingStages.length) * 100}%`,
              }}
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {manufacturingStages.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const isPast = idx < activeStageIndex;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`relative p-3 rounded-lg text-left transition-all duration-200 border cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] ${
                      isActive
                        ? isDark
                          ? 'bg-[#161C24] border-[#E31B23] shadow-lg shadow-red-950/20'
                          : 'bg-white border-[#E31B23] shadow-md border-2'
                        : isPast
                        ? isDark
                          ? 'bg-[#11161C] border-white/20 text-slate-300 hover:border-white/40'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 shadow-xs'
                        : isDark
                        ? 'bg-[#11161C]/50 border-white/5 text-slate-400 hover:border-white/20'
                        : 'bg-slate-100/70 border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-[#E31B23]' : isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {stage.stepNumber}
                      </span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#E31B23] animate-pulse" />}
                    </div>
                    <div
                      className={`text-xs font-semibold leading-tight line-clamp-2 ${
                        isActive
                          ? isDark ? 'text-white' : 'text-slate-900 font-bold'
                          : isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Detail Panel */}
          <div
            className={`mt-8 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl border transition-all ${
              isDark ? 'bg-[#11161C] border-white/10' : 'bg-white border-slate-200 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage description & verification details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E31B23] tracking-wider uppercase font-semibold">
                    <span>STAGE {activeStage.stepNumber} OF 06</span>
                    <span>·</span>
                    <span>METALLURGICAL &amp; PROCESS CONTROL</span>
                  </div>
                  <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {activeStage.title}
                  </h3>
                  <p className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {activeStage.subtitle}
                  </p>
                </div>

                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {activeStage.description}
                </p>

                {/* Key Capability Box */}
                <div
                  className={`rounded-xl p-4 border ${
                    isDark
                      ? 'bg-[#161C24] border-[#E31B23]/30'
                      : 'bg-red-50/70 border-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E31B23] uppercase font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>In-House Capability Advantage</span>
                  </div>
                  <div className={`text-sm font-semibold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {activeStage.keyCapability}
                  </div>
                </div>

                {/* Process verification checkpoints */}
                <div className="space-y-2">
                  <div className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                    Process Verification Checkpoints:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {activeStage.processDetails.map((detail, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-2 px-3 py-2 rounded border ${
                          isDark
                            ? 'bg-[#0A0D12] border-white/5 text-slate-300'
                            : 'bg-slate-50 border-slate-200 text-slate-700'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Navigation & Quote buttons */}
                <div className={`flex items-center gap-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                  <button
                    onClick={() =>
                      setActiveStageIndex((prev) =>
                        prev === manufacturingStages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className={`text-xs font-medium px-4 py-2 rounded flex items-center gap-1.5 transition-colors cursor-pointer border ${
                      isDark
                        ? 'bg-[#1C2430] hover:bg-[#252C34] text-white border-transparent'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs'
                    }`}
                  >
                    <span>Next Stage ({manufacturingStages[(activeStageIndex + 1) % manufacturingStages.length].stepNumber})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onRequestQuote}
                    className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2 rounded transition-all cursor-pointer shadow-md"
                  >
                    Discuss OEM Requirement
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Process Highlight */}
              <div className="lg:col-span-5">
                <div
                  className={`rounded-xl overflow-hidden border p-4 space-y-4 ${
                    isDark ? 'border-white/10 bg-[#0A0D12]' : 'border-slate-200 bg-slate-50 shadow-xs'
                  }`}
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/60 relative">
                    <img
                      src="/assets/aistudio/Gemini_Generated_Image_rcka1grcka1grcka_bc522c5e.png"
                      alt={activeStage.title}
                      className="w-full h-full object-cover filter contrast-110 brightness-90 transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                      <div className="font-mono text-[10px] text-slate-300 uppercase">Speedo Factory Process</div>
                      <div className="font-semibold">{activeStage.title}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className={`p-3 rounded-lg border ${isDark ? 'bg-[#161C24] border-white/5' : 'bg-white border-slate-200'}`}>
                      <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Testing Protocol</div>
                      <div className={`font-semibold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>Continuous In-Line</div>
                    </div>
                    <div className={`p-3 rounded-lg border ${isDark ? 'bg-[#161C24] border-white/5' : 'bg-white border-slate-200'}`}>
                      <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Standard Reference</div>
                      <div className={`font-semibold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>IS 1293 / IS 694</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

