import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
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

const linkClass = "text-sm text-[#FBF4EF]/85 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

export function Footer() {
  return (
    <footer className="bg-[#295C50] text-[#FBF4EF]">
      <Container className="pb-5 pt-8 sm:pt-9">
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,1.8fr)_minmax(0,1fr)_minmax(0,.95fr)] xl:items-start xl:gap-x-9">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link href="/" aria-label="Avra, ir al inicio" className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <Image src="/images/brand/avra-wordmark-black.png" alt="Avra" width={2172} height={724} className="h-auto w-[120px] brightness-0 invert" />
            </Link>
            <p className="mt-1.5 text-sm font-medium text-[#FBF4EF]/90">Activa lo natural</p>
            <p className="mt-2 max-w-[25ch] text-sm leading-5 text-[#FBF4EF]/70">Sabores y opciones prácticas para cada momento del día.</p>
            <div className="mt-3 flex items-center gap-2" aria-label="Redes sociales de Avra">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="grid size-8 place-items-center rounded-full border border-[#FBF4EF]/35 text-[#FBF4EF] transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Navegación del pie de página" className="text-center sm:text-left xl:justify-self-center xl:text-center">
            <h2 className="font-heading text-sm font-bold uppercase tracking-[.14em]">Descubre Avra</h2>
            <div className="mt-4 flex flex-col items-center gap-2.5 sm:items-start xl:items-center">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>{item.label}</Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left xl:justify-self-end">
            <h2 className="font-heading text-sm font-bold uppercase tracking-[.14em]">Contacto</h2>
            <a href="mailto:hola@avra.pe" className={`${linkClass} inline-flex items-center gap-2`}>
              <Mail size={16} aria-hidden="true" />hola@avra.pe
            </a>
            <a href="https://wa.me/51948742332" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
              <MessageCircle size={16} aria-hidden="true" />+51 948 742 332
            </a>
          </div>

          <div className="flex flex-col items-center text-center sm:items-start sm:text-left xl:justify-self-end">
            <h2 className="font-heading text-sm font-bold uppercase tracking-[.10em]">Libro de Reclamaciones</h2>
            <Link href="/libro-de-reclamaciones" aria-label="Ir al Libro de Reclamaciones" className="mt-2 inline-flex w-fit items-center justify-center rounded-md transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <Image src="/images/legal/libro-reclamaciones.png" alt="Aviso del Libro de Reclamaciones" width={240} height={240} className="size-[125px] object-contain sm:size-[140px] xl:size-[155px]" />
            </Link>
          </div>
        </div>

        <div className="mt-7 border-t border-[#FBF4EF]/20 pt-4 sm:mt-8">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-[#FBF4EF]/75 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-5 lg:text-sm">
            <p className="lg:justify-self-start">Desarrollado por <span className="font-semibold text-[#FBF4EF]">educmz</span></p>
            <p>© {new Date().getFullYear()} Avra. Todos los derechos reservados</p>
            <nav aria-label="Información legal" className="flex flex-wrap justify-center gap-x-4 gap-y-1 lg:justify-self-end">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
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
