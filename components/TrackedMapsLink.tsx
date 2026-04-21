"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/gtag";

type TrackedMapsLinkProps = {
  children?: ReactNode;
  className: string;
  href: string;
  label: string;
  locale: "ro" | "en";
  location: string;
};

export default function TrackedMapsLink({
  children,
  className,
  href,
  label,
  locale,
  location,
}: TrackedMapsLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent("maps_click", {
          location,
          locale,
        })
      }
    >
      {children ?? label}
    </a>
  );
}
