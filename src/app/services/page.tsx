import type { Metadata } from 'next'
import { ServiceHero } from '@/components/sections/services/ServiceHero'
import { MFCASection } from '@/components/sections/services/MFCASection'
import { AstanaHubSection } from '@/components/sections/services/AstanaHubSection'
import { ServicesCTA } from '@/components/sections/services/ServicesCTA'

export const metadata: Metadata = {
  title: 'Услуги регистрации в МФЦА и Astana Hub',
  description:
    'Регистрация в МФЦА (AIFC) — 0% налог на дивиденды, льготы до 2066. Astana Hub — гранты до $300 000, 0% налоги на 3 года.',
}

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <MFCASection />
      <AstanaHubSection />
      <ServicesCTA />
    </>
  )
}
