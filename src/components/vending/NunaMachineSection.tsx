import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";

// Los datos y el diseño de esta máquina se mantienen independientes de la otra.
const machine = {
    id: "nuna", name: "Nuna", kicker: "02 / Comidas y snacks",
    title: "Comidas y snacks para tu día.",
    description: "El formato Nuna muestra alimentos en envases individuales y una selección de bebidas. Su vitrina facilita ver las opciones disponibles y su pantalla permite interactuar con el equipo. La fotografía del equipo Nuna se presenta como referencia.",
    image: "/images/vending/maquina-nuna.png",
    alt: "Máquina Nuna negra y verde instalada en un espacio de coworking",
    accent: "#428C42", bg: "#FFFFFF",
    details: [
      { title: "Vitrina de productos", desc: "Los alimentos y bebidas quedan visibles antes de elegir." },
      { title: "Variedad de formatos", desc: "Espacios para envases individuales y bebidas embotelladas." },
      { title: "Pantalla de selección", desc: "Interfaz para consultar y seleccionar productos." },
      { title: "Recogida accesible", desc: "Compartimento frontal para retirar la compra." },
    ],
    perks: ["Opciones listas para elegir", "Productos a la vista", "Autoservicio práctico"],
  };

export function NunaMachineSection() {
  return (
    <section id="nuna" aria-labelledby="nuna-title" className="bg-background py-10 sm:py-14">
      <Container>
        <div className="grid items-center gap-7 lg:grid-cols-2 lg:gap-10">
          <div className="min-w-0">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.75rem] border border-[#302E2A]/10 bg-white shadow-[0_12px_30px_rgba(48,46,42,.09)] lg:aspect-[5/4]">
              <Image
                src={machine.image}
                alt={machine.alt}
                fill
                sizes="(min-width: 1024px) 48vw, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-left"
              />
            </div>
          </div>
          <div className="min-w-0">
            <AnimatedTitle id={`${machine.id}-title`} text={machine.title} className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-[1.06] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
            <div className="mt-3 h-[3px] w-14 rounded-full" style={{ background: machine.accent }} />
            <p className="mt-4 max-w-2xl text-justify text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">{machine.description}</p>
            <h3 className="mt-6 font-heading text-base font-extrabold uppercase tracking-wide text-[#302E2A]">Características del equipo</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {machine.details.map((detail) => (
                <article key={detail.title} className="rounded-xl border border-[#302E2A]/10 bg-white/80 p-3.5 sm:p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="shrink-0" style={{ color: machine.accent }} aria-hidden="true" />
                    <h4 className="font-heading text-sm font-bold leading-snug text-[#302E2A]">{detail.title}</h4>
                  </div>
                  <p className="mt-1.5 text-justify text-base leading-7 text-[#302E2A]/70 sm:text-lg sm:leading-8">{detail.desc}</p>
                </article>
              ))}
            </div>
            <a href="/nosotros" className="avra-cta mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#295C50] px-5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#173E34]">Conoce más de Avra <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </Container>
    </section>
  );
}
