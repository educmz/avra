"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Navegación principal" className={cn("hidden min-w-0 items-center justify-center gap-1 lg:flex", className)}>
      {navigationItems.map((item) => {
        const isActive = item.href === "/"
          ? pathname === "/"
          : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "relative flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-lg px-3 xl:px-4",
              "font-[family-name:var(--font-header)] text-[12px] font-semibold uppercase tracking-[0.105em] xl:text-[13px]",
              "transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50]",
              isActive
                ? "bg-[#E2EAE1] text-[#205247]"
                : "text-[#35443E] hover:bg-[#EBEEE7] hover:text-[#205247]",
            )}
          >
            {item.label}
            {isActive && <span aria-hidden="true" className="absolute inset-x-4 bottom-1 h-[2px] rounded-full bg-[#295C50]" />}
          </Link>
        );
      })}
    </nav>
  );
}
