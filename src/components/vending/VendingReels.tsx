"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
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
  const touchStart = useRef<{ x: number; y: number } | null>(null);

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
    <section
      id="videos"
      aria-labelledby="vending-videos-title"
      className="overflow-hidden bg-[#295C50] py-14 text-white sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto w-full max-w-[960px] text-center">
          <AnimatedTitle
            id="vending-videos-title"
            text="VENDING EN ACCIÓN"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-[34px] lg:text-[40px]"
          />
          <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mx-auto mt-5 text-center text-base leading-7 text-white/80 lg:whitespace-nowrap sm:text-lg sm:leading-8">
            Conoce nuestras máquinas y descubre la experiencia Avra a través de videos reales.
          </p>
        </div>

        <div className="relative mx-auto mt-7 w-full max-w-[1000px] sm:mt-9">
          <div
            role="group"
            aria-label="Carrusel de videos. Usa las flechas del teclado o desliza para cambiar de video."
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
                select(active + (event.key === "ArrowRight" ? 1 : -1));
              }
            }}
            onTouchStart={(event) => {
              const touch = event.touches[0];
              if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
            }}
            onTouchEnd={(event) => {
              const start = touchStart.current;
              touchStart.current = null;
              const touch = event.changedTouches[0];
              if (!start || !touch) return;
              const dx = touch.clientX - start.x;
              const dy = touch.clientY - start.y;
              if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.25) {
                event.preventDefault();
                select(active + (dx < 0 ? 1 : -1));
              }
            }}
            onTouchCancel={() => { touchStart.current = null; }}
            className="relative mx-auto h-[450px] w-full max-w-[890px] touch-pan-y [--reel-step:40vw] focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-[480px] sm:[--reel-step:clamp(200px,28vw,305px)] lg:h-[540px]"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] inset-y-[15%] rounded-full bg-white/[.045] blur-3xl" />

            {reels.map((reel, index) => {
              // Cada tarjeta conserva su posición en el DOM. Solo cambia su transformación,
              // evitando saltos y reinicios visuales al cambiar el video principal.
              const relative = (index - active + reels.length) % reels.length;
              const position = relative === 0 ? 0 : relative === 1 ? 1 : -1;
              const selected = position === 0;
              const horizontal = selected
                ? "-50%"
                : position < 0
                  ? "calc(-50% - var(--reel-step))"
                  : "calc(-50% + var(--reel-step))";
              const transform = `translate3d(${horizontal}, -50%, 0) scale(${selected ? 1 : 0.89}) rotate(${selected ? 0 : position < 0 ? -2 : 2}deg)`;

              return (
                <article
                  key={reel.src}
                  style={{ transform }}
                  className={`group/video absolute left-1/2 top-1/2 aspect-[9/16] w-[min(67vw,250px)] overflow-hidden rounded-[22px] bg-[#17241F] shadow-[0_16px_38px_rgba(9,31,26,.24)] will-change-transform transition-[transform,opacity,filter,box-shadow] duration-[700ms] ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none sm:w-[clamp(205px,25vw,290px)] sm:rounded-[26px] ${selected
                    ? "z-20 opacity-100 shadow-[0_25px_55px_rgba(6,29,24,.4)]"
                    : "pointer-events-none z-10 opacity-0 brightness-75 sm:pointer-events-auto sm:cursor-pointer sm:opacity-75 sm:hover:opacity-95 sm:hover:brightness-100"}`}
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

                  <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  <button
                    type="button"
                    onClick={() => void toggle(index)}
                    aria-label={selected ? (playing === index ? `Pausar ${reel.title}` : `Reproducir ${reel.title}`) : `Seleccionar ${reel.title}`}
                    tabIndex={selected ? 0 : -1}
                    className="absolute inset-0 z-10 grid place-items-center focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
                  >
                    <span className={`grid place-items-center rounded-full border border-white/50 bg-white/90 text-[#295C50] shadow-[0_6px_24px_rgba(0,0,0,.2)] backdrop-blur-md transition-[opacity,transform] duration-300 group-hover/video:scale-105 motion-reduce:transition-none ${selected ? "size-14 sm:size-16" : "size-10 sm:size-12"} ${selected && playing === index ? "opacity-0 group-hover/video:opacity-100 group-focus-within/video:opacity-100" : "opacity-100"}`}>
                      {playing === index ? <Pause className="size-5 sm:size-6" aria-hidden="true" /> : <Play className="size-5 sm:size-6" fill="currentColor" aria-hidden="true" />}
                    </span>
                  </button>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-4 pb-5 pt-12 text-left sm:px-5 sm:pb-6">
                    <p className="font-heading text-base font-extrabold uppercase leading-tight text-white sm:text-lg">
                      {reel.title}
                    </p>
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

        </div>
      </Container>
    </section>
  );
}
