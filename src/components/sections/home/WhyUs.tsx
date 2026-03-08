'use client'

import { Zap, Shield, Package, Globe, Briefcase, User } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'

const reasons = [
  {
    icon: Zap,
    title: 'Быстро и предсказуемо',
    text: '5–14 дней вместо 3–5 недель. Берём коммуникацию с регулятором на себя.',
  },
  {
    icon: Shield,
    title: 'Гарантия возврата',
    text: 'Если отказ по нашей вине — возвращаем оплату. За 200+ кейсов такого не случалось.',
  },
  {
    icon: Package,
    title: 'Под ключ',
    text: 'Анализ, документы, регулятор, счёт — всё включено.',
  },
  {
    icon: Globe,
    title: 'Международный опыт',
    text: 'Партнёры в ОАЭ, США, Катаре. Иностранные учредители — без проблем.',
  },
  {
    icon: Briefcase,
    title: 'B2B специализация',
    text: 'Холдинги, финтех, IT, инвестиции — знаем налоговые возможности каждого.',
  },
  {
    icon: User,
    title: 'Личный куратор',
    text: 'Персональный юрист на всём пути. Не колл-центр — живое общение.',
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Преимущества"
            title="Почему выбирают Vega Legal"
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Card className="h-full">
                <r.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-cream mb-2">{r.title}</h3>
                <p className="body text-muted">{r.text}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
