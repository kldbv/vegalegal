import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { Team } from '@/components/sections/about/Team'
import { Values } from '@/components/sections/about/Values'
import { Partners } from '@/components/sections/about/Partners'
import { JsonLd } from '@/components/ui/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'О компании — Юридическая фирма в Астане с 2020 года',
  description:
    'Vega Legal — юридическая компания в Астане. 200+ успешных кейсов. Специализация: защита бренда, юридическая упаковка бизнеса, МФЦА, Astana Hub. Команда профессионалов.',
  alternates: {
    canonical: 'https://vegalegal.kz/about',
  },
  openGraph: {
    title: 'О компании Vega Legal',
    description: '200+ успешных кейсов. Юридическая компания в Астане с 2020 года.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Главная', url: 'https://vegalegal.kz' },
          { name: 'О нас', url: 'https://vegalegal.kz/about' },
        ])}
      />
      <AboutHero />
      <Team />
      <Values />
      <Partners />
    </>
  )
}
