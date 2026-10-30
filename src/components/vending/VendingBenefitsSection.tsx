import { Clock3, LayoutGrid, Leaf, Smartphone } from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

export function VendingBenefitsSection() {
  return (
    <section aria-labelledby="vending-overview-title" className="bg-background py-10 sm:py-12 lg:py-14">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedTitle id="vending-overview-title" text="Más opciones para disfrutar tu día" className="mt-2 font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
          <p className="mx-auto mt-3 max-w-2xl text-justify text-base leading-7 text-[#302E2A]/70 sm:text-lg sm:leading-8">Bebidas naturales, comidas y snacks en una experiencia de autoservicio práctica, pensada para adaptarse a distintos momentos y espacios.</p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[{Icon:Clock3,title:"A tu ritmo",desc:"Accede a opciones de consumo según tu rutina y el horario del espacio."},{Icon:LayoutGrid,title:"Alternativas visibles",desc:"Explora los formatos de bebidas y alimentos de nuestras máquinas."},{Icon:Smartphone,title:"Autoservicio",desc:"Una experiencia directa de selección y compra."},{Icon:Leaf,title:"Una propuesta diferente",desc:"Acercamos la experiencia Avra mediante nuevos puntos de contacto."}].map(({Icon,title,desc})=>(
            <article key={title} className="flex h-full flex-col rounded-2xl border border-[#295C50]/10 bg-white p-4 shadow-[0_5px_20px_rgba(48,46,42,.035)] sm:p-5">
              <span className="grid size-10 place-items-center rounded-xl bg-[#EAF0E4] text-[#295C50]"><Icon size={20} aria-hidden="true" /></span>
              <h3 className="mt-3 font-heading text-base font-bold leading-snug text-[#302E2A]">{title}</h3>
              <p className="mt-1.5 text-justify text-base leading-7 text-[#302E2A]/70 sm:text-lg sm:leading-8">{desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
