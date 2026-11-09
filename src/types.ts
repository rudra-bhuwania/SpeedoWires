export type ProductCategory = 
  | 'All' 
  | 'Plug Cords' 
  | 'IEC & Appliance Cords' 
  | 'Twin Flat & Insulated Wires' 
  | 'PVC Cables' 
  | 'Custom Solutions';

export type WireGauge = '0.5 sq.mm' | '0.75 sq.mm' | '1.0 sq.mm' | '1.5 sq.mm' | '2.5 sq.mm' | '4.0 sq.mm' | '6.0 sq.mm';

export type IndustryType = 
  | 'Fans' 
  | 'Air Coolers' 
  | 'Electrical Appliances' 
  | 'Electronic Equipment' 
  | 'LED Products' 
  | 'Stabilizers & Adapters' 
  | 'Power Tools'
  | 'Others';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDesc: string;
  fullDesc: string;
  image: string;
  stampedMarkings?: string;
  wireGauges: WireGauge[];
  pinCount?: number | null;
  conductorMaterial: string;
  insulationMaterial: string;
  standards: string[];
  applications: IndustryType[];
  specifications: Record<string, string>;
  colorOptions?: string[];
  isOemCustomizable: boolean;
  status: 'verified' | 'to-be-confirmed';
  pendingFieldsNote?: string;
}

export interface ManufacturingStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyCapability: string;
  processDetails: string[];
  imagePlaceholderText?: string;
}

export interface QuoteFormData {
  name: string;
  companyName: string;
  emailOrPhone: string;
  productCategory: ProductCategory;
  selectedProductId?: string;
  estimatedQuantity?: string;
  requirementDescription: string;
  specifications?: string;
  targetTimeline?: string;
  additionalNotes?: string;
}

export interface QuoteValidationErrors {
  name?: string;
  companyName?: string;
  emailOrPhone?: string;
  productCategory?: string;
  requirementDescription?: string;
}

export interface CompanyInfo {
  brandName: string;
  legalEntityName: string;
  isLegalEntityVerified: boolean;
  experienceYears: number;
  installedAnnualCapacity: string;
  phone: string;
  isPhoneVerified: boolean;
  email: string;
  isEmailVerified: boolean;
  address: string;
  isAddressVerified: boolean;
  certifications: string[];
  standards: string[];
  leafLetReference: string;
}
