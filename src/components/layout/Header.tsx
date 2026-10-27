"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";

import { MobileCarta } from "@/components/layout/MobileCarta";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "./socialLinks";

export function Header() {
  const [isCartaOpen, setIsCartaOpen] = useState(false);
  const closeCarta = useCallback(() => setIsCartaOpen(false), []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full bg-background">
      <Container className="flex h-[88px] w-full items-center justify-between gap-5 sm:h-24 lg:h-28">
        <Link
          href="/"
          aria-label="Avra, inicio"
          className="group relative z-10 shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <Image
            src="/images/brand/avra-wordmark-black.png"
            alt="Avra"
            width={2172}
            height={724}
            priority
            className="h-auto w-[116px] object-contain transition-transform duration-300 group-hover:scale-[1.025] sm:w-[130px] lg:w-[138px]"
          />
        </Link>

        <div className="hidden min-w-0 flex-1 justify-end lg:flex">
          <div className="flex min-w-0 items-center gap-4 xl:gap-7">
            <Navbar />
            <div className="hidden h-8 w-px bg-[#302E2A]/15 2xl:block" aria-hidden="true" />
            <div className="hidden shrink-0 items-center gap-2 2xl:flex" aria-label="Redes sociales">
              {socialLinks.map((social) => {
                const styles = "grid size-9 place-items-center rounded-full border border-[#302E2A]/10 bg-[#FF8A00] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#E67C00]";
                return social.href ? (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={styles}>
                    {social.icon}
                  </a>
                ) : (
                  <span key={social.label} role="img" aria-label={social.label} className={styles}>
                    {social.icon}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsCartaOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={isCartaOpen}
          aria-controls="mobile-navigation"
          className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FF8A00] text-white transition-colors hover:bg-[#E67C00] lg:hidden"
        >
          <Menu size={23} aria-hidden="true" />
        </button>
        <MobileCarta isOpen={isCartaOpen} onClose={closeCarta} />
      </Container>
    </header>
  );
}
