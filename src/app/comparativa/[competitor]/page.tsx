import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { APP_URL, BRAND, SITE_URL } from '@/lib/site'
import { COMPETITORS, getCompetitor } from '@/lib/comparativas'

// Only competitors we define are valid — any other slug 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return COMPETITORS.map(c => ({ competitor: c.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ competitor: string }> },
): Promise<Metadata> {
  const { competitor } = await params
  const data = getCompetitor(competitor)
  if (!data) {
    return {}
  }
  const canonical = `/comparativa/${data.slug}`
  return {
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

export default async function ComparativaPage(
  { params }: { params: Promise<{ competitor: string }> },
) {
  const { competitor } = await params
  const data = getCompetitor(competitor)
  if (!data) {
    notFound()
  }

  const canonical = `${SITE_URL}/comparativa/${data.slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': SITE_URL },
      { '@type': 'ListItem', 'position': 2, 'name': `MyMerchantAI vs ${data.name}`, 'item': canonical },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data.faqs.map(f => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': { '@type': 'Answer', 'text': f.a },
    })),
  }

  const cell = 'px-4 py-3 text-[15px] align-top'

  return (
    <article style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="max-w-[860px] mx-auto px-6 pt-24 pb-8">
        <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
          <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
          Comparativa
        </span>
        <h1 className="leading-[1.08] tracking-[-0.025em] text-balance mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: 500, color: 'var(--ink)' }}>
          {data.keyword}
        </h1>
        <p className="leading-[1.6]" style={{ fontSize: 'clamp(17px, 1.45vw, 20px)', color: 'var(--ink-2)', maxWidth: '64ch' }}>
          {data.intro}
        </p>
      </section>

      {/* Strengths / edge */}
      <section className="max-w-[860px] mx-auto px-6 py-4 flex flex-col gap-10">
        {[data.theirStrengths, data.ourEdge].map(block => (
          <div key={block.heading}>
            <h2 className="leading-[1.18] tracking-[-0.02em] text-balance mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 500, color: 'var(--ink)' }}>
              {block.heading}
            </h2>
            <p className="leading-[1.6]" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '68ch' }}>
              {block.body}
            </p>
          </div>
        ))}
      </section>

      {/* Comparison table */}
      <section className="max-w-[860px] mx-auto px-6 py-10">
        <h2 className="leading-[1.18] tracking-[-0.02em] mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.4vw, 30px)', fontWeight: 500, color: 'var(--ink)' }}>
          {data.name} vs {BRAND}, lado a lado
        </h2>
        <div className="overflow-x-auto rounded-[14px] border" style={{ borderColor: 'var(--line)' }}>
          <table className="w-full border-collapse" style={{ minWidth: 520 }}>
            <thead>
              <tr style={{ background: 'var(--surface-2)' }}>
                <th className={`${cell} text-left`} style={{ fontWeight: 650, color: 'var(--ink-3)' }}>Característica</th>
                <th className={`${cell} text-left`} style={{ fontWeight: 650, color: 'var(--ink)' }}>{data.name}</th>
                <th className={`${cell} text-left`} style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>{BRAND}</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map(row => (
                <tr key={row.feature} style={{ borderTop: '1px solid var(--line)' }}>
                  <td className={cell} style={{ color: 'var(--ink-2)', fontWeight: 550 }}>{row.feature}</td>
                  <td className={cell} style={{ color: 'var(--ink-2)' }}>{row.them}</td>
                  <td className={cell} style={{ color: 'var(--ink)', fontWeight: 550 }}>{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* When each one */}
      <section className="max-w-[860px] mx-auto px-6 py-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-[16px] border p-6" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <h2 className="mb-4 leading-[1.2]" style={{ fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: 500, color: 'var(--ink)' }}>
            Cuándo te conviene {data.name}
          </h2>
          <ul className="flex flex-col gap-3">
            {data.whenThem.map(item => (
              <li key={item} className="flex items-start gap-3 leading-[1.5]" style={{ fontSize: '15.5px', color: 'var(--ink-2)' }}>
                <span className="mt-[8px] w-[6px] h-[6px] rounded-full shrink-0" style={{ background: 'var(--ink-4)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[16px] border p-6" style={{ background: 'var(--surface)', borderColor: 'var(--teal)' }}>
          <h2 className="mb-4 leading-[1.2]" style={{ fontFamily: 'var(--font-display)', fontSize: '21px', fontWeight: 500, color: 'var(--ink)' }}>
            Cuándo te conviene {BRAND}
          </h2>
          <ul className="flex flex-col gap-3">
            {data.whenUs.map(item => (
              <li key={item} className="flex items-start gap-3 leading-[1.5]" style={{ fontSize: '15.5px', color: 'var(--ink-2)' }}>
                <span className="mt-[8px] w-[6px] h-[6px] rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[860px] mx-auto px-6 py-10">
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

      {/* CTA */}
      <section className="max-w-[860px] mx-auto px-6 pb-24">
        <div className="rounded-[20px] border p-8 flex flex-col items-start gap-4" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <h2 className="leading-[1.15] tracking-[-0.02em] text-balance" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.6vw, 32px)', fontWeight: 500, color: 'var(--ink)' }}>
            Probá {BRAND} gratis y sacá tus propias conclusiones.
          </h2>
          <p className="leading-[1.55]" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '56ch' }}>
            Sin tarjeta de crédito y sin permanencia. Configurá tu caja en minutos.
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
