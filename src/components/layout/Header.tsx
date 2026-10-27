"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full pt-3 sm:pt-4">
      <div className="mx-4 max-w-[1180px] sm:mx-6 lg:mx-auto">
        <div className="flex h-[64px] items-center justify-between gap-5 rounded-[18px] border border-white/10 bg-[#20502D] px-5 shadow-[0_8px_24px_rgba(25,59,31,0.16)] sm:h-[68px] sm:px-7 lg:h-[70px] lg:px-9">
          <Link href="/" aria-label="Avra, ir al inicio" className="relative z-10 flex shrink-0 items-center rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B6D79B]">
            <Image
              src="/images/brand/avra-wordmark-black.png"
              alt="Avra"
              width={2172}
              height={724}
              priority
              className="h-auto w-[102px] object-contain brightness-0 invert sm:w-[112px] xl:w-[116px]"
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
        </div>
      </div>
      <MobileCarta isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}
