import type { Metadata } from "next";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";

export const metadata: Metadata = {
  title: "Libro de reclamaciones | Avra",
  description: "Sección de libro de reclamaciones de Avra en preparación.",
};

export default function ComplaintBookPage() {
  return <ComingSoonLegalPage title="Libro de reclamaciones" />;
}
