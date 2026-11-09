import React from 'react';
import { Award, Factory, Cpu, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

interface AboutSectionProps {
  onRequestQuote: () => void;
  onExploreManufacturing: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onRequestQuote,
  onExploreManufacturing,
}) => {
  return (
    <section className="bg-[#0A0D12] text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              ABOUT SPEEDO WIRES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            EXPERIENCE BUILT INTO <span className="text-[#E31B23]">EVERY CONNECTION.</span>
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            With approximately 30 years of manufacturing experience, Speedo Wires has developed into a dedicated manufacturing partner for OEMs across India's fan, electrical, and appliance sectors.
          </p>
        </div>

        {/* Narrative & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-sm text-slate-300 leading-relaxed">
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
                className="bg-[#161C24] hover:bg-[#252C34] text-white text-xs font-semibold px-4 py-2.5 rounded border border-white/10 flex items-center gap-2 transition-all cursor-pointer"
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
              <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 text-center space-y-1">
                <div className="text-3xl font-black text-[#E31B23]">~30</div>
                <div className="text-xs font-mono uppercase text-slate-400">Years Experience</div>
                <p className="text-[11px] text-slate-400 pt-1">Manufacturing electrical plug cords &amp; cables</p>
              </div>

              <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 text-center space-y-1">
                <div className="text-3xl font-black text-white">10M</div>
                <div className="text-xs font-mono uppercase text-slate-400">Cords / Year</div>
                <p className="text-[11px] text-slate-400 pt-1">Installed annual production throughput</p>
              </div>

              <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 text-center space-y-1">
                <div className="text-2xl font-black text-white">IS 1293</div>
                <div className="text-xs font-mono uppercase text-slate-400">Standard Associated</div>
                <p className="text-[11px] text-slate-400 pt-1">Molded plug cords with BIS license</p>
              </div>

              <div className="bg-[#11161C] border border-white/10 rounded-xl p-6 text-center space-y-1">
                <div className="text-2xl font-black text-[#E31B23]">IS 694</div>
                <div className="text-xs font-mono uppercase text-slate-400">Standard Associated</div>
                <p className="text-[11px] text-slate-400 pt-1">PVC insulated cables up to 1100V</p>
              </div>
            </div>

            {/* In-House Testing Laboratory Highlight */}
            <div className="bg-[#161C24] border border-white/10 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E31B23]">
                <ShieldCheck className="w-4 h-4" />
                <span>IN-HOUSE TESTING LABORATORY</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Equipped for routine and type testing including high-voltage spark testing, dielectric breakdown, conductor resistance, tensile strength, elongation, and mechanical cord flex endurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
