import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { APP_URL, getSector, SECTORS, SITE_URL } from '@/lib/site'

// Only the sectors we define are valid — any other slug 404s instead of
// rendering a thin, indexable soft-404.
export const dynamicParams = false

export function generateStaticParams() {
  return SECTORS.map(s => ({ sector: s.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ sector: string }> },
): Promise<Metadata> {
  const { sector } = await params
  const data = getSector(sector)
  if (!data) {
    return {}
  }
  const canonical = `/industria/${data.slug}`
  return {
    // data.title already carries the brand, so bypass the layout title template.
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${SITE_URL}${canonical}`,
    },
  }
}

export default async function IndustriaPage(
  { params }: { params: Promise<{ sector: string }> },
) {
  const { sector } = await params
  const data = getSector(sector)
  if (!data) {
    notFound()
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': SITE_URL },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': data.label,
        'item': `${SITE_URL}/industria/${data.slug}`,
      },
    ],
  }

  return (
    <section className="min-h-[60vh] flex items-center" style={{ background: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
          <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
          POS para
          {' '}
          {data.label}
        </span>
        <h1 className="leading-[1.06] tracking-[-0.025em] text-balance mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--ink)' }}>
          El POS inteligente para
          {' '}
          {data.label.toLowerCase()}
          .
        </h1>
        <p className="mb-8 leading-[1.55]" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)', maxWidth: '52ch' }}>
          {data.intro}
        </p>
        <ul className="mb-10 flex flex-col gap-3" style={{ maxWidth: '52ch' }}>
          {data.bullets.map(bullet => (
            <li key={bullet} className="flex items-start gap-3 leading-[1.5]" style={{ fontSize: '16.5px', color: 'var(--ink-2)' }}>
              <span className="mt-[9px] w-[6px] h-[6px] rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3.5 flex-wrap">
          <a href={`${APP_URL}/sign-up`} className="inline-flex items-center h-12 px-6 rounded-full text-[16px] text-white" style={{ fontWeight: 600, background: 'var(--accent)' }}>
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
