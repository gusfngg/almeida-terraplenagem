import { Roboto, Jura } from 'next/font/google'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const jura = Jura({
  subsets: ['latin'],
  display: 'swap',
})
