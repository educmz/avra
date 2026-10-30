import { pageMetadata } from "@/config/seo";

import { CartaCatalog } from "@/components/carta/CartaCatalog";



export default function CartaPage() {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <CartaCatalog />
    </div>
  );
}

export const metadata = pageMetadata("/carta", "Carta de Alimentos y Bebidas Saludables | AVRA", "Explora la carta de AVRA y conoce nuestra selección de alimentos, snacks y bebidas saludables para disfrutar en tu día a día.", true);
