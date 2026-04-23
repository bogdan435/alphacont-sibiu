export function getLocalBusinessSchema(locale: string) {
  const isEnglish = locale === "en";

  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "ALPHACONT GROUP",
    image: "https://alphacont.ro/logo-blue.svg",
    url: `https://alphacont.ro/${locale}`,
    telephone: ["0040721644296", "00393347412487"],
    email: "contact@alphacont.ro",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Str. Octavian Goga 55",
      postalCode: "550370",
      addressLocality: "Sibiu",
      addressRegion: "Sibiu",
      addressCountry: "RO"
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: isEnglish ? "Sibiu County" : "Judetul Sibiu"
    },
    description: isEnglish
      ? "Accounting, payroll, and tax advisory services for businesses in Sibiu."
      : "Servicii de contabilitate, salarizare si consultanta fiscala pentru firme din Sibiu."
  };
}

export function getFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
