'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Emprende',
    desc: 'Para arrancar y dejar el cuaderno. Un punto de venta.',
    price: '$0',
    per: '/ siempre',
    cta: { label: 'Empieza gratis', href: 'https://app.mymerchantai.com/sign-up', variant: 'ghost' },
    features: ['Caja y catálogo básico', 'Inventario en tiempo real', '1 usuario'],
    featured: false,
  },
  {
    name: 'Negocio',
    desc: 'Para el comercio que ya rueda. Varios cajeros y fiados.',
    price: '$59.000',
    per: '/ mes',
    cta: { label: 'Empieza gratis', href: 'https://app.mymerchantai.com/sign-up', variant: 'primary' },
    features: ['Todo lo de Emprende, y además:', 'Fiados, empleados con PIN y roles', 'Reportes avanzados y cierre de caja', 'Facturación electrónica'],
    featured: true,
    badge: 'Más popular',
  },
  {
    name: 'IA + Pro',
    desc: 'Todo el poder: agente de IA, delivery y multi-sucursal.',
    price: '$119.000',
    per: '/ mes',
    cta: { label: 'Agenda una demo', href: 'https://app.mymerchantai.com/sign-up', variant: 'teal' },
    features: ['Todo lo de Negocio, y además:', 'Agente de IA 24/7 + Sales Manager AI', 'Delivery, proveedores y multi-sucursal'],
    featured: false,
  },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const cardVar = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] } },
}

export function PricingTeaserSection() {
  return (
    <section id="precios" style={{ paddingBlock: 'var(--section-y)', background: 'var(--surface-2)' }}>
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: 560, marginInline: 'auto', marginBottom: 48 }}
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
            Precios
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
            Empieza gratis. Crecé sin permanencia.
          </h2>
          <p style={{ fontSize: 'clamp(16px,1.3vw,19px)', lineHeight: 1.55, color: 'var(--ink-2)', marginTop: 12 }}>
            Sin contratos, sin letra chica. Cancelá cuando quieras.
          </p>
        </motion.div>

        {/* Plans grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }}
          className="plans-grid"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVar}
              style={{
                background: 'var(--surface)',
                border: plan.featured ? '1px solid var(--teal)' : '1px solid var(--line)',
                borderRadius: 20,
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                boxShadow: plan.featured ? '0 0 0 1px var(--teal),var(--sh-3)' : 'var(--sh-1)',
                position: 'relative',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--teal)',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 650,
                    padding: '5px 14px',
                    borderRadius: 999,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div style={{ fontWeight: 700, fontSize: 17, color: 'var(--ink)' }}>{plan.name}</div>
              <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.5, minHeight: 40 }}>{plan.desc}</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 44,
                    letterSpacing: '-0.03em',
                    color: 'var(--ink)',
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>{plan.per}</span>
              </div>

              {/* CTA */}
              <a
                href={plan.cta.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 48,
                  borderRadius: 999,
                  fontSize: 15.5,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all .15s',
                  ...(plan.cta.variant === 'primary'
                    ? { background: 'var(--accent)', color: '#fff', boxShadow: '0 10px 24px -10px rgba(221,77,24,.6)' }
                    : plan.cta.variant === 'teal'
                    ? { background: 'var(--teal)', color: '#fff' }
                    : {
                        background: 'transparent',
                        color: 'var(--ink)',
                        border: '1px solid var(--line-strong)',
                      }),
                }}
              >
                {plan.cta.label}
              </a>

              {/* Feature list */}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14, color: 'var(--ink-2)' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 1 }}>
                      <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Full pricing link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 32 }}
        >
          <Link
            href="/precios"
            style={{ color: 'var(--teal-ink)', fontWeight: 600, fontSize: 15, display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            Ver todos los detalles de precios
            <span style={{ display: 'inline-block' }}>→</span>
          </Link>
          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 10 }}>
            Precios en COP. Sin permanencia. Cancelá cuando quieras.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) { .plans-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
