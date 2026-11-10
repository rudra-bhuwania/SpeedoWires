import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight, ShieldCheck, Factory, Clock, Building2, FileCheck } from 'lucide-react';
import { companyData, DISPLAY_PHONE, RAW_PHONE } from '../data/companyData';
import { ProductCategory } from '../types';
import { useTheme } from '../context/ThemeContext';

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
  const { isDark } = useTheme();

  return (
    <section
      id="contact"
      className={`py-16 sm:py-24 border-t transition-colors ${
        isDark ? 'bg-[#0A0D12] text-white border-white/10' : 'bg-slate-50 text-slate-900 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span
              className={`text-xs font-mono tracking-widest uppercase ${
                isDark ? 'text-slate-300' : 'text-slate-600 font-semibold'
              }`}
            >
              GET IN TOUCH · FACTORY DIRECT
            </span>
            <span className="w-5 h-[2px] bg-[#E31B23]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            CONTACT <span className="text-[#E31B23]">US</span>
          </h2>
          <p className={`text-sm sm:text-base font-normal leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Directly connect with our management, sales, and manufacturing engineering teams in Hyderabad for technical datasheets, sample approvals, and wholesale OEM orders.
          </p>
        </div>

        {/* Selected Product Context Banner (if navigated from product catalogue) */}
        {prefilledProductName && (
          <div
            className={`p-4 sm:p-5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl mx-auto shadow-lg transition-all ${
              isDark
                ? 'bg-[#161C24] border-[#E31B23]/40'
                : 'bg-white border-[#E31B23]/40'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#E31B23] animate-pulse shrink-0" />
              <div>
                <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Selected Product Inquiry:</span>
                <div className={`text-sm sm:text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {prefilledProductName} {prefilledCategory ? `(${prefilledCategory})` : ''}
                </div>
                <div className={`text-xs mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Reference this product when calling or emailing our factory desk for immediate specs &amp; pricing.
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:+91${RAW_PHONE}`}
                className="bg-[#E31B23] hover:bg-[#C6141B] text-white font-semibold text-xs px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
              {onClearPrefill && (
                <button
                  onClick={onClearPrefill}
                  className={`text-xs px-2 py-1 transition-colors cursor-pointer ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
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
          <div
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all border ${
              isDark
                ? 'bg-[#11161C] border-white/10 hover:border-white/20 hover:shadow-xl'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="space-y-4">
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center text-[#E31B23] ${
                  isDark ? 'bg-[#161C24] border-white/5' : 'bg-red-50 border-red-100'
                }`}
              >
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Direct Telephone
                </span>
                <h3 className={`text-2xl font-bold font-mono mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {DISPLAY_PHONE}
                </h3>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Connect directly with our factory sales and dispatch desk for immediate availability, pricing schedules, and lead times.
              </p>
              <div className={`flex items-center gap-2 text-xs font-mono pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Clock className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM IST</span>
              </div>
            </div>

            <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
              <a
                href={`tel:+91${RAW_PHONE}`}
                className={`w-full font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  isDark
                    ? 'bg-[#161C24] hover:bg-[#E31B23] text-white'
                    : 'bg-slate-100 hover:bg-[#E31B23] text-slate-800 hover:text-white border border-slate-200'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>Call Factory Desk</span>
              </a>
            </div>
          </div>

          {/* Card 2: Official Email */}
          <div
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all border ${
              isDark
                ? 'bg-[#11161C] border-white/10 hover:border-white/20 hover:shadow-xl'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="space-y-4">
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center text-[#E31B23] ${
                  isDark ? 'bg-[#161C24] border-white/5' : 'bg-red-50 border-red-100'
                }`}
              >
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Official Email
                </span>
                <h3 className={`text-lg sm:text-xl font-bold font-mono mt-1 truncate ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {companyData.email}
                </h3>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Send engineering drawings, RFQ tender schedules, volume procurement contracts, and official vendor onboarding queries.
              </p>
              <div className={`flex items-center gap-2 text-xs font-mono pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Clock className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Inquiries, OEM quotes &amp; technical drawings</span>
              </div>
            </div>

            <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
              <a
                href={`mailto:${companyData.email}`}
                className={`w-full font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                  isDark
                    ? 'bg-[#161C24] hover:bg-[#E31B23] text-white'
                    : 'bg-slate-100 hover:bg-[#E31B23] text-slate-800 hover:text-white border border-slate-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Send Official Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Factory Works & Address */}
          <div
            className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all border ${
              isDark
                ? 'bg-[#11161C] border-white/10 hover:border-white/20 hover:shadow-xl'
                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="space-y-4">
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center text-[#E31B23] ${
                  isDark ? 'bg-[#161C24] border-white/5' : 'bg-red-50 border-red-100'
                }`}
              >
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Works &amp; Registered Office
                </span>
                <h3 className={`text-base sm:text-lg font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Maruti Udyog / Speedo Wires
                </h3>
              </div>
              <p className={`text-xs leading-relaxed font-normal ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                {companyData.address}
              </p>
              <div className={`flex items-center gap-2 text-xs font-mono pt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                <Building2 className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Kukatpally Industrial Area, Hyderabad</span>
              </div>
            </div>

            <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Maruti Udyog, Plot No.11, Shaktipuram, Kukatpally, Hyderabad, Telangana 500072')}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all border ${
                  isDark
                    ? 'bg-[#161C24] hover:bg-white/10 text-white border-white/10'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs'
                }`}
              >
                <MapPin className="w-4 h-4 text-[#E31B23]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>

        {/* Detailed Operations & Logistics Grid */}
        <div
          className={`rounded-2xl p-6 sm:p-8 shadow-xl border transition-all ${
            isDark
              ? 'bg-gradient-to-r from-[#121921] via-[#161C24] to-[#121921] border-white/10 text-slate-300'
              : 'bg-white border-slate-200 text-slate-700 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-2">
              <div className={`font-bold flex items-center gap-2 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Factory className="w-4 h-4 text-[#E31B23]" />
                <span>OEM Production Call-Offs</span>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                We accommodate staggered monthly delivery schedules, continuous replenishment for fan lines, and specialized batch packaging.
              </p>
            </div>

            <div className="space-y-2">
              <div className={`font-bold flex items-center gap-2 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <FileCheck className="w-4 h-4 text-[#E31B23]" />
                <span>Sample Approval &amp; Customization</span>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Send your physical samples, CAD drawings, or terminal specifications for custom pin plating, stripped lead lengths, and tooling evaluation.
              </p>
            </div>

            <div className="space-y-2">
              <div className={`font-bold flex items-center gap-2 text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                <span>Quality &amp; Standards Compliance</span>
              </div>
              <p className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Full compliance with IS 1293 (plugs up to 250V) and IS 694 (cables up to 1100V) with BIS License CM/L 630008 and in-house laboratory testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

