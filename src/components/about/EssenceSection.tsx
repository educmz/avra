"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const items = [
  { id: "purpose", label: "Propósito", title: "Crear momentos para disfrutar", description: "Acercar opciones deliciosas y prácticas que acompañen las pequeñas pausas y los buenos momentos de cada día.", image: "/images/about/essence/purpose-avra.webp", background: "#EAF0E4" },
  { id: "mission", label: "Misión", title: "Hacer especial lo cotidiano", description: "Ofrecer sabores y experiencias accesibles, cuidando los detalles para que disfrutar de Avra sea fácil y agradable.", image: "/images/about/essence/mission-avra.webp", background: "#F5E9DC" },
  { id: "vision", label: "Visión", title: "Seguir creciendo contigo", description: "Llegar a más personas y espacios con nuevas formas de disfrutar nuestros productos sin perder nuestra esencia cercana.", image: "/images/about/essence/vision-avra.webp", background: "#E7ECE3" },
];

export function EssenceSection() {
  return (
    <section aria-labelledby="about-essence-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-11">
          <AnimatedTitle id="about-essence-title" text="LO QUE NOS MUEVE" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
          <div aria-hidden="true" className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mt-5 text-justify text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Estas ideas orientan lo que hacemos hoy y la forma en que queremos seguir creciendo.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <motion.article key={item.id} whileHover={{ y: -4 }} transition={{ duration: .25 }}
              className="overflow-hidden rounded-[24px] bg-[#FBF4EF] shadow-[0_10px_30px_rgba(48,46,42,.06)] motion-reduce:transform-none">
              <div className="relative aspect-[5/3] overflow-hidden" style={{ backgroundColor: item.background }}>
                <Image src={item.image} alt={item.label + " de Avra"} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105 motion-reduce:transition-none" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[#295C50]">{item.label}</p>
                <h3 className="mt-3 font-heading text-xl font-extrabold uppercase leading-tight text-[#302E2A] sm:text-2xl">{item.title}</h3>
                <p className="mt-4 text-justify text-base leading-7 text-[#302E2A]/75">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
