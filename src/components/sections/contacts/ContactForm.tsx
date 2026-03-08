'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, Check, Loader2 } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { submitLead } from '@/lib/submit-lead'
import { SERVICE_OPTIONS } from '@/lib/constants'
import type { ContactFormData } from '@/types'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: { interest: SERVICE_OPTIONS[0] },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    const result = await submitLead(data, 'Контакты')
    if (result.success) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
    }
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-navy border ${
      hasError ? 'border-red-500' : 'border-gold/10'
    } rounded px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors`

  if (status === 'success') {
    return (
      <FadeIn delay={0.2}>
        <div className="bg-card rounded-lg border border-gold/30 p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-gold" />
          </div>
          <h3 className="text-xl font-semibold text-cream mb-2">Заявка отправлена!</h3>
          <p className="text-muted mb-2">Наш юрист свяжется с вами в течение 1 часа.</p>
          <p className="text-muted text-sm">Проверьте телефон — мы перезвоним.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-6 text-gold text-sm font-semibold hover:underline"
          >
            Отправить ещё одну заявку
          </button>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn delay={0.2}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-card rounded-lg border border-gold/10 p-8 space-y-4"
      >
        <div>
          <input
            {...register('name', { required: true, minLength: 2 })}
            placeholder="Ваше имя"
            className={inputClass(!!errors.name)}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">Введите ваше имя</p>
          )}
        </div>

        <div>
          <input
            {...register('phone', {
              required: 'Введите номер телефона',
              validate: (value) => {
                const digits = value.replace(/\D/g, '')
                if (digits.length < 10) return 'Минимум 10 цифр'
                if (digits.length > 12) return 'Слишком длинный номер'
                if (!/^\d+$/.test(digits)) return 'Только цифры'
                return true
              },
            })}
            placeholder="+7 (___) ___-__-__"
            type="tel"
            inputMode="numeric"
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">
              {typeof errors.phone.message === 'string' ? errors.phone.message : 'Введите корректный номер'}
            </p>
          )}
        </div>

        <input
          {...register('company')}
          placeholder="Компания (необязательно)"
          className={inputClass(false)}
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

        <textarea
          {...register('message')}
          placeholder="Расскажите о вашем бизнесе..."
          rows={4}
          className="w-full bg-navy border border-gold/10 rounded px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
        />

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
            Ошибка отправки. Попробуйте позвонить нам напрямую.
          </p>
        )}
      </form>
    </FadeIn>
  )
}
