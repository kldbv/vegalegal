'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'

const benefits = [
  { value: '0%', label: 'Все налоги 3 года' },
  { value: '$300 000', label: 'Максимальный грант' },
  { value: '0%', label: 'ИПН сотрудников' },
  { value: 'Fast-track', label: 'Визы и разрешения' },
]

const targets = [
  'IT-стартапы на стадии идеи / pre-seed / seed',
  'EdTech, FinTech, HealthTech, E-commerce',
  'Команды, ищущие грантовое финансирование',
  'Разработчики ПО, SaaS, мобильных приложений',
]

const grants = [
  { name: 'Seed Grant', amount: 'до $50 000', purpose: 'Идея → MVP' },
  { name: 'Growth Grant', amount: 'до $150 000', purpose: 'Масштабирование' },
  { name: 'Scale Grant', amount: 'до $300 000', purpose: 'Выход на рынок' },
]

export function AstanaHubSection() {
  return (
    <section id="astana-hub" className="py-24 bg-navy-dark scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Content */}
          <FadeIn>
            <div>
              <span className="label text-hub mb-2 block">Astana Hub</span>
              <h2 className="heading-lg text-cream mb-6">Что такое Astana Hub?</h2>
              <p className="body-lg text-muted mb-8">
                Международный технологический парк для IT-компаний и стартапов с налоговыми льготами,
                грантовым финансированием до $300 000 и менторской поддержкой.
              </p>

              <h3 className="text-lg font-semibold text-cream mb-4">Кому подходит:</h3>
              <ul className="space-y-2 mb-8">
                {targets.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-muted body">
                    <ArrowRight className="w-3.5 h-3.5 text-hub shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-cream mb-4">Типы грантов Astana Hub:</h3>
              <div className="space-y-3">
                {grants.map((g) => (
                  <div key={g.name} className="bg-card border border-gold/10 rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-cream">{g.name}</div>
                      <div className="text-sm text-muted">{g.purpose}</div>
                    </div>
                    <div className="text-hub font-bold">{g.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Benefit Cards */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="bg-card border border-gold/10 rounded-lg p-6 text-center hover:border-hub/30 transition-colors"
                >
                  <div className="text-3xl font-bold text-hub font-[family-name:var(--font-playfair)] mb-2">
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
