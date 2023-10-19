import React from 'react'
import Navigation from './components/navigation'
import { NavigationTabs } from './constants'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
      </head>
      <body className="max-w-screen-xl mx-auto">
        <Navigation tabs={NavigationTabs} />
        {children}
      </body>
    </html>
  )
}
