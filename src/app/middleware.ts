import { type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/profile",
};
export function middleware(request: NextRequest) {
  // Add your middleware logic here
  console.log("Middleware triggered for:", request.nextUrl.pathname);
  return NextResponse.redirect(new URL("/", request.url));
}
