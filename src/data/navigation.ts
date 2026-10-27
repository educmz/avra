export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Carta", href: "/carta" },
  { label: "Máquinas", href: "/maquinas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Locales", href: "/locales" },
];
