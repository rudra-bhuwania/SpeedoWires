import React from 'react';
import { ArrowRight, Eye, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

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
  return (
    <div className="group relative bg-[#11161C] border border-white/10 hover:border-white/20 rounded-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40">
      {/* Top Image Container */}
      <div className="relative aspect-[16/11] bg-[#0A0D12] overflow-hidden p-4 flex items-center justify-center border-b border-white/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain filter contrast-105 transition-transform duration-500 group-hover:scale-106"
          loading="lazy"
        />

        {/* Category tag */}
        <div className="absolute top-3 left-3 bg-[#161C24]/90 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-slate-300">
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
            <h3 className="text-lg font-bold text-white group-hover:text-[#E31B23] transition-colors">
              {product.name}
            </h3>
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Specifications snippet */}
        <div className="pt-2 border-t border-white/5 space-y-1.5">
          {product.stampedMarkings && (
            <div className="text-[10px] font-mono text-[#E31B23] bg-[#E31B23]/10 px-2 py-0.5 rounded truncate">
              {product.stampedMarkings}
            </div>
          )}
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Standard:</span>
            <span className="text-slate-200">{product.standards[0] || 'IS Standard'}</span>
          </div>
          {product.wireGauges.length > 0 && (
            <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Gauges:</span>
              <span className="text-slate-200 truncate max-w-[140px]">
                {product.wireGauges.slice(0, 3).join(', ')}
                {product.wireGauges.length > 3 ? '...' : ''}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E31B23]" />
          </button>

          <button
            onClick={() => onRequestQuote(product)}
            className="bg-[#1C2430] hover:bg-[#E31B23] text-white text-xs font-semibold px-3 py-1.5 rounded transition-all cursor-pointer"
            title="Enquire about this product"
          >
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
};
