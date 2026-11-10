import React, { useState, useMemo } from 'react';
import { Search, Filter, RotateCcw, ChevronRight, SlidersHorizontal, Check } from 'lucide-react';
import { Product, ProductCategory, WireGauge, IndustryType } from '../types';
import { productsData } from '../data/products';
import { filterProducts } from '../utils/catalogue';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { useTheme } from '../context/ThemeContext';

interface ProductCatalogueProps {
  onSelectForQuote: (product: Product) => void;
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onSelectForQuote }) => {
  const { isDark } = useTheme();
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
    <section className={`pt-24 pb-20 transition-colors ${isDark ? 'bg-[#0A0D12] text-white' : 'bg-slate-50 text-slate-900'}`}>
      {/* Catalogue Sub-Hero Banner */}
      <div
        className={`relative border-b py-12 overflow-hidden transition-colors ${
          isDark
            ? 'border-white/10 bg-gradient-to-r from-[#0E131A] via-[#161C24] to-[#0E131A]'
            : 'border-slate-200 bg-gradient-to-r from-slate-100 via-white to-slate-100'
        }`}
      >
        <div className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-20 mix-blend-screen' : 'opacity-10 mix-blend-multiply'}`}>
          <img
            src="/assets/aistudio/Gemini_Generated_Image_rcka1grcka1grcka_bc522c5e.png"
            alt="Copper conductor coils"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-125"
          />
        </div>
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-r from-[#0A0D12] via-transparent to-[#0A0D12]'
              : 'bg-gradient-to-r from-slate-50 via-transparent to-slate-50'
          }`}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="w-5 h-[2px] bg-[#E31B23]" />
            <span
              className={`text-xs font-mono tracking-widest uppercase ${
                isDark ? 'text-slate-300' : 'text-slate-600 font-semibold'
              }`}
            >
              OUR PRODUCTS
            </span>
          </div>
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            High-Quality <span className="text-[#E31B23]">Plug Cords &amp; Wires</span>
          </h1>
          <p className={`text-base max-w-2xl font-normal ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Engineered for performance. Manufactured for industries that keep the world moving.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Breadcrumb */}
        <nav
          className={`flex items-center gap-1.5 text-xs mb-6 ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
          aria-label="Breadcrumb"
        >
          <span>Home</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Products</span>
        </nav>

        {/* Section Heading & Search Header */}
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Product Range
            </h2>
            <p className={`text-sm mt-1 max-w-2xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              From plug cords to PVC insulated wires and cables, we offer a comprehensive range of electrical solutions built for durability, safety and consistent performance.
            </p>
          </div>

          {/* Quick search input */}
          <div className="w-full md:w-80 relative">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-400' : 'text-slate-400'}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className={`w-full rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#E31B23] focus:border-[#E31B23] ${
                isDark
                  ? 'bg-[#161C24] border border-white/10 text-white placeholder-slate-400'
                  : 'bg-white border border-slate-300 text-slate-900 placeholder-slate-400 shadow-xs'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${
                  isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Mobile filter toggle bar */}
        <div
          className={`lg:hidden flex items-center justify-between py-4 border-b ${
            isDark ? 'border-white/10' : 'border-slate-200'
          }`}
        >
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-lg border ${
              isDark
                ? 'bg-[#161C24] border-white/10 text-slate-200'
                : 'bg-white border-slate-300 text-slate-800 shadow-xs'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#E31B23]" />
            <span>Filter Catalogue</span>
          </button>
          <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            {filteredProducts.length} items found
          </div>
        </div>

        {/* Main Content Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
          {/* Left Sidebar Filters */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div
              className={`rounded-xl p-5 space-y-6 border ${
                isDark
                  ? 'bg-[#11161C] border-white/10'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className={`flex items-center justify-between pb-3 border-b ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                <div className={`flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <Filter className="w-4 h-4 text-[#E31B23]" />
                  <span>Filters</span>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-[#E31B23] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>

              {/* Product Type Filter */}
              <div className="space-y-2.5">
                <div
                  className={`text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                  }`}
                >
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
                            ? isDark
                              ? 'bg-[#E31B23]/15 text-white font-semibold border-l-2 border-[#E31B23]'
                              : 'bg-red-50 text-[#E31B23] font-bold border-l-2 border-[#E31B23]'
                            : isDark
                            ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
              <div className={`space-y-2.5 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                <div
                  className={`text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                  }`}
                >
                  <span className="w-3 h-[1px] bg-[#E31B23]" />
                  <span>Wire Gauge</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5 font-mono">
                  <button
                    onClick={() => setSelectedGauge('All')}
                    className={`text-center py-1 px-2 rounded text-xs border cursor-pointer ${
                      selectedGauge === 'All'
                        ? 'bg-[#E31B23] text-white border-[#E31B23] font-semibold'
                        : isDark
                        ? 'bg-[#161C24] text-slate-300 border-white/5 hover:border-white/20'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
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
                        className={`text-center py-1 px-2 rounded text-xs border transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#E31B23] text-white border-[#E31B23] font-semibold'
                            : isDark
                            ? 'bg-[#161C24] text-slate-300 border-white/5 hover:border-white/20'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {gauge}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Application Filter */}
              <div className={`space-y-2.5 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
                <div
                  className={`text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 ${
                    isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                  }`}
                >
                  <span className="w-3 h-[1px] bg-[#E31B23]" />
                  <span>Application</span>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedApplication('All')}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs flex items-center justify-between cursor-pointer ${
                      selectedApplication === 'All'
                        ? isDark
                          ? 'bg-[#E31B23]/15 text-white font-semibold border-l-2 border-[#E31B23]'
                          : 'bg-red-50 text-[#E31B23] font-bold border-l-2 border-[#E31B23]'
                        : isDark
                        ? 'text-slate-300 hover:bg-white/5'
                        : 'text-slate-700 hover:bg-slate-50'
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
                        className={`w-full text-left px-2.5 py-1.5 rounded text-xs flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? isDark
                              ? 'bg-[#E31B23]/15 text-white font-semibold border-l-2 border-[#E31B23]'
                              : 'bg-red-50 text-[#E31B23] font-bold border-l-2 border-[#E31B23]'
                            : isDark
                            ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
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
            <div
              className={`flex items-center justify-between text-xs px-4 py-3 rounded-lg border ${
                isDark
                  ? 'text-slate-400 bg-[#11161C] border-white/10'
                  : 'text-slate-600 bg-white border-slate-200 shadow-xs'
              }`}
            >
              <span className="font-mono">
                Showing <strong className={isDark ? 'text-white' : 'text-slate-900'}>{filteredProducts.length}</strong> products
              </span>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className={`rounded px-2.5 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23] ${
                    isDark
                      ? 'bg-[#161C24] text-slate-200 border border-white/10'
                      : 'bg-slate-50 text-slate-800 border border-slate-300'
                  }`}
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
              <div
                className={`rounded-xl p-12 text-center space-y-4 border ${
                  isDark
                    ? 'bg-[#11161C] border-white/10'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <p className={`font-medium text-base ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  No electrical products found matching your current filter criteria.
                </p>
                <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Try clearing some filters or searching with a different keyword.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-4 py-2 rounded transition-all cursor-pointer shadow-sm"
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

