import { Clock3, Leaf, Store } from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const whatsappUrl = `https://wa.me/51948742332?text=${encodeURIComponent(
  "Hola, me gustaría recibir información sobre las máquinas expendedoras Avra para mi establecimiento."
)}`;

const reasons = [
  {
    Icon: Leaf,
    title: "Opciones saludables",
    description: "Alimentos y bebidas pensados para acompañar el día de quienes visitan tu espacio.",
  },
  {
    Icon: Clock3,
    title: "Practicidad",
    description: "Una experiencia de autoservicio cómoda, rápida y fácil de incorporar a la rutina.",
  },
  {
    Icon: Store,
    title: "Valor para tu espacio",
    description: "Una propuesta moderna que suma una nueva opción para tus colaboradores o visitantes.",
  },
];

export function VendingSpacesSection() {
  return (
    <section aria-labelledby="vending-spaces-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <AnimatedTitle
            id="vending-spaces-title"
            text="¿POR QUÉ ELEGIR AVRA?"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
          />
          <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mx-auto mt-6 max-w-[740px] text-center text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Creemos que comer mejor debería ser fácil, práctico y accesible. Por eso,
            llevamos opciones de alimentación saludable directamente a los espacios
            donde las personas pasan su día.
          </p>
        </div>

        <div className="mx-auto mt-11 grid max-w-[1120px] gap-10 text-center sm:grid-cols-3 sm:gap-7 lg:mt-14 lg:gap-14">
          {reasons.map(({ Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center">
              <Icon className="size-8 text-[#295C50] sm:size-9" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-5 font-heading text-lg font-extrabold leading-snug text-[#302E2A]">
                {title}
              </h3>
              <p className="mt-3 max-w-[32ch] text-center text-base leading-7 text-[#302E2A]/70">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-11 flex justify-center lg:mt-14">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="avra-cta"
          >
            <span>Quiero una máquina AVRA</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
