"use client";

import { Clock3, CupSoda, MapPin } from "lucide-react";
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
      className="bg-[#FBF4EF] py-10 sm:py-16 lg:py-20"
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
            className="mx-auto mt-5 block h-[4px] w-[96px] rounded-full bg-[#EA6F32]"
          />
          <p className="mx-auto mt-5 max-w-[600px] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Bebidas naturales, comidas y snacks a tu alcance, para disfrutar de cada pausa de forma práctica y sin complicaciones.
          </p>
        </div>

        <div className="mx-auto mt-7 grid max-w-[1180px] grid-cols-1 gap-3 sm:mt-10 md:grid-cols-3 md:gap-4 lg:gap-5">
          {benefits.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="h-full min-w-0"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative flex h-full min-h-[96px] items-center gap-3 overflow-hidden rounded-[18px] border border-[#295C50]/15 border-t-[3px] border-t-[#EA6F32] bg-white px-3 py-3 shadow-[0_10px_28px_rgba(35,65,55,0.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(35,65,55,0.12)] motion-reduce:transform-none motion-reduce:transition-none md:min-h-[225px] md:flex-col md:items-start md:gap-0 md:rounded-[24px] md:border-t-[4px] md:px-7 md:py-7">
                <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-[#E9F0EA] text-[#295C50] transition-[background-color,color,transform] duration-300 ease-out group-hover:-rotate-6 group-hover:bg-[#295C50] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none md:size-14 md:rounded-[16px]">
                  <Icon size={30} strokeWidth={2} aria-hidden="true" className="size-6 md:size-[30px]" />
                </span>
                <div className="min-w-0 flex-1 md:flex-none">
                  <h3 className="font-heading text-[16px] font-extrabold uppercase leading-[1.15] tracking-tight text-[#295C50] md:mt-5 md:text-[24px]">
                    {title}
                  </h3>
                  <p className="mt-1 max-w-[300px] text-[13px] leading-[1.45] text-[#302E2A]/75 md:mt-2 md:text-base md:leading-6">
                    {description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="self-start font-heading text-[25px] font-extrabold leading-none tracking-tight text-[#EA6F32]/30 transition-[color,transform] duration-300 group-hover:scale-110 group-hover:text-[#EA6F32]/75 motion-reduce:transform-none motion-reduce:transition-none md:absolute md:right-7 md:top-7 md:text-[44px]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
