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
    default: 'Vega Legal — Регистрация в МФЦА и Astana Hub',
    template: '%s | Vega Legal',
  },
  description:
    'Регистрация компаний в МФЦА (AIFC) и Astana Hub за 5–14 дней. Налоговые льготы до 2066 года. 200+ успешных кейсов. Юристы Астана.',
  keywords: ['МФЦА', 'AIFC', 'Astana Hub', 'регистрация компании', 'Казахстан', 'налоговые льготы'],
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
