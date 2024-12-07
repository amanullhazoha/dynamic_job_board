import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token")?.value;

  let user: any = null;

  try {
    if (access_token) {
      user = jwtDecode(access_token);
    }
  } catch (err) {
    console.error("JWT verification error:", err);
  }

  const publicRoutes = ["/login", "/signup"];
  const userRoutes = ["/user", "/create-job", "/update-job"];

  const path = request.nextUrl.pathname;

  const isUserRoute = userRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  if (!user && isUserRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
