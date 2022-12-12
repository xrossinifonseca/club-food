import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
export default NextAuth({
  providers: [
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_KEY,
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_SECRET,
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
});
