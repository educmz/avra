"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

type Reel = {
  title: string;
  videoSrc: string;
  /**
   * Pega aquí la URL pública de una publicación de Instagram
   * (https://www.instagram.com/reel/CODIGO/).
   * Cuando existe, se muestra el embed oficial; de lo contrario,
   * se reproduce el video local sin simular controles de Instagram.
   */
  instagramUrl?: string;
};

const reels: Reel[] = [
  { title: "Conoce nuestras máquinas", videoSrc: "/videos/vending/tiktoks/tiktok-1.mp4", instagramUrl: "" },
  { title: "Así funciona el vending", videoSrc: "/videos/vending/tiktoks/tiktok-2.mp4", instagramUrl: "" },
  { title: "Nuestra experiencia", videoSrc: "/videos/vending/tiktoks/tiktok-3.mp4", instagramUrl: "" },
];

function instagramEmbedUrl(url?: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    if (
      parsed.protocol !== "https:" ||
      !["instagram.com", "www.instagram.com"].includes(parsed.hostname)
    ) {
      return null;
    }

    const match = parsed.pathname.match(/^\/(reel|p)\/([A-Za-z0-9_-]+)\/?$/);
    if (!match) return null;

    return `https://www.instagram.com/${match[1]}/${match[2]}/embed/?theme=light`;
  } catch {
    return null;
  }
}

