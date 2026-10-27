"use client";

import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { socialLinks } from "./socialLinks";

const legalLinks = [
  {
    label: "Política de privacidad",
    href: "/politica-de-privacidad",
  },
  {
    label: "Política de cookies",
    href: "/politica-de-cookies",
  }
];

export function Footer() {
  return (
    <footer className="bg-[#173E3A] text-white">
      <Container className="py-11 lg:py-12">
        {/* PARTE SUPERIOR */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-16 xl:gap-20">
          {/* COLUMNA 1 */}
          <nav
            aria-label="Navegación principal del pie de página"
            className="flex flex-col items-start gap-6 md:grid md:h-[165px] md:grid-rows-3 md:gap-0"
          >
            <Link
              href="/carta"
              className="font-heading text-[1.55rem] uppercase leading-none tracking-[0.01em] transition-colors hover:text-[#D9EB31]"
            >
              Carta
            </Link>

            <Link
              href="/locales"
              className="font-heading text-[1.55rem] uppercase leading-none tracking-[0.01em] transition-colors hover:text-[#D9EB31] md:self-center"
            >
              Locales
            </Link>

            <Link
              href="/nosotros"
              className="font-heading text-[1.55rem] uppercase leading-none tracking-[0.01em] transition-colors hover:text-[#D9EB31] md:self-end"
            >
              Nosotros
            </Link>
          </nav>

          {/* COLUMNA 2 */}
          <nav
            aria-label="Información adicional"
            className="flex flex-col items-start gap-6 md:grid md:h-[165px] md:grid-rows-3 md:gap-0"
          >
            <Link
              href="/"
              className="font-heading text-[1.55rem] uppercase leading-none tracking-[0.01em] transition-colors hover:text-[#D9EB31]"
            >
              Inicio
            </Link>

            <Link
              href="/maquinas"
              className="font-heading text-[1.55rem] uppercase leading-none tracking-[0.01em] transition-colors hover:text-[#D9EB31] md:self-center"
            >
              Eventos
            </Link>
          </nav>

          {/* COLUMNA 3 */}
          <div className="flex flex-col items-start">
            <h3 className="font-heading text-[1.55rem] uppercase leading-none tracking-[0.01em]">
              Atención al cliente
            </h3>

            <div className="mt-5 space-y-2 text-sm font-semibold uppercase leading-6 text-white">
              <a
                href="tel:+51999999999"
                className="block transition-colors hover:text-[#D9EB31]"
              >
                +51 999 999 999
              </a>

              <a
                href="mailto:hola@avra.pe"
                className="block transition-colors hover:text-[#D9EB31]"
              >
                hola@avra.pe
              </a>
            </div>

            <div className="mt-5">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
                Síguenos
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="
                      grid
                      size-10
                      place-items-center
                      rounded-full
                      border
                      border-white/35
                      text-white
                      transition-all
                      hover:border-[#D9EB31]
                      hover:text-[#D9EB31]
                    "
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA 4 */}
          <div className="flex justify-start lg:justify-end">
            <Link
              href="/libro-de-reclamaciones"
              aria-label="Ir al Libro de Reclamaciones"
              className="
                flex
                h-[165px]
                w-[220px]
                items-center
                justify-center
                overflow-hidden
                rounded-md
                border
                border-white/80
                transition-colors
                hover:border-[#D9EB31]
              "
            >
              <Image
                src="/images/legal/libro-reclamaciones.png"
                alt="Libro de Reclamaciones"
                width={1254}
                height={1254}
                className="h-[190px] w-[190px] -translate-y-2 object-contain"
              />
            </Link>
          </div>
        </div>

        {/* PARTE INFERIOR */}
        <div className="mt-8 border-t border-white/20 pt-4">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* DERECHOS */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white">
              <p>© {new Date().getFullYear()} Avra</p>
              <p>Todos los derechos reservados.</p>
            </div>

            {/* LEGALES */}
            <nav
              aria-label="Información legal"
              className="flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    text-sm
                    text-white
                    transition-colors
                    duration-200
                    hover:text-[#D9EB31]
                  "
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
}
