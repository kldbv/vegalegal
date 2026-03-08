import { Playfair_Display, Manrope } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
})

export const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700'],
})
