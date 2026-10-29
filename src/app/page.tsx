import { FeaturedFavoritesSection } from "@/components/home/FeaturedFavoritesSection";
import { CravingsSection } from "@/components/home/CravingsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HealthyProductsSection } from "@/components/home/HealthyProductsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { VendingSection } from "@/components/home/VendingSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CravingsSection />
      <FeaturedFavoritesSection />
      <VendingSection />
      <HealthyProductsSection />
      <FinalCtaSection />
    </main>
  );
}