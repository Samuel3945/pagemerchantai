import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { APP_URL, BRAND, getSector, SECTORS, SITE_URL } from '@/lib/site'

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

  const canonical = `${SITE_URL}/industria/${data.slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': SITE_URL },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': data.label,
        'item': canonical,
      },
    ],
  }

  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': `${BRAND} — ${data.label}`,
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Web',
    'description': data.description,
    'url': canonical,
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'COP',
    },
  }

  const faqSchema = data.faqs && data.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': data.faqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
        })),
      }
    : null

  return (
    <article style={{ background: 'var(--bg)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="max-w-[860px] mx-auto px-6 pt-24 pb-10">
        <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
          <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
          POS para
          {' '}
          {data.label}
        </span>
        <h1 className="leading-[1.06] tracking-[-0.025em] text-balance mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--ink)' }}>
          {data.keyword}
        </h1>
        <p className="mb-8 leading-[1.55]" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)', maxWidth: '60ch' }}>
          {data.intro}
        </p>
        <div className="flex items-center gap-3.5 flex-wrap">
          <a href={`${APP_URL}/sign-up`} className="inline-flex items-center h-12 px-6 rounded-full text-[16px] text-white" style={{ fontWeight: 600, background: 'var(--accent)' }}>
            Empieza gratis
          </a>
          <Link href="/precios" className="inline-flex items-center h-12 px-6 rounded-full text-[16px] border" style={{ fontWeight: 600, borderColor: 'var(--line-strong)', color: 'var(--ink)' }}>
            Ver precios
          </Link>
        </div>
      </section>

      {/* Long-form sections */}
      {data.sections && data.sections.length > 0 && (
        <section className="max-w-[860px] mx-auto px-6 pb-4 flex flex-col gap-10">
          {data.sections.map(section => (
            <div key={section.heading}>
              <h2 className="leading-[1.18] tracking-[-0.02em] text-balance mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 500, color: 'var(--ink)' }}>
                {section.heading}
              </h2>
              <p className="leading-[1.6]" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '68ch' }}>
                {section.body}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Feature checklist */}
      <section className="max-w-[860px] mx-auto px-6 py-12">
        <h2 className="leading-[1.18] tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 500, color: 'var(--ink)' }}>
          Todo lo que incluye para
          {' '}
          {data.label.toLowerCase()}
        </h2>
        <ul className="flex flex-col gap-3" style={{ maxWidth: '60ch' }}>
          {data.bullets.map(bullet => (
            <li key={bullet} className="flex items-start gap-3 leading-[1.5]" style={{ fontSize: '16.5px', color: 'var(--ink-2)' }}>
              <span className="mt-[9px] w-[6px] h-[6px] rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="max-w-[860px] mx-auto px-6 pb-16">
          <h2 className="leading-[1.18] tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 500, color: 'var(--ink)' }}>
            Preguntas frecuentes
          </h2>
          <div>
            {data.faqs.map(faq => (
              <details key={faq.q} className="border-b py-5" style={{ borderColor: 'var(--line)' }}>
                <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center justify-between gap-5 text-[17.5px]" style={{ fontWeight: 600, color: 'var(--ink)', letterSpacing: '-0.01em' }}>
                  {faq.q}
                  <span aria-hidden className="text-[var(--ink-3)] text-[22px] leading-none flex-none">+</span>
                </summary>
                <p className="pt-3 leading-[1.6]" style={{ color: 'var(--ink-2)', fontSize: '15.5px', maxWidth: '70ch' }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="max-w-[860px] mx-auto px-6 pb-24">
        <div className="rounded-[20px] border p-8 flex flex-col items-start gap-4" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <h2 className="leading-[1.15] tracking-[-0.02em] text-balance" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 500, color: 'var(--ink)' }}>
            Empezá hoy, gratis y sin instalar nada.
          </h2>
          <p className="leading-[1.55]" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '56ch' }}>
            Configurá MyMerchantAI para tu
            {' '}
            {data.label.toLowerCase().replace(/s$/, '')}
            {' '}
            en minutos. Sin tarjeta de crédito y sin permanencia.
          </p>
          <div className="flex items-center gap-3.5 flex-wrap mt-1">
            <a href={`${APP_URL}/sign-up`} className="inline-flex items-center h-12 px-6 rounded-full text-[16px] text-white" style={{ fontWeight: 600, background: 'var(--accent)' }}>
              Empieza gratis
            </a>
            <Link href="/precios" className="inline-flex items-center h-12 px-6 rounded-full text-[16px] border" style={{ fontWeight: 600, borderColor: 'var(--line-strong)', color: 'var(--ink)' }}>
              Ver precios
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
