"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import {
  AboutItem,
  AboutReveal,
  aboutMosaicVariants,
  aboutMosaicZoomVariants,
} from "@/components/about/AboutMotion";

const storyImages = [
  { src: "/images/about/about-lifestyle.webp", alt: "Experiencia Avra", layout: "col-start-1 row-start-1 row-span-2 lg:row-span-3" },
  { src: "/images/about/about-product.webp", alt: "Productos Avra", layout: "col-start-2 row-start-1" },
  { src: "/images/about/about-machine.webp", alt: "Preparación en Avra", layout: "col-start-2 row-start-2 row-span-2" },
  { src: "/images/about/about-team.webp", alt: "Equipo Avra", layout: "col-start-1 row-start-3 lg:col-start-3 lg:row-start-1" },
  { src: "/images/about/about-lifestyle.webp", alt: "Momentos para compartir en Avra", layout: "col-start-1 row-start-4 row-span-2 lg:col-start-3 lg:row-start-2" },
  { src: "/images/about/about-product.webp", alt: "Sabores Avra", layout: "col-start-2 row-start-4 row-span-2 lg:col-start-4 lg:row-start-1 lg:row-span-3" },
];

export function StorySection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <Container>
        <AboutReveal className="mb-10 max-w-3xl sm:mb-12" amount={0.6}>
          <AnimatedTitle
            text={"Todo empieza con\nuna buena idea."}
            className="mt-4 text-4xl leading-[1.08] tracking-[0.01em] text-[#302E2A] sm:text-5xl lg:text-6xl font-extrabold uppercase"
          />
        </AboutReveal>
        <AboutReveal
          className="grid grid-cols-2 auto-rows-[clamp(120px,24vw,220px)] gap-0 overflow-hidden lg:grid-cols-4 lg:auto-rows-[clamp(160px,16vw,240px)]"
          amount={0.2}
          stagger={0.09}
        >
          {storyImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              variants={aboutMosaicVariants}
              className={`group relative min-w-0 overflow-hidden bg-[#E9E5DE] ${image.layout}`}
            >
              <motion.div variants={aboutMosaicZoomVariants} className="absolute inset-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1440px) 340px, (min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          ))}
        </AboutReveal>
      </Container>
    </section>
  );
}
