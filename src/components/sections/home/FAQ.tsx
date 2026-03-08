'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'Это законно?',
    a: 'Да. МФЦА создан на основании конституционного закона РК. Это не офшор, а официальная юрисдикция внутри Казахстана с международным признанием.',
  },
  {
    q: 'Это подходит для малого бизнеса?',
    a: 'Зависит от оборота и типа деятельности. МФЦА чаще подходит для среднего и крупного бизнеса, Astana Hub — для IT-стартапов любого размера.',
  },
  {
    q: 'Сколько времени занимает регистрация?',
    a: 'МФЦА: 5–14 дней, Astana Hub: 7–14 дней с нашим сопровождением. Самостоятельно процесс может занять 3–5 недель.',
  },
  {
    q: 'Можно ли перевести действующее ТОО в МФЦА?',
    a: 'Да, через структурирование холдинга. Мы помогаем создать оптимальную корпоративную структуру.',
  },
  {
    q: 'Что входит в стоимость?',
    a: 'Анализ, консультация, подготовка документов, коммуникация с регулятором, помощь с открытием банковского счёта.',
  },
  {
    q: 'Есть ли гарантия?',
    a: 'Да. Если отказ по нашей вине — возвращаем оплату полностью. За более чем 200 кейсов такого не случалось.',
  },
  {
    q: 'Вы работаете с иностранными учредителями?',
    a: 'Да, полное сопровождение. У нас есть партнёры в ОАЭ, США, Катаре для комплексного решения.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="FAQ"
            title="Часто задаваемые вопросы"
          />
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border border-gold/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-card/50 transition-colors"
                >
                  <span className="font-semibold text-cream pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4 text-muted body">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
