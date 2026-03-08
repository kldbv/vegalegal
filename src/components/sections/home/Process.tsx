'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const steps = [
  {
    num: '01',
    title: 'Анкета',
    text: 'Заполните форму или напишите в WhatsApp',
  },
  {
    num: '02',
    title: 'Консультация',
    text: 'Юрист анализирует вашу структуру',
  },
  {
    num: '03',
    title: 'Документы',
    text: 'Полный пакет под ключ',
  },
  {
    num: '04',
    title: 'Регистрация',
    text: 'Компания готова + помощь со счётом',
  },
]

export function Process() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Процесс"
            title="Регистрация под ключ за 4 шага"
          />
        </FadeIn>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden sm:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gold/20" />

          <div className="grid sm:grid-cols-4 gap-8">
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
