import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Vega Legal — Юридические решения для бизнеса'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0D1B2E 0%, #1B2E4B 50%, #0D1B2E 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            width: '80px',
            height: '4px',
            background: '#C9A84C',
            marginBottom: '32px',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#F8F6F1',
            marginBottom: '24px',
            display: 'flex',
          }}
        >
          Vega
          <span style={{ color: '#C9A84C' }}>.</span>
          Legal
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '56px',
            fontWeight: 900,
            color: '#F8F6F1',
            lineHeight: 1.15,
            marginBottom: '20px',
            maxWidth: '800px',
          }}
        >
          Юридические решения для бизнеса
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '22px',
            color: '#8B9BB4',
            lineHeight: 1.5,
            maxWidth: '700px',
          }}
        >
          Защита бренда • Упаковка бизнеса • МФЦА • Astana Hub
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '80px',
            display: 'flex',
            gap: '40px',
            fontSize: '16px',
            color: '#C9A84C',
          }}
        >
          <span>vegalegal.kz</span>
          <span>+7 702 168 67 33</span>
          <span>Астана</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
