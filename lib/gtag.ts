export type ConsentParams = {
  analytics_storage: "granted" | "denied";
};

type Gtag = {
  (command: "event", name: string, params?: EventParams): void;
  (command: "consent", action: "update", params: ConsentParams): void;
};

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", name, params);
}
