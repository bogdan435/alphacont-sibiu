import type {
  HomeContent,
  ProcessItem,
  ReviewItem,
  SpecialService,
  WhyDetailItem,
} from "./home.types";

const specialServices: SpecialService[] = [
  {
    title: "Support during ANAF and Antifraud inspections",
    description:
      "We provide support during ongoing tax inspections, including situations where the accounting records were previously prepared by a third party.",
  },
  {
    title: "Accounting reconstruction and reorganization",
    description:
      "We take over businesses with unclear, unfinished, or incorrectly prepared accounting records and reorganize the documents and accounting workflow.",
  },
  {
    title: "Takeover of companies with incomplete records",
    description:
      "We review the existing situation and establish the steps required to bring the accounting records back into a correct and predictable state.",
  },
  {
    title: "Clarifying assets, liabilities, and tax obligations",
    description:
      "We help clarify the company’s assets, liabilities, and tax obligations for safer decisions and a clearer financial picture.",
  },
  {
    title: "Support for e-Factura, e-Transport, ITM, and REVISAL / REGES",
    description:
      "We help you handle ongoing administrative and tax obligations with clear organization and easy-to-follow steps.",
  },
  {
    title: "Tailored solutions based on your activity",
    description:
      "We adapt our services to the specifics of your business, its current stage, and the complexity of the situation.",
  },
];

const processItems: ProcessItem[] = [
  {
    step: "01",
    title: "We understand the context",
    description:
      "You send us a few details about your business and current situation so we can clearly understand what you need.",
  },
  {
    step: "02",
    title: "We propose the solution",
    description:
      "We review the context and propose a clear solution adapted to your needs and the level of complexity of your business.",
  },
  {
    step: "03",
    title: "We take over in an organized way",
    description:
      "We agree on the working steps and take over the documents, online or physically, in a simple and predictable way.",
  },
  {
    step: "04",
    title: "We work with clarity",
    description:
      "You get consistent communication, better organization, and better visibility over obligations and key deadlines.",
  },
];

const whyDetails: WhyDetailItem[] = [
  {
    title: "One partner for everything",
    description:
      "From setting up the company to day-to-day accounting, payroll, HR, tax advisory, and ANAF representation, everything goes through a single point of contact with a dedicated team. And when the client’s activity requires complementary services such as legal, IT, or translations, we coordinate them through trusted partners. One single interlocutor for everything your company needs.",
  },
  {
    title: "Experience and accountability",
    description:
      "More than 20 years in accounting and taxation. We assume our mistakes contractually and cover them financially, which is a clear guarantee of the services we provide.",
  },
  {
    title: "Proactive tax optimization",
    description:
      "We do not wait for you to ask. We advise you actively so that you pay only what you owe to the state, not one euro more.",
  },
  {
    title: "Deadlines respected, zero fines, zero issues.",
    description:
      "No client has received a fine because of a declaration filed late due to our work. We meet ANAF deadlines and tell you in advance what comes next.",
  },
  {
    title: "Direct representation",
    description:
      "We interact with the tax administration on your behalf, represent you during ANAF and Antifraud inspections, and manage official communication with local authorities.",
  },
  {
    title: "Communication in multiple languages",
    description:
      "We work in Romanian, English, French, and Italian, which is useful for international entrepreneurs based in Sibiu or for companies with foreign partners.",
  },
  {
    title: "Fully digital workflow",
    description:
      "We know most accounting software tools and have strong digital skills, so documents move quickly, in an organized way, and securely.",
  },
  {
    title: "We explain things clearly",
    description:
      "Accounting should not feel unnecessarily complicated. We explain your situation in plain language so you can understand your company better and make informed decisions.",
  },
  {
    title: "Guaranteed data security",
    description:
      "Your documents and data are protected through automated backups twice a day, using the 3+2+1 method: 3 backup copies, 2 storage types, and 1 external offsite copy. Confidentiality and organization are standards, not options.",
  },
];

const socialProofItems: ReviewItem[] = [
  {
    quote:
      "L-am întâlnit pe dl. contabil Bogdan într-o perioadă dificilă pentru firmă. A gestionat situația cu profesionalism și a soluționat eficient problema. Îl recomand cu încredere tuturor celor care caută un specialist serios și dedicat.",
    author: "A.M.",
    source: "Google Review",
  },
  {
    quote:
      "We are very satisfied with the professional knowledge of the team and their overall approach. Especially for foreigners having a business in Romania, this is the kind of firm you want to have on your side.",
    author: "International client",
    source: "Google Review",
  },
  {
    quote:
      "Am început în 2019 ca administrator de SRL și am ales ALPHA CONT la recomandarea unui partener. Nu cred că puteam lua o decizie mai bună. Știe meserie! Recomand cu toată încrederea noilor antreprenori, dar și celor cu experiență.",
    author: "LLC owner, IT",
    source: "Google Review",
  },
  {
    quote:
      "În sfârșit am găsit un contabil care are viziune și este implicat în ceea ce face. Mă bucur că există în Sibiu oameni care chiar știu să-și facă treaba cu profesionalism și să te reprezinte în controale.",
    author: "Entrepreneur in Sibiu",
    source: "Google Review",
  },
  {
    quote:
      "È stato davvero molto professionale, mi ha spiegato il regime fiscale rumeno e consigliato nel modo migliore. Ogni anno prepara la mia dichiarazione con precisione e puntualità. Consiglio a chiunque.",
    author: "Italian client",
    source: "Google Review",
  },
];

