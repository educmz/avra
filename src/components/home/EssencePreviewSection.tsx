import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";

export function EssencePreviewSection() {
  return (
    <section aria-labelledby="home-essence-title" className="bg-background py-12 sm:py-16">
      <Container>
        <div className="relative isolate min-h-[340px] overflow-hidden rounded-2xl bg-[#E9F0E3] sm:min-h-[365px] lg:min-h-[380px]">
          <Image
            src="/images/about/about-hero.webp"
            alt="Ambiente y esencia de Avra"
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#E9F0E3] via-[#E9F0E3]/95 via-[42%] to-transparent" />
          <div className="relative z-10 flex min-h-[340px] max-w-[620px] flex-col justify-center p-6 sm:min-h-[365px] sm:p-9 lg:min-h-[380px] lg:p-12">
            <p className="font-[family-name:var(--font-script)] text-[26px] leading-tight text-[#EA6F32] sm:text-[30px]">Más que algo rico</p>
            <h2 id="home-essence-title" className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-tight tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]">La esencia Avra</h2>
            <span aria-hidden="true" className="mt-4 h-[3px] w-12 rounded-full bg-[#EA6F32]" />
            <p className="mt-4 max-w-[43ch] text-sm leading-6 text-[#302E2A]/80 sm:text-base sm:leading-7">
              Creemos en los pequeños momentos que hacen la vida mejor. Productos naturales, experiencias auténticas y un compromiso con tu bienestar.
            </p>
            <Link href="/nosotros" className="mt-6 inline-flex min-h-11 w-fit items-center gap-3 rounded-full bg-[#295C50] px-6 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1D453B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50]">
              Conoce Avra <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
