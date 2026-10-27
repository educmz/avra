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
      <div className="border-b border-[#302E2A]/10 bg-[#FBF4EF]/95 backdrop-blur-xl">
        <Container className="flex h-[88px] items-center justify-between gap-5 sm:h-24 lg:h-28">
          <Link href="/" aria-label="Avra, ir al inicio" className="relative z-10 flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00]">
            <Image
              src="/images/brand/avra-wordmark-black.png"
              alt="Avra"
              width={2172}
              height={724}
              priority
              className="h-auto w-[116px] object-contain sm:w-[132px] xl:w-[148px]"
            />
          </Link>

          <div className="ml-auto hidden min-w-0 items-center gap-5 lg:flex xl:gap-8">
            <Navbar />
            <Link
              href="/contacto"
              className="group inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full bg-[#302E2A] px-5 py-3 text-[13px] font-bold text-white transition-colors duration-200 hover:bg-[#FF8A00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] xl:px-6"
            >
              Contáctanos
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" className="transition-transform duration-200 group-hover:rotate-45 motion-reduce:transition-none" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-[#302E2A]/15 bg-white/65 px-4 text-sm font-bold text-[#302E2A] transition-colors hover:border-[#FF8A00] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] lg:hidden"
          >
            Menú <Menu size={19} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </Container>
      </div>
      <MobileCarta isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