export const homeContent: HomeContent = {
  heroTitle:
    "English-speaking accountant in Sibiu for companies, freelancers, and foreign-owned businesses",
  heroText:
    "Accounting, payroll, tax advisory, and company setup in Romania — explained clearly and handled properly.",
  heroSubtext:
    "ALPHACONT helps LLCs, sole traders, NGOs, expats, and foreign entrepreneurs stay compliant, organized, and in control of their business finances.",
  heroButton: "Talk to an Accountant",
  heroSecondaryButton: "Chat on WhatsApp",
  heroResponseLine: "We usually reply within the same working day.",
  heroBadge: "English-speaking accounting office in Sibiu",
  officeShowcaseTitle:
    "Accounting services in Sibiu with clear communication in English",
  officeShowcaseText:
    "We work with local and foreign entrepreneurs who need reliable accounting, tax clarity, payroll support, and help dealing with Romanian authorities.",
  officeShowcaseSubtext:
    "From monthly bookkeeping to ANAF inspections, company setup, payroll, and accounting reconstruction, we keep the process organized and easy to understand.",
  officeShowcaseMeta:
    "Sibiu · Romania · LLC, PFA, NGO · English support",

  servicesTitle: "Accounting services for",
  services: [
    "Foreign-owned companies in Romania",
    "LLCs and small businesses in Sibiu",
    "Sole traders, freelancers, and independent professionals",
    "Expats starting a business in Romania",
    "NGOs and associations",
    "Companies that need accounting cleanup or reorganization",
  ],

  specialServicesTitle: "Accounting and tax services in English",
  specialServices,
  supportLanguagesLine: "We communicate in Romanian, English, French, and Italian.",

  whyTitle: "Why clients choose ALPHACONT",
  whyIntro:
    "We have been working with businesses in Sibiu for more than 20 years. During that time, we have handled both simple and complex situations, represented clients in front of ANAF and Antifraud, and kept one clear standard: no client leaves with a fine because of us.",
  whyDetails,

  processTitle: "How we start working together",
  processItems,

  socialProofTitle: "What public reviews say",
  socialProofItems,

  aboutTitle: "About ALPHACONT",
  aboutParagraphs: [
    "ALPHACONT is an accounting office in Sibiu, Romania, providing accounting, payroll, tax advisory, and business setup support for local and foreign entrepreneurs.",
    "We work with clients who need more than basic bookkeeping: clear explanations, organized documents, predictable deadlines, and support when decisions or inspections become complex.",
    "We support LLCs, sole traders, NGOs, newly established businesses, expats, and foreign-owned companies that want to understand and manage their Romanian tax obligations correctly.",
  ],
  aboutHighlights: [
    "Accounting office in Sibiu, Romania",
    "English-speaking accounting and tax support",
    "Direct communication by email, phone, and WhatsApp",
    "Support for LLCs, sole traders, NGOs, and new businesses",
  ],
  latestArticlesTitle: "ANAF updates",
  anafLinkLabel: "ANAF fiscal obligations calendar",
  anafLinkUrl:
    "https://www.anaf.ro/anaf/internet/ANAF/asistenta_contribuabili/info_obligatii_fiscale/calendar_obligatii_fiscale/!ut/p/a1/pZFLC4JAEMc_Swev7pgPpJt50Cxo7YG6l1jBF_hitfz6rdKhqFaiuc3w-w3DfxBBISI1vRUZ7YumpuXYE-PiKq7hLs2lB64P4OvrzUF3MABWORBxAL6UBULf0R6-AHjx93gLYGi2d9R3tgKgz_gn9T8fjB_9d2AmvwARITJeMAGiiIUbeAYeIlnZxNM_I6uOVTNDhCVpwhImXxkf533fdisJJBiGQaY1TWXWSPCJz5uuR-EThtrqzCuEAleB2VmLO2102nc!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",
  anafLinkSecondaryLabel: "ANAF questions and answers",
  anafLinkSecondaryUrl:
    "https://www.anaf.ro/anaf/internet/ANAF/asistenta_contribuabili/servicii_oferite_contribuabililor/intrebari_raspunsuri_facebook/!ut/p/a1/pZJdb4IwFIZ_ixfccl6pJbg7JJvITIa6ReyNqQkihoGpTP7-qMmSTV2J8dy1eZ6er5KghEQpT3km67wqZaHPwl2H_dANHc-JMGceZnz08jwaLoBg0AKrFsA_4ePCD2fQ_mTOxzEw_vENwB__LX4F3EEQLfg06AO8w39nj_lwjfXH7NK_TnCffw10zH9JwphCd3AGTCsyvqBnaO7C6QCGjCISWVFtzj9q5Zcb5mUkVLpNVarsL9Ve7-r6cHyyYKFpGluWcmurysItflcda0p-YXT4_NCRIJ_seXGa-n6v9w18-Lw-/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",
  anafLinkThirdLabel: "General Directorate for Fiscal Antifraud",
  anafLinkThirdUrl:
    "https://www.antifrauda.ro/anaf/internet/Antifrauda/acasa_antifrauda/!ut/p/a1/hc6xDoIwEAbgZ2Hoyp1FG3QjRiHoLnQxYGrBlJaUSl9fNC4mirf9l-_PHXAogOtqbGXlWqMr9cycnbNFxjIa0zzd4xrZLjpQukXEdDmBcgL4YxL81z8BnyXI3mDmRA5cKlO_3i0TXUexBG7FVVhhw7ud1o1z_bAhSNB7H0pjpBLhxXQEv1UaMzgoPiX0XYG3lRqPSRA8ADGnF9M!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",
  anafLinkFourthLabel: "ANAF online user registration",
  anafLinkFourthUrl:
    "https://www.anaf.ro/anaf/internet/ANAF/servicii_online/inregistrare_utilizatori/!ut/p/a1/pZNfb4IwFMU_iw-80gMFBntDnCBbIuKM2BeDCSKJggE2vv6K2RKRWWK8T_3zOz3tvbeEkYiwPP7O0rjOijw-tnNmbD3FMzzVVH3XtgADCCeTKR9B4cCGA7gTNrp6eAtgoY9noe4GgKv96gVARz8P3rm_5vhL_cNRAH1A_0mf08O4uX9IzXZ7-ja2lsDq5VbfNxC9P6AD_gEV-jv9_HWBufaovutv0Qff3zd4Ss-Bgf5bEyZMcVvBCyBqUeEJbQ-Jq6gOAFb_hF6ZfMLSY7G7fLmNne-omRJWJvukTEr5q-TLh7o-V68SJDRNI8d5vJfLQsJ__KGoahJdYeR8Wv1FhGyWBae1Wdmj0Q8_cdcm/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",

  faqTitle: "English accounting services in Sibiu — FAQ",
  faqs: [
    {
      question: "Do you provide accounting services in English?",
      answer:
        "Yes. We provide accounting, payroll, tax advisory, and company setup support in English for foreign entrepreneurs, expats, and foreign-owned companies in Romania.",
    },
    {
      question: "Can you help me open a company in Romania?",
      answer:
        "Yes. We can guide you through SRL or PFA setup, explain the required documents, and help you organize the accounting workflow from the beginning.",
    },
    {
      question: "Do you work with foreign-owned companies?",
      answer:
        "Yes. We work with foreign-owned companies that need accounting, payroll, tax compliance, and clear communication in English.",
    },
    {
      question: "Can you take over messy or incomplete accounting records?",
      answer:
        "Yes. We review the existing situation, identify missing or incorrect records, and define the steps needed to reorganize the accounting properly.",
    },
    {
      question: "Do you provide support during ANAF inspections?",
      answer:
        "Yes. We provide support during ongoing ANAF inspections and help organize the documents, clarify the accounting situation, and communicate the next steps.",
    },
    {
      question: "How can I send accounting documents?",
      answer:
        "Documents can be sent digitally or physically, based on an agreed workflow, so accounting records and tax reports remain clear and up to date.",
    },
  ],

  contactTitle: "Contact an English-speaking accountant in Sibiu",
  contactEmail: "contact@alphacont.ro",
  contactPhone: "0040721644296",
  contactPhoneSecondary: "00393347412487",
  contactCity: "55 Octavian Goga Street, 550370 Sibiu, Sibiu County, Romania",
  whatsappNumber: "40721644296",
  contactPromise: "We usually reply within the same working day.",
  contactFormButton: "Send your request",
  pricingNote:
    "Accounting services start from RON 300 / month. The final price depends on document volume, business activity, payroll, and service complexity.",
  locationTitle: "Accounting office in Sibiu, Romania",
  locationText:
    "Our office is located in Sibiu, at 55 Octavian Goga Street. You can contact us online, by phone, on WhatsApp, or visit us by appointment.",
  mapsUrl:
    "https://maps.app.goo.gl/rombVxLCvRkwJYtq9",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5!2d24.1404678!3d45.7782333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c5d7b3eafca37%3A0xcfedcadf0ae233cc!2sStr.%20Octavian%20Goga%2055%2C%20Sibiu!5e0!3m2!1sro!2sro!4v1234567890",
  seoServiceLinksTitle: "Popular accounting services in Sibiu",

  internshipTitle: "Internship",
  internshipIntro:
    "We are happy to hear from young people who want to learn, pay attention to detail, and gain practical experience in a field where rigor, organization, and clarity matter.",
  internshipHighlights: [
    "Suitable for students, graduates, and young people at the beginning of their journey",
    "Exposure to real accounting, organization, and administrative situations",
    "A serious environment where you learn clarity, discipline, and practical thinking",
  ],
  internshipButton: "Send your CV",
};
