import type { Metadata } from "next";
import {
  Caveat,
  League_Spartan,
  Manrope,
  Outfit,
  Pacifico,
} from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";

import { siteUrl } from "@/config/seo";
import { Analytics } from "@/components/analytics/Analytics";
import "./globals.css";

const interfaceFont = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const headerFont = Outfit({
  subsets: ["latin"],
  variable: "--font-header",
  display: "swap",
});

const headingFont = League_Spartan({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-heading",
  display: "swap",
});

const accentFont = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-accent",
});

const cartaFont = Manrope({
  subsets: ["latin"],
  variable: "--font-carta",
  display: "swap",
});

const scriptFont = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl), title: { default: "AVRA | Alimentos Saludables y Máquinas Vending", template: "%s | AVRA" },
 description: siteConfig.description, applicationName: "AVRA",
 verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } : undefined,
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`h-full antialiased ${interfaceFont.variable} ${headerFont.variable} ${headingFont.variable} ${accentFont.variable} ${cartaFont.variable} ${scriptFont.variable}`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:p-4">Saltar al contenido</a>
<Header />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org", "@graph": [
 { "@type": "Organization", "@id": siteUrl + "/#organization", name: "AVRA", url: siteUrl, logo: siteUrl + "/images/brand/avra-wordmark-black.webp" },
 { "@type": "WebSite", "@id": siteUrl + "/#website", name: "AVRA", url: siteUrl, inLanguage: "es-PE", publisher: { "@id": siteUrl + "/#organization" } }
 ] }).replace(/</g, "\u003c") }} />
<Analytics />

        <main id="contenido" tabIndex={-1} className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
