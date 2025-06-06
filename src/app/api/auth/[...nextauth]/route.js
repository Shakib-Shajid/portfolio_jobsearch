// import { connectDB } from "@/lib/connectDB";
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GitHubProvider from "next-auth/providers/github";
// import bcrypt from "bcrypt";

// const handler = NextAuth({
// //   secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60,
//     rolling: false,
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: {},
//         password: {},
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials;
//         if (!email || !password) {
//           return null;
//         }
//         const db = await connectDB();
//         const currentUser = await db.collection("users").findOne({ email });
//         if (!currentUser) {
//           return null;
//         }
//         const passwordMatched = bcrypt.compareSync(
//           password,
//           currentUser.password
//         );
//         if (!passwordMatched) {
//           return null;
//         }
//         return currentUser;
//       },
//     }),
//     // GoogleProvider({
//     //   clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
//     //   clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
//     // }),
//     // GitHubProvider({
//     //   clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
//     //   clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
//     // }),
//   ],
//   pages: {
//     signIn: "/login",

//   },
//   callbacks: {
//     async signIn({ user, account }) {
//       if (account.provider === "google" || account.provider === "github" || account.provider === "facebook") {
//         const { name, email, image } = user;
//         try {
//           const db = await connectDB();
//           const userCollection = db.collection("users");
//           const userExist = await userCollection.findOne({ email });
//           if (!userExist) {
//             const res = await userCollection.insertOne(user);
//             return user;
//           } else {
//             return user;
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       } else {
//         return user;
//       }
//     },
//   },
// });

// export { handler as GET, handler as POST };



import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // Optional
import GitHubProvider from "next-auth/providers/github"; // Optional
import bcrypt from "bcrypt";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const db = await connectDB();
        const user = await db.collection("users").findOne({ email });

        if (!user || !user.password) return null;

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),

    // Optional: Google OAuth
    // GoogleProvider({
    //   clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    // }),

    // Optional: GitHub OAuth
    // GitHubProvider({
    //   clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    //   clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    // }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (["google", "github"].includes(account.provider)) {
        const { name, email, image } = user;
        const db = await connectDB();
        const users = db.collection("users");

        const exists = await users.findOne({ email });
        if (!exists) {
          await users.insertOne({ name, email, image });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
