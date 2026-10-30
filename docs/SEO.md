# SEO de AVRA

## Arquitectura e indexación

Next.js 16.3.4, React 19.2.8, App Router, TypeScript estricto y npm. No se añadieron dependencias. `src/config/seo.ts` centraliza URL, metadata e inventario indexable. Cada página publica título, descripción, canonical propia, Open Graph y Twitter. Los iconos existentes se conservan mediante las convenciones nativas de Next.js.

| Ruta | Intención / palabra principal | Variantes | Indexación |
| --- | --- | --- | --- |
| / | Marca y oferta / alimentos saludables | bebidas saludables, vending saludable | index |
| /carta | Explorar catálogo / carta de alimentos y bebidas saludables | snacks, smoothies, alimentos | index |
| /maquinas | Información comercial / máquinas vending saludables | expendedoras, vending para empresas y oficinas | index |
| /nosotros | Conocer marca / AVRA | historia, filosofía, alimentación natural | index |
| /blog | Contenido futuro | alimentación, bienestar | noindex, follow |
| Cuatro rutas legales | Información legal pendiente | No se optimizan comercialmente | noindex, follow |

No hay artículos publicados, páginas individuales de productos ni contacto independiente. `/eventos` y `/locales` mantienen sus redirecciones existentes; no se incluyen en sitemap. No se inventaron ubicaciones, cobertura nacional ni datos de investigación de palabras clave.

`/sitemap.xml` incluye solo las cuatro páginas indexables. No fabrica fechas, frecuencias ni prioridades. `/robots.txt` permite rastreo y anuncia sitemap; permite acceder a páginas noindex para detectar la instrucción. Antes de indexar blog o páginas legales, completar contenido real, cambiar metadata y añadir la ruta al inventario.

La canonical elimina query strings y usa HTTPS sin www. Next.js mantiene su normalización predeterminada sin slash en rutas internas. Las redirecciones HTTP/HTTPS y www requieren comprobarse en el hosting; no se cambió DNS ni infraestructura.

## Imágenes, semántica y rendimiento

Imagen social genérica de marca PNG 1200 × 630 generada en `/social-image` con `next/og`, sin sustituir banners ni atribuir una foto de Carta a Vending. Organization y WebSite se conectan por identificadores en un solo grafo JSON-LD. Se omiten LocalBusiness, Product, BlogPosting y BreadcrumbList por falta de datos o jerarquía visible apropiada. Redes oficiales vacías no se publican en el marcado.

Se eliminan main anidados, se da H1 al título visible existente del Home y títulos legales específicos. Se conservan next/image, WebP, tamaños responsive y arte de banners. Los logos declaran sizes y el header deja de competir con el hero como recurso prioritario. El carrusel respeta la preferencia de movimiento reducido. La reproducción automática no incluye un control de pausa visible por decisión de diseño; revisar el criterio WCAG 2.2.2 si aplica. El menú móvil contiene el foco y lo devuelve al control de apertura; hay enlace de salto al contenido.

Los originales de varias imágenes superan 2 MB; next/image sirve variantes optimizadas. No se recomprimió el catálogo completo. Pendiente evaluar descarga real, fuentes y vídeos con datos de campo. No se afirman puntuaciones Lighthouse ni LCP/INP/CLS p75.

## Search Console

1. Acceder a https://search.google.com/search-console con la cuenta de la empresa.
2. Añadir propiedad de dominio `avra.pe`.
3. Para dominio, copiar el TXT real proporcionado por Google y añadirlo manualmente en el proveedor DNS autoritativo (Hostinger solo si gestiona esos DNS), conservando registros existentes.
4. Confirmar propiedad en Google. La metadata HTML no verifica propiedades de dominio.
5. Como alternativa, crear propiedad de prefijo `https://avra.pe/`; copiar solo el valor content del token HTML a `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, reconstruir y desplegar, comprobar HTML y verificar.
6. Enviar `https://avra.pe/sitemap.xml` en Sitemaps.
7. Revisar Indexación y exclusiones; inspeccionar Inicio, Carta, Máquinas y Nosotros y su canonical seleccionada.
8. Consultar Rendimiento: consultas, páginas, impresiones, clics y CTR; comparar periodos y dispositivos.

No se completó ninguna verificación real de Google.

## GA4 y consentimiento

`.env.example` contiene solo variables públicas sin valores falsos. GA4 requiere ID válido `G-...`, `NEXT_PUBLIC_ANALYTICS_ENABLED=true` y consentimiento explícito en la sesión. En el estado actual no existe CMP ni políticas definitivas: mantener disabled y no recopilar.

Después de aprobación de políticas e implementación de una interfaz accesible de consentimiento, conectar su elección analítica con `setAnalyticsConsent(true|false)` de `Analytics.tsx`. No llamarlo por visita, cierre de banner o silencio. El estado empieza denegado en cada carga; no existe persistencia automática. La futura CMP debe gestionar renovación, caducidad y retirada. La retirada desactiva GA y actualiza consentimiento; la CMP debe gestionar también eliminación de cookies según la política aprobada.

El script se incorpora únicamente después de consentimiento. Consent Mode usa analytics_storage denegado inicialmente; ad_storage, ad_user_data y ad_personalization siguen denegados. No se activa Google Signals ni publicidad personalizada. Pageviews manuales por pathname, sin query/hash/referrer ni textos personales, con send_page_view:false. En GA4 DESACTIVAR medición mejorada automática (especialmente cambios del historial, clics y formularios) para evitar duplicación y captura de URLs personales. No añadir otro gtag ni GTM.

Eventos exclusivos por clic: whatsapp_click, vending_inquiry (WhatsApp desde Máquinas), email_click y commercial_cta_click para otros CTA. No se envían destinos, teléfonos, correos ni contenido de mensajes. No hay formularios propios exitosos que instrumentar.

Validación al activar: probar sin decisión y rechazo (ninguna petición GA), aceptar (un script y un page_view), navegar vía Link (un page_view por ruta), probar cada CTA y retirar consentimiento (sin nuevos eventos). Revisar Network y DebugView con dispositivo de prueba; configurar debug_mode solo en entorno de prueba. Auditar también cookies y solicitudes tras retirada. No se verificó ingestión real sin propiedad GA4.

## Hostinger y publicación

Mantener npm ci, npm run build y npm run start; no se cambió next.config ni package-lock. Configurar variables antes del build: NEXT_PUBLIC se incorpora al bundle. Mantener runtime Node compatible con Next.js instalado. Tras revisión y despliegue autorizado: comprobar HTTPS válido, www/HTTP hacia https://avra.pe sin bucles, rutas y canonical, 404 reales, sitemap, robots, PNG social, iconos y ausencia de scripts GA mientras permanezca desactivado. Comprobar previews en WhatsApp/LinkedIn y Rich Results Test/Schema Validator con la URL publicada.

No se accedió a la cuenta Hostinger ni se modificaron DNS, correo o producción. No se creó PR ni se fusionó rama alguna.

## Fuentes oficiales

- https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/monitor-debug/search-console-start
- https://developers.google.com/analytics/devguides/collection/ga4/views
- https://developers.google.com/tag-platform/security/guides/consent
