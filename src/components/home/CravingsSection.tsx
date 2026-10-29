import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { HomeHeading } from "./HomeHeading";

const cravings = [
  {
    title: "Algo fresco",
    description: "Smoothies y tés helados",
    image: "/images/carta/naranja-fresa.webp",
    alt: "Smoothie Naranja Fresa de Avra",
    href: "/carta#carta-smoothies",
    background: "#DCEEF2",
    layout: "lg:col-span-7",
  },
  {
    title: "Algo dulce",
    description: "Frappés y waffles",
    image: "/images/carta/waffle.webp",
    alt: "Waffle de Avra con frutas",
    href: "/carta#carta-waffles",
    background: "#F4E6BE",
    layout: "lg:col-span-5",
  },
  {
    title: "Algo salado",
    description: "Sándwiches y tostones",
    image: "/images/carta/mixto.png",
    alt: "Sándwich Mixto de Avra",
    href: "/carta#carta-sandwiches",
    background: "#DFEACF",
    layout: "lg:col-span-5",
  },
  {
    title: "Algo calientito",
    description: "Bebidas calientes",
    image: "/images/carta/chocolate-caliente.webp",
    alt: "Chocolate caliente de Avra",
    href: "/carta#carta-bebidas-calientes",
    background: "#F3DACA",
    layout: "lg:col-span-7",
  },
];

export function CravingsSection() {
  return (
    <section aria-labelledby="cravings-title" className="bg-background pb-12 sm:pb-16 lg:pb-20">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <HomeHeading id="cravings-title" eyebrow="A tu gusto">
            ¿Qué se te antoja?
          </HomeHeading>
          <p className="max-w-sm text-sm leading-6 text-[#302E2A]/65 sm:pb-7">
            Para cada antojo, hay algo rico esperándote.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {cravings.map((craving) => (
            <Link
              key={craving.title}
              href={craving.href}
              className={`group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl p-4 text-[#302E2A] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(48,46,42,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295C50] motion-reduce:transform-none sm:min-h-[310px] sm:p-6 lg:min-h-[300px] lg:p-7 ${craving.layout}`}
              style={{ backgroundColor: craving.background }}
            >
              <div className="relative z-10 flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-xl font-extrabold uppercase leading-[1.08] tracking-tight sm:text-2xl lg:text-[28px]">
                    {craving.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-[#302E2A]/70 sm:text-sm">{craving.description}</p>
                </div>
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#302E2A]/20 bg-white/45 transition-[background-color,transform] duration-300 group-hover:rotate-45 group-hover:bg-white/80 sm:size-10">
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </div>
              <div className="relative mt-1 min-h-0 flex-1">
                <Image
                  src={craving.image}
                  alt={craving.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 45vw, 46vw"
                  className="object-contain object-center p-2 transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none sm:p-3"
                />
              </div>
              <span className="relative z-10 mt-1 text-[11px] font-bold uppercase tracking-[.12em] text-[#295C50] opacity-80 transition-opacity group-hover:opacity-100 sm:text-xs">
                Explorar sabores
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-7 flex justify-center sm:mt-9">
          <Link href="/carta" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#295C50] px-7 text-sm font-bold uppercase tracking-[.07em] text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#1D453B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#295C50] motion-reduce:transform-none">
            Descubre nuestra carta <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
