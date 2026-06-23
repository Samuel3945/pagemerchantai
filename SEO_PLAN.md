# Plan SEO — pagemerchantai (mymerchantai.com)

Auditoría + plan + estado de ejecución. Stack: Next 16 App Router, React 19, TS,
Tailwind v4. Dominio: `https://mymerchantai.com` (app en `app.mymerchantai.com`).

> **Estado: EJECUTADO Y VERIFICADO** — `next build` y `eslint` en verde; sitemap
> con 11 URLs limpias; sectores inválidos devuelven 404.

## Auditoría — hallazgos

### Críticos (fundamentos técnicos ausentes)
1. Sin `metadataBase` → las URLs canónicas y de Open Graph no resuelven.
2. Sin `app/sitemap.ts` → no se sirve sitemap real (el de `legacy-html/` es
   estático y usa URLs viejas `industria.html?sector=`).
3. Sin `app/robots.ts` → no se sirve robots desde el app de Next.
4. Sin URLs canónicas en ninguna página → riesgo de contenido duplicado
   (agravado por la segunda landing que vive en `merchantai`).
5. Sin Open Graph / Twitter Card → previsualizaciones rotas al compartir.
6. Sin imagen Open Graph.

### Altos
7. Home (`page.tsx`) sin metadata propia (hereda la del layout, sin canónica/OG).
8. `precios` sin metadata (hereda el título de la home; es client component).
9. Sin datos estructurados (JSON-LD): Organization, WebSite, SoftwareApplication,
   FAQPage (el contenido del FAQ ya existe), BreadcrumbList en sectores.

### Medios
10. Páginas de sector son delgadas ("en construcción") y cualquier
    `/industria/loquesea` devuelve 200 → riesgo de soft-404 y URLs infinitas.
11. Sin `app/manifest.ts`.

## Plan de ejecución

- [x] A. `src/lib/site.ts` — config central (URLs, marca, sectores con copy SEO).
- [x] B. `src/lib/faqs.ts` — extraer el FAQ a una fuente única (componente + JSON-LD).
- [x] C. `src/app/layout.tsx` — metadataBase, plantilla de título, OG, Twitter, canónica.
- [x] D. `src/app/page.tsx` — metadata de home + JSON-LD (Organization, WebSite,
      SoftwareApplication, FAQPage).
- [x] E. `src/app/sitemap.ts` — home, precios, legales y 6 sectores (URLs limpias).
- [x] F. `src/app/robots.ts` — permitir todo + sitemap + host.
- [x] G. `src/app/opengraph-image.tsx` — imagen OG 1200×630 con la marca (next/og).
- [x] H. `src/app/manifest.ts` — manifest básico.
- [x] I. `src/app/precios/layout.tsx` — metadata de precios (canónica incluida).
- [x] J. `src/app/industria/[sector]/page.tsx` — config-driven, `notFound()` +
      `dynamicParams = false`, metadata rica por sector, contenido real,
      BreadcrumbList JSON-LD.
- [x] K. Canónicas en páginas legales (terminos/privacidad/reembolsos).
- [x] L. `public/logo.svg` — logo estable para JSON-LD.

## Verificación
- [x] `next build` pasa (valida sitemap/robots/OG image + tipos).
- [x] `npm run lint` pasa.
- [x] Sitemap incluye las 8 URLs limpias; `/industria/invalido` da 404.

## Fuera de alcance (siguiente hito de contenido)
- Contenido completo de marketing por sector.
- Retiro de la segunda landing en `merchantai` + 301 → mymerchantai.com.
- Conectar redes sociales reales (Organization.sameAs).
