'use client'

import React, { ReactNode, useCallback } from 'react'
import { renderTabs } from './helpers'
import { Routes } from 'src/app/(dashboard)/constants'
import Link from 'next/link'
import Text from '@/components/atoms/Text/Text'
import { TextSize } from '@/theme/types'

export type NavTabs = { [x: string]: string | ReactNode }

export type renderTabsFuncArgs = {
  renderHomePageIcon: boolean
  tabs: NavTabs
}

type TNavigationProps = {
  isUserAtHomePage: boolean
  tabs: NavTabs
}

export default function Navigation({ isUserAtHomePage: renderHomePageIcon, tabs }: TNavigationProps) {
  const renderNavTabs = useCallback(
    function ({ renderHomePageIcon, tabs }: renderTabsFuncArgs) {
      return renderTabs({ renderHomePageIcon, tabs })
    },
    [tabs]
  )

  return (
    <nav className="flex items-center grow">
      <Link href={Routes.HOMEPAGE}>
        <Text size={TextSize.H1} className="leading-[5rem]">Harmonia</Text>
      </Link>
      <ul className="flex gap-10 w-full justify-end items-center">{renderNavTabs({ renderHomePageIcon, tabs })}</ul>
    </nav>
  )
}
