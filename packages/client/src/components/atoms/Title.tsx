'use client'

import Link from "next/link";

type TitleType = 'Primary' | 'Accent';

interface TitleProps {
  type: TitleType
  content: string
  underline?: boolean
  href?: string
  customStyling?: string
}

export default function Title({ type, content, underline, href, customStyling }: TitleProps) {
  const textColor = type === 'Accent' ? 'text-yellow-300' : 'text-black'
  const textDecoration = underline ? 'underline decoration-from-font underline-offset-1' : ''
  const isLink = href ? 'hover:text-yellow-300 duration-200 ease-in-out' : '';

  return (
    <h1 className={`font-black text-4xl ${textColor} ${textDecoration} ${customStyling} ${isLink}`}>
      {href ? <Link href={href}>{content}</Link> : content}
    </h1>
  )
}
