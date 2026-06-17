'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'Emprende',
    desc: 'Para arrancar y dejar el cuaderno. Un punto de venta.',
    monthlyPrice: null as string | null,
    annualPrice: null as string | null,
    priceDisplay: '$0',
    priceLabel: '/ siempre',
    features: ['Caja y catálogo básico', 'Inventario en tiempo real', '1 usuario'],
    cta: 'Empieza gratis',
    ctaHref: 'https://app.mymerchantai.com/sign-up',
    ctaStyle: 'ghost' as const,
    featured: false,
    tag: undefined as string | undefined,
  },
  {
    name: 'Negocio',
    desc: 'Para el comercio que ya rueda. Varios cajeros y fiados.',
    monthlyPrice: '59.000',
    annualPrice: '49.000',
    priceDisplay: undefined as string | undefined,
    priceLabel: '/ mes',
    features: ['Todo lo de Emprende, y además:', 'Fiados, empleados con PIN y roles', 'Reportes avanzados y cierre de caja', 'Facturación electrónica'],
    cta: 'Empieza gratis',
    ctaHref: 'https://app.mymerchantai.com/sign-up',
    ctaStyle: 'primary' as const,
    featured: true,
    tag: 'Más popular',
  },
  {
    name: 'IA + Pro',
    desc: 'Todo el poder: agente de IA, delivery y multi-sucursal.',
    monthlyPrice: '119.000',
    annualPrice: '99.000',
    priceDisplay: undefined as string | undefined,
    priceLabel: '/ mes',
    features: ['Todo lo de Negocio, y además:', 'Agente de IA 24/7 + Sales Manager AI', 'Delivery, proveedores y multi-sucursal'],
    cta: 'Agenda una demo',
    ctaHref: 'https://app.mymerchantai.com/sign-up',
    ctaStyle: 'teal' as const,
    featured: false,
    tag: undefined as string | undefined,
  },
]

const faqs = [
  { q: '¿Cómo funciona la facturación anual?', a: 'Al elegir facturación anual pagas el equivalente a 10 meses y obtienes 2 meses gratis. El cobro se realiza una sola vez al inicio del período. Puedes cancelar antes del próximo período de renovación.' },
  { q: '¿Puedo cambiar de plan en cualquier momento?', a: 'Sí. Puedes subir de plan de inmediato y el cobro se prorratea. Para bajar de plan, el cambio aplica al inicio del siguiente período de facturación.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos tarjetas débito y crédito (Visa, Mastercard, Amex), transferencias bancarias y otros métodos disponibles a través de nuestra pasarela de pagos. El proceso es seguro y encriptado.' },
  { q: '¿Qué pasa si cancelo mi suscripción?', a: 'Conservas acceso a todas las funciones hasta el fin del período ya pagado. No se realizan reembolsos prorrateados del período en curso, salvo los derechos legales que te corresponden según la Política de Reembolsos.' },
]

