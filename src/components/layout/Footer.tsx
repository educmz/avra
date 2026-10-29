import Image from "next/image";
import Link from "next/link";
import { Leaf, Mail } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { socialLinks } from "./socialLinks";

const navigation = [
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

const footerLink = "w-fit text-sm leading-6 text-[#FBF4EF]/80 transition-colors duration-200 hover:text-[#FFC09A] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC09A]";

export function Footer() {
  return (
    <footer className="bg-[#295C50] text-[#FBF4EF]">
      <Container className="pt-12 pb-6 sm:pt-14 lg:pt-16">
        <div className="grid grid-cols-2 gap-x-7 gap-y-11 md:grid-cols-4 md:gap-10 lg:gap-14">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Avra, ir al inicio" className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC09A]">
              <Image
                src="/images/brand/avra-wordmark-black.png"
                alt="Avra"
                width={2172}
                height={724}
                className="h-auto w-[135px] brightness-0 invert sm:w-[150px]"
              />
            </Link>
            <p className="mt-3 text-base font-semibold text-[#FBF4EF]">Activa lo natural</p>
            <p className="mt-3 max-w-[26ch] text-sm leading-6 text-[#FBF4EF]/75">
              Sabores, experiencias y momentos para disfrutar cada día.
            </p>
            <div className="mt-6 flex items-center gap-3" aria-label="Redes sociales de Avra">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-[#FBF4EF]/35 text-[#FBF4EF] transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#FFC09A] hover:bg-white/10 hover:text-[#FFC09A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC09A] motion-reduce:transform-none"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explorar Avra" className="flex flex-col items-start gap-3">
            <h2 className="mb-2 font-heading text-base font-extrabold uppercase tracking-wide">Explora</h2>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={footerLink}>{item.label}</Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <h2 className="mb-2 font-heading text-base font-extrabold uppercase tracking-wide">Contacto</h2>
            <a href="mailto:hola@avra.pe" className={footerLink}>
              <span className="inline-flex items-center gap-2"><Mail size={17} aria-hidden="true" />hola@avra.pe</span>
            </a>
            <p className="text-sm leading-6 text-[#FBF4EF]/70">Atención y consultas</p>
          </div>

          <nav aria-label="Información y reclamos" className="col-span-2 flex flex-col items-start gap-3 md:col-span-1">
            <h2 className="mb-2 font-heading text-base font-extrabold uppercase tracking-wide">Información</h2>
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className={footerLink}>{item.label}</Link>
            ))}
            <Link href="/libro-de-reclamaciones" className={`${footerLink} font-semibold underline decoration-[#FBF4EF]/35 underline-offset-4`}>
              Libro de Reclamaciones
            </Link>
            <Link href="/libro-de-reclamaciones" aria-label="Acceder al Libro de Reclamaciones" className="mt-1 inline-flex rounded-lg border border-[#FBF4EF]/30 bg-[#FBF4EF] p-2 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC09A]">
              <Image src="/images/legal/libro-reclamaciones.png" alt="Libro de Reclamaciones" width={100} height={100} className="size-20 object-contain" />
            </Link>
          </nav>
        </div>

        <div className="mt-11 flex flex-col gap-3 border-t border-[#FBF4EF]/25 pt-5 text-sm text-[#FBF4EF]/70 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avra · Todos los derechos reservados</p>
          <p className="inline-flex items-center gap-2 text-[#FBF4EF]/85">
            <Leaf size={16} className="text-[#FFC09A]" aria-hidden="true" />
            Activa lo natural
          </p>
        </div>
      </Container>
    </footer>
  );
}
