import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, ShieldCheck, Factory, Clock, Building2, FileCheck } from 'lucide-react';
import { companyData, DISPLAY_PHONE, RAW_PHONE } from '../data/companyData';
import { ProductCategory } from '../types';

interface ContactSectionProps {
  prefilledCategory?: ProductCategory;
  prefilledProductName?: string;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledCategory,
  prefilledProductName,
  onClearPrefill,
}) => {
  return (
    <section id="contact" className="bg-[#0A0D12] text-white py-16 sm:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              GET IN TOUCH · FACTORY DIRECT
            </span>
            <span className="w-5 h-[2px] bg-[#E31B23]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            CONTACT <span className="text-[#E31B23]">US</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Directly connect with our management, sales, and manufacturing engineering teams in Hyderabad for technical datasheets, sample approvals, and wholesale OEM orders.
          </p>
        </div>

        {/* Selected Product Context Banner (if navigated from product catalogue) */}
        {prefilledProductName && (
          <div className="p-4 sm:p-5 rounded-xl bg-[#161C24] border border-[#E31B23]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] animate-pulse shrink-0" />
              <div>
                <span className="text-xs text-slate-400">Selected Product Inquiry:</span>
                <div className="text-sm sm:text-base font-bold text-white">
                  {prefilledProductName} {prefilledCategory ? `(${prefilledCategory})` : ''}
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Reference this product when calling or emailing our factory desk for immediate specs &amp; pricing.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:+91${RAW_PHONE}`}
                className="bg-[#E31B23] hover:bg-[#C6141B] text-white font-semibold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              {onClearPrefill && (
                <button
                  onClick={onClearPrefill}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* 3 Core Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Direct Phone */}
          <div className="bg-[#11161C] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all hover:shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#161C24] border border-white/5 flex items-center justify-center text-[#E31B23]">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Direct Telephone</span>
                <h3 className="text-2xl font-bold font-mono text-white mt-1">
                  {DISPLAY_PHONE}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly with our factory sales and dispatch desk for immediate availability, pricing schedules, and lead times.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
                <Clock className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={`tel:+91${RAW_PHONE}`}
                className="w-full bg-[#161C24] hover:bg-[#E31B23] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Factory Desk</span>
              </a>
            </div>
          </div>

          {/* Card 2: Official Email */}
          <div className="bg-[#11161C] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all hover:shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#161C24] border border-white/5 flex items-center justify-center text-[#E31B23]">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Official Email</span>
                <h3 className="text-lg sm:text-xl font-bold font-mono text-white mt-1 truncate">
                  {companyData.email}
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Send engineering drawings, RFQ tender schedules, volume procurement contracts, and official vendor onboarding queries.
              </p>
              <div className="text-[11px] text-amber-400 font-mono bg-amber-400/10 border border-amber-400/20 px-2.5 py-1.5 rounded-lg">
                ℹ️ Corporate domain email IDs updating soon
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={`mailto:${companyData.email}`}
                className="w-full bg-[#161C24] hover:bg-[#E31B23] text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Official Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Factory Works & Address */}
          <div className="bg-[#11161C] border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all hover:shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#161C24] border border-white/5 flex items-center justify-center text-[#E31B23]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Works &amp; Registered Office</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  Maruti Udyog / Speedo Wires
                </h3>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                {companyData.address}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
                <Building2 className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Kukatpally Industrial Area, Hyderabad</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Maruti Udyog, Plot No.11, Shaktipuram, Kukatpally, Hyderabad, Telangana 500072')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#161C24] hover:bg-white/10 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                <MapPin className="w-4 h-4 text-[#E31B23]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Operations & Logistics Grid */}
        <div className="bg-gradient-to-r from-[#121921] via-[#161C24] to-[#121921] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2">
              <div className="font-bold text-white flex items-center gap-2 text-sm">
                <Factory className="w-4 h-4 text-[#E31B23]" />
                <span>OEM Production Call-Offs</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                We accommodate staggered monthly delivery schedules, continuous replenishment for fan lines, and specialized batch packaging.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-white flex items-center gap-2 text-sm">
                <FileCheck className="w-4 h-4 text-[#E31B23]" />
                <span>Sample Approval &amp; Customization</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Send your physical samples, CAD drawings, or terminal specifications for custom pin plating, stripped lead lengths, and tooling evaluation.
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold text-white flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                <span>Quality &amp; Standards Compliance</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Full compliance with IS 1293 (plugs up to 250V) and IS 694 (cables up to 1100V) with BIS License CM/L 630008 and in-house laboratory testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
