"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowUpRight, Menu, Leaf } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="border-b border-[#E9E9E6] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.035)]">
        <Container className="flex h-[66px] items-center justify-between gap-4 sm:h-[70px] lg:h-[74px]">
          <Link href="/" aria-label="Avra, ir al inicio" className="relative z-10 flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00]">
            <Image
              src="/images/brand/avra-wordmark-black.png"
              alt="Avra"
              width={2172}
              height={724}
              priority
              className="h-auto w-[106px] object-contain sm:w-[118px] xl:w-[126px]"
            />
          </Link>

          <div className="ml-auto hidden min-w-0 items-center gap-3 lg:flex xl:gap-5">
            <Navbar />
            <Link
              href="/maquinas"
              className="group inline-flex min-h-10 shrink-0 items-center gap-2 rounded-full bg-[#202D24] px-5 py-2 text-[13px] font-bold text-white transition-all duration-200 hover:bg-[#354B39] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] xl:px-6"
            >
              <Leaf size={16} strokeWidth={2} aria-hidden="true" className="text-[#B9D597]" />
              Máquinas saludables
              <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" className="transition-transform duration-200 group-hover:rotate-45 motion-reduce:transition-none" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 bg-[#F7F8F5] px-3 text-sm font-bold text-[#242424] transition-colors hover:border-[#FF8A00] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] lg:hidden"
          >
            Menú <Menu size={19} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </Container>
      </div>
      <MobileCarta isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
