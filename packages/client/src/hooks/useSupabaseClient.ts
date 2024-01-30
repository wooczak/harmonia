import { createBrowserClient } from '@supabase/ssr'
import { useEffect, useMemo } from 'react'

export default function useSupabaseClient() {
  function returnSupabaseClient() {
    return createBrowserClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
  }

  const memoizedSupabaseClient = useMemo(returnSupabaseClient, [])

  useEffect(() => {
    // TODO: fix 4-time re-console.logging()
    memoizedSupabaseClient.auth.onAuthStateChange((event, session) => {
      
        if (event === 'SIGNED_IN') {
            console.log(event, session, 'signed in');
        }
    })
  }, [memoizedSupabaseClient])

  return memoizedSupabaseClient
}
