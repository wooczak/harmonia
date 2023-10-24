import React from 'react'
import Navigation from './components/navigation'
import { NavigationTabs } from './constants'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navigation tabs={NavigationTabs} />
      {children}
    </React.Fragment>
  )
}
