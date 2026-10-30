"use client";

import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react";

const reels = [
  { src: "/videos/vending/tiktoks/tiktok-1.mp4", label: "Video 1 · Conoce Avra" },
  { src: "/videos/vending/tiktoks/tiktok-2.mp4", label: "Video 2 · Vending en acción" },
  { src: "/videos/vending/tiktoks/tiktok-3.mp4", label: "Video 3 · Nuestra experiencia" },
];

export function VendingReels() {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);

  function select(index: number) {
    const next = (index + reels.length) % reels.length;
    if (next === active) return;
    videos.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
    setPlaying(null);
    setActive(next);
  }

  async function toggle(index: number) {
    if (index !== active) {
      select(index);
      return;
    }
    const video = videos.current[index];
    if (!video) return;
    if (playing === index) {
      video.pause();
      setPlaying(null);
      return;
    }
    videos.current.forEach((other, i) => { if (i !== index) other?.pause(); });
    try {
      await video.play();
      setPlaying(index);
    } catch {
      setPlaying(null);
    }
  }

  return (
    <section id="videos" aria-labelledby="vending-videos-title" className="overflow-hidden bg-[#295C50] py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="mb-8 text-center sm:mb-10">
          <AnimatedTitle id="vending-videos-title" text="Vending en acción" className="mt-2 font-heading text-[28px] font-extrabold uppercase sm:text-[34px] lg:text-[40px]" />
          <p className="mx-auto mt-6 max-w-xl text-justify text-base leading-7 text-white/80 sm:text-lg sm:leading-8">Descubre nuestras máquinas a través de videos cortos.</p>
        </div>

        <div className="relative mx-auto flex max-w-5xl items-center justify-center">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <button type="button" onClick={() => select(active - 1)} aria-label="Video anterior" className="relative z-20 mr-1 grid size-9 shrink-0 place-items-center rounded-full border border-[#295C50]/20 bg-white text-[#295C50] shadow-sm transition-colors hover:bg-[#EAF0E4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] sm:mr-5 sm:size-12"><ChevronLeft size={21} /></button>
          <div className="relative z-10 min-w-0 flex-1 aspect-[1.8] sm:aspect-[1.95]">
            {reels.map((reel, index) => {
              const selected = active === index;
              const position = (index - active + reels.length) % reels.length;
              const offset = position === 0 ? "translate(-50%, -50%) scale(1.08)" : position === 1 ? "translate(58%, -50%) scale(.88)" : "translate(-158%, -50%) scale(.88)";
              return (
                <div
                  key={reel.src}
                  style={{ transform: offset }}
                  className={`absolute left-1/2 top-1/2 w-[31%] transform-gpu overflow-hidden rounded-xl border bg-[#17241F] shadow-lg transition-[transform,opacity,box-shadow,border-color] duration-500 ease-out motion-reduce:transition-none sm:rounded-[1.5rem] ${selected ? "z-10 border-[#EA6F32]/50 opacity-100 shadow-[0_18px_45px_rgba(48,46,42,.2)]" : "z-0 border-white/20 opacity-60 shadow-[0_8px_24px_rgba(48,46,42,.1)] hover:opacity-85"}`}
                >
                  <video
                    ref={(el) => { videos.current[index] = el; }}
                    src={reel.src}
                    className="aspect-[9/16] w-full object-cover"
                    preload="metadata"
                    playsInline
                    muted={muted}
                    loop
                    onPause={() => setPlaying((current) => current === index ? null : current)}
                    onEnded={() => setPlaying(null)}
                    aria-label={reel.label}
                  />
                  <button
                    type="button"
                    aria-label={selected ? (playing === index ? "Pausar video" : "Reproducir video") : `Seleccionar ${reel.label}`}
                    aria-pressed={selected}
                    className="absolute inset-0 z-10 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                    onClick={() => void toggle(index)}
                  >
                    <span className={`grid size-8 place-items-center rounded-full bg-white/90 text-[#295C50] shadow-lg transition-[transform,opacity] duration-300 sm:size-14 ${selected ? "scale-100" : "scale-75"} ${selected && playing === index ? "opacity-0 hover:opacity-100 focus:opacity-100" : "opacity-100"}`}>
                      {playing === index ? <Pause className="size-4 sm:size-6" /> : <Play className="size-4 sm:size-6" fill="currentColor" />}
                    </span>
                  </button>
                  {selected && (
                    <button type="button" onClick={() => setMuted(!muted)} aria-label={muted ? "Activar sonido" : "Silenciar"} className="absolute bottom-2 right-2 z-20 rounded-full bg-black/65 p-1.5 text-white transition-colors hover:bg-black/85 sm:bottom-3 sm:right-3 sm:p-2">
                      {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
          <button type="button" onClick={() => select(active + 1)} aria-label="Video siguiente" className="relative z-20 ml-1 grid size-9 shrink-0 place-items-center rounded-full border border-[#295C50]/20 bg-white text-[#295C50] shadow-sm transition-colors hover:bg-[#EAF0E4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] sm:ml-5 sm:size-12"><ChevronRight size={21} /></button>
        </div>

        {/* CTA visual inspirado en "La esencia Avra" del home. */}
        <div className="mx-auto mt-9 max-w-5xl sm:mt-12">
          <div className="grid overflow-hidden rounded-[24px] bg-[#FBF4EF] shadow-[0_14px_36px_rgba(14,43,35,.13)] sm:rounded-[28px] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
            <div className="relative z-10 flex min-w-0 flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:min-h-[390px] lg:px-12">
              <AnimatedTitle
                as="h3"
                text="¿QUIERES SABER MÁS?"
                className="font-heading text-[28px] font-extrabold uppercase leading-[1.07] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
              />
              <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
              <p className="mt-6 max-w-[47ch] text-justify text-base leading-7 text-[#302E2A]/85 sm:text-lg sm:leading-8">
                Descubre cómo nuestras máquinas pueden adaptarse a tu espacio. Escríbenos y conversa con nuestro equipo sobre las opciones disponibles.
              </p>
              <a
                href={`https://wa.me/51948742332?text=${encodeURIComponent("Hola, quisiera recibir más información sobre las máquinas de vending saludable de Avra para mi espacio.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="avra-cta mt-8 w-fit"
              >
                <span>Hablar con un asesor</span>
              </a>
            </div>
            <div className="relative h-[210px] min-w-0 overflow-hidden bg-[#FBF4EF] sm:h-[280px] lg:h-auto">
              <Image
                src="/images/vending/banner-vending.png"
                alt="Máquinas expendedoras Avra y Nuna"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover object-[72%_center]"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#FBF4EF] via-transparent to-transparent lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
