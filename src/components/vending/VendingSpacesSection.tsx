import Image from "next/image";
import { AnimatedTitle } from "@/components/sections/AnimatedTitle";
import { Container } from "@/components/ui/Container";

// Imagen temporal: sustituir este archivo por la fotografía definitiva que aporte el cliente.
// Se reutiliza el recurso existente para evitar imágenes rotas mientras llega la nueva.
const spaceImage = "/images/vending/cta-vending.png";

const whatsappUrl = `https://wa.me/51948742332?text=${encodeURIComponent(
  "Hola, me gustaría recibir información sobre las máquinas expendedoras Avra para mi establecimiento."
)}`;

export function VendingSpacesSection() {
  return (
    <section aria-labelledby="vending-spaces-title" className="bg-background py-10 sm:py-14 lg:py-20">
      <Container>
        <div className="isolate overflow-hidden rounded-[26px] border border-[#302E2A]/[0.06] bg-[#F8EEE5] shadow-[0_14px_45px_rgba(48,46,42,0.06)] sm:rounded-[32px]">
          <div className="grid lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div className="flex min-w-0 flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.2em] text-[#EA6F32] sm:text-sm">
                Avra en tu espacio
              </p>
              <AnimatedTitle
                id="vending-spaces-title"
                text="Haz que tu espacio ofrezca algo más."
                className="mt-5 max-w-[16ch] font-heading text-[30px] font-extrabold uppercase leading-[1.08] tracking-[-0.03em] text-[#302E2A] sm:text-[38px] lg:text-[42px]"
              />
              <span aria-hidden="true" className="mt-5 block h-[3px] w-14 rounded-full bg-[#EA6F32]" />
              <p className="mt-6 max-w-[51ch] text-base leading-7 text-[#302E2A]/80 sm:text-lg sm:leading-8">
                ¿Te gustaría contar con una máquina expendedora Avra en tu establecimiento?
                Cuéntanos sobre tu espacio y conversemos sobre las opciones disponibles.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="avra-cta">
                  <span>Solicitar información</span>
                </a>
              </div>
              <p className="mt-4 max-w-[49ch] text-sm leading-6 text-[#302E2A]/65">
                Cada espacio es diferente. Conversemos sobre el tuyo.
              </p>
            </div>

            <div className="relative min-h-[280px] overflow-hidden bg-[#E9DED2] sm:min-h-[370px] lg:min-h-[470px]">
              <Image
                src={spaceImage}
                alt="Ambiente cálido y natural, como referencia de los espacios que podrían contar con Avra"
                fill
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 90vw, 100vw"
                className="object-cover object-[right_center]"
              />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#173E34]/10 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
