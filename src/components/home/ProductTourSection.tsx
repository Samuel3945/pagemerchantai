'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { POSMockup } from './mockups/POSMockup'
import { InventoryMockup } from './mockups/InventoryMockup'
import { FiadosMockup } from './mockups/FiadosMockup'

const steps = [
  {
    num: '01',
    title: 'Cobrá en segundos, desde cualquier dispositivo',
    body: 'Varios cajeros a la vez, pagos mixtos (efectivo + transferencia + tarjeta) y empleados con PIN. La venta entra en un toque.',
    feats: ['Pagos mixtos y cobro por código de barras', 'Cierre de caja con cuadre automático'],
    panel: <POSMockup />,
    url: 'Caja · POS',
  },
  {
    num: '02',
    title: 'El stock baja solo con cada venta',
    body: 'Inventario en tiempo real, sin contar a mano. Alertas de bajo stock y de productos próximos a vencer para que nunca pierdas plata.',
    feats: ['Alertas de bajo inventario y vencimientos'],
    panel: <InventoryMockup />,
    url: 'Inventario en tiempo real',
  },
  {
    num: '03',
    title: 'Los créditos (fiados), sin enredos',
    body: 'Control de créditos a clientes, plazos y abonos. Sabés quién te debe, cuánto y hace cuánto — y el sistema manda el recordatorio por vos.',
    feats: ['Plazos, abonos y recordatorios por WhatsApp'],
    panel: <FiadosMockup />,
    url: 'Fiados sin enredos',
  },
]

function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 20,
        boxShadow: 'var(--sh-3)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 38,
          padding: '0 14px',
          background: 'var(--surface-2)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          {['#EF4444', '#F59E0B', '#22C55E'].map((c) => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }} />
          ))}
        </div>
        <div
          style={{
            flex: 1,
            height: 22,
            borderRadius: 999,
            background: '#fff',
            border: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            color: 'var(--ink-4)',
          }}
        >
          {url}
        </div>
      </div>
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  )
}

export function ProductTourSection() {
  const prefersReduced = useReducedMotion()
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const mid = window.innerHeight * 0.5
      let best = 0
      let bestDist = Infinity
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2
        const dist = Math.abs(center - mid)
        if (dist < bestDist) {
          bestDist = dist
          best = i
        }
      })
      setActiveStep(best)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="tour"
      style={{ background: 'var(--band)', color: 'var(--on-dark)', paddingBlock: 'var(--section-y)' }}
    >
      <div className="max-w-[1340px] mx-auto px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
          style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto', marginBottom: 64 }}
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
              marginBottom: 16,
            }}
          >
            <span style={{ width: 18, height: 1.5, background: 'var(--teal-bright)', borderRadius: 2, display: 'inline-block' }} />
            Todo en uno
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(26px,3vw,38px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: 'var(--on-dark)',
              textWrap: 'balance',
            } as React.CSSProperties}
          >
            Una sola venta mueve todo tu negocio.
          </h2>
          <p style={{ fontSize: 'clamp(17px,1.45vw,20px)', lineHeight: 1.55, color: 'var(--on-dark-2)', marginTop: 16 }}>
            De la caja al reporte, cada módulo está conectado. Cobrás una vez y el inventario, los
            fiados y los datos se actualizan solos.
          </p>
        </motion.div>

        {/* Tour grid */}
        <div
          ref={containerRef}
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}
          className="tour-grid"
        >
          {/* Sticky media panel */}
          <div style={{ position: 'sticky', top: 100 }} className="tour-media">
            <div style={{ position: 'relative', minHeight: 440 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={prefersReduced ? false : { opacity: 0, y: 14, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={prefersReduced ? {} : { opacity: 0, y: -14, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
                >
                  <BrowserFrame url={steps[activeStep].url}>
                    {steps[activeStep].panel}
                  </BrowserFrame>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Scrolling steps */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => { stepRefs.current[i] = el }}
                style={{
                  minHeight: '74vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: 16,
                  paddingBlock: 32,
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: activeStep === i ? 'var(--teal)' : 'rgba(255,255,255,.06)',
                    border: `1px solid ${activeStep === i ? 'transparent' : 'var(--band-line)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: activeStep === i ? '#fff' : 'var(--on-dark-3)',
                    transition: 'all .3s',
                  }}
                >
                  {step.num}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 'clamp(20px,1.8vw,26px)',
                    letterSpacing: '-0.018em',
                    lineHeight: 1.22,
                    color: activeStep === i ? 'var(--on-dark)' : 'var(--on-dark-3)',
                    transition: 'color .3s',
                  }}
                >
                  {step.title}
                </h3>

                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--on-dark-2)' }}>{step.body}</p>

                {step.feats.map((f) => (
                  <div key={f} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, color: 'var(--on-dark-2)' }}>
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ color: 'var(--teal-bright)', flexShrink: 0, marginTop: 1 }}
                    >
                      <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tour-grid { grid-template-columns: 1fr !important; }
          .tour-media { display: none !important; }
        }
      `}</style>
    </section>
  )
}
