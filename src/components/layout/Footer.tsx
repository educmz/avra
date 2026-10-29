import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

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
  { label: "Privacidad", href: "/politica-de-privacidad" },
  { label: "Cookies", href: "/politica-de-cookies" },
  { label: "Libro de Reclamaciones", href: "/libro-de-reclamaciones" },
];

const footerLink = "w-fit text-sm leading-6 text-[#FBF4EF]/80 transition-colors duration-200 hover:text-[#FFC09A] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC09A]";

export function Footer() {
  return (
    <footer className="bg-[#295C50] text-[#FBF4EF]">
      <Container className="pb-5 pt-8 sm:pt-10 lg:pt-11">
        <div className="grid grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-[1.5fr_1fr_1fr] md:gap-9 lg:gap-14">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Avra, ir al inicio" className="inline-block rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC09A]">
              <Image src="/images/brand/avra-wordmark-black.png" alt="Avra" width={2172} height={724} className="h-auto w-[125px] brightness-0 invert sm:w-[135px]" />
            </Link>
            <p className="mt-2 text-sm font-semibold">Activa lo natural</p>
            <p className="mt-2 max-w-[30ch] text-sm leading-6 text-[#FBF4EF]/75">
              Sabores, experiencias y momentos para disfrutar cada día.
            </p>
            <div className="mt-4 flex items-center gap-2.5" aria-label="Redes sociales de Avra">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="grid size-9 place-items-center rounded-full border border-[#FBF4EF]/35 text-[#FBF4EF] transition-[color,border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#FFC09A] hover:bg-white/10 hover:text-[#FFC09A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC09A] motion-reduce:transform-none">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Explorar Avra" className="flex flex-col items-start gap-1.5">
            <h2 className="mb-1 font-heading text-base font-extrabold uppercase tracking-wide">Explora</h2>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className={footerLink}>{item.label}</Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-2">
            <h2 className="mb-1 font-heading text-base font-extrabold uppercase tracking-wide">Contacto</h2>
            <a href="mailto:hola@avra.pe" className={footerLink}>
              <span className="inline-flex items-center gap-2"><Mail size={16} aria-hidden="true" />hola@avra.pe</span>
            </a>
            <p className="text-sm leading-6 text-[#FBF4EF]/70">Atención y consultas</p>
            <Link href="/libro-de-reclamaciones" aria-label="Acceder al Libro de Reclamaciones" className="mt-1 inline-flex rounded-md border border-[#FBF4EF]/25 bg-[#FBF4EF] p-1 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFC09A]">
              <Image src="/images/legal/libro-reclamaciones.png" alt="Libro de Reclamaciones" width={100} height={100} className="size-14 object-contain" />
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[#FBF4EF]/25 pt-4 text-xs text-[#FBF4EF]/75 sm:mt-9 sm:text-sm">
          <div className="flex flex-col items-center gap-3 text-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
            <p className="lg:justify-self-start">Desarrollado por <span className="font-semibold text-[#FBF4EF]">educmz</span></p>
            <p className="lg:justify-self-center">© {new Date().getFullYear()} Avra · Todos los derechos reservados</p>
            <nav aria-label="Enlaces legales" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:justify-self-end lg:flex-nowrap">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-[#FFC09A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC09A]">
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
