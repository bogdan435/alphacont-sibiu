"use client";

import { trackEvent } from "@/lib/gtag";

type TrackedPhoneLinkProps = {
  className: string;
  locale: "ro" | "en";
  location: string;
  phoneNumber: string;
  label: string;
};

export default function TrackedPhoneLink({
  className,
  locale,
  location,
  phoneNumber,
  label,
}: TrackedPhoneLinkProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={className}
      onClick={() =>
        trackEvent("phone_click", {
          location,
          locale,
        })
      }
    >
      {label}
    </a>
  );
}
