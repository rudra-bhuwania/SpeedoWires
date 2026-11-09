import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';
import { QuoteFormData, QuoteValidationErrors, ProductCategory } from '../types';
import { validateQuoteForm } from '../utils/catalogue';

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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className="relative bg-[#11161C] border border-white/10 rounded-2xl max-w-xl w-full text-white shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#161C24] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23]" />
            <h2 id="quote-modal-title" className="text-base sm:text-lg font-bold text-white">
              Request an OEM Quotation
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close quote modal"
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-12 h-12 bg-emerald-950/60 border border-emerald-500/40 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Quotation Request Logged</h3>
                <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your OEM specification request has been registered in our development workflow.
                </p>
              </div>

              <div className="bg-[#161C24] p-3.5 rounded-xl border border-white/10 text-left text-xs font-mono space-y-1">
                <div>Company: <span className="text-white">{formData.companyName}</span></div>
                <div>Category: <span className="text-white">{formData.productCategory}</span></div>
                {formData.selectedProductId && (
                  <div>Product: <span className="text-white">{formData.selectedProductId}</span></div>
                )}
                <div>Contact: <span className="text-white">{formData.emailOrPhone}</span></div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopySummary}
                  className="bg-[#161C24] hover:bg-[#252C34] text-slate-200 text-xs px-4 py-2 rounded border border-white/10 flex items-center gap-1.5 transition-colors"
                >
                  {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#E31B23]" />}
                  <span>{copiedSummary ? 'Copied' : 'Copy Summary'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#E31B23] hover:bg-[#C6141B] text-white text-xs font-semibold px-5 py-2 rounded transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {formData.selectedProductId && (
                <div className="bg-[#161C24] border border-[#E31B23]/40 p-2.5 rounded-lg text-xs flex items-center justify-between">
                  <span>Selected Product: <strong className="text-white">{formData.selectedProductId}</strong></span>
                  <button
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, selectedProductId: '' }))}
                    className="text-[#E31B23] hover:underline"
                  >
                    Clear
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label htmlFor="modal-name" className="text-xs font-medium text-slate-300">
                    Full Name <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full bg-[#161C24] border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E31B23]`}
                  />
                  {errors.name && <p className="text-[10px] text-red-400">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-company" className="text-xs font-medium text-slate-300">
                    Company / OEM <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="modal-company"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={`w-full bg-[#161C24] border ${
                      errors.companyName ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E31B23]`}
                  />
                  {errors.companyName && <p className="text-[10px] text-red-400">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label htmlFor="modal-contact" className="text-xs font-medium text-slate-300">
                    Email or Phone <span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="modal-contact"
                    name="emailOrPhone"
                    type="text"
                    value={formData.emailOrPhone}
                    onChange={handleChange}
                    placeholder="email@company.com / +91..."
                    className={`w-full bg-[#161C24] border ${
                      errors.emailOrPhone ? 'border-red-500' : 'border-white/10'
                    } rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E31B23]`}
                  />
                  {errors.emailOrPhone && <p className="text-[10px] text-red-400">{errors.emailOrPhone}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="modal-cat" className="text-xs font-medium text-slate-300">
                    Category <span className="text-[#E31B23]">*</span>
                  </label>
                  <select
                    id="modal-cat"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full bg-[#161C24] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#E31B23]"
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
                <label htmlFor="modal-desc" className="text-xs font-medium text-slate-300">
                  Requirement Details <span className="text-[#E31B23]">*</span>
                </label>
                <textarea
                  id="modal-desc"
                  name="requirementDescription"
                  rows={3}
                  value={formData.requirementDescription}
                  onChange={handleChange}
                  placeholder="Detail lengths, quantities, pin plating, terminal ends..."
                  className={`w-full bg-[#161C24] border ${
                    errors.requirementDescription ? 'border-red-500' : 'border-white/10'
                  } rounded-lg p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#E31B23]`}
                />
                {errors.requirementDescription && (
                  <p className="text-[10px] text-red-400">{errors.requirementDescription}</p>
                )}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#E31B23] hover:bg-[#C6141B] disabled:bg-red-900/50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
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
