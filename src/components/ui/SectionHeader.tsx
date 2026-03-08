interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ label, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <span className="label text-gold mb-4 block">{label}</span>
      <h2 className="heading-lg text-cream mb-4">{title}</h2>
      {subtitle && (
        <p className="body-lg text-muted max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
