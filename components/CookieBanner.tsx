"use client";

import Link from "next/link";
import { useState } from "react";

const CONSENT_KEY = "cookie_consent";

export default function CookieBanner({ locale }: { locale?: string }) {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !window.localStorage.getItem(CONSENT_KEY)
  );

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }

    window.location.reload();
  };

  const reject = () => {
    window.localStorage.setItem(CONSENT_KEY, "rejected");

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  const safeLocale = locale === "en" ? "en" : "ro";
  const cookieHref = `/${safeLocale}/cookie-policy`;
  const privacyHref = `/${safeLocale}/privacy-policy`;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-banner__content">
        <p className="cookie-banner__title">
          {safeLocale === "ro" ? "Cookie-uri și analiză" : "Cookies and analytics"}
        </p>

        <p className="cookie-banner__text">
          {safeLocale === "ro"
            ? "Folosim cookie-uri de analiză pentru a înțelege cum este utilizat site-ul. Acestea sunt activate doar dacă îți dai acordul."
            : "We use analytics cookies to understand how the site is used. These are enabled only if you give consent."}{" "}
          <Link href={cookieHref}>
            {safeLocale === "ro" ? "Politica de cookie-uri" : "Cookie Policy"}
          </Link>{" "}
          ·{" "}
          <Link href={privacyHref}>
            {safeLocale === "ro" ? "Politica de confidențialitate" : "Privacy Policy"}
          </Link>
        </p>

        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--secondary"
            onClick={reject}
          >
            {safeLocale === "ro" ? "Refuz" : "Reject"}
          </button>
          <button
            type="button"
            className="cookie-banner__button cookie-banner__button--primary"
            onClick={accept}
          >
            {safeLocale === "ro" ? "Accept" : "Accept"}
          </button>
        </div>
      </div>
    </div>
  );
}
