"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cartaProducts } from "@/data/carta/products";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const featured = cartaProducts.filter((product) => product.featured && product.available);

export function FeaturedFavoritesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track || !featured.length) return;
    const next = (index + featured.length) % featured.length;
    const card = track.querySelectorAll<HTMLElement>("[data-favorite-card]")[next];
    if (!card) return;
    setActive(next);
    track.scrollTo({
      left: card.offsetLeft - track.offsetLeft,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }, [reducedMotion]);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-favorite-card]"));
    if (!cards.length) return;
    const left = track.scrollLeft;
    let closest = 0;
    let distance = Infinity;
    cards.forEach((card, index) => {
      const cardLeft = card.offsetLeft - track.offsetLeft;
      const diff = Math.abs(cardLeft - left);
      if (diff < distance) { distance = diff; closest = index; }
    });
    setActive(closest);
  }, []);

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="featured-favorites-title" className="overflow-hidden bg-[#295C50] py-12 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div>
            <AnimatedTitle id="featured-favorites-title" text="Nuestros imperdibles" className="font-heading text-[28px] font-extrabold uppercase leading-tight sm:text-[34px] lg:text-[40px]" />
            <div className="mt-4 h-[3px] w-14 rounded-full bg-[#F9B444]" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/80">Descubre algunos de los productos que todos quieren.</p>
            <p className="mt-5 text-xs font-bold tracking-[0.18em] text-white/65" aria-label="Producto seleccionado">
              {String(active + 1).padStart(2, "0")} / {String(featured.length).padStart(2, "0")}
            </p>
          </div>
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-end gap-2.5 sm:gap-3">
              <Link href="/carta" className="avra-cta avra-cta--light mr-auto sm:mr-2 sm:ml-auto">
                Ver toda la carta <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <button type="button" onClick={() => goTo(active - 1)} aria-label="Ver producto anterior" className="grid size-11 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#295C50] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none"><ArrowLeft size={20} /></button>
              <button type="button" onClick={() => goTo(active + 1)} aria-label="Ver producto siguiente" className="grid size-11 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#295C50] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none"><ArrowRight size={20} /></button>
            </div>
            <div ref={trackRef} onScroll={updateActive} className="relative flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featured.map((product, index) => (
                <motion.div key={product.id} data-favorite-card className="w-full shrink-0 snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]"
                  animate={reducedMotion ? undefined : { y: index === active ? -5 : 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 23 }}>
                  <Link href={`/carta#carta-${product.category}`} className="group flex min-h-[230px] flex-col overflow-hidden rounded-2xl bg-[#FFFDFC] p-4 text-center text-[#302E2A] shadow-[0_12px_28px_rgba(15,43,35,.18)] transition-shadow duration-300 hover:shadow-[0_20px_38px_rgba(15,43,35,.27)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9B444] sm:min-h-[244px]">
                    <div className="relative mx-auto aspect-[4/3] w-full">
                      <Image src={product.image} alt={product.name} fill sizes="(min-width:1024px) 220px, (min-width:640px) 45vw, 90vw" className="object-contain transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none" />
                    </div>
                    <h3 className="mt-3 font-heading text-sm font-extrabold uppercase leading-tight">{product.name}</h3>
                    <p className="mt-1 text-xs text-[#302E2A]/65">{product.category === "tes-helados" ? "Té helado" : product.category === "frappes" ? "Frappé" : product.category === "waffles" ? "Waffle" : product.category === "sandwiches" ? "Sándwich" : "Smoothie"}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
