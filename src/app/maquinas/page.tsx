import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Máquinas saludables",
  description: "Conoce las máquinas expendedoras saludables Avra: una alternativa práctica para acercar opciones de alimentación a tus espacios.",
};

const benefits = [
  "Opciones de alimentación para el día a día",
  "Acceso práctico en espacios compartidos",
  "Una propuesta enfocada en bienestar y conveniencia",
];

export default function MachinesPage() {
  return (
    <main className="bg-[#F5F5DC] pt-[96px] sm:pt-[110px] lg:pt-[128px]">
      <section className="overflow-hidden py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#228B22]">Máquinas saludables Avra</p>
            <h1 className="max-w-2xl font-sans text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-[#203F2A]">Comer mejor, más cerca de ti.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#465A46] sm:text-lg">
              Estamos enfocando Avra en opciones de alimentación saludable y máquinas expendedoras que acerquen alternativas prácticas a distintos espacios.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-sm font-medium sm:text-base">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#228B22]" size={20} aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link href="/carta" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#228B22] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1B711B]">
              Explora nuestras opciones <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[40px_96px_40px_96px] border border-[#24572E]/10 bg-[#DCE8CF] sm:min-h-[520px]">
            <Image src="/images/home/vending-machine/avra-vending-machine.png" alt="Máquina expendedora Avra" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-5 sm:p-8" />
          </div>
        </Container>
      </section>
    </main>
  );
}
