import Text from '@/components/atoms/Text'
import { TextSize } from '@/theme/types'
import Image from 'next/image'
import { LoginPageConstants as Texts } from './constants'

export default function Login() {
  return (
    <main className="grid grid-cols-2 background-white h-screen">
      <section className="flex flex-col justify-center px-10">
        <Text className="h" size={TextSize.H1}>{Texts.HEADING}</Text>
        <Text size={TextSize.BASE}>{Texts.SIGN_IN_TEXT}</Text>
      </section>
      <aside className="bg-grey flex flex-col justify-center items-center h-full">
        <Image
          src="/img/login-graphics.webp"
          alt="Graphic of people collaborating. Login page."
          width={567}
          height={491}
        />
      </aside>
    </main>
  )
}
