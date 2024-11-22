import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/prisma/client';
import bcrypt from 'bcrypt';
import { PrismaAdapter } from '@auth/prisma-adapter';

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await prisma.user.findFirst({
          where: { email },
        });

        if (user && await bcrypt.compare(password, user.password)) {
          return { id: user.id, email: user.email, name: user.username };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email,
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.user.name = token.name;
        return session;
      }
    },
  },
  secret: process.env.SECRET_KEY,
  pages: {
    signIn: '/auth/login'
  }
});

export { handler as GET, handler as POST };
