'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'
import { NAV_LINKS, CONTACTS } from '@/lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-navy/95 border-b border-gold/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-[family-name:var(--font-playfair)] text-xl font-bold text-cream">
            Vega<span className="text-gold">.</span>Legal
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-cream/70 hover:text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${CONTACTS.phoneRaw}`}
              className="flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACTS.phone}
            </a>
            <Link
              href="/contacts"
              className="bg-gold text-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase rounded hover:bg-gold-light transition-all"
            >
              Консультация
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy-dark border-l border-gold/10 z-50 transform transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 pt-24 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium py-2 ${
                pathname === link.href ? 'text-gold' : 'text-cream/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gold/10 my-2" />
          <a
            href={`tel:${CONTACTS.phoneRaw}`}
            className="flex items-center gap-2 text-cream/70 py-2"
          >
            <Phone className="w-4 h-4" />
            {CONTACTS.phone}
          </a>
          <Link
            href="/contacts"
            className="bg-gold text-navy px-6 py-3 text-center text-sm font-bold tracking-widest uppercase rounded mt-2"
          >
            Консультация
          </Link>
        </div>
      </div>
    </>
  )
}
