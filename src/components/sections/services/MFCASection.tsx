'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const benefits = [
  { value: '0%', label: 'Налог на дивиденды' },
  { value: '0%', label: 'Прирост капитала' },
  { value: '0%', label: 'КПН (фин. услуги)' },
  { value: 'до 2066', label: 'Льготный период' },
]

const targets = [
  'IT и финтех-компании',
  'Холдинговые структуры',
  'Инвестиционные фонды',
  'Компании с иностранными партнёрами',
  'Криптовалютные / блокчейн-проекты',
  'Управление активами',
]

const steps = [
  'Определение типа компании (SPV, GP, LP, LLP, RSE...)',
  'Подготовка учредительных документов',
  'Подача заявления в AFSA',
  'Получение свидетельства (5–14 дней)',
  'Открытие корпоративного счёта',
]

export function MFCASection() {
  return (
    <section id="mfca" className="py-24 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Content */}
          <FadeIn>
            <div>
              <span className="label text-gold mb-2 block">МФЦА (AIFC)</span>
              <h2 className="heading-lg text-cream mb-6">Что такое МФЦА?</h2>
              <p className="body-lg text-muted mb-8">
                Международный финансовый центр &laquo;Астана&raquo; — специальная правовая и экономическая зона
                внутри Казахстана, действующая на основании права Англии и Уэльса. Уникальная возможность
                для бизнеса получить международно признанную юрисдикцию с налоговыми льготами до 2066 года.
              </p>

              <h3 className="text-lg font-semibold text-cream mb-4">Кому подходит:</h3>
              <ul className="space-y-2 mb-8">
                {targets.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted body">
                    <ArrowRight className="w-3.5 h-3.5 text-gold shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-cream mb-4">Процесс регистрации в МФЦА:</h3>
              <ol className="space-y-3">
                {steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted body">
                    <span className="w-6 h-6 rounded-full bg-gold/10 text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </FadeIn>

          {/* Right — Benefit Cards */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-card border border-gold/10 rounded-lg p-6 text-center hover:border-gold/30 transition-colors"
                >
                  <div className="text-3xl font-bold text-gold font-[family-name:var(--font-playfair)] mb-2">
                    {b.value}
                  </div>
                  <div className="text-sm text-muted">{b.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
