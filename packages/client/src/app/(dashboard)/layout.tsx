import React from 'react'
import { Heading, NavigationTabs } from './constants'
import Navigation from 'src/components/organisms/Navigation/Navigation'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Navigation tabs={NavigationTabs} titleContent={Heading.AppName} />
      {children}
    </React.Fragment>
  )
}
