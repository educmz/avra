import { pageMetadata } from "@/config/seo";

import { ComingSoonLegalPage } from "@/components/legal/ComingSoonLegalPage";



export default function ComplaintBookPage() {
  return <ComingSoonLegalPage title="Libro de reclamaciones" />;
}

export const metadata = pageMetadata("/libro-de-reclamaciones", "Libro de reclamaciones | AVRA", "Libro de reclamaciones de AVRA: sección en preparación.", false);
