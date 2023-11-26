import { getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET(_request: Request) {
  // This allows us to retrieve the session on SERVER-SIDE
  const session = await getServerSession(authOptions)
  return NextResponse.json({ authenticated: !!session })
}
