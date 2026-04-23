export function getBaseUrl() {
  return "https://alphacont.ro";
}

export function getLocaleMetadata(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";

  if (safeLocale === "en") {
    return {
      title: "Accountant in Sibiu | Accounting Services in Sibiu | ALPHACONT GROUP",
      description:
        "Accounting services in Sibiu for LLCs, sole traders, and growing businesses: accounting, payroll, tax advisory, and practical updates.",
      keywords: [
        "accountant sibiu",
        "accounting services sibiu",
        "payroll sibiu",
        "tax advisory sibiu",
      ],
    };
  }

  return {
    title: "Contabil Sibiu | Firmă de contabilitate Sibiu | ALPHACONT GROUP",
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
