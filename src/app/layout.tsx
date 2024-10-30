import './globals.css'
import { dmSans } from '@/lib/fonts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Almeida Terraplenagem',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${dmSans} antialiased 
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
      </body>
    </html>
  )
}
