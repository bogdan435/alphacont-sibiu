"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "@/lib/gtag";

type LeadTrackingProps = {
  locale: string;
};

export default function LeadTracking({ locale }: LeadTrackingProps) {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sent") === "1") {
      trackEvent("generate_lead", {
        method: "contact_form",
        locale,
      });
    }
  }, [searchParams, locale]);

  return null;
}
