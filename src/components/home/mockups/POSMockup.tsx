// Server component — pure static markup, no hooks
export function POSMockup() {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        color: 'var(--ink)',
        background: 'var(--bg)',
        fontSize: 13,
        boxSizing: 'border-box',
      }}
    >
      {/* POS grid + ticket */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 220px', gap: 12 }}>
        {/* Product grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, alignContent: 'start' }}>
          {[
            { name: 'Arroz Diana 1kg', price: '$4.200' },
            { name: 'Aceite Premier', price: '$12.900' },
            { name: 'Leche Alquería', price: '$3.800' },
            { name: 'Pan Bimbo', price: '$6.500' },
            { name: 'Gaseosa 1.5L', price: '$5.300' },
            { name: 'Huevos x12', price: '$9.800' },
          ].map((p) => (
            <div
              key={p.name}
              style={{
                border: '1px solid var(--line)',
                borderRadius: 10,
                padding: 10,
                background: 'var(--surface)',
              }}
            >
              <div
                style={{
                  height: 36,
                  borderRadius: 7,
                  background: 'repeating-linear-gradient(135deg,rgba(15,118,110,.06) 0 6px,transparent 6px 12px),var(--surface-2)',
                  marginBottom: 8,
                }}
              />
              <div style={{ fontWeight: 600, fontSize: 12 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)' }}>{p.price}</div>
            </div>
          ))}
        </div>

        {/* Ticket */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderRadius: 12,
            padding: 14,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ fontWeight: 650, fontSize: 13, display: 'flex', justifyContent: 'space-between' }}>
            <span>Ticket #1042</span>
            <span style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-mono)' }}>3 ítems</span>
          </div>
          {[
            { q: '2 × Arroz Diana', amt: '$8.400' },
            { q: '1 × Aceite Premier', amt: '$12.900' },
            { q: '1 × Leche Alquería', amt: '$3.800' },
          ].map((l) => (
            <div key={l.q} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
              <span style={{ color: 'var(--ink-3)' }}>{l.q}</span>
              <span style={{ fontFamily: 'var(--font-mono)' }}>{l.amt}</span>
            </div>
          ))}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              paddingTop: 10,
              borderTop: '1px solid var(--line)',
            }}
          >
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>Total</span>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 500,
                fontSize: 22,
                letterSpacing: '-0.02em',
              }}
            >
              $25.100
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {['Efectivo', 'Transfer.'].map((label) => (
              <div
                key={label}
                style={{
                  height: 34,
                  borderRadius: 9,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600,
                  fontSize: 12,
                  border: '1px solid var(--line)',
                  background: 'var(--surface-2)',
                  color: 'var(--ink-2)',
                }}
              >
                {label}
              </div>
            ))}
            <div
              style={{
                gridColumn: 'span 2',
                height: 34,
                borderRadius: 9,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600,
                fontSize: 12,
                background: 'var(--accent)',
                color: '#fff',
              }}
            >
              Cobrar
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
