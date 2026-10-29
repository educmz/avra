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

      <section aria-labelledby="vending-overview-title" className="bg-[#F4F3EA] py-9 sm:py-11 lg:py-12">
        <Container>
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.22em] text-[#C76D00]">Una nueva forma de disfrutar</p>
              <h2 id="vending-overview-title" className="mt-2 font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight text-[#302E2A] sm:text-4xl xl:text-[2.75rem]">Dos máquinas, diferentes antojos.</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-[#302E2A]/75 sm:text-base">Avra también llega a ti a través del vending: bebidas naturales por un lado, comidas y snacks por el otro. Descubre cada formato y cómo funciona.</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a href="#avra" className="rounded-full bg-[#EA6F32] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#C85623] sm:text-sm">Máquina Avra</a>
                <a href="#nuna" className="rounded-full bg-[#295C50] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#173E34] sm:text-sm">Máquina Nuna</a>
              </div>
            </div>
            <div className="rounded-2xl bg-white/85 p-4 shadow-[0_8px_28px_rgba(48,46,42,.05)] sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#C76D00]">Simple y práctico</p>
              <h3 className="mt-1 font-heading text-xl font-extrabold uppercase text-[#302E2A] sm:text-2xl">¿Cómo funciona?</h3>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[{Icon:MousePointerClick,title:"01. Elige",desc:"Explora las opciones del equipo y selecciona tu producto."},{Icon:CreditCard,title:"02. Paga",desc:"Sigue las instrucciones del sistema de pago disponible."},{Icon:PackageCheck,title:"03. Disfruta",desc:"Recoge tu producto y continúa con tu día."}].map(({Icon,title,desc})=>(
                  <div key={title} className="min-w-0 rounded-xl bg-[#FFF5EC] p-2.5 sm:p-3">
                    <Icon size={20} className="text-[#D86629]" aria-hidden="true" />
                    <h4 className="mt-2 font-heading text-sm font-bold text-[#302E2A]">{title}</h4>
                    <p className="mt-1 text-[11px] leading-[1.45] text-[#302E2A]/75 sm:text-xs">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-7 border-t border-[#295C50]/15 pt-6">
            <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[11px] font-bold uppercase tracking-[.18em] text-[#295C50]">Por qué elegir vending</p>
              <h3 className="font-heading text-lg font-extrabold uppercase text-[#302E2A] sm:text-xl">Practicidad en cada momento</h3>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {[{Icon:Clock3,title:"A tu ritmo",desc:"Accede a opciones de consumo según tu rutina y el horario del espacio."},{Icon:LayoutGrid,title:"Alternativas visibles",desc:"Explora los formatos de bebidas y alimentos de nuestras máquinas."},{Icon:Smartphone,title:"Autoservicio",desc:"Una experiencia directa de selección y compra."},{Icon:Leaf,title:"Una propuesta diferente",desc:"Acercamos la experiencia Avra mediante nuevos puntos de contacto."}].map(({Icon,title,desc})=>(
                <article key={title} className="flex items-start gap-3 rounded-xl bg-white/90 p-3.5">
                  <Icon size={21} className="mt-0.5 shrink-0 text-[#295C50]" aria-hidden="true" />
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-bold text-[#302E2A]">{title}</h4>
                    <p className="mt-1 text-xs leading-[1.45] text-[#302E2A]/70">{desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {machines.map((machine, index) => (
        <section key={machine.id} id={machine.id} aria-labelledby={`${machine.id}-title`} className={index === 0 ? "bg-[#FFF9F4] py-16 sm:py-24" : "bg-[#F1F5ED] py-16 sm:py-24"}>
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`min-w-0 ${index === 1 ? "lg:order-2" : ""}`}>
                <div className="rounded-[2rem] p-5 sm:p-8" style={{ background: machine.bg }}>
                  <div className="relative mx-auto h-[360px] max-w-[430px] sm:h-[500px]">
                    <Image src={machine.image} alt={machine.alt} fill sizes="(min-width:1024px) 42vw, 90vw" className="object-contain" />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-[#302E2A]/55">{machine.name === "Nuna" ? "Fotografía del equipo Nuna de referencia" : "Fotografía de la máquina Avra"}</p>
              </div>
              <div className={index === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-bold uppercase tracking-[.22em]" style={{ color: machine.accent }}>{machine.kicker}</p>
                <h2 id={`${machine.id}-title`} className="mt-4 font-heading text-[clamp(2.6rem,4.6vw,4.8rem)] font-extrabold uppercase leading-[.98] tracking-tight text-[#302E2A]">{machine.title}</h2>
                <div className="mt-6 h-1 w-20 rounded-full" style={{ background: machine.accent }} />
                <p className="mt-7 max-w-xl text-base leading-8 text-[#302E2A]/75">{machine.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">{machine.perks.map((perk) => <span key={perk} className="rounded-full border border-[#302E2A]/15 px-4 py-2 text-xs font-semibold text-[#302E2A]">{perk}</span>)}</div>
                <a href="/nosotros" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#295C50] px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#173E34]">Conoce más de Avra <ArrowUpRight size={18} /></a>
              </div>
            </div>
            <div className="mt-16 sm:mt-20">
              <div className="mb-7 flex items-center gap-4"><span className="h-8 w-1 rounded-full" style={{background:machine.accent}} /><h3 className="font-heading text-2xl font-extrabold uppercase text-[#302E2A] sm:text-3xl">Características del equipo</h3></div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {machine.details.map((detail) => <article key={detail.title} className="rounded-2xl border border-[#302E2A]/10 bg-white/80 p-6 shadow-[0_6px_22px_rgba(48,46,42,.04)]"><CheckCircle2 size={23} style={{color:machine.accent}} /><h4 className="mt-5 font-heading text-lg font-bold text-[#302E2A]">{detail.title}</h4><p className="mt-3 text-sm leading-6 text-[#302E2A]/70">{detail.desc}</p></article>)}
              </div>
            </div>
            <div className="mt-10 rounded-[2rem] bg-[#213E34] px-7 py-8 text-white sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#F8B54F]">Lo que hace especial a {machine.name}</p>
              <div className="mt-5 grid gap-5 sm:grid-cols-3">{machine.perks.map(perk=><div key={perk} className="flex items-center gap-3"><Leaf size={22} className="shrink-0 text-[#F8B54F]" /><span className="text-sm font-semibold">{perk}</span></div>)}</div>
            </div>
          </Container>
        </section>
      ))}
      <VendingReels />
    </main>
  );
}
