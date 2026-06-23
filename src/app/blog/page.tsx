import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND, SITE_URL } from '@/lib/site'
import { POSTS } from '@/lib/blog'

export const metadata: Metadata = {
  title: { absolute: `Blog — ${BRAND}` },
  description:
    'Guías prácticas para tu negocio: arqueo de caja, inventario, fiados y '
    + 'control de ventas. Aprendé a manejar tu comercio sin enredos.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: `Blog — ${BRAND}`,
    description: 'Guías prácticas para manejar tu negocio sin enredos.',
    url: `${SITE_URL}/blog`,
  },
}

export default function BlogIndexPage() {
  return (
    <section className="max-w-[860px] mx-auto px-6 pt-24 pb-24">
      <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
        <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
        Blog
      </span>
      <h1 className="leading-[1.08] tracking-[-0.025em] text-balance mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--ink)' }}>
        Guías para manejar tu negocio sin enredos
      </h1>
      <p className="leading-[1.55] mb-12" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)', maxWidth: '60ch' }}>
        Arqueo de caja, inventario, fiados y control de ventas, explicados simple
        y con plantillas para descargar.
      </p>

      <div className="flex flex-col gap-4">
        {POSTS.map(post => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-[16px] border p-6 transition-colors hover:border-[var(--line-strong)]"
            style={{ background: 'var(--surface)', borderColor: 'var(--line)', textDecoration: 'none', color: 'inherit' }}
          >
            <h2 className="leading-[1.25] tracking-[-0.01em] mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 500, color: 'var(--ink)' }}>
              {post.title}
            </h2>
            <p className="leading-[1.55]" style={{ fontSize: '15.5px', color: 'var(--ink-3)', maxWidth: '64ch' }}>
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-4 text-[14px]" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
              Leer guía →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
