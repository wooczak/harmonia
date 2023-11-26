'use client'
// NextAuth expects an auth provider in
// client-side and use the auth hook
// that is responsible for connecting to server
// and asking the server to decode JWT -
// that creates latency
import { SessionProvider } from 'next-auth/react'

type Props = {
  children?: React.ReactNode
}

export const Providers = ({ children }: Props) => <SessionProvider>{children}</SessionProvider>
