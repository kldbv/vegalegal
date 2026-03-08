import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { MFCASection } from '@/components/sections/services/MFCASection'
import { AstanaHubSection } from '@/components/sections/services/AstanaHubSection'
import { ServicesCTA } from '@/components/sections/services/ServicesCTA'
import { JsonLd } from '@/components/ui/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Услуги — Регистрация в МФЦА и Astana Hub под ключ',
  description:
    'Регистрация компании в МФЦА (AIFC) за 5-10 дней — 0% налог на дивиденды, льготы до 2066 года. Astana Hub — гранты до $300 000, 0% налоги на 3 года. Юристы Астана.',
  alternates: {
    canonical: 'https://vegalegal.kz/services',
  },
  openGraph: {
    title: 'Услуги Vega Legal — МФЦА и Astana Hub',
    description: 'Регистрация в МФЦА и Astana Hub под ключ. Налоговые льготы до 2066 года.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Главная', url: 'https://vegalegal.kz' },
          { name: 'Услуги', url: 'https://vegalegal.kz/services' },
        ])}
      />
      <ServiceHero />
      <MFCASection />
      <AstanaHubSection />
      <ServicesCTA />
    </>
  )
}
