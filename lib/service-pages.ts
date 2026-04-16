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
  "contabil-pfa-sibiu": {
    slug: "contabil-pfa-sibiu",
    title: "PFA accountant in Sibiu",
    metaTitle: "PFA Accountant in Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Accounting support for sole traders in Sibiu: document flow, tax filings, practical clarifications, and ongoing support.",
    intro:
      "If you run a sole trader activity in Sibiu, you need an accountant who keeps things clear month after month, not only someone who collects papers at the end.",
    summary:
      "We help with document records, tax filings, practical clarifications, and a smoother day-to-day workflow.",
    bullets: [
      "Clear records for income, expenses, and supporting documents.",
      "Tax filings prepared and tracked on time.",
      "Simple explanations about what is missing and what comes next.",
      "Fast communication by email, phone, or WhatsApp.",
    ],
    ctaLabel: "Request a PFA quote",
  },
  "contabil-srl-sibiu": {
    slug: "contabil-srl-sibiu",
    title: "LLC accountant in Sibiu",
    metaTitle: "LLC Accountant in Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Accounting for LLCs in Sibiu for businesses that want control, timely filings, and clarity around documents, taxes, and reporting.",
    intro:
      "For an LLC, accounting means more than filings. It matters to know what is due, what comes next, and where risks can appear.",
    summary:
      "We work with LLCs in Sibiu that want order in documents, reliable payroll, and direct communication with the accountant.",
    bullets: [
      "We take over documents monthly, digitally or physically.",
      "We track filings, taxes, and key deadlines.",
      "We clarify upcoming obligations before they become urgent.",
      "Support for payroll, RO e-Factura, and ANAF inspections.",
    ],
    ctaLabel: "Request an LLC quote",
  },
  "infiintare-firma-sibiu": {
    slug: "infiintare-firma-sibiu",
    title: "Business setup in Sibiu",
    metaTitle: "Business Setup in Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Support for starting a business in Sibiu: LLC or sole trader, document setup, first steps, and basic tax clarification.",
    intro:
      "If you are starting a business in Sibiu, we can help you begin in a clearer and more organized way, without chasing separate providers for each step.",
    summary:
      "We support LLC and sole trader setup, plus document organization for the beginning of activity.",
    bullets: [
      "We help you compare LLC and sole trader routes.",
      "We explain the first steps and required documents.",
      "We set a clear flow for monthly paperwork and accounting collaboration.",
      "We stay involved after setup for the accounting side as well.",
    ],
    ctaLabel: "Discuss your setup",
  },
  "consultanta-fiscala-sibiu": {
    slug: "consultanta-fiscala-sibiu",
    title: "Tax advisory in Sibiu",
    metaTitle: "Tax Advisory in Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Tax advisory in Sibiu for businesses that want clarity before decisions, not only explanations after problems appear.",
    intro:
      "Good tax advisory means knowing in advance which taxes are coming, what a decision changes, and how to avoid unpleasant surprises.",
    summary:
      "We provide practical tax clarification that fits the real activity of your business, not just generic answers.",
    bullets: [
      "Clarification before important decisions, not only after.",
      "Simple explanations about upcoming tax obligations.",
      "Support for inspections, SAF-T, and RO e-Factura.",
      "Fast answers for questions that block day-to-day work.",
    ],
    ctaLabel: "Request tax advisory",
  },
  "salarizare-sibiu": {
    slug: "salarizare-sibiu",
    title: "Payroll services in Sibiu",
    metaTitle: "Payroll Services in Sibiu | ALPHACONT GROUP",
    metaDescription:
      "Payroll services for companies in Sibiu: salary statements, personnel documents, deadlines, and support for a process without errors or delays.",
    intro:
      "Payroll should be accurate, predictable, and organized. Even a small business needs a clear workflow in this area.",
    summary:
      "We manage payroll and personnel documents so the process remains reliable, orderly, and on time.",
    bullets: [
      "Salary calculations and personnel documents prepared correctly.",
      "We track deadlines and related obligations.",
      "Support for team changes and day-to-day clarifications.",
      "Fast communication when something urgent appears.",
    ],
    ctaLabel: "Request payroll support",
  },
};

export const servicePageSlugs = Object.keys(roPages);

export function getServicePageContent(locale: string, slug: string) {
  const safeLocale = locale === "en" ? "en" : "ro";
  const pages = safeLocale === "en" ? enPages : roPages;
  return pages[slug];
}

export function getServicePageLinks(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";

  return servicePageSlugs.map((slug) => {
    const page = getServicePageContent(safeLocale, slug);
    return {
      href: `/${safeLocale}/${slug}`,
      label: page?.title ?? slug,
    };
  });
}
