interface LegalProseProps {
  eyebrow: string
  title: string
  description: string
  updatedDate: string
  children: React.ReactNode
}

export function LegalProse({ eyebrow, title, description, updatedDate, children }: LegalProseProps) {
  return (
    <>
      <section className="py-[106px] pb-8">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[760px] mx-auto pb-8 border-b" style={{ borderColor: 'var(--line)' }}>
            <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.10em] uppercase mb-4" style={{ fontWeight: 650, color: 'var(--teal-ink)' }}>
              <span className="w-[18px] h-[1.5px] rounded" style={{ background: 'var(--accent)' }} />
              {eyebrow}
            </span>
            <h1 className="leading-[1.06] tracking-[-0.025em] text-balance mt-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 500, color: 'var(--ink)' }}>
              {title}
            </h1>
            <p className="mt-4 leading-[1.55]" style={{ fontSize: 'clamp(17px, 1.45vw, 21px)', color: 'var(--ink-2)' }}>{description}</p>
            <span className="block mt-1.5 text-[13px]" style={{ color: 'var(--ink-4)' }}>Última actualización: {updatedDate}</span>
          </div>
        </div>
      </section>
      <section className="py-10 pb-[106px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-[760px] mx-auto leading-[1.75] text-[16px]" style={{ color: 'var(--ink-2)' }}>
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
