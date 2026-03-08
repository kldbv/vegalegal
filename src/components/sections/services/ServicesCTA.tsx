'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { CONTACTS } from '@/lib/constants'
import { MessageCircle } from 'lucide-react'

export function ServicesCTA() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="heading-lg text-cream mb-4">Не знаете, что выбрать?</h2>
          <p className="body-lg text-muted mb-10 max-w-2xl mx-auto">
            Бесплатно разберём вашу ситуацию и скажем, МФЦА или Astana Hub подходит именно вам.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contacts">Получить консультацию &rarr;</Button>
            <Button variant="whatsapp" href={CONTACTS.whatsapp}>
              <MessageCircle className="w-5 h-5" />
              Написать в WhatsApp
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
