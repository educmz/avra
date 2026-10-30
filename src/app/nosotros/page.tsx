import { pageMetadata } from "@/config/seo";
import { AboutBanner } from "@/components/about/AboutBanner";
import { AboutIntroSection } from "@/components/about/AboutIntroSection";
import { EssenceSection } from "@/components/about/EssenceSection";
import { SocialSection } from "@/components/about/SocialSection";



export default function AboutPage() {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <AboutBanner />
      <AboutIntroSection />
      <EssenceSection />
      <SocialSection />
    </div>
  );
}

export const metadata = pageMetadata("/nosotros", "Nosotros | Conoce AVRA", "Conoce AVRA, nuestra historia y nuestra propuesta de alimentación saludable, práctica y natural.", true);
