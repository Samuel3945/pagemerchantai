# MerchantAI — Landing y SEO

Sitio público de **[MerchantAI](https://github.com/Samuel3945/merchantai)**, el SaaS de punto de venta e inventario con IA para pequeños comercios en Colombia.

🌐 [mymerchantai.com](https://mymerchantai.com)

![Next.js](https://img.shields.io/badge/Next.js_16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)

---

## Objetivo

Convertir visitas en registros: explicar el producto en segundos, mostrar precios claros y **posicionarse en Google** para las búsquedas de cada tipo de comercio (tiendas, ferreterías, droguerías, papelerías, boutiques, veterinarias).

## Qué incluye

- **Home** con propuesta de valor, módulos del producto y sección del agente de IA.
- **Precios** con los planes.
- **Páginas por industria** (`/industria/[sector]`), con contenido específico para cada tipo de negocio.
- **Comparativas** (`/comparativa/[competitor]`) frente a otras soluciones del mercado.
- **Blog** (`/blog/[slug]`) para contenido orgánico.
- **Páginas legales**: términos, privacidad y reembolsos.

## SEO técnico

La auditoría completa y su ejecución están en [`SEO_PLAN.md`](SEO_PLAN.md). En resumen:

- `metadataBase`, URLs canónicas y metadata propia por página.
- `sitemap.ts` y `robots.ts` generados por Next.js.
- Open Graph y Twitter Cards, con imagen OG dinámica (`opengraph-image.tsx`).
- Datos estructurados JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage y BreadcrumbList.
- Las rutas de sectores inválidos devuelven 404 real, para evitar *soft-404* y URLs infinitas.
- Web App Manifest y Google Analytics.

## Estructura

```
src/
├── app/
│   ├── page.tsx              Home
│   ├── precios/
│   ├── industria/[sector]/
│   ├── comparativa/[competitor]/
│   ├── blog/[slug]/
│   ├── terminos/ privacidad/ reembolsos/
│   ├── sitemap.ts robots.ts manifest.ts opengraph-image.tsx
└── components/
    ├── home/                 Secciones de la landing
    ├── layout/               Header y footer
    ├── analytics/
    └── ui/                   Componentes shadcn/ui
```

## Correr en local

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
```

Despliegue con el `Dockerfile` incluido (Next.js standalone).

---

Desarrollado por **[Samuel Alzate](https://github.com/Samuel3945)** · Cartagena, Colombia
