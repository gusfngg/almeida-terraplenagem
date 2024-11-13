'use client'

import { Link as ScrollLink } from 'react-scroll'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'
import Logo from '@/assets/logotipo.png'

import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import BlurFade from './ui/blur-fade'

const navItems = [
  { name: 'Início', to: 'hero' },
  { name: 'Serviços', to: 'services' },
  { name: 'Nossa base', to: 'values' },
  { name: 'Sobre', to: 'about' },
]

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  function handleLinkClick() {
    setTimeout(() => setIsDrawerOpen(false), 100)
  }

  if (!isMounted) {
    return null
  }

  return (
    <BlurFade inView>
      <header className="my-4">
        <BlurFade inView>
          <div className="lg:border-2 lg:rounded-md lg:py-2 px-4">
            <div className="flex items-center justify-between">
              <BlurFade inView>
                <Image
                  className="size-16 object-cover lg:size-[5rem] bg-transparent"
                  src={Logo}
                  height={1563}
                  width={1563}
                  alt="logo"
                />
              </BlurFade>
              <div className="hidden lg:block">
                <nav className="border rounded-3xl p-4">
                  <BlurFade inView>
                    <ul className="flex items-center gap-10">
                      {navItems.map((item) => (
                        <li key={item.to}>
                          <ScrollLink
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            spy={true}
                            activeClass="text-primary"
                          >
                            <span className="text-brownAm text-lg cursor-pointer ont-medium hover:text-orange-500 transition-">
                              {item.name}
                            </span>
                          </ScrollLink>
                        </li>
                      ))}
                    </ul>
                  </BlurFade>
                </nav>
              </div>
              <div className="flex justify-between min-[825px]:hidden">
                <BlurFade inView>
                  <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                    <DrawerTrigger asChild>
                      <button aria-label="Open menu">
                        <Menu className="h-6 w-6" />
                      </button>
                    </DrawerTrigger>
                    <DrawerContent className="bg-neutral-200">
                      <BlurFade inView>
                        <div className="mt-12 flex flex-col items-center justify-center space-y-3 p-4 ">
                          {navItems.map((item) => (
                            <ScrollLink
                              key={item.to}
                              to={item.to}
                              smooth={true}
                              duration={500}
                              offset={-70}
                              spy={true}
                              activeClass="border-primary"
                              onClick={handleLinkClick}
                            >
                              <BlurFade inView>
                                <Button className="bg-orangeAm rounded-lg w-48 border hover:bg-orangeAm/90 border-neutral-400 text-lg text-brownAm">
                                  {item.name}
                                </Button>
                              </BlurFade>
                            </ScrollLink>
                          ))}
                        </div>
                      </BlurFade>
                    </DrawerContent>
                  </Drawer>
                </BlurFade>
              </div>
              <BlurFade inView>
                <Button className="hidden lg:block bg-orangeAm text-brownAm font-semibold hover:bg-orange-400">
                  <Link href="https://api.whatsapp.com/send?phone=5515997452271&text=Quero%20solicitar%20um%20or%C3%A7amento!">
                    Entrar em contato
                  </Link>
                </Button>
              </BlurFade>
            </div>
          </div>
        </BlurFade>
      </header>
    </BlurFade>
  )
}
