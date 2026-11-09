import React from 'react';
import { ArrowUp, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onRequestQuote: () => void;
  onOpenVerificationDrawer: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestQuote,
  onOpenVerificationDrawer,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070A0E] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Col 1: Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-7 sm:h-8 flex items-center">
                <img
                  src="/assets/aistudio/speedo-logo-red_e1b59f0d.png"
                  alt="SPEEDO"
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
                WIRES
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Manufacturer of high-performance electrical plug cords, PVC insulated wires and cables, engineered for OEMs and appliance manufacturers across India.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenVerificationDrawer}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded border border-white/10 hover:border-white/20 transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23]" />
                <span>Verification Checklist</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('manufacturing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Quality &amp; Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Industries Served
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Range (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Products
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  2 Pin Molded Plug Cords (IS 1293)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  3 Pin Molded Plug Cords (IS 1293)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  PVC Insulated Wires up to 1100V (IS 694)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Multi-Core Flexible PVC Cables
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Right Angled Space-Saving Cords
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors text-left"
                >
                  Custom OEM Wire Assemblies &amp; Harnesses
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact / Leaflet Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Factory &amp; Works
            </div>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[11px] text-slate-400">
                  {companyData.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span className="font-mono text-[11px] text-slate-300">
                  {companyData.phone}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span className="font-mono text-[11px] text-slate-300">
                  {companyData.email}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={onRequestQuote}
                  className="w-full bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold py-2.5 px-3 rounded text-center transition-all cursor-pointer shadow-md"
                >
                  Contact Factory Desk
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Speedo Wires. All rights reserved.
            <span className="text-[10px] text-slate-400 block sm:inline sm:ml-2">
              (Leaflet entity reference: Maruti Udyog, Hyderabad)
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms &amp; Conditions</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#11161C] hover:bg-[#161C24] text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
