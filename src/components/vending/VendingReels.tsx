"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const reels = [
  { src: "/videos/vending/tiktoks/tiktok-1.mp4", title: "Conoce Avra" },
  { src: "/videos/vending/tiktoks/tiktok-2.mp4", title: "Vending en acción" },
  { src: "/videos/vending/tiktoks/tiktok-3.mp4", title: "Nuestra experiencia" },
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

  // Mantiene siempre el video seleccionado en el centro, con una vista previa a cada lado.
  const ordered = [(active + reels.length - 1) % reels.length, active, (active + 1) % reels.length];

  return (
    <section id="videos" aria-labelledby="vending-videos-title" className="overflow-hidden bg-[#295C50] py-14 text-white sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedTitle
            id="vending-videos-title"
            text="VENDING EN ACCIÓN"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-[34px] lg:text-[40px]"
          />
          <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mx-auto mt-5 max-w-xl text-center text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            Conoce nuestras máquinas y descubre la experiencia Avra a través de videos reales.
          </p>
        </div>

        <div className="mx-auto mt-9 flex max-w-[1080px] items-center justify-center gap-2 sm:mt-11 sm:gap-4 lg:gap-7">
          <button
            type="button"
            onClick={() => select(active - 1)}
            aria-label="Video anterior"
            className="z-20 grid size-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_5px_18px_rgba(0,0,0,.12)] backdrop-blur-md transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-12"
          >
            <ChevronLeft size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>

          <div className="grid min-w-0 flex-1 grid-cols-1 items-center justify-items-center gap-4 sm:grid-cols-[minmax(0,.86fr)_minmax(0,1fr)_minmax(0,.86fr)] sm:gap-4 lg:gap-7">
            {ordered.map((index, position) => {
              const reel = reels[index];
              const selected = index === active;
              return (
                <article
                  key={reel.src}
                  className={`group/video relative aspect-[9/16] w-full overflow-hidden rounded-[20px] border bg-[#17241F] shadow-[0_14px_34px_rgba(9,31,26,.22)] transition-[opacity,transform,border-color,box-shadow] duration-300 motion-reduce:transition-none sm:rounded-[24px] ${selected
                    ? "z-10 max-w-[275px] border-white/60 shadow-[0_22px_48px_rgba(8,27,23,.35)]"
                    : "hidden max-w-[240px] translate-y-3 border-white/15 opacity-75 hover:translate-y-1 hover:border-white/40 hover:opacity-100 sm:block"}`}
                >
                  <video
                    ref={(element) => { videos.current[index] = element; }}
                    src={reel.src}
                    className="absolute inset-0 h-full w-full object-cover"
                    preload="metadata"
                    playsInline
                    muted={muted}
                    loop
                    onPause={() => setPlaying((current) => current === index ? null : current)}
                    onEnded={() => setPlaying(null)}
                    aria-label={reel.title}
                  />
                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/20" />

                  <div aria-hidden="true" className="pointer-events-none absolute left-4 top-4 z-20 rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[11px] font-bold tracking-[.16em] text-white/90 backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")} / {String(reels.length).padStart(2, "0")}
                  </div>

                  <button
                    type="button"
                    onClick={() => void toggle(index)}
                    aria-label={selected ? (playing === index ? `Pausar ${reel.title}` : `Reproducir ${reel.title}`) : `Seleccionar ${reel.title}`}
                    aria-pressed={selected}
                    className="absolute inset-0 z-10 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                  >
                    <span className={`grid place-items-center rounded-full border border-white/50 bg-white/90 text-[#295C50] shadow-[0_6px_24px_rgba(0,0,0,.2)] backdrop-blur-md transition-[opacity,transform] duration-200 group-hover/video:scale-105 motion-reduce:transition-none ${selected ? "size-14 sm:size-16" : "size-10 sm:size-12"} ${selected && playing === index ? "opacity-0 group-hover/video:opacity-100 group-focus-within/video:opacity-100" : "opacity-100"}`}>
                      {playing === index ? <Pause className="size-5 sm:size-6" aria-hidden="true" /> : <Play className="size-5 sm:size-6" fill="currentColor" aria-hidden="true" />}
                    </span>
                  </button>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-4 pb-5 pt-12 text-left sm:px-5 sm:pb-6">
                    <p className="font-heading text-base font-extrabold uppercase leading-tight text-white sm:text-lg">
                      {reel.title}
                    </p>
                    {selected && <p className="mt-1 text-xs text-white/75">Avra · Vending saludable</p>}
                  </div>

                  {selected && (
                    <button
                      type="button"
                      onClick={() => setMuted((current) => !current)}
                      aria-label={muted ? "Activar sonido" : "Silenciar"}
                      className="absolute right-3 top-3 z-30 grid size-9 place-items-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur-md transition-colors hover:bg-black/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4 sm:top-4"
                    >
                      {muted ? <VolumeX size={17} aria-hidden="true" /> : <Volume2 size={17} aria-hidden="true" />}
                    </button>
                  )}
                </article>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => select(active + 1)}
            aria-label="Video siguiente"
            className="z-20 grid size-10 shrink-0 place-items-center rounded-full border border-white/25 bg-white/10 text-white shadow-[0_5px_18px_rgba(0,0,0,.12)] backdrop-blur-md transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-12"
          >
            <ChevronRight size={22} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <div role="group" aria-label="Seleccionar video" className="mt-7 flex justify-center gap-1.5 sm:mt-9">
          {reels.map((reel, index) => (
            <button
              key={reel.src}
              type="button"
              onClick={() => select(index)}
              aria-label={`Ver video ${index + 1}: ${reel.title}`}
              aria-current={active === index ? "true" : undefined}
              className="grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span aria-hidden="true" className={`block h-1.5 rounded-full transition-[width,background-color] duration-300 motion-reduce:transition-none ${active === index ? "w-5 bg-[#EA6F32]" : "w-1.5 bg-white/45 hover:bg-white/80"}`} />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}
