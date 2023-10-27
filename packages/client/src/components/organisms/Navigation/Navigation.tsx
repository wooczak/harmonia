'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode, useCallback } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { renderTabs } from './helpers'
import { Routes } from 'src/app/(dashboard)/constants'
import Title from 'src/components/atoms/Title'

export type NavTabs = { [x: string]: string | ReactNode }

type TNavigationProps = {
  tabs: NavTabs
  titleContent: string
}

export default function Navigation({ tabs, titleContent }: TNavigationProps) {
  const pathname = usePathname()

  const renderNavTabs = useCallback(
    function (tabs: NavTabs) {
      return renderTabs(tabs)
    },
    [tabs]
  )

  const { HOMEPAGE } = Routes

  return (
    <div className="flex h-[5rem] border-b-2 border-yellow-100 mb-5">
      <Title type="Primary" content={titleContent} href={HOMEPAGE} customStyling="leading-[5rem]"></Title>
      <nav className="flex items-center grow">
        <ul className="flex gap-10 w-full justify-end items-center">
          {pathname !== HOMEPAGE && (
            <Link href={HOMEPAGE}>
              <AiOutlineHome size={20} />
            </Link>
          )}
          {renderNavTabs(tabs)}
        </ul>
      </nav>
    </div>
  )
}
