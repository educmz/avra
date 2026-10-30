import type { Metadata } from "next";
import Image from "next/image";
import { VendingReels } from "@/components/vending/VendingReels";
import { VendingBenefitsSection } from "@/components/vending/VendingBenefitsSection";
import { VendingSpacesSection } from "@/components/vending/VendingSpacesSection";
import { AvraMachineSection } from "@/components/vending/AvraMachineSection";
import { NunaMachineSection } from "@/components/vending/NunaMachineSection";
import { VendingContactSection } from "@/components/vending/VendingContactSection";

export const metadata: Metadata = {
  title: "Vending saludable",
  description: "Conoce las máquinas Avra y Nuna, sus productos y su funcionamiento. Bebidas naturales y comidas prácticas en un formato de autoservicio.",
};


export default function MachinesPage() {
  return (
    <main className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <section aria-label="Presentación de máquinas Avra" className="w-full pb-6 sm:pb-8 lg:pb-10">
        <div className="relative isolate h-[220px] w-full overflow-hidden sm:h-auto sm:aspect-[1530/380]">
          <Image
            src="/images/vending/banner-vending.png"
            alt="Máquinas expendedoras Avra y Nuna"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 z-10 flex w-[49%] items-center pl-[11%] sm:pl-[13%]">
            <div className="max-w-[540px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]">
              <p className="font-[family-name:var(--font-header)] text-[clamp(7px,1.1vw,17px)] font-medium uppercase tracking-[0.3em]">
                Nuestras
              </p>
              <h1 className="mt-[0.36em] font-heading text-[clamp(19px,4.7vw,78px)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em]">
                Máquinas
              </h1>
              <p className="mt-[1em] max-w-[32ch] font-[family-name:var(--font-header)] text-[clamp(7px,1.05vw,16px)] font-medium uppercase leading-[1.55] tracking-[0.2em]">
                Alimentación saludable,<br className="hidden sm:block" /> siempre disponible
              </p>
              <svg aria-hidden="true" viewBox="0 0 200 36" fill="none" className="mt-[0.65em] block w-[62%] max-w-[320px] overflow-visible"><path d="M4 8 C 46 36, 117 32, 194 5" stroke="#EA6F32" strokeWidth="5.5" strokeLinecap="round" /><path d="M14 13 C 61 34, 129 26, 187 9" stroke="#F49A64" strokeWidth="1.8" strokeLinecap="round" opacity="0.68" /><path d="M15 19 C 60 34, 114 32, 160 19" stroke="#C95828" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" /></svg>
            </div>
          </div>
        </div>
      </section>

      <VendingBenefitsSection />
      <AvraMachineSection />
      <NunaMachineSection />
      <VendingReels />
      <VendingSpacesSection />
      <VendingContactSection />
    </main>
  );
}
