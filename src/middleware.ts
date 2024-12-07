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

  console.log(user, "authent");

  const adminRoutes = ["/admin/dashboard"];
  const publicRoutes = ["/login", "/signup"];
  const userRoutes = ["/user"];

  const path = request.nextUrl.pathname;

  const isUserRoute = userRoutes.some((route) => path.startsWith(route));
  const isAdminRoute = adminRoutes.some((route) => path.startsWith(route));
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  const isAdmin = user?.role === "admin";

  if (!user && (isUserRoute || isAdminRoute)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && isPublicRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user && !isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs",
  matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};
