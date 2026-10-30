import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

const machine = {
  id: "avra",
  title: "Bebidas naturales, a tu alcance.",
  description:
    "Disfruta bebidas naturales de forma fácil y práctica, con una máquina de autoservicio pensada para acompañar cada pausa.",
  image: "/images/vending/maquina-avra.png",
  alt: "Máquina naranja Avra instalada en una zona de descanso de oficina",
  accent: "#EA6F32",
  features: [
    "Bebidas naturales",
    "Dispensación directa",
    "Selección intuitiva",
    "Diseño distintivo",
  ],
};

export function AvraMachineSection() {
  return (
    <section id="avra" aria-labelledby="avra-title" className="bg-background py-10 sm:py-14">
      <Container>
        <div className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 min-w-0 lg:order-2">
            <div className="relative h-[320px] w-full overflow-hidden rounded-[1.75rem] border border-[#302E2A]/10 bg-white shadow-[0_12px_30px_rgba(48,46,42,.09)] sm:h-[420px] lg:h-full">
              <Image
                src={machine.image}
                alt={machine.alt}
                fill
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-[70%_center]"
              />
            </div>
          </div>

          <div className="order-1 flex min-w-0 flex-col justify-center lg:order-1">
            <AnimatedTitle
              id={`${machine.id}-title`}
              text={machine.title}
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span
              aria-hidden="true"
              className="mt-4 block h-[3px] w-14 rounded-full"
              style={{ background: machine.accent }}
            />
            <p className="mt-5 max-w-[54ch] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
              {machine.description}
            </p>

            <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wide text-[#302E2A]">
              Características del equipo
            </h3>
            <ul className="mt-3 grid gap-x-5 gap-y-3 border-t border-[#302E2A]/10 pt-4 sm:grid-cols-2">
              {machine.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={19}
                    className="shrink-0"
                    style={{ color: machine.accent }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium leading-6 text-[#302E2A] sm:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="/nosotros"
              className="avra-cta mt-7 w-fit"
            >
              <span>Conoce más de Avra</span>
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
