"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, type Variants } from "motion/react";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/** Curva expo-out: arranca rápido y aterriza muy suave. Da sensación premium. */
const ease = [0.16, 1, 0.3, 1] as const;

const group = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

/** Tarjetas: suben con un leve escalado. */
export const aboutCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease },
  },
};

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  amount?: number;
}

/**
 * Contenedor que revela a sus hijos en cascada al entrar en pantalla.
 * Los hijos animados pueden declarar `variants`. Es válido anidar contenedores.
 */
export function AboutReveal({
  children,
  className,
  style,
  delay = 0,
  stagger = 0.12,
  amount = 0.3,
}: ContainerProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      style={style}
      variants={group(stagger, delay)}
      initial={reduced ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

