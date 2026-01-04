export interface NavItem {
  label: string;
  href: string;
}

export interface PackageFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  badge?: string;
  description: string;
  price: string;
  subPrice?: string;
  features: string[];
  cta: string;
  ctaLink: string;
  primary?: boolean;
  disclaimer: string;
}

export interface SeminarItem {
  tag: string;
  title: string;
  description: string;
  points: string[];
}

export interface CurriculumItem {
  title: string;
  points: string[];
}
