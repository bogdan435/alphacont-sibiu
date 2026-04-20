"use client";

import { trackEvent } from "@/lib/gtag";

type TrackedWhatsAppButtonProps = {
  className: string;
  locale: "ro" | "en";
  location: string;
  phoneNumber: string;
  label: string;
};

export default function TrackedWhatsAppButton({
  className,
  locale,
  location,
  phoneNumber,
  label,
}: TrackedWhatsAppButtonProps) {
  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("whatsapp_click", {
          location,
          locale,
        })
      }
    >
      {label}
    </a>
  );
}
