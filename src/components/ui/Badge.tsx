import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 border border-gold/40 rounded-sm px-3 py-1.5 text-gold text-xs font-bold tracking-widest uppercase">
      <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
      {children}
    </span>
  )
}
