import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Leaf, UsersRound } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

// Sustituye estas rutas por las nuevas imágenes cuando estén listas.
const machines = [
  { name: "AVRA", description: "Bebidas naturales", image: "/images/vending/avra-equipo.jpg", href: "/maquinas#avra", bg: "#FBE5D7", accent: "#EA6F32", alt: "Máquina Avra de bebidas naturales" },
  { name: "NUNA", description: "Snacks y bebidas", image: "/images/vending/nuna-equipo.jpg", href: "/maquinas#nuna", bg: "#E4EDD9", accent: "#295C50", alt: "Máquina Nuna de snacks y bebidas" },
] as const;

const benefits = [
  { Icon: Leaf, label: "Opciones saludables", bg: "#FBE3D7" },
  { Icon: Gem, label: "Diseño moderno", bg: "#E5EDD9" },
  { Icon: UsersRound, label: "Ideal para oficinas", bg: "#FBE3D7" },
] as const;

export function VendingSection() {
  return (
    <section aria-labelledby="vending-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,.87fr)_minmax(0,1.6fr)] lg:gap-10 xl:gap-14">
          <div className="min-w-0">
            <AnimatedTitle id="vending-title" text="Lo natural, más cerca de ti." className="max-w-[500px] font-heading text-[28px] font-extrabold leading-[1.07] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
            <p className="mt-6 max-w-[44ch] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
              Bebidas y snacks deliciosos, siempre disponibles. Descubre una forma práctica y moderna de disfrutar opciones más saludables.
            </p>
            <Link href="/maquinas" className="avra-cta mt-7">
              <span>Conoce nuestras máquinas</span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="min-w-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-5">
              {machines.map((machine) => (
                <Link key={machine.name} href={machine.href} className="group min-w-0 overflow-hidden rounded-[24px] bg-white shadow-[0_12px_30px_rgba(48,46,42,.055)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] motion-reduce:transform-none sm:rounded-[30px]">
                  <div className="relative aspect-[.95] overflow-hidden sm:aspect-[1.05]" style={{ backgroundColor: machine.bg }}>
                    <Image src={machine.image} alt={machine.alt} fill sizes="(min-width:1024px) 25vw, 48vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.045] motion-reduce:transition-none sm:p-4" />
                  </div>
                  <div className="flex items-center justify-between gap-2 bg-[#FBF4EF] px-3 py-3 sm:px-5 sm:py-4">
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-extrabold leading-tight text-[#302E2A] sm:text-2xl">{machine.name}</h3>
                      <p className="mt-1 text-sm leading-5 text-[#302E2A]/70 sm:text-base">{machine.description}</p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1 sm:size-10" style={{ backgroundColor: machine.bg, color: machine.accent }}>
                      <ArrowRight size={19} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 sm:mt-6 sm:gap-4">
              {benefits.map(({ Icon, label, bg }) => (
                <div key={label} className="flex min-w-0 flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full text-[#295C50] sm:size-10" style={{ backgroundColor: bg }}>
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium leading-4 text-[#302E2A]/80 sm:text-sm sm:leading-5">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
