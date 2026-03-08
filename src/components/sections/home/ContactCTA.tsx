'use client'

import { useForm } from 'react-hook-form'
import { Check, MessageCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { submitLead } from '@/lib/submit-lead'
import { SERVICE_OPTIONS, CONTACTS } from '@/lib/constants'

interface FormData {
  name: string
  phone: string
  interest: string
}

export function ContactCTA() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: { interest: SERVICE_OPTIONS[0] },
  })

  const onSubmit = (data: FormData) => {
    submitLead(data, 'Главная')
  }

  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <FadeIn>
            <div>
              <SectionHeader
                label="Начните сейчас"
                title="Получите бесплатную консультацию"
                centered={false}
              />
              <ul className="space-y-3 mt-6">
                {['Бесплатно', 'Без обязательств', 'Ответ в течение 1 часа'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-cream">
                    <Check className="w-5 h-5 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card rounded-lg border border-gold/10 p-8 space-y-4"
            >
              <input
                {...register('name', { required: true, minLength: 2 })}
                placeholder="Ваше имя"
                className={`w-full bg-navy border ${errors.name ? 'border-red-500' : 'border-gold/10'} rounded px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors`}
              />
              <input
                {...register('phone', {
                  required: true,
                  pattern: /^[+7\d\s\-()]{10,}$/,
                })}
                placeholder="Номер телефона"
                type="tel"
                className={`w-full bg-navy border ${errors.phone ? 'border-red-500' : 'border-gold/10'} rounded px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors`}
              />
              <select
                {...register('interest')}
                className="w-full bg-navy border border-gold/10 rounded px-4 py-3 text-cream focus:outline-none focus:border-gold/40 transition-colors"
              >
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-whatsapp text-white flex items-center justify-center gap-3 px-8 py-4 rounded font-bold hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в WhatsApp
              </button>

              <p className="text-center text-sm text-muted">
                Или позвоните:{' '}
                <a href={`tel:${CONTACTS.phoneRaw}`} className="text-gold hover:underline">
                  {CONTACTS.phone}
                </a>
              </p>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
