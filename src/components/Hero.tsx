import React from 'react';
import { ArrowRight, Layers, Award, Factory, Cpu, ShieldCheck } from 'lucide-react';
import { companyData, DISPLAY_PHONE } from '../data/companyData';

interface HeroProps {
  onExploreProducts: () => void;
  onExploreManufacturing: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onExploreManufacturing,
  onRequestQuote,
}) => {
  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-[#0A0D12]">
      {/* Background industrial texture & copper glow */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none mix-blend-screen">
        <img
          src="/assets/aistudio/Gemini_Generated_Image_rcka1grcka1grcka_bc522c5e.png"
          alt="Drawn copper conductor wire"
          className="w-full h-full object-cover object-right filter brightness-90 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-[#0A0D12]/60" />
      </div>

      {/* Decorative fine red conductor line traveling through hero */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E31B23]/40 to-transparent pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto py-10 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#E31B23]" />
              <span className="text-xs sm:text-sm font-mono tracking-widest text-slate-300 uppercase">
                ELECTRICAL CONNECTIONS. ENGINEERED.
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              POWER IN EVERY{' '}
              <span className="text-[#E31B23] relative inline-block">
                CONNECTION.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Precision-manufactured plug cords, wires and cables for the products that keep industries moving.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProducts}
                className="bg-[#E31B23] hover:bg-[#C6141B] text-white font-semibold text-base px-6 py-3.5 rounded shadow-lg shadow-red-950/40 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E31B23]"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestQuote}
                className="bg-[#161C24] hover:bg-[#252C34] text-white font-semibold text-base px-6 py-3.5 rounded border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Contact Factory</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreManufacturing}
                className="bg-[#161C24] hover:bg-[#252C34] text-slate-300 hover:text-white font-medium text-sm px-4 py-3 rounded border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Manufacturing Process</span>
              </button>
            </div>

            {/* Verified Capabilities summary */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                <span>IS 1293 &amp; IS 694 Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                <span>In-House Copper Drawing &amp; Compounding</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E31B23]" />
                <span>OEM Specialized Supply</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Visual (White plug cord on industrial surface) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Subtle ambient red/copper halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E31B23]/15 via-[#C47A48]/10 to-transparent rounded-2xl filter blur-2xl opacity-70 pointer-events-none" />

              {/* Product Frame with clean industrial background */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#161C24] to-[#0D1117] border border-white/10 p-4 shadow-2xl">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#11161C] flex items-center justify-center">
                  <img
                    src="/assets/products/hero-plug-cable.png"
                    alt="Speedo Wires precision 3-pin plug cord"
                    className="w-full h-full object-contain filter contrast-105 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#0A0D12]/85 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded text-[11px] font-mono text-slate-300">
                    IS 1293 Compliant Molded 3-Pin
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-1">
                  <span>Engineered for Fan &amp; Appliance OEMs</span>
                  <button
                    onClick={onRequestQuote}
                    className="text-[#E31B23] hover:text-red-400 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Enquire Spec</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="relative z-10 w-full border-t border-b border-white/10 bg-[#0E131A]/90 backdrop-blur-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
            {/* Metric 1 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#161C24] border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#E31B23]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">~30 Years</div>
                <div className="text-xs text-slate-400">Manufacturing Experience</div>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#161C24] border border-white/10 flex items-center justify-center shrink-0">
                <Factory className="w-5 h-5 text-[#E31B23]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">10M Cords/Yr</div>
                <div className="text-xs text-slate-400">Installed Production Capacity</div>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#161C24] border border-white/10 flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-[#E31B23]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">In-House Drawing</div>
                <div className="text-xs text-slate-400">&amp; Annealing Control</div>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#161C24] border border-white/10 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-[#E31B23]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">In-House PVC</div>
                <div className="text-xs text-slate-400">Polymer Compounding</div>
              </div>
            </div>

            {/* Metric 5 */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#161C24] border border-white/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#E31B23]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">ISO 9001:2019</div>
                <div className="text-xs text-slate-400">BIS Licensed Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
