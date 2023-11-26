'use client'

import { useSession } from 'next-auth/react'

export default function Account() {
  // This hook, thanks to the provider in RootLayout
  // allows us to fetch the session on the client-side.
  // It additionally creates "expires" object.
  // This method creates a LOT of latency compared to server-side method
  const { data: session } = useSession()

  return <pre>{JSON.stringify(session)}</pre>
}
