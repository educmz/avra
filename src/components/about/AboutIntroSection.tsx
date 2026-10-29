import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export function AboutIntroSection() {
  return (
    <section aria-labelledby="about-intro-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedTitle id="about-intro-title" text="MÁS QUE ALGO RICO" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
          <div aria-hidden="true" className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mt-6 text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
            Avra nace de una idea sencilla: hacer que disfrutar algo rico sea también una oportunidad para disfrutar el momento. Creemos en esas pequeñas pausas que hacen bien, desde compartir una comida y conversar sin apuro hasta regalarse un instante para uno mismo.
          </p>
          <p className="mt-4 text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
            Por eso reunimos sabores, opciones prácticas y experiencias cercanas. Queremos acompañarte en tu día a día, tanto a través de nuestra carta como de nuevas formas de llevar Avra a distintos espacios.
          </p>
        </div>
      </Container>
    </section>
  );
}
