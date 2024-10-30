import { jura } from '@/lib/fonts'
import { CardServices } from './card-services'
import Image1 from '@/assets/1.png'
import Image2 from '@/assets/2.png'
import Image3 from '@/assets/3.png'
import Image4 from '@/assets/4.png'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

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
          <DialogContent>
            <h1>Limpeza de tereno</h1>
          </DialogContent>
        </Dialog>
        <CardServices service="Nivelamento de Terreno" img={Image2} />
        <CardServices service="Demolição" img={Image3} />
        <CardServices service="Escavação" img={Image4} />
      </div>
    </section>
  )
}
