import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const url = req.nextUrl;

  const protectedPaths = ["/customers", "/tickets"];

  const isProtected = protectedPaths.some((path) =>
    url.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    return NextResponse.redirect(
      new URL(`/login?next=${url.pathname}`, req.url)
    );
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/customers", "/tickets"],
};
