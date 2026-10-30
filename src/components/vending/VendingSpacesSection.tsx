import {
  BriefcaseBusiness,
  Building2,
  Dumbbell,
  Factory,
  GraduationCap,
  Handshake,
  HeartPulse,
  Store,
} from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const spaces = [
  {
    Icon: Building2,
    label: "Empresas y oficinas",
    description: "Una pausa rica durante el día",
  },
  {
    Icon: Factory,
    label: "Plantas industriales",
    description: "Opciones para cada jornada",
  },
  {
    Icon: Dumbbell,
    label: "Gimnasios",
    description: "Practicidad para seguir en movimiento",
  },
  {
    Icon: GraduationCap,
    label: "Universidades e institutos",
    description: "Una pausa entre clases",
  },
  {
    Icon: HeartPulse,
    label: "Centros de salud",
    description: "Alternativas para cada turno",
  },
  {
    Icon: BriefcaseBusiness,
    label: "Coworkings y startups",
    description: "Ideas y pausas que conectan",
  },
  {
    Icon: Store,
    label: "Tiendas y comercios",
    description: "Más opciones a la mano",
  },
  {
    Icon: Handshake,
    label: "Tu organización",
    description: "Una propuesta para tu espacio",
  },
];

export function VendingSpacesSection() {
  return (
    <section
      aria-labelledby="vending-spaces-title"
      className="bg-[#FBF4EF] py-14 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-[960px] text-center">
            <AnimatedTitle
              id="vending-spaces-title"
              text="AVRA EN TU ESPACIO"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span
              aria-hidden="true"
              className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
            />
            <p className="mx-auto mt-5 max-w-[850px] text-center text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
              Llevamos una experiencia de alimentación práctica y saludable a los
              espacios donde las personas pasan gran parte de su día. Con nuestras
              máquinas, acercamos bebidas naturales, comidas y snacks de forma
              simple y cómoda, adaptándonos a distintos entornos.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {spaces.map(({ Icon, label, description }) => (
              <div
                key={label}
                className="flex min-h-[118px] items-center gap-3.5 rounded-[22px] border border-[#E9DED3] border-l-[3px] border-l-[#EA6F32] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(48,46,42,0.04)] sm:px-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#F4F0E9] text-[#295C50]">
                  <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-[16px] font-extrabold leading-[1.25] tracking-[-0.015em] text-[#295C50] sm:text-[17px]">
                    {label}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-[1.45] text-[#302E2A]/65 sm:text-sm">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
