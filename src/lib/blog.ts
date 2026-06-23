// Data-driven blog. Posts live here as structured content (no MDX dependency)
// so the route, the index and the JSON-LD all read from one source.

export type BlogSection = {
  heading: string
  body: string
}

export type BlogPost = {
  slug: string
  title: string
  h1: string
  description: string
  excerpt: string
  datePublished: string
  sections: BlogSection[]
  // Optional lead-magnet download rendered after a given section heading.
  download?: { afterHeading: string; label: string; href: string; note: string }
  faqs: { q: string; a: string }[]
}

export const POSTS: BlogPost[] = [
  {
    slug: 'arqueo-de-caja',
    title: 'Arqueo de caja: qué es y cómo hacerlo (con plantilla gratis)',
    h1: 'Arqueo de caja: qué es y cómo hacerlo sin errores',
    description:
      'Qué es el arqueo de caja, la fórmula para cuadrar y el paso a paso para '
      + 'hacerlo sin errores. Descargá una plantilla gratis y aprendé a evitar '
      + 'descuadres en tu negocio.',
    excerpt:
      'Qué es el arqueo de caja, la fórmula para cuadrar y cómo hacerlo paso a '
      + 'paso, con una plantilla gratis para descargar.',
    datePublished: '2026-06-23',
    sections: [
      {
        heading: '¿Qué es el arqueo de caja?',
        body:
          'El arqueo de caja es el proceso de contar el dinero físico que hay en la '
          + 'caja y compararlo con lo que el sistema dice que debería haber. Si los '
          + 'dos números coinciden, la caja cuadra. Si no, hay un descuadre que toca '
          + 'explicar. Hacerlo al cierre de cada turno es la forma más simple de '
          + 'cuidar tu plata y detectar errores —o fraudes— a tiempo.',
      },
      {
        heading: 'La fórmula del arqueo de caja',
        body:
          'El efectivo que deberías tener en la caja se calcula así: base inicial '
          + 'más ventas en efectivo, menos gastos en efectivo, menos retiros, más '
          + 'depósitos. Eso te da el efectivo esperado. Después contás el efectivo '
          + 'real y sacás la diferencia: efectivo contado menos efectivo esperado. '
          + 'Si da cero, cuadraste. Si da negativo, falta plata; si da positivo, '
          + 'sobra.',
      },
      {
        heading: 'Cómo hacer el arqueo paso a paso',
        body:
          'Uno: anotá la base con la que abriste la caja. Dos: contá el efectivo por '
          + 'denominación (billetes y monedas), siempre en el mismo orden. Tres: '
          + 'sumá las ventas en efectivo del turno y restá gastos y retiros. Cuatro: '
          + 'calculá el efectivo esperado con la fórmula. Cinco: compará con lo '
          + 'contado y registrá la diferencia. Seis: si hay descuadre, revisá '
          + 'movimiento por movimiento antes de cerrar.',
      },
      {
        heading: 'Plantilla de arqueo de caja gratis',
        body:
          'Para que no arranques de cero, armamos una plantilla de arqueo lista para '
          + 'usar. Tiene el conteo por denominación (en pesos colombianos) y la '
          + 'conciliación con la fórmula completa. Se abre en Excel y en Google '
          + 'Sheets.',
      },
      {
        heading: 'El problema de hacerlo a mano (y cómo el arqueo a ciegas lo resuelve)',
        body:
          'Hacer el arqueo en un cuaderno o un Excel funciona, pero tiene un hueco: '
          + 'si el cajero ve el total esperado antes de contar, puede "ajustar" el '
          + 'conteo para que cuadre. Por eso en MyMerchantAI el cierre de caja es a '
          + 'ciegas: el cajero cuenta primero y el sistema le muestra el esperado '
          + 'solo después. Así el descuadre queda registrado tal cual, el cálculo lo '
          + 'hace el sistema solo en cada cierre de turno, y vos te enterás de la '
          + 'verdad.',
      },
    ],
    download: {
      afterHeading: 'Plantilla de arqueo de caja gratis',
      label: 'Descargar plantilla de arqueo (CSV)',
      href: '/plantilla-arqueo-de-caja.csv',
      note: 'Se abre en Excel y Google Sheets. Gratis, sin registro.',
    },
    faqs: [
      {
        q: '¿Cada cuánto se debe hacer el arqueo de caja?',
        a: 'Lo ideal es al cierre de cada turno o al final del día. En negocios con varios cajeros, conviene hacerlo en cada cambio de turno para saber quién cuadró y quién no.',
      },
      {
        q: '¿Qué hago si la caja no cuadra?',
        a: 'Revisá movimiento por movimiento: ventas, gastos, retiros y depósitos. Muchos descuadres son errores de digitación o vueltos mal dados. Registrá siempre la diferencia con una nota que explique la causa.',
      },
      {
        q: '¿Necesito un software para hacer el arqueo?',
        a: 'No es obligatorio: podés usar la plantilla gratis. Pero un POS con cierre de caja a ciegas, como MyMerchantAI, lo hace solo, evita que se "ajuste" el conteo y te deja el historial de cada turno.',
      },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find(p => p.slug === slug)
}
