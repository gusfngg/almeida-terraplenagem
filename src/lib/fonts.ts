// eslint-disable-next-line camelcase
import { Jura, Inter } from 'next/font/google'
import localFont from 'next/font/local'

export const switzer = localFont({ src: '../font/Switzer-Medium.otf' })

export const inter = Inter({ subsets: ['latin'] })

export const jura = Jura({
  subsets: ['latin'],
  display: 'swap',
})
