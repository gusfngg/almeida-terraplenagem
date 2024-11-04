import { switzer } from '@/lib/fonts'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

export function FrequentlyAsked() {
  return (
    <div className="mt-32 flex items-center justify-center flex-col">
      <h1
        className={`${switzer.className} font-medium text-2xl lg:text-3xl text-center mx-auto max-w-[900px]`}
      >
        Perguntas frequentes
      </h1>

      <div className="w-[25rem] lg:w-[45rem] mt-12 border p-5 rounded-md ">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quais serviços de terraplenagem vocês oferecem?
            </AccordionTrigger>
            <AccordionContent>
              Oferecemos serviços completos de terraplenagem, incluindo
              nivelamento de terreno, escavação, drenagem, compactação, e
              demolição. Nosso objetivo é preparar o solo para construção,
              garantindo estabilidade e segurança.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Quanto tempo dura um projeto de terraplenagem?
            </AccordionTrigger>
            <AccordionContent>
              A duração depende da complexidade e do tamanho do terreno, além
              das condições climáticas e do tipo de solo. Em média, pequenos
              projetos duram alguns dias, enquanto grandes obras podem levar
              algumas semanas.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              A empresa trabalha com terrenos de qualquer tamanho?
            </AccordionTrigger>
            <AccordionContent>
              Trabalhamos com terrenos de todos os tamanhos, desde pequenos
              lotes residenciais até grandes áreas comerciais e industriais.
              Nossa equipe está preparada para atender projetos de diferentes
              escalas, sempre com o mesmo nível de qualidade e eficiência.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Quais serviços de terraplenagem vocês oferecem?
            </AccordionTrigger>
            <AccordionContent>
              Oferecemos serviços completos de terraplenagem, incluindo
              nivelamento de terreno, escavação, drenagem, compactação, e
              demolição. Nosso objetivo é preparar o solo para construção,
              garantindo estabilidade e segurança..
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Quais serviços de terraplenagem vocês oferecem?
            </AccordionTrigger>
            <AccordionContent>
              Oferecemos serviços completos de terraplenagem, incluindo
              nivelamento de terreno, escavação, drenagem, compactação, e
              demolição. Nosso objetivo é preparar o solo para construção,
              garantindo estabilidade e segurança..
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
