import type { Metadata } from "next";

import { AboutBanner } from "@/components/about/AboutBanner";
import { TeamSection } from "@/components/about/TeamSection";
import { EssenceSection } from "@/components/about/EssenceSection";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { SocialSection } from "@/components/about/SocialSection";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia, esencia y propuesta que hay detrás de Avra.",
};

export default function AboutPage() {
  return (
    <div
      className="bg-background pt-[76px] sm:pt-[82px] lg:pt-24"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
      }}
    >
      <AboutBanner />
      <AboutIntroSection />
      <TeamSection />
      <EssenceSection />
      <SocialSection />   
    </div>
  );
}
