"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cartaProducts } from "@/data/carta/products";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

const featured = cartaProducts.filter((product) => product.featured === true && product.available);

export function FeaturedFavoritesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  function navigate(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-favorite-card]");
    const distance = (card?.getBoundingClientRect().width ?? 200) + 14;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  }

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="featured-favorites-title" className="bg-background py-12 text-[#302E2A] sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-8">
          <div>
            <AnimatedTitle id="featured-favorites-title" text="Nuestros imperdibles" className="mt-1 font-heading text-[28px] font-extrabold uppercase leading-tight sm:text-[34px] lg:text-[40px]" />
            <div className="mt-3 h-[3px] w-12 rounded-full bg-[#EA6F32]" />
            <p className="mt-3 max-w-sm text-sm leading-6 text-[#302E2A]/75">Descubre algunos de los productos que todos quieren.</p>
          </div>
          <div className="min-w-0">
            <div className="mb-4 flex items-center justify-end gap-3">
              <Link href="/carta" className="avra-cta mr-auto sm:mr-2 sm:ml-auto">
                Ver toda la carta <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <button type="button" onClick={() => navigate(-1)} aria-label="Ver productos anteriores" className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#295C50] shadow-sm transition hover:bg-[#F8FCF4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50]"><ArrowLeft size={20} /></button>
              <button type="button" onClick={() => navigate(1)} aria-label="Ver productos siguientes" className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#295C50] shadow-sm transition hover:bg-[#F8FCF4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50]"><ArrowRight size={20} /></button>
            </div>
            <div ref={trackRef} className="flex min-w-0 snap-x snap-mandatory gap-3.5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featured.map((product) => (
                <Link
                  key={product.id}
                  data-favorite-card
                  href={`/carta#carta-${product.category}`}
                  className="group flex w-[165px] shrink-0 snap-start flex-col overflow-hidden rounded-xl bg-white/90 p-3 text-center shadow-[0_5px_20px_rgba(48,46,42,.05)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(48,46,42,.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] motion-reduce:transform-none sm:w-[185px] lg:w-[175px] xl:w-[190px]"
                >
                  <div className="relative mx-auto aspect-[4/3] w-full">
                    <Image src={product.image} alt={product.name} fill sizes="(min-width:1024px) 185px, (min-width:640px) 185px, 165px" className="object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none" />
                  </div>
                  <h3 className="mt-3 font-heading text-sm font-extrabold uppercase leading-tight">{product.name}</h3>
                  <p className="mt-1 text-xs text-[#302E2A]/65">{product.category === "tes-helados" ? "Té helado" : product.category === "frappes" ? "Frappé" : product.category === "waffles" ? "Waffle" : product.category === "sandwiches" ? "Sándwich" : "Smoothie"}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
