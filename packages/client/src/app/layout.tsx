import React from 'react'
import Navigation from './components/navigation'
import { NavigationTabs } from './constants'
import './globals.css'
import ThemeRegistry from './ThemeRegistry'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: 'mui' }}>
          <Navigation tabs={NavigationTabs} />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
