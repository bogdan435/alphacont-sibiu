"use client";

import { trackEvent } from "@/lib/gtag";

type TrackedMapsLinkProps = {
  className: string;
  href: string;
  label: string;
  locale: "ro" | "en";
  location: string;
};

export default function TrackedMapsLink({
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
      {label}
    </a>
  );
}
