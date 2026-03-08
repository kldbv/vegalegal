import type { Metadata } from 'next'
import Script from 'next/script'
import { playfair, manrope } from '@/lib/fonts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CONTACTS } from '@/lib/constants'
import { JsonLd } from '@/components/ui/JsonLd'
import { organizationSchema } from '@/lib/schema'
import { MessageCircle } from 'lucide-react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vegalegal.kz'),
  title: {
    default: 'Vega Legal — Юридические услуги для бизнеса в Астане | Защита бренда, МФЦА, Astana Hub',
    template: '%s | Vega Legal',
  },
  description:
    'Юридические решения для малого и среднего бизнеса в Казахстане. Защита бренда, юридическая упаковка, коммерческие споры, регистрация в МФЦА и Astana Hub. Астана ☎ +7 702 168 67 33.',
  keywords: [
    'юридические услуги Астана',
    'юрист Астана',
    'защита бренда Казахстан',
    'регистрация товарного знака',
    'юридическая упаковка бизнеса',
    'коммерческие споры',
    'юридический аутсорсинг',
    'регистрация МФЦА',
    'AIFC registration',
    'Astana Hub регистрация',
    'налоговые льготы Казахстан',
    'корпоративный юрист',
    'NDA договор',
    'холдинг Казахстан',
  ],
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    siteName: 'Vega Legal',
    title: 'Vega Legal — Юридические решения для бизнеса',
    description:
      'Готовые юридические решения: защита бренда, упаковка бизнеса, споры, МФЦА и Astana Hub. 200+ успешных кейсов.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vega Legal — Юридические решения для бизнеса',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vega Legal — Юридические решения для бизнеса',
    description:
      'Защита бренда, юридическая упаковка, споры, регистрация в МФЦА и Astana Hub. Астана.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://vegalegal.kz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    yandex: '', // Add yandex verification code
    google: '', // Add google verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className={`${playfair.variable} ${manrope.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href={CONTACTS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-7 right-7 z-50 w-14 h-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform animate-float"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>

        {/* Yandex.Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            ym(105514518, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
            });
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mc.yandex.ru/watch/105514518"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
