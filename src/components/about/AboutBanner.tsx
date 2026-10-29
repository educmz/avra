import { ImageHero } from "@/components/sections/ImageHero";

export function AboutBanner() {
  return (
    <ImageHero
      image="/images/about/about-hero.png"
      lines={["NOSOTROS"]}
      kicker="Conoce"
      subtitle="Más que algo rico, momentos para disfrutar"
      flourishColors={["#F9B444", "#FFD074", "#EAA12F"]}
    />
  );
}
