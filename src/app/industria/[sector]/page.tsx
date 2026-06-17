import type { Metadata } from 'next'
import Link from 'next/link'

const SECTORS = ['farmacias', 'ferreterias', 'ropa', 'minimercados', 'veterinarias', 'papelerias']

export function generateStaticParams() {
  return SECTORS.map((sector) => ({ sector }))
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const { sector } = await params
  return {
    title: `${sector.charAt(0).toUpperCase() + sector.slice(1)} — MyMerchantAI`,
    description: `MyMerchantAI para ${sector}. El POS inteligente configurado para tu sector.`,
  }
}

export default async function IndustriaPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params
  const sectorLabel = sector.charAt(0).toUpperCase() + sector.slice(1)

  return (
    <section className="min-h-[60vh] flex items-center" style={{ background: 'var(--bg)' }}>
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
          <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
          POS para {sectorLabel}
        </span>
        <h1 className="leading-[1.06] tracking-[-0.025em] text-balance mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--ink)' }}>
          El POS inteligente para {sectorLabel}.
        </h1>
        <p className="mb-8 leading-[1.55]" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)', maxWidth: '52ch' }}>
          Página en construcción — el contenido completo de {sectorLabel} estará disponible pronto.
        </p>
        <div className="flex items-center gap-3.5 flex-wrap">
          <a href="https://app.mymerchantai.com/sign-up" className="inline-flex items-center h-12 px-6 rounded-full text-[16px] text-white" style={{ fontWeight: 600, background: 'var(--accent)' }}>
            Empieza gratis
          </a>
          <Link href="/precios" className="inline-flex items-center h-12 px-6 rounded-full text-[16px] border" style={{ fontWeight: 600, borderColor: 'var(--line-strong)', color: 'var(--ink)' }}>
            Ver precios
          </Link>
        </div>
      </div>
    </section>
  )
}
