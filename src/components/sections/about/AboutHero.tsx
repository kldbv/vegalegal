'use client'

import { FadeIn } from '@/components/ui/FadeIn'

const stats = [
  { value: '200+', label: 'Успешных регистраций' },
  { value: '5+', label: 'Лет специализации' },
  { value: '3', label: 'Страны присутствия' },
  { value: '100%', label: 'Гарантия результата' },
]

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <span className="label text-gold mb-4 block">О компании</span>
          <h1 className="heading-xl text-cream mb-6 max-w-3xl">
            Vega Legal — ваш проводник в мире МФЦА
          </h1>
          <p className="body-lg text-muted max-w-2xl mb-12">
            Специализируемся на регистрации в МФЦА и Astana Hub с 2020 года. 200+ успешных кейсов.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-gold/10 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
