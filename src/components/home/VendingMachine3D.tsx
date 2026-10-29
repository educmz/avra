"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ViewerStatus = "loading" | "ready" | "error";

/**
 * Visor de Three.js aislado para que WebGL no se incluya en el bundle del inicio.
 * Si el navegador bloquea WebGL o los módulos externos, conserva la imagen original.
 */
export function VendingMachine3D() {
  const [status, setStatus] = useState<ViewerStatus>("loading");

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.data?.source !== "avra-vending-3d"
      ) {
        return;
      }
      if (event.data.status === "ready" || event.data.status === "error") {
        setStatus(event.data.status);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="relative h-full w-full" aria-label="Máquina expendedora Avra en tres dimensiones">
      {status !== "error" && (
        <iframe
          title="Modelo 3D interactivo de la máquina expendedora Avra. Arrastra para girarla."
          src="/viewers/vending-machine.html"
          loading="lazy"
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${status === "ready" ? "opacity-100" : "opacity-0"}`}
        />
      )}

      {status !== "ready" && (
        <Image
          src="/images/home/vending-machine/avra-vending-machine.png"
          alt="Máquina expendedora Avra"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain object-center lg:object-right"
        />
      )}

      {status === "ready" && (
        <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#295C50]/15 bg-[#FBF4EF]/90 px-4 py-2 text-[11px] font-semibold tracking-wide text-[#295C50] shadow-sm backdrop-blur-sm sm:bottom-5">
          Arrastra para girar la máquina
        </p>
      )}
    </div>
  );
}
