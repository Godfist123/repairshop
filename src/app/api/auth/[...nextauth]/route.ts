import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  session: {
    strategy: "jwt", // Use JWTs for session handling
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect called with:", { url, baseUrl });

      // Check if the URL includes the `next` parameter
      const nextParam = new URL(url, baseUrl).searchParams.get("next");
      console.log("Extracted `next` parameter:", nextParam);

      if (nextParam) {
        // Redirect to the `next` parameter if it exists
        console.log("Redirecting to `next`:", `${baseUrl}${nextParam}`);
        return `${baseUrl}${nextParam}`;
      }

      // If no `next` parameter, return the provided `url` or fallback to `baseUrl`
      const redirectUrl = url.startsWith("/") ? `${baseUrl}${url}` : url;
      console.log("Redirecting to fallback:", redirectUrl);

      return redirectUrl || baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
