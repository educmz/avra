import type { Metadata } from "next";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";

export const metadata: Metadata = {
  title: "Política de cookies | Avra",
  description: "Sección de política de cookies de Avra en preparación.",
};

export default function CookiePolicyPage() {
  return <ComingSoonLegalPage title="Política de cookies" />;
}
