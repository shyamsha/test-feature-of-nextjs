import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

// export const dynamic = "force-dynamic"; //opt out caching default next.js behavior is caching

export async function GET(req: NextRequest) {
  // Handle GET request
  const requestHeaders = new Headers(req.headers);
  console.log("Request Headers:", Object.fromEntries(requestHeaders.entries()));
  console.log(headers());
  console.log(cookies());
  // return new Response("GET request to /api/profile");
  return new Response(`<h1>Profile</h1>`, {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "my-cookie=value; Path=/; HttpOnly",
    },
  });
}
