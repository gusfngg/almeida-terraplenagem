import Image, { StaticImageData } from 'next/image'
import { jura } from '@/lib/fonts'

interface CardServicesProps {
  service: string
  img?: StaticImageData
}

export function CardServices({ service, img }: CardServicesProps) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden lg:hover:scale-105 hover:transition ">
      {img && (
        <Image
          className="h-auto w-full object-contain"
          src={img}
          alt=""
          height={400}
          width={400}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75" />
      <div className="absolute inset-0 flex items-end justify-center">
        <h1 className={`${jura.className} font-bold text-2xl mb-8 text-white`}>
          {service}
        </h1>
      </div>
    </div>
  )
}
