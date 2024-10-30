import { jura } from '@/lib/fonts'
import { CardServices } from './card-services'
import Image1 from '@/assets/1.png'
import Image2 from '@/assets/2.png'
import Image3 from '@/assets/3.png'
import Image4 from '@/assets/4.png'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import Image from 'next/image'

export function Services() {
  return (
    <section id="services">
      <h1
        className={`${jura.className} text-4xl font-black mt-32 text-center mb-10`}
      >
        CONHEÇA NOSSOS SERVIÇOS
      </h1>
      <div className="flex items-center gap-4 flex-col lg:flex-row">
        <Dialog>
          <DialogTrigger asChild className="pointer">
            <CardServices service="Limpeza de Terreno" img={Image1} />
          </DialogTrigger>
          <DialogContent className="max-w-[345px]">
            <DialogHeader>
              <DialogTitle>Limpeza de terreno</DialogTitle>
            </DialogHeader>
            <p className="text-neutral-300 tracking-tight text-lg text-justify">
              A limpeza de terreno é um serviço fundamental para a preparação de
              áreas destinadas a novas construções. Esse processo envolve a
              remoção de entulhos, vegetação, árvores e outros resíduos,
              deixando o terreno limpo e adequado para futuras etapas da obra.
            </p>

            <Image className="rounded-lg" src={Image1} alt="" />
          </DialogContent>
        </Dialog>
        <CardServices service="Nivelamento de Terreno" img={Image2} />
        <CardServices service="Demolição" img={Image3} />
        <CardServices service="Escavação" img={Image4} />
      </div>
    </section>
  )
}
