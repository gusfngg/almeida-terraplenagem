import { Button } from './button'

interface ButtonCtaInterface {
  message: string
  className?: string
}

export function ButtonCta({ message, className }: ButtonCtaInterface) {
  return (
    <Button
      className={`${className} bg-orangeAm text-brownAm font-semibold hover:bg-orange-400`}
    >
      {message}
    </Button>
  )
}
