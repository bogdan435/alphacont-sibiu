"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/gtag";

type TrackedPhoneLinkProps = {
  children?: ReactNode;
  className: string;
  locale: "ro" | "en";
  location: string;
  phoneNumber: string;
  label: string;
};

export default function TrackedPhoneLink({
  children,
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
      {children ?? label}
    </a>
  );
}
