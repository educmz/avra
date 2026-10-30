# Auditoría inicial de SEO

Base: origin/develop, commit 8074e5d. Copia aislada, árbol inicialmente limpio. Fetch realizado antes de crear feat/seo-optimizacion-avra; rama remota SEO inexistente al inicio.

## Hallazgos y correcciones

- Alta: canonical de Inicio heredada por las demás rutas. Corregida con metadata completa por página.
- Alta: ausencia de sitemap y robots. Añadidos con convenciones nativas.
- Alta: blog y legales provisionales indexables. Ahora noindex, follow y fuera de sitemap; rutas conservadas.
- Media: Carta sin descripción particular; títulos legales duplicaban marca por template. Corregidos.
- Media: redes sociales sin imagen, falta JSON-LD. Imagen PNG genérica de marca y grafo Organization/WebSite.
- Media: main anidados, Home sin H1. Semántica corregida conservando clases y distribución.
- Media: se respeta la preferencia de movimiento reducido. El carrusel conserva autoplay sin control visible de pausa por decisión de diseño; queda pendiente evaluar el criterio WCAG 2.2.2.
- Media: diálogo móvil sin contención/restauración del foco. Corregido sin cambiar estructura visual.
- Media: logos sin sizes y prioridad en logo. Ajustados para evitar descargas sobredimensionadas y competencia con hero.
- Integraciones: no había Analytics, CMP, tokens Search Console, datos de redes oficiales ni configuración Hostinger específica. Integraciones preparadas y desactivadas; dependencias documentadas.

## Reutilizado

App Router y Metadata API, iconos existentes, next/image, imágenes WebP, lazy loading por defecto, fill/dimensiones y banners con arte móvil. Animaciones y fuentes existentes conservadas. Catálogo renderizable en servidor aun cuando incluye interacción cliente. Los reels de vending usan vídeos locales, no embed social remoto activo. No se añadieron páginas ni contenido legal/comercial ficticio.

## Pendientes priorizados

1. Alto impacto: completar textos legales y CMP con responsables de AVRA; verificar Search Console y dominio canónico en hosting.
2. Alto impacto: activar y verificar GA4 solo después de consentimiento válido y política definitiva; comprobar eventos y retirada en propiedad real.
3. Medio: medir CWV de campo y Lighthouse móvil publicado; investigar tamaño original de imágenes del carrusel (hasta 2,49 MB) y vídeos, sin cambiar recortes.
4. Medio: confirmar perfiles oficiales, contacto y alcance geográfico antes de enriquecer Organization o evaluar elegibilidad de Perfil de Empresa; no se presupone local físico.
5. Medio: publicar artículos útiles sobre elección de alimentos y funcionamiento del vending, con autor/fechas reales y revisión comercial; entonces activar blog y BlogPosting.
6. Revisión manual: contraste sobre cada banner, accesibilidad completa WCAG 2.2 AA, subtítulos de vídeos y lectura con tecnología asistiva. Las comprobaciones técnicas no constituyen certificación WCAG.

No se midieron posiciones, volúmenes de búsqueda ni Core Web Vitals reales. No se verificó indexación actual ni resultados enriquecidos en Google.
## Validación ejecutada

- npm ci --no-audit --no-fund: correcto, respetando package-lock.
- npm run lint: correcto después de corregir las incidencias de implementación.
- npx tsc --noEmit: correcto.
- npm run build: compilación Next.js de producción con TypeScript y generación estática correcta.
- Auditoría estática de referencias literales /images y /videos en src: ningún recurso inexistente. Las rutas construidas dinámicamente requieren revisión adicional.
- Edge headless con Playwright, producción local, 390 × 900 y 1440 × 900: nueve páginas por viewport con HTTP 200, canonical propia, descripción, imagen OG, un H1 y un main, JSON-LD parseable, noindex esperado y ausencia de overflow horizontal.
- Durante estas navegaciones no hubo peticiones a googletagmanager/google-analytics con la configuración predeterminada.
- /sitemap.xml, /robots.txt y /social-image: HTTP 200. Sitemap contiene cuatro URL canónicas sin fechas inventadas. Imagen social responde image/png.
- No existen scripts de pruebas unitarias en package.json. No se ejecutaron Lighthouse, Rich Results Test ni validación en una propiedad Google real.

La revisión de viewport y capturas comprueba la implementación actual; no existe comparación visual automatizada contra producción ni certificación completa de accesibilidad. Analytics habilitado, consentimiento y token Search Console real requieren validación externa antes de activación.

Validación adicional aprobada en Edge: menú móvil con Shift+Tab/Tab contenido dentro del diálogo, Escape cierra y restaura foco a Abrir menú. Capturas adicionales tomadas con prefers-reduced-motion: reduce. Iconos sociales sin URL pasan a elementos inactivos sin eliminar su diseño.
