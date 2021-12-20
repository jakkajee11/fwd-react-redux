export type PaymentFrequencyCd =
  | 'YEARLY'
  | 'HALFYEARLY'
  | 'QUATERLY'
  | 'MONTHLY';
export type PlanCode = 'T11A20' | 'T11A50' | 'T11AM1';

export type Insurance = {
  genderCd?: 'MALE' | 'FEMALE';
  dob?: string;
  planCode?: PlanCode;
  premiumPerYear?: number;
  paymentFrequencyCd: PaymentFrequencyCd;
  saPerYear?: number;
};

export type Benefit = {
  sortOrder: number;
  benefitCd: string;
  benefitDesc: string;
  benefitValue: number;
  benefitSuffix: string;
};

export type BenefitTable = {};

export type DeathBenefit = Benefit & {};

export type SurvivalBenefit = Benefit & {};

export type DevidendBenefit = Benefit & {};

export type OtherBenefit = Benefit & {};

export type RatesList = {
  paymentFrequencyCd: PaymentFrequencyCd;
  modalPremium: number;
  annualizedModalPremium: number;
};

export type ProductList = {
  productId: string;
  productPlanTypeCd: string;
  productFamilyCd: string;
  baseSumAssured: number;
  baseAnnualPremium: number;
  productTerm: number;
  premiumPayingTerm: number;
  paymentFrequencyCd: PaymentFrequencyCd;
  planCode: PlanCode;
  selected: boolean;
};

export type InsuranceProduct = {
  deathBenefitList: DeathBenefit[];
  survivalBenefitList: SurvivalBenefit[];
  devidendBenefitList: DevidendBenefit[];
  otherBenefitList: OtherBenefit[];
  modalRatesList: RatesList[];
  quotationProductList: ProductList[];
};
