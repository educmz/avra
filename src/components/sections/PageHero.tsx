import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function PageHero({ title, description, eyebrow = "Contenido temporal" }: { title: string; description: string; eyebrow?: string }) {
  return (
    <section className="border-b border-black/10 bg-background py-16 sm:py-24">
      <Container><Badge>{eyebrow}</Badge><h1 className="mt-6 max-w-4xl text-balance text-[28px] font-black tracking-[-0.055em] sm:text-[34px] lg:text-[40px]">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">{description}</p></Container>
    </section>
  );
}
