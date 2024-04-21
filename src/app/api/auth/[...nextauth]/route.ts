import nextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import userModel from "@/model/userModel";
import connectDb from "@/utils/dbConnect";
import bcrypt from "bcryptjs"
import NextAuth from "next-auth/next";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email@gmail.com" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials: any) {
        try {
          await connectDb()
          const user = await userModel.findOne({ email: credentials.email })
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(user.password, credentials.password)
            if (isPasswordCorrect) {
              return user
            }
          }
        } catch (error: any) {
          throw new Error(error)
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? ""
    })
  ]
}


export const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }