'use client'

import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react'
import { FadeIn } from '@/components/ui/FadeIn'
import { CONTACTS } from '@/lib/constants'

export function ContactInfo() {
  return (
    <FadeIn>
      <div className="space-y-6">
        <a
          href={`tel:${CONTACTS.phoneRaw}`}
          className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
        >
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Phone className="w-5 h-5 text-gold" />
          </div>
          <div>
            <div className="text-sm text-muted">Телефон</div>
            <div className="font-semibold">{CONTACTS.phone}</div>
          </div>
        </a>

        <a
          href={CONTACTS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 text-cream hover:text-whatsapp transition-colors"
        >
          <div className="w-12 h-12 rounded-lg bg-whatsapp/10 flex items-center justify-center shrink-0">
            <MessageCircle className="w-5 h-5 text-whatsapp" />
          </div>
          <div>
            <div className="text-sm text-muted">WhatsApp</div>
            <div className="font-semibold">Написать сообщение</div>
          </div>
        </a>

        <a
          href={`mailto:${CONTACTS.email}`}
          className="flex items-center gap-4 text-cream hover:text-gold transition-colors"
        >
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-gold" />
          </div>
          <div>
            <div className="text-sm text-muted">Email</div>
            <div className="font-semibold">{CONTACTS.email}</div>
          </div>
        </a>

        <div className="flex items-center gap-4 text-cream">
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <div>
            <div className="text-sm text-muted">Адрес</div>
            <div className="font-semibold">{CONTACTS.address}</div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-cream">
          <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-gold" />
          </div>
          <div>
            <div className="text-sm text-muted">Режим работы</div>
            <div className="font-semibold">{CONTACTS.hours}</div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-8 rounded-lg overflow-hidden border border-gold/10 bg-card h-48 flex items-center justify-center">
          <div className="text-center text-muted">
            <MapPin className="w-8 h-8 mx-auto mb-2 opacity-30" />
            <p className="text-sm">Астана, пр. Мангилик ел 55/7</p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
