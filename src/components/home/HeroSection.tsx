import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section aria-labelledby="home-hero-title" className="relative isolate overflow-hidden bg-[#D9EB31] pb-12 pt-[112px] sm:pb-16 sm:pt-[130px] lg:pb-20 lg:pt-[148px]">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-[#8CD5EE]/45 blur-3xl" />
      <Container className="relative grid max-w-[1280px] items-center gap-10 lg:grid-cols-[.93fr_1.07fr] lg:gap-14">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFF8F1] px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-[#173E3A]">
            <Leaf size={15} aria-hidden="true" /> Fresco, rico y a tu manera
          </div>
          <h1 id="home-hero-title" className="max-w-[670px] font-sans text-[clamp(3.3rem,6.25vw,6.3rem)] font-black leading-[.93] tracking-[-.065em] text-[#1E3431]">
            Comer rico.<br /><span className="text-[#147F73]">Sentirte bien.</span>
          </h1>
          <p className="mt-7 max-w-[48ch] text-base leading-[1.7] text-[#2D4945] sm:text-lg">
            Lo fresco se disfruta más. Descubre nuestras opciones para tu día y las máquinas saludables Avra, siempre cerca.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/carta" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#173E3A] px-7 py-3 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#10564F] motion-reduce:transform-none">
              Explora nuestra carta <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link href="/maquinas" className="inline-flex min-h-12 items-center gap-3 rounded-full border-2 border-[#173E3A] px-6 py-3 text-sm font-bold text-[#173E3A] transition-colors hover:bg-[#D8EAC4]">
              Conoce las máquinas
            </Link>
          </div>
          <p className="mt-8 text-sm font-semibold tracking-wide text-[#236D62]">SABOR • FRESCURA • BIENESTAR</p>
        </div>
        <div className="relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[32px_100px_32px_100px] bg-[#8CD5EE] shadow-[0_24px_60px_-40px_rgba(22,65,30,.35)] sm:aspect-[6/5] lg:aspect-[4/5]">
            <Image src="/images/home/banners/home-drinks-desktop.webp" alt="Bebidas Avra frescas para disfrutar durante el día" fill priority sizes="(min-width: 1024px) 49vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-3 rounded-[20px] bg-[#FFF8F1] px-5 py-4 text-sm font-bold text-[#1E3431] shadow-[0_8px_24px_rgba(25,59,31,.13)] sm:-left-8">Lo bueno está más cerca.</div>
        </div>
      </Container>
    </section>
  );
}
