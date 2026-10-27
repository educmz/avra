import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const vendingBenefits = [
  "Disponibilidad durante todo el día",
  "Instalación práctica y ordenada",
  "Opciones para una alimentación más consciente",
] as const;

export function VendingSection() {
  return (
    <section
      aria-labelledby="vending-title"
      className={`${styles.section} bg-[#EAF1DF]`}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* CONTENIDO */}
          <div>
            <HomeHeading
              id="vending-title"
              eyebrow="máquinas avra"
            >
              Alimentación práctica, donde la necesites
            </HomeHeading>

            <div className="space-y-3">
              {vendingBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm font-semibold text-[#203F2A] sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#228B22] text-white">
                    <Check
                      size={15}
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>

                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/maquinas"
                className="group inline-flex items-center gap-3 rounded-full bg-[#228B22] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1B711B]"
              >
                Conoce nuestras máquinas

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF8A00]">
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative min-h-[430px] overflow-hidden rounded-[40px_96px_40px_96px] bg-[#DCE8CF] sm:min-h-[530px]">
            <HomeImage
                src="/images/home/vending-machine/avra-vending-machine.png"
                alt="Máquina expendedora Avra"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-center lg:object-right"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
