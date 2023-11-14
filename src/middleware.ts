import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    const token = req.cookies.get("token");
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl).href);
    }
  }
}
