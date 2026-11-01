import { pageMetadata } from "@/config/seo";
import { FeaturedFavoritesSection } from "@/components/home/FeaturedFavoritesSection";
import { CravingsSection } from "@/components/home/CravingsSection";
import { EssencePreviewSection } from "@/components/home/EssencePreviewSection";
import { HeroSection } from "@/components/home/HeroSection";
import { VendingSection } from "@/components/home/VendingSection";

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <CravingsSection />
      <FeaturedFavoritesSection />
      <VendingSection />
      <EssencePreviewSection />
    </div>
  );
}
export const metadata = pageMetadata("/", "Avra | Activa lo natural", "Avra ofrece una carta de alimentos y bebidas para disfrutar cada día: smoothies, waffles, sándwiches y más. Descubre también nuestro vending saludable.", true);
