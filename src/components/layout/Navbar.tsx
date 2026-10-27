"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={cn("hidden items-center gap-1 rounded-full border border-[#302E2A]/10 bg-[#F4F0E8] p-1.5 lg:flex", className)} aria-label="Navegación principal">
      {navigationItems.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-4",
              "font-[family-name:var(--font-heading)] text-[15px] font-semibold tracking-[-0.015em] xl:px-5 xl:text-base",
              "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
              isActive
                ? "bg-[#FF8A00] text-[#302E2A] shadow-sm"
                : "text-[#302E2A]/75 hover:bg-white/80 hover:text-[#302E2A]",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
