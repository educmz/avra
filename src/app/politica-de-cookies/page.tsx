import { pageMetadata } from "@/config/seo";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";



export default function CookiePolicyPage() {
  return <ComingSoonLegalPage title="Política de cookies" />;
}

export const metadata = pageMetadata("/politica-de-cookies", "Política de cookies | AVRA", "Política de cookies de AVRA: sección en preparación.", false);
