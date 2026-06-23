// Single source of truth for site-wide SEO + brand constants.

export const SITE_URL = 'https://mymerchantai.com'
export const APP_URL = 'https://app.mymerchantai.com'
export const BRAND = 'MyMerchantAI'
export const LOCALE = 'es_CO'
export const SUPPORT_EMAIL = 'soporte@mymerchantai.com'

export const SITE_TITLE = `${BRAND} — El POS inteligente para Latinoamérica`
export const SITE_DESCRIPTION
  = 'Vende más rápido y controla tu negocio en tiempo real. El punto de venta '
    + 'con inteligencia artificial para comercios de Latinoamérica.'

export type Sector = {
  slug: string
  label: string
  title: string
  description: string
  intro: string
  bullets: string[]
}

// Per-sector landing copy. Drives generateStaticParams, metadata, sitemap and
// the page content so the set of valid sectors lives in exactly one place.
export const SECTORS: Sector[] = [
  {
    slug: 'farmacias',
    label: 'Farmacias',
    title: `POS para farmacias — ${BRAND}`,
    description:
      'Punto de venta para farmacias: control de inventario con fechas de '
      + 'vencimiento, ventas rápidas, fiados y caja cuadrada al cierre.',
    intro:
      'Llevá tu farmacia con un POS que entiende vencimientos, lotes y ventas '
      + 'rápidas — sin cuadrar la caja a mano.',
    bullets: [
      'Inventario con alertas de vencimiento y stock mínimo',
      'Ventas rápidas con lector de código de barras',
      'Fiados con el nombre del cliente y cobros parciales',
      'Cierre de caja sin sacar cuentas en papel',
    ],
  },
  {
    slug: 'ferreterias',
    label: 'Ferreterías',
    title: `POS para ferreterías — ${BRAND}`,
    description:
      'Punto de venta para ferreterías: catálogo grande, venta por unidad o '
      + 'medida, inventario en tiempo real y fiados.',
    intro:
      'Manejá miles de referencias, ventas por unidad o medida y fiados, todo '
      + 'desde la caja.',
    bullets: [
      'Catálogo amplio con búsqueda por nombre o código',
      'Venta por unidad, peso o medida',
      'Inventario en tiempo real con stock mínimo',
      'Fiados y cierre de caja automático',
    ],
  },
  {
    slug: 'ropa',
    label: 'Tiendas de ropa',
    title: `POS para tiendas de ropa — ${BRAND}`,
    description:
      'Punto de venta para tiendas de ropa: variantes por talla y color, '
      + 'inventario por sucursal y fiados.',
    intro:
      'Vendé por talla y color, controlá el inventario y dejá el cuaderno de '
      + 'fiados atrás.',
    bullets: [
      'Variantes por talla, color y referencia',
      'Inventario en tiempo real por sucursal',
      'Fiados y abonos con nombre del cliente',
      'Reportes de lo que más se vende',
    ],
  },
  {
    slug: 'minimercados',
    label: 'Minimercados',
    title: `POS para minimercados — ${BRAND}`,
    description:
      'Punto de venta para minimercados y tiendas de barrio: caja rápida, '
      + 'fiados, inventario y control de caja anti-fraude.',
    intro:
      'Caja rápida para el día a día de tu tienda de barrio, con fiados y '
      + 'control de caja que cuida tu plata.',
    bullets: [
      'Caja rápida con código de barras',
      'Fiados del barrio con cobros parciales',
      'Inventario en tiempo real',
      'Cierre de caja a ciegas (anti-fraude)',
    ],
  },
  {
    slug: 'veterinarias',
    label: 'Veterinarias',
    title: `POS para veterinarias — ${BRAND}`,
    description:
      'Punto de venta para veterinarias: productos y servicios, inventario con '
      + 'vencimientos, clientes y fiados.',
    intro:
      'Cobrá productos y servicios, controlá el inventario y llevá las cuentas '
      + 'de tus clientes en un solo lugar.',
    bullets: [
      'Productos y servicios en la misma caja',
      'Inventario con alertas de vencimiento',
      'Fiados y cuentas por cliente',
      'Cierre de caja sin cuadrar a mano',
    ],
  },
  {
    slug: 'papelerias',
    label: 'Papelerías',
    title: `POS para papelerías — ${BRAND}`,
    description:
      'Punto de venta para papelerías: catálogo amplio, ventas rápidas, '
      + 'inventario y temporada escolar bajo control.',
    intro:
      'Aguantá la temporada escolar con ventas rápidas, catálogo amplio e '
      + 'inventario en tiempo real.',
    bullets: [
      'Catálogo amplio con búsqueda rápida',
      'Ventas ágiles en hora pico',
      'Inventario en tiempo real con stock mínimo',
      'Fiados y cierre de caja automático',
    ],
  },
]

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find(s => s.slug === slug)
}
