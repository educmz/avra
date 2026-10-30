import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { HomeHeading } from "./HomeHeading";

const groups = [
  {
    title: "Para tomar",
    description: "Smoothies, tés helados, frappés y bebidas calientes.",
    button: "Elige tu sabor",
    href: "/carta#carta-smoothies",
    background: "#DCEEF2",
    image: "/images/home/cravings/para-beber.webp",
    alt: "Selección de bebidas de Avra",
  },
  {
    title: "Para comer",
    description: "Waffles, sándwiches, tostones y pizzas.",
    button: "Nutre tu día",
    href: "/carta#carta-waffles",
    background: "#F8E6BF",
    image: "/images/home/cravings/para-comer.webp",
    alt: "Selección de alimentos de Avra",
  },
];

export function CravingsSection() {
  return (
    <section aria-labelledby="cravings-title" className="bg-background pt-12 pb-12 sm:pb-16 lg:pb-20">
      <Container>
        <HomeHeading id="cravings-title" as="h1" eyebrow="A tu gusto">
          ¿Qué se te antoja hoy?
        </HomeHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {groups.map((group) => (
            <article
              key={group.title}
              className="group relative isolate min-h-[305px] overflow-hidden rounded-2xl sm:min-h-[350px] lg:min-h-[365px]"
              style={{ backgroundColor: group.background }}
            >
              <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-white/30 via-white/5 to-transparent" />
              <div className="absolute inset-0">
                <Image
                  src={group.image}
                  alt={group.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                />
              </div>
              <div className="relative z-10 flex max-w-[53%] flex-col items-start px-5 pb-7 pt-7 sm:px-8 sm:pt-9 lg:px-9">
                <span aria-hidden="true" className="mb-4 h-[4px] w-[96px] rounded-full bg-[#EA6F32]" />
                <h3 className="font-heading text-[23px] font-extrabold uppercase leading-[1.05] tracking-tight text-[#302E2A] sm:text-[28px]">{group.title}</h3>
                <p className="mt-3 max-w-[24ch] text-justify text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">{group.description}</p>
                <Link href={group.href} className="avra-cta mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#295C50] px-4 text-[11px] font-bold uppercase tracking-[.04em] text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#1D453B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] motion-reduce:transform-none sm:px-5 sm:text-xs">
                  {group.button} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
