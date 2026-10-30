"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ViewerStatus = "loading" | "ready" | "error";

type Props = {
  fallbackSrc: string;
  fallbackAlt: string;
};

/**
 * Carga el GLB únicamente cuando el iframe entra en pantalla.
 * Si WebGL o el modelo no están disponibles, mantiene la fotografía del equipo.
 */
export function AvraMachine3D({ fallbackSrc, fallbackAlt }: Props) {
  const [status, setStatus] = useState<ViewerStatus>("loading");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.origin !== window.location.origin ||
        event.source !== iframeRef.current?.contentWindow ||
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
    <div
      className="relative h-full w-full overflow-hidden rounded-2xl"
      aria-label="Modelo 3D interactivo de la máquina expendedora Avra"
    >
      {status !== "error" && (
        <iframe
          ref={iframeRef}
          src="/viewers/vending-machine.html?model=avra"
          title="Máquina Avra en 3D. Arrastra para girarla."
          loading="lazy"
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
            status === "ready" ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      {status !== "ready" && (
        <Image
          src={fallbackSrc}
          alt={fallbackAlt}
          fill
          sizes="(min-width: 1024px) 42vw, 90vw"
          className="object-contain"
        />
      )}

      {status === "loading" && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#295C50]/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#295C50] shadow-sm">
          Cargando vista 3D…
        </span>
      )}

      {status === "ready" && (
        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#295C50]/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#295C50] shadow-sm">
          Arrastra para girar la máquina
        </span>
      )}
    </div>
  );
}
