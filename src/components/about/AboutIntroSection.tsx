import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export function AboutIntroSection() {
  return (
    <section aria-labelledby="about-intro-title" className="bg-background py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          <div className="min-w-0">
            <AnimatedTitle id="about-intro-title" text="MÁS QUE ALGO RICO" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-[72px] rounded-full bg-[#EA6F32]" />
            <p className="mt-5 max-w-[62ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              En Avra creemos que disfrutar algo rico también es disfrutar el momento. Creamos sabores y experiencias cercanas, pensadas para acompañarte en cada pausa del día, desde un antojo espontáneo hasta un momento para compartir. Nos mueve cuidar los detalles y encontrar nuevas maneras de llevar opciones deliciosas y prácticas a más personas.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto lg:mr-0">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-[0_16px_38px_rgba(41,92,80,.13)] sm:rounded-[28px]">
              <Image src="/images/about/equipo-avra.png" alt="Equipo de Avra" fill sizes="(min-width:1024px) 560px, 100vw" className="object-cover object-center" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
