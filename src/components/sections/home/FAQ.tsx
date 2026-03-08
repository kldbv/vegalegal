'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const faqs = [
  {
    q: 'С какими стартапами вы работаете?',
    a: 'Мы сопровождаем технологические стартапы на любых стадиях — от идеи и pre-seed до масштабирования и выхода на рынок. Работаем с IT-компаниями, маркетплейсами, финтехами, EdTech, LegalTech и другими инновационными проектами.',
  },
  {
    q: 'Сколько времени занимает регистрация в МФЦА или Astana Hub?',
    a: 'В среднем регистрация в МФЦА занимает от 5 до 10 рабочих дней, в Astana Hub — от 7 до 14 дней. Мы берём на себя всю коммуникацию и подготовку документов, чтобы вы могли сосредоточиться на продукте.',
  },
  {
    q: 'Вы работаете только в Казахстане?',
    a: 'Мы специализируемся на казахстанской юрисдикции и юрисдикции МФЦА, но помогаем с международной структурой, IP-защитой и подготовкой документов для иностранных инвесторов. У нас есть партнёры в ОАЭ, США, Катаре и других юрисдикциях.',
  },
  {
    q: 'Это подходит для малого бизнеса?',
    a: 'Да, мы специализируемся на готовых юридических решениях для малого и среднего бизнеса. Наши услуги помогут сэкономить время и деньги для защиты и развития вашего бизнеса.',
  },
  {
    q: 'Можно ли перевести действующее ТОО в МФЦА?',
    a: 'Да, через структурирование холдинга. Мы помогаем создать оптимальную корпоративную структуру.',
  },
  {
    q: 'Что входит в юридическую поддержку на аутсорсе?',
    a: 'Проверка договоров, консультации, подготовка шаблонов, сопровождение споров и юридическая аналитика. Минимальный срок — от 3 месяцев. Удобно для онлайн-школ, маркетинга, IT и малого бизнеса.',
  },
  {
    q: 'Есть ли гарантия?',
    a: 'Да. Если отказ по нашей вине — возвращаем оплату полностью. За более чем 200 кейсов такого не случалось.',
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
