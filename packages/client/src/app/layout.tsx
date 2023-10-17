import React from 'react';
import Navigation from './components/navigation';
import { NavigationTabs } from './constants';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation tabs={NavigationTabs}/>
        {children}
      </body>
    </html>
  )
}