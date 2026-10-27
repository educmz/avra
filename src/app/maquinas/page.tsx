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
    <main className="bg-background pt-[88px] sm:pt-24 lg:pt-28">
      <section className="overflow-hidden py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#C76D00]">Máquinas saludables Avra</p>
            <h1 className="max-w-2xl font-heading text-[clamp(2.8rem,5.5vw,5.5rem)] uppercase leading-[.95] tracking-tight text-[#302E2A]">Comer mejor, más cerca de ti.</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#302E2A]/80 sm:text-lg">
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
            <Link href="/carta" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-[#FF8A00] px-6 py-3 text-sm font-bold text-[#21190F] transition-colors hover:bg-[#F5A328]">
              Explora nuestras opciones <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#E5EBD8] sm:min-h-[520px]">
            <Image src="/images/home/vending-machine/avra-vending-machine.png" alt="Máquina expendedora Avra" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-contain p-5 sm:p-8" />
          </div>
        </Container>
      </section>
    </main>
  );
}
