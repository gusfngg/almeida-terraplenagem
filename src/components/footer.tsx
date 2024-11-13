import { switzer } from '@/lib/fonts'
import { Instagram, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import BlurFade from './ui/blur-fade'

export function Footer() {
  return (
    <div className="flex items-center justify-between">
      <BlurFade inView>
        <h1
          className={`${switzer.className} text-brownAm font-regular text-base`}
        >
          ©2024 Almeida terraplenagem
        </h1>
      </BlurFade>

      <div className="flex items-center gap-4">
        <BlurFade inView>
          <Link
            href="https://instagram.com/almeidaterraplenagem"
            target="_blank"
          >
            <Instagram className="text-neutral-600" />
          </Link>
        </BlurFade>
        <BlurFade inView>
          <Link
            href="https://instagram.com/almeidaterraplenagem"
            target="_blank"
          >
            <PhoneCall className="text-neutral-600" />
          </Link>
        </BlurFade>
      </div>
    </div>
  )
}
