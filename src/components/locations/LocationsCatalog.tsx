import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { locations } from "@/data/locations";
import { LocationCard } from "./LocationCard";
import { LocationsBanner } from "./LocationsBanner";

export function LocationsCatalog() {
  return (
    <section
      className="text-[#302E2A]"
      style={{
        fontFamily:
          "var(--font-carta), 'Montserrat', system-ui, sans-serif",
        background: "var(--background)",
      }}
    >
      <LocationsBanner />

      <Container className="pb-28 pt-10 sm:pb-36 sm:pt-14">
        <div className="mb-10 sm:mb-12">
          <AnimatedTitle
            text="Nuestros locales"
            className="text-4xl font-extrabold uppercase leading-[1.08] text-[#302E2A] sm:text-5xl lg:text-6xl"
          />
        </div>
        <div className="flex flex-col gap-14 sm:gap-20">
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              location={location}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
