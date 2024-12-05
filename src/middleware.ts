import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const access_token: string | undefined = request.cookies.get("access_token")?.value;

  const user: any = access_token && jwt.verify(access_token, "this-is-your-jwt-token");

  const adminRoutes = ["/admin/dashboard"];

  const publicRoutes = ["/login", "/signup", "/jobs"];

  const userRoutes = ["/user"];

  const path = request?.nextUrl?.pathname;

  const isUserRoute = userRoutes.some((route) => path.startsWith(route));
  const isAdminRoute = adminRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  const isAdmin = user && user?.role === "admin" ? true : false;

  if (!user && (isUserRoute || isAdminRoute)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user && !isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
