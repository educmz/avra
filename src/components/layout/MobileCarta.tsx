"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const menuItems = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Vending saludable", href: "/maquinas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
];

interface MobileCartaProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileCarta({ isOpen, onClose }: MobileCartaProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => {
      if (desktop.matches) onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Menú de navegación" className="fixed inset-0 z-[9998] overflow-y-auto overscroll-contain bg-[#FBF4EF] text-[#302E2A]">
      <div className="mx-auto flex min-h-full w-full max-w-2xl flex-col px-5 pb-[max(24px,env(safe-area-inset-bottom))] pt-[max(16px,env(safe-area-inset-top))] sm:px-9">
        <div className="flex min-h-[58px] items-center justify-between">
          <Link href="/" onClick={onClose} aria-label="Avra, ir al inicio" className="flex w-[116px] items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295C50] sm:w-[130px]">
            <Image src="/images/brand/avra-wordmark-black.png" alt="Avra" width={2172} height={724} priority className="h-auto w-full object-contain" />
          </Link>
          <button type="button" onClick={onClose} aria-label="Cerrar menú" className="grid size-11 place-items-center rounded-xl border border-[#295C50]/20 bg-white/50 text-[#295C50] transition-colors hover:bg-[#E2EAE1] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295C50]">
            <X size={21} aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 h-[2px] w-full bg-gradient-to-r from-[#D7DFCF] via-[#8AAE9A] to-[#D7DFCF]" aria-hidden="true" />

        <nav aria-label="Navegación principal" className="mt-6">
          <ul className="space-y-1.5">
            {menuItems.map((item) => {
              const isActive = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link href={item.href} onClick={onClose} aria-current={isActive ? "page" : undefined}
                    className={`group relative flex min-h-[56px] items-center justify-between gap-4 rounded-xl px-4 py-3 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] ${isActive ? "bg-[#E2EAE1] text-[#205247]" : "text-[#35443E] hover:bg-[#EBEEE7] hover:text-[#205247]"}`}>
                    <span className="font-[family-name:var(--font-header)] text-[15px] font-semibold uppercase leading-snug tracking-[.095em] sm:text-[17px]">{item.label}</span>
                    <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" className={isActive ? "text-[#295C50]" : "text-[#295C50]/50 transition-colors group-hover:text-[#295C50]"} />
                    {isActive && <span aria-hidden="true" className="absolute inset-x-4 bottom-1.5 h-[2px] origin-left rounded-full bg-[#295C50] animate-[avra-nav-underline_650ms_cubic-bezier(0.22,1,0.36,1)_both] motion-reduce:animate-none" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </div>
  );
}
