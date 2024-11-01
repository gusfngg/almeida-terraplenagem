'use client'

import Image from 'next/image'
import BackgroundImgDesktop from '@/assets/background-img.png'
import BackgroundImgMobile from '@/assets/background-img-mobile.png'
import { jura } from '@/lib/fonts'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div className="relative w-full">
      <Image
        src={isMobile ? BackgroundImgMobile : BackgroundImgDesktop}
        alt="hero-background"
        width={5313}
        height={2500}
        objectFit="cover"
        objectPosition="center bottom"
        priority
      />
      <div className="absolute inset-0">
        <div className="max-w-[87rem] mx-auto flex flex-col items-start px-9">
          <h1
            className={`text-4xl md:text-6xl font-bold text-white lg:mt-64 mt-36 mb-4 ${jura.className}`}
          >
            SERVIÇO DE TERRAPLENAGEM
          </h1>
          <p className="lg:text-xl text-lg text-white mb-8">
            Damos forma ao terreno para que seus projetos comecem com solidez.
          </p>
          <Button className="bg-orangeAm text-brownAm font-semibold hover:bg-orange-400">
            Solicite Seu Orçamento
          </Button>
        </div>
      </div>
    </div>
  )
}
