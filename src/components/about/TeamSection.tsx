import Image from "next/image";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import {
  AboutImage,
  AboutItem,
  AboutReveal,
} from "@/components/about/AboutMotion";

export function TeamSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:gap-12 lg:gap-16">
          {/* TEXTO */}
          <AboutReveal
            className="w-full sm:w-[44%] lg:w-[42%]"
            amount={0.5}
          >
            <AnimatedTitle
              text={"Un equipo que\ndisfruta lo que hace"}
              className="mt-4 text-[28px] font-extrabold uppercase tracking-[0.01em] text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
          </AboutReveal>

          {/* IMAGEN */}
          <AboutReveal
            className="relative w-full sm:w-[56%] lg:w-[58%]"
            amount={0.25}
          >
            {/* Decoración trasera */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-7 -left-7 z-0 hidden h-28 w-40 rounded-2xl bg-[#F6C9AC] sm:block"
            />

            <AboutImage
              hover
              className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#F3EADF] shadow-[0_30px_70px_-32px_rgba(48,46,42,0.35)] sm:rounded-3xl"
            >
              <Image
                src="/images/about/equipo-avra.webp"
                alt="Equipo de Avra"
                fill
                priority
                sizes="(max-width: 639px) 100vw, 58vw"
                className="object-cover object-center"
              />
            </AboutImage>
          </AboutReveal>
        </div>
      </Container>
    </section>
  );
}
