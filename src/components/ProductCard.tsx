import React from 'react';
import { ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
  onRequestQuote,
}) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`group relative rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between border ${
        isDark
          ? 'bg-[#11161C] border-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-black/40'
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg'
      }`}
    >
      {/* Top Image Container */}
      <div
        className={`relative aspect-[16/11] overflow-hidden p-4 flex items-center justify-center border-b ${
          isDark ? 'bg-[#0A0D12] border-white/5' : 'bg-slate-50/80 border-slate-100'
        }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter contrast-105 transition-transform duration-500 group-hover:scale-106"
          loading="lazy"
        />

        {/* Category tag */}
        <div
          className={`absolute top-3 left-3 border px-2 py-0.5 rounded text-[11px] font-mono ${
            isDark
              ? 'bg-[#161C24]/90 backdrop-blur-sm border-white/10 text-slate-300'
              : 'bg-white/95 backdrop-blur-sm border-slate-200 text-slate-700 shadow-xs'
          }`}
        >
          {product.category}
        </div>

        {/* Hover quick inspect overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-3">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-[#161C24] hover:bg-[#252C34] text-white text-xs font-medium px-3 py-1.5 rounded-md border border-white/20 flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect</span>
          </button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={`text-lg font-bold group-hover:text-[#E31B23] transition-colors ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              {product.name}
            </h3>
          </div>
          <p className={`text-xs line-clamp-2 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {product.shortDesc}
          </p>
        </div>

        {/* Specifications snippet */}
        <div className={`pt-2 border-t space-y-1.5 ${isDark ? 'border-white/5' : 'border-slate-100'}`}>
          {product.stampedMarkings && (
            <div
              className={`text-[10px] font-mono px-2 py-0.5 rounded truncate ${
                isDark
                  ? 'text-[#E31B23] bg-[#E31B23]/10'
                  : 'text-[#E31B23] bg-red-50 border border-red-100'
              }`}
            >
              {product.stampedMarkings}
            </div>
          )}
          <div
            className={`flex items-center justify-between text-[11px] font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            <span>Standard:</span>
            <span className={isDark ? 'text-slate-200' : 'text-slate-800 font-medium'}>
              {product.standards[0] || 'IS Standard'}
            </span>
          </div>
          {product.wireGauges.length > 0 && (
            <div
              className={`flex items-center justify-between text-[11px] font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              <span>Gauges:</span>
              <span className={`truncate max-w-[140px] ${isDark ? 'text-slate-200' : 'text-slate-800 font-medium'}`}>
                {product.wireGauges.slice(0, 3).join(', ')}
                {product.wireGauges.length > 3 ? '...' : ''}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className={`pt-3 border-t flex items-center justify-between gap-2 ${isDark ? 'border-white/10' : 'border-slate-100'}`}>
          <button
            onClick={() => onViewDetails(product)}
            className={`text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer ${
              isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E31B23]" />
          </button>

          <button
            onClick={() => onRequestQuote(product)}
            className={`text-xs font-semibold px-3 py-1.5 rounded transition-all cursor-pointer ${
              isDark
                ? 'bg-[#1C2430] hover:bg-[#E31B23] text-white'
                : 'bg-slate-100 hover:bg-[#E31B23] text-slate-800 hover:text-white border border-slate-200'
            }`}
            title="Enquire about this product"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};

