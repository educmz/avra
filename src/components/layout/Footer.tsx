import Image from "next/image";
import Link from "next/link";
import { BookOpenText, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "./socialLinks";

const exploreLinks = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Vending saludable", href: "/maquinas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
];

const legalLinks = [
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
];

const linkClass =
  "w-fit text-[13px] leading-[1.45] sm:text-[14px] text-[#FBF4EF]/85 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const whatsappUrl = "https://wa.me/51948742332";


export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#295C50] font-[family-name:var(--font-manrope)] text-[#FBF4EF]">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1600 580"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path
          d="M790-115c-60 165 0 275 163 289l106 9c144 12 201 95 116 165-52 43-158 26-259 52-114 28-187 98-199 199h380c104-54 157-139 151-239-6-97-77-168-213-207-119-34-153-105-124-268Z"
          fill="#A5D1C2"
          fillOpacity=".17"
        />
        <path
          d="M1238-85c-94 90-55 192 81 212 151 23 244 120 289 240l80-461Z"
          fill="#B7DDCF"
          fillOpacity=".12"
        />
        <path
          d="M1097 580c86-72 147-126 254-155 100-28 179-20 263 36v160Z"
          fill="#B7DDCF"
          fillOpacity=".10"
        />
      </svg>

      <Container className="relative z-10 pb-4 pt-7 sm:pt-10 lg:pt-11">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-12 sm:gap-y-8 lg:grid-cols-[1.2fr_.9fr_1.12fr_1.08fr] lg:gap-x-9 xl:gap-x-14">
          <div className="col-span-2 flex min-w-0 flex-col items-start lg:col-span-1">
            <div className="flex w-full items-center justify-between gap-4 sm:w-[148px] sm:flex-col sm:gap-0 lg:w-[158px]">
              <div className="flex flex-col items-center text-center">
              <Link
                href="/"
                aria-label="Avra, ir al inicio"
                className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Image
                  src="/images/brand/avra-wordmark-black.webp"
                  alt="Avra"
                  sizes="(min-width: 1024px) 158px, (min-width: 640px) 148px, 112px"
                  width={2172}
                  height={724}
                  className="h-auto w-[112px] brightness-0 invert sm:w-[148px] lg:w-[158px]"
                />
              </Link>
              <p className="mt-1 text-[12px] font-medium sm:text-[14px]">Activa lo natural</p>
              </div>

              <div className="flex items-center justify-center gap-2 sm:mt-4 sm:gap-2.5" aria-label="Redes sociales de Avra">
                {socialLinks.map((social) => {
                  const Tag = social.href ? "a" : "span";
                  return (
                  <Tag
                    key={social.label}
                    href={social.href || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.href ? social.label : `${social.label}: enlace pendiente`}
                    aria-disabled={!social.href || undefined}
                    className="grid size-8 place-items-center rounded-lg bg-[#FBF4EF] sm:size-9 text-[#295C50] transition-all hover:-translate-y-0.5 hover:bg-[#EADFCF] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                  >
                    {social.icon}
                  </Tag>
                ); })}
              </div>
            </div>
          </div>

          <nav aria-label="Explora Avra" className="flex min-w-0 flex-col items-start">
            <h2 className="text-[16px] leading-tight tracking-[0.01em]" style={{ fontFamily: "var(--font-header), sans-serif", fontWeight: 500 }}>Explora</h2>
            <div className="mt-3 flex flex-col items-start gap-2 sm:mt-4 sm:gap-2.5">
              {exploreLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex min-w-0 flex-col items-start sm:col-span-1">
            <h2 className="text-[16px] leading-tight tracking-[0.01em]" style={{ fontFamily: "var(--font-header), sans-serif", fontWeight: 500 }}>Contacto</h2>
            <div className="mt-3 flex flex-col items-start gap-2 sm:mt-4 sm:gap-3">
              <a
                href="mailto:hola@avra.pe"
                className={`${linkClass} inline-flex items-center gap-1.5 sm:gap-2.5`}
              >
                <Mail size={19} strokeWidth={1.8} aria-hidden="true" className="size-4 shrink-0 sm:size-[19px]" />
                <span>hola@avra.pe</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} inline-flex items-center gap-1.5 sm:gap-2.5`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="size-4 shrink-0 sm:size-[19px]">
                  <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.6-4.8A8.5 8.5 0 1 1 20.5 11.5Z" />
                  <path d="M9 8.4c-.3.1-.6.8-.6 1.3 0 1.7 2.5 4.8 4.8 5.8 1.5.6 2.4.5 2.8-.4l.2-.7-2.2-1.1-.9 1c-1.2-.6-2.2-1.6-2.8-2.8l1-1L10.2 8.3Z" />
                </svg>
                <span>+51 948 742 332</span>
              </a>
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-[#FBF4EF]/75 sm:mt-5 sm:text-[13px]">
              <span className="block sm:whitespace-nowrap">¿Tienes alguna consulta?</span>
              <span className="block sm:whitespace-nowrap">Estamos para ayudarte</span>
            </p>
          </div>

          <nav aria-label="Información legal" className="col-span-2 grid min-w-0 grid-cols-2 gap-x-4 sm:col-span-1 sm:flex sm:flex-col sm:items-start">
            <h2 className="col-span-2 text-[16px] leading-tight tracking-[0.01em]" style={{ fontFamily: "var(--font-header), sans-serif", fontWeight: 500 }}>Legal</h2>
            <div className="mt-3 flex flex-col items-start gap-2 sm:mt-4 sm:gap-2.5">
              <Link href={legalLinks[0].href} className={linkClass}>
                {legalLinks[0].label}
              </Link>
              <Link href="/terminos-y-condiciones" className={linkClass}>
                Términos y condiciones
              </Link>
              <Link href={legalLinks[1].href} className={linkClass}>
                {legalLinks[1].label}
              </Link>
            </div>
            <Link
              href="/libro-de-reclamaciones"
              aria-label="Ir al Libro de Reclamaciones de Avra"
              className="group mt-3 inline-flex min-h-[69px] w-full max-w-full flex-col items-center justify-center gap-1 rounded-xl border border-[#FBF4EF]/45 bg-white/[.025] px-2 py-2 text-center transition-colors hover:border-[#FBF4EF]/80 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:mt-4 sm:w-[190px] sm:flex-row sm:gap-3.5 sm:px-3"
            >
              <BookOpenText size={22} strokeWidth={1.6} aria-hidden="true" className="size-[18px] shrink-0 sm:size-[22px]" />
              <span className="font-[family-name:var(--font-header)] text-[11px] font-semibold leading-tight sm:ml-1 sm:text-[13px]">
                Libro de<br />Reclamaciones
              </span>
            </Link>
          </nav>
        </div>

        <div className="mt-6 border-t border-[#FBF4EF]/25 pt-4 sm:mt-9">
          <div className="flex flex-col gap-1.5 text-center text-[11px] text-[#FBF4EF]/85 sm:flex-row sm:text-left sm:gap-2 sm:text-[12px] sm:items-center sm:justify-between lg:grid lg:grid-cols-[1.2fr_.9fr_1.12fr_1.08fr] lg:items-start lg:gap-x-9 xl:gap-x-14">
            <p className="lg:col-span-3">© {new Date().getFullYear()} Avra. Todos los derechos reservados.</p>
            <p className="lg:col-start-4">Desarrollado por <span className="font-semibold text-[#FBF4EF]">educmz</span></p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
