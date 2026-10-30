import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const whatsappUrl = `https://wa.me/51948742332?text=${encodeURIComponent(
  "Hola, me gustaría recibir información sobre las máquinas expendedoras Avra para mi establecimiento."
)}`;

export function VendingSpacesSection() {
  return (
    <section
      aria-labelledby="vending-spaces-title"
      className="bg-[#182923] py-14 text-white sm:py-16 lg:py-20"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-12 xl:gap-16">
          <div className="max-w-[670px]">
            <AnimatedTitle
              id="vending-spaces-title"
              text="¿POR QUÉ ELEGIR AVRA?"
              className="font-heading text-[30px] font-extrabold uppercase leading-[1.1] tracking-tight text-white sm:text-[38px] lg:text-[42px]"
            />
            <span
              aria-hidden="true"
              className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
            />

            <p className="mt-7 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
              En AVRA creemos que comer mejor debe ser algo fácil y al alcance
              de tu día a día. Por eso, acercamos bebidas naturales, comidas y
              snacks a los lugares donde las personas estudian, trabajan y
              comparten su tiempo.
            </p>
            <p className="mt-4 text-base leading-8 text-white/85 sm:text-lg sm:leading-9">
              Nuestras máquinas ofrecen una experiencia de autoservicio práctica
              y una alternativa que suma valor a tu establecimiento. Conversamos
              contigo para conocer tu espacio y encontrar la propuesta que mejor
              se adapte a sus necesidades.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="avra-cta mt-8 inline-flex min-h-12 items-center justify-center px-8 sm:mt-10"
            >
              <span>Conversemos</span>
            </a>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#E7E0D6] sm:aspect-[16/11] lg:aspect-[4/3]">
            <Image
              src="/images/vending/avra-home.png"
              alt="Máquina de Avra en un espacio interior"
              fill
              sizes="(min-width: 1024px) 47vw, (min-width: 640px) 90vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
