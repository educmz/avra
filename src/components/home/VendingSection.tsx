import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Heart, Leaf, UsersRound } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { HomeHeading } from "./HomeHeading";

const benefits = [
  { Icon: Leaf, text: "Opciones naturales", color: "#E1EBD7" },
  { Icon: Heart, text: "Prácticas y deliciosas", color: "#F8E2D7" },
  { Icon: UsersRound, text: "Ideales para cada espacio", color: "#E1EBD7" },
];

export function VendingSection() {
  return (
    <section aria-labelledby="vending-title" className="bg-white py-12 sm:py-16">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[24px] bg-[#EAF0E4]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FBF7F0] via-[#FBF7F0]/55 to-[#F2EFE4]/75" />
          <div className="relative grid min-h-[350px] items-center gap-5 p-6 sm:p-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,.65fr)] lg:gap-4 lg:px-10 lg:py-8">
            <div className="relative z-10">
              <HomeHeading id="vending-title" eyebrow="Avra también llega a ti">
                Vending saludable
              </HomeHeading>
              <div className="-mt-2 mb-5 h-[3px] w-12 rounded-full bg-[#EA6F32]" />
              <p className="max-w-sm text-sm leading-6 text-[#302E2A]/80">
                Bebidas y snacks naturales, siempre a tu alcance. Nuestras máquinas Avra y Nuna llevan opciones deliciosas y saludables a más personas.
              </p>
              <Link href="/maquinas" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-[#295C50] px-5 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1D453B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50]">
                Conoce nuestras máquinas <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
            <div className="relative mx-auto flex h-[260px] w-full max-w-[460px] items-center justify-center gap-2 sm:h-[335px] lg:h-[360px]">
              <div className="relative h-full w-1/2">
                <Image src="/images/vending/avra-equipo.jpg" alt="Máquina Avra de bebidas naturales" fill sizes="(min-width:1024px) 250px, 45vw" className="object-contain mix-blend-multiply" />
              </div>
              <div className="relative h-full w-1/2">
                <Image src="/images/vending/nuna-equipo.jpg" alt="Máquina Nuna de alimentos y snacks" fill sizes="(min-width:1024px) 250px, 45vw" className="object-contain mix-blend-multiply" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-1 lg:gap-6">
              {benefits.map(({ Icon, text, color }) => (
                <div key={text} className="flex flex-col items-center gap-2 text-center lg:flex-row lg:text-left">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full text-[#295C50]" style={{ backgroundColor: color }}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-medium leading-4 text-[#302E2A] sm:text-xs">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
