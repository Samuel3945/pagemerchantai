// Single source for the FAQ — consumed by the FAQ section UI and the FAQPage
// JSON-LD on the home page, so the two can never drift apart.

export type Faq = {
  q: string
  a: string
}

export const faqs: Faq[] = [
  {
    q: '¿Necesito instalar algo o comprar una máquina especial?',
    a: 'No. MyMerchantAI funciona en el navegador de cualquier computador, tablet o celular. No instalás nada y empezás a vender en minutos.',
  },
  {
    q: '¿De verdad es gratis para empezar?',
    a: 'Sí. El plan Emprende es gratis para siempre e incluye caja e inventario. Podés probar los planes pagos 14 días gratis, sin tarjeta de crédito y sin permanencia.',
  },
  {
    q: '¿Funciona si se me va el internet?',
    a: 'Podés seguir cobrando en modo sin conexión y todo se sincroniza solo cuando vuelve el internet. No perdés ninguna venta.',
  },
  {
    q: '¿Sirve para mi tipo de negocio?',
    a: 'Sí. Es un mismo software que se configura para tu sector: farmacias, ferreterías, tiendas de ropa, minimercados, veterinarias, papelerías y más. Al registrarte elegís tu industria y arranca configurado para vos.',
  },
  {
    q: '¿La facturación electrónica está incluida?',
    a: 'Sí, desde el plan Negocio. Emitís tus documentos electrónicos cumpliendo con la normativa local, directo desde la caja.',
  },
  {
    q: '¿Puedo manejar varias sucursales desde un mismo lugar?',
    a: 'Sí, con el plan IA + Pro podés administrar múltiples sedes desde un solo panel: inventario, reportes y empleados por sucursal.',
  },
]
