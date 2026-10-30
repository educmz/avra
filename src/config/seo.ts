import type { Metadata } from "next";

export const siteUrl = "https://avra.pe";
export const indexablePaths = ["/", "/carta", "/maquinas", "/nosotros"] as const;

// Keep the Avra branding and descriptive browser-tab titles without losing
// page-specific descriptions, canonical URLs or social previews.
const browserTitles: Record<string, string> = {
  "/": "Avra | Activa lo natural",
  "/carta": "Avra | Carta de Alimentos y Bebidas",
  "/maquinas": "Avra | Máquinas Vending Saludables",
  "/nosotros": "Avra | Nosotros",
  "/blog": "Avra | Blog",
  "/libro-de-reclamaciones": "Avra | Libro de reclamaciones",
  "/politica-de-cookies": "Avra | Política de cookies",
  "/politica-de-privacidad": "Avra | Política de privacidad",
  "/terminos-y-condiciones": "Avra | Términos y condiciones",
};

export function pageMetadata(path: string, title: string, description: string, index = true): Metadata {
  const url = new URL(path, siteUrl).href;
  const socialTitle = title.replace(/\bAVRA\b/g, "Avra");
  const image = { url: siteUrl + "/social-image", width: 1200, height: 630, alt: "Avra — Activa lo natural" };

  return {
    title: { absolute: browserTitles[path] ?? socialTitle },
    description,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: {
      type: "website",
      locale: "es_PE",
      siteName: "Avra",
      url,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
