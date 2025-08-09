import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

interface GoogleProfile {
  name?: string;
  email?: string;
  picture?: string;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "google" && profile && typeof profile === "object") {
        const p = profile as GoogleProfile;
        token.name = p.name ?? token.name;
        token.email = p.email ?? token.email;
        token.picture = p.picture ?? token.picture;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name as string | undefined;
        session.user.email = token.email as string | undefined;
        session.user.image = (token as { picture?: string }).picture as string | undefined;
      }
      return session;
    },
  },
});
