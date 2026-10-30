"use client";

import { getImageProps } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const SLIDE_DURATION = 5500;
const slides = [
  { id: "slide-01", src: "/images/home/carousel/slide-01.png", mobileSrc: "/images/home/carousel/slide-01-mobile.png", alt: "Avra: imagen 1 del carrusel principal" },
  { id: "slide-02", src: "/images/home/carousel/slide-02.png", mobileSrc: "/images/home/carousel/slide-02-mobile.png", alt: "Avra: imagen 2 del carrusel principal" },
  { id: "slide-03", src: "/images/home/carousel/slide-03.png", mobileSrc: "/images/home/carousel/slide-03-mobile.png", alt: "Avra: imagen 3 del carrusel principal" },
  { id: "slide-04", src: "/images/home/carousel/slide-04.png", mobileSrc: "/images/home/carousel/slide-04-mobile.png", alt: "Avra: imagen 4 del carrusel principal" },
  { id: "slide-05", src: "/images/home/carousel/slide-05.png", mobileSrc: "/images/home/carousel/slide-05-mobile.png", alt: "Avra: imagen 5 del carrusel principal" },
  { id: "slide-06", src: "/images/home/carousel/slide-06.png", mobileSrc: "/images/home/carousel/slide-06-mobile.png", alt: "Avra: imagen 6 del carrusel principal" },
  { id: "slide-07", src: "/images/home/carousel/slide-07.png", mobileSrc: "/images/home/carousel/slide-07-mobile.png", alt: "Avra: imagen 7 del carrusel principal" },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [interaction, setInteraction] = useState(0);
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
    if (hidden) return;
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => window.clearTimeout(timeout);
  }, [hidden, activeSlide, interaction]);

  function changeSlide(direction: number) {
    setInteraction((current) => current + 1);
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  }

  function goToSlide(index: number) {
    setInteraction((current) => current + 1);
    setActiveSlide(index);
  }

  return (
    <section
      aria-label="Carrusel principal"
      aria-roledescription="carrusel"
      className="w-full bg-background pb-6 pt-[68px] sm:pt-[74px] lg:pb-12 lg:pt-[84px]"
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
      <div data-home-hero className="group relative aspect-[870/863] w-full overflow-hidden bg-[#E8EFE7] md:aspect-auto md:h-[clamp(280px,34.6vw,650px)]">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const imageOptions = {
            alt: slide.alt,
            fill: true as const,
            sizes: "100vw",
            loading: index === 0 ? ("eager" as const) : ("lazy" as const),
            fetchPriority: index === 0 ? ("high" as const) : ("auto" as const),
            className: "h-full w-full object-contain object-center",
          };
          const { props: desktopImage } = getImageProps({ ...imageOptions, src: slide.src });
          const { props: mobileImage } = getImageProps({ ...imageOptions, src: slide.mobileSrc });

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${slides.length}`}
              aria-hidden={!isActive}
              className={`absolute inset-0 overflow-hidden transition-opacity duration-[1000ms] ease-in-out motion-reduce:transition-none ${isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} />
                <img
                  {...desktopImage}
                  alt={slide.alt}
                  className={`${desktopImage.className} transition-transform duration-[6500ms] ease-out motion-reduce:transition-none scale-100`}
                />
              </picture>
            </div>
          );
        })}

        {/* Sombreado mínimo, únicamente para que los controles se lean en cualquier imagen. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/20 to-transparent" />

        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Diapositiva anterior"
          className="absolute left-3 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/25 text-white shadow-[0_4px_16px_rgba(0,0,0,.15)] backdrop-blur-md transition-[background-color,transform,opacity] duration-300 hover:scale-105 hover:bg-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-5 sm:size-12 lg:left-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 motion-reduce:transition-none"
        >
          <ArrowLeft size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Siguiente diapositiva"
          className="absolute right-3 top-1/2 z-30 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/35 bg-black/25 text-white shadow-[0_4px_16px_rgba(0,0,0,.15)] backdrop-blur-md transition-[background-color,transform,opacity] duration-300 hover:scale-105 hover:bg-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:size-12 lg:right-8 lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 motion-reduce:transition-none"
        >
          <ArrowRight size={21} strokeWidth={1.8} aria-hidden="true" />
        </button>

        {/* Indicadores con fondo translúcido para mantener el contraste en todas las fotos. */}
        <div
          role="group"
          aria-label="Seleccionar diapositiva"
          className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-white/15 bg-black/15 px-2 py-0.5 shadow-[0_4px_14px_rgba(0,0,0,.12)] backdrop-blur-md sm:bottom-7 sm:gap-1 sm:px-2.5 sm:py-0.5"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Ir a la diapositiva ${index + 1} de ${slides.length}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className="group/dot grid size-7 shrink-0 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span
                aria-hidden="true"
                className={`block h-1.5 rounded-full shadow-[0_1px_4px_rgba(0,0,0,.13)] transition-[width,background-color] duration-300 motion-reduce:transition-none ${index === activeSlide ? "w-5 bg-white/90" : "w-1.5 bg-white/50 group-hover/dot:bg-white/85"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
