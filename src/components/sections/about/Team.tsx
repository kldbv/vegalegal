'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TEAM_MEMBERS } from '@/lib/constants'

export function Team() {
  return (
    <section className="py-24 bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader label="Команда" title="Наша команда" />
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-card border border-gold/10 rounded-lg p-6 hover:border-gold/40 hover:-translate-y-1 transition-all duration-300 text-center">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-navy-light border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold text-xl font-bold font-[family-name:var(--font-playfair)]">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-cream">{member.name}</h3>
                <p className="text-gold text-sm font-medium mt-1">{member.role}</p>
                <p className="text-muted text-sm mt-2">{member.specialization}</p>
                <p className="text-subtle text-xs mt-1">{member.experience}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
