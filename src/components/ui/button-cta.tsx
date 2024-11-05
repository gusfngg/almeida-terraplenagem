import { Button } from './button'

interface ButtonCtaInterface {
  message: string
}

export function ButtonCta({ message }: ButtonCtaInterface) {
  return (
    <Button className="bg-orangeAm text-brownAm font-semibold hover:bg-orange-400">
      {message}
    </Button>
  )
}
