import { Product, ProductCategory, WireGauge, IndustryType, QuoteFormData, QuoteValidationErrors } from '../types';

export function filterProducts(
  products: Product[],
  options: {
    query?: string;
    category?: ProductCategory;
    wireGauge?: WireGauge | 'All';
    application?: IndustryType | 'All';
    sortBy?: 'recommended' | 'name-asc' | 'name-desc';
  }
): Product[] {
  const { query = '', category = 'All', wireGauge = 'All', application = 'All', sortBy = 'recommended' } = options;
  const normalizedQuery = query.trim().toLowerCase();

  const filtered = products.filter((product) => {
    // Category match
    if (category !== 'All' && product.category !== category) {
      return false;
    }

    // Wire gauge match
    if (wireGauge !== 'All' && !product.wireGauges.includes(wireGauge as WireGauge)) {
      return false;
    }

    // Application match
    if (application !== 'All' && !product.applications.includes(application as IndustryType)) {
      return false;
    }

    // Query match
    if (normalizedQuery) {
      const matchName = product.name.toLowerCase().includes(normalizedQuery);
      const matchDesc = product.shortDesc.toLowerCase().includes(normalizedQuery) || product.fullDesc.toLowerCase().includes(normalizedQuery);
      const matchCategory = product.category.toLowerCase().includes(normalizedQuery);
      const matchStandards = product.standards.some((s) => s.toLowerCase().includes(normalizedQuery));
      const matchApplications = product.applications.some((app) => app.toLowerCase().includes(normalizedQuery));
      if (!matchName && !matchDesc && !matchCategory && !matchStandards && !matchApplications) {
        return false;
      }
    }

    return true;
  });

  if (sortBy === 'name-asc') {
    return filtered.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'name-desc') {
    return filtered.slice().sort((a, b) => b.name.localeCompare(a.name));
  }
  return filtered;
}

export function validateQuoteForm(data: QuoteFormData): { isValid: boolean; errors: QuoteValidationErrors } {
  const errors: QuoteValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Full name is required (minimum 2 characters)';
  }

  if (!data.companyName || data.companyName.trim().length < 2) {
    errors.companyName = 'Company / Business name is required';
  }

  if (!data.emailOrPhone || data.emailOrPhone.trim().length < 5) {
    errors.emailOrPhone = 'A valid business email address or phone number is required';
  } else {
    const val = data.emailOrPhone.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isPhone = /^[+]?[\d\s-]{7,16}$/.test(val);
    if (!isEmail && !isPhone) {
      errors.emailOrPhone = 'Please provide a valid email format (e.g. name@company.com) or phone number';
    }
  }

  if (!data.productCategory) {
    errors.productCategory = 'Please select a product category';
  }

  if (!data.requirementDescription || data.requirementDescription.trim().length < 10) {
    errors.requirementDescription = 'Please briefly outline your requirements (minimum 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function getProductsForIndustry(products: Product[], industry: IndustryType): Product[] {
  return products.filter((p) => p.applications.includes(industry));
}
