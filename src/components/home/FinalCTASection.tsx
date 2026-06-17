'use client'

import { motion } from 'framer-motion'

export function FinalCTASection() {
  return (
    <section style={{ paddingBlock: 'calc(var(--section-y) * 0.66)', background: 'var(--bg)' }}>
      <div className="max-w-[1340px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
          style={{
            position: 'relative',
            background: 'var(--band)',
            color: 'var(--on-dark)',
            borderRadius: 28,
            padding: 'clamp(48px,6vw,92px)',
            overflow: 'hidden',
            textAlign: 'center',
          }}
        >
          {/* Glow */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(50% 100% at 50% 0%,rgba(23,183,168,.22),transparent 60%),radial-gradient(40% 90% at 80% 100%,rgba(110,107,234,.18),transparent 55%)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 24,
            }}
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
                color: 'var(--teal-bright)',
              }}
            >
              <span style={{ width: 18, height: 1.5, background: 'var(--teal-bright)', borderRadius: 2, display: 'inline-block' }} />
              Empieza hoy
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(32px,4.2vw,52px)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: 'var(--on-dark)',
                maxWidth: '18ch',
                textWrap: 'balance',
              } as React.CSSProperties}
            >
              Tu negocio en orden, desde la primera venta.
            </h2>

            <p
              style={{
                fontSize: 'clamp(17px,1.45vw,20px)',
                lineHeight: 1.55,
                color: 'var(--on-dark-2)',
                maxWidth: '48ch',
              }}
            >
              Únete a +12.500 comercios que venden más rápido y deciden con datos. Configúralo en minutos.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.a
                href="https://app.mymerchantai.com/sign-up"
                whileHover={{ y: -1 }}
                whileTap={{ y: 1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 56,
                  padding: '0 30px',
                  borderRadius: 999,
                  fontSize: 17,
                  fontWeight: 600,
                  background: 'var(--accent)',
                  color: '#fff',
                  boxShadow: '0 10px 24px -10px rgba(221,77,24,.6)',
                  textDecoration: 'none',
                }}
              >
                Empieza gratis
              </motion.a>
              <motion.a
                href="https://app.mymerchantai.com/sign-up"
                whileHover={{ y: -1 }}
                whileTap={{ y: 1 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 56,
                  padding: '0 30px',
                  borderRadius: 999,
                  fontSize: 17,
                  fontWeight: 600,
                  background: 'transparent',
                  color: 'var(--on-dark)',
                  border: '1.5px solid var(--band-line)',
                  textDecoration: 'none',
                }}
              >
                Agenda una demo
              </motion.a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
              {['Sin tarjeta de crédito', 'Sin permanencia'].map((text) => (
                <span
                  key={text}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--on-dark-2)', fontWeight: 500 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--teal-bright)', flexShrink: 0 }}>
                    <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
