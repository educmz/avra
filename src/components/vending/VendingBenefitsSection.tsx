import { ArrowDownRight, Clock3, CupSoda, MapPin } from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

const benefits = [
  {
    number: "01",
    Icon: CupSoda,
    title: "Algo rico para cada momento",
    description:
      "Bebidas naturales, comidas y snacks para que siempre tengas más opciones al momento de elegir.",
  },
  {
    number: "02",
    Icon: Clock3,
    title: "Tu pausa, sin complicaciones",
    description:
      "Elige y compra directamente en la máquina, a tu ritmo y de una forma sencilla.",
  },
  {
    number: "03",
    Icon: MapPin,
    title: "Más cerca de tu rutina",
    description:
      "Acercamos una alternativa práctica a los espacios donde trabajas, estudias o entrenas.",
  },
];

export function VendingBenefitsSection() {
  return (
    <section
      aria-labelledby="vending-overview-title"
      className="bg-[#FBF4EF] py-12 sm:py-16 lg:py-20"
    >
      <Container>
        <div className="mx-auto max-w-[820px] text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#295C50] sm:text-sm">
            ¿Por qué elegir Avra?
          </p>
          <AnimatedTitle
            id="vending-overview-title"
            text="Más opciones para disfrutar tu día"
            className="mt-3 font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]"
          />
          <span
            aria-hidden="true"
            className="mx-auto mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]"
          />
          <p className="mx-auto mt-5 max-w-[660px] text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Queremos que encontrar algo rico sea parte fácil de tu día. Por eso
            acercamos variedad, comodidad y una experiencia pensada para cada pausa.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-[1180px] border-y border-[#295C50]/15 md:grid-cols-3 sm:mt-11">
          {benefits.map(({ number, Icon, title, description }, index) => (
            <article
              key={number}
              className={`relative flex flex-col px-3 py-7 sm:px-6 sm:py-9 lg:px-10 ${index > 0 ? "border-t border-[#295C50]/15 md:border-l md:border-t-0" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-[#E6EDE5] text-[#295C50]">
                  <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span aria-hidden="true" className="font-heading text-[32px] font-extrabold leading-none text-[#EA6F32]/35">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 max-w-[270px] font-heading text-xl font-extrabold leading-[1.15] text-[#295C50] sm:text-[22px]">
                {title}
              </h3>
              <p className="mt-3 max-w-[340px] text-base leading-7 text-[#302E2A]/75">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center sm:mt-10 sm:flex-row sm:justify-center sm:gap-6">
          <p className="max-w-[360px] text-sm font-medium leading-6 text-[#302E2A]/75 sm:text-base">
            Dos máquinas, distintas opciones. Descubre cuál se adapta a cada momento.
          </p>
          <a href="#avra" className="avra-cta inline-flex min-h-11 items-center gap-2">
            <span>Conoce nuestras máquinas</span>
            <ArrowDownRight size={18} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
