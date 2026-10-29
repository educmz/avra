import { cn } from "@/lib/utils";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

export function SectionTitle({ eyebrow, title, description, className }: { eyebrow?: string; title: string; description?: string; className?: string }) {
  return (
    <header className={cn("max-w-2xl", className)}>
      <AnimatedTitle text={title} className="text-balance text-[28px] font-black uppercase tracking-[-0.04em] sm:text-[34px] lg:text-[40px]" />
      {description && <p className="mt-4 text-pretty leading-7 text-black/65">{description}</p>}
    </header>
  );
}
