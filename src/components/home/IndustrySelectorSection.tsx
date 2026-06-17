'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const industries = [
  {
    slug: 'farmacias',
    label: 'Farmacias',
    desc: 'Controlá vencimientos, lotes y stock crítico. Nunca pierdas un medicamento por caducidad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    slug: 'ferreterias',
    label: 'Ferreterías',
    desc: 'Catálogo enorme con variantes, precios por mayoreo y fiados a contratistas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path d="m14 7 3 3-7 7-3 .9.9-3 7-7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m13 8 3 3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    slug: 'ropa',
    label: 'Tiendas de ropa',
    desc: 'Variantes de talla y color, temporadas, devoluciones y delivery sin enredos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path d="M9 4 5 6l1 4 2-.5V20h8V9.5l2 .5 1-4-4-2-2 2-2-2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    slug: 'minimercados',
    label: 'Minimercados',
    desc: 'Cobro veloz, alta rotación, pagos mixtos y los fiados del barrio bajo control.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path d="M4 7h16l-1.2 9.5a2 2 0 0 1-2 1.5H7.2a2 2 0 0 1-2-1.5L4 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 7a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    slug: 'veterinarias',
    label: 'Veterinarias',
    desc: 'Clientes y sus mascotas, productos y servicios, recordatorios y fiados.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <circle cx="7.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="7.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="16.5" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 15c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 3-4 3-4-.8-4-3Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    slug: 'papelerias',
    label: 'Papelerías',
    desc: 'Temporada escolar, alto número de SKU y ventas por mayoreo sin perder el control.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" width="26" height="26">
        <path d="M6 3h8l4 4v14H6V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 3v4h4M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] } },
}

export function IndustrySelectorSection() {
  return (
    <section id="industrias" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
          style={{ marginBottom: 48, maxWidth: 600 }}
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
            ¿Qué tipo de negocio tenés?
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
            Hecho a la medida de tu industria.
          </h2>
          <p style={{ fontSize: 'clamp(17px,1.45vw,20px)', lineHeight: 1.55, color: 'var(--ink-2)', marginTop: 12 }}>
            Un mismo software, configurado para tu sector.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))', gap: 16 }}
        >
          {industries.map((ind) => (
            <motion.div key={ind.slug} variants={cardVariants}>
              <motion.div whileHover={{ y: -5, boxShadow: 'var(--sh-3)' }} transition={{ duration: 0.22, ease: [0.2, 0.7, 0.3, 1] }}>
                <Link
                  href={`/industria/${ind.slug}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    padding: 22,
                    background: 'var(--surface)',
                    border: '1px solid var(--line)',
                    borderRadius: 20,
                    boxShadow: 'var(--sh-1)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'border-color .2s',
                  }}
                  className="ind-card-link"
                >
                  <span
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: 'var(--teal-soft)',
                      color: 'var(--teal-ink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {ind.icon}
                  </span>
                  <span style={{ fontSize: 18, fontWeight: 650, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
                    {ind.label}
                  </span>
                  <span style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.5, flex: 1 }}>
                    {ind.desc}
                  </span>
                  <span
                    style={{
                      fontSize: 13.5,
                      fontWeight: 650,
                      color: 'var(--teal-ink)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    Ver solución →
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
