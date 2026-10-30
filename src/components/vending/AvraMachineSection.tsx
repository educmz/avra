import Image from "next/image";
import { CreditCard, GlassWater, HandHelping, MousePointerClick } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

const whatsappUrl = `https://wa.me/51948742332?text=${encodeURIComponent(
  "Hola, me gustaría recibir información sobre el equipo de bebidas naturales de Avra y cómo instalarlo en mi espacio."
)}`;

// Los datos y el diseño de esta máquina se mantienen independientes de la otra.
const machine = {
    id: "avra", name: "Avra", kicker: "01 / Bebidas naturales",
    title: "Bebidas naturales, a tu alcance",
    description: "Con Avra, disfrutar bebidas naturales es más fácil. Una experiencia de autoservicio práctica y cómoda, pensada para acompañar cada pausa en tu espacio.",
    image: "/images/vending/maquina-avra.webp",
    alt: "Equipo dispensador naranja de Avra en una zona de descanso de oficina",
    accent: "#EA6F32", bg: "#FFFFFF",
    details: [
      { label: "Bebidas naturales", Icon: GlassWater },
      { label: "Selección en pantalla", Icon: MousePointerClick },
      { label: "Pago en la máquina", Icon: CreditCard },
      { label: "Retiro directo de tu bebida", Icon: HandHelping },
    ],
    perks: ["Una experiencia diferente", "Diseño reconocible", "Practicidad cotidiana"],
  };

export function AvraMachineSection() {
  return (
    <section id="avra" aria-labelledby="avra-title" className="bg-background pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pb-28">
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 min-w-0 lg:order-2">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] border border-[#302E2A]/10 bg-white shadow-[0_12px_30px_rgba(48,46,42,.09)] lg:aspect-[5/4]">
              <Image
                src={machine.image}
                alt={machine.alt}
                fill
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-right"
              />
            </div>
          </div>
          <div className="contents lg:order-1 lg:block">
            <div className="order-1 min-w-0">
              <AnimatedTitle id={`${machine.id}-title`} text={machine.title} className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <div className="mt-3 h-[4px] w-[96px] shrink-0 rounded-full" style={{ background: machine.accent }} />
            <p className="mt-4 max-w-2xl text-justify text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">{machine.description}</p>
            </div>
            <div className="order-3 min-w-0">
            <h3 className="font-heading text-base font-extrabold uppercase tracking-wide text-[#302E2A] lg:mt-6">Características del equipo</h3>
            <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
              {machine.details.map((detail) => (
                <li
                  key={detail.label}
                  className="group flex min-h-[58px] items-center gap-3 rounded-[14px] border border-[#295C50]/10 bg-white/85 px-3 py-2.5 shadow-[0_4px_14px_rgba(41,92,80,0.035)] transition-[border-color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-[#EA6F32]/35 hover:bg-white hover:shadow-[0_8px_22px_rgba(41,92,80,0.08)] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-[#FFF0E5] text-[#EA6F32] transition-[background-color,color,transform] duration-300 group-hover:scale-105 group-hover:bg-[#EA6F32] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
                    <detail.Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="text-[14px] font-semibold leading-snug text-[#295C50] sm:text-[15px]">
                    {detail.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex justify-center lg:justify-start">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="avra-cta w-fit">
                <span>Solicitar información</span>
              </a>
            </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
