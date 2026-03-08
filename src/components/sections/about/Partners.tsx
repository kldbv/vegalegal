'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const partners = [
  'AFSA', 'AIFC Court', 'Astana Hub', 'МФЦА', 'NQA', 'QFC',
  'AFSA', 'AIFC Court', 'Astana Hub', 'МФЦА', 'NQA', 'QFC',
]

export function Partners() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader label="Партнёры" title="Партнёры и ассоциации" />
        </FadeIn>

        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-dark to-transparent z-10" />

          <div className="flex animate-scroll">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 flex items-center justify-center h-20 px-8 border border-gold/10 rounded-lg text-muted hover:text-cream hover:border-gold/30 transition-colors cursor-default"
              >
                <span className="text-lg font-semibold whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
