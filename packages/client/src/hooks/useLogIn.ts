import useLoginInputStore from '@/store/hooks/useLoginInputStore'
import { toast } from 'react-toastify';
import useSupabaseClient from './useSupabaseClient';

export default function useLogIn() {
  const supabase = useSupabaseClient();
  const { emailInput, passwordInput } = useLoginInputStore(store => store);

  async function handleLogIn(e: any) {
    e.preventDefault();

    const { error } =  await supabase.auth.signInWithPassword({
      email: emailInput,
      password: passwordInput
    });

    if (error) {
      toast.error(`${error.message}`);
    }

    
  }

  return { handleLogIn }
}
