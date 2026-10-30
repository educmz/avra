import Link from "next/link";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

interface ComingSoonLegalPageProps {
  title: string;
}

export function ComingSoonLegalPage({ title }: ComingSoonLegalPageProps) {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <section className="bg-background py-20 sm:py-24">
        <Container className="flex min-h-[50vh] flex-col items-start justify-center">
          <p className="mb-5 font-[family-name:var(--font-header)] text-xs font-semibold uppercase tracking-[.14em] text-[#295C50] sm:text-sm">
            {title}
          </p>
          <AnimatedTitle
            as="h1"
            text={title}
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
