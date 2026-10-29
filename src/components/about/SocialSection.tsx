import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";
import { socialConfig } from "@/config/socials";

const networks = [
  { name: "Instagram", image: "/images/about/social/instagram.webp", href: socialConfig.instagram },
  { name: "TikTok", image: "/images/about/social/tiktok.webp", href: socialConfig.tiktok },
  { name: "Facebook", image: "/images/about/social/facebook.webp", href: socialConfig.facebook },
];

export function SocialSection() {
  return (
    <section aria-labelledby="about-social-title" className="bg-background py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mb-8 sm:mb-10">
          <AnimatedTitle id="about-social-title" text="MOMENTOS QUE COMPARTIMOS" className="font-heading text-[28px] font-extrabold uppercase leading-[1.08] tracking-tight text-[#302E2A] sm:text-[34px] lg:text-[40px]" />
          <div aria-hidden="true" className="mt-5 h-[3px] w-14 rounded-full bg-[#EA6F32]" />
          <p className="mt-5 max-w-3xl text-justify text-base leading-7 text-[#302E2A]/75 sm:text-lg sm:leading-8">
            Nos gusta compartir lo que nos inspira: nuevos sabores, experiencias y pequeños momentos que hacen especial cada día.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {networks.map((network) => (
            <article key={network.name} className="overflow-hidden rounded-[24px] bg-white shadow-[0_10px_30px_rgba(48,46,42,.06)]">
              <div className="relative aspect-[4/3] bg-[#EAF0E4]">
                <Image src={network.image} alt={`Imagen de Avra para ${network.name}`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <h3 className="font-heading text-lg font-extrabold uppercase text-[#302E2A]">{network.name}</h3>
                {network.href ? (
                  <Link href={network.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#295C50] hover:underline">
                    Visitar perfil <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ) : <span className="text-sm text-[#302E2A]/55">Avra</span>}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
