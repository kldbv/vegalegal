'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const services = [
  {
    num: '01',
    tag: 'МФЦА (AIFC)',
    title: 'Регистрация в МФЦА',
    text: 'Специальная правовая зона с правом Англии и Уэльса. Нулевое налогообложение для финансовых услуг, льготы до 2066 года.',
    benefits: [
      '0% налог на дивиденды',
      '0% прирост капитала',
      'Право Англии и Уэльса',
      'Льготы до 2066 года',
      'Международное признание',
    ],
    href: '/services#mfca',
    label: 'Подробнее об МФЦА',
  },
  {
    num: '02',
    tag: 'Astana Hub',
    title: 'Регистрация в Astana Hub',
    text: 'Международный технологический парк для IT-компаний и стартапов. Гранты до $300 000 и полное освобождение от налогов.',
    benefits: [
      '0% все налоги на 3 года',
      'Гранты до $300 000',
      'Fast-track визы',
      'ИПН сотрудников 0%',
      'Менторская поддержка',
    ],
    href: '/services#astana-hub',
    label: 'Подробнее об Astana Hub',
  },
]

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Услуги"
            title="Две юрисдикции — одно решение"
            subtitle="Выберите оптимальную структуру для вашего бизнеса"
          />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative bg-card rounded-lg border-b-2 border-gold/20 p-8 hover:bg-[#162438] hover:border-gold/60 hover:scale-[1.01] transition-all duration-300 group overflow-hidden">
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/[0.03] font-[family-name:var(--font-playfair)]">
                  {service.num}
                </span>

                <span className="label text-gold mb-4 block">{service.tag}</span>
                <h3 className="heading-md text-cream mb-3">{service.title}</h3>
                <p className="body text-muted mb-6">{service.text}</p>

                <ul className="space-y-2 mb-8">
                  {service.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-cream/80">
                      <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

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
