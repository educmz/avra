import type { Metadata } from "next";

import { CartaCatalog } from "@/components/carta/CartaCatalog";

export const metadata: Metadata = {
  title: "Carta",
};

export default function CartaPage() {
  return (
    <div className="bg-background pt-[76px] sm:pt-[82px] lg:pt-24">
      <CartaCatalog />
    </div>
  );
}
