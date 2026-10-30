"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";
const enabled = process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" && /^G-[A-Z0-9]+$/.test(measurementId);
// A future consent manager must call this only after an explicit analytics choice.
// Consent is intentionally not persisted here: no policy or CMP exists yet.
export function setAnalyticsConsent(granted: boolean) {
  window.dispatchEvent(new CustomEvent("avra:analytics-consent", { detail: granted }));
}
export function Analytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState(false);
  const lastPage = useRef<string | null>(null);
  useEffect(() => {
    if (!enabled) return;
    const win = window as AnalyticsWindow;
    const update = (event: Event) => {
      const granted = (event as CustomEvent<unknown>).detail === true;
      if (!granted) {
        win.gtag?.("consent", "update", { analytics_storage: "denied" });
        (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = true;
        lastPage.current = null;
      }
      setConsent(granted);
    };
    window.addEventListener("avra:analytics-consent", update);
    return () => window.removeEventListener("avra:analytics-consent", update);
  }, []);
  useEffect(() => {
    if (!enabled || !consent) return;
    const win = window as AnalyticsWindow;
    (window as unknown as Record<string, unknown>)[`ga-disable-${measurementId}`] = false;
    if (!win.gtag) {
      win.dataLayer = [];
      // gtag expects an Arguments object in the dataLayer (Google tag API).
      // eslint-disable-next-line prefer-rest-params
      win.gtag = function () { win.dataLayer?.push(arguments); };
      win.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      win.gtag("js", new Date());
      win.gtag("config", measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: "https://avra.pe" + pathname, page_referrer: "" });
      const script = document.createElement("script");
      script.id = "avra-ga";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }
    win.gtag("consent", "update", { analytics_storage: "granted" });
    if (lastPage.current !== pathname) {
      // Queries, hashes, titles and contact destinations are never sent.
      win.gtag("event", "page_view", { page_location: "https://avra.pe" + pathname, page_title: pathname, page_referrer: "" });
      lastPage.current = pathname;
    }
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a") : null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const name = href.startsWith("https://wa.me/") ? (pathname === "/maquinas" ? "vending_inquiry" : "whatsapp_click") : href.startsWith("mailto:") ? "email_click" : link.classList.contains("avra-cta") ? "commercial_cta_click" : null;
      if (name) win.gtag?.("event", name, { page_location: "https://avra.pe" + pathname, page_title: pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent, pathname]);
  return null;
}
