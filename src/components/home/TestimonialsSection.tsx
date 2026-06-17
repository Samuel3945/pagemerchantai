'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      '"Antes anotaba los fiados en un cuaderno y se me perdía la plata. Ahora sé exactamente quién me debe y el sistema les recuerda solo."',
    name: 'Marta Rodríguez',
    role: 'Minimercado Doña Marta · Medellín',
    result: '+30% en ventas',
    avatarColors: ['#E6F2EF', '#0F766E'],
    initials: 'MR',
    resultIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    quote:
      '"Las alertas de vencimiento me salvaron. No he vuelto a botar un medicamento por caducidad y mis clientes confían más."',
    name: 'Javier Pineda',
    role: 'Farmacia La Salud · Cali',
    result: '0 medicamentos vencidos',
    avatarColors: ['#FBF0DE', '#B45309'],
    initials: 'JP',
    resultIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    quote:
      '"Le pregunto al asistente cómo van las ventas y me responde al toque. Tomo decisiones con datos, ya no a la corazonada."',
    name: 'Carolina Téllez',
    role: 'Ferretería El Tornillo · Bogotá',
    result: '4 h/semana ahorradas',
    avatarColors: ['rgba(110,107,234,.12)', '#6E6BEA'],
    initials: 'CT',
    resultIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const card = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] } },
}

export function TestimonialsSection() {
  return (
    <section id="clientes" style={{ paddingBlock: 'var(--section-y)', background: 'var(--bg)' }}>
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
            Resultados reales
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
            Comercios que dejaron el cuaderno y nunca volvieron.
          </h2>
        </motion.div>

        {/* Metric row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22, marginBottom: 56, textAlign: 'center' }}
          className="metrics-grid"
        >
          {[
            { num: '12.500+', lab: 'comercios activos en LatAm' },
            { num: '3.2×', lab: 'más rápido al cobrar' },
            { num: '98%', lab: 'menos errores de inventario' },
            { num: '$15M', lab: 'en fiados recuperados' },
          ].map((m) => (
            <div key={m.lab}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  fontSize: 'clamp(38px,4.4vw,56px)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  color: 'var(--teal-ink)',
                }}
              >
                {m.num}
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 8 }}>{m.lab}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}
          className="tnl-grid"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={card}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 20,
                padding: 26,
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                boxShadow: 'var(--sh-1)',
                margin: 0,
              }}
            >
              {/* Result badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  alignSelf: 'flex-start',
                  fontSize: 12.5,
                  fontWeight: 650,
                  color: 'var(--success)',
                  background: 'var(--success-soft)',
                  padding: '5px 11px',
                  borderRadius: 999,
                }}
              >
                {t.resultIcon}
                {t.result}
              </div>

              <blockquote
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 16.5,
                  lineHeight: 1.55,
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                  margin: 0,
                  flex: 1,
                }}
              >
                {t.quote}
              </blockquote>

              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                {/* Intentional gradient placeholder avatar */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: `repeating-linear-gradient(135deg,${t.avatarColors[0]} 0 7px,transparent 7px 14px),${t.avatarColors[0]}`,
                    border: `2px solid ${t.avatarColors[1]}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: t.avatarColors[1],
                    fontWeight: 700,
                    fontSize: 14,
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 650, fontSize: 14, color: 'var(--ink)' }}>{t.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-3)' }}>{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .tnl-grid { grid-template-columns: 1fr !important; } .metrics-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}
