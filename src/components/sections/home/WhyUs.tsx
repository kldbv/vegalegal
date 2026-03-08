'use client'

import { Rocket, Megaphone, Video } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'

const audiences = [
  {
    icon: Rocket,
    title: 'Стартапам',
    text: 'Готовим весь комплект документов: устав, договора с сотрудниками и подрядчиками, политику конфиденциальности, пользовательские соглашения и структуру владения. Предусматриваем налоговые, инвестиционные и операционные риски с самого начала.',
  },
  {
    icon: Megaphone,
    title: 'Агентствам',
    text: 'Регистрируем товарные знаки, заключаем соглашения о конфиденциальности (NDA), фиксируем права на контент, создаем договоры с подрядчиками, которые исключают копирование и конкуренцию.',
  },
  {
    icon: Video,
    title: 'Блогерам',
    text: 'Решаем споры быстро и в интересах бизнеса. Подготовка претензий, переговоры, сопровождение в суде. Защищаем бизнес в спорах с подрядчиками, клиентами, блогерами, инвесторами и госорганами.',
  },
]

export function WhyUs() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Кому подходит"
            title="Для кого работаем"
          />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Card className="h-full">
                <a.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-cream mb-2">{a.title}</h3>
                <p className="body text-muted">{a.text}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
