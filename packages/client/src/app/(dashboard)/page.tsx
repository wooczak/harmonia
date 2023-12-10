import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '@/api/auth/[...nextauth]/route'
import Text from '@/components/atoms/Text/Text'
import { TextSize } from '@/theme/types'

export default async function Homepage() {
  const session = await getServerSession(authOptions)

  return (
    <div>
      <Text size={TextSize.H1} className="leading-[5rem]">Hello, Harmonia!</Text>
      <p>{JSON.stringify(session)}</p>
    </div>
  )
}
