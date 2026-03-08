'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const stats = [
  { value: '5 000+', label: 'Компаний в МФЦА' },
  { value: '5–14', label: 'Дней регистрация' },
  { value: '2066', label: 'Год действия льгот' },
  { value: '200+', label: 'Успешных кейсов' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <Badge>Официальный партнёр МФЦА и Astana Hub</Badge>
          </motion.div>

          <motion.h1 variants={item} className="heading-xl text-cream mt-8 mb-6">
            Зарегистрируйте компанию{' '}
            <br className="hidden sm:block" />
            в <em className="not-italic text-gold">МФЦА или Astana Hub</em>
            <br className="hidden sm:block" /> за 5–14 дней
          </motion.h1>

          <motion.p variants={item} className="body-lg text-muted max-w-xl mb-10">
            Налоговые льготы до 2066 года. Юрисдикция английского права.
            Более 5 000 компаний уже работают в МФЦА.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <Button href="/contacts">Бесплатная консультация &rarr;</Button>
            <Button variant="ghost" href="/services">
              Узнать подробнее
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`${
                  i > 0 ? 'sm:border-l sm:border-gold/10 sm:pl-6' : ''
                }`}
              >
                <div className="text-3xl font-bold text-gold font-[family-name:var(--font-playfair)]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
