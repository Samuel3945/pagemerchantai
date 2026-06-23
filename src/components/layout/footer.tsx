import Link from 'next/link'

export function Footer() {
  return (
    <footer style={{ background: 'var(--band)', color: 'var(--on-dark-2)' }} className="pt-[72px] pb-10">
      <div className="max-w-[1340px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.6fr_repeat(4,1fr)] gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 text-white" style={{ fontWeight: 680, fontSize: '18px' }}>
              <span className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center" style={{ background: 'linear-gradient(115deg, #0F766E 0%, #17B7A8 46%, #6E6BEA 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-[17px] h-[17px]"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5v-7Z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/></svg>
              </span>
              MyMerchant<span style={{ color: 'var(--teal-bright)' }}>AI</span>
            </Link>
            <p className="mt-3.5 text-[14px] leading-[1.55]" style={{ color: 'var(--on-dark-2)', maxWidth: '30ch' }}>
              El POS inteligente para los comercios de Latinoamérica. Vende más rápido y controla tu negocio en tiempo real.
            </p>
          </div>

          {/* Producto */}
          <div>
            <div className="text-[12px] tracking-[0.10em] uppercase mb-3.5" style={{ fontWeight: 650, color: 'var(--on-dark-3)' }}>Producto</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {[['/#tour', 'Caja / POS'], ['/#tour', 'Inventario'], ['/#tour', 'Fiados'], ['/#ia', 'Agente de IA'], ['/precios', 'Precios']].map(([href, label]) => (
                <Link key={label} href={href} className="hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Industrias */}
          <div>
            <div className="text-[12px] tracking-[0.10em] uppercase mb-3.5" style={{ fontWeight: 650, color: 'var(--on-dark-3)' }}>Industrias</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {[['farmacias', 'Droguerías'], ['ferreterias', 'Ferreterías'], ['ropa', 'Tiendas de ropa'], ['minimercados', 'Minimercados'], ['veterinarias', 'Veterinarias'], ['papelerias', 'Papelerías']].map(([slug, label]) => (
                <Link key={slug} href={`/industria/${slug}`} className="hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Recursos */}
          <div>
            <div className="text-[12px] tracking-[0.10em] uppercase mb-3.5" style={{ fontWeight: 650, color: 'var(--on-dark-3)' }}>Recursos</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {[['/#faq', 'Centro de ayuda'], ['/#faq', 'Preguntas frecuentes'], ['#', 'Blog'], ['#', 'Webinars']].map(([href, label]) => (
                <Link key={label} href={href} className="hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <div className="text-[12px] tracking-[0.10em] uppercase mb-3.5" style={{ fontWeight: 650, color: 'var(--on-dark-3)' }}>Empresa</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]">
              {[['#', 'Sobre nosotros'], ['#', 'Contacto'], ['#', 'WhatsApp'], ['/terminos', 'Términos'], ['/privacidad', 'Privacidad'], ['/reembolsos', 'Reembolsos']].map(([href, label]) => (
                <Link key={label} href={href} className="hover:text-white transition-colors">{label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* Industry grid */}
        <div className="mt-12">
          <div className="text-[12px] tracking-[0.10em] uppercase mb-5" style={{ fontWeight: 650, color: 'var(--on-dark-3)' }}>Todas las industrias</div>
          <nav aria-label="Índice de industrias" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
            {[['farmacias', 'Droguerías'], ['ferreterias', 'Ferreterías'], ['ropa', 'Tiendas de ropa'], ['minimercados', 'Minimercados'], ['veterinarias', 'Veterinarias'], ['papelerias', 'Papelerías']].map(([slug, label]) => (
              <Link key={slug} href={`/industria/${slug}`} className="px-3.5 py-3 rounded-[10px] text-[13.5px] hover:text-white transition-colors" style={{ fontWeight: 600, background: 'var(--band-2)', border: '1px solid var(--band-line)', color: 'var(--on-dark)' }}>
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-[13px]" style={{ borderTop: '1px solid var(--band-line)', color: 'var(--on-dark-3)' }}>
          <span>© 2026 MyMerchantAI · Hecho para Latinoamérica</span>
          <span className="flex gap-5 flex-wrap">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/reembolsos" className="hover:text-white transition-colors">Reembolsos</Link>
          </span>
          <span>Español (LatAm) · COP</span>
        </div>
      </div>
    </footer>
  )
}
