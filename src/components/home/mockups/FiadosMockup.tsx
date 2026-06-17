// Server component — pure static markup
export function FiadosMockup() {
  const clientes = [
    { av: 'RG', name: 'Rosa Gómez', sub: 'Abonó $20.000 · hoy', amt: '$48.000' },
    { av: 'JP', name: 'Don Julio P.', sub: 'Plazo: 15 días', amt: '$92.500' },
    { av: 'MA', name: 'María A.', sub: 'Al día', amt: '$15.300' },
    { av: 'CT', name: 'Carlos Téllez', sub: 'Recordatorio enviado', amt: '$156.200' },
  ]

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--ink)', fontSize: 13, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, letterSpacing: '-0.02em' }}>
          Muro de fiados
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            height: 28,
            padding: '0 12px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            background: 'var(--accent-soft)',
            color: 'var(--accent-ink)',
          }}
        >
          $312.000 por cobrar
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {clientes.map((c) => (
          <div
            key={c.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 11,
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              borderRadius: 11,
              padding: '11px 13px',
            }}
          >
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: '50%',
                background: 'var(--teal-soft)',
                color: 'var(--teal-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: 13,
                flexShrink: 0,
              }}
            >
              {c.av}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 13 }}>{c.name}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{c.sub}</div>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 13, fontVariantNumeric: 'tabular-nums' }}>
              {c.amt}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
