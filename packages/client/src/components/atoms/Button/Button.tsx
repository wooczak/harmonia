import { ButtonType } from '@/components/types'
import React from 'react'
import { buttonClassNameMap } from './helpers'

interface IButtonProps {
  type: ButtonType
  children: React.ReactNode
  className?: string
}

export default function Button({ type, children, className: additionalClasses }: IButtonProps) {
  return <button className={`${additionalClasses} ${buttonClassNameMap[type]}`}>{children}</button>
}
