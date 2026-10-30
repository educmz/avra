import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

export function EssencePreviewSection() {
  return (
    <section aria-labelledby="home-essence-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="relative isolate min-h-[420px] overflow-hidden rounded-[24px] bg-[#E8F0DE] sm:min-h-[450px] sm:rounded-[28px] lg:min-h-[460px]">
          <Image
            src="/images/home/cta/essence-home.png"
            alt="Waffle, sándwich y pizza de Avra sobre fondo verde claro"
            fill
            sizes="(min-width:1280px) 1200px, 100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/90 to-white/70 sm:hidden" />
          <div className="relative z-10 flex min-h-[420px] w-full max-w-[690px] flex-col justify-center px-6 py-9 sm:min-h-[450px] sm:px-10 lg:min-h-[460px] lg:px-12">
            <AnimatedTitle
              id="home-essence-title"
              text="LA ESENCIA AVRA"
              className="font-heading text-[26px] font-extrabold uppercase leading-[1.1] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span aria-hidden="true" className="mt-4 block h-[4px] w-[96px] rounded-full bg-[#EA6F32] sm:mt-5" />
            <p className="mt-5 max-w-[47ch] text-left text-base leading-7 text-[#302E2A] sm:mt-6 sm:text-justify sm:text-lg sm:leading-8 sm:text-[#302E2A]/85">
              Creemos que disfrutar de lo natural debe ser fácil. Por eso acercamos opciones deliciosas y prácticas a cada momento de tu día.
            </p>
            <Link href="/nosotros" className="avra-cta mt-6 w-fit sm:mt-8">
              <span>Conoce Avra</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
