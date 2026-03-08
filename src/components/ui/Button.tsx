import Link from 'next/link'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'whatsapp'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

const variants = {
  primary:
    'bg-gold text-navy px-9 py-4 text-sm font-bold tracking-widest uppercase rounded hover:bg-gold-light transition-all hover:-translate-y-px',
  ghost:
    'border border-white/20 text-cream px-9 py-4 text-sm font-semibold tracking-widest uppercase rounded hover:border-gold hover:text-gold transition-all',
  whatsapp:
    'bg-whatsapp text-white flex items-center justify-center gap-3 px-8 py-4 rounded font-bold hover:brightness-110 transition-all',
}

export function Button({ children, variant = 'primary', href, onClick, type = 'button', className = '' }: ButtonProps) {
  const classes = `${variants[variant]} inline-flex items-center ${className}`

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
