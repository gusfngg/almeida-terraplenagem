import './globals.css'
import { inter } from '@/lib/fonts'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  metadataBase: new URL('https://almeidaterraplenagem.com.br'),
  keywords: [
    'Terraplenagem',
    'Serviço de Terraplenagem',
    'Almeida Terraplenagem',
  ],
  title: 'Almeida Terraplenagem',
  openGraph: {
    description:
      'Almeida Terraplenagem oferece um serviço de qualidade de terraplenagem',
    images: [''],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter} antialiased 
        overflow-y-auto
        [&::-webkit-scrollbar]:w-1
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
        [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
