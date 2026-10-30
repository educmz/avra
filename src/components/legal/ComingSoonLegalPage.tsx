import Link from "next/link";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

interface ComingSoonLegalPageProps {
  title: string;
}

export function ComingSoonLegalPage({ title }: ComingSoonLegalPageProps) {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <header className="relative isolate flex min-h-[220px] items-center overflow-hidden bg-[#295C50] py-14 sm:min-h-[290px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 88% 5%, #7CA896 0%, transparent 42%), radial-gradient(ellipse at 72% 120%, #1E473D 0%, transparent 60%)",
          }}
        />
        <Container className="relative z-10">
          <p className="mb-4 font-[family-name:var(--font-header)] text-xs font-medium uppercase tracking-[.22em] text-[#FBF4EF]/80 sm:text-sm">
            Información de Avra
          </p>
          <h1 className="max-w-[840px] font-heading text-[clamp(29px,4.6vw,68px)] font-extrabold uppercase leading-[1.03] tracking-tight text-[#FBF4EF]">
            {title}
          </h1>
        </Container>
      </header>

      <section className="bg-background py-20">
        <Container className="flex min-h-[40vh] flex-col items-start justify-center">
          <AnimatedTitle
            as="h2"
            text="Próximamente"
            className="font-heading text-[28px] font-extrabold uppercase tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
          />
          <p className="mt-6 max-w-xl text-justify text-base leading-8 text-[#302E2A]/75 sm:text-lg">
            Estamos preparando esta sección. Muy pronto encontrarás aquí la información correspondiente.
          </p>
          <Link
            href="/"
            className="avra-cta mt-9 inline-flex min-h-12 items-center rounded-xl bg-[#295C50] px-6 font-[family-name:var(--font-header)] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1D453B]"
          >
            Volver al inicio
          </Link>
        </Container>
      </section>
    </div>
  );
}
