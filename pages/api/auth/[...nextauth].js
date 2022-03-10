import bcrypt from "bcrypt";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
var user = require("../../../model/User");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      //   credentials: {
      //     username: { label: "Username", type: "text", placeholder: "jsmith" },
      //     password: {  label: "Password", type: "password" }
      //   },
      async authorize(credentials, req) {
        const { email, pw } = credentials;
        const User = await user.findOne({
            email: email,
          })
          .exec();
        //   console.log();
        const isMatch = await bcrypt.compare(pw, User._doc.password);


        if (isMatch && User) {
        delete User._doc.password
          return User._doc;
        }

        return null;
      }
    
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    async jwt({ token, account }) {
    
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
    
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
