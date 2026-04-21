"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "cookie_consent";
const GA_ID = "G-JYCVFNBZ6S";

export default function AnalyticsWithConsent() {
  const [mounted, setMounted] = useState(false);
  const [granted, setGranted] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
      const saved = window.localStorage.getItem(CONSENT_KEY);
      setGranted(saved === "accepted");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!mounted || !granted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-test" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
