import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { companyData } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestQuote,
}) => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t pt-16 pb-12 transition-colors duration-200 ${
        isDark ? 'bg-[#070A0E] text-white border-white/10' : 'bg-slate-100 text-slate-800 border-slate-200'
      }`}
    >
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
              <span className={`text-xl sm:text-2xl font-black tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                WIRES
              </span>
            </div>
            <p className={`text-xs max-w-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Manufacturer of high-performance electrical plug cords, PVC insulated wires and cables, engineered for OEMs and appliance manufacturers across India.
            </p>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Navigation
            </div>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('manufacturing')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Quality &amp; Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('industries')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Industries Served
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className={`transition-colors cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Range (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Products
            </div>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors text-left cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  2 Pin Molded Plug Cords (IS 1293)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors text-left cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  3 Pin Molded Plug Cords (IS 1293)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors text-left cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  PVC Insulated Wires up to 1100V (IS 694)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors text-left cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Multi-Core Flexible PVC Cables
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors text-left cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Right Angled Space-Saving Cords
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className={`transition-colors text-left cursor-pointer ${isDark ? 'hover:text-white' : 'hover:text-[#E31B23]'}`}
                >
                  Custom OEM Wire Assemblies &amp; Harnesses
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact / Leaflet Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Factory &amp; Works
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E31B23] shrink-0 mt-0.5" />
                <span className={`leading-relaxed text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {companyData.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span className={`font-mono text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-700 font-semibold'}`}>
                  {companyData.phone}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E31B23] shrink-0" />
                <span className={`font-mono text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
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
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs transition-colors ${
            isDark ? 'border-white/10 text-slate-400' : 'border-slate-300 text-slate-600'
          }`}
        >
          <div>
            &copy; {new Date().getFullYear()} Speedo Wires · Maruti Udyog, Hyderabad. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-xs">
            <span className={`cursor-pointer transition-colors ${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'}`}>
              Privacy Policy
            </span>
            <span className={`cursor-pointer transition-colors ${isDark ? 'hover:text-slate-300' : 'hover:text-slate-900'}`}>
              Terms &amp; Conditions
            </span>
            <button
              onClick={scrollToTop}
              className={`p-2 rounded border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-[#11161C] hover:bg-[#161C24] text-slate-300 hover:text-white border-white/5'
                  : 'bg-white hover:bg-slate-200 text-slate-700 hover:text-slate-900 border-slate-300 shadow-xs'
              }`}
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
