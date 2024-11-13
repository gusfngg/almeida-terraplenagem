import { jura, switzer } from '@/lib/fonts'
import Image from 'next/image'
import AboutImage from '@/assets/about.png'
import BlurFade from './ui/blur-fade'

export function About() {
  return (
    <section
      id="about"
      className="mt-28 lg:flex-row flex-col flex lg:items-start items-center gap-4 lg:gap-16"
    >
      <BlurFade inView>
        <Image
          className="lg:w-[400px] lg:h-[600px] h-[490px] w-[380px] rounded-md"
          src={AboutImage}
          height={5313}
          width={3438}
          alt=""
        />
      </BlurFade>

      <div>
        <BlurFade inView>
          <h1 className={`text-2xl md:text-3xl font-bold ${jura.className}`}>
            SOBRE NÓS
          </h1>
        </BlurFade>

        <BlurFade inView>
          <p
            className={`${switzer.className} mt-8  max-w-[500px] text-justify`}
          >
            A Almeida Terraplenagem é uma empresa especializada em serviços de
            terraplenagem, que atua com qualidade e precisão no preparo de
            terrenos para construções, pavimentações e projetos de
            infraestrutura. Oferece uma variedade de serviços, como escavação,
            remoção de entulhos, compactação e nivelamento de solo, buscando
            sempre a segurança e a eficácia em todas as etapas do processo.
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
