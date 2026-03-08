'use client'

import Link from 'next/link'
import { ArrowRight, Shield, Briefcase, Scale, Users } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  {
    num: '01',
    icon: Shield,
    title: 'Комплексная защита бренда',
    text: 'Регистрируем бренд, оформляем права на контент, заключаем NDA и договоры с подрядчиками — без копий и утечек.',
    href: '/contacts',
    label: 'Подробнее',
  },
  {
    num: '02',
    icon: Briefcase,
    title: 'Юридическая упаковка бизнеса',
    text: 'Готовим устав, договоры, политику и соглашения. Сразу учитываем налоги, инвестиции и риски для стабильной работы.',
    href: '/contacts',
    label: 'Подробнее',
  },
  {
    num: '03',
    icon: Scale,
    title: 'Коммерческие споры',
    text: 'Быстро решаем споры: пишем претензии, ведём переговоры, защищаем в суде.',
    href: '/contacts',
    label: 'Подробнее',
  },
  {
    num: '04',
    icon: Users,
    title: 'Юридический отдел без затрат на штат',
    text: 'Юридическая поддержка от 3 месяцев: проверка договоров, консультации, шаблоны, споры и аналитика. Удобно для онлайн-школ, маркетинга, IT и малого бизнеса.',
    href: '/contacts',
    label: 'Подробнее',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Услуги"
            title="Готовые решения для вашего бизнеса"
            subtitle="Наша методология — юридическое сопровождение, основанное на глубоком понимании бизнес-процессов, скорости и приоритетах роста."
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative bg-card rounded-lg border-b-2 border-gold/20 p-8 hover:bg-[#162438] hover:border-gold/60 hover:scale-[1.01] transition-all duration-300 group overflow-hidden h-full">
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-[family-name:var(--font-playfair)]">
                  {service.num}
                </span>

                <service.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="heading-md text-cream mb-3">{service.title}</h3>
                <p className="body text-muted mb-6">{service.text}</p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wide uppercase group-hover:gap-3 transition-all"
                >
                  {service.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
