type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  summary: string;
  bullets: string[];
  ctaLabel: string;
};

const serviceSlugPairs = [
  {
    ro: "contabil-pfa-sibiu",
    en: "sole-trader-accountant-sibiu",
  },
  {
    ro: "contabil-srl-sibiu",
    en: "llc-accountant-sibiu",
  },
  {
    ro: "infiintare-firma-sibiu",
    en: "company-formation-sibiu",
  },
  {
    ro: "consultanta-fiscala-sibiu",
    en: "tax-advisory-sibiu",
  },
  {
    ro: "salarizare-sibiu",
    en: "payroll-services-sibiu",
  },
] as const;

const roToEnServiceSlug = Object.fromEntries(
  serviceSlugPairs.map(({ ro, en }) => [ro, en]),
) as Record<string, string>;

const enToRoServiceSlug = Object.fromEntries(
  serviceSlugPairs.map(({ ro, en }) => [en, ro]),
) as Record<string, string>;

// Romanian (ro) pages remain unchanged
const roPages: Record<string, ServicePageContent> = {
  "contabil-pfa-sibiu": {
    slug: "contabil-pfa-sibiu",
    title: "Contabil PFA Sibiu",
    metaTitle: "Contabil PFA Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Servicii de contabil PFA în Sibiu: evidență clară, declarații, organizarea documentelor și sprijin fiscal pentru activitatea curentă.",
    intro:
      "Dacă ai un PFA în Sibiu, ai nevoie de un contabil care să țină lucrurile clare de la o lună la alta, nu doar să preia documente la final.",
    summary:
      "Te ajutăm cu evidența documentelor, declarațiile, clarificările fiscale și pașii practici care îți reduc stresul administrativ.",
    bullets: [
      "Evidență clară pentru venituri, cheltuieli și documente justificative.",
      "Declarații pregătite și urmărite la timp.",
      "Explicăm pe scurt ce ai de făcut și ce documente lipsesc.",
      "Comunicare rapidă prin email, telefon sau WhatsApp.",
    ],
    ctaLabel: "Cere ofertă pentru PFA",
  },
  "contabil-srl-sibiu": {
    slug: "contabil-srl-sibiu",
    title: "Contabil SRL Sibiu",
    metaTitle: "Contabil SRL Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Contabil SRL în Sibiu pentru firme care vor control, declarații la timp și claritate în documente, taxe și raportare.",
    intro:
      "Pentru un SRL, contabilitatea înseamnă mai mult decât declarații. Contează să știi ce ai de plată, ce urmează și unde apar riscuri.",
    summary:
      "Lucrăm cu SRL-uri din Sibiu care vor ordine în documente, salarizare corectă și o relație directă cu contabilul.",
    bullets: [
      "Preluăm documentele lunar, digital sau fizic.",
      "Urmărim declarațiile, taxele și termenele importante.",
      "Clarificăm din timp ce obligații urmează pentru firmă.",
      "Sprijin pentru salarizare, RO e-Factura și controale ANAF.",
    ],
    ctaLabel: "Cere ofertă pentru SRL",
  },
  "infiintare-firma-sibiu": {
    slug: "infiintare-firma-sibiu",
    title: "Înființare firmă Sibiu",
    metaTitle: "Înființare firmă Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Sprijin pentru înființare firmă în Sibiu: SRL sau PFA, organizarea documentelor, pașii de început și clarificarea obligațiilor fiscale.",
    intro:
      "Dacă pornești o firmă în Sibiu, te putem ajuta să începi mai clar și mai organizat, fără să cauți separat pentru fiecare pas.",
    summary:
      "Oferim sprijin pentru înființare SRL sau PFA și pentru organizarea documentelor de la începutul activității.",
    bullets: [
      "Te orientăm între SRL și PFA în funcție de activitate.",
      "Îți explicăm pașii de început și documentele necesare.",
      "Stabilim un flux clar pentru actele lunare și colaborarea contabilă.",
      "Rămânem alături de tine și după înființare, pentru partea contabilă.",
    ],
    ctaLabel: "Discută despre înființare",
  },
  "consultanta-fiscala-sibiu": {
    slug: "consultanta-fiscala-sibiu",
    title: "Consultanță fiscală Sibiu",
    metaTitle: "Consultanță fiscală Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Consultanță fiscală în Sibiu pentru firme care vor claritate înainte de decizii, nu doar explicații după apariția problemelor.",
    intro:
      "Consultanța fiscală bună înseamnă să știi din timp ce taxe urmează, ce impact are o decizie și cum eviți surprizele neplăcute.",
    summary:
      "Te ajutăm cu clarificări fiscale practice, potrivite pentru activitatea reală a firmei, nu doar cu răspunsuri generale.",
    bullets: [
      "Clarificări înainte de decizii importante, nu doar după.",
      "Explicăm simplu obligațiile fiscale care urmează.",
      "Sprijin pentru controale, SAF-T și RO e-Factura.",
      "Răspuns rapid pentru întrebările care blochează activitatea.",
    ],
    ctaLabel: "Cere consultanță fiscală",
  },
  "salarizare-sibiu": {
    slug: "salarizare-sibiu",
    title: "Salarizare firme Sibiu",
    metaTitle: "Salarizare firme Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Salarizare pentru firme din Sibiu: state, documente de personal, termene și suport pentru un proces fără erori și întârzieri.",
    intro:
      "Salarizarea trebuie să fie corectă, predictibilă și bine organizată. Chiar și o firmă mică are nevoie de un flux clar pentru această zonă.",
    summary:
      "Gestionăm salarizarea și documentele de personal astfel încât procesul să rămână sigur, ordonat și la timp.",
    bullets: [
      "Calcul salarial și documente de personal pregătite corect.",
      "Urmărim termenele și obligațiile aferente.",
      "Sprijin pentru schimbări în echipă și clarificări punctuale.",
      "Comunicare rapidă atunci când apare ceva urgent.",
    ],
    ctaLabel: "Cere ofertă pentru salarizare",
  },
};

