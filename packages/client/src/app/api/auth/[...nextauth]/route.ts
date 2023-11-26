import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// In api/auth/signin, after signing in
// the user will be automatically sent to the homepage
// and session-related cookies will be created and stored

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      async authorize() {
        const user = { id: '1', name: 'Ethan', email: 'test@test.com' }
        return user
      }
    })
  ]
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}