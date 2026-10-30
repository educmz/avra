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
export const metadata = pageMetadata("/", "AVRA | Alimentos Saludables y Máquinas Vending", "Descubre AVRA: alimentos y bebidas saludables para tu día a día. Conoce nuestras máquinas vending y lleva opciones saludables a tu espacio.", true);
