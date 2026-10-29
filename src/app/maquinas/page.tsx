import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, CreditCard, MousePointerClick, PackageCheck, Leaf, Clock3, LayoutGrid, Smartphone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { VendingReels } from "@/components/vending/VendingReels";

export const metadata: Metadata = {
  title: "Vending saludable",
  description: "Conoce las máquinas Avra y Nuna, sus productos y su funcionamiento. Bebidas naturales y comidas prácticas en un formato de autoservicio.",
};

const machines = [
  {
    id: "avra", name: "Avra", kicker: "01 / Bebidas naturales",
    title: "Bebidas naturales, a tu alcance.",
    description: "La máquina naranja Avra está pensada para acercar una experiencia de bebidas naturales a diferentes momentos del día. Su diseño distintivo y su sistema de autoservicio hacen que elegir una bebida resulte práctico.",
    image: "/images/vending/avra-equipo.jpg",
    alt: "Máquina naranja Avra con dos ventanas y dispensador de bebidas",
    accent: "#EA6F32", bg: "#FFF0E3",
    details: [
      { title: "Especializada en bebidas", desc: "Una propuesta centrada en la experiencia de bebidas naturales." },
      { title: "Dispensación directa", desc: "Espacio frontal dedicado a recibir la bebida seleccionada." },
      { title: "Identidad Avra", desc: "Diseño naranja, distintivo y fácil de reconocer." },
      { title: "Uso intuitivo", desc: "Interfaz de selección y área de pago integradas en el equipo." },
    ],
    perks: ["Una experiencia diferente", "Diseño reconocible", "Practicidad cotidiana"],
  },
  {
    id: "nuna", name: "Nuna", kicker: "02 / Comidas y snacks",
    title: "Comidas y snacks para tu día.",
    description: "El formato Nuna muestra alimentos en envases individuales y una selección de bebidas. Su vitrina facilita ver las opciones disponibles y su pantalla permite interactuar con el equipo. La fotografía del equipo Nuna se presenta como referencia.",
    image: "/images/vending/nuna-equipo.jpg",
    alt: "Máquina Nuna negra y verde con vitrina de comidas envasadas y bebidas",
    accent: "#428C42", bg: "#EEF3E7",
    details: [
      { title: "Vitrina de productos", desc: "Los alimentos y bebidas quedan visibles antes de elegir." },
      { title: "Variedad de formatos", desc: "Espacios para envases individuales y bebidas embotelladas." },
      { title: "Pantalla de selección", desc: "Interfaz para consultar y seleccionar productos." },
      { title: "Recogida accesible", desc: "Compartimento frontal para retirar la compra." },
    ],
    perks: ["Opciones listas para elegir", "Productos a la vista", "Autoservicio práctico"],
  },
];

