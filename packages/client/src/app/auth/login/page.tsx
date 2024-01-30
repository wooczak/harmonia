'use client'

import Image from 'next/image'
import LoginForm from '@/components/organisms/LoginForm/LoginForm'
import useLogIn from '@/hooks/useLogIn'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  )
}
