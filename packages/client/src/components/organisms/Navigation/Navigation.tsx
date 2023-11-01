'use client'

import React, { ReactNode, useCallback } from 'react'
import { renderTabs } from './helpers'
import { Routes } from 'src/app/(dashboard)/constants'
import Title from 'src/components/atoms/Title'

export type NavTabs = { [x: string]: string | ReactNode }

export type renderTabsFuncArgs = {
  renderHomePageIcon: boolean
  tabs: NavTabs
}

type TNavigationProps = {
  isUserAtHomePage: boolean
  tabs: NavTabs
  titleContent: string
}

export default function Navigation({ isUserAtHomePage: renderHomePageIcon, tabs, titleContent }: TNavigationProps) {
  const renderNavTabs = useCallback(
    function ({ renderHomePageIcon, tabs }: renderTabsFuncArgs) {
      return renderTabs({ renderHomePageIcon, tabs })
    },
    [tabs]
  )

  return (
    <nav className="flex items-center grow">
      <Title type="Primary" content={titleContent} href={Routes.HOMEPAGE} customStyling="leading-[5rem]"></Title>
      <ul className="flex gap-10 w-full justify-end items-center">{renderNavTabs({ renderHomePageIcon, tabs })}</ul>
    </nav>
  )
}
