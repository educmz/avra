"use client";

import { ArrowDownRight, Clock3, CupSoda, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const benefits = [
  {
    Icon: CupSoda,
    title: "MÁS VARIEDAD",
    description: "Bebidas naturales, comidas y snacks para elegir.",
  },
  {
    Icon: Clock3,
    title: "FÁCIL Y PRÁCTICO",
    description: "Elige y compra directamente en la máquina.",
  },
  {
    Icon: MapPin,
    title: "MÁS CERCA DE TI",
    description: "Una opción para tus espacios de cada día.",
  },
];

export function VendingBenefitsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="vending-overview-title"
      className="bg-[#FBF4EF] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <AnimatedTitle
            id="vending-overview-title"
            text="TODO LO QUE NECESITAS, MÁS CERCA"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
          />
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
          />
          <p className="mx-auto mt-5 max-w-[600px] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Más opciones para tus pausas, de manera simple y a tu ritmo.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1180px] gap-4 sm:mt-10 md:grid-cols-3 lg:gap-5">
          {benefits.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="h-full"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative flex h-full min-h-[210px] flex-col items-start overflow-hidden rounded-[24px] border border-[#295C50]/15 border-t-[4px] border-t-[#EA6F32] bg-white px-6 py-6 shadow-[0_10px_28px_rgba(35,65,55,0.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(35,65,55,0.12)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[225px] sm:px-7 sm:py-7">
                <span className="grid size-14 shrink-0 place-items-center rounded-[16px] bg-[#E9F0EA] text-[#295C50]">
                  <Icon size={30} strokeWidth={2} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-[22px] font-extrabold uppercase leading-[1.1] tracking-tight text-[#295C50] sm:text-[24px]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[300px] text-base leading-6 text-[#302E2A]/75">
                  {description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a href="#avra" className="avra-cta inline-flex min-h-11 items-center gap-2">
            <span>Conoce nuestras máquinas</span>
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
