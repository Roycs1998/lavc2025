import NextAuth from 'next-auth';

import CredentialsProvider from "next-auth/providers/credentials";

import Api from '../../../../api/api';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const response = await Api.post('auth/login',
            {
              userName: credentials?.email, // Cambia "email" por "userName" si ese es el campo esperado
              userPassword: credentials?.password, // Cambia "password" por "userPassword" si es necesario
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }

          );

          return response.data;
        } catch (error) {
          throw new Error('Correo o Contraseña incorrectos');
        }
      }
    })/* ,
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)

        if (!parsedCredentials.success) return null

        const { email, password } = parsedCredentials.data
        const user = await Login(email, password)

        if (user?.roles.includes('client') && !user.verificatedEmail) {
          return null
        }

        if (!user) return null

        return user
      }
    }) */
  ],
  callbacks: {
    async jwt({ token, user }) {

      return { ...token, ...user };
    },

    async session({ session, token }) {
      session.user = token as any;

      return session;
    },
  },
})

export {handler as GET, handler as POST}
