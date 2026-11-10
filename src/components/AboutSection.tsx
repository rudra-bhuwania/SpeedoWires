import React from 'react';
import { Award, Factory, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface AboutSectionProps {
  onRequestQuote: () => void;
  onExploreManufacturing: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onRequestQuote,
  onExploreManufacturing,
}) => {
  const { isDark } = useTheme();

  return (
    <section
      className={`py-20 border-t transition-colors ${
        isDark ? 'bg-[#0A0D12] text-white border-white/10' : 'bg-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span
              className={`text-xs font-mono tracking-widest uppercase ${
                isDark ? 'text-slate-300' : 'text-slate-600 font-semibold'
              }`}
            >
              ABOUT SPEEDO WIRES
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            EXPERIENCE BUILT INTO <span className="text-[#E31B23]">EVERY CONNECTION.</span>
          </h2>
          <p className={`text-base font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            With approximately 30 years of manufacturing experience, Speedo Wires has developed into a dedicated manufacturing partner for OEMs across India's fan, electrical, and appliance sectors.
          </p>
        </div>

        {/* Narrative & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className={`lg:col-span-6 space-y-6 text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <p>
              In high-volume appliance manufacturing, an electrical connection is never a trivial afterthought. A flawed terminal crimp, an inconsistent copper alloy, or an improperly insulated PVC sheath can disrupt production lines, trigger thermal failures, or compromise end-consumer safety.
            </p>
            <p>
              Speedo Wires was built upon the engineering philosophy of total in-house process control. Rather than operating purely as a finishing workshop, our facility integrates fundamental metallurgical drawing, electrical resistance annealing, and polymer compounding under one roof.
            </p>
            <p>
              Today, with an installed capacity of up to 10 million plug cords per year, our operations supply dependable, certified electrical assemblies to prominent equipment manufacturers, while maintaining rigorous ISO 9001:2019 quality workflows and Bureau of Indian Standards (BIS) compliance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onExploreManufacturing}
                className={`text-xs font-semibold px-4 py-2.5 rounded border flex items-center gap-2 transition-all cursor-pointer ${
                  isDark
                    ? 'bg-[#161C24] hover:bg-[#252C34] text-white border-white/10'
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-xs'
                }`}
              >
                <span>Inspect Manufacturing Process</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onRequestQuote}
                className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2.5 rounded transition-all cursor-pointer shadow-md"
              >
                Discuss OEM Partnership
              </button>
            </div>
          </div>

          {/* Right Statistics & Manufacturing Milestones */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`rounded-xl p-6 text-center space-y-1 border ${
                  isDark ? 'bg-[#11161C] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="text-3xl font-black text-[#E31B23]">~30</div>
                <div className={`text-xs font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Years Experience
                </div>
                <p className={`text-[11px] pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Manufacturing electrical plug cords &amp; cables
                </p>
              </div>

              <div
                className={`rounded-xl p-6 text-center space-y-1 border ${
                  isDark ? 'bg-[#11161C] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className={`text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>10M</div>
                <div className={`text-xs font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Cords / Year
                </div>
                <p className={`text-[11px] pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Installed annual production throughput
                </p>
              </div>

              <div
                className={`rounded-xl p-6 text-center space-y-1 border ${
                  isDark ? 'bg-[#11161C] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>IS 1293</div>
                <div className={`text-xs font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Standard Associated
                </div>
                <p className={`text-[11px] pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Molded plug cords with BIS license
                </p>
              </div>

              <div
                className={`rounded-xl p-6 text-center space-y-1 border ${
                  isDark ? 'bg-[#11161C] border-white/10' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="text-2xl font-black text-[#E31B23]">IS 694</div>
                <div className={`text-xs font-mono uppercase ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Standard Associated
                </div>
                <p className={`text-[11px] pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  PVC insulated cables up to 1100V
                </p>
              </div>
            </div>

            {/* In-House Testing Laboratory Highlight */}
            <div
              className={`rounded-xl p-5 space-y-3 border ${
                isDark ? 'bg-[#161C24] border-white/10' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#E31B23] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>IN-HOUSE TESTING LABORATORY</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Equipped for routine and type testing including high-voltage spark testing, dielectric breakdown, conductor resistance, tensile strength, elongation, and mechanical cord flex endurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

