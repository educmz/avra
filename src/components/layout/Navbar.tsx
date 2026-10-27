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
              "relative inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-3.5 text-[13px] font-semibold tracking-[-.01em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A00] xl:px-4 xl:text-sm",
              active
                ? "bg-[#FF8A00]/12 text-[#A65300]"
                : "text-[#302E2A]/75 hover:bg-[#302E2A]/5 hover:text-[#302E2A]"
            )}
          >
            {item.label}
            {active && <span aria-hidden="true" className="absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#FF8A00]" />}
          </Link>
        );
      })}
    </nav>
  );
}
