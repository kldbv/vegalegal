'use client'

import { FadeIn } from '@/components/ui/FadeIn'

export function ContactHero() {
  return (
    <section className="pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="label text-gold mb-4 block">Контакты</span>
          <h1 className="heading-xl text-cream mb-6">Свяжитесь с нами</h1>
          <p className="body-lg text-muted max-w-2xl">
            Оставьте заявку или свяжитесь напрямую — ответим в течение 1 часа.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
