'use client'

import { useForm } from 'react-hook-form'
import { MessageCircle } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { submitLead } from '@/lib/submit-lead'
import { SERVICE_OPTIONS } from '@/lib/constants'
import type { ContactFormData } from '@/types'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: { interest: SERVICE_OPTIONS[0] },
  })

  const onSubmit = (data: ContactFormData) => {
    submitLead(data, 'Контакты')
  }

  const inputClass = (hasError: boolean) =>
    `w-full bg-navy border ${
      hasError ? 'border-red-500' : 'border-gold/10'
    } rounded px-4 py-3 text-cream placeholder:text-muted/50 focus:outline-none focus:border-gold/40 transition-colors`

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
              required: true,
              pattern: /^[+7\d\s\-()]{10,}$/,
            })}
            placeholder="Номер телефона"
            type="tel"
            className={inputClass(!!errors.phone)}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">Введите корректный номер</p>
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
          className="w-full bg-whatsapp text-white flex items-center justify-center gap-3 px-8 py-4 rounded font-bold hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          Отправить заявку в WhatsApp
        </button>
      </form>
    </FadeIn>
  )
}
