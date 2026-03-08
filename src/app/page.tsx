import { Hero } from '@/components/sections/home/Hero'
import { ServicesPreview } from '@/components/sections/home/ServicesPreview'
import { WhyUs } from '@/components/sections/home/WhyUs'
import { CompareTable } from '@/components/sections/home/CompareTable'
import { Process } from '@/components/sections/home/Process'
import { FAQ } from '@/components/sections/home/FAQ'
import { ContactCTA } from '@/components/sections/home/ContactCTA'

export default function Home() {
  return (
    <>
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
