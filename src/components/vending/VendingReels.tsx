"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Music2 } from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const tiktokProfileUrl = "https://www.tiktok.com/@nunadeuna";

/**
 * Inserción oficial del perfil de TikTok (Creator Profile Embed).
 * TikTok selecciona hasta 10 de los videos recientes del perfil público.
 * El script se vuelve a cargar al montar el componente para funcionar
 * también al navegar por la aplicación sin recargar la página.
 */
export function VendingReels() {
  const embedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = embedContainerRef.current;
    if (!container) return;

    // TikTok modifica el DOM del embed. No lo exponemos al reconciliador
    // de React para evitar errores al navegar entre páginas.
    const blockquote = document.createElement("blockquote");
    blockquote.className = "tiktok-embed";
    blockquote.setAttribute("cite", tiktokProfileUrl);
    blockquote.setAttribute("data-unique-id", "nunadeuna");
    blockquote.setAttribute("data-embed-type", "creator");
    blockquote.setAttribute("data-embed-from", "oembed");
    blockquote.style.width = "100%";
    blockquote.style.maxWidth = "720px";
    blockquote.style.minWidth = "288px";
    blockquote.style.margin = "0 auto";

    const section = document.createElement("section");
    const profileLink = document.createElement("a");
    profileLink.href = `${tiktokProfileUrl}?refer=creator_embed`;
    profileLink.target = "_blank";
    profileLink.rel = "noopener noreferrer";
    profileLink.textContent = "@nunadeuna";
    section.appendChild(profileLink);
    blockquote.appendChild(section);
    container.replaceChildren(blockquote);

    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, []);

  return (
    <section
      id="videos"
      aria-labelledby="vending-videos-title"
      className="overflow-hidden bg-[#295C50] py-14 text-white sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[960px] text-center">
          <AnimatedTitle
            id="vending-videos-title"
            text="VENDING EN ACCIÓN"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-[34px] lg:text-[40px]"
          />
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
          />
          <p className="mx-auto mt-5 max-w-[690px] text-center text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
            Conoce los últimos videos de Nuna y descubre nuestras máquinas
            en acción, directamente desde TikTok.
          </p>
        </div>

        <div className="mx-auto mt-8 w-full max-w-[760px] sm:mt-10">
          <div className="mx-auto w-full max-w-[720px]">
            <div
              ref={embedContainerRef}
              aria-label="Perfil oficial de TikTok de Nuna y sus publicaciones recientes"
              className="mx-auto w-full min-w-0"
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 text-center">
            <a
              href={tiktokProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Music2 size={17} aria-hidden="true" />
              Ver @nunadeuna en TikTok
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="text-xs leading-5 text-white/60">
              Los videos y controles son proporcionados por TikTok.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
