import Link from "next/link";

type SiteFooterProps = {
  locale: string;
};

export default function SiteFooter({ locale }: SiteFooterProps) {
  const safeLocale = locale === "en" ? "en" : "ro";

  return (
    <footer className="site-footer">
      <div className="site-footer-grid">
        <div>
          <p className="site-footer-kicker">ALPHACONT GROUP</p>
          <p className="site-footer-text">
            {safeLocale === "ro"
              ? "Birou local în Sibiu pentru contabilitate, salarizare și consultanță fiscală."
              : "Local Sibiu office for accounting, payroll, and tax advisory."}
          </p>
        </div>

        <div>
          <p className="site-footer-kicker">{safeLocale === "ro" ? "Contact" : "Contact"}</p>
          <p className="site-footer-text">contact@alphacont.ro</p>
          <p className="site-footer-text">+40 721 644 296</p>
          <p className="site-footer-text">+39 334 741 2487</p>
          <p className="site-footer-text">
            {safeLocale === "ro"
              ? "Str. Octavian Goga 55, 550370 Sibiu, Jud. Sibiu"
              : "55 Octavian Goga Street, 550370 Sibiu, Sibiu County, Romania"}
          </p>
        </div>

        <div>
          <p className="site-footer-kicker">{safeLocale === "ro" ? "Legal" : "Legal"}</p>
          <div className="site-footer-links">
            <Link href={`/${safeLocale}/privacy-policy`}>
              {safeLocale === "ro" ? "Confidențialitate" : "Privacy"}
            </Link>
            <Link href={`/${safeLocale}/cookie-policy`}>
              {safeLocale === "ro" ? "Cookie-uri" : "Cookies"}
            </Link>
            <Link href={`/${safeLocale}/terms`}>
              {safeLocale === "ro" ? "Termeni" : "Terms"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
