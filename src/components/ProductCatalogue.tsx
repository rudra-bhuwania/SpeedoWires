import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, ChevronRight, SlidersHorizontal, Check } from 'lucide-react';
import { Product, ProductCategory, WireGauge, IndustryType } from '../types';
import { productsData } from '../data/products';
import { filterProducts } from '../utils/catalogue';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCatalogueProps {
  onSelectForQuote: (product: Product) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onSelectForQuote }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [selectedGauge, setSelectedGauge] = useState<WireGauge | 'All'>('All');
  const [selectedApplication, setSelectedApplication] = useState<IndustryType | 'All'>('All');
  const [sortBy, setSortBy] = useState<'recommended' | 'name-asc' | 'name-desc'>('recommended');
  const [inspectingProduct, setInspectingProduct] = useState<Product | null>(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const categories: ProductCategory[] = [
    'All',
    'Plug Cords',
    'IEC & Appliance Cords',
    'Twin Flat & Insulated Wires',
    'PVC Cables',
    'Custom Solutions',
  ];

  const wireGauges: WireGauge[] = [
    '0.5 sq.mm',
    '0.75 sq.mm',
    '1.0 sq.mm',
    '1.5 sq.mm',
    '2.5 sq.mm',
    '4.0 sq.mm',
    '6.0 sq.mm',
  ];

  const applications: IndustryType[] = [
    'Fans',
    'Electrical Appliances',
    'Electronic Equipment',
    'LED Products',
    'Air Coolers',
    'Stabilizers & Adapters',
    'Power Tools',
    'Others',
  ];

  const filteredProducts = useMemo(() => {
    return filterProducts(productsData, {
      query: searchQuery,
      category: selectedCategory,
      wireGauge: selectedGauge,
      application: selectedApplication,
      sortBy: sortBy,
    });
  }, [searchQuery, selectedCategory, selectedGauge, selectedApplication, sortBy]);

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'All' || selectedGauge !== 'All' || selectedApplication !== 'All';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedGauge('All');
    setSelectedApplication('All');
    setSortBy('recommended');
  };

  return (
    <section className="bg-[#0A0D12] text-white pt-24 pb-20">
      {/* Catalogue Sub-Hero Banner */}
      <div className="relative border-b border-white/10 bg-gradient-to-r from-[#0E131A] via-[#161C24] to-[#0E131A] py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_rcka1grcka1grcka_bc522c5e.png"
            alt="Copper conductor coils"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-125"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-transparent to-[#0A0D12]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">
              OUR PRODUCTS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            High-Quality <span className="text-[#E31B23]">Plug Cords &amp; Wires</span>
          </h1>
          <p className="text-base text-slate-300 max-w-2xl font-normal">
            Engineered for performance. Manufactured for industries that keep the world moving.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
          <span>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white font-medium">Products</span>
        </nav>

        {/* Section Heading & Search Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Our Product Range
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              From plug cords to PVC insulated wires and cables, we offer a comprehensive range of electrical solutions built for durability, safety and consistent performance.
            </p>
          </div>

          {/* Quick search input */}
          <div className="w-full md:w-80 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-[#161C24] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#E31B23] focus:border-[#E31B23]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Mobile filter toggle bar */}
        <div className="lg:hidden flex items-center justify-between py-4 border-b border-white/10">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-xs font-semibold bg-[#161C24] px-3.5 py-2 rounded-lg border border-white/10 text-slate-200"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>Filter Catalogue</span>
          </button>
          <div className="text-xs text-slate-400 font-mono">
            {filteredProducts.length} items found
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left Sidebar Filters */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-[#11161C] border border-white/10 rounded-xl p-5 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Filter className="w-4 h-4 text-[#E31B23]" />
                  <span>Filters</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#E31B23] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Product Type Filter */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-3 h-[1px] bg-[#E31B23]" />
                  <span>Product Type</span>
                </div>
                <div className="space-y-1">
                  {categories.map((cat) => {
                    const isSelected = selectedCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-xs flex items-center justify-between transition-colors ${
                          isSelected
                            ? 'bg-[#E31B23]/15 text-white font-semibold border-l-2 border-[#E31B23]'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{cat}</span>
                        {isSelected && <Check className="w-3 h-3 text-[#E31B23]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Wire Gauge Filter */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-3 h-[1px] bg-[#E31B23]" />
                  <span>Wire Gauge</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 font-mono">
                  <button
                    onClick={() => setSelectedGauge('All')}
                    className={`text-center py-1 px-2 rounded text-xs border ${
                      selectedGauge === 'All'
                        ? 'bg-[#E31B23] text-white border-[#E31B23] font-semibold'
                        : 'bg-[#161C24] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    All Gauges
                  </button>
                  {wireGauges.map((gauge) => {
                    const isSelected = selectedGauge === gauge;
                    return (
                      <button
                        key={gauge}
                        onClick={() => setSelectedGauge(gauge)}
                        className={`text-center py-1 px-2 rounded text-xs border transition-colors ${
                          isSelected
                            ? 'bg-[#E31B23] text-white border-[#E31B23] font-semibold'
                            : 'bg-[#161C24] text-slate-300 border-white/5 hover:border-white/20'
                        }`}
                      >
                        {gauge}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Application Filter */}
              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <span className="w-3 h-[1px] bg-[#E31B23]" />
                  <span>Application</span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedApplication('All')}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs flex items-center justify-between ${
                      selectedApplication === 'All'
                        ? 'bg-[#E31B23]/15 text-white font-semibold border-l-2 border-[#E31B23]'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>All Applications</span>
                    {selectedApplication === 'All' && <Check className="w-3 h-3 text-[#E31B23]" />}
                  </button>
                  {applications.map((app) => {
                    const isSelected = selectedApplication === app;
                    return (
                      <button
                        key={app}
                        onClick={() => setSelectedApplication(app)}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-xs flex items-center justify-between transition-colors ${
                          isSelected
                            ? 'bg-[#E31B23]/15 text-white font-semibold border-l-2 border-[#E31B23]'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="truncate">{app}</span>
                        {isSelected && <Check className="w-3 h-3 text-[#E31B23]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Product Grid */}
          <main className="lg:col-span-9 space-y-6">
            {/* Sort & Results Status Bar */}
            <div className="flex items-center justify-between text-xs text-slate-400 bg-[#11161C] border border-white/10 px-4 py-3 rounded-lg">
              <span className="font-mono">
                Showing <strong className="text-white">{filteredProducts.length}</strong> products
              </span>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#161C24] text-slate-200 border border-white/10 rounded px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23]"
                >
                  <option value="recommended">Featured / Recommended</option>
                  <option value="name-asc">Product Name (A-Z)</option>
                  <option value="name-desc">Product Name (Z-A)</option>
                </select>
              </div>
            </div>

            {/* Product Cards Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewDetails={(p) => setInspectingProduct(p)}
                    onRequestQuote={(p) => onSelectForQuote(p)}
                  />
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="bg-[#11161C] border border-white/10 rounded-xl p-12 text-center space-y-4">
                <p className="text-slate-300 font-medium text-base">
                  No electrical products found matching your current filter criteria.
                </p>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  Try clearing some filters or searching with a different keyword.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2 rounded transition-all cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={inspectingProduct}
        onClose={() => setInspectingProduct(null)}
        onSelectForQuote={(prod) => onSelectForQuote(prod)}
      />
    </section>
  );
};
