import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ShieldCheck, CheckCircle2, ZoomIn, ZoomOut, FileText, ChevronRight } from 'lucide-react';
import { Product } from '../types';

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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-[#11161C] border border-white/10 rounded-2xl max-w-4xl w-full text-white shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Breadcrumbs */}
        <div className="bg-[#161C24] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <nav className="flex items-center gap-1.5 text-xs text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            <span>Catalogue</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span>{product.category}</span>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-white font-medium">{product.name}</span>
          </nav>
          <button
            onClick={onClose}
            aria-label="Close product details"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
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
                className={`relative bg-[#0A0D12] rounded-xl border border-white/10 p-4 overflow-hidden flex items-center justify-center ${
                  isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                }`}
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
                  className="absolute bottom-3 right-3 bg-[#161C24]/90 hover:bg-[#252C34] text-slate-300 text-xs px-2.5 py-1 rounded flex items-center gap-1 border border-white/10"
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

              <div className="bg-[#161C24] p-3 rounded-lg border border-white/5 text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#E31B23]" />
                  <span>Physical Architecture</span>
                </div>
                <p>Authentic product geometry. Pin spacing and insulation thickness engineered to Indian Standards.</p>
              </div>
            </div>

            {/* Product Info & Specifications */}
            <div className="md:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#E31B23]">
                  {product.category}
                </span>
                <h2 id="product-modal-title" className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {product.name}
                </h2>
                {product.stampedMarkings && (
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-[#161C24] px-3 py-1 rounded border border-white/10">
                    <span className="text-[#E31B23] font-bold">MOLD MARKINGS:</span>
                    <span>{product.stampedMarkings}</span>
                  </div>
                )}
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {product.fullDesc}
                </p>
              </div>

              {/* Verified Standards Badges & Colors */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {product.standards.map((std) => (
                  <span
                    key={std}
                    className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{std}</span>
                  </span>
                ))}
                {product.colorOptions && product.colorOptions.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-mono text-slate-300 bg-[#161C24] border border-white/10 px-2 py-0.5 rounded"
                  >
                    Color: {c}
                  </span>
                ))}
                {product.isOemCustomizable && (
                  <span className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-1 rounded">
                    ★ OEM Customizable
                  </span>
                )}
              </div>

              {/* Dynamic Technical Specifications Table */}
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technical Specifications
                </h3>
                <div className="border border-white/10 rounded-lg overflow-hidden bg-[#0A0D12]">
                  <table className="w-full text-left text-xs">
                    <tbody className="divide-y divide-white/10">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <tr key={key} className="hover:bg-white/5 transition-colors">
                          <td className="py-2.5 px-3.5 font-medium text-slate-400 bg-[#161C24]/50 w-2/5">
                            {key}
                          </td>
                          <td className="py-2.5 px-3.5 font-mono text-slate-200">
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
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Verified Applications
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app) => (
                    <span
                      key={app}
                      className="text-xs text-slate-300 bg-[#161C24] px-2.5 py-1 rounded border border-white/5"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Wire Gauges Available */}
              {product.wireGauges.length > 0 && (
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Available Wire Gauges
                  </h3>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {product.wireGauges.map((gauge) => (
                      <span
                        key={gauge}
                        className="bg-[#1C2430] text-slate-200 px-2.5 py-1 rounded border border-white/10"
                      >
                        {gauge}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* OEM Details & Customization Note Space */}
              <div className="bg-[#161C24] p-3.5 rounded-lg border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
                    <span>OEM Customization &amp; Specification Space</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Tailored to drawing</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {product.pendingFieldsNote || 'Additional parameters such as specific wire strip lengths, terminal crimp lugs, tinning, private label embossing, and custom bundle pack counts can be tailored for OEM delivery.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-[#161C24] border-t border-white/10 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Have custom OEM specifications or volume inquiries?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-white/20 rounded transition-colors"
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
