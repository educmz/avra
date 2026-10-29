import type { Metadata } from "next";
import { AboutBanner } from "@/components/about/AboutBanner";
import { TeamSection } from "@/components/about/TeamSection";
import { EssenceSection } from "@/components/about/EssenceSection";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { SocialSection } from "@/components/about/SocialSection";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce la historia, esencia y propuesta que hay detrás de Avra.",
};

export default function AboutPage() {
  return (
    <main className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <AboutBanner />
      <AboutIntroSection />
      <TeamSection />
      <EssenceSection />
      <SocialSection />
    </main>
  );
}
