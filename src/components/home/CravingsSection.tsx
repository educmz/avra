import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { HomeHeading } from "./HomeHeading";

const groups = [
  {
    title: "Para tomar",
    description: "Smoothies, tés helados, frappés y bebidas calientes.",
    button: "Ver bebidas",
    href: "/carta#carta-smoothies",
    background: "#DCEEF2",
    products: [
      { src: "/images/carta/naranja-fresa.webp", alt: "Smoothie Naranja Fresa", position: "left-[3%] bottom-[2%] w-[34%] h-[78%] rotate-[-6deg]" },
      { src: "/images/carta/jamaica.webp", alt: "Té helado Jamaica", position: "left-[27%] bottom-[0%] w-[33%] h-[88%] rotate-[3deg]" },
      { src: "/images/carta/mocaccino.webp", alt: "Frappé Mocaccino", position: "left-[50%] bottom-[0%] w-[33%] h-[88%] rotate-[-3deg]" },
      { src: "/images/carta/chocolate-caliente.webp", alt: "Chocolate caliente", position: "right-[-2%] bottom-[2%] w-[31%] h-[70%] rotate-[4deg]" },
    ],
  },
  {
    title: "Para comer",
    description: "Waffles, sándwiches, tostones y pizzas.",
    button: "Ver alimentos",
    href: "/carta#carta-waffles",
    background: "#F8E6BF",
    products: [
      { src: "/images/carta/waffle.webp", alt: "Waffle de Avra", position: "left-[0%] bottom-[-6%] w-[52%] h-[67%] rotate-[-7deg]" },
      { src: "/images/carta/mixto.png", alt: "Sándwich mixto", position: "right-[1%] top-[3%] w-[52%] h-[59%] rotate-[5deg]" },
      { src: "/images/carta/pizza-hawaiana.webp", alt: "Pizza de Avra", position: "right-[-3%] bottom-[-11%] w-[53%] h-[66%] rotate-[8deg]" },
    ],
  },
];

export function CravingsSection() {
  return (
    <section aria-labelledby="cravings-title" className="bg-background pb-12 sm:pb-16 lg:pb-20">
      <Container>
        <HomeHeading id="cravings-title" eyebrow="A tu gusto">
          ¿Qué se te antoja hoy?
        </HomeHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {groups.map((group) => (
            <article
              key={group.title}
              className="group relative isolate min-h-[305px] overflow-hidden rounded-2xl sm:min-h-[350px] lg:min-h-[365px]"
              style={{ backgroundColor: group.background }}
            >
              <div aria-hidden="true" className="absolute inset-0 z-[1] bg-gradient-to-r from-white/30 via-white/5 to-transparent" />
              <div className="absolute bottom-[-7%] right-[-4%] top-[13%] w-[73%] sm:w-[71%]">
                {group.products.map((product) => (
                  <div key={product.src} className={`absolute ${product.position} transition-transform duration-500 ease-out group-hover:scale-[1.045] motion-reduce:transition-none`}>
                    <Image src={product.src} alt={product.alt} fill sizes="(min-width: 1024px) 230px, (min-width: 768px) 190px, 45vw" className="object-contain drop-shadow-[0_15px_18px_rgba(48,46,42,.15)]" />
                  </div>
                ))}
              </div>
              <div className="relative z-10 flex max-w-[53%] flex-col items-start px-5 pb-7 pt-7 sm:px-8 sm:pt-9 lg:px-9">
                <span aria-hidden="true" className="mb-4 h-[3px] w-10 rounded-full bg-[#EA6F32]" />
                <h3 className="font-heading text-[23px] font-extrabold uppercase leading-[1.05] tracking-tight text-[#302E2A] sm:text-[28px]">{group.title}</h3>
                <p className="mt-3 max-w-[20ch] text-xs leading-5 text-[#302E2A]/80 sm:text-sm sm:leading-6">{group.description}</p>
                <Link href={group.href} className="mt-6 inline-flex min-h-10 items-center gap-2 rounded-full bg-[#295C50] px-4 text-[11px] font-bold uppercase tracking-[.04em] text-white transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#1D453B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#295C50] motion-reduce:transform-none sm:px-5 sm:text-xs">
                  {group.button} <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
