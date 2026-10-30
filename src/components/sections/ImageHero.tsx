import Image from "next/image";

interface ImageHeroProps {
  image: string;
  flushBottom?: boolean;
  lines: [string, ...string[]];
  kicker?: string;
  subtitle?: string;
  flourishColors?: [string, string, string];
}

export function ImageHero({ image, lines, kicker, subtitle, flushBottom = false, flourishColors = ["#F9B444", "#FFD074", "#EAA12F"] }: ImageHeroProps) {
  const hasVendingStyle = Boolean(kicker && subtitle);

  return (
    <div className={flushBottom ? "w-full" : "w-full pb-6 sm:pb-8 lg:pb-10"}>
      <div className="relative isolate flex h-[220px] w-full items-center overflow-hidden sm:h-auto sm:aspect-[1530/380]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="z-0 object-cover object-[40%_center] md:object-center"
        />

        {hasVendingStyle ? (
          <>
            <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-black/15 to-transparent" />
            <div className="absolute inset-y-0 left-0 z-10 flex w-[65%] items-center pl-[7%] sm:w-[49%] sm:pl-[13%]">
              <div className="max-w-[540px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]">
                <p className="font-[family-name:var(--font-header)] text-[11px] font-medium uppercase tracking-[0.2em] sm:text-[clamp(7px,1.1vw,17px)] sm:tracking-[0.3em]">
                  {kicker}
                </p>
                <h1 className="mt-[0.36em] font-heading text-[30px] font-extrabold uppercase leading-[0.95] tracking-[-0.035em] sm:text-[clamp(19px,4.7vw,78px)] sm:leading-[0.9]">
                  {lines.map((line) => <span key={line} className="block">{line}</span>)}
                </h1>
                <p className="mt-[1em] max-w-[32ch] font-[family-name:var(--font-header)] text-[10px] font-medium uppercase leading-[1.5] tracking-[0.1em] sm:text-[clamp(7px,1.05vw,16px)] sm:leading-[1.55] sm:tracking-[0.2em]">
                  {subtitle}
                </p>
                <svg aria-hidden="true" viewBox="0 0 200 36" fill="none" className="mt-[0.65em] block w-[62%] max-w-[320px] overflow-visible">
                  <path d="M4 8 C 46 36, 117 32, 194 5" stroke={flourishColors[0]} strokeWidth="5.5" strokeLinecap="round" />
                  <path d="M14 13 C 61 34, 129 26, 187 9" stroke={flourishColors[1]} strokeWidth="1.8" strokeLinecap="round" opacity="0.68" />
                  <path d="M15 19 C 60 34, 114 32, 160 19" stroke={flourishColors[2]} strokeWidth="1.1" strokeLinecap="round" opacity="0.55" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <div className="relative z-10 w-3/5 pl-[max(24px,calc((100vw-1280px)/2+24px))] pr-3 sm:pl-[max(24px,calc((100vw-1280px)/2+24px))] md:w-1/2 md:pr-2 lg:pl-[max(40px,calc((100vw-1280px)/2+40px))]">
            <h1 className="font-heading text-[clamp(28px,6.4vw,40px)] font-extrabold uppercase leading-[1.12] tracking-tight text-black md:text-[clamp(22px,4.8vw,76px)] md:leading-[1.08]">
              {lines.map((line) => <span key={line} className="block">{line}</span>)}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
