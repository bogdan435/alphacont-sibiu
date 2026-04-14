export function getBaseUrl() {
  return "https://alphacont-sibiu.vercel.app";
}

export function getLocaleMetadata(locale: string) {
  const safeLocale = locale === "en" ? "en" : "ro";

  if (safeLocale === "en") {
    return {
      title: "ALPHACONT GROUP | Accounting Services in Sibiu",
      description:
        "Accounting, payroll, tax advisory, and useful blog articles for businesses in Sibiu.",
    };
  }

  return {
    title: "ALPHACONT GROUP | Servicii de contabilitate in Sibiu",
    description:
      "Contabilitate, salarizare, consultanta fiscala si articole utile pentru firme din Sibiu.",
  };
}
