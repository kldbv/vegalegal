import type { Metadata } from 'next'
import { playfair, manrope } from '@/lib/fonts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CONTACTS } from '@/lib/constants'
import { MessageCircle } from 'lucide-react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://vegalegal.kz'),
  title: {
    default: 'Vega Legal — Готовые юридические решения для бизнеса',
    template: '%s | Vega Legal',
  },
  description:
    'Готовые юридические решения для малого и среднего бизнеса. Защита бренда, юридическая упаковка, коммерческие споры, юридический аутсорсинг. Астана.',
  keywords: ['юридические услуги', 'защита бренда', 'юридическая упаковка', 'коммерческие споры', 'юридический аутсорсинг', 'МФЦА', 'Astana Hub', 'Казахстан'],
  openGraph: {
    type: 'website',
    locale: 'ru_KZ',
    siteName: 'Vega Legal',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
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
      </body>
    </html>
  )
}
