'use client'

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import Link from 'next/link'

// Inline browser frame wrapping any content
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
      {/* Browser bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 40,
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
      <div style={{ background: '#fff' }}>{children}</div>
    </div>
  )
}

// Full app shell with dashboard data
function DashboardMockup() {
  const bars = [38, 54, 46, 72, 92, 64, 80, 58]
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        color: 'var(--ink)',
        background: 'var(--bg)',
        fontSize: 13,
        display: 'grid',
        gridTemplateColumns: '180px 1fr',
        minHeight: 380,
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          background: 'var(--surface)',
          borderRight: '1px solid var(--line)',
          padding: '14px 10px',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontWeight: 700,
            fontSize: 13,
            padding: '4px 8px 12px',
          }}
        >
          <span
            style={{
              width: 20,
              height: 20,
              borderRadius: 6,
              background: 'linear-gradient(115deg,#0F766E,#17B7A8 46%,#6E6BEA)',
              display: 'inline-block',
            }}
          />
          MyMerchantAI
        </div>
        {[
          { label: 'Resumen', active: true },
          { label: 'Caja' },
          { label: 'Inventario' },
          { label: 'Créditos' },
          { label: 'Reportes' },
          { label: 'Asistente IA' },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              height: 30,
              padding: '0 9px',
              borderRadius: 8,
              color: item.active ? 'var(--teal-ink)' : 'var(--ink-3)',
              fontWeight: 550,
              fontSize: 12,
              background: item.active ? 'var(--teal-soft)' : 'transparent',
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 4,
                background: item.active ? 'var(--teal)' : 'var(--surface-3)',
                flexShrink: 0,
              }}
            />
            {item.label}
          </div>
        ))}
      </aside>

      {/* Main panel */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
        {/* Topline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 17, letterSpacing: '-0.02em' }}>
            Resumen del día
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              height: 26,
              padding: '0 11px',
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              background: 'var(--surface)',
              border: '1px solid var(--line)',
            }}
          >
            <span
              style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 0 3px rgba(21,128,61,.15)' }}
            />
            Caja abierta
          </span>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
          {[
            { lab: 'Ventas hoy', val: '$1.842.500', delta: '▲ 12% vs ayer', up: true },
            { lab: 'Tickets', val: '87', delta: '▲ 9', up: true },
            { lab: 'Crédito por cobrar', val: '$312.000', delta: '8 clientes', up: false },
          ].map((kpi) => (
            <div
              key={kpi.lab}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: 11,
                padding: '11px 13px',
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--ink-4)', fontWeight: 650 }}>
                {kpi.lab}
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 20, letterSpacing: '-0.02em', marginTop: 3 }}>
                {kpi.val}
              </div>
              <div style={{ fontSize: 11, fontWeight: 650, marginTop: 2, color: kpi.up ? 'var(--success)' : 'var(--danger)' }}>
                {kpi.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 11, padding: 13 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
            <span style={{ fontWeight: 650, fontSize: 12 }}>Ventas por hora</span>
            <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Hoy</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7, height: 88 }}>
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  borderRadius: '5px 5px 3px 3px',
                  height: `${h}%`,
                  background:
                    h === 92
                      ? 'linear-gradient(180deg,var(--accent-bright),var(--accent))'
                      : 'linear-gradient(180deg,var(--teal-bright),var(--teal))',
                  opacity: 0.92,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Floating notification toast
function Toast({ icon, title, sub, style }: { icon: 'ok' | 'ai'; title: string; sub: string; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        borderRadius: 12,
        padding: '10px 13px',
        boxShadow: 'var(--sh-3)',
        ...style,
      }}
    >
      <div
        style={{
          width: 30,
          height: 30,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          background:
            icon === 'ok'
              ? 'var(--success-soft)'
              : 'linear-gradient(118deg,rgba(15,118,110,.12),rgba(110,107,234,.16))',
          color: icon === 'ok' ? 'var(--success)' : 'var(--ai-3)',
        }}
      >
        {icon === 'ok' ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </div>
      <div>
        <div style={{ fontWeight: 650, fontSize: 12 }}>{title}</div>
        <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{sub}</div>
      </div>
    </div>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] } },
}

export function HeroSection() {
  const prefersReduced = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })
  const translateX = useTransform(springX, [-0.5, 0.5], [-12, 12])
  const translateY = useTransform(springY, [-0.5, 0.5], [-8, 8])

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReduced) return
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      mouseX.set((e.clientX / w) - 0.5)
      mouseY.set((e.clientY / h) - 0.5)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [prefersReduced, mouseX, mouseY])

  const mockupStyle = prefersReduced
    ? {}
    : { x: translateX, y: translateY }

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ position: 'relative', paddingTop: 56, paddingBottom: 'var(--section-y)', overflow: 'clip' }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '-10% -20% auto -20%',
          height: 620,
          zIndex: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(60% 70% at 50% 0%,rgba(23,183,168,.14),transparent 60%),radial-gradient(50% 60% at 78% 12%,rgba(110,107,234,.10),transparent 60%),radial-gradient(40% 60% at 18% 14%,rgba(221,77,24,.07),transparent 60%)',
        }}
      />

      <div className="max-w-[1340px] mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 56,
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', gap: 22 }}
          >
            <motion.span
              variants={fadeUp}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                fontWeight: 650,
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: 'var(--teal-ink)',
              }}
            >
              <span style={{ width: 18, height: 1.5, background: 'var(--accent)', borderRadius: 2, display: 'inline-block' }} />
              Punto de venta · Inventario · IA
            </motion.span>

            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(40px,5.4vw,76px)',
                lineHeight: 1.02,
                letterSpacing: '-0.028em',
                textWrap: 'balance',
              } as React.CSSProperties}
            >
              Vende más rápido y controlá tu negocio{' '}
              <span style={{ color: 'var(--accent)' }}>en tiempo real</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              style={{
                fontSize: 'clamp(17px,1.45vw,20px)',
                lineHeight: 1.55,
                color: 'var(--ink-2)',
                maxWidth: '52ch',
              }}
            >
              El POS inteligente para los comercios de Latinoamérica. Cobrá desde cualquier
              dispositivo, controlá el inventario y los fiados, y preguntale a tu negocio cómo va.
              Todo en un solo lugar, sin instalar nada.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a
                href="https://app.mymerchantai.com/sign-up"
                className="inline-flex items-center h-14 px-7 rounded-full text-white transition-all hover:-translate-y-px active:translate-y-0"
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  background: 'var(--accent)',
                  boxShadow: '0 10px 24px -10px rgba(221,77,24,.6)',
                  textDecoration: 'none',
                }}
              >
                Empieza gratis
              </a>
              <Link
                href="/precios"
                className="inline-flex items-center h-14 px-7 rounded-full border transition-colors hover:bg-[var(--surface)]"
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  borderColor: 'var(--line-strong)',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                }}
              >
                Ver precios
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 6 }}
            >
              {['Sin tarjeta de crédito', 'Sin instalar nada', 'Configúralo en minutos'].map((text) => (
                <span
                  key={text}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, color: 'var(--ink-3)', fontWeight: 500 }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--success)', flexShrink: 0 }}>
                    <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {text}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right mockup with parallax */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ position: 'relative', ...mockupStyle }}
          >
            {/* Browser frame */}
            <BrowserFrame url="app.mymerchantai.com">
              <DashboardMockup />
            </BrowserFrame>

            {/* Toast 1 */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
              style={{ position: 'absolute', top: '16%', left: -32, zIndex: 3 }}
            >
              <Toast icon="ok" title="Venta cobrada · $24.500" sub="Inventario actualizado solo" />
            </motion.div>

            {/* Toast 2 */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.5, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
              style={{ position: 'absolute', bottom: '12%', right: -24, zIndex: 3 }}
            >
              <Toast icon="ai" title='"¿Cómo van las ventas hoy?"' sub="+12% vs ayer · pico a las 6 pm" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
