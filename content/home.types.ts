export type SpecialService = {
  title: string;
  description: string;
};

export type ComplexityItem = {
  title: string;
  description: string;
};

export type ProcessItem = {
  step: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type HomeContent = {
  heroTitle: string;
  heroText: string;
  heroSubtext: string;
  heroButton: string;
  heroSecondaryButton: string;
  heroResponseLine: string;
  heroBadge: string;
  officeShowcaseTitle: string;
  officeShowcaseText: string;
  officeShowcaseSubtext: string;
  officeShowcaseMeta: string;
  servicesTitle: string;
  services: string[];
  specialServicesTitle: string;
  specialServices: SpecialService[];
  supportLanguagesLine: string;
  trustItems: string[];
  whyTitle: string;
  whyItems: string[];
  complexityTitle: string;
  complexityItems: ComplexityItem[];
  processTitle: string;
  processItems: ProcessItem[];
  socialProofTitle: string;
  socialProofRating: string;
  socialProofItems: string[];
  socialProofNote: string;
  socialProofGoogleLabel: string;
  socialProofGoogleUrl: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutHighlights: string[];
  securityTitle: string;
  securityText: string;
  securityItems: string[];
  latestArticlesTitle: string;
  anafLinkLabel: string;
  anafLinkUrl: string;
  anafLinkSecondaryLabel: string;
  anafLinkSecondaryUrl: string;
  anafLinkThirdLabel: string;
  anafLinkThirdUrl: string;
  anafLinkFourthLabel: string;
  anafLinkFourthUrl: string;
  faqTitle: string;
  faqs: FaqItem[];
  contactTitle: string;
  contactEmail: string;
  contactPhone: string;
  contactPhoneSecondary: string;
  contactCity: string;
  whatsappNumber: string;
  contactPromise: string;
  contactFormButton: string;
  pricingNote: string;
  locationTitle: string;
  locationText: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  seoServiceLinksTitle: string;
  internshipTitle: string;
  internshipIntro: string;
  internshipHighlights: string[];
  internshipButton: string;
};
