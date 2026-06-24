'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Caja / POS',
    desc: 'Cobro veloz con código de barras, pagos mixtos y cierre de caja automático.',
    span: 'col-span-2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 9h20" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 13h4M6 16h2M14 13h4M14 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--teal)',
    accentSoft: 'var(--teal-soft)',
  },
  {
    title: 'Inventario en tiempo real',
    desc: 'Stock siempre actualizado, alertas de bajo inventario y órdenes de compra.',
    span: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="9" cy="6" r="2" fill="currentColor" />
        <circle cx="15" cy="12" r="2" fill="currentColor" />
        <circle cx="9" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
    accent: 'var(--teal)',
    accentSoft: 'var(--teal-soft)',
  },
  {
    title: 'Créditos y fiados',
    desc: 'Crédito a clientes con plazos, abonos y recordatorios automáticos por WhatsApp.',
    span: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v6m0 8v6M2 12h6m8 0h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    accent: 'var(--accent)',
    accentSoft: 'var(--accent-soft)',
  },
  {
    title: 'Empleados con PIN',
    desc: 'Varios cajeros con roles y permisos diferenciados. Control total sobre quién hace qué.',
    span: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--teal)',
    accentSoft: 'var(--teal-soft)',
  },
  {
    title: 'Reportes avanzados',
    desc: 'Ventas por periodo, por cajero y por método de pago. Siempre al día, sin exportar nada.',
    span: 'col-span-2',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--teal)',
    accentSoft: 'var(--teal-soft)',
  },
  {
    title: 'Multi-sucursal',
    desc: 'Manejá varias sedes desde un solo panel. Inventario y reportes por sucursal.',
    span: '',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="14" y="7" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 14h4M12 7V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    accent: 'var(--ai-3)',
    accentSoft: 'rgba(110,107,234,.1)',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] } },
}

export function BentoGridSection() {
  return (
    <section style={{ paddingBlock: 'var(--section-y)', background: 'var(--surface-2)' }}>
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', maxWidth: 560, marginInline: 'auto', marginBottom: 56 }}
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
            Características
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
            Todo lo que tu negocio necesita, en un solo lugar.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: 16,
          }}
          className="bento-grid"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={tileVariants}
              className={feat.span}
              whileHover={{ y: -4, boxShadow: 'var(--sh-3)' }}
              transition={{ duration: 0.22, ease: [0.2, 0.7, 0.3, 1] }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: '28px 28px 32px',
                boxShadow: 'var(--sh-1)',
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: feat.accentSoft,
                  color: feat.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {feat.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 'clamp(18px,1.4vw,21px)',
                    fontWeight: 650,
                    letterSpacing: '-0.01em',
                    color: 'var(--ink)',
                    marginBottom: 8,
                  }}
                >
                  {feat.title}
                </h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)' }}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) { .bento-grid { grid-template-columns: 1fr !important; } .col-span-2 { } }
        @media (max-width: 600px) { .bento-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
