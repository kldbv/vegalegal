'use client'

import { Target, Eye, Award } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const values = [
  {
    icon: Target,
    title: 'Результат, не процесс',
    text: 'Берём оплату за результат. Если отказ по нашей вине — возвращаем деньги.',
  },
  {
    icon: Eye,
    title: 'Прозрачность',
    text: 'Чёткие сроки, фиксированная стоимость, никаких скрытых платежей.',
  },
  {
    icon: Award,
    title: 'Экспертиза',
    text: 'Специализируемся только на МФЦА и Astana Hub, не распыляемся на всё.',
  },
]

export function Values() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader label="Принципы" title="Наши принципы" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all">
                <v.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-semibold text-cream mb-3">{v.title}</h3>
                <p className="body text-muted">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
