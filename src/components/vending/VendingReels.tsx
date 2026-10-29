"use client";

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
    videos.current.forEach((video) => { if (video) { video.pause(); video.currentTime = 0; } });
    setPlaying(null);
    setActive(next);
  }

  async function toggle(index: number) {
    const video = videos.current[index];
    if (!video) return;
    if (playing === index) { video.pause(); setPlaying(null); return; }
    videos.current.forEach((other, i) => { if (i !== index) other?.pause(); });
    try { await video.play(); setPlaying(index); } catch { setPlaying(null); }
  }

  return (
    <section id="videos" aria-labelledby="vending-videos-title" className="overflow-hidden bg-[#EAF0E4] py-16 text-[#302E2A] sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-[#295C50]">Videos y experiencias</p>
          <h2 id="vending-videos-title" className="mt-3 font-heading text-[28px] font-extrabold uppercase sm:text-[34px] lg:text-[40px]">Vending en acción</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#302E2A]/70 sm:text-base">Descubre nuestras máquinas a través de videos cortos.</p>
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-5">
          <button onClick={() => select(active - 1)} aria-label="Video anterior" className="grid size-10 shrink-0 place-items-center rounded-full border border-[#295C50]/30 text-[#295C50] transition hover:bg-white/60 sm:size-12"><ChevronLeft /></button>
          <div className="grid min-w-0 flex-1 grid-cols-3 items-center gap-2 sm:gap-5 lg:max-w-5xl">
            {reels.map((reel, index) => (
              <div key={reel.src} className={`relative min-w-0 overflow-hidden rounded-[1.25rem] border border-white/15 bg-black transition-all duration-300 sm:rounded-[1.75rem] ${active === index ? "scale-100 opacity-100 shadow-[0_20px_60px_rgba(0,0,0,.4)]" : "scale-[.92] opacity-45"}`}>
                <video ref={(el) => { videos.current[index] = el; }} src={reel.src} className="aspect-[9/16] w-full object-cover" preload="metadata" playsInline muted={muted} loop onEnded={() => setPlaying(null)} aria-label={reel.label} />
                <button type="button" aria-label={playing === index ? "Pausar video" : "Reproducir video"} className="absolute inset-0 grid place-items-center" onClick={() => { if (active !== index) select(index); else void toggle(index); }}>
                  <span className={`grid size-9 place-items-center rounded-full bg-white/85 text-[#173A2E] shadow-lg sm:size-16 ${playing === index ? "opacity-0 transition-opacity hover:opacity-100 focus:opacity-100" : ""}`}>{playing === index ? <Pause className="size-4 sm:size-7" /> : <Play className="size-4 sm:size-7" fill="currentColor" />}</span>
                </button>
                {active === index && <button onClick={() => setMuted(!muted)} aria-label={muted ? "Activar sonido" : "Silenciar"} className="absolute bottom-3 right-3 z-10 rounded-full bg-black/70 p-2 text-white">{muted ? <VolumeX size={17}/> : <Volume2 size={17}/>}</button>}
              </div>
            ))}
          </div>
          <button onClick={() => select(active + 1)} aria-label="Video siguiente" className="grid size-10 shrink-0 place-items-center rounded-full border border-[#295C50]/30 text-[#295C50] transition hover:bg-white/60 sm:size-12"><ChevronRight /></button>
        </div>
        <p className="mt-7 text-center text-xs text-[#302E2A]/55">Selecciona un video para reproducirlo. Los videos se cargan desde Avra.</p>
      </div>
    </section>
  );
}
