import type { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { Team } from '@/components/sections/about/Team'
import { Values } from '@/components/sections/about/Values'
import { Partners } from '@/components/sections/about/Partners'

export const metadata: Metadata = {
  title: 'О компании Vega Legal',
  description:
    'Vega Legal — специализируемся на регистрации в МФЦА и Astana Hub с 2020 года. 200+ успешных кейсов. Команда профессионалов.',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Team />
      <Values />
      <Partners />
    </>
  )
}
