import { HTMLInputTypeAttribute } from 'react'

interface InputProps {
  type: HTMLInputTypeAttribute
  required: boolean | undefined
}

export default function Input({ type, required }: InputProps) {
  return (
    <input
      placeholder="Type xxx here"
      type={type}
      required={required}
      className="rounded-lg h-[60px] p-[1.25rem] bg-grey text-darkGrey active:text-black opacity-95 hover:opacity-100 active:opacity-100 invalid:bg-errorRedBg invalid:border-errorRedBorder border-[1px] rounded-lg"
    />
  )
}
