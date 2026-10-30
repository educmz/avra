import { pageMetadata } from "@/config/seo";
import Link from "next/link";
import { ImageHero } from "@/components/sections/ImageHero";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";



export default function BlogPage() {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <ImageHero
        image="/images/blog/blog-hero.webp"
        lines={["BLOG"]}
        kicker="Nuestro"
        subtitle="Ideas, novedades y momentos para disfrutar"
        flourishColors={["#EA6F32", "#F49A64", "#C95828"]}
      />
      <section className="bg-background py-20">
        <Container className="flex min-h-[40vh] flex-col items-start justify-center">
          <AnimatedTitle as="h2" text="Próximamente" className="font-heading text-[28px] font-extrabold uppercase tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
          <p className="mt-6 max-w-xl text-justify text-base leading-8 text-[#302E2A]/75 sm:text-lg">
            Estamos preparando un espacio para compartir novedades, ideas y contenidos sobre alimentación y bienestar.
          </p>
          <Link href="/" className="avra-cta mt-9 inline-flex min-h-12 items-center rounded-xl bg-[#295C50] px-6 font-[family-name:var(--font-header)] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1D453B]">
            Volver al inicio
          </Link>
        </Container>
      </section>
    </div>
  );
}

export const metadata = pageMetadata("/blog", "Blog de Alimentación y Bienestar | AVRA", "Estamos preparando el blog de AVRA con ideas y contenidos sobre alimentación y bienestar.", false);
