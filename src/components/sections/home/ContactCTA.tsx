'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Check, Send, Loader2 } from 'lucide-react'
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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: { interest: SERVICE_OPTIONS[0] },
  })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    const result = await submitLead(data, 'Главная')
    if (result.success) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
    }
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
            {status === 'success' ? (
              <div className="bg-card rounded-lg border border-gold/30 p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-cream mb-2">Заявка отправлена!</h3>
                <p className="text-muted">Наш юрист свяжется с вами в течение 1 часа.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-gold text-sm font-semibold hover:underline"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
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
                    required: 'Введите номер телефона',
                    validate: (value) => {
                      const digits = value.replace(/\D/g, '')
                      if (digits.length < 10) return 'Минимум 10 цифр'
                      if (digits.length > 12) return 'Слишком длинный номер'
                      return true
                    },
                  })}
                  placeholder="+7 (___) ___-__-__"
                  type="tel"
                  inputMode="numeric"
                  className={`w-full bg-navy border ${errors.phone ? 'border-red-500' : 'border-gold/10'} rounded px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors`}
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-1">
                    {typeof errors.phone.message === 'string' ? errors.phone.message : 'Введите корректный номер'}
                  </p>
                )}
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
                  disabled={status === 'loading'}
                  className="w-full bg-gold text-navy flex items-center justify-center gap-3 px-8 py-4 rounded font-bold hover:bg-gold-light transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {status === 'loading' ? 'Отправка...' : 'Оставить заявку'}
                </button>

                {status === 'error' && (
                  <p className="text-center text-sm text-red-400">
                    Ошибка отправки. Позвоните нам напрямую.
                  </p>
                )}

                <p className="text-center text-sm text-muted">
                  Или позвоните:{' '}
                  <a href={`tel:${CONTACTS.phoneRaw}`} className="text-gold hover:underline">
                    {CONTACTS.phone}
                  </a>
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