const enPages: Record<string, ServicePageContent> = {
  "sole-trader-accountant-sibiu": {
    slug: "sole-trader-accountant-sibiu",
    title: "Sole trader accountant in Sibiu",
    metaTitle: "Sole Trader Accountant in Sibiu | English-Speaking Accounting",
    metaDescription:
      "English-speaking accounting for sole traders, freelancers, and expats in Sibiu. Tax filings, document records, and clear Romanian tax guidance.",
    intro:
      "If you run a sole trader activity in Sibiu—whether you’re Romanian or an expat—you need an English-speaking accountant who keeps things clear month after month, explains Romanian tax rules up front, and handles more than just collecting papers at the end.",
    summary:
      "We help freelancers and sole traders with document records, tax filings, practical clarifications, and a smoother day-to-day workflow, including guidance on Romanian tax rates and contributions for foreign nationals.",
    bullets: [
      "Clear records for income, expenses, and supporting documents.",
      "Guidance on registering as a PFA and understanding Romanian tax obligations as a foreigner.",
      "Tax filings prepared and tracked on time, with simple explanations about what is missing and what comes next.",
      "Fast communication by email, phone, or WhatsApp, with English support.",
    ],
    ctaLabel: "Talk to an Accountant",
  },
  "llc-accountant-sibiu": {
    slug: "llc-accountant-sibiu",
    title: "LLC accountant in Sibiu",
    metaTitle: "LLC Accountant in Sibiu | English-Speaking Accounting",
    metaDescription:
      "English-speaking accounting for LLCs in Sibiu, including foreign-owned companies: proactive control, timely filings, clarity around documents and taxes, and guidance on Romanian compliance.",
    intro:
      "For an LLC, accounting means more than filings. You need an English-speaking accountant who tells you what is due, what comes next, and where risks can appear—especially if your company is foreign-owned or employs expats.",
    summary:
      "We work with LLCs in Sibiu that want order in documents, reliable payroll, direct communication with the accountant, and clear guidance on Romanian tax compliance for local and foreign directors.",
    bullets: [
      "Monthly takeover of documents, digital or physical, with summaries in English.",
      "Tracking filings, taxes, and key deadlines, including micro versus normal tax regimes and local payroll requirements.",
      "Clarifying upcoming obligations before they become urgent and explaining any risks for foreign shareholders.",
      "Support for payroll, RO e-Factura, and ANAF inspections, with translation and representation for foreign clients.",
    ],
    ctaLabel: "Talk to an Accountant",
  },
  "company-formation-sibiu": {
    slug: "company-formation-sibiu",
    title: "Company formation in Sibiu",
    metaTitle: "Company Formation in Sibiu | Start a Business in Romania",
    metaDescription:
      "English-speaking support for starting a business in Sibiu. We guide foreigners and locals through SRL or PFA formation, handle document preparation, and clarify Romanian tax obligations from day one.",
    intro:
      "If you are starting a business in Sibiu, we provide end-to-end support in English—from choosing between SRL and PFA to preparing documents, translating paperwork, and dealing with Romanian authorities—so you don’t have to chase separate providers for each step.",
    summary:
      "We help foreign and local entrepreneurs with LLC and sole trader setup, organize documents, and provide ongoing guidance on Romanian corporate obligations.",
    bullets: [
      "Advice on whether SRL or sole trader status fits your situation, including taxation for foreigners.",
      "Explanation of first steps and required documents, with translation when needed.",
      "Clear workflow for monthly paperwork and collaboration with your accountant after setup.",
      "Continued support after setup for accounting, tax filing, and compliance, with English-language explanations.",
    ],
    ctaLabel: "Talk to an Accountant",
  },
  "tax-advisory-sibiu": {
    slug: "tax-advisory-sibiu",
    title: "Tax advisory in Sibiu",
    metaTitle: "Tax Advisory in Sibiu | English-Speaking Tax Support",
    metaDescription:
      "English-speaking tax advisory in Sibiu for businesses, including foreign-owned companies and expats. We provide clarity before decisions, explain Romanian and EU tax rules, and help you avoid unpleasant surprises.",
    intro:
      "Good tax advisory means knowing in advance which taxes are coming, what a decision changes, and how to avoid unpleasant surprises—especially if you’re not familiar with Romania’s tax system.",
    summary:
      "We provide practical tax clarification that fits the real activity of your business—covering Romanian tax, EU VAT, double-taxation agreements, and cross-border issues.",
    bullets: [
      "Clarification before important decisions, including cross-border transactions and restructuring.",
      "Simple explanations about upcoming tax obligations.",
      "Support for inspections, SAF-T reporting, RO e-Factura, and representation before ANAF.",
      "Fast answers for questions that block day-to-day work, in English.",
    ],
    ctaLabel: "Talk to an Accountant",
  },
  "payroll-services-sibiu": {
    slug: "payroll-services-sibiu",
    title: "Payroll services in Sibiu",
    metaTitle: "Payroll Services in Sibiu | English-Speaking Payroll Support",
    metaDescription:
      "English-speaking payroll services for companies in Sibiu—including firms with expat employees: salary statements, personnel documents, HR deadlines, and guidance on Romanian labour law compliance.",
    intro:
      "Payroll should be accurate, predictable, and organized. Our English-speaking team makes sure even small businesses and companies with expat employees have a clear workflow for payroll and HR in Romania.",
    summary:
      "We manage payroll and personnel documents so the process remains reliable, orderly, and on time.",
    bullets: [
      "Salary calculations and personnel documents prepared correctly.",
      "Tracking deadlines and obligations related to payroll taxes and social contributions.",
      "Support for team changes and day-to-day clarifications.",
      "Fast communication when something urgent appears, with English support.",
    ],
    ctaLabel: "Talk to an Accountant",
  },
};

