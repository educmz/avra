"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full pt-3 sm:pt-4">
      <div>
        <Container className="flex h-[68px] items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-[#20502D]/95 px-4 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:h-[72px] sm:px-6 lg:h-[76px]">
          <Link href="/" aria-label="Avra, ir al inicio" className="relative z-10 flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6D79B]">
            <Image
              src="/images/brand/avra-wordmark-black.png"
              alt="Avra"
              width={2172}
              height={724}
              priority
              className="h-auto w-[106px] object-contain brightness-0 invert sm:w-[118px] xl:w-[126px]"
            />
          </Link>

          <Navbar className="ml-auto" />

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 text-sm font-bold text-white transition-colors hover:border-[#FF8A00] hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8A00] lg:hidden"
          >
            Menú <Menu size={19} strokeWidth={1.9} aria-hidden="true" />
          </button>
        </Container>
      </div>
      <MobileCarta isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
