import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { APP_URL, BRAND, SITE_URL } from '@/lib/site'
import { getPost, POSTS } from '@/lib/blog'

// Only posts we define are valid — any other slug 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const data = getPost(slug)
  if (!data) {
    return {}
  }
  const canonical = `/blog/${data.slug}`
  return {
    title: { absolute: `${data.title} — ${BRAND}` },
    description: data.description,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title: data.title,
      description: data.description,
      url: `${SITE_URL}${canonical}`,
    },
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const data = getPost(slug)
  if (!data) {
    notFound()
  }

  const canonical = `${SITE_URL}/blog/${data.slug}`

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Inicio', 'item': SITE_URL },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${SITE_URL}/blog` },
      { '@type': 'ListItem', 'position': 3, 'name': data.h1, 'item': canonical },
    ],
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': data.h1,
    'description': data.description,
    'datePublished': data.datePublished,
    'dateModified': data.datePublished,
    'author': { '@type': 'Organization', 'name': BRAND },
    'publisher': { '@type': 'Organization', 'name': BRAND },
    'mainEntityOfPage': canonical,
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

  return (
    <article style={{ background: 'var(--bg)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Header */}
      <section className="max-w-[760px] mx-auto px-6 pt-24 pb-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
          <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
          Blog
        </Link>
        <h1 className="leading-[1.08] tracking-[-0.025em] text-balance mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3.8vw, 46px)', fontWeight: 500, color: 'var(--ink)' }}>
          {data.h1}
        </h1>
        <p className="leading-[1.6]" style={{ fontSize: '19px', color: 'var(--ink-2)', maxWidth: '64ch' }}>
          {data.excerpt}
        </p>
      </section>

      {/* Body */}
      <section className="max-w-[760px] mx-auto px-6 pb-6 flex flex-col gap-9">
        {data.sections.map(section => (
          <div key={section.heading}>
            <h2 className="leading-[1.2] tracking-[-0.02em] text-balance mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(21px, 2.3vw, 28px)', fontWeight: 500, color: 'var(--ink)' }}>
              {section.heading}
            </h2>
            <p className="leading-[1.7]" style={{ fontSize: '17px', color: 'var(--ink-2)' }}>
              {section.body}
            </p>
            {data.download && data.download.afterHeading === section.heading && (
              <div className="mt-5 rounded-[14px] border p-5 flex flex-col items-start gap-2" style={{ background: 'var(--surface)', borderColor: 'var(--teal)' }}>
                <a href={data.download.href} download className="inline-flex items-center h-11 px-5 rounded-full text-[15px] text-white" style={{ fontWeight: 600, background: 'var(--teal)' }}>
                  {data.download.label}
                </a>
                <span style={{ fontSize: '13.5px', color: 'var(--ink-3)' }}>{data.download.note}</span>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="max-w-[760px] mx-auto px-6 py-8">
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
      <section className="max-w-[760px] mx-auto px-6 pb-24">
        <div className="rounded-[20px] border p-8 flex flex-col items-start gap-4" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
          <h2 className="leading-[1.15] tracking-[-0.02em] text-balance" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.6vw, 30px)', fontWeight: 500, color: 'var(--ink)' }}>
            Cuadrá tu caja sin Excel, con {BRAND}.
          </h2>
          <p className="leading-[1.55]" style={{ fontSize: '17px', color: 'var(--ink-2)', maxWidth: '56ch' }}>
            El cierre de caja a ciegas hace el arqueo solo en cada turno. Empezá gratis, sin instalar nada.
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
