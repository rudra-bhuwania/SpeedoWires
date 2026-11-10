import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, ZoomIn, ZoomOut, FileText, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectForQuote: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectForQuote,
}) => {
  const { isDark } = useTheme();
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className={`relative rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden my-8 border transition-all ${
          isDark
            ? 'bg-[#11161C] border-white/10 text-white'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Breadcrumbs */}
        <div
          className={`border-b px-6 py-4 flex items-center justify-between ${
            isDark ? 'bg-[#161C24] border-white/10' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <nav className="flex items-center gap-1.5 text-xs text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap">
            <span>Catalogue</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span>{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              {product.name}
            </span>
          </nav>
          <button
            onClick={onClose}
            aria-label="Close product details"
            className={`p-1 rounded-lg transition-colors cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Product Image Frame with Zoom capability */}
            <div className="md:col-span-5 space-y-3">
              <div
                className={`relative rounded-xl border p-4 overflow-hidden flex items-center justify-center ${
                  isDark ? 'bg-[#0A0D12] border-white/10' : 'bg-slate-50 border-slate-200'
                } ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full max-h-72 object-contain transition-transform duration-300 ${
                    isZoomed ? 'scale-150' : 'scale-100 hover:scale-105'
                  }`}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                  className={`absolute bottom-3 right-3 text-xs px-2.5 py-1 rounded flex items-center gap-1 border ${
                    isDark
                      ? 'bg-[#161C24]/90 hover:bg-[#252C34] text-slate-300 border-white/10'
                      : 'bg-white/95 hover:bg-slate-100 text-slate-700 border-slate-300 shadow-xs'
                  }`}
                >
                  {isZoomed ? (
                    <>
                      <ZoomOut className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </>
                  )}
                </button>
              </div>

              <div
                className={`p-3 rounded-lg border text-xs space-y-1 ${
                  isDark ? 'bg-[#161C24] border-white/5 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
                }`}
              >
                <div className={`flex items-center gap-1.5 font-medium ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                  <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                  <span>Physical Architecture</span>
                </div>
                <p>Authentic product geometry. Pin spacing and insulation thickness engineered to Indian Standards.</p>
              </div>
            </div>

            {/* Product Info & Specifications */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E31B23] font-semibold">
                  {product.category}
                </span>
                <h2
                  id="product-modal-title"
                  className={`text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-900'}`}
                >
                  {product.name}
                </h2>
                {product.stampedMarkings && (
                  <div
                    className={`mt-2 inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded border ${
                      isDark
                        ? 'text-slate-300 bg-[#161C24] border-white/10'
                        : 'text-slate-700 bg-slate-100 border-slate-200'
                    }`}
                  >
                    <span className="text-[#E31B23] font-bold">MOLD MARKINGS:</span>
                    <span>{product.stampedMarkings}</span>
                  </div>
                )}
                <p className={`text-sm mt-2.5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {product.fullDesc}
                </p>
              </div>

              {/* Verified Standards Badges & Colors */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {product.standards.map((std) => (
                  <span
                    key={std}
                    className={`text-xs font-mono px-2.5 py-1 rounded flex items-center gap-1.5 border ${
                      isDark
                        ? 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40'
                        : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{std}</span>
                  </span>
                ))}
                {product.colorOptions && product.colorOptions.map((c) => (
                  <span
                    key={c}
                    className={`text-xs font-mono px-2 py-0.5 rounded border ${
                      isDark
                        ? 'text-slate-300 bg-[#161C24] border-white/10'
                        : 'text-slate-700 bg-slate-100 border-slate-200'
                    }`}
                  >
                    Color: {c}
                  </span>
                ))}
                {product.isOemCustomizable && (
                  <span
                    className={`text-xs font-mono px-2.5 py-1 rounded border ${
                      isDark
                        ? 'text-amber-400 bg-amber-950/40 border-amber-800/40'
                        : 'text-amber-800 bg-amber-50 border-amber-200'
                    }`}
                  >
                    ★ OEM Customizable
                  </span>
                )}
              </div>

              {/* Dynamic Technical Specifications Table */}
              <div>
                <h3 className={`text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Technical Specifications
                </h3>
                <div
                  className={`border rounded-lg overflow-hidden ${
                    isDark ? 'border-white/10 bg-[#0A0D12]' : 'border-slate-200 bg-white'
                  }`}
                >
                  <table className="w-full text-left text-xs">
                    <tbody className={`divide-y ${isDark ? 'divide-white/10' : 'divide-slate-200'}`}>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr
                          key={key}
                          className={`transition-colors ${isDark ? 'hover:bg-white/5' : 'hover:bg-slate-50'}`}
                        >
                          <td
                            className={`py-2.5 px-3.5 font-medium w-2/5 ${
                              isDark ? 'text-slate-400 bg-[#161C24]/50' : 'text-slate-600 bg-slate-50'
                            }`}
                          >
                            {key}
                          </td>
                          <td
                            className={`py-2.5 px-3.5 font-mono ${
                              isDark ? 'text-slate-200' : 'text-slate-900 font-medium'
                            }`}
                          >
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Supported Applications */}
              <div>
                <h3 className={`text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                  Verified Applications
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className={`text-xs px-2.5 py-1 rounded border ${
                        isDark
                          ? 'text-slate-300 bg-[#161C24] border-white/5'
                          : 'text-slate-700 bg-slate-100 border-slate-200'
                      }`}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Wire Gauges Available */}
              {product.wireGauges.length > 0 && (
                <div>
                  <h3 className={`text-xs font-mono uppercase tracking-wider mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'}`}>
                    Available Wire Gauges
                  </h3>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {product.wireGauges.map((gauge) => (
                      <span
                        key={gauge}
                        className={`px-2.5 py-1 rounded border ${
                          isDark
                            ? 'bg-[#1C2430] text-slate-200 border-white/10'
                            : 'bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        {gauge}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* OEM Details & Customization Note Space */}
              <div
                className={`p-3.5 rounded-lg border space-y-2 ${
                  isDark ? 'bg-[#161C24] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-1.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-800'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                    <span>OEM Customization &amp; Specification Space</span>
                  </span>
                  <span className={`text-[10px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Tailored to drawing
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {product.pendingFieldsNote || 'Additional parameters such as specific wire strip lengths, terminal crimp lugs, tinning, private label embossing, and custom bundle pack counts can be tailored for OEM delivery.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div
          className={`border-t px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'bg-[#161C24] border-white/10' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className={`text-xs text-center sm:text-left ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Have custom OEM specifications or volume inquiries?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className={`w-full sm:w-auto px-4 py-2 text-xs font-medium border rounded transition-colors cursor-pointer ${
                isDark
                  ? 'text-slate-300 hover:text-white border-white/10 hover:border-white/20'
                  : 'text-slate-700 hover:text-slate-900 border-slate-300 hover:bg-slate-100 bg-white shadow-xs'
              }`}
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForQuote(product);
              }}
              className="w-full sm:w-auto bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-5 py-2.5 rounded shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>Contact Us for {product.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

