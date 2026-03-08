import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { NAV_LINKS, CONTACTS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cream">
              Vega<span className="text-gold">.</span>Legal
            </span>
            <p className="text-muted text-sm mt-4 leading-relaxed">
              Юридические услуги регистрации в МФЦА и Astana Hub.
              Специализируемся на корпоративном праве и налоговом планировании.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="label text-cream mb-4">Навигация</h4>
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted text-sm hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="label text-cream mb-4">Контакты</h4>
            <div className="flex flex-col gap-3 text-sm text-muted">
              <a
                href={`tel:${CONTACTS.phoneRaw}`}
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <Phone className="w-4 h-4 text-gold" />
                {CONTACTS.phone}
              </a>
              <a
                href={CONTACTS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cream transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                WhatsApp
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                {CONTACTS.address}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                {CONTACTS.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>&copy; 2026 Vega Legal. Все права защищены.</p>
          <Link href="/contacts" className="hover:text-cream transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  )
}
