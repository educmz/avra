import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export function TeamSection() {
  return (
    <section aria-labelledby="about-team-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <AnimatedTitle id="about-team-title" text="UN EQUIPO QUE DISFRUTA LO QUE HACE" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <div aria-hidden="true" className="mt-5 h-[3px] w-14 rounded-full bg-[#EA6F32]" />
            <p className="mt-6 max-w-[54ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              Detrás de Avra hay personas que creen en los detalles: en elegir con cuidado, preparar con dedicación y buscar maneras más sencillas de compartir lo que nos gusta.
            </p>
            <p className="mt-4 max-w-[54ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              Seguimos aprendiendo y construyendo juntos una propuesta que combina sabor, cercanía y practicidad, con ganas de mejorar cada experiencia.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#E8F0DE] sm:rounded-[28px]">
            <Image src="/images/about/equipo-avra.png" alt="Equipo de Avra" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover object-center" />
          </div>
        </div>
      </Container>
    </section>
  );
}
