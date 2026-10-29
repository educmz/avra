import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Novedades y contenidos de Avra sobre alimentos y bienestar.",
};

export default function BlogPage() {
  return (
    <div className="bg-background pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <section className="mx-auto flex min-h-[55vh] max-w-5xl flex-col items-start justify-center px-6 py-20 sm:px-10">
        <p className="mb-4 font-[family-name:var(--font-header)] text-sm font-semibold uppercase tracking-[0.2em] text-[#295C50]">Avra · Blog</p>
        <h1 className="font-heading text-[28px] font-extrabold uppercase tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]">Próximamente</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#302E2A]/75 sm:text-lg">
          Estamos preparando un espacio para compartir novedades, ideas y contenidos sobre alimentación y bienestar.
        </p>
        <Link href="/" className="mt-9 inline-flex min-h-12 items-center rounded-xl bg-[#295C50] px-6 font-[family-name:var(--font-header)] text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1D453B]">
          Volver al inicio
        </Link>
      </section>
    </div>
  );
}
