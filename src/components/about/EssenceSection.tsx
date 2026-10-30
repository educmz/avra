"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
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
      className={`${styles.card} group flex min-w-0 flex-col lg:flex-row ${featured ? "lg:min-h-[345px] xl:min-h-[375px]" : "lg:min-h-[330px] xl:min-h-[355px]"}`}
    >
      <div
        className={`relative order-1 h-[230px] w-full shrink-0 overflow-hidden bg-[#EDE4DA] sm:h-[290px] lg:h-auto lg:w-[47%] ${photoRight ? `lg:order-2 ${styles.photoRight}` : "lg:order-1"}`}
      >
        <EssencePhoto item={item} />
      </div>

      <div
        className={`order-2 flex min-w-0 flex-1 flex-col justify-center px-6 py-7 sm:px-8 lg:px-7 lg:py-8 xl:px-9 ${photoRight ? "lg:order-1" : "lg:order-2"}`}
      >
        <p className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#295C50] sm:text-[13px]">
          {item.label}
        </p>
        <h3 className="mt-4 font-heading text-[22px] font-extrabold uppercase leading-[1.13] tracking-[-0.025em] text-[#302E2A] sm:text-[24px] xl:text-[26px]">
          {item.title}
        </h3>
        <p className="mt-5 text-[15px] leading-[1.65] text-[#555451] sm:text-[16px]">
          {item.description}
        </p>
        <span aria-hidden="true" className="mt-6 block h-[3px] w-[60px] rounded-full bg-[#EA6F32]" />
      </div>
    </motion.article>
  );
}

export function EssenceSection() {
  return (
    <section
      aria-labelledby="about-essence-title"
      className={`${styles.section} py-12 sm:py-16 lg:py-20`}
    >
      {/* Motivos vegetales discretos, como en la referencia */}
      <svg
        aria-hidden="true"
        viewBox="0 0 130 245"
        fill="none"
        className="pointer-events-none absolute -left-4 top-0 hidden h-[245px] w-[130px] opacity-75 lg:block"
      >
        <path d="M-5 212C25 151 42 94 81 14" stroke="#6B8977" strokeWidth="3" />
        <path d="M40 117C7 94 17 49 66 27C78 60 68 95 40 117Z" fill="#6B8977" />
        <path d="M21 168C-6 150 -8 111 35 96C44 126 41 149 21 168Z" fill="#6B8977" />
        <path d="M67 66C61 31 84 15 115 7C114 37 95 59 67 66Z" fill="#6B8977" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 105 235"
        fill="none"
        className="pointer-events-none absolute -right-5 top-[45%] hidden h-[235px] w-[105px] opacity-65 xl:block"
      >
        <path d="M102 225C55 177 54 108 72 17" stroke="#EA6F32" strokeWidth="2.5" />
        <path d="M71 99C45 87 40 50 58 21C78 44 84 71 71 99Z" stroke="#EA6F32" strokeWidth="2.5" />
        <path d="M77 153C40 148 19 117 34 89C66 102 82 125 77 153Z" stroke="#EA6F32" strokeWidth="2.5" />
      </svg>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Encabezado arriba a la izquierda */}
          <div className="flex min-w-0 flex-col items-center justify-center px-2 py-7 text-center sm:py-10 lg:col-span-5 lg:items-start lg:py-8 lg:pl-6 lg:text-left xl:pl-[70px]">
            <span aria-hidden="true" className="mb-7 block h-[4px] w-[66px] rounded-full bg-[#EA6F32]" />
            <h2
              id="about-essence-title"
              className="font-heading text-[40px] font-extrabold uppercase leading-[1.04] tracking-[-0.045em] text-[#302E2A] sm:text-[52px] lg:text-[49px] xl:text-[62px]"
            >
              <span className="block">LO QUE NOS</span>
              <span className="block text-[#295C50]">MUEVE</span>
            </h2>
            <p className="mt-7 max-w-[440px] text-[17px] leading-[1.55] text-[#686663] sm:text-[19px]">
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
