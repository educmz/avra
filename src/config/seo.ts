import type { Metadata } from "next";
export const siteUrl = "https://avra.pe";
export const indexablePaths = ["/", "/carta", "/maquinas", "/nosotros"] as const;
export function pageMetadata(path: string, title: string, description: string, index = true): Metadata {
 const url = new URL(path, siteUrl).href;
 const image = { url: siteUrl + "/social-image", width: 1200, height: 630, alt: "AVRA — Activa lo natural" };
 return { title: { absolute: title }, description, alternates: { canonical: url }, robots: { index, follow: true },
 openGraph: { type: "website", locale: "es_PE", siteName: "AVRA", url, title, description, images: [image] },
 twitter: { card: "summary_large_image", title, description, images: [image.url] } };
}
