'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RegExp, Error } from '../constants'

interface FormData {
  email: string
  firstName: string
  lastName: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<FormData> = data => console.log(data)

  return (
    <section className="text-left max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-base">
        <label htmlFor="firstName">Imię</label>
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <input {...register('firstName', { required: true })} className="form-input" />
        <label htmlFor="lastName">Nazwisko</label>
        <input {...register('lastName', { required: false })} className="form-input" />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          {...register('email', {
            required: true,
            pattern: { value: RegExp.Email, message: Error.Email }
          })}
          className="form-input"
        />
        {errors.email && <span>{errors.email.message}</span>}
        <label htmlFor="password">Hasło</label>
        <input
          type="password"
          {...register('password', {
            required: true,
            pattern: {
              value: RegExp.Password,
              message: Error.Password
            }
          })}
          className="form-input"
        />
        {errors.password && <span>{errors.password.message}</span>}
        <button
          type="submit"
          className="bg-yellow-100 py-3 rounded-lg shadow-lg hover:bg-yellow-200 hover:shadow-inner ease-in-out duration-500"
        >
          Zarejestruj się
        </button>
      </form>
    </section>
  )
}
