import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import { DISPLAY_PHONE } from '../data/companyData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onRequestQuote: () => void;
  onOpenVerificationDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onRequestQuote,
  onOpenVerificationDrawer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'manufacturing', label: 'Manufacturing' },
    { id: 'quality', label: 'Quality & Compliance' },
    { id: 'industries', label: 'Industries' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    // Smooth scroll to top of viewport when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0D12]/95 backdrop-blur-md border-b border-white/10 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#0A0D12]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo brand container - Exact red logo asset */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] rounded p-1"
            aria-label="Speedo Wires Home"
          >
            <div className="h-7 sm:h-8 flex items-center">
              <img
                src="/assets/aistudio/speedo-logo-red_e1b59f0d.png"
                alt="SPEEDO"
                className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
              WIRES
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors cursor-pointer rounded-md focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E31B23] ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E31B23] rounded-full transition-all" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVerificationDrawer}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1.5 rounded border border-white/10 hover:border-white/20 transition-colors"
              title="View verification checklist for business owner"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#E31B23]" />
              <span className="hidden xl:inline">Verification Checklist</span>
              <span className="xl:hidden">Review</span>
            </button>

            <button
              onClick={onRequestQuote}
              className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded shadow-md hover:shadow-red-900/30 transition-all flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23]"
              title="Contact factory sales & engineering"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onRequestQuote}
              className="bg-[#E31B23] text-white text-xs font-semibold px-2.5 py-1.5 rounded flex items-center gap-1"
            >
              <span>Contact</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E31B23]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0D12] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#E31B23]/15 text-[#E31B23] font-semibold border-l-2 border-[#E31B23]'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full bg-[#E31B23] hover:bg-[#C6141B] text-white text-center font-semibold py-2.5 px-4 rounded flex items-center justify-center gap-2"
            >
              <span>Contact Us ({DISPLAY_PHONE})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVerificationDrawer();
              }}
              className="w-full text-slate-400 hover:text-white text-xs py-2 flex items-center justify-center gap-1.5 border border-white/10 rounded"
            >
              <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
              <span>Review Verification Checklist</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
