import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export function AboutIntroSection() {
  return (
    <section aria-labelledby="about-intro-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0">
            <AnimatedTitle id="about-intro-title" text="MÁS QUE ALGO RICO" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
            <p className="mt-6 max-w-[53ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              En Avra creemos que los mejores momentos se disfrutan con algo rico. Por eso creamos sabores y experiencias prácticas, cercanas y pensadas para acompañarte en cada pausa del día.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[480px] px-3 pb-3 lg:ml-auto lg:mr-0">
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-[72%] w-[78%] rounded-[28px] bg-[#DDE9D9]" />
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-[0_16px_38px_rgba(41,92,80,.13)] sm:rounded-[28px]">
              <Image src="/images/about/equipo-avra.webp" alt="Equipo de Avra" fill sizes="(min-width:1024px) 480px, 100vw" className="object-cover object-center" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
