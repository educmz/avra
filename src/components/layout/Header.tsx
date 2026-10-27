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
    <header className="absolute inset-x-0 top-0 z-50 w-full border-b border-[#302E2A]/10 bg-[#F3CC8F]">
      <Container className="flex h-[88px] items-center justify-between gap-4 sm:h-24 lg:h-28">
        <Link
          href="/"
          aria-label="Avra, inicio"
          className="group relative z-10 shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#302E2A]"
        >
          <Image
            src="/images/brand/avra-wordmark-black.png"
            alt="Avra"
            width={2172}
            height={724}
            priority
            className="h-auto w-[112px] object-contain transition-transform duration-200 group-hover:scale-[1.025] sm:w-[128px] xl:w-[142px]"
          />
        </Link>

        <Navbar />

        <Link
          href="/carta"
          className="hidden min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#302E2A] px-5 font-[family-name:var(--font-header)] text-[12px] font-bold uppercase tracking-[0.08em] text-[#FBF4EF] transition-colors hover:bg-[#51473D] xl:inline-flex"
        >
          VER CARTA <ArrowUpRight size={17} aria-hidden="true" />
        </Link>

        <button
          type="button"
          onClick={() => setIsCartaOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isCartaOpen}
          aria-controls="mobile-navigation"
          className="grid size-12 shrink-0 place-items-center rounded-full bg-[#302E2A] text-white transition-colors hover:bg-[#51473D] lg:hidden"
        >
          <Menu size={23} aria-hidden="true" />
        </button>
        <MobileCarta isOpen={isCartaOpen} onClose={closeCarta} />
      </Container>
    </header>
  );
}