export default function PreciosPage() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      {/* Hero */}
      <section className="py-[106px] pb-0" style={{ background: 'var(--surface-2)' }}>
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="max-w-[720px] mx-auto text-center flex flex-col items-center gap-4 mb-10">
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
              <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
              Precios
            </span>
            <h1 className="leading-[1.06] tracking-[-0.025em] text-balance" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--ink)' }}>
              Precios simples, sin sorpresas.
            </h1>
            <p className="leading-[1.55] text-balance" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)', maxWidth: '52ch' }}>
              Sin contratos, sin letra chica. Empieza gratis y escala cuando tu negocio lo necesite. Cancelá cuando quieras.
            </p>
            {/* Billing toggle */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-[14px]" style={{ fontWeight: 600, color: 'var(--ink)' }}>Mensual</span>
              <button
                role="switch"
                aria-checked={annual}
                onClick={() => setAnnual(!annual)}
                className="relative w-[52px] h-[30px] rounded-full border transition-colors"
                style={{ background: annual ? 'var(--teal)' : 'var(--surface-3)', borderColor: annual ? 'transparent' : 'var(--line-strong)' }}
                aria-label="Cambiar a facturación anual"
              >
                <span className="absolute top-[3px] left-[3px] w-[22px] h-[22px] bg-white rounded-full shadow-sm transition-transform" style={{ transform: annual ? 'translateX(22px)' : 'translateX(0)' }} />
              </button>
              <span className="text-[14px]" style={{ fontWeight: 600, color: 'var(--ink)' }}>Anual</span>
              <span className="text-[12.5px] px-2.5 py-1 rounded-full" style={{ fontWeight: 650, background: 'var(--accent-soft)', color: 'var(--accent)' }}>2 meses gratis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-[106px]" id="planes" style={{ background: 'var(--surface-2)' }}>
        <div className="max-w-[1340px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="relative flex flex-col gap-[18px] p-7 rounded-[20px] border"
                style={plan.featured ? {
                  background: 'var(--surface)',
                  borderColor: 'var(--teal)',
                  boxShadow: '0 0 0 1px var(--teal), 0 4px 12px rgba(19,29,26,.06)',
                } : {
                  background: 'var(--surface)',
                  borderColor: 'var(--line)',
                  boxShadow: '0 1px 2px rgba(19,29,26,.05)',
                }}
              >
                {plan.tag && (
                  <span className="absolute -top-[13px] left-1/2 -translate-x-1/2 text-[12px] px-3.5 py-1 rounded-full text-white whitespace-nowrap" style={{ fontWeight: 650, background: 'var(--teal)' }}>
                    {plan.tag}
                  </span>
                )}
                <div className="text-[17px]" style={{ fontWeight: 700, color: 'var(--ink)' }}>{plan.name}</div>
                <p className="text-[13.5px] leading-[1.5]" style={{ color: 'var(--ink-3)', minHeight: '40px' }}>{plan.desc}</p>
                <div className="flex items-baseline gap-1">
                  <span className="leading-none tracking-[-0.03em]" style={{ fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 500, color: 'var(--ink)' }}>
                    {plan.monthlyPrice
                      ? `$${annual ? plan.annualPrice : plan.monthlyPrice}`
                      : plan.priceDisplay}
                  </span>
                  <span className="text-[14px]" style={{ color: 'var(--ink-3)' }}>
                    {plan.priceLabel ?? '/ mes'}
                  </span>
                </div>
                <a
                  href={plan.ctaHref}
                  className="flex items-center justify-center h-12 rounded-full text-[15px] transition-all w-full"
                  style={plan.ctaStyle === 'primary' ? { fontWeight: 600, background: 'var(--accent)', color: '#fff', boxShadow: '0 10px 24px -10px rgba(221,77,24,.6)' }
                    : plan.ctaStyle === 'teal' ? { fontWeight: 600, background: 'var(--teal)', color: '#fff' }
                    : { fontWeight: 600, background: 'transparent', color: 'var(--ink)', border: '1.5px solid var(--line-strong)' }}
                >
                  {plan.cta}
                </a>
                <ul className="flex flex-col gap-[11px] text-[14px]" style={{ color: 'var(--ink-2)' }}>
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2.5 items-start">
                      <svg className="w-[18px] h-[18px] flex-none mt-px" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--teal)' }}>
                        <path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-center mt-6" style={{ color: 'var(--ink-3)' }}>
            {annual
              ? 'Plan anual: 2 meses gratis. Precios en COP; los impuestos que apliquen según tu país se calculan al momento del pago. Sin permanencia.'
              : 'Precios en COP. Los impuestos que apliquen según tu país se calculan al momento del pago. Sin permanencia.'}
          </p>

          {/* Pricing note */}
          <div className="mt-8 text-center max-w-[680px] mx-auto p-5 rounded-[14px] border text-[14.5px] leading-[1.6]" style={{ background: 'var(--surface)', borderColor: 'var(--line)', color: 'var(--ink-3)' }}>
            <strong style={{ color: 'var(--ink)' }}>Precios en pesos colombianos (COP).</strong> Los impuestos aplicables se calculan según tu jurisdicción.<br />
            Facturación mensual o anual; la suscripción se renueva automáticamente y puedes cancelar cuando quieras.<br />
            Consulta nuestra <a href="/reembolsos" style={{ color: 'var(--teal-ink)', fontWeight: 600 }}>Política de Reembolsos</a> y <a href="/terminos" style={{ color: 'var(--teal-ink)', fontWeight: 600 }}>Términos de Servicio</a> para más detalles.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[106px]" id="faq-facturacion">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[720px] mx-auto mb-8">
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
              <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
              Facturación
            </span>
            <h2 className="leading-[1.1] tracking-[-0.02em] text-balance" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 500, color: 'var(--ink)' }}>
              Preguntas frecuentes sobre precios.
            </h2>
          </div>
          <div className="max-w-[820px] mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b" style={{ borderColor: 'var(--line)' }}>
                <button
                  className="w-full flex items-center justify-between gap-5 py-6 px-1 text-left text-[17.5px] transition-colors"
                  style={{ fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em', background: 'none', border: 0, cursor: 'pointer' }}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg className="w-6 h-6 flex-none transition-transform" style={{ color: 'var(--ink-3)', transform: openFaq === i ? 'rotate(45deg)' : 'none' }} viewBox="0 0 24 24" fill="none">
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="pb-6 px-1">
                    <p style={{ color: 'var(--ink-2)', fontSize: '15.5px', lineHeight: 1.6, maxWidth: '70ch' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-[14px] text-center mt-7" style={{ color: 'var(--ink-3)' }}>
            ¿Tienes más preguntas? Escríbenos a{' '}
            <a href="mailto:soporte@mymerchantai.com" style={{ color: 'var(--teal-ink)', fontWeight: 600 }}>soporte@mymerchantai.com</a>
          </p>
        </div>
      </section>
    </>
  )
}