export const servicePageSlugs = {
  ro: serviceSlugPairs.map(({ ro }) => ro),
  en: serviceSlugPairs.map(({ en }) => en),
};

function resolveServicePageSlug(locale: string, slug: string) {
  const safeLocale = locale === "en" ? "en" : "ro";

  if (safeLocale === "en") {
    if (enPages[slug]) {
      return slug;
    }

    return roToEnServiceSlug[slug];
  }

  if (roPages[slug]) {
    return slug;
  }

  return enToRoServiceSlug[slug];
}

export function getServicePageContent(locale: string, slug: string) {
  const safeLocale = locale === "en" ? "en" : "ro";
  const pages = safeLocale === "en" ? enPages : roPages;
  const canonicalSlug = resolveServicePageSlug(safeLocale, slug);

  if (!canonicalSlug) {
    return undefined;
  }

  return pages[canonicalSlug];
}

export function getServicePageLinks(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";
  const slugs = servicePageSlugs[safeLocale];

  return slugs.map((slug) => {
    const page = getServicePageContent(safeLocale, slug);

    return {
      href: `/${safeLocale}/${slug}`,
      label: page?.title ?? slug,
    };
  });
}

export function getAlternateServicePageSlug(
  locale: string,
  slug: string,
  targetLocale: string,
) {
  const safeLocale = locale === "en" ? "en" : "ro";
  const safeTargetLocale = targetLocale === "en" ? "en" : "ro";
  const canonicalSlug = resolveServicePageSlug(safeLocale, slug);

  if (!canonicalSlug) {
    return slug;
  }

  if (safeLocale === safeTargetLocale) {
    return canonicalSlug;
  }

  if (safeLocale === "ro") {
    return roToEnServiceSlug[canonicalSlug] ?? slug;
  }

  return enToRoServiceSlug[canonicalSlug] ?? slug;
}
