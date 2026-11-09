import React from 'react';
import { Cpu, ShieldCheck, Factory, Handshake, Clock, Check } from 'lucide-react';

interface WhyOemsSectionProps {
  onRequestQuote: () => void;
}

export const WhyOemsSection: React.FC<WhyOemsSectionProps> = ({ onRequestQuote }) => {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-[#E31B23]" />,
      title: 'In-House Manufacturing Control',
      sub: 'From copper drawing to final assembly',
      desc: 'By drawing copper and compounding PVC in-house rather than relying on disparate commodity vendors, Speedo Wires maintains tight control over conductor purity, dielectric resistance, and concentric wall thickness.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#E31B23]" />,
      title: 'Consistent Quality & Compliance',
      sub: 'ISO 9001:2019 | BIS Licensed | IS: 1293 | IS: 694',
      desc: 'Our processes are geared towards OEM audit compliance. Routine batch testing in our in-house lab ensures full adherence to national electrical safety standards.'
    },
    {
      icon: <Factory className="w-6 h-6 text-[#E31B23]" />,
      title: 'High-Volume Production Capacity',
      sub: 'Up to 10 million units per year',
      desc: 'Our automated multi-line facility is built to handle seasonal production spikes, volume procurement contracts, and synchronized just-in-time delivery for OEM assembly lines.'
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#E31B23]" />,
      title: 'Fan Industry Specialization',
      sub: 'A trusted partner for leading OEMs',
      desc: 'With approximately 30 years of manufacturing experience, we understand the specific nuances of appliance manufacturing—from wire strip length precision to vibration-proof molded strain boots.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#E31B23]" />,
      title: 'Reliable Long-Term Partnership',
      sub: 'Built for long-term relationships',
      desc: 'We prioritize transparent communication, consistent batch-to-batch compounding, and dedicated account engineering support so your factory lines never stall.'
    }
  ];

  return (
    <section className="bg-[#0E131A] text-white py-20 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              WHY CHOOSE SPEEDO WIRES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            BUILT FOR OEMS. <span className="text-[#E31B23]">TRUSTED FOR QUALITY.</span>
          </h2>
          <p className="text-base text-slate-300 font-normal">
            More than a component supplier. An integrated engineering partner with the capacity and metallurgical control your brand can depend on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.slice(0, 3).map((pillar, i) => (
            <div
              key={i}
              className="bg-[#11161C] border border-white/10 rounded-xl p-6 space-y-4 hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-[#161C24] border border-white/5 flex items-center justify-center">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <div className="text-xs font-mono text-[#E31B23] mt-0.5">{pillar.sub}</div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}

          {pillars.slice(3).map((pillar, i) => (
            <div
              key={i + 3}
              className="bg-[#11161C] border border-white/10 rounded-xl p-6 space-y-4 hover:border-white/20 transition-all md:col-span-1 lg:col-span-1.5"
            >
              <div className="w-12 h-12 rounded-lg bg-[#161C24] border border-white/5 flex items-center justify-center">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                <div className="text-xs font-mono text-[#E31B23] mt-0.5">{pillar.sub}</div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
