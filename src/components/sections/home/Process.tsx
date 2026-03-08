'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    num: '01',
    title: 'Заполни заявку',
    text: 'Оставьте свои данные на сайте в удобной форме',
  },
  {
    num: '02',
    title: 'Ответьте на вопросы специалиста',
    text: 'Наши специалисты свяжутся с вами для уточнения деталей и подберут оптимальное решение',
  },
  {
    num: '03',
    title: 'Получи результат',
    text: 'Все необходимые услуги будут оказаны вам в кратчайшие сроки',
  },
]

export function Process() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Процесс"
            title="Как мы работаем — 3 простых шага"
          />
        </FadeIn>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden sm:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gold/20" />

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-center relative">
                  <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-4 bg-navy-dark relative z-10">
                    <span className="text-gold text-xl font-bold font-[family-name:var(--font-playfair)]">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-cream mb-2">{step.title}</h3>
                  <p className="text-sm text-muted">{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
