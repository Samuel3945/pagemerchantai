// Honest competitor comparisons. Claims here are checked against the
// competitor's public docs — do not assert a feature the competitor lacks
// unless verified, since deceptive comparisons hurt both SEO and trust.

export type CompareRow = {
  feature: string
  them: string
  us: string
}

export type Competitor = {
  slug: string
  name: string
  // Exact target keyword — drives the visible H1.
  keyword: string
  title: string
  description: string
  intro: string
  theirStrengths: { heading: string; body: string }
  ourEdge: { heading: string; body: string }
  rows: CompareRow[]
  whenThem: string[]
  whenUs: string[]
  faqs: { q: string; a: string }[]
}

export const COMPETITORS: Competitor[] = [
  {
    slug: 'treinta',
    name: 'Treinta',
    keyword: 'MyMerchantAI vs Treinta: la alternativa con arqueo de caja anti-fraude',
    title: 'MyMerchantAI vs Treinta — Alternativa con arqueo anti-fraude',
    description:
      'MyMerchantAI vs Treinta, comparación honesta: en qué se parecen y en qué '
      + 'se diferencian. La alternativa con arqueo de caja a ciegas anti-fraude, '
      + 'web desde el plan gratis y asistente de IA.',
    intro:
      '¿Buscás una alternativa a Treinta? Las dos apps se parecen en mucho —ambas '
      + 'manejan ventas, inventario y fiados—, pero tienen un enfoque distinto. '
      + 'Treinta es una app de gestión integral del negocio, fuerte en el celular. '
      + 'MyMerchantAI es un punto de venta para la caja del comercio físico. Acá va '
      + 'la comparación honesta para que elijas bien.',
    theirStrengths: {
      heading: 'Para qué es buena Treinta',
      body:
        'Treinta es gratis para empezar, fácil de usar y la usan millones de '
        + 'negocios en Latinoamérica. Maneja ventas, gastos, inventario, fiados, '
        + 'proveedores e incluso una tienda virtual, todo desde el celular. Si '
        + 'querés una app sencilla para llevar las cuentas de tu negocio y dejar el '
        + 'cuaderno, es una gran puerta de entrada.',
    },
    ourEdge: {
      heading: 'Dónde se diferencia MyMerchantAI',
      body:
        'MyMerchantAI está pensado para la caja del comercio físico que ya rueda. '
        + 'Funciona en el navegador de cualquier computador, tablet o celular desde '
        + 'el plan gratis —no solo en el celular—, cobra rápido con lector de código '
        + 'de barras, y cierra la caja con un arqueo a ciegas: el cajero cuenta el '
        + 'efectivo antes de ver el total esperado, así nadie puede "ajustar" el '
        + 'conteo. Sumá un asistente de IA que te responde cómo va el negocio.',
    },
    rows: [
      { feature: 'Plan gratis para empezar', them: 'Sí', us: 'Sí' },
      { feature: 'Funciona en el celular', them: 'Sí', us: 'Sí' },
      { feature: 'Funciona en computador y web', them: 'En el plan Pro', us: 'Sí, desde el plan gratis' },
      { feature: 'Inventario en tiempo real', them: 'Sí', us: 'Sí' },
      { feature: 'Créditos (fiados) y deudas de clientes', them: 'Sí', us: 'Sí' },
      { feature: 'Apertura y cierre de caja', them: 'Sí', us: 'Sí, con arqueo a ciegas anti-fraude' },
      { feature: 'Perfiles de empleado por rol', them: 'Sí', us: 'Sí, con PIN por empleado' },
      { feature: 'Facturación electrónica (Colombia)', them: 'Sí', us: 'Sí, desde el plan Negocio' },
      { feature: 'Cobro rápido con código de barras', them: 'Sí', us: 'Sí, optimizado para mostrador' },
      { feature: 'Asistente de inteligencia artificial', them: 'Consultá su plan', us: 'Sí, incluido' },
    ],
    whenThem: [
      'Estás arrancando y querés una app gratis, principalmente para el celular.',
      'Querés gestionar todo el negocio (proveedores, tienda virtual) desde un solo lugar.',
      'Tu operación es sobre todo móvil y no necesitás una caja fija.',
    ],
    whenUs: [
      'Tenés una caja física y querés cobrar rápido con código de barras en cualquier dispositivo.',
      'Querés un cierre de caja a ciegas que cuide tu plata del descuadre y del fraude.',
      'Necesitás facturación electrónica integrada y un asistente de IA que lea tu negocio.',
    ],
    faqs: [
      {
        q: '¿MyMerchantAI es gratis como Treinta?',
        a: 'Sí, tiene un plan gratis (Emprende) con caja e inventario. Los planes pagos arrancan en $59.000/mes y los podés probar 14 días gratis, sin tarjeta de crédito.',
      },
      {
        q: '¿Puedo usar MyMerchantAI en el computador?',
        a: 'Sí. Funciona en el navegador de cualquier computador, tablet o celular desde el plan gratis, sin instalar nada.',
      },
      {
        q: '¿Qué es el arqueo de caja a ciegas?',
        a: 'Es un cierre de caja anti-fraude: el cajero cuenta el efectivo primero y el sistema le muestra el total esperado solo después, para que nadie pueda ajustar el conteo a su favor.',
      },
    ],
  },
]

export function getCompetitor(slug: string): Competitor | undefined {
  return COMPETITORS.find(c => c.slug === slug)
}
