import { ImageResponse } from 'next/og'
import { BRAND, SITE_DESCRIPTION } from '@/lib/site'

export const alt = `${BRAND} — El POS inteligente para Latinoamérica`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(115deg, #0F766E 0%, #17B7A8 46%, #6E6BEA 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 600, opacity: 0.9, display: 'flex' }}>
          {BRAND}
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            marginTop: 24,
            maxWidth: 900,
            display: 'flex',
          }}
        >
          El POS inteligente para Latinoamérica
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.92,
            marginTop: 28,
            maxWidth: 880,
            display: 'flex',
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>
    ),
    size,
  )
}
