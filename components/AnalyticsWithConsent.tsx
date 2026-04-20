"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const CONSENT_KEY = "cookie_consent";
const GA_ID = "G-JYCVFNBZ6S";

export default function AnalyticsWithConsent() {
  const [granted] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem(CONSENT_KEY) === "accepted"
  );

  useEffect(() => {
    if (!granted || typeof window.gtag !== "function") return;

    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
  }, [granted]);

  if (!granted) return null;

  return <GoogleAnalytics gaId={GA_ID} />;
}
