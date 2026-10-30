"use client";

import {
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Store,
} from "lucide-react";
import { motion } from "motion/react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const spaces = [
  { Icon: Building2, label: "Empresas y oficinas" },
  { Icon: Factory, label: "Plantas industriales" },
  { Icon: Dumbbell, label: "Gimnasios" },
  { Icon: GraduationCap, label: "Universidades e institutos" },
  { Icon: HeartPulse, label: "Centros de salud" },
  { Icon: BriefcaseBusiness, label: "Coworkings y startups" },
  { Icon: Store, label: "Tiendas y comercios" },
  { Icon: Handshake, label: "Tu organización" },
];

export function VendingSpacesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="vending-spaces-title"
      className="bg-[#FBF4EF] py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[960px] text-center">
            <AnimatedTitle
              id="vending-spaces-title"
              text="DONDE QUIERAS, CUANDO QUIERAS"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span
              aria-hidden="true"
              className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
            />
            <p className="mx-auto mt-5 max-w-[760px] text-center text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
              Bebidas naturales, comidas y snacks en los espacios donde trabajas,
              estudias o entrenas. Una forma práctica de disfrutar cada pausa.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4 lg:gap-5">
            {spaces.map(({ Icon, label }, index) => (
              <motion.div
                key={label}
                className="h-full"
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className="group relative flex h-full min-h-[190px] flex-col items-start overflow-hidden rounded-[24px] border border-[#295C50]/15 border-t-[4px] border-t-[#EA6F32] bg-white px-6 py-6 shadow-[0_10px_28px_rgba(35,65,55,0.07)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(35,65,55,0.12)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[200px]">
                  <div className="flex w-full items-start justify-between gap-3">
                    <span className="grid size-14 shrink-0 place-items-center rounded-[16px] bg-[#E9F0EA] text-[#295C50] transition-[background-color,color,transform] duration-300 ease-out group-hover:-rotate-6 group-hover:bg-[#295C50] group-hover:text-white motion-reduce:transform-none motion-reduce:transition-none">
                      <Icon size={28} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-heading text-[42px] font-extrabold leading-none tracking-tight text-[#EA6F32]/30 transition-[color,transform] duration-300 group-hover:scale-110 group-hover:text-[#EA6F32]/75 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-[260px] font-heading text-[18px] font-extrabold uppercase leading-[1.2] tracking-tight text-[#295C50] sm:text-[19px]">
                    {label}
                  </h3>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
