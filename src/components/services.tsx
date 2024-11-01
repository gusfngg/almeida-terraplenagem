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
    <section id="services" className="mb-32">
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
          <DialogContent className="max-w-[345px] lg:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Limpeza de terreno</DialogTitle>
            </DialogHeader>
            <p className="text-neutral-300 tracking-tight text-[17px] text-justify">
              A limpeza de terreno é um serviço fundamental para a preparação de
              áreas destinadas a novas construções. Esse processo envolve a
              remoção de entulhos, vegetação, árvores e outros resíduos,
              deixando o terreno limpo e adequado.
            </p>

            <div className="flex items-center justify-center">
              <Image className="rounded-lg" src={Image1} alt="" />
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild className="pointer">
            <CardServices service="Nivelamento de Terreno" img={Image2} />
          </DialogTrigger>
          <DialogContent className="max-w-[345px] lg:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Nivelamento de terreno</DialogTitle>
            </DialogHeader>
            <p className="text-neutral-300 tracking-tight text-[17px] text-justify">
              O nivelamento de terreno é essencial para garantir uma base plana
              e estável para construções. Esse processo ajusta a topografia do
              solo, corrigindo desníveis e preparando a área para receber
              fundações e estruturas com segurança.
            </p>

            <div className="flex items-center justify-center">
              <Image className="rounded-lg" src={Image2} alt="" />
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild className="pointer">
            <CardServices service="Demolição" img={Image3} />
          </DialogTrigger>
          <DialogContent className="max-w-[345px] lg:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Demolição</DialogTitle>
            </DialogHeader>
            <p className="text-neutral-300 tracking-tight text-[17px] text-justify">
              A demolição é o serviço de desmontagem controlada de estruturas
              antigas ou indesejadas no terreno, preparando a área para novos
              projetos. Esse processo inclui a remoção segura de todos os
              resíduos, garantindo um espaço limpo.
            </p>
            <div className="flex items-center justify-center">
              <Image className="rounded-lg" src={Image3} alt="" />
            </div>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild className="pointer">
            <CardServices service="Escavação" img={Image4} />
          </DialogTrigger>
          <DialogContent className="max-w-[345px] lg:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Escavação</DialogTitle>
            </DialogHeader>
            <p className="text-neutral-300 tracking-tight text-[17px]  text-justify">
              A escavação é o processo de remoção de solo para abrir fundações,
              valas ou outras estruturas subterrâneas essenciais. Com
              equipamentos especializados, essa etapa prepara o terreno para
              obras profundas, garantindo segurança na construção.
            </p>
            <div className="flex items-center justify-center">
              <Image className="rounded-lg" src={Image4} alt="" />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
