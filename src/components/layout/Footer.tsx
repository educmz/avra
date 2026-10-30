import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpenText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { socialLinks } from "./socialLinks";

const exploreLinks = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Vending saludable", href: "/maquinas" },
  { label: "Blog", href: "/blog" },
];

const companyLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
];

const linkClass =
  "w-fit text-[14px] leading-[1.45] text-[#FBF4EF]/85 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

const whatsappUrl = "https://wa.me/51948742332";
const quoteUrl = "https://wa.me/51948742332?text=Hola%2C%20quiero%20cotizar%20una%20m%C3%A1quina%20vending%20de%20Avra.";

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

      <Container className="relative z-10 pb-4 pt-9 sm:pt-10 lg:pt-11">
        <div className="grid grid-cols-2 gap-x-7 gap-y-8 sm:gap-x-12 lg:grid-cols-[1.25fr_1fr_1fr_1.04fr] lg:gap-x-9 xl:gap-x-14">
          <div className="col-span-2 flex min-w-0 flex-col items-start lg:col-span-1">
            <Link
              href="/"
              aria-label="Avra, ir al inicio"
              className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src="/images/brand/avra-wordmark-black.png"
                alt="Avra"
                width={2172}
                height={724}
                className="h-auto w-[148px] brightness-0 invert lg:w-[158px]"
              />
            </Link>
            <p className="mt-1 text-[14px] font-medium">Activa lo natural.</p>

            <address className="mt-4 flex flex-col gap-0.5 not-italic text-[14px] leading-[1.45] text-[#FBF4EF]/90">
              <span>Lima, Perú</span>
              <a href="mailto:hola@avra.pe" className={linkClass}>hola@avra.pe</a>
              <a href="tel:+51948742332" className={linkClass}>+51 948 742 332</a>
            </address>

            <div className="mt-4 flex items-center gap-2.5" aria-label="Redes sociales de Avra">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-9 place-items-center rounded-lg bg-[#FF8A00] text-[#224E43] transition-all hover:-translate-y-0.5 hover:bg-[#FBF4EF] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explora Avra" className="flex min-w-0 flex-col items-start">
            <h2 className="font-[family-name:var(--font-header)] text-[16px] font-semibold">Explora</h2>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              {exploreLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Empresa e información legal" className="flex min-w-0 flex-col items-start">
            <h2 className="font-[family-name:var(--font-header)] text-[16px] font-semibold">Empresa</h2>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              {companyLinks.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="col-span-2 flex min-w-0 flex-col items-start lg:col-span-1">
            <h2 className="font-[family-name:var(--font-header)] text-[16px] font-semibold">Contacto</h2>
            <div className="mt-4 flex flex-col items-start gap-2.5">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Cotiza una máquina
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                WhatsApp
              </a>
            </div>

            <Link
              href="/libro-de-reclamaciones"
              aria-label="Ir al Libro de Reclamaciones de Avra"
              className="group mt-5 inline-flex min-h-[78px] w-[198px] max-w-full items-center justify-center gap-2.5 rounded-xl border border-[#FBF4EF]/45 bg-white/[.025] px-3.5 py-3 text-center transition-colors hover:border-[#FBF4EF]/80 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <BookOpenText size={24} strokeWidth={1.6} aria-hidden="true" className="shrink-0" />
              <span className="font-[family-name:var(--font-header)] text-[13px] font-semibold leading-tight">
                Libro de<br />Reclamaciones
              </span>
              <ArrowUpRight size={16} aria-hidden="true" className="self-start opacity-65 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[#FBF4EF]/25 pt-4 sm:mt-9">
          <div className="flex flex-col gap-2 text-[12px] text-[#FBF4EF]/85 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Avra. Todos los derechos reservados.</p>
            <p>Diseño y desarrollo <span className="font-semibold text-[#FBF4EF]">educmz</span></p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
