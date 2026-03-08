'use client'

import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'

const rows = [
  { param: 'Налог на прибыль', mfca: '0% (фин. услуги)', hub: '0% на 3 года', too: '20% КПН' },
  { param: 'Налог на дивиденды', mfca: '0%', hub: '5% (льготный)', too: '15%' },
  { param: 'Применимое право', mfca: 'Право Англии и Уэльса', hub: 'Законодательство РК', too: 'Законодательство РК' },
  { param: 'Срок регистрации', mfca: '5–14 дней', hub: '7–14 дней', too: '1–5 дней' },
  { param: 'Льготный период', mfca: 'до 2066 года', hub: '3 года', too: '—' },
  { param: 'Гранты', mfca: '—', hub: 'До $300 000', too: '—' },
  { param: 'Кому подходит', mfca: 'Холдинги, финтех, инвестиции', hub: 'IT-стартапы', too: 'Малый/средний бизнес' },
]

export function CompareTable() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <SectionHeader
            label="Сравнение"
            title="МФЦА vs Astana Hub vs ТОО"
            subtitle="Выберите оптимальную юрисдикцию для вашего бизнеса"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-card">
                  <th className="text-left px-6 py-4 text-muted font-semibold">Параметр</th>
                  <th className="text-left px-6 py-4 text-gold font-semibold">МФЦА (AIFC)</th>
                  <th className="text-left px-6 py-4 text-hub font-semibold">Astana Hub</th>
                  <th className="text-left px-6 py-4 text-muted font-semibold">Обычное ТОО</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-gold/5 hover:bg-card/50 transition-colors">
                    <td className="px-6 py-4 text-muted">{row.param}</td>
                    <td className="px-6 py-4 text-gold font-semibold">{row.mfca}</td>
                    <td className="px-6 py-4 text-hub">{row.hub}</td>
                    <td className="px-6 py-4 text-muted">{row.too}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
