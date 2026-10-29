"use client";

import { getImageProps } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 6000;
const slides = [
  { id: "slide-01", src: "/images/home/carousel/slide-01.png", alt: "Avra: imagen 1 del carrusel principal" },
  { id: "slide-02", src: "/images/home/carousel/slide-02.png", alt: "Avra: imagen 2 del carrusel principal" },
  { id: "slide-03", src: "/images/home/carousel/slide-03.png", alt: "Avra: imagen 3 del carrusel principal" },
  { id: "slide-04", src: "/images/home/carousel/slide-04.png", alt: "Avra: imagen 4 del carrusel principal" },
  { id: "slide-05", src: "/images/home/carousel/slide-05.png", alt: "Avra: imagen 5 del carrusel principal" },
  { id: "slide-06", src: "/images/home/carousel/slide-06.png", alt: "Avra: imagen 6 del carrusel principal" },
  { id: "slide-07", src: "/images/home/carousel/slide-07.png", alt: "Avra: imagen 7 del carrusel principal" },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);
    return () => media.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setHidden(document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (paused || hidden || reducedMotion) return;
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [paused, hidden, reducedMotion, activeSlide]);

  function changeSlide(direction: number) {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  return (
    <section
      aria-label="Carrusel principal"
      aria-roledescription="carrusel"
      className="w-full bg-background pb-6 pt-[68px] sm:pt-[74px] lg:pb-12 lg:pt-[84px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      onKeyDown={(event) => {
        if (event.target instanceof HTMLElement && event.target.closest("button")) return;
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          changeSlide(event.key === "ArrowLeft" ? -1 : 1);
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
        if (Math.abs(dx) >= 55 && Math.abs(dx) > Math.abs(dy) * 1.3) {
          changeSlide(dx < 0 ? 1 : -1);
        }
      }}
      onTouchCancel={() => { touchStart.current = null; }}
    >
      <div data-home-hero className="group relative aspect-[1122/1402] w-full overflow-hidden bg-[#E8EFE7] md:aspect-auto md:h-[clamp(280px,34.6vw,650px)]">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const { props: image } = getImageProps({
            src: slide.src,
            alt: slide.alt,
            fill: true,
            sizes: "100vw",
            loading: index === 0 ? "eager" : "lazy",
            fetchPriority: index === 0 ? "high" : "auto",
            className: "h-full w-full object-cover object-center",
          });

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${slides.length}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 overflow-hidden transition-opacity duration-[1000ms] ease-in-out motion-reduce:transition-none ${isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
            >
              <img
                {...image}
                className={`${image.className} transition-transform duration-[6500ms] ease-out motion-reduce:transition-none ${isActive && !reducedMotion ? "scale-[1.035]" : "scale-100"}`}
              />
            </div>
          );
        })}

        {/* Sombreado mínimo, únicamente para que los controles se lean en cualquier imagen. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/20 to-transparent" />

        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Diapositiva anterior"
          className="absolute left-3 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/65 bg-white/75 text-[#295C50] shadow-[0_5px_24px_rgba(24,54,47,.12)] backdrop-blur-lg transition-[background-color,transform,opacity] duration-300 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] sm:left-5 sm:size-12 lg:left-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 motion-reduce:transition-none"
        >
          <ArrowLeft size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Siguiente diapositiva"
          className="absolute right-3 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/65 bg-white/75 text-[#295C50] shadow-[0_5px_24px_rgba(24,54,47,.12)] backdrop-blur-lg transition-[background-color,transform,opacity] duration-300 hover:scale-105 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] sm:right-5 sm:size-12 lg:right-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 motion-reduce:transition-none"
        >
          <ArrowRight size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>

        <div className="absolute inset-x-0 bottom-4 z-30 flex justify-center px-4 sm:bottom-6 lg:bottom-7">
          <div className="flex items-center gap-3 rounded-full border border-white/25 bg-[#20483F]/55 px-4 py-2.5 shadow-lg backdrop-blur-md sm:gap-4 sm:px-5">
            <span className="hidden text-[11px] font-semibold tabular-nums tracking-wide text-white sm:block">
              {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-1.5 sm:gap-2" aria-label="Elegir diapositiva">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                  className="flex h-7 w-7 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-9"
                >
                  <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-white/35">
                    {index === activeSlide && (
                      <span
                        key={slide.id}
                        className="absolute inset-y-0 left-0 block w-full origin-left rounded-full bg-white"
                        style={{
                          animation: reducedMotion ? "none" : `avra-hero-progress ${SLIDE_DURATION}ms linear both`,
                          animationPlayState: paused || hidden ? "paused" : "running",
                          transform: reducedMotion ? "scaleX(1)" : undefined,
                        }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`@keyframes avra-hero-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </section>
  );
}
