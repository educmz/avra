import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

const machine = {
  id: "avra",
  title: "Bebidas naturales, a tu alcance.",
  description:
    "Tu pausa favorita, más cerca. Elige una bebida natural y disfrútala con la comodidad del autoservicio.",
  image: "/images/vending/maquina-avra.png",
  alt: "Máquina naranja Avra instalada en una zona de descanso de oficina",
  accent: "#EA6F32",
  features: [
    {
      title: "Elige y paga en el mismo lugar",
      description: "Selecciona tu bebida desde la pantalla del equipo.",
    },
    {
      title: "Recoge tu bebida fácilmente",
      description: "Retírala directamente del dispensador frontal.",
    },
    {
      title: "Una pausa sin depender de atención",
      description: "Compra por tu cuenta, a tu ritmo y sin intermediarios.",
    },
  ],
};

export function AvraMachineSection() {
  return (
    <section id="avra" aria-labelledby="avra-title" className="bg-background py-12 sm:py-16">
      <Container>
        <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 min-w-0 lg:order-2">
            <div className="relative h-[340px] w-full overflow-hidden rounded-[1.75rem] border border-[#302E2A]/10 bg-white shadow-[0_12px_30px_rgba(48,46,42,.09)] sm:h-[440px] lg:h-full lg:min-h-[570px]">
              <Image
                src={machine.image}
                alt={machine.alt}
                fill
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-[70%_center]"
              />
            </div>
          </div>

          <div className="order-1 flex min-w-0 flex-col justify-center lg:order-1 lg:min-h-[570px] lg:py-8">
            <AnimatedTitle
              id={`${machine.id}-title`}
              text={machine.title}
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span
              aria-hidden="true"
              className="mt-5 block h-[3px] w-14 rounded-full"
              style={{ background: machine.accent }}
            />
            <p className="mt-6 max-w-[54ch] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
              {machine.description}
            </p>

            <h3 className="mt-8 font-heading text-sm font-bold uppercase tracking-wide text-[#302E2A]">
              Lo que hace práctica cada compra
            </h3>
            <ul className="mt-4 divide-y divide-[#302E2A]/10 border-y border-[#302E2A]/10">
              {machine.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3 py-3.5">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0"
                    style={{ color: machine.accent }}
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h4 className="text-[15px] font-semibold leading-6 text-[#295C50] sm:text-base">
                      {feature.title}
                    </h4>
                    <p className="text-sm leading-6 text-[#302E2A]/70">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a href="/nosotros" className="avra-cta mt-8 w-fit">
              <span>Conoce lo que nos mueve</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