export function VendingReels() {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  function select(index: number) {
    const next = (index + reels.length) % reels.length;
    if (next === active) return;

    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
    setPlaying(null);
    setActive(next);
  }

  async function toggleVideo(index: number) {
    if (index !== active) {
      select(index);
      return;
    }

    const video = videoRefs.current[index];
    if (!video) return;

    if (!video.paused) {
      video.pause();
      setPlaying(null);
      return;
    }

    videoRefs.current.forEach((other, i) => {
      if (i !== index) other?.pause();
    });

    try {
      await video.play();
      setPlaying(index);
    } catch {
      setPlaying(null);
    }
  }

  return (
    <section
      id="videos"
      aria-labelledby="vending-videos-title"
      className="overflow-hidden bg-[#295C50] py-14 text-white sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[1120px] text-center">
          <AnimatedTitle
            id="vending-videos-title"
            text="VENDING EN ACCIÓN"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-[34px] lg:text-[40px]"
          />
          <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mx-auto mt-5 max-w-[700px] text-center text-base leading-7 text-white/80 sm:text-lg sm:leading-8 lg:max-w-none lg:whitespace-nowrap">
            Mira nuestras máquinas en acción y descubre cómo se vive la experiencia de vending saludable.
          </p>
        </div>
      </Container>

      <div className="relative mx-auto mt-8 max-w-[1420px] px-2 sm:mt-10 sm:px-14">
        <div
          role="region"
          aria-roledescription="carrusel"
          aria-label="Videos de nuestras máquinas. Usa las flechas para cambiar de publicación."
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              select(active + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={(event) => {
            const touch = event.changedTouches[0];
            const start = touchStart.current;
            touchStart.current = null;
            if (!touch || !start) return;

            const deltaX = touch.clientX - start.x;
            const deltaY = touch.clientY - start.y;
            if (Math.abs(deltaX) >= 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.4) {
              event.preventDefault();
              select(active + (deltaX < 0 ? 1 : -1));
            }
          }}
          onTouchCancel={() => { touchStart.current = null; }}
          className="relative h-[565px] touch-pan-y outline-none focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-[650px] lg:h-[705px] [--reel-step:86vw] sm:[--reel-step:390px] lg:[--reel-step:clamp(400px,36vw,480px)]"
        >
          {reels.map((reel, index) => {
            const relative = (index - active + reels.length) % reels.length;
            const position = relative === 0 ? 0 : relative === 1 ? 1 : -1;
            const selected = position === 0;
            const embedUrl = instagramEmbedUrl(reel.instagramUrl);
            const horizontal =
              position === 0
                ? "-50%"
                : position < 0
                  ? "calc(-50% - var(--reel-step))"
                  : "calc(-50% + var(--reel-step))";

            return (
              <article
                key={reel.videoSrc}
                aria-label={reel.title}
                aria-roledescription="diapositiva"
                style={{
                  transform: `translate3d(${horizontal}, -50%, 0) scale(${selected ? 1 : 0.91})`,
                }}
                className={`absolute left-1/2 top-1/2 aspect-[0.59] w-[min(78vw,330px)] overflow-hidden rounded-[21px] bg-white text-[#302E2A] shadow-[0_18px_52px_rgba(4,24,21,0.25)] transition-[transform,opacity,filter,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none sm:w-[clamp(330px,30vw,390px)] lg:w-[400px] ${selected
                  ? "z-20 opacity-100 shadow-[0_26px_60px_rgba(3,28,23,0.4)]"
                  : "z-10 opacity-50 brightness-[0.8]"}`}
              >
                {embedUrl ? (
                  <>
                    <iframe
                      key={selected ? "selected" : "preview"}
                      src={embedUrl}
                      title={`Publicación de Instagram: ${reel.title}`}
                      className="h-full w-full border-0 bg-white"
                      loading={selected ? "eager" : "lazy"}
                      allow="encrypted-media; picture-in-picture; clipboard-write"
                      allowFullScreen
                      tabIndex={selected ? 0 : -1}
                    />
                    {!selected && (
                      <button
                        type="button"
                        className="absolute inset-0 z-30 cursor-pointer"
                        aria-label={`Ver publicación: ${reel.title}`}
                        onClick={() => select(index)}
                      />
                    )}
                  </>
                ) : (
                  <div className="flex h-full flex-col">
                    <div className="flex h-[57px] shrink-0 items-center justify-between gap-3 border-b border-[#E9E7E3] px-4">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#295C50] text-white">
                          <Play size={14} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <span className="block truncate font-heading text-xs font-extrabold leading-tight text-[#302E2A]">
                            Nuestras máquinas
                          </span>
                          <span className="block text-[11px] leading-tight text-[#302E2A]/60">
                            Video original
                          </span>
                        </div>
                      </div>
                      <span className="shrink-0 rounded-md bg-[#EBF1EB] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#295C50]">
                        Vending
                      </span>
                    </div>

                    <div className="group/video relative min-h-0 flex-1 overflow-hidden bg-[#142820]">
                      <video
                        ref={(node) => { videoRefs.current[index] = node; }}
                        src={reel.videoSrc}
                        className="absolute inset-0 h-full w-full object-cover"
                        preload="metadata"
                        playsInline
                        muted={muted || !selected}
                        loop
                        onPlay={() => setPlaying(index)}
                        onPause={() => setPlaying((current) => (current === index ? null : current))}
                        aria-label={reel.title}
                      />
                      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
                      <button
                        type="button"
                        onClick={() => void toggleVideo(index)}
                        className="absolute inset-0 z-10 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                        tabIndex={selected ? 0 : -1}
                        aria-label={selected && playing === index ? `Pausar ${reel.title}` : `Reproducir ${reel.title}`}
                      >
                        <span className={`grid size-14 place-items-center rounded-full border border-white/70 bg-white/95 text-[#295C50] shadow-[0_9px_24px_rgba(0,0,0,0.23)] transition-[transform,opacity] duration-300 motion-reduce:transition-none sm:size-16 ${selected && playing === index ? "opacity-0 group-hover/video:opacity-100 group-focus-within/video:opacity-100" : "opacity-100"}`}>
                          {selected && playing === index
                            ? <Pause size={25} fill="currentColor" aria-hidden="true" />
                            : <Play size={25} fill="currentColor" aria-hidden="true" />}
                        </span>
                      </button>
                      <p className="pointer-events-none absolute inset-x-4 bottom-5 z-20 font-heading text-base font-extrabold uppercase leading-tight text-white drop-shadow-md">
                        {reel.title}
                      </p>
                      {selected && (
                        <button
                          type="button"
                          onClick={() => setMuted((value) => !value)}
                          aria-label={muted ? "Activar sonido" : "Silenciar"}
                          className="absolute right-3 top-3 z-30 grid size-9 place-items-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {muted
                            ? <VolumeX size={18} aria-hidden="true" />
                            : <Volume2 size={18} aria-hidden="true" />}
                        </button>
                      )}
                    </div>

                    {!selected && (
                      <button
                        type="button"
                        onClick={() => select(index)}
                        aria-label={`Seleccionar ${reel.title}`}
                        className="absolute inset-0 z-30 cursor-pointer"
                      />
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => select(active - 1)}
          aria-label="Video anterior"
          className="absolute left-2 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[#143F35]/85 text-white shadow-lg transition-colors hover:bg-[#15372F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-3 lg:left-6"
        >
          <ChevronLeft size={29} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => select(active + 1)}
          aria-label="Siguiente video"
          className="absolute right-2 top-1/2 z-30 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-[#143F35]/85 text-white shadow-lg transition-colors hover:bg-[#15372F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-3 lg:right-6"
        >
          <ChevronRight size={29} strokeWidth={1.8} aria-hidden="true" />
        </button>

      </div>
    </section>
  );
}
