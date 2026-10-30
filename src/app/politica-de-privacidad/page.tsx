import { pageMetadata } from "@/config/seo";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";



export default function PrivacyPolicyPage() {
  return <ComingSoonLegalPage title="Política de privacidad" />;
}

export const metadata = pageMetadata("/politica-de-privacidad", "Política de privacidad | AVRA", "Política de privacidad de AVRA: sección en preparación.", false);
