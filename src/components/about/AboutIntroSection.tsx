import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export function AboutIntroSection() {
  return (
    <section aria-labelledby="about-intro-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 rounded-[28px] bg-[#EAF0E4]/65 p-6 sm:gap-10 sm:p-9 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,.88fr)] lg:gap-12 lg:p-12">
          <div className="min-w-0">
            <AnimatedTitle id="about-intro-title" text="MÁS QUE ALGO RICO" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
            <p className="mt-6 max-w-[59ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              Avra nace de una idea sencilla: hacer que disfrutar algo rico sea también una oportunidad para disfrutar el momento. Creemos en esas pequeñas pausas que hacen bien, desde compartir una comida y conversar sin apuro hasta regalarse un instante para uno mismo.
            </p>
            <p className="mt-4 max-w-[59ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              Por eso reunimos sabores, opciones prácticas y experiencias cercanas. Queremos acompañarte en tu día a día, tanto a través de nuestra carta como de nuevas formas de llevar Avra a distintos espacios.
            </p>

          </div>
          <div className="mx-auto w-full max-w-[440px] lg:max-w-[410px]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-[#E8F0DE] shadow-[0_16px_35px_rgba(41,92,80,.12)] sm:rounded-[26px]">
              <Image src="/images/about/equipo-avra.webp" alt="Equipo de Avra" fill sizes="(min-width:1024px) 430px, (min-width:640px) 450px, 100vw" className="object-cover object-center" />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-[#295C50]">Un equipo que disfruta lo que hace</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
