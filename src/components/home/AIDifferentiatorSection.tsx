'use client'

import { motion } from 'framer-motion'

const feats = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 5h16v11H8l-4 3V5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Agente 24/7 por WhatsApp',
    desc: 'Responde, cotiza y toma pedidos con tu catálogo real.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M5 19V9M12 19V5M19 19v-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Pregúntale en lenguaje natural',
    desc: '"¿Cuánto vendí esta semana?" y te responde al instante.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 3a9 9 0 1 0 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12 19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Detecta lo que se te escapa',
    desc: 'Productos por vencer, caídas de venta y posible fraude.',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Aprobás con tu PIN',
    desc: 'Las acciones sensibles del agente requieren tu visto bueno.',
  },
]

// Chat messages for the phone mockup
const messages = [
  { from: 'bot', text: 'Hola 👋 ¿Tenés acetaminofén de 500 y a cuánto?' },
  { from: 'ai', text: '¡Hola! Sí, tenemos Acetaminofén 500mg caja x10 a $3.500. Te quedan 24 cajas. ¿Querés que te lo aparte o te lo enviamos a domicilio?' },
  { from: 'bot', text: 'A domicilio porfa, al barrio Centro.' },
  { from: 'ai', text: 'Listo ✅ Pedido #318 creado · domicilio Centro · llega en ~25 min. Total $3.500 + $2.000 envío. Te aviso cuando salga.' },
]

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] } },
}

export function AIDifferentiatorSection() {
  return (
    <section
      id="ia"
      style={{ background: 'var(--band-2)', color: 'var(--on-dark)', paddingBlock: 'var(--section-y)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow backdrop */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(50% 70% at 20% 50%,rgba(23,183,168,.08),transparent 60%),radial-gradient(40% 60% at 80% 30%,rgba(110,107,234,.12),transparent 60%)',
        }}
      />

      <div className="max-w-[1340px] mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="ai-grid">
          {/* Left copy */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={item}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                height: 30,
                padding: '0 13px',
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                background: 'linear-gradient(115deg,rgba(15,118,110,.10),rgba(110,107,234,.12))',
                border: '1px solid rgba(110,107,234,.28)',
                color: 'var(--ai-3)',
                marginBottom: 24,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="2" />
              </svg>
              El diferenciador
            </motion.span>

            <motion.h2
              variants={item}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 'clamp(26px,3vw,38px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'var(--on-dark)',
                textWrap: 'balance',
                marginBottom: 16,
              } as React.CSSProperties}
            >
              Una IA que atiende a tus clientes y entiende tu negocio.
            </motion.h2>

            <motion.p variants={item} style={{ fontSize: 'clamp(16px,1.3vw,19px)', lineHeight: 1.55, color: 'var(--on-dark-2)', marginBottom: 28 }}>
              El <strong style={{ color: 'var(--on-dark)' }}>Agente de IA</strong> atiende por WhatsApp 24/7 con tu catálogo, precios y horarios. El{' '}
              <strong style={{ color: 'var(--on-dark)' }}>Sales Manager AI</strong> responde lo que le preguntes sobre tus números.
            </motion.p>

            {/* Feature grid */}
            <motion.div
              variants={stagger}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}
            >
              {feats.map((f) => (
                <motion.div
                  key={f.title}
                  variants={item}
                  style={{
                    background: 'rgba(255,255,255,.04)',
                    border: '1px solid var(--band-line)',
                    borderRadius: 14,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: 'linear-gradient(118deg,rgba(23,183,168,.2),rgba(110,107,234,.24))',
                      color: 'var(--teal-bright)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {f.icon}
                  </div>
                  <div style={{ fontWeight: 650, fontSize: 14, color: 'var(--on-dark)', marginTop: 8 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--on-dark-2)', lineHeight: 1.5, marginTop: 4 }}>{f.desc}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.7, 0.3, 1] as [number, number, number, number] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{
                width: 270,
                borderRadius: 38,
                background: '#0B1512',
                padding: 9,
                boxShadow: '0 30px 80px -28px rgba(11,21,18,.6),0 0 0 1px rgba(255,255,255,.06)',
              }}
            >
              <div style={{ borderRadius: 30, overflow: 'hidden', background: '#0E1A16', position: 'relative', minHeight: 520 }}>
                {/* Notch */}
                <div
                  style={{
                    position: 'absolute',
                    top: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 86,
                    height: 22,
                    background: '#0B1512',
                    borderRadius: 999,
                    zIndex: 5,
                  }}
                />

                {/* Chat content */}
                <div style={{ padding: 16, paddingTop: 42 }}>
                  {/* Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      paddingBottom: 14,
                      borderBottom: '1px solid var(--band-line)',
                      marginBottom: 14,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: 'linear-gradient(115deg,#0F766E,#17B7A8 46%,#6E6BEA)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="3.4" stroke="#fff" strokeWidth="2" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ color: 'var(--on-dark)', fontWeight: 650, fontSize: 14 }}>Asistente MyMerchantAI</div>
                      <div style={{ color: 'var(--teal-bright)', fontSize: 11, fontWeight: 600 }}>● en línea · responde en segundos</div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {messages.map((msg, i) => (
                      <div
                        key={i}
                        style={{
                          maxWidth: '82%',
                          alignSelf: msg.from === 'bot' ? 'flex-start' : 'flex-start',
                          padding: '9px 12px',
                          borderRadius: 14,
                          fontSize: 12,
                          lineHeight: 1.42,
                          ...(msg.from === 'bot'
                            ? {
                                background: '#182723',
                                border: '1px solid var(--band-line)',
                                color: 'var(--on-dark)',
                                borderBottomLeftRadius: 5,
                              }
                            : {
                                background: 'linear-gradient(118deg,rgba(15,118,110,.10),rgba(110,107,234,.13))',
                                border: '1px solid rgba(110,107,234,.26)',
                                color: 'var(--on-dark)',
                                borderBottomLeftRadius: 5,
                              }),
                        }}
                      >
                        {msg.text}
                      </div>
                    ))}
                    {/* Typing indicator */}
                    <div
                      style={{
                        alignSelf: 'flex-start',
                        padding: '9px 12px',
                        borderRadius: 14,
                        borderBottomLeftRadius: 5,
                        background: '#182723',
                        border: '1px solid var(--band-line)',
                      }}
                    >
                      <div style={{ display: 'inline-flex', gap: 4 }}>
                        {[0, 1, 2].map((n) => (
                          <span
                            key={n}
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: '50%',
                              background: 'var(--on-dark-3)',
                              display: 'inline-block',
                              animation: `mmdot 1.2s ${n * 0.15}s infinite ease-in-out`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes mmdot { 0%,60%,100% { opacity:.3;transform:translateY(0); } 30% { opacity:1;transform:translateY(-2px); } }
        @media (max-width: 900px) { .ai-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
