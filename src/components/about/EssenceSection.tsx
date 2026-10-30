"use client";

import { useState } from "react";
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
    image: "/images/about/essence/purpose-avra.png",
    fallbackImage: "/images/about/essence/purpose-avra.webp",
    alt: "Sándwich y bebida de Avra",
  },
  mission: {
    label: "MISIÓN",
    title: "HACER ESPECIAL LO COTIDIANO",
    description:
      "Ofrecer sabores y experiencias accesibles, cuidando los detalles para que disfrutar de Avra sea fácil y agradable.",
    image: "/images/about/essence/mission-avra.png",
    fallbackImage: "/images/about/essence/mission-avra.webp",
    alt: "Bebidas de Avra compartidas en una pausa",
  },
  vision: {
    label: "VISIÓN",
    title: "SEGUIR CRECIENDO CONTIGO",
    description:
      "Llegar a más personas y espacios con nuevas formas de disfrutar nuestros productos sin perder nuestra esencia cercana.",
    image: "/images/about/essence/vision-avra.png",
    fallbackImage: "/images/about/essence/vision-avra.webp",
    alt: "Waffle de Avra acompañado de frutas",
  },
} as const;

type EssenceItem = (typeof items)[keyof typeof items];

function EssencePhoto({ item }: { item: EssenceItem }) {
  // Las imágenes WEBP existentes mantienen la página funcional hasta que se suban los nuevos PNG.
  const [imageSrc, setImageSrc] = useState<string>(item.image);

  return (
    <Image
      src={imageSrc}
      alt={item.alt}
      fill
      sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 30vw, 100vw"
      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
      onError={() => {
        if (imageSrc !== item.fallbackImage) setImageSrc(item.fallbackImage);
      }}
    />
  );
}

function EssenceCard({
  item,
  imageSide,
  featured = false,
}: {
  item: EssenceItem;
  imageSide: "left" | "right";
  featured?: boolean;
}) {
  const photoRight = imageSide === "right";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={`${styles.card} group flex min-w-0 flex-col lg:flex-row ${featured ? "lg:min-h-[270px] xl:min-h-[280px]" : "lg:min-h-[275px] xl:min-h-[285px]"}`}
    >
      <div
        className={`relative order-1 h-[185px] w-full shrink-0 overflow-hidden bg-[#EDE4DA] sm:h-[220px] lg:h-auto lg:w-[42%] ${photoRight ? `lg:order-2 ${styles.photoRight}` : "lg:order-1"}`}
      >
        <EssencePhoto item={item} />
      </div>

      <div
        className={`order-2 flex min-w-0 flex-1 flex-col justify-center px-5 py-5 sm:px-6 lg:px-5 lg:py-5 xl:px-7 ${photoRight ? "lg:order-1" : "lg:order-2"}`}
      >
        <p className="text-xs font-bold uppercase tracking-[.14em] text-[#295C50]">
          {item.label}
        </p>
        <h3 className="mt-3 font-heading text-xl font-extrabold uppercase leading-tight text-[#302E2A] sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-3 text-[15px] leading-6 text-[#302E2A]/75 sm:text-base sm:leading-7">
          {item.description}
        </p>
        <span aria-hidden="true" className="mt-4 block h-[3px] w-[60px] rounded-full bg-[#EA6F32]" />
      </div>
    </motion.article>
  );
}

export function EssenceSection() {
  return (
    <section
      aria-labelledby="about-essence-title"
      className={`${styles.section} py-10 sm:py-12 lg:py-14`
    >
      <Container className="relative z-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Encabezado: misma tipografía y jerarquía que las demás secciones */}
          <div className="flex min-w-0 flex-col items-center justify-center px-2 py-7 text-center sm:py-10 lg:col-span-5 lg:items-start lg:py-8 lg:pl-6 lg:text-left xl:pl-[70px]">
            <AnimatedTitle
              id="about-essence-title"
              text="LO QUE NOS MUEVE"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
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
            <EssenceCard item={items.mission} imageSide="left" />
          </div>
          <div className="min-w-0 lg:col-span-6">
            <EssenceCard item={items.vision} imageSide="right" />
          </div>
        </div>
      </Container>
    </section>
  );
}
