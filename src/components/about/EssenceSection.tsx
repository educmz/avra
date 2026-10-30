"use client";

 import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import styles from "./EssenceSection.module.css";

const items = {
  purpose: {
    label: "PROPÓSITO",
    title: "CREAR MOMENTOS PARA DISFRUTAR",
    description:
      "Acercar opciones deliciosas y prácticas que acompañen las pequeñas pausas y los buenos momentos de cada día.",
    image: "/images/about/essence/purpose-avra.webp",
    alt: "Sándwich y bebida de Avra",
  },
  mission: {
    label: "MISIÓN",
    title: "HACER ESPECIAL LO COTIDIANO",
    description:
      "Ofrecer sabores y experiencias accesibles, cuidando los detalles para que disfrutar de Avra sea fácil y agradable.",
    image: "/images/about/essence/mission-avra.webp",
    alt: "Bebidas de Avra compartidas en una pausa",
  },
  vision: {
    label: "VISIÓN",
    title: "SEGUIR CRECIENDO CONTIGO",
    description:
      "Llegar a más personas y espacios con nuevas formas de disfrutar nuestros productos sin perder nuestra esencia cercana.",
    image: "/images/about/essence/vision-avra.webp",
    alt: "Waffle de Avra acompañado de frutas",
  },
} as const;

type EssenceItem = (typeof items)[keyof typeof items];

function EssencePhoto({ item }: { item: EssenceItem }) {
  return (
    <Image
      src={item.image}
      alt={item.alt}
      fill
      sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 30vw, 100vw"
      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
    />
  );
}

function EssenceCard({
  item,
  imageSide,
  mobileImageRight = false,
  featured = false,
}: {
  item: EssenceItem;
  imageSide: "left" | "right";
  mobileImageRight?: boolean;
  featured?: boolean;
}) {
  const photoRight = imageSide === "right";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`${styles.card} group flex min-w-0 flex-row sm:flex-col lg:flex-row ${featured ? "lg:min-h-[270px] xl:min-h-[280px]" : "lg:min-h-[275px] xl:min-h-[285px]"}`}
    >
      <div
        className={`relative ${mobileImageRight ? "order-2 sm:order-1" : "order-1"} min-h-[180px] w-[34%] shrink-0 overflow-hidden bg-[#EDE4DA] sm:h-[220px] sm:min-h-0 sm:w-full lg:h-auto lg:w-[42%] ${photoRight ? `lg:order-2 ${styles.photoRight}` : `lg:order-1 ${styles.photoLeft}`}`}
      >
        <EssencePhoto item={item} />
      </div>

      <div
        className={`${mobileImageRight ? "order-1 sm:order-2" : "order-2"} flex min-w-0 flex-1 flex-col justify-center px-3 py-3 sm:px-6 sm:py-5 lg:px-5 lg:py-5 xl:px-7 ${photoRight ? "lg:order-1" : "lg:order-2"}`}
      >
        <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#295C50] sm:text-xs sm:tracking-[.14em]">
          {item.label}
        </p>
        <h3 className="mt-1.5 font-heading text-[15px] font-extrabold uppercase leading-[1.15] text-[#302E2A] sm:mt-3 sm:text-2xl sm:leading-tight">
          {item.title}
        </h3>
        <p className="mt-2 text-[12px] leading-[1.45] text-[#302E2A]/75 sm:mt-3 sm:text-base sm:leading-7">
          {item.description}
        </p>
        <span aria-hidden="true" className="mt-2 block h-[3px] w-12 rounded-full bg-[#EA6F32] sm:mt-4 sm:h-[4px] sm:w-[96px]" />
      </div>
    </motion.article>
  );
}

export function EssenceSection() {
  return (
    <section
      aria-labelledby="about-essence-title"
      className={`${styles.section} py-8 sm:py-12 lg:py-14`}
    >
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1260px] grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Encabezado: misma tipografía y jerarquía que las demás secciones */}
          <div className="flex min-w-0 flex-col items-center justify-center px-2 py-4 text-center sm:py-10 lg:col-span-5 lg:items-start lg:py-8 lg:px-0 lg:text-left">
            <AnimatedTitle
              id="about-essence-title"
              text="LO QUE NOS MUEVE"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span aria-hidden="true" className="mt-5 block h-[4px] w-[96px] rounded-full bg-[#EA6F32]" />
            <p className="mt-5 max-w-[62ch] text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
              Estas ideas orientan lo que hacemos hoy y la forma en que queremos seguir creciendo.
            </p>
          </div>

          {/* Propósito arriba a la derecha */}
          <div className="min-w-0 lg:col-span-7">
            <EssenceCard item={items.purpose} imageSide="right" featured />
          </div>

          {/* Misión y Visión abajo, en dos tarjetas equilibradas */}
          <div className="min-w-0 lg:col-span-6">
            <EssenceCard item={items.mission} imageSide="left" mobileImageRight />
          </div>
          <div className="min-w-0 lg:col-span-6">
            <EssenceCard item={items.vision} imageSide="right" />
          </div>
        </div>
      </Container>
    </section>
  );
}
