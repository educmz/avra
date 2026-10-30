"use client";

import { Clock3, CupSoda, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const benefits = [
  {
    number: "01",
    Icon: CupSoda,
    title: "Algo rico para cada momento",
    description:
      "Bebidas naturales, comidas y snacks para que siempre tengas más opciones al momento de elegir.",
  },
  {
    number: "02",
    Icon: Clock3,
    title: "Tu pausa, sin complicaciones",
    description:
      "Elige y compra directamente en la máquina, a tu ritmo y de una forma sencilla.",
  },
  {
    number: "03",
    Icon: MapPin,
    title: "Más cerca de tu rutina",
    description:
      "Acercamos una alternativa práctica a los espacios donde trabajas, estudias o entrenas.",
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
          <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#295C50] sm:text-sm">
            ¿Por qué elegir Avra?
          </p>
          <AnimatedTitle
            id="vending-overview-title"
            text="Más opciones para disfrutar tu día"
            className="mt-3 font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
          />
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
          />
          <p className="mx-auto mt-5 max-w-[660px] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Queremos que encontrar algo rico sea parte fácil de tu día. Por eso
            acercamos variedad, comodidad y una experiencia pensada para cada pausa.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1180px] gap-5 md:grid-cols-3 sm:mt-12 lg:gap-6">
          {benefits.map(({ number, Icon, title, description }, index) => (
            <motion.div
              key={number}
              className="h-full"
              initial={reducedMotion ? false : { opacity: 0, y: 26 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative flex h-full min-h-[315px] flex-col overflow-hidden rounded-[26px] border border-[#295C50]/15 bg-white px-6 pb-8 pt-7 shadow-[0_12px_30px_rgba(35,65,55,0.085)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1.5 hover:border-[#EA6F32]/45 hover:shadow-[0_24px_46px_rgba(35,65,55,0.16)] motion-reduce:transform-none motion-reduce:transition-none sm:px-7">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#EA6F32] via-[#EF9A67] to-[#295C50]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full border-[18px] border-[#295C50]/[0.035] transition-transform duration-500 group-hover:scale-125 motion-reduce:transition-none"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="grid size-14 shrink-0 place-items-center rounded-[18px] bg-[#E9F0EA] text-[#295C50] ring-1 ring-[#295C50]/10 transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 group-hover:bg-[#295C50] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
                    <Icon size={27} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-heading text-[44px] font-extrabold leading-none tracking-tight text-[#EA6F32]/30 transition-colors duration-300 group-hover:text-[#EA6F32]/65"
                  >
                    {number}
                  </span>
                </div>

                <span
                  aria-hidden="true"
                  className="mt-7 block h-[3px] w-10 rounded-full bg-[#EA6F32] transition-[width] duration-500 group-hover:w-16 motion-reduce:transition-none"
                />
                <h3 className="mt-5 max-w-[300px] font-heading text-[21px] font-extrabold leading-[1.2] tracking-tight text-[#295C50] sm:text-[22px]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[340px] text-base leading-7 text-[#302E2A]/75">
                  {description}
                </p>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
