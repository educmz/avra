import { ImageHero } from "@/components/sections/ImageHero";

export function AboutBanner() {
  return (
    <ImageHero
      image="/images/about/about-hero.png"
      lines={["AVRA"]}
      kicker="Somos"
      subtitle="Disfruta cada momento"
      flourishColors={["#295C50", "#4E8C7A", "#7DB6A3"]}
    />
  );
}
