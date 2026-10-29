"use client";

import { getImageProps } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  { id: "slide-01", desktop: "/images/home/carousel/slide-01.png", mobile: "/images/home/carousel/slide-01.png", alt: "Avra: imagen 1 del carrusel principal" },
  { id: "slide-02", desktop: "/images/home/carousel/slide-02.png", mobile: "/images/home/carousel/slide-02.png", alt: "Avra: imagen 2 del carrusel principal" },
  { id: "slide-03", desktop: "/images/home/carousel/slide-03.png", mobile: "/images/home/carousel/slide-03.png", alt: "Avra: imagen 3 del carrusel principal" },
  { id: "slide-04", desktop: "/images/home/carousel/slide-04.png", mobile: "/images/home/carousel/slide-04.png", alt: "Avra: imagen 4 del carrusel principal" },
  { id: "slide-05", desktop: "/images/home/carousel/slide-05.png", mobile: "/images/home/carousel/slide-05.png", alt: "Avra: imagen 5 del carrusel principal" },
  { id: "slide-06", desktop: "/images/home/carousel/slide-06.png", mobile: "/images/home/carousel/slide-06.png", alt: "Avra: imagen 6 del carrusel principal" },
  { id: "slide-07", desktop: "/images/home/carousel/slide-07.png", mobile: "/images/home/carousel/slide-07.png", alt: "Avra: imagen 7 del carrusel principal" },
] as const;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(interval);
    // Depender de `activeSlide` reinicia el temporizador cada vez que la
    // diapositiva cambia (también por flechas o indicadores), para que
    // siempre pase cada 6s completos y no se acelere tras interactuar.
  }, [paused, activeSlide]);

  function changeSlide(direction: number) {
    setActiveSlide(
      (current) =>
        (current + direction + slides.length) % slides.length,
    );
  }

  return (
    <section
      aria-label="Carrusel principal"
      aria-roledescription="carrusel"
      className="
        w-full
        bg-background
        pt-[68px]
        pb-6
        sm:pt-[74px]
        lg:pt-[84px]
        lg:pb-12
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPaused(false);
        }
      }}
      onKeyDown={(event) => {
        if (
          event.key === "ArrowLeft" ||
          event.key === "ArrowRight"
        ) {
          event.preventDefault();

          changeSlide(
            event.key === "ArrowLeft" ? -1 : 1,
          );
        }
      }}
    >
      <div
        data-home-hero
        className="
          group
          relative
          aspect-[1122/1402]
          md:aspect-auto
          md:h-[clamp(280px,34.6vw,650px)]
          w-full
          overflow-hidden
        "
      >
        {/* SLIDES */}
        {slides.map((slide, index) => {
          const isActive = index === activeSlide;
          const shared = {
            alt: slide.alt,
            fill: true,
            sizes: "100vw",
            loading: index === 0 ? "eager" as const : "lazy" as const,
            fetchPriority: index === 0 ? "high" as const : "auto" as const,
            className: "object-cover object-center",
          };
          const { props: desktop } = getImageProps({ ...shared, src: slide.desktop });
          const { props: mobile } = getImageProps({ ...shared, src: slide.mobile });

          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="diapositiva"
              aria-label={`${index + 1} de ${slides.length}`}
              aria-hidden={!isActive}
              className={`
                absolute
                inset-0
                overflow-hidden
                transition-opacity
                duration-700
                ease-out
                motion-reduce:transition-none
                ${
                  isActive
                    ? "opacity-100"
                    : "pointer-events-none opacity-0"
                }
              `}
            >
              <picture>
                <source media="(min-width: 768px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
                <img {...mobile} alt={slide.alt} />
              </picture>
            </div>
          );
        })}

        {/* FLECHA IZQUIERDA */}
        <button
          type="button"
          onClick={() => changeSlide(-1)}
          aria-label="Diapositiva anterior"
          className="
            absolute
            left-4
            top-1/2
            z-30
            grid
            size-11
            -translate-y-1/2
            place-items-center
            rounded-full
            bg-white/85
            text-[#302E2A]
            backdrop-blur-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            lg:left-7
            lg:size-12
            lg:opacity-0
            lg:group-hover:opacity-100
            lg:group-focus-within:opacity-100
          "
        >
          <ArrowLeft
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>

        {/* FLECHA DERECHA */}
        <button
          type="button"
          onClick={() => changeSlide(1)}
          aria-label="Siguiente diapositiva"
          className="
            absolute
            right-4
            top-1/2
            z-30
            grid
            size-11
            -translate-y-1/2
            place-items-center
            rounded-full
            bg-white/85
            text-[#302E2A]
            backdrop-blur-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-white
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            lg:right-7
            lg:size-12
            lg:opacity-0
            lg:group-hover:opacity-100
            lg:group-focus-within:opacity-100
          "
        >
          <ArrowRight
            size={18}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </button>

        {/* INDICADORES */}
        <div
          className="
            absolute
            bottom-5
            left-1/2
            z-30
            -translate-x-1/2
            sm:bottom-6
            lg:bottom-7
          "
        >
          <div
            className="
              flex
              items-center
              gap-2.5
              rounded-full
              bg-black/15
              px-6
              py-2
              backdrop-blur-md
            "
            aria-label="Elegir diapositiva"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Ir a la diapositiva ${index + 1}`}
                  aria-current={
                    isActive ? "true" : undefined
                  }
                  className="
                    grid
                    size-5
                    place-items-center
                    rounded-full
                    focus-visible:outline-none
                  "
                >
                  <span
                    aria-hidden="true"
                    className={`
                      block
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "size-2 bg-white"
                          : "size-1.5 bg-white/55 hover:bg-white/80"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
