import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/api/auth/[...nextauth]/route'

export default async function Homepage() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <h1>Hello, Harmonia!</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}
