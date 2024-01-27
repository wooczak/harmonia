import useLoginInputStore from '@/store/hooks/useLoginInputStore'
import { createBrowserClient } from '@supabase/ssr'
import { useEffect } from 'react'

export default function useLogIn() {
  const { emailInput, passwordInput } = useLoginInputStore(store => store)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  useEffect(() => {
    console.log('email: ', emailInput, ' password: ', passwordInput)
  }, [emailInput, passwordInput])

  async function handleLogIn(e: any) {
    e.preventDefault();

    // TODO: change this to signIn + create a separate hook and UI for signUp
    await supabase.auth.signUp({
      email: emailInput,
      password: passwordInput
    })
  }

  return { handleLogIn }
}