export default function MachinesPage() {
  return (
    <main className="bg-[#FBF7F0] pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <section aria-label="Presentación de máquinas Avra" className="w-full pb-6 sm:pb-8 lg:pb-10">
        <div className="relative isolate h-[220px] w-full overflow-hidden sm:h-auto sm:aspect-[1530/380]">
          <Image
            src="/images/vending/banner-vending.png"
            alt="Máquinas expendedoras Avra y Nuna"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-y-0 left-0 z-10 flex w-[49%] items-center pl-[11%] sm:pl-[13%]">
            <div className="max-w-[540px] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]">
              <p className="font-[family-name:var(--font-header)] text-[clamp(7px,1.1vw,17px)] font-medium uppercase tracking-[0.3em]">
                Nuestras
              </p>
              <h1 className="mt-[0.36em] font-heading text-[clamp(19px,4.7vw,78px)] font-extrabold uppercase leading-[0.9] tracking-[-0.035em]">
                Máquinas
              </h1>
              <p className="mt-[1em] max-w-[32ch] font-[family-name:var(--font-header)] text-[clamp(7px,1.05vw,16px)] font-medium uppercase leading-[1.55] tracking-[0.2em]">
                Alimentación saludable,<br className="hidden sm:block" /> siempre disponible
              </p>
              <svg aria-hidden="true" viewBox="0 0 200 36" fill="none" className="mt-[0.65em] block w-[42%] max-w-[220px] overflow-visible"><path d="M4 8 C 46 36, 117 32, 194 5" stroke="#F9B444" strokeWidth="5.5" strokeLinecap="round" /><path d="M14 13 C 61 34, 129 26, 187 9" stroke="#FFD074" strokeWidth="1.8" strokeLinecap="round" opacity="0.68" /><path d="M15 19 C 60 34, 114 32, 160 19" stroke="#EAA12F" strokeWidth="1.1" strokeLinecap="round" opacity="0.55" /></svg>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="vending-overview-title" className="bg-[#F6F5EE] py-10 sm:py-12 lg:py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#B96220]">Por qué elegir vending saludable</p>
            <h2 id="vending-overview-title" className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]">Más opciones para disfrutar tu día</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#302E2A]/70">Bebidas naturales, comidas y snacks en una experiencia de autoservicio práctica, pensada para adaptarse a distintos momentos y espacios.</p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[{Icon:Clock3,title:"A tu ritmo",desc:"Accede a opciones de consumo según tu rutina y el horario del espacio."},{Icon:LayoutGrid,title:"Alternativas visibles",desc:"Explora los formatos de bebidas y alimentos de nuestras máquinas."},{Icon:Smartphone,title:"Autoservicio",desc:"Una experiencia directa de selección y compra."},{Icon:Leaf,title:"Una propuesta diferente",desc:"Acercamos la experiencia Avra mediante nuevos puntos de contacto."}].map(({Icon,title,desc})=>(
              <article key={title} className="flex h-full flex-col rounded-2xl border border-[#295C50]/10 bg-white p-4 shadow-[0_5px_20px_rgba(48,46,42,.035)] sm:p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-[#EAF0E4] text-[#295C50]"><Icon size={20} aria-hidden="true" /></span>
                <h3 className="mt-3 font-heading text-base font-bold leading-snug text-[#302E2A]">{title}</h3>
                <p className="mt-1.5 text-[13px] leading-5 text-[#302E2A]/70">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 border-t border-[#295C50]/15 pt-7 sm:mt-10 sm:pt-8">
            <div className="mb-5 text-center">
              <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#B96220]">Simple y práctico</p>
              <h3 className="mt-1 font-heading text-[28px] font-extrabold uppercase text-[#302E2A] sm:text-[34px] lg:text-[40px]">¿Cómo funciona?</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {[{Icon:MousePointerClick,title:"01. Elige",desc:"Explora las opciones del equipo y selecciona tu producto."},{Icon:CreditCard,title:"02. Paga",desc:"Sigue las instrucciones del sistema de pago disponible."},{Icon:PackageCheck,title:"03. Disfruta",desc:"Recoge tu producto y continúa con tu día."}].map(({Icon,title,desc})=>(
                <article key={title} className="flex h-full items-start gap-3 rounded-2xl border border-[#EBCBB7] bg-[#FFF8F2] p-4 shadow-[0_4px_16px_rgba(48,46,42,.03)] sm:p-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#FCE6D4] text-[#D86629]"><Icon size={21} aria-hidden="true" /></span>
                  <div className="min-w-0">
                    <h4 className="font-heading text-base font-bold text-[#302E2A]">{title}</h4>
                    <p className="mt-1.5 text-[13px] leading-5 text-[#302E2A]/70">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {machines.map((machine, index) => (
        <section key={machine.id} id={machine.id} aria-labelledby={`${machine.id}-title`} className={index === 0 ? "bg-[#FFF9F4] py-10 sm:py-14" : "bg-[#F1F5ED] py-10 sm:py-14"}>
          <Container>
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-10">
              <div className={`min-w-0 ${index === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-[1.75rem] p-4 sm:p-5" style={{ background: machine.bg }}>
                  <div className="relative mx-auto h-[290px] max-w-[400px] sm:h-[380px] lg:h-[430px]">
                    <Image src={machine.image} alt={machine.alt} fill sizes="(min-width:1024px) 42vw, 90vw" className="object-contain" />
                  </div>
                </div>
              </div>
              <div className={`min-w-0 ${index === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: machine.accent }}>{machine.kicker}</p>
                <h2 id={`${machine.id}-title`} className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]">{machine.title}</h2>
                <div className="mt-3 h-[3px] w-14 rounded-full" style={{ background: machine.accent }} />
                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#302E2A]/75 sm:text-base sm:leading-7">{machine.description}</p>
                <h3 className="mt-6 font-heading text-base font-extrabold uppercase tracking-wide text-[#302E2A]">Características del equipo</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {machine.details.map((detail) => (
                    <article key={detail.title} className="rounded-xl border border-[#302E2A]/10 bg-white/80 p-3.5 sm:p-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={18} className="shrink-0" style={{ color: machine.accent }} aria-hidden="true" />
                        <h4 className="font-heading text-sm font-bold leading-snug text-[#302E2A]">{detail.title}</h4>
                      </div>
                      <p className="mt-1.5 text-xs leading-5 text-[#302E2A]/70">{detail.desc}</p>
                    </article>
                  ))}
                </div>
                <a href="/nosotros" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#295C50] px-5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#173E34]">Conoce más de Avra <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </Container>
        </section>
      ))}
      <VendingReels />
    </main>
  );
}
