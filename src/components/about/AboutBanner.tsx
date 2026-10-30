import { ImageHero } from "@/components/sections/ImageHero";

export function AboutBanner() {
  return (
    <ImageHero
      image="/images/about/about-hero.webp"
      lines={["HISTORIA"]}
      kicker="Nuestra"
      subtitle="Momentos que nos inspiran a seguir creciendo"
      flourishColors={["#295C50", "#4E8C7A", "#7DB6A3"]}
    />
  );
}
