import { pageMetadata } from "@/config/seo";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";



export default function TermsAndConditionsPage() {
  return <ComingSoonLegalPage title="Términos y condiciones" />;
}

export const metadata = pageMetadata("/terminos-y-condiciones", "Términos y condiciones | AVRA", "Términos y condiciones de AVRA: sección en preparación.", false);
