import { ErrorHandling } from '@/components/types'
import React, { ChangeEvent, useCallback, useState } from 'react'

export interface InputProps {
  type: 'email' | 'password' | 'text'
  required: boolean
  placeholderText: string
}

export default function Input({
  type,
  required,
  placeholderText,
  isError,
  errorMessage,
  ...props
}: InputProps & ErrorHandling) {
  const [isFirstLetterTyped, setIsFirstLetterTyped] = useState(false)

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value || ''
    setIsFirstLetterTyped(inputValue.length > 0)
  }, [])

  return (
    <React.Fragment>
      <input
        {...props}
        onChange={handleChange}
        placeholder={placeholderText}
        type={type}
        required={required}
        className={`rounded-lg h-[60px] p-[1.25rem] bg-grey text-darkGrey ${
          isFirstLetterTyped && 'text-black opacity-100'
        } opacity-95 hover:opacity-100 cursor-pointer ${
          isFirstLetterTyped && isError && 'bg-errorRedBg border-errorRedBorder'
        } border-[1px] rounded-lg`}
      />
      {isError && <span>{errorMessage}</span>}
    </React.Fragment>
  )
}
