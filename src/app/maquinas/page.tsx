import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, CreditCard, HandPointer, PackageCheck, Leaf, Clock3, LayoutGrid, Smartphone, Coffee, UtensilsCrossed } from "lucide-react";
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

const faqs = [
  { q: "¿Qué ofrece la máquina Avra?", a: "Está enfocada en bebidas naturales. La selección concreta puede variar según la disponibilidad." },
  { q: "¿Qué ofrece la máquina Nuna?", a: "Su formato permite exhibir comidas y snacks en envases individuales, además de bebidas. La oferta concreta dependerá de la operación." },
  { q: "¿Cómo se utiliza una máquina?", a: "Elige un producto en la interfaz, sigue las indicaciones de pago del equipo y recógelo en el compartimento correspondiente." },
  { q: "¿Se puede solicitar una máquina para un espacio?", a: "Puedes contactarnos para consultar las opciones y condiciones que Avra tenga disponibles." },
  { q: "¿Cómo se realiza el abastecimiento?", a: "La frecuencia y las condiciones de reposición deben acordarse según el equipo, los productos y el espacio." },
];

export default function MachinesPage() {
  return (
    <main className="bg-[#FBF7F0] pt-[68px] sm:pt-[74px] lg:pt-[84px]">
      <section aria-label="Presentación de máquinas Avra" className="w-full pb-6 sm:pb-8 lg:pb-10">
        <div className="relative isolate w-full overflow-hidden">
          <Image
            src="/images/vending/banner-vending.png"
            alt="Máquinas expendedoras Avra y Nuna"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            className="block h-auto w-full"
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

      <section className="py-14 sm:py-20">
        <Container className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-[#C76D00]">Una nueva forma de disfrutar</p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold uppercase leading-tight tracking-tight text-[#302E2A] sm:text-6xl">Dos máquinas, diferentes antojos.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#302E2A]/75 sm:text-lg">Avra también llega a ti a través del vending: bebidas naturales por un lado, comidas y snacks por el otro. Descubre cada formato y cómo funciona.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#avra" className="rounded-full bg-[#EA6F32] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C85623]">Máquina Avra</a>
            <a href="#nuna" className="rounded-full bg-[#295C50] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173E34]">Máquina Nuna</a>
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
                <a href="#contacto-vending" className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#295C50] px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#173E34]">Solicitar información <ArrowUpRight size={18} /></a>
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
      <section aria-labelledby="how-vending-works" className="bg-[#FBF7F0] py-16 sm:py-24">
        <Container>
          <div className="mb-12 text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#C76D00]">Simple y práctico</p><h2 id="how-vending-works" className="mt-4 font-heading text-4xl font-extrabold uppercase text-[#302E2A] sm:text-6xl">¿Cómo funciona?</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[{Icon:HandPointer,title:"01. Elige",desc:"Explora las opciones del equipo y selecciona tu producto."},{Icon:CreditCard,title:"02. Paga",desc:"Sigue las instrucciones del sistema de pago disponible."},{Icon:PackageCheck,title:"03. Disfruta",desc:"Recoge tu producto y continúa con tu día."}].map(({Icon,title,desc})=><article key={title} className="rounded-[1.75rem] bg-white p-8 text-center shadow-[0_10px_35px_rgba(48,46,42,.06)]"><span className="mx-auto grid size-16 place-items-center rounded-full bg-[#FCE5D0] text-[#D86629]"><Icon size={29}/></span><h3 className="mt-5 font-heading text-2xl font-bold text-[#302E2A]">{title}</h3><p className="mt-3 text-sm leading-7 text-[#302E2A]/70">{desc}</p></article>)}
          </div>
        </Container>
      </section>
      <section aria-labelledby="beneficios-vending" className="bg-[#EAF0E4] py-16 sm:py-20">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#295C50]">Por qué elegir vending</p><h2 id="beneficios-vending" className="mt-4 font-heading text-4xl font-extrabold uppercase text-[#302E2A] sm:text-5xl">Practicidad en cada momento</h2></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{Icon:Clock3,title:"A tu ritmo",desc:"Accede a opciones de consumo según tu rutina y el horario del espacio."},{Icon:LayoutGrid,title:"Alternativas visibles",desc:"Explora los formatos de bebidas y alimentos de nuestras máquinas."},{Icon:Smartphone,title:"Autoservicio",desc:"Una experiencia directa de selección y compra."},{Icon:Leaf,title:"Una propuesta diferente",desc:"Acercamos la experiencia Avra mediante nuevos puntos de contacto."}].map(({Icon,title,desc})=><article key={title} className="rounded-2xl bg-white p-6"><Icon className="text-[#295C50]" size={26}/><h3 className="mt-5 font-heading text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-[#302E2A]/70">{desc}</p></article>)}
          </div>
        </Container>
      </section>
      <section aria-labelledby="faq-vending" className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <p className="text-center text-xs font-bold uppercase tracking-[.22em] text-[#C76D00]">Resolvemos tus dudas</p>
          <h2 id="faq-vending" className="mt-4 mb-10 text-center font-heading text-4xl font-extrabold uppercase sm:text-5xl">Preguntas frecuentes</h2>
          <div className="space-y-3">{faqs.map((faq)=><details key={faq.q} className="group rounded-2xl border border-[#302E2A]/10 bg-white p-5 sm:p-6"><summary className="cursor-pointer list-none pr-6 font-semibold text-[#302E2A] marker:hidden">{faq.q}<span className="float-right text-[#295C50] group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl text-sm leading-7 text-[#302E2A]/75">{faq.a}</p></details>)}</div>
        </Container>
      </section>
      <section id="contacto-vending" className="bg-[#295C50] py-16 text-white sm:py-20">
        <Container className="max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#F8B54F]">Hablemos de vending</p>
          <h2 className="mt-4 font-heading text-4xl font-extrabold uppercase sm:text-6xl">Lleva la experiencia Avra a tu espacio</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85">¿Te interesa conocer las opciones disponibles para tu empresa o establecimiento? Contáctanos y conversemos sobre tu espacio.</p>
          <Link href="/nosotros#contacto" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#F8B54F] px-7 py-3 text-sm font-bold uppercase text-[#243329] transition hover:bg-[#FFD076]">Conoce Avra <ArrowUpRight size={18}/></Link>
        </Container>
      </section>
    </main>
  );
}
