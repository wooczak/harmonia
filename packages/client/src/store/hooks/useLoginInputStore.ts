import { create } from 'zustand'

interface LoginInputStore {
  emailInput: string
  passwordInput: string
  updateInput: (type: 'email' | 'password', val: string) => void
}

const useLoginInputStore = create<LoginInputStore>(set => ({
  emailInput: '',
  passwordInput: '',
  updateInput: (type, val) =>
    set(state => ({
      ...state,
      [type === 'email' ? 'emailInput' : 'passwordInput']: val
    }))
}))

export default useLoginInputStore
