import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export function middleware(request) {
  const cookieStore = cookies()
  const token = cookieStore.get("token")?.value

  if (token) {
    if (
      request.nextUrl.pathname === "/authen/login" ||
      request.nextUrl.pathname === "/authen/register" ||
      request.nextUrl.pathname === "/"
    ) {
      return NextResponse.redirect(new URL("/wishlist", request.url))
    }
  } else {
    if (
      request.nextUrl.pathname !== "/authen/login" &&
      request.nextUrl.pathname !== "/authen/register" &&
      request.nextUrl.pathname !== "/"
    ) {
      return NextResponse.redirect(new URL("/authen/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/",
    "/uploadFile",
    "/history",
    "/recommendation",
    "/result",
    "/wishlist",
    "/authen/login",
    "/authen/register",
  ],
}
