import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

const whatsappUrl = `https://wa.me/51948742332?text=${encodeURIComponent(
  "Hola, me gustaría recibir más información sobre la máquina Avra de bebidas naturales y cómo instalarla en mi espacio."
)}`;

// Los datos y el diseño de esta máquina se mantienen independientes de la otra.
const machine = {
    id: "avra", name: "Avra", kicker: "01 / Bebidas naturales",
    title: "Bebidas naturales, a tu alcance",
    description: "Haz que disfrutar una bebida natural sea parte de cada pausa. La máquina Avra acerca esta opción a tu espacio con una experiencia de autoservicio sencilla, cómoda y sin complicaciones.",
    image: "/images/vending/maquina-avra.png",
    alt: "Máquina naranja Avra instalada en una zona de descanso de oficina",
    accent: "#EA6F32", bg: "#FFFFFF",
    details: [
      "Bebidas naturales",
      "Selección en pantalla",
      "Pago en la máquina",
      "Retiro directo de tu bebida",
    ],
    perks: ["Una experiencia diferente", "Diseño reconocible", "Practicidad cotidiana"],
  };

export function AvraMachineSection() {
  return (
    <section id="avra" aria-labelledby="avra-title" className="bg-background py-10 sm:py-14">
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0 lg:order-2">
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
          <div className="min-w-0 lg:order-1">
            <AnimatedTitle id={`${machine.id}-title`} text={machine.title} className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <div className="mt-3 h-[3px] w-14 rounded-full" style={{ background: machine.accent }} />
            <p className="mt-4 max-w-2xl text-justify text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">{machine.description}</p>
            <h3 className="mt-6 font-heading text-base font-extrabold uppercase tracking-wide text-[#302E2A]">Características del equipo</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {machine.details.map((detail) => (
                <li key={detail} className="flex min-h-[54px] items-center gap-2.5 rounded-xl border border-[#302E2A]/10 bg-white/75 px-3.5 py-2.5">
                  <CheckCircle2 size={19} className="shrink-0" style={{ color: machine.accent }} aria-hidden="true" />
                  <span className="text-sm font-semibold leading-snug text-[#302E2A]">{detail}</span>
                </li>
              ))}
            </ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="avra-cta mt-5 w-fit">
              <span>Consultar por la máquina Avra</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
