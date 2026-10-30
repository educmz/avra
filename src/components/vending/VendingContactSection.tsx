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
        <div className="relative isolate overflow-hidden rounded-[24px] bg-[#F8F3EB] shadow-[0_14px_36px_rgba(14,43,35,.09)] sm:rounded-[28px]">
          {/* La nueva imagen tiene un área despejada a la izquierda para el texto. */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <Image
              src="/images/vending/cta-vending.png"
              alt=""
              fill
              sizes="(min-width:1536px) 1452px, 100vw"
              className="object-cover object-[center_60%]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#F8F3EB]/75 via-[#F8F3EB]/20 to-transparent" />
          </div>

          <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:min-h-[410px] lg:w-[59%] lg:px-12">
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

          {/* En pantallas pequeñas, la foto se muestra debajo del contenido. */}
          <div className="relative h-[210px] w-full overflow-hidden sm:h-[270px] lg:hidden">
            <Image
              src="/images/vending/cta-vending.png"
              alt="Espacio de trabajo cálido y natural con plantas y una mesa"
              fill
              sizes="(min-width:640px) 90vw, 100vw"
              className="object-cover object-[right_65%]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#F8F3EB] to-transparent" />
          </div>
        </div>
      </Container>
    </section>
  );
}
