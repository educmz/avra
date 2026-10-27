"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="border-b border-black/10 bg-white">
        <Container className="flex h-[64px] items-center justify-between gap-4 sm:h-[68px] lg:h-[72px]">
          <Link href="/" aria-label="Avra, ir al inicio" className="relative z-10 flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00]">
            <Image
              src="/images/brand/avra-wordmark-black.png"
              alt="Avra"
              width={2172}
              height={724}
              priority
              className="h-auto w-[100px] object-contain sm:w-[112px] xl:w-[120px]"
            />
          </Link>

          <div className="ml-auto hidden min-w-0 items-center gap-3 lg:flex xl:gap-5">
            <Navbar />
            <Link
              href="/carta"
              className="group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-xl bg-[#FF8A00] px-4 py-2 text-[13px] font-extrabold text-[#21190F] transition-colors duration-200 hover:bg-[#F5A328] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] xl:px-6"
            >
              Ver carta
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" className="transition-transform duration-200 group-hover:rotate-45 motion-reduce:transition-none" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-black/10 bg-[#F6F6F4] px-3 text-sm font-bold text-[#242424] transition-colors hover:border-[#FF8A00] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] lg:hidden"
          >
            Menú <Menu size={19} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </Container>
      </div>
      <MobileCarta isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
