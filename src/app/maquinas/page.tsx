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
        <div className="relative isolate flex h-[clamp(190px,43vw,270px)] w-full items-center overflow-hidden bg-[#E5EBD8] md:h-[clamp(220px,26vw,360px)]">
          <div aria-hidden="true" className="absolute -right-[10%] -top-[70%] h-[190%] w-[65%] rounded-full bg-[#C3D5A5] sm:-right-[5%]" />
          <div aria-hidden="true" className="absolute right-[16%] bottom-[-65%] size-[65vw] max-h-[550px] max-w-[550px] rounded-full bg-[#F3CC8F]/70" />
          <div className="relative z-10 w-3/5 pl-[max(24px,calc((100vw-1280px)/2+24px))] pr-3 md:w-1/2 md:pr-2 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))]">
            <h1 className="font-heading text-[clamp(28px,6.4vw,40px)] font-extrabold uppercase leading-[1.12] tracking-tight text-[#302E2A] md:text-[clamp(22px,4.8vw,76px)] md:leading-[1.08]">
              <span className="block">VENDING</span>
              <span className="block">SALUDABLES</span>
            </h1>
          </div>
          <div className="absolute inset-y-0 right-[1%] w-[44%] sm:right-[5%] sm:w-[40%]">
            <Image src="/images/home/vending-machine/avra-vending-machine.png" alt="Máquina expendedora Avra" fill priority sizes="(min-width: 768px) 40vw, 44vw" className="object-contain object-center" />
          </div>
        </div>
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
      <section aria-labelledby="avra-vending-title" className="bg-[#F4F0E8] py-16 sm:py-20">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#C76D00]">Nuestro equipo</p>
            <h2 id="avra-vending-title" className="font-heading text-4xl uppercase leading-tight text-[#302E2A] sm:text-5xl">Conoce el vending Avra</h2>
            <p className="mt-4 text-base leading-7 text-[#302E2A]/75">Una propuesta práctica para acercar opciones de alimentación a más espacios.</p>
          </div>
          <div className="grid items-center gap-8 rounded-[2rem] bg-[#E5EBD8] p-5 sm:p-8 lg:grid-cols-[.85fr_1.15fr] lg:p-12">
            <div>
              <h3 className="font-heading text-3xl uppercase text-[#302E2A] sm:text-4xl">Avra, más cerca de ti</h3>
              <p className="mt-4 max-w-md text-base leading-7 text-[#302E2A]/80">Una solución de autoservicio pensada para sumar practicidad a tu rutina.</p>
            </div>
            <div className="flex min-h-[380px] items-center justify-center overflow-hidden rounded-2xl bg-white/50 p-4 sm:min-h-[500px]">
              <img src="/images/vending/avra-equipo.jpg" alt="Máquina Avra de color naranja" loading="lazy" className="max-h-[620px] w-full object-contain" />
            </div>
          </div>
        </Container>
      </section>
      <section aria-labelledby="vending-demostracion-title" className="bg-background py-16 sm:py-20">
        <Container>
          <div className="mb-9 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.18em] text-[#C76D00]">Explora el formato</p>
            <h2 id="vending-demostracion-title" className="font-heading text-4xl uppercase leading-tight text-[#302E2A] sm:text-5xl">Vending en acción</h2>
            <p className="mt-4 text-base leading-7 text-[#302E2A]/75">Ejemplo visual de un equipo de vending de otra marca (Nuna). Se muestra únicamente como referencia del formato.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#302E2A] p-3 sm:p-5">
              <video controls playsInline preload="metadata" poster="/images/vending/nuna-equipo.jpg" aria-label="Video de referencia de máquina vending Nuna" className="aspect-[9/16] max-h-[700px] w-full rounded-xl bg-black object-contain">
                <source src="/videos/vending/nuna-demostracion.mp4" type="video/mp4" />
                Tu navegador no permite reproducir este video.
              </video>
              <p className="mt-3 text-center text-sm font-medium text-white/80">Video de referencia · Nuna</p>
            </div>
            <figure className="flex flex-col overflow-hidden rounded-[1.75rem] bg-[#E5EBD8] p-3 sm:p-5">
              <div className="flex min-h-[350px] flex-1 items-center justify-center rounded-xl bg-white/50 p-3">
                <img src="/images/vending/nuna-equipo.jpg" alt="Máquina de vending Nuna con productos en exhibición" loading="lazy" className="max-h-[700px] w-full object-contain" />
              </div>
              <figcaption className="mt-3 text-center text-sm font-medium text-[#302E2A]/75">Imagen de referencia · Nuna</figcaption>
            </figure>
          </div>
        </Container>
      </section>
    </main>
  );
}
