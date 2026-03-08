import { Hero } from '@/components/sections/home/Hero'
import { ServicesPreview } from '@/components/sections/home/ServicesPreview'
import { WhyUs } from '@/components/sections/home/WhyUs'
import { CompareTable } from '@/components/sections/home/CompareTable'
import { Process } from '@/components/sections/home/Process'
import { FAQ } from '@/components/sections/home/FAQ'
import { ContactCTA } from '@/components/sections/home/ContactCTA'
import { JsonLd } from '@/components/ui/JsonLd'
import { faqSchema, breadcrumbSchema } from '@/lib/schema'

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Главная', url: 'https://vegalegal.kz' },
        ])}
      />
      <Hero />
      <ServicesPreview />
      <WhyUs />
      <CompareTable />
      <Process />
      <FAQ />
      <ContactCTA />
    </>
  )
}
