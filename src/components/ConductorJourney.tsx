import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Flame, Activity } from 'lucide-react';
import { manufacturingStages } from '../data/companyData';

interface ConductorJourneyProps {
  onLearnMore?: () => void;
  onRequestQuote: () => void;
}

export const ConductorJourney: React.FC<ConductorJourneyProps> = ({
  onLearnMore,
  onRequestQuote,
}) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = manufacturingStages[activeStageIndex];

  return (
    <section className="bg-[#0A0D12] text-white py-20 relative overflow-hidden border-t border-b border-white/10">
      {/* Background industrial copper strands accent */}
      <div className="absolute -right-32 top-1/4 w-96 h-96 bg-[#C47A48]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-32 bottom-1/4 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            FROM RAW COPPER TO <span className="text-[#E31B23]">FINISHED CONNECTION.</span>
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Our in-house manufacturing capabilities support control over critical processes, product consistency, and dependable OEM supply.
          </p>
        </div>

        {/* Stage Timeline Navigation (Horizontal on Desktop, Scrollable on Mobile) */}
        <div className="mt-12 pt-6">
          {/* Progress Line */}
          <div className="relative mb-6">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2" />
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
                        ? 'bg-[#161C24] border-[#E31B23] shadow-lg shadow-red-950/20'
                        : isPast
                        ? 'bg-[#11161C] border-white/20 text-slate-300 hover:border-white/40'
                        : 'bg-[#11161C]/50 border-white/5 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-[#E31B23]' : 'text-slate-400'
                        }`}
                      >
                        {stage.stepNumber}
                      </span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-[#E31B23] animate-pulse" />}
                    </div>
                    <div
                      className={`text-xs font-semibold leading-tight line-clamp-2 ${
                        isActive ? 'text-white' : 'text-slate-300'
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
          <div className="mt-8 bg-[#11161C] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Stage description & verification details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#E31B23] tracking-wider uppercase">
                    <span>STAGE {activeStage.stepNumber} OF 06</span>
                    <span>·</span>
                    <span>METALLURGICAL &amp; PROCESS CONTROL</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeStage.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {activeStage.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Key Capability Box */}
                <div className="bg-[#161C24] border border-[#E31B23]/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#E31B23] uppercase">
                    <Zap className="w-3.5 h-3.5" />
                    <span>In-House Capability Advantage</span>
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {activeStage.keyCapability}
                  </div>
                </div>

                {/* Process verification checkpoints */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Process Verification Checkpoints:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {activeStage.processDetails.map((detail, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#0A0D12] px-3 py-2 rounded border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E31B23] shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stage Navigation & Quote buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() =>
                      setActiveStageIndex((prev) =>
                        prev === manufacturingStages.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="bg-[#1C2430] hover:bg-[#252C34] text-white text-xs font-medium px-4 py-2 rounded flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Next Stage ({manufacturingStages[(activeStageIndex + 1) % manufacturingStages.length].stepNumber})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onRequestQuote}
                    className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2 rounded transition-all cursor-pointer"
                  >
                    Discuss OEM Requirement
                  </button>
                </div>
              </div>

              {/* Right Column: Visual Process Highlight */}
              <div className="lg:col-span-5">
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0A0D12] p-4 space-y-4">
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
                    <div className="bg-[#161C24] p-3 rounded-lg border border-white/5">
                      <div className="text-slate-400 text-[11px]">Testing Protocol</div>
                      <div className="font-semibold text-white mt-0.5">Continuous In-Line</div>
                    </div>
                    <div className="bg-[#161C24] p-3 rounded-lg border border-white/5">
                      <div className="text-slate-400 text-[11px]">Standard Reference</div>
                      <div className="font-semibold text-white mt-0.5">IS 1293 / IS 694</div>
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
