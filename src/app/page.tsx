'use client'

import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center" style={{ background: 'var(--bg)' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
            className="max-w-[680px]"
          >
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-6" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
              <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
              El POS inteligente para Latinoamérica
            </span>

            <h1 className="leading-[1.02] tracking-[-0.028em] mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5.4vw, 76px)', fontWeight: 500, color: 'var(--ink)' }}>
              Vende más rápido.{' '}
              <span style={{ background: 'linear-gradient(115deg, #0F766E 0%, #17B7A8 46%, #6E6BEA 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Controla todo.
              </span>
            </h1>

            <p className="mb-8 leading-[1.55]" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)', maxWidth: '52ch' }}>
              El punto de venta con inteligencia artificial para farmacias, ferreterías, tiendas de ropa y más. Sin contratos, sin complicaciones.
            </p>

            <div className="flex items-center gap-3.5 flex-wrap">
              <a href="https://app.mymerchantai.com/sign-up" className="inline-flex items-center h-14 px-7 rounded-full text-[17px] text-white transition-all hover:-translate-y-px" style={{ fontWeight: 600, background: 'var(--accent)', boxShadow: '0 10px 24px -10px rgba(221,77,24,.6)' }}>
                Empieza gratis
              </a>
              <a href="/precios" className="inline-flex items-center h-14 px-7 rounded-full text-[17px] border transition-colors" style={{ fontWeight: 600, borderColor: 'var(--line-strong)', color: 'var(--ink)' }}>
                Ver precios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social proof strip */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="border-y py-8"
        style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-center text-[13px] mb-6" style={{ color: 'var(--ink-4)' }}>Usado por comercios en toda Latinoamérica</p>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {['Farmacias', 'Ferreterías', 'Tiendas', 'Minimercados', 'Veterinarias', 'Papelerías'].map((label) => (
              <span key={label} className="text-[16px]" style={{ fontWeight: 700, color: 'var(--ink-4)', opacity: 0.72 }}>{label}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features grid placeholder */}
      <section className="py-[106px]" style={{ background: 'var(--surface-2)' }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
              <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
              Características
            </span>
            <h2 className="leading-[1.1] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: 'var(--ink)' }}>
              Todo lo que tu negocio necesita
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Caja y POS', desc: 'Cobro veloz con código de barras, pagos mixtos y cierre de caja automático.' },
              { title: 'Inventario en tiempo real', desc: 'Stock siempre actualizado, alertas de bajo inventario y órdenes de compra.' },
              { title: 'Fiados del barrio', desc: 'Crédito a clientes con plazos, abonos y recordatorios automáticos.' },
              { title: 'Empleados con PIN', desc: 'Varios cajeros con roles, permisos y PIN de acceso por empleado.' },
              { title: 'Agente de IA', desc: 'Atiende clientes por WhatsApp 24/7 y gestiona pedidos automáticamente.' },
              { title: 'Reportes avanzados', desc: 'Ventas, rotación de inventario y estado de fiados en un vistazo.' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-7 rounded-[20px] border" style={{ background: 'var(--surface)', borderColor: 'var(--line)', boxShadow: '0 1px 2px rgba(19,29,26,.05)' }}>
                <h3 className="text-[19px] mb-2" style={{ fontWeight: 620, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{title}</h3>
                <p className="text-[15px] leading-[1.6]" style={{ color: 'var(--ink-2)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-[106px]" style={{ background: 'var(--band)' }}>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="leading-[1.06] tracking-[-0.025em] mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--on-dark)' }}>
            Empezá gratis hoy.
          </h2>
          <p className="mb-8 leading-[1.55]" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--on-dark-2)', maxWidth: '42ch', marginInline: 'auto' }}>
            Sin tarjeta de crédito. Sin contratos. Cancelá cuando quieras.
          </p>
          <a href="https://app.mymerchantai.com/sign-up" className="inline-flex items-center h-14 px-8 rounded-full text-[17px] bg-white transition-all hover:-translate-y-px" style={{ fontWeight: 600, color: 'var(--ink)' }}>
            Empieza gratis
          </a>
        </div>
      </section>
    </>
  )
}
