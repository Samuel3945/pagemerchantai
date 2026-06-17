'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
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

export function FAQSection() {
  return (
    <section id="faq" style={{ paddingBlock: 'var(--section-y)', background: 'var(--bg)' }}>
      <div className="max-w-[820px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 12,
              fontWeight: 650,
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: 'var(--teal-ink)',
              marginBottom: 16,
            }}
          >
            <span style={{ width: 18, height: 1.5, background: 'var(--accent)', borderRadius: 2, display: 'inline-block' }} />
            Preguntas frecuentes
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(26px,3vw,38px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            Lo que todo comerciante pregunta.
          </h2>
        </motion.div>

        {/* Accordion — base-ui doesn't use type/defaultValue, items have individual value props */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={i}
                style={{ borderBottom: '1px solid var(--line)' }}
              >
                <AccordionTrigger
                  style={{
                    fontSize: 17.5,
                    fontWeight: 600,
                    color: 'var(--ink)',
                    letterSpacing: '-0.01em',
                    textAlign: 'left',
                    padding: '24px 4px',
                  }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.6,
                    color: 'var(--ink-2)',
                    padding: '0 4px 24px',
                    maxWidth: '70ch',
                  }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
