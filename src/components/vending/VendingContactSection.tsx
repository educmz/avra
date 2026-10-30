import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const whatsappUrl = `https://wa.me/51948742332?text=${encodeURIComponent(
  "Hola, quisiera recibir más información sobre las máquinas de vending saludable de Avra para mi espacio."
)}`;

export function VendingContactSection() {
  return (
    <section aria-labelledby="vending-contact-title" className="bg-[#FBF4EF] py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid overflow-hidden rounded-[24px] bg-[#E8F0DE] shadow-[0_14px_36px_rgba(14,43,35,.09)] sm:rounded-[28px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
          <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:min-h-[390px] lg:px-12">
            <AnimatedTitle
              id="vending-contact-title"
              as="h2"
              text="¿QUIERES SABER MÁS?"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.07] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
            <p className="mt-6 max-w-[47ch] text-justify text-base leading-7 text-[#302E2A]/85 sm:text-lg sm:leading-8">
              Descubre cómo nuestras máquinas pueden adaptarse a tu espacio. Escríbenos y conversa con nuestro equipo sobre las opciones disponibles.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="avra-cta mt-8 w-fit"
            >
              <span>Hablar con un asesor</span>
            </a>
          </div>
          <div className="relative h-[210px] min-w-0 overflow-hidden bg-[#E8F0DE] sm:h-[280px] lg:h-auto">
            <Image
              src="/images/vending/banner-vending.png"
              alt="Máquinas expendedoras Avra y Nuna"
              fill
              sizes="(min-width:1024px) 45vw, 100vw"
              className="object-cover object-[72%_center]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#E8F0DE] via-transparent to-transparent lg:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
