
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions, User, Session } from 'next-auth'

import type { JWT } from 'next-auth/jwt'

import Api from '@/api/api'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const response = await Api.post(
            'auth/login',
            {
              userName: credentials?.email,
              userPassword: credentials?.password
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )

          return response.data as User
        } catch (error) {
          throw new Error('Correo o Contraseña incorrectos')
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        return { ...token, ...user }
      }

      return token
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      
        session.user = token as any
        
      return session
    }
  }
}
