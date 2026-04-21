"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent";

export default function CookieBanner({ locale = "ro" }: { locale?: string }) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
      const saved = window.localStorage.getItem(CONSENT_KEY);
      setVisible(saved !== "accepted" && saved !== "rejected");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const accept = () => {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    window.location.reload();
  };

  const reject = () => {
    window.localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  const safeLocale = locale === "en" ? "en" : "ro";

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-labelledby="cookie-title"
      aria-live="polite"
    >
      <div className="cookie-banner__content">
        <p id="cookie-title" className="cookie-banner__title">
          {safeLocale === "ro" ? "Cookie-uri și analiză" : "Cookies and analytics"}
        </p>

        <p className="cookie-banner__text">
          {safeLocale === "ro"
            ? "Folosim cookie-uri de analiză doar cu acordul tău."
            : "We use analytics cookies only with your consent."}{" "}
          <Link href={`/${safeLocale}/cookie-policy`}>
            {safeLocale === "ro" ? "Politica de cookie-uri" : "Cookie Policy"}
          </Link>{" "}
          ·{" "}
          <Link href={`/${safeLocale}/privacy-policy`}>
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
