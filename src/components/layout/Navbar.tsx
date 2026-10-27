"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden items-center gap-0.5 lg:flex xl:gap-1", className)} aria-label="Navegación principal">
      {navigationItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg px-3 text-[13px] font-bold tracking-[-.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A00] xl:px-4 xl:text-sm",
              active
                ? "bg-[#FFF0D7] text-[#3D2A15]"
                : "text-[#3E3E3E] hover:bg-[#F6F6F4] hover:text-[#151515]"
            )}
          >
            {item.label}
            {active && <span aria-hidden="true" className="absolute bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#FF8A00]" />}
          </Link>
        );
      })}
    </nav>
  );
}
