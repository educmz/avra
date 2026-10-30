import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

// Fotografías referenciales de tipos de espacios, no de instalaciones de Avra.
// Imágenes originales de Unsplash servidas desde su CDN.
const spaces = [
  {
    name: "Oficinas",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    alt: "Interior de una oficina moderna con áreas de trabajo y descanso",
    position: "center",
  },
  {
    name: "Universidades",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    alt: "Estudiantes trabajando juntos en un espacio de estudio",
    position: "center",
  },
  {
    name: "Gimnasios",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    alt: "Gimnasio con equipos de entrenamiento",
    position: "center",
  },
];

export function VendingSpacesSection() {
  return (
    <section aria-labelledby="vending-spaces-title" className="bg-background py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedTitle
            id="vending-spaces-title"
            text="AVRA EN TU ESPACIO"
            className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
          />
          <span aria-hidden="true" className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Una opción de alimentación práctica para distintos entornos y momentos del día.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-5 lg:mt-10 lg:gap-6">
          {spaces.map((space) => (
            <article
              key={space.name}
              className="group relative isolate aspect-[16/10] overflow-hidden rounded-[22px] bg-[#E8F0DE] shadow-[0_12px_30px_rgba(48,46,42,.09)] sm:aspect-[4/5] lg:aspect-[5/4]"
            >
              <div
                role="img"
                aria-label={space.alt}
                className="absolute inset-0 bg-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                style={{ backgroundImage: `url("${space.image}")`, backgroundPosition: space.position }}
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172D27]/85 via-[#172D27]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-12 sm:px-5 sm:pb-6 lg:px-7 lg:pb-7">
                <h3 className="font-heading text-xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-[22px]">
                  {space.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-5 text-[#302E2A]/60">
          Imágenes referenciales de posibles espacios. No representan instalaciones actuales de Avra.
        </p>
      </Container>
    </section>
  );
}
