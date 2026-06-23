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

export type SectorSection = {
  heading: string
  body: string
}

export type SectorFaq = {
  q: string
  a: string
}

export type Sector = {
  slug: string
  label: string
  // Exact target keyword — drives the visible H1 and the SEO <title>.
  keyword: string
  title: string
  description: string
  intro: string
  bullets: string[]
  // Long-form body. Present on priority sectors; optional elsewhere, in which
  // case the page renders the intro + bullets only.
  sections?: SectorSection[]
  // Sector-specific FAQ — renders a visible accordion plus FAQPage JSON-LD.
  faqs?: SectorFaq[]
}

// Per-sector landing copy. Drives generateStaticParams, metadata, sitemap and
// the page content so the set of valid sectors lives in exactly one place.
export const SECTORS: Sector[] = [
  {
    slug: 'farmacias',
    label: 'Droguerías',
    keyword: 'Software de punto de venta para droguerías',
    title: `Software POS para droguerías y farmacias — ${BRAND}`,
    description:
      'Punto de venta para droguerías y farmacias: inventario con vencimientos '
      + 'y lotes, fiados, facturación electrónica y caja cuadrada al cierre. '
      + 'Empezá gratis.',
    intro:
      'Llevá tu droguería con un punto de venta que entiende vencimientos, lotes '
      + 'y rotación de medicamentos — sin cuadrar la caja a mano ni perder plata '
      + 'en productos vencidos.',
    sections: [
      {
        heading: '¿Por qué tu droguería necesita un POS y no una caja registradora?',
        body:
          'Una caja registradora solo guarda el dinero. Un software de punto de '
          + 'venta controla tu inventario en tiempo real, te avisa qué medicamento '
          + 'está por vencer, registra a quién le fiaste y te cuadra la caja al '
          + 'cierre. En una droguería, donde manejás cientos de referencias con '
          + 'fechas de vencimiento y lotes, esa diferencia es la que separa una '
          + 'farmacia que pierde plata de una que la cuida.',
      },
      {
        heading: 'Inventario con vencimientos y lotes, sin sustos',
        body:
          'MyMerchantAI te alerta cuando un producto llega al stock mínimo o se '
          + 'acerca su fecha de vencimiento, para que rotes a tiempo y no termines '
          + 'botando mercancía. Cada venta descuenta el inventario sola, así '
          + 'siempre sabés qué tenés y qué te falta pedir.',
      },
      {
        heading: 'Cumplí con INVIMA y factura electrónica desde la caja',
        body:
          'Emití tus documentos electrónicos cumpliendo la normativa colombiana '
          + 'directo desde el punto de venta, y mantené el control de medicamentos '
          + 'que tu droguería necesita. Todo desde el navegador, sin instalar nada '
          + 'y sin máquinas especiales.',
      },
    ],
    bullets: [
      'Inventario con alertas de vencimiento, lotes y stock mínimo',
      'Ventas rápidas con lector de código de barras',
      'Fiados con el nombre del cliente y cobros parciales',
      'Facturación electrónica y cierre de caja sin sacar cuentas en papel',
    ],
    faqs: [
      {
        q: '¿Sirve para una droguería pequeña de barrio?',
        a: 'Sí. Empezás gratis con el plan Emprende (caja e inventario) y subís de plan solo cuando tu droguería lo necesite. No hay permanencia ni tarjeta de crédito para arrancar.',
      },
      {
        q: '¿Controla fechas de vencimiento y lotes?',
        a: 'Sí. Cada producto puede llevar su fecha de vencimiento y lote, y el sistema te avisa antes de que se venza para que rotes la mercancía a tiempo.',
      },
      {
        q: '¿Incluye facturación electrónica para Colombia?',
        a: 'Sí, desde el plan Negocio emitís documentos electrónicos cumpliendo la normativa local, directo desde la caja.',
      },
    ],
  },
  {
    slug: 'ferreterias',
    label: 'Ferreterías',
    keyword: 'Software de punto de venta para ferreterías',
    title: `Software POS para ferreterías — ${BRAND}`,
    description:
      'Punto de venta para ferreterías: catálogo grande, venta por unidad o '
      + 'medida, inventario en tiempo real, fiados y cierre de caja. Con IA y '
      + 'sin instalar nada. Empezá gratis.',
    intro:
      'Manejá miles de referencias, ventas por unidad, peso o medida y fiados, '
      + 'todo desde la caja — con inventario que se actualiza solo en cada venta.',
    sections: [
      {
        heading: 'Un catálogo enorme, encontrado en segundos',
        body:
          'Desde tornillos hasta bultos de cemento, en una ferretería el catálogo '
          + 'es gigante. MyMerchantAI te deja buscar por nombre o código de barras '
          + 'y cobrar en segundos, sin frenar la fila en hora pico.',
      },
      {
        heading: 'Vendé por unidad, peso o medida',
        body:
          'Cobrá un tornillo suelto, un metro de manguera o un bulto completo sin '
          + 'hacer cuentas a mano. El sistema calcula el precio según la '
          + 'presentación y descuenta el inventario en tiempo real.',
      },
      {
        heading: 'Fiados a contratistas y arqueo de caja anti-fraude',
        body:
          'Llevá los fiados con el nombre del cliente y cobros parciales, y cerrá '
          + 'la caja con un arqueo a ciegas que cuida tu plata: el cajero cuenta '
          + 'primero, el sistema compara después. Menos descuadres, menos sorpresas.',
      },
    ],
    bullets: [
      'Catálogo amplio con búsqueda por nombre o código',
      'Venta por unidad, peso o medida',
      'Inventario en tiempo real con stock mínimo',
      'Fiados y cierre de caja a ciegas (anti-fraude)',
    ],
    faqs: [
      {
        q: '¿Aguanta miles de referencias?',
        a: 'Sí. Está pensado para catálogos grandes; buscás por nombre o código y el inventario se actualiza solo en cada venta.',
      },
      {
        q: '¿Puedo vender por metro o por peso?',
        a: 'Sí. Vendés por unidad, peso o medida y el sistema calcula el precio y descuenta el stock correspondiente.',
      },
      {
        q: '¿Funciona si se cae el internet?',
        a: 'Sí. Seguís cobrando en modo sin conexión y todo se sincroniza solo cuando vuelve el internet.',
      },
    ],
  },
  {
    slug: 'ropa',
    label: 'Tiendas de ropa',
    keyword: 'Software de punto de venta para tiendas de ropa',
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
    keyword: 'Software de punto de venta para tiendas de barrio',
    title: `Software POS para tiendas de barrio — ${BRAND}`,
    description:
      'Punto de venta para minimercados y tiendas de barrio: caja rápida, fiados '
      + 'del barrio, inventario en tiempo real y cierre de caja anti-fraude. '
      + 'Empezá gratis, sin instalar nada.',
    intro:
      'Caja rápida para el día a día de tu tienda de barrio, con fiados del '
      + 'barrio y un control de caja que cuida tu plata.',
    sections: [
      {
        heading: 'La caja más rápida para la hora pico',
        body:
          'En una tienda de barrio cada segundo cuenta. Cobrá con lector de código '
          + 'de barras, sumá productos sueltos al instante y atendé la fila sin '
          + 'trabarte. El inventario baja solo con cada venta.',
      },
      {
        heading: 'Los fiados del barrio, ordenados',
        body:
          'Dejá el cuaderno atrás. Registrá a quién le fiaste, con nombre y monto, '
          + 'y aceptá abonos parciales. Sabés siempre cuánto te deben y quién, sin '
          + 'pelearte con las cuentas.',
      },
      {
        heading: 'Cierre de caja a ciegas (anti-fraude)',
        body:
          'Al cerrar, el cajero cuenta el efectivo primero y el sistema compara '
          + 'después. Así detectás descuadres sin que nadie pueda "ajustar" el '
          + 'conteo. Tu plata, cuidada.',
      },
    ],
    bullets: [
      'Caja rápida con código de barras',
      'Fiados del barrio con cobros parciales',
      'Inventario en tiempo real',
      'Cierre de caja a ciegas (anti-fraude)',
    ],
    faqs: [
      {
        q: '¿Reemplaza el cuaderno de fiados?',
        a: 'Sí. Llevás los fiados con el nombre del cliente y cobros parciales, y ves siempre cuánto te deben en total.',
      },
      {
        q: '¿Es difícil de usar para el cajero?',
        a: 'No. La caja está pensada para vender rápido con código de barras; se configura en minutos y funciona en cualquier celular, tablet o computador.',
      },
      {
        q: '¿Sirve si no tengo internet estable?',
        a: 'Sí. Seguís cobrando sin conexión y todo se sincroniza solo cuando vuelve el internet.',
      },
    ],
  },
  {
    slug: 'veterinarias',
    label: 'Veterinarias',
    keyword: 'Software de punto de venta para veterinarias',
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
    keyword: 'Software de punto de venta para papelerías',
    title: `Software POS para papelerías — ${BRAND}`,
    description:
      'Punto de venta para papelerías: catálogo amplio, ventas rápidas en '
      + 'temporada escolar, inventario en tiempo real y fiados. Con IA y sin '
      + 'instalar nada. Empezá gratis.',
    intro:
      'Aguantá la temporada escolar con ventas rápidas, catálogo amplio e '
      + 'inventario en tiempo real — sin cuadrar la caja a mano.',
    sections: [
      {
        heading: 'Listo para la temporada escolar',
        body:
          'Cuando llega la temporada, la papelería se llena. MyMerchantAI te deja '
          + 'cobrar rápido con código de barras y mantener el inventario al día '
          + 'aunque entren cien clientes seguidos.',
      },
      {
        heading: 'Catálogo amplio, búsqueda al instante',
        body:
          'Cuadernos, lápices, impresiones, regalos: manejá un catálogo grande y '
          + 'encontrá cualquier producto por nombre o código en segundos. El stock '
          + 'se actualiza solo en cada venta.',
      },
      {
        heading: 'Fiados y cierre de caja sin cuentas en papel',
        body:
          'Registrá fiados con nombre y cobros parciales, y cerrá la caja con un '
          + 'arqueo que cuida tu plata. Sin sacar cuentas a mano al final del día.',
      },
    ],
    bullets: [
      'Catálogo amplio con búsqueda rápida',
      'Ventas ágiles en hora pico',
      'Inventario en tiempo real con stock mínimo',
      'Fiados y cierre de caja automático',
    ],
    faqs: [
      {
        q: '¿Sirve para la temporada escolar con mucha venta?',
        a: 'Sí. La caja está pensada para vender rápido en hora pico con lector de código de barras, y el inventario se actualiza solo.',
      },
      {
        q: '¿Puedo cobrar impresiones y servicios además de productos?',
        a: 'Sí. Cobrás productos y servicios desde la misma caja, y todo queda en tus reportes de ventas.',
      },
      {
        q: '¿Necesito comprar una máquina especial?',
        a: 'No. Funciona en el navegador de cualquier computador, tablet o celular. No instalás nada.',
      },
    ],
  },
]

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find(s => s.slug === slug)
}
