'use client'

import { motion } from 'framer-motion'

const industries = [
  'Droguerías',
  'Ferreterías',
  'Tiendas de ropa',
  'Minimercados',
  'Veterinarias',
  'Papelerías',
  'Distribuidoras',
  'Misceláneas',
]

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...industries, ...industries]
  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <motion.div
        style={{ display: 'flex', gap: 40, width: 'max-content' }}
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {items.map((label, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              height: 28,
              color: 'var(--ink-4)',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: '-0.01em',
              opacity: 0.72,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{ width: 22, height: 22, borderRadius: 6, background: 'var(--surface-3)', display: 'inline-block', flexShrink: 0 }}
            />
            {label}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function SocialProofStrip() {
  return (
    <section
      aria-label="Prueba social"
      style={{
        paddingBlock: 30,
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        background: 'var(--surface)',
        overflow: 'hidden',
      }}
    >
      <div className="max-w-[1340px] mx-auto px-6 mb-5">
        <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--ink-3)', fontWeight: 550 }}>
          <strong style={{ color: 'var(--ink)', fontWeight: 700 }}>12.500+</strong> comercios en toda Latinoamérica ya venden con MyMerchantAI
        </p>
      </div>
      <MarqueeRow />
    </section>
  )
}
