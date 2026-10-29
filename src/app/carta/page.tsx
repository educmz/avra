import type { Metadata } from "next";

import { CartaCatalog } from "@/components/carta/CartaCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <CartaCatalog />
    </div>
  );
}
