import clientPromise from "@/libs/mongoConnect";
import {UserInfo} from "@/models/UserInfo";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import {User} from '@/models/User';
import NextAuth, {getServerSession} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
const MONGO_URL="mongodb+srv://food-ordering-app:K8qo42UW0ZwT3fEA@cluster0.dioszpb.mongodb.net/";
const SECRET="cnhjvcgbfdihfvbdhjfb"
const GOOGLE_CLIENT_ID="65415471300-5o9nbv59a64n4m1uc5nh6dssdjjb7bat.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

export const authOptions = {
  secret:SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        mongoose.connect(MONGO_URL);
        const user = await User.findOne({email});
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          return user;
        }

        return null
      }
    })
  ],
};

export async function isAdmin() {
  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  if (!userEmail) {
    return false;
  }
  const userInfo = await UserInfo.findOne({email:userEmail});
  if (!userInfo) {
    return false;
  }
  return userInfo.admin;
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }