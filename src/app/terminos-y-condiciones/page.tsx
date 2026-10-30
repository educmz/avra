import type { Metadata } from "next";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones | Avra",
  description: "Sección de términos y condiciones de Avra en preparación.",
};

export default function TermsAndConditionsPage() {
  return <ComingSoonLegalPage title="Términos y condiciones" />;
}
