import type { Metadata } from "next";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";

export const metadata: Metadata = {
  title: "Política de privacidad | Avra",
  description: "Sección de política de privacidad de Avra en preparación.",
};

export default function PrivacyPolicyPage() {
  return <ComingSoonLegalPage title="Política de privacidad" />;
}
