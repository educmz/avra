import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Vending saludable",
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
      <section aria-label="Presentación de máquinas Avra" className="w-full pb-6 sm:pb-8 lg:pb-10">
        <Image
          src="/images/vending/banner-vending.webp"
          alt="Nuestras máquinas de alimentación saludable Avra"
          width={1920}
          height={1080}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>
      <section className="overflow-hidden py-14 sm:py-20 lg:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[.18em] text-[#C76D00]">Vending saludable Avra</p>
            <h2 className="max-w-2xl font-heading text-[clamp(2.8rem,5.5vw,5.5rem)] uppercase leading-[.95] tracking-tight text-[#302E2A]">Comer mejor, más cerca de ti.</h2>
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
      <section aria-labelledby="avra-vending-title" className="bg-[#F4F0E8] py-14 sm:py-20">
        <Container>
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#C76D00]">Conoce los equipos</p>
            <h2 id="avra-vending-title" className="font-heading text-4xl uppercase leading-tight text-[#302E2A] sm:text-5xl">Vending más cerca de ti</h2>
            <p className="mt-4 text-base leading-7 text-[#302E2A]/75">Dos formatos de máquinas expendedoras para conocer cómo funciona el autoservicio. El equipo Nuna se muestra como referencia.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-8">
            <figure className="flex min-w-0 flex-col items-center rounded-[1.75rem] bg-[#E5EBD8] px-5 py-7 sm:px-7">
              <div className="flex h-[290px] w-full items-center justify-center sm:h-[330px] lg:h-[370px]">
                <img src="/images/vending/avra-equipo.jpg" alt="Máquina expendedora Avra naranja" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <figcaption className="mt-5 font-heading text-xl uppercase text-[#302E2A]">Equipo Avra</figcaption>
            </figure>
            <figure className="flex min-w-0 flex-col items-center rounded-[1.75rem] bg-[#E5EBD8] px-5 py-7 sm:px-7">
              <div className="flex h-[290px] w-full items-center justify-center sm:h-[330px] lg:h-[370px]">
                <img src="/images/vending/nuna-equipo.jpg" alt="Máquina expendedora Nuna con productos" loading="lazy" className="h-full w-full object-contain" />
              </div>
              <figcaption className="mt-5 font-heading text-xl uppercase text-[#302E2A]">Equipo Nuna · Referencia</figcaption>
            </figure>
          </div>
        </Container>
      </section>
      <section aria-labelledby="vending-demostracion-title" className="overflow-hidden bg-background py-14 sm:py-20">
        <Container>
          <div className="mx-auto mb-9 max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#C76D00]">Explora el formato</p>
            <h2 id="vending-demostracion-title" className="font-heading text-4xl uppercase leading-tight text-[#302E2A] sm:text-5xl">Vending en acción</h2>
            <p className="mt-4 text-base leading-7 text-[#302E2A]/75">Mira cómo funciona una máquina de autoservicio en este ejemplo de Nuna.</p>
          </div>
          <div className="relative mx-auto flex max-w-4xl items-center justify-center py-3 sm:py-6">
            <div aria-hidden="true" className="pointer-events-none absolute left-[3%] top-[12%] h-28 w-28 rounded-full border-[18px] border-[#E5EBD8] opacity-90 sm:left-[10%] sm:h-44 sm:w-44 sm:border-[25px]" />
            <div aria-hidden="true" className="pointer-events-none absolute bottom-[10%] right-[4%] h-24 w-24 rotate-12 rounded-[2rem] bg-[#F3CC8F]/55 sm:right-[12%] sm:h-40 sm:w-40" />
            <div aria-hidden="true" className="pointer-events-none absolute left-[12%] bottom-[18%] hidden h-16 w-16 rounded-full bg-[#C3D5A5]/70 md:block" />
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/vending/nuna-equipo.jpg"
              aria-label="Demostración de máquina vending Nuna"
              className="relative z-10 block max-h-[380px] w-auto max-w-[min(100%,240px)] rounded-2xl object-contain shadow-[0_16px_42px_rgba(48,46,42,0.14)] sm:max-h-[440px] sm:max-w-[280px]"
            >
              <source src="/videos/vending/nuna-demostracion.mp4" type="video/mp4" />
              Tu navegador no permite reproducir este video.
            </video>
          </div>
        </Container>
      </section>
    </main>
  );
}
