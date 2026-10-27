import Image from "next/image";
import Link from "next/link";

import { cartaCategories } from "@/data/carta/categories";
import { ArrowUpRight } from "lucide-react";
import type { CartaCategoryId } from "@/types/catalog";
import { Container } from "@/components/ui/Container";
import { HomeHeading } from "./HomeHeading";

const visuals: Record<CartaCategoryId, { background: string; image: string; alt: string }> = {
  smoothies: {
    background: "#DDEBE1",
    image: "/images/carta/naranja-fresa.webp",
    alt: "Naranja Fresa de Avra",
  },
  "tes-helados": {
    background: "#E8EDCC",
    image: "/images/carta/jamaica.webp",
    alt: "Té helado Jamaica de Avra",
  },
  "bebidas-calientes": {
    background: "#F0DFCE",
    image: "/images/carta/chocolate-caliente.webp",
    alt: "Chocolate Caliente de Avra",
  },
  frappes: {
    background: "#DFEBE9",
    image: "/images/carta/mocaccino.webp",
    alt: "Frappé Mocaccino de Avra",
  },
  waffles: {
    background: "#F6E9B8",
    image: "/images/carta/waffle.webp",
    alt: "Waffle de Avra",
  },
  sandwiches: {
    background: "#DFEACF",
    image: "/images/carta/mixto.png",
    alt: "Sándwich Mixto Ninfit de Avra",
  },
  tostones: {
    background: "#F5D6C2",
    image: "/images/carta/toston-benedictino.webp",
    alt: "Tostón Benedictino de Avra",
  },
  pizzas: {
    background: "#DCEEF2",
    image: "/images/carta/pizza-hawaiana.webp",
    alt: "Pizza Hawaiana de Avra",
  },
};

export function CravingsSection() {
  const featured = cartaCategories.filter((category) => ["smoothies", "tes-helados", "sandwiches", "tostones"].includes(category.id));

  return (
    <section aria-labelledby="cravings-title" className="bg-[#FFFDF0] py-16 sm:py-20 lg:py-24">
      <Container>
        <HomeHeading id="cravings-title" eyebrow="Encuentra tu favorito">
          Sabores que alegran tu día
        </HomeHeading>

        <p className="mb-8 max-w-[60ch] text-base leading-7 text-[#4B664E]">Desde bebidas refrescantes hasta opciones para acompañar tu rutina. Mira lo que tenemos preparado.</p>
        <div className="grid gap-5">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {featured.map((category) => {
              const visual = visuals[category.id];

              return (
                <Link
                  key={category.id}
                  href={`/carta#carta-${category.id}`}
                  className="group flex aspect-[4/5] sm:aspect-[3/4] min-w-0 flex-col items-center overflow-hidden rounded-[24px] border border-[#24572E]/10 shadow-[0_2px_12px_rgba(0,0,0,.06)] px-3 pb-4 pt-5 text-[#203F2A] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(18,62,28,.12)] motion-reduce:transform-none sm:px-4 sm:pb-5 sm:pt-6"
                  style={{ backgroundColor: visual.background }}
                >
                  <h3 className="relative z-10 flex min-h-[2.3em] items-center justify-center text-center font-sans text-[clamp(1.15rem,2vw,1.75rem)] font-bold leading-[1.12]">
                    {category.name}
                  </h3>
                  <div className="relative mt-3 flex min-h-0 w-full flex-1 items-center justify-center">
                    <div className="relative h-[72%] w-[72%]">
                      <Image
                        src={visual.image}
                        alt={visual.alt}
                        fill
                        sizes="(min-width: 1280px) 180px, (min-width: 1024px) 26vw, 34vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
        <div className="mt-8 flex justify-center"><Link href="/carta" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#205C36] px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-[#16472A]">Ver toda la carta <ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </Container>
    </section>
  );
}
