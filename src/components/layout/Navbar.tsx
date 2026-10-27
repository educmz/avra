"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación principal"
      className={cn("hidden min-w-0 items-center justify-center gap-0.5 lg:flex xl:gap-1", className)}
    >
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
              "relative flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full px-3 xl:px-4",
              "font-[family-name:var(--font-header)] text-[12px] font-bold uppercase tracking-[0.075em] xl:text-[13px]",
              "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2",
              isActive
                ? "bg-[#FF8A00] text-[#302E2A]"
                : "text-[#302E2A] hover:bg-[#FBF4EF]/70",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
