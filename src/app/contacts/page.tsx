import type { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contacts/ContactHero'
import { ContactInfo } from '@/components/sections/contacts/ContactInfo'
import { ContactForm } from '@/components/sections/contacts/ContactForm'

export const metadata: Metadata = {
  title: 'Контакты Vega Legal',
  description:
    'Свяжитесь с Vega Legal для бесплатной консультации по регистрации в МФЦА и Astana Hub. Астана, +7 702 168 67 33.',
}

export default function ContactsPage() {
  return (
    <>
      <ContactHero />
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
