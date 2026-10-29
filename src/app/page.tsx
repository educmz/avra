import { FeaturedFavoritesSection } from "@/components/home/FeaturedFavoritesSection";
import { CravingsSection } from "@/components/home/CravingsSection";
import { EssencePreviewSection } from "@/components/home/EssencePreviewSection";
import { HeroSection } from "@/components/home/HeroSection";
import { VendingSection } from "@/components/home/VendingSection";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <CravingsSection />
      <FeaturedFavoritesSection />
      <VendingSection />
      <EssencePreviewSection />
    </main>
  );
}