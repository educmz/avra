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
  metadataBase: new URL("https://avra.pe"),

  title: {
    default: `${siteConfig.name} | Activa lo natural`,
    template: `${siteConfig.name} | %s`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  alternates: {
    canonical: "https://avra.pe",
  },

  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://avra.pe",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Activa lo natural`,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Activa lo natural`,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
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
        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
