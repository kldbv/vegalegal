import type { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contacts/ContactHero'
import { ContactInfo } from '@/components/sections/contacts/ContactInfo'
import { ContactForm } from '@/components/sections/contacts/ContactForm'
import { JsonLd } from '@/components/ui/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Контакты — Бесплатная консультация юриста в Астане',
  description:
    'Свяжитесь с Vega Legal для бесплатной юридической консультации. Астана, пр. Мангилик ел 55/7. ☎ +7 702 168 67 33. WhatsApp. Пн-Пт 9:00-16:00.',
  alternates: {
    canonical: 'https://vegalegal.kz/contacts',
  },
  openGraph: {
    title: 'Контакты Vega Legal',
    description: 'Бесплатная консультация юриста в Астане. +7 702 168 67 33.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ContactsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Главная', url: 'https://vegalegal.kz' },
          { name: 'Контакты', url: 'https://vegalegal.kz/contacts' },
        ])}
      />
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
