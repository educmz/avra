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
  { Icon: Building2, label: "Empresas corporativas" },
  { Icon: Factory, label: "Plantas industriales" },
  { Icon: Dumbbell, label: "Gimnasios" },
  { Icon: GraduationCap, label: "Universidades" },
  { Icon: HeartPulse, label: "Centros de salud" },
  { Icon: BriefcaseBusiness, label: "Startups y co-workings" },
  { Icon: Store, label: "Retail y oficinas" },
  { Icon: Handshake, label: "Tu organización" },
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
              text="DONDE LAS PERSONAS TRABAJAN, ESTUDIAN O ENTRENAN, AVRA PUEDE ESTAR AHÍ."
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
            {spaces.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex min-h-[88px] items-center gap-4 rounded-[22px] border border-[#E9DED3] border-l-[3px] border-l-[#EA6F32] bg-white px-5 py-4 shadow-[0_8px_24px_rgba(48,46,42,0.04)] sm:px-6"
              >
                <Icon
                  className="size-7 shrink-0 text-[#295C50]"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
                <h3 className="font-heading text-base font-bold leading-snug text-[#295C50] sm:text-lg">
                  {label}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
