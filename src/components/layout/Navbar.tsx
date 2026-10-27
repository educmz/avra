"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden items-center gap-1 lg:flex xl:gap-2", className)} aria-label="Navegación principal">
      {navigationItems.map((item) => {
        const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative inline-flex min-h-10 shrink-0 items-center justify-center rounded-none px-3 text-[14px] font-semibold tracking-[0.005em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B6D79B] xl:px-4 xl:text-[14px]",
              active
                ? "text-white"
                : "text-white/85 hover:text-white"
            )}
          >
            {item.label}
            {active && <span aria-hidden="true" className="absolute bottom-[2px] left-3 right-3 h-[2px] rounded-full bg-[#B6D79B]" />}
          </Link>
        );
      })}
    </nav>
  );
}
