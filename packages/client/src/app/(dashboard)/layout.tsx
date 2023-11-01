'use client'

import React from 'react'
import { Heading, NavigationTabs, Routes } from './constants'
import Navigation from 'src/components/organisms/Navigation/Navigation'
import { usePathname } from 'next/navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isUserAtHomePage = pathname === Routes.HOMEPAGE

  return (
    <React.Fragment>
      <Navigation isUserAtHomePage={isUserAtHomePage} tabs={NavigationTabs} titleContent={Heading.AppName} />
      {children}
    </React.Fragment>
  )
}
