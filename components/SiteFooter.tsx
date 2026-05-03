import Link from "next/link";
import { getAlternateServicePageSlug } from "@/lib/service-pages";

type SiteFooterProps = {
  locale: string;
};

export default function SiteFooter({ locale }: SiteFooterProps) {
  const safeLocale = locale === "en" ? "en" : "ro";
  const serviceLinks = [
    {
      slug: "contabil-srl-sibiu",
      roLabel: "Contabilitate SRL Sibiu",
      enLabel: "LLC accounting Sibiu",
    },
    {
      slug: "contabil-pfa-sibiu",
      roLabel: "Contabilitate PFA Sibiu",
      enLabel: "Sole trader accounting Sibiu",
    },
    {
      slug: "consultanta-fiscala-sibiu",
      roLabel: "Consultanță fiscală Sibiu",
      enLabel: "Tax advisory Sibiu",
    },
    {
      slug: "salarizare-sibiu",
      roLabel: "Salarizare Sibiu",
      enLabel: "Payroll services Sibiu",
    },
    {
      slug: "infiintare-firma-sibiu",
      roLabel: "Înființare firmă Sibiu",
      enLabel: "Company formation Sibiu",
    },
  ] as const;

  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div className="site-footer-column site-footer-column--brand">
          <a href={`/${safeLocale}`} className="site-footer-kicker site-footer-brand-link">
            ALPHACONT
          </a>
          <div className="site-footer-column-body">
            <p className="site-footer-text">
              {safeLocale === "ro"
                ? "Birou local în Sibiu pentru contabilitate, salarizare și consultanță fiscală."
                : "Local Sibiu office for accounting, payroll, and tax advisory."}
            </p>
            <div className="site-footer-links">
              <Link href={safeLocale === "ro" ? "/ro/recomandari" : "/en/recommendations"}>
                {safeLocale === "ro"
                  ? "Scrisori de recomandare"
                  : "Recommendation letters"}
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer-column site-footer-column--contact">
          <p className="site-footer-kicker">{safeLocale === "ro" ? "Contact" : "Contact"}</p>
          <div className="site-footer-column-body">
            <a
              href="mailto:contact@alphacont.ro"
              className="site-footer-text site-footer-contact-link"
            >
              contact@alphacont.ro
            </a>
            <a
              href="tel:+40721644296"
              className="site-footer-text site-footer-contact-link"
            >
              +40 721 644 296
            </a>
            <a
              href="tel:+393347412487"
              className="site-footer-text site-footer-contact-link"
            >
              +39 334 741 2487
            </a>
            <a
              href="https://maps.app.goo.gl/rombVxLCvRkwJYtq9"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-text site-footer-address-link"
            >
              {safeLocale === "ro"
                ? "Str. Octavian Goga 55, 550370 Sibiu, Jud. Sibiu"
                : "55 Octavian Goga Street, 550370 Sibiu, Sibiu County, Romania"}
            </a>
          </div>
        </div>

        <div className="site-footer-column site-footer-column--legal">
          <p className="site-footer-kicker">{safeLocale === "ro" ? "Legal" : "Legal"}</p>
          <div className="site-footer-column-body">
            <div className="site-footer-links">
              <Link href={safeLocale === "ro" ? "/ro/confidentialitate" : "/en/privacy-policy"}>
                {safeLocale === "ro" ? "Confidențialitate" : "Privacy"}
              </Link>
              <Link href={safeLocale === "ro" ? "/ro/cookie-uri" : "/en/cookie-policy"}>
                {safeLocale === "ro" ? "Cookie-uri" : "Cookies"}
              </Link>
              <Link href={safeLocale === "ro" ? "/ro/termeni" : "/en/terms"}>
                {safeLocale === "ro" ? "Termeni" : "Terms"}
              </Link>
            </div>
          </div>
        </div>

        <div className="site-footer-column site-footer-column--services">
          <p className="site-footer-kicker">
            {safeLocale === "ro" ? "Servicii în Sibiu" : "Services in Sibiu"}
          </p>
          <div className="site-footer-column-body">
            <div className="site-footer-links">
              {serviceLinks.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${safeLocale}/${getAlternateServicePageSlug("ro", service.slug, safeLocale)}`}
                >
                  {safeLocale === "ro" ? service.roLabel : service.enLabel}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {safeLocale === "ro" ? (
          <div className="site-footer-column site-footer-column--opportunities">
            <p className="site-footer-kicker">Oportunități</p>
            <div className="site-footer-column-body">
              <div className="site-footer-links">
                <Link href="/ro/stagiu-practica">Stagiu de practică</Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <p className="site-footer-copyright">
        {safeLocale === "ro"
          ? "© 2026 ALPHACONT GROUP. Toate drepturile rezervate."
          : "© 2026 ALPHACONT GROUP. All rights reserved."}
      </p>
    </footer>
  );
}
