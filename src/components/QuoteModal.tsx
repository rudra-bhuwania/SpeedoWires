import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { QuoteFormData, QuoteValidationErrors, ProductCategory } from '../types';
import { validateQuoteForm } from '../utils/catalogue';
import { useTheme } from '../context/ThemeContext';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
  initialCategory?: ProductCategory;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
  initialCategory,
}) => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    emailOrPhone: '',
    productCategory: initialCategory || 'Plug Cords',
    selectedProductId: initialProduct || '',
    estimatedQuantity: '',
    requirementDescription: initialProduct
      ? `Inquiry for bulk supply of ${initialProduct}.`
      : '',
    specifications: '',
    targetTimeline: 'Immediate (1-3 weeks)',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<QuoteValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        selectedProductId: initialProduct,
        requirementDescription: `Inquiry for volume supply of ${initialProduct}.`,
      }));
    }
    if (initialCategory) {
      setFormData((prev) => ({
        ...prev,
        productCategory: initialCategory,
      }));
    }
  }, [initialProduct, initialCategory]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopySummary = () => {
    const summary = `Speedo Wires OEM Quotation Request
---------------------------------------
Client: ${formData.name} (${formData.companyName})
Contact: ${formData.emailOrPhone}
Category: ${formData.productCategory}
${formData.selectedProductId ? `Product: ${formData.selectedProductId}\n` : ''}Quantity: ${formData.estimatedQuantity || 'Flexible'}
Timeline: ${formData.targetTimeline}
Requirements: ${formData.requirementDescription}
---------------------------------------`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className={`relative border rounded-2xl max-w-xl w-full shadow-2xl overflow-hidden my-8 transition-colors ${
          isDark ? 'bg-[#11161C] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`border-b px-6 py-4 flex items-center justify-between ${
            isDark ? 'bg-[#161C24] border-white/10' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]" />
            <h2
              id="quote-modal-title"
              className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}
            >
              Request an OEM Quotation
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close quote modal"
            className={`p-1 rounded-lg transition-colors cursor-pointer ${
              isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="space-y-5 text-center py-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto border ${
                  isDark
                    ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400'
                    : 'bg-emerald-50 border-emerald-300 text-emerald-600'
                }`}
              >
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Quotation Request Logged
                </h3>
                <p className={`text-xs mt-1 max-w-md mx-auto ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  Thank you, <strong>{formData.name}</strong>. Your OEM specification request has been registered in our development workflow.
                </p>
              </div>

              <div
                className={`p-3.5 rounded-xl border text-left text-xs font-mono space-y-1 ${
                  isDark ? 'bg-[#161C24] border-white/10' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>Company: <span className={isDark ? 'text-white' : 'text-slate-900 font-semibold'}>{formData.companyName}</span></div>
                <div>Category: <span className={isDark ? 'text-white' : 'text-slate-900 font-semibold'}>{formData.productCategory}</span></div>
                {formData.selectedProductId && (
                  <div>Product: <span className={isDark ? 'text-white' : 'text-slate-900 font-semibold'}>{formData.selectedProductId}</span></div>
                )}
                <div>Contact: <span className={isDark ? 'text-white' : 'text-slate-900 font-semibold'}>{formData.emailOrPhone}</span></div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopySummary}
                  className={`text-xs px-4 py-2 rounded border flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-[#161C24] hover:bg-[#252C34] text-slate-200 border-white/10'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-[#E31B23]" />}
                  <span>{copiedSummary ? 'Copied' : 'Copy Summary'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-5 py-2 rounded transition-all cursor-pointer shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {formData.selectedProductId && (
                <div
                  className={`p-2.5 rounded-lg text-xs flex items-center justify-between border ${
                    isDark ? 'bg-[#161C24] border-[#E31B23]/40' : 'bg-red-50 border-red-200'
                  }`}
                >
                  <span>Selected Product: <strong className={isDark ? 'text-white' : 'text-slate-900'}>{formData.selectedProductId}</strong></span>
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, selectedProductId: '' }))}
                    className="text-[#E31B23] hover:underline font-semibold"
                  >
                    Clear
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label htmlFor="modal-name" className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Full Name <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23] ${
                      isDark
                        ? 'bg-[#161C24] text-white placeholder-slate-500 ' + (errors.name ? 'border-red-500' : 'border-white/10')
                        : 'bg-white text-slate-900 placeholder-slate-400 ' + (errors.name ? 'border-red-500' : 'border-slate-300')
                    }`}
                  />
                  {errors.name && <p className="text-[10px] text-red-500 font-medium">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-company" className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Company / OEM <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="modal-company"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23] ${
                      isDark
                        ? 'bg-[#161C24] text-white placeholder-slate-500 ' + (errors.companyName ? 'border-red-500' : 'border-white/10')
                        : 'bg-white text-slate-900 placeholder-slate-400 ' + (errors.companyName ? 'border-red-500' : 'border-slate-300')
                    }`}
                  />
                  {errors.companyName && <p className="text-[10px] text-red-500 font-medium">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label htmlFor="modal-contact" className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email or Phone <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="modal-contact"
                    name="emailOrPhone"
                    type="text"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    placeholder="email@company.com / +91..."
                    className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23] ${
                      isDark
                        ? 'bg-[#161C24] text-white placeholder-slate-500 ' + (errors.emailOrPhone ? 'border-red-500' : 'border-white/10')
                        : 'bg-white text-slate-900 placeholder-slate-400 ' + (errors.emailOrPhone ? 'border-red-500' : 'border-slate-300')
                    }`}
                  />
                  {errors.emailOrPhone && <p className="text-[10px] text-red-500 font-medium">{errors.emailOrPhone}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-cat" className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Category <span className="text-[#E31B23]">*</span>
                  </label>
                  <select
                    id="modal-cat"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className={`w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23] ${
                      isDark
                        ? 'bg-[#161C24] border-white/10 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Plug Cords">Molded Plug Cords (2-Pin / 3-Pin / Angled)</option>
                    <option value="IEC & Appliance Cords">IEC & Appliance Cords (C13 / C7 Figure-8)</option>
                    <option value="Twin Flat & Insulated Wires">Twin Flat & Insulated Wires (Red/White, Black/White)</option>
                    <option value="PVC Cables">PVC Cables (Round Sheathed)</option>
                    <option value="Custom Solutions">Custom OEM Solutions & Harnesses</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="modal-desc" className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Requirement Details <span className="text-[#E31B23]">*</span>
                </label>
                <textarea
                  id="modal-desc"
                  name="requirementDescription"
                  rows={3}
                  value={formData.requirementDescription}
                  onChange={handleChange}
                  placeholder="Detail lengths, quantities, pin plating, terminal ends..."
                  className={`w-full border rounded-lg p-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-[#E31B23] ${
                    isDark
                      ? 'bg-[#161C24] text-white placeholder-slate-500 ' + (errors.requirementDescription ? 'border-red-500' : 'border-white/10')
                      : 'bg-white text-slate-900 placeholder-slate-400 ' + (errors.requirementDescription ? 'border-red-500' : 'border-slate-300')
                  }`}
                />
                {errors.requirementDescription && (
                  <p className="text-[10px] text-red-500 font-medium">{errors.requirementDescription}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#E31B23] hover:bg-[#C6141B] disabled:bg-red-900/50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
