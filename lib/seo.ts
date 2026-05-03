export function getBaseUrl() {
  return "https://alphacont.ro";
}

export function getLocaleMetadata(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";

  if (safeLocale === "en") {
    return {
      title:
        "English‑speaking Accountant in Sibiu | Accounting & Tax Services | ALPHACONT",
      description:
        "English-speaking accounting services in Sibiu for LLCs, sole traders, and foreign businesses: accounting, payroll, tax advisory, and business setup.",
      keywords: [
        "accountant Sibiu",
        "English speaking accountant Sibiu",
        "accounting services Sibiu",
        "bookkeeping services Sibiu",
        "tax advisory Sibiu",
        "payroll services Sibiu",
        "business setup Sibiu",
      ],
    };
  }

  // Romanian metadata unchanged
  return {
    title:
      "Contabil Sibiu | Firmă de contabilitate Sibiu | ALPHACONT",
    description:
      "Contabil Sibiu pentru SRL-uri, PFA-uri și firme în creștere. Firmă de contabilitate din Sibiu cu servicii de contabilitate, salarizare, consultanță fiscală și expert contabil.",
    keywords: [
      "contabil sibiu",
      "firma contabilitate sibiu",
      "servicii contabilitate sibiu",
      "expert contabil sibiu",
      "contabilitate sibiu",
    ],
  };
}
