'use client'

import Text from '@/components/atoms/Text'
import { TextSize } from '@/theme/types'
import { InputPlaceholder, LoginPageConstants as Texts } from './constants'
import InputWithLabel from '@/components/molecules/InputWithLabel'
import Toggle from '@/components/atoms/Toggle'
import { FormEventHandler, useState } from 'react'
import Image from 'next/image'
import Button from '@/components/atoms/Button/Button'
import { ButtonType } from '@/components/types'
import Link from 'next/link'

type TLoginFormProps = {
  handleLogIn: FormEventHandler<HTMLFormElement>
}

export default function LoginForm({ handleLogIn }: TLoginFormProps) {
  const [rememberMe, setRememberMe] = useState(false);

  function handleRememberMeToggle() {
    setRememberMe(prevState => !prevState)
  }

  return (
    <section className="flex flex-col justify-center px-32">
      <Text className="leading-tight" size={TextSize.H1}>
        {Texts.HEADING_START}
      </Text>
      <div>
        <Text className="leading-tight" size={TextSize.H1}>
          {Texts.HEADING_END}
        </Text>
        <Image
          alt="Vector image underlining the ending of the heading title with a yellow stripe"
          src="/vectors/heading-login-underline.svg"
          height={20}
          width={250}
          className="relative left-14"
        />
      </div>
      <Text size={TextSize.BASE} className="mt-4">
        {Texts.SIGN_IN_TEXT}
      </Text>
      <form onSubmit={handleLogIn}>
        <InputWithLabel
          inputType="email"
          htmlFor="email"
          labelText="E-mail"
          placeholderText={InputPlaceholder.E_MAIL}
          isError={false}
        />
        <InputWithLabel
          inputType="password"
          htmlFor="password"
          labelText="Password"
          placeholderText={InputPlaceholder.PASSWORD}
          isError={false}
        />
        <div className="flex gap-3.5 items-center">
          <Toggle activated={rememberMe} onClick={handleRememberMeToggle} />
          <Text size={TextSize.SMALL}>{Texts.REMEMBER_ME}</Text>
        </div>
        <Button className="w-full my-4" type={ButtonType.CALL_TO_ACTION}>
          {Texts.LOG_IN}
        </Button>
      </form>
      <Text className="underline font-medium" size={TextSize.SMALL}>
        <Link href="/auth/forgot-password">{Texts.FORGOT_PASSWORD}</Link>
      </Text>
      <Text className="w-4/5 place-self-center text-center mt-14 before:inline-block before:w-full before:h-[1px] before:bg-black" size={TextSize.SMALL}>
        {`${Texts.NO_ACCOUNT} `}
        <Link className="underline" href="/auth/register">
          {Texts.REGISTER_NOW}
        </Link>
      </Text>
    </section>
  )
}
