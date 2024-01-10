import Image from 'next/image'
import LoginForm from '@/components/organisms/LoginForm/LoginForm'

export default function Login() {
  return (
    <main className="grid grid-cols-2 background-white h-screen">
      <LoginForm />
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
