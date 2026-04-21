"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

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

  return <GoogleAnalytics gaId={GA_ID} />;
}
