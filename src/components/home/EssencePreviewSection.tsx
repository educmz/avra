import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

export function EssencePreviewSection() {
  return (
    <section aria-labelledby="home-essence-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="relative isolate min-h-[420px] overflow-hidden rounded-[24px] bg-[#E8F0DE] sm:min-h-[475px] sm:rounded-[28px] lg:min-h-[500px]">
          <Image
            src="/images/home/cravings/para-comer.png"
            alt="Selección de alimentos Avra"
            fill
            sizes="(min-width:1280px) 1200px, 100vw"
            className="object-cover object-[60%_center] sm:object-[center_center]"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#F2F6E9] via-[#F2F6E9]/95 via-[34%] to-[#F2F6E9]/0 lg:via-[43%]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#F2F6E9]/65 via-transparent to-transparent sm:hidden" />
          <div className="relative z-10 flex min-h-[420px] w-full max-w-[690px] flex-col justify-center px-6 py-9 sm:min-h-[475px] sm:px-10 lg:min-h-[500px] lg:px-12">
            <AnimatedTitle
              id="home-essence-title"
              text="LA ESENCIA AVRA"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.07] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
            <p className="mt-6 max-w-[47ch] text-justify text-base leading-7 text-[#302E2A]/85 sm:text-lg sm:leading-8">
              Creemos que disfrutar de lo natural debe ser fácil. Por eso acercamos opciones deliciosas y prácticas a cada momento de tu día.
            </p>
            <Link href="/nosotros" className="avra-cta mt-8 w-fit">
              <span>Conoce Avra</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
