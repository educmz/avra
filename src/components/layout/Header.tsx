"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isCartaOpen, setIsCartaOpen] = useState(false);
  const closeCarta = useCallback(() => setIsCartaOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-white">
      <Container className="flex h-[68px] items-center justify-between gap-4 sm:h-[74px] lg:h-[84px]">
        <Link href="/" aria-label="Avra, inicio" className="group relative z-10 shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295C50]">
          <Image
            src="/images/brand/avra-wordmark-black.png"
            alt="Avra"
            width={2172}
            height={724}
            priority
            className="h-auto w-[114px] object-contain transition-transform duration-200 group-hover:scale-[1.025] sm:w-[130px] xl:w-[143px]"
          />
        </Link>

        <Navbar />

        <Link
          href="/carta"
          className="hidden min-h-12 shrink-0 items-center gap-2 rounded-xl bg-[#295C50] px-5 font-[family-name:var(--font-header)] text-xs font-semibold uppercase tracking-[0.095em] text-white shadow-[0_5px_14px_rgba(41,92,80,.13)] transition-all hover:-translate-y-0.5 hover:bg-[#1D453B] xl:inline-flex"
        >
          EXPLORAR CARTA <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <button type="button" onClick={() => setIsCartaOpen(true)} aria-label="Abrir menú" aria-expanded={isCartaOpen} aria-controls="mobile-navigation" className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#295C50] text-white transition-colors hover:bg-[#1D453B] lg:hidden">
          <Menu size={23} aria-hidden="true" />
        </button>
        <MobileCarta isOpen={isCartaOpen} onClose={closeCarta} />
      </Container>
      <div className="h-[3px] w-full overflow-hidden" aria-hidden="true">
        <div className="h-full w-full bg-gradient-to-r from-[#D7DFCF] via-[#8AAE9A] to-[#D7DFCF]" />
      </div>
    </header>
  );
}
