import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Sprout } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section aria-labelledby="home-hero-title" className="relative isolate overflow-hidden bg-[#F5F5DC] pb-14 pt-[112px] sm:pb-20 sm:pt-[128px] lg:pb-28 lg:pt-[148px]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-[440px] rounded-full bg-[#DDECCB]/75 blur-3xl" />
      <Container className="relative grid max-w-[1280px] items-center gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#228B22]/20 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[.16em] text-[#276B32]">
            <Leaf size={15} aria-hidden="true" /> Naturalmente Avra
          </span>
          <h1 id="home-hero-title" className="mt-7 max-w-[680px] font-sans text-[clamp(2.8rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-.055em] text-[#203F2A]">
            Una forma más <span className="text-[#228B22]">natural</span> de disfrutar tu día.
          </h1>
          <p className="mt-6 max-w-[55ch] text-base leading-[1.7] text-[#465A46] sm:text-lg">
            Sabores frescos, opciones para tu día y máquinas saludables que acercan lo bueno a donde estés.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/carta" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#228B22] px-7 py-3 font-semibold text-white shadow-[0_3px_12px_rgba(34,139,34,.15)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1B711B] motion-reduce:transform-none">
              Explorar la carta <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/maquinas" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#276B32]/30 bg-white/65 px-6 py-3 font-semibold text-[#24582D] transition-colors duration-200 hover:bg-white">
              Nuestras máquinas
            </Link>
          </div>
          <p className="mt-10 flex items-center gap-2 text-sm font-medium text-[#4D7050]"><Sprout size={17} aria-hidden="true" /> Bienestar en cada elección.</p>
        </div>
        <div className="relative lg:pl-5">
          <div className="absolute -left-3 -top-5 z-10 rounded-[1.5rem] bg-[#DCECBF] px-5 py-3 text-sm font-semibold text-[#24582D] shadow-[0_2px_12px_rgba(0,0,0,.06)]">Fresco · Práctico · Avra</div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[40px_100px_40px_100px] border border-[#A5C19A]/25 bg-[#DFEBD4] shadow-[0_24px_65px_-35px_rgba(34,80,42,.3)] sm:aspect-[6/5] lg:aspect-[4/5]">
            <Image src="/images/home/banners/home-drinks-desktop.webp" alt="Bebidas Avra para acompañar tu día" fill priority sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
          </div>
          <div aria-hidden="true" className="absolute -bottom-6 -right-4 -z-10 size-40 rounded-[65%_35%_60%_40%] bg-[#87CEEB]/35" />
        </div>
      </Container>
    </section>
  );
}
