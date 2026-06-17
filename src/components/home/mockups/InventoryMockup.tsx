// Server component — pure static markup
export function InventoryMockup() {
  const rows = [
    { name: 'Arroz Diana 1kg', sub: 'SKU 0421 · -2 por venta', pct: 64, status: 'ok', label: '42 und' },
    { name: 'Leche Alquería', sub: 'Vence en 4 días', pct: 28, status: 'warn', label: 'Pronto vence' },
    { name: 'Aceite Premier', sub: 'Bajo el mínimo', pct: 12, status: 'crit', label: '6 und' },
    { name: 'Huevos x12', sub: 'SKU 0890', pct: 78, status: 'ok', label: '58 und' },
  ] as const

  const barColor = { ok: 'var(--teal)', warn: 'var(--warn)', crit: 'var(--danger)' }
  const tagBg = { ok: 'var(--success-soft)', warn: 'var(--warn-soft)', crit: 'var(--danger-soft)' }
  const tagColor = { ok: 'var(--success)', warn: 'var(--warn)', crit: 'var(--danger)' }

  return (
    <div style={{ fontFamily: 'var(--font-sans)', color: 'var(--ink)', fontSize: 13, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 19, letterSpacing: '-0.02em' }}>
          Inventario
        </span>
        <span style={{ fontSize: 10, fontWeight: 650, padding: '3px 8px', borderRadius: 999, background: 'var(--warn-soft)', color: 'var(--warn)' }}>
          3 alertas
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid var(--line)',
          borderRadius: 12,
          overflow: 'hidden',
          background: 'var(--surface)',
        }}
      >
        {rows.map((row, i) => (
          <div
            key={row.name}
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr auto',
              alignItems: 'center',
              gap: 12,
              padding: '11px 14px',
              borderBottom: i < rows.length - 1 ? '1px solid var(--line)' : undefined,
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: 12 }}>{row.name}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--font-mono)' }}>{row.sub}</div>
            </div>
            <div style={{ height: 7, borderRadius: 4, background: 'var(--surface-3)', overflow: 'hidden' }}>
              <div
                style={{ display: 'block', height: '100%', borderRadius: 4, width: `${row.pct}%`, background: barColor[row.status] }}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: 650,
                padding: '3px 8px',
                borderRadius: 999,
                whiteSpace: 'nowrap',
                background: tagBg[row.status],
                color: tagColor[row.status],
              }}
            >
              {row.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
