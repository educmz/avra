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
  { Icon: Building2, label: "Empresas y oficinas" },
  { Icon: Factory, label: "Plantas industriales" },
  { Icon: Dumbbell, label: "Gimnasios" },
  { Icon: GraduationCap, label: "Universidades e institutos" },
  { Icon: HeartPulse, label: "Centros de salud" },
  { Icon: BriefcaseBusiness, label: "Coworkings y startups" },
  { Icon: Store, label: "Tiendas y comercios" },
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
              text="MÁS OPCIONES PARA CADA ESPACIO"
              className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
            />
            <span
              aria-hidden="true"
              className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
            />
            <p className="mx-auto mt-5 max-w-[800px] text-center text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
              Nuestras máquinas acercan bebidas naturales, comidas y snacks a los
              lugares donde las personas trabajan, estudian y comparten su día.
              Una alternativa práctica para diferentes espacios y rutinas.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {spaces.map(({ Icon, label }) => (
              <div
                key={label}
                className="group relative flex min-h-[92px] items-center gap-4 overflow-hidden rounded-[20px] border border-[#E8DCD0] bg-white px-5 py-5 shadow-[0_6px_20px_rgba(48,46,42,0.055)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#EA6F32]/55 hover:shadow-[0_14px_30px_rgba(48,46,42,0.11)] motion-reduce:transform-none motion-reduce:transition-none"
              >
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[3px] bg-[#EA6F32]" />
                <span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-[#F8EFE7] text-[#295C50] transition-colors duration-300 group-hover:bg-[#FCE3D3] motion-reduce:transition-none">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-[16px] font-bold leading-snug tracking-[-0.012em] text-[#302E2A] sm:text-[17px]">
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
