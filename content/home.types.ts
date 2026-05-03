export type SpecialService = {
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

export type WhyDetailItem = {
  title: string;
  description: string;
};

export type ReviewItem = {
  quote: string;
  author: string;
  source: string;
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
  whyTitle: string;
  whyIntro: string;
  whyDetails: WhyDetailItem[];
  processTitle: string;
  processItems: ProcessItem[];
  socialProofTitle: string;
  socialProofItems: ReviewItem[];
  aboutTitle: string;
  aboutParagraphs: string[];
  aboutHighlights: string[];
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
