'use client'

import { FadeIn } from '@/components/ui/FadeIn'

export function ServiceHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <FadeIn>
          <span className="label text-gold mb-4 block">Услуги</span>
          <h1 className="heading-xl text-cream mb-6 max-w-3xl">
            Регистрация в МФЦА и Astana Hub — под ключ
          </h1>
          <p className="body-lg text-muted max-w-2xl">
            Анализируем вашу структуру, готовим документы, сопровождаем до получения свидетельства.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
