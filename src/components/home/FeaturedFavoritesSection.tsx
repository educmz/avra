"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    setCanPrev(track.scrollLeft > 2);
    setCanNext(track.scrollLeft < maxScroll - 2);
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-favorite-card]"));
    const left = track.scrollLeft;
    let closest = 0;
    let distance = Infinity;
    cards.forEach((card, index) => {
      const diff = Math.abs(card.offsetLeft - track.offsetLeft - left);
      if (diff < distance) { distance = diff; closest = index; }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new ResizeObserver(updateActive);
    observer.observe(track);
    updateActive();
    return () => observer.disconnect();
  }, [updateActive]);

  const navigate = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-favorite-card]");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const visibleCount = Math.max(1, Math.floor((track.clientWidth + gap + 1) / step));
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const target = Math.max(0, Math.min(maxScroll, track.scrollLeft + direction * visibleCount * step));
    track.scrollTo({ left: target, behavior: reducedMotion ? "instant" : "smooth" });
  }, [reducedMotion]);

  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="featured-favorites-title" className="overflow-hidden bg-[#295C50] py-12 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-7 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:items-center lg:gap-10">
          <div>
            <AnimatedTitle id="featured-favorites-title" text="Nuestros imperdibles" className="font-heading text-[28px] font-extrabold uppercase leading-tight sm:text-[34px] lg:text-[40px]" />
            <div className="mt-4 h-[4px] w-[96px] rounded-full bg-[#F9B444]" />
            <p className="mt-4 max-w-sm text-justify text-base leading-7 text-white/85 sm:text-lg sm:leading-8">Sabores que enamoran desde el primer bocado y el primer sorbo.</p>
          </div>
          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center justify-end gap-2.5 sm:gap-3">
              <Link href="/carta" className="avra-cta avra-cta--light mr-auto sm:mr-2 sm:ml-auto">
                <span>Ver toda la carta</span> <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <button type="button" onClick={() => navigate(-1)} disabled={!canPrev} aria-label="Ver producto anterior" className="grid size-11 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#295C50] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:transform-none"><ArrowLeft size={20} /></button>
              <button type="button" onClick={() => navigate(1)} disabled={!canNext} aria-label="Ver producto siguiente" className="grid size-11 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#295C50] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transform-none disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:transform-none"><ArrowRight size={20} /></button>
            </div>
            <div ref={trackRef} onScroll={updateActive} className="relative flex min-w-0 snap-x snap-mandatory gap-4 overflow-x-auto pb-5 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {featured.map((product, index) => (
                <motion.div key={product.id} data-favorite-card className="w-full shrink-0 snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-48px)/4)]"
                  animate={reducedMotion ? undefined : { y: index === active ? -5 : 0 }}
                  transition={{ type: "spring", stiffness: 280, damping: 23 }}>
                  <Link href={`/carta#carta-${product.category}`} className="group flex min-h-[230px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#FBF4EF] p-4 text-center text-[#302E2A] shadow-[0_12px_28px_rgba(15,43,35,.18)] transition-shadow duration-300 hover:shadow-[0_20px_38px_rgba(15,43,35,.27)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9B444] sm:min-h-[244px]">
                    <div className="relative mx-auto h-[145px] w-full max-w-[180px] sm:h-[155px]">
                      <Image src={product.image} alt={product.name} fill sizes="(min-width:1024px) 220px, (min-width:640px) 45vw, 90vw" className="object-contain transition-transform duration-500 group-hover:scale-110 motion-reduce:transition-none" />
                    </div>
                    <h3 className="mt-3 w-full text-center font-heading text-sm font-extrabold uppercase leading-tight">{product.name}</h3>
                    <p className="mt-1 w-full text-center text-xs text-[#302E2A]/65">{product.category === "tes-helados" ? "Té helado" : product.category === "frappes" ? "Frappé" : product.category === "waffles" ? "Waffle" : product.category === "sandwiches" ? "Sándwich" : "Smoothie"}</p>
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
