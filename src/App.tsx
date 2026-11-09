import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConductorJourney } from './components/ConductorJourney';
import { ProductCatalogue } from './components/ProductCatalogue';
import { QualityCompliance } from './components/QualityCompliance';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyOemsSection } from './components/WhyOemsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VerificationDrawer } from './components/VerificationDrawer';
import { Product, ProductCategory, IndustryType } from './types';
import { productsData } from './data/products';
import { DISPLAY_PHONE } from './data/companyData';
import { ArrowRight, Factory, Cpu, Layers, ShieldCheck, Phone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [verificationDrawerOpen, setVerificationDrawerOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState<string | undefined>(undefined);
  const [prefilledCategory, setPrefilledCategory] = useState<ProductCategory | undefined>(undefined);

  // Sync tab with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'products', 'manufacturing', 'quality', 'industries', 'about', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteForProduct = (product: Product) => {
    setPrefilledProduct(product.name);
    setPrefilledCategory(product.category);
    handleTabChange('contact');
  };

  const handleSelectIndustryForQuote = (industry: IndustryType) => {
    setPrefilledProduct(`OEM supply for ${industry} sector`);
    handleTabChange('contact');
  };

  const handleGeneralQuoteRequest = () => {
    handleTabChange('contact');
  };

  return (
    <div className="min-h-screen bg-[#0A0D12] text-slate-100 flex flex-col font-sans selection:bg-[#E31B23] selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onRequestQuote={handleGeneralQuoteRequest}
        onOpenVerificationDrawer={() => setVerificationDrawerOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="space-y-0">
            {/* 1. Cinematic Hero Section */}
            <Hero
              onExploreProducts={() => handleTabChange('products')}
              onExploreManufacturing={() => handleTabChange('manufacturing')}
              onRequestQuote={handleGeneralQuoteRequest}
            />

            {/* 2. The Big Hits & Core Strengths: Compact Highlights */}
            <section className="bg-[#0E131A] py-14 sm:py-16 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="w-5 h-[2px] bg-[#E31B23]" />
                      <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                        AT A GLANCE · KEY ADVANTAGES
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1">
                      THE SPEEDO WIRES <span className="text-[#E31B23]">ADVANTAGE</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1">
                      The core manufacturing benchmarks and certifications that make Maruti Udyog / Speedo Wires the preferred supplier for appliance OEMs.
                    </p>
                  </div>

                  <button
                    onClick={() => handleTabChange('contact')}
                    className="inline-flex items-center gap-2 bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2.5 rounded transition-all self-start md:self-end cursor-pointer shadow-md"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Contact Factory Desk</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="bg-[#11161C] border border-white/10 rounded-xl p-5 space-y-3 hover:border-white/20 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#161C24] border border-white/5 flex items-center justify-center">
                      <Factory className="w-5 h-5 text-[#E31B23]" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">10M Units / Year</div>
                      <div className="text-xs font-bold text-[#E31B23]">Installed Annual Capacity</div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      High-volume production facility built for seasonal volume peaks, bulk procurement, and continuous OEM assembly lines.
                    </p>
                  </div>

                  <div className="bg-[#11161C] border border-white/10 rounded-xl p-5 space-y-3 hover:border-white/20 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#161C24] border border-white/5 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-[#E31B23]" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">In-House Drawing</div>
                      <div className="text-xs font-bold text-[#E31B23]">99.9% Electrolytic Copper</div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Multi-die drawing and continuous resistance annealing guarantee maximum conductivity, low resistance, and high flex fatigue life.
                    </p>
                  </div>

                  <div className="bg-[#11161C] border border-white/10 rounded-xl p-5 space-y-3 hover:border-white/20 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#161C24] border border-white/5 flex items-center justify-center">
                      <Layers className="w-5 h-5 text-[#E31B23]" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">In-House Compounding</div>
                      <div className="text-xs font-bold text-[#E31B23]">Virgin PVC Insulation</div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Custom compounded virgin resin formulation for superior dielectric strength, heat resistance, and uniform concentric walls.
                    </p>
                  </div>

                  <div className="bg-[#11161C] border border-white/10 rounded-xl p-5 space-y-3 hover:border-white/20 transition-all">
                    <div className="w-10 h-10 rounded-lg bg-[#161C24] border border-white/5 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#E31B23]" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">IS 1293 &amp; IS 694</div>
                      <div className="text-xs font-bold text-[#E31B23]">BIS Licensed (CM/L 630008)</div>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Rigorous laboratory testing and 100% in-line spark testing. Certified ISO 9001:2019 Quality Management System.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Product Catalogue Highlights: Just a hint */}
            <section className="bg-[#0A0D12] py-16 border-b border-white/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-2">
                      <span className="w-5 h-[2px] bg-[#E31B23]" />
                      <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                        OUR PRODUCTS (JUST A HINT)
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mt-1">
                      ENGINEERED FOR THE CONNECTION.{' '}
                      <span className="text-[#E31B23]">BUILT FOR APPLIANCES.</span>
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                      A sample of our top high-volume OEM configurations. Full technical datasheets and custom variations available in our catalogue.
                    </p>
                  </div>

                  <button
                    onClick={() => handleTabChange('products')}
                    className="inline-flex items-center gap-2 bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2.5 rounded transition-all self-start md:self-end cursor-pointer"
                  >
                    <span>View All 12 Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productsData.slice(0, 3).map((product) => (
                    <div
                      key={product.id}
                      className="bg-[#11161C] border border-white/10 rounded-xl overflow-hidden p-5 flex flex-col justify-between hover:border-white/20 transition-all hover:shadow-xl group"
                    >
                      <div className="space-y-4">
                        <div className="aspect-[16/10] bg-[#0A0D12] rounded-lg p-3 flex items-center justify-center border border-white/5">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain filter contrast-105 group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <div className="text-[11px] font-mono text-[#E31B23] uppercase">
                            {product.category}
                          </div>
                          <h3 className="text-lg font-bold text-white mt-0.5">
                            {product.name}
                          </h3>
                          <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                            {product.shortDesc}
                          </p>
                          {product.stampedMarkings && (
                            <div className="mt-2 text-[10px] font-mono text-[#E31B23] bg-[#E31B23]/10 px-2 py-0.5 rounded truncate">
                              {product.stampedMarkings}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                        <button
                          onClick={() => handleTabChange('products')}
                          className="text-xs text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <span>Full Specs</span>
                          <ArrowRight className="w-3 h-3 text-[#E31B23]" />
                        </button>
                        <button
                          onClick={() => handleOpenQuoteForProduct(product)}
                          className="bg-[#161C24] hover:bg-[#E31B23] text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                        >
                          <span>Contact Us</span>
                          <ArrowRight className="w-3 h-3 text-[#E31B23] group-hover:text-white" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => handleTabChange('products')}
                    className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Browse complete catalogue with 2-pin, 3-pin, IEC C13, Figure-8, and twin-flat wire rolls</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E31B23]" />
                  </button>
                </div>
              </div>
            </section>

            {/* 4. Direct Factory Contact Section (No Forms) */}
            <ContactSection
              prefilledCategory={prefilledCategory}
              prefilledProductName={prefilledProduct}
              onClearPrefill={() => {
                setPrefilledProduct(undefined);
                setPrefilledCategory(undefined);
              }}
            />
          </div>
        )}

        {activeTab === 'products' && (
          <ProductCatalogue onSelectForQuote={handleOpenQuoteForProduct} />
        )}

        {activeTab === 'manufacturing' && (
          <div className="pt-24 space-y-0">
            {/* Manufacturing Header */}
            <div className="bg-[#0E131A] border-b border-white/10 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
                <div className="inline-flex items-center gap-2">
                  <span className="w-5 h-[2px] bg-[#E31B23]" />
                  <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
                    MANUFACTURING EXCELLENCE
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                  CONTROL THE PROCESS. <span className="text-[#E31B23]">RESPECT THE DETAIL.</span>
                </h1>
                <p className="text-base text-slate-300 max-w-2xl font-normal">
                  In-house metallurgical drawing, controlled resistance annealing, and polymer compounding give Speedo Wires total control over critical product performance.
                </p>
              </div>
            </div>

            <ConductorJourney
              onLearnMore={() => handleTabChange('manufacturing')}
              onRequestQuote={handleGeneralQuoteRequest}
            />

            <WhyOemsSection onRequestQuote={handleGeneralQuoteRequest} />
          </div>
        )}

        {activeTab === 'quality' && (
          <div className="pt-24 space-y-0">
            <QualityCompliance onRequestQuote={handleGeneralQuoteRequest} />
          </div>
        )}

        {activeTab === 'industries' && (
          <div className="pt-24 space-y-0">
            <IndustriesSection
              onSelectIndustryForQuote={handleSelectIndustryForQuote}
              onExploreProducts={() => handleTabChange('products')}
            />
            <WhyOemsSection onRequestQuote={handleGeneralQuoteRequest} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-24 space-y-0">
            <AboutSection
              onRequestQuote={handleGeneralQuoteRequest}
              onExploreManufacturing={() => handleTabChange('manufacturing')}
            />
            <WhyOemsSection onRequestQuote={handleGeneralQuoteRequest} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24 space-y-0">
            <ContactSection
              prefilledCategory={prefilledCategory}
              prefilledProductName={prefilledProduct}
              onClearPrefill={() => {
                setPrefilledProduct(undefined);
                setPrefilledCategory(undefined);
              }}
            />
          </div>
        )}
      </main>

      {/* Global Site Footer */}
      <Footer
        onNavigate={handleTabChange}
        onRequestQuote={handleGeneralQuoteRequest}
        onOpenVerificationDrawer={() => setVerificationDrawerOpen(true)}
      />

      {/* Business Owner Verification Checklist Drawer */}
      <VerificationDrawer
        isOpen={verificationDrawerOpen}
        onClose={() => setVerificationDrawerOpen(false)}
      />
    </div>
  );
}
