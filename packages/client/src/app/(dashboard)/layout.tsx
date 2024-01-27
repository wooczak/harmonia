'use client'

import React from 'react'
import { NavigationTabs, Routes } from './constants'
import { usePathname } from 'next/navigation'
import Navigation from '@/components/organisms/Navigation'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isUserAtHomePage = pathname === Routes.HOMEPAGE

  return (
    <main className="px-4">
      <Navigation isUserAtHomePage={isUserAtHomePage} tabs={NavigationTabs} />
      {children}
    </main>
  )
}
