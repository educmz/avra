import { ImageHero } from "@/components/sections/ImageHero";

export function AboutBanner() {
  return (
    <ImageHero
      image="/images/about/about-hero.png"
      lines={["MÁS QUE", "ALGO RICO"]}
      kicker="Nuestra historia"
      subtitle="Creamos momentos para disfrutar y compartir"
      flourishColors={["#295C50", "#4E8C7A", "#7DB6A3"]}
    />
  );
}
