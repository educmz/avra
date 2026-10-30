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

        <div className="mx-auto mt-7 flex max-w-[1180px] snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-10 sm:gap-4 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:gap-5">
          {benefits.map(({ Icon, title, description }, index) => (
            <motion.div
              key={title}
              className="h-full w-[83%] shrink-0 snap-start sm:w-[47%] md:w-auto md:shrink"
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="group relative flex h-full min-h-[188px] flex-col items-start overflow-hidden rounded-[24px] border border-[#295C50]/15 border-t-[4px] border-t-[#EA6F32] bg-white px-4 py-4 shadow-[0_10px_28px_rgba(35,65,55,0.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(35,65,55,0.12)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[225px] sm:px-7 sm:py-7">
                <div className="flex w-full items-start justify-between gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-[#E9F0EA] sm:size-14 sm:rounded-[16px] text-[#295C50] transition-[background-color,color,transform] duration-300 ease-out group-hover:-rotate-6 group-hover:bg-[#295C50] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
                    <Icon size={30} strokeWidth={2} aria-hidden="true" className="size-6 sm:size-[30px]" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-heading text-[34px] font-extrabold leading-none sm:text-[44px] tracking-tight text-[#EA6F32]/30 transition-[color,transform] duration-300 group-hover:scale-110 group-hover:text-[#EA6F32]/75 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-[18px] font-extrabold uppercase leading-[1.1] tracking-tight text-[#295C50] sm:mt-5 sm:text-[24px]">
                  {title}
                </h3>
                <p className="mt-2 max-w-[300px] text-sm leading-5 text-[#302E2A]/75 sm:text-base sm:leading-6">
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
