import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { HomeImage } from "./HomeImage";
import { HomeHeading } from "./HomeHeading";
import styles from "./Home.module.css";

const lifestyleImages = [
  {
    id: "home-lifestyle-brunch",
    image: "/images/home/lifestyle/home-lifestyle-brunch.webp",
    alt: "Personas disfrutando productos y bebidas en un momento cotidiano",
  },
  {
    id: "home-lifestyle-walking-drink",
    image: "/images/home/lifestyle/home-lifestyle-walking-drink.webp",
    alt: "Persona caminando mientras disfruta una bebida",
  },
  {
    id: "home-lifestyle-kids-events",
    image: "/images/home/lifestyle/home-lifestyle-kids-events.webp",
    alt: "Personas disfrutando productos Avra",
  },
] as const;

export function HealthyProductsSection() {
  return (
    <section
      aria-labelledby="lifestyle-title"
      className="bg-[#FFF8F1] py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <HomeHeading
          id="lifestyle-title"
          eyebrow="Vive Avra"
        >
          Momentos que se disfrutan
        </HomeHeading>

        <div className={styles.lifestyle}>
          {lifestyleImages.map((photo) => (
            <div
              key={photo.id}
              className={styles.photo}
            >
              <HomeImage
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 55vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-end">
          <Link
            href="/carta"
            className="group inline-flex items-center gap-3 rounded-full bg-[#173E3A] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#10564F]"
          >
            Explora nuestra carta

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#FF8A00]">
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
