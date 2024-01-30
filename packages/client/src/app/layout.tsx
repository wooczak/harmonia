'use client';

import { QueryClient, QueryClientProvider } from 'react-query'
import './globals.css'
import useSupabaseClient from '@/hooks/useSupabaseClient';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  useSupabaseClient();  

  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="max-w-screen-2xl mx-auto">
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </body>
    </html>
  )
}
