"use client";

import { useEffect, useRef } from "react";

import type { CartaCategory } from "@/data/carta/categories";
import type { CartaCategoryId } from "@/types/catalog";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface CartaCategoryNavProps {
  categories: CartaCategory[];
  activeCategory: CartaCategoryId;
  onChange: (category: CartaCategoryId) => void;
}

export function CartaCategoryNav({
  categories,
  activeCategory,
  onChange,
}: CartaCategoryNavProps) {
  const reducedMotion = useReducedMotion();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const activeEl = nav?.querySelector<HTMLElement>('[data-active="true"]');
    if (!nav || !activeEl) return;

    const navRect = nav.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();

    if (elRect.left < navRect.left + 8 || elRect.right > navRect.right - 8) {
      nav.scrollTo({
        left: nav.scrollLeft + elRect.left - navRect.left - navRect.width / 2 + elRect.width / 2,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    }
  }, [activeCategory, reducedMotion]);

  return (
    <div
      className="sticky top-0 z-30 min-w-0 max-w-full border-b border-[#E7DDD1] bg-[#FBF7F0]/95 shadow-[0_4px_14px_rgba(48,46,42,.04)] backdrop-blur-md"
      style={{ fontFamily: "var(--font-carta), 'Montserrat', system-ui, sans-serif" }}
    >
      <nav
        ref={navRef}
        aria-label="Categorías de la carta"
        className="flex min-w-0 max-w-full items-center gap-2 overflow-x-auto overscroll-x-contain px-4 py-2.5 sm:gap-3 sm:px-8 lg:justify-between lg:px-12 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => {
          const active = category.id === activeCategory;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              aria-current={active ? "true" : undefined}
              data-active={active ? "true" : undefined}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.02em] transition-[background-color,color,box-shadow,transform] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] motion-reduce:transition-none sm:px-5 sm:text-sm ${active ? "bg-[#295C50]/90 text-white shadow-[0_4px_12px_rgba(41,92,80,.13)]" : "text-[#62594E] hover:-translate-y-0.5 hover:bg-[#295C50]/10 hover:text-[#295C50]"}`}
            >
              {category.name}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
