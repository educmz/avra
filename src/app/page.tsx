import { FeaturedFavoritesSection } from "@/components/home/FeaturedFavoritesSection";
import { CravingsSection } from "@/components/home/CravingsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HealthyProductsSection } from "@/components/home/HealthyProductsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { VendingSection } from "@/components/home/VendingSection";

function SectionDivider() {
  return (
    <div aria-hidden="true" className="bg-background px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 py-1">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#295C50]/20" />
        <span className="size-1.5 rounded-full bg-[#EA6F32]/70" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#295C50]/20" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <CravingsSection />
      <SectionDivider />
      <FeaturedFavoritesSection />
      <SectionDivider />
      <VendingSection />
      <SectionDivider />
      <HealthyProductsSection />
      <SectionDivider />
      <FinalCtaSection />
    </main>
  );
}