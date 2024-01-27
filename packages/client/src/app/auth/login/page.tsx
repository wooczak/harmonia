'use client';

import Image from 'next/image'
import LoginForm from '@/components/organisms/LoginForm/LoginForm'
import useLogIn from '@/hooks/useLogIn'

export default function Login() {
  const { handleLogIn } = useLogIn()

  return (
    <main className="grid grid-cols-2 background-white h-screen">
      <LoginForm handleLogIn={handleLogIn} />
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
