import { NextRequest } from "next/server";
import { cookies, headers } from "next/headers";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // Perform authentication logic here (e.g., database lookup)
  //
  const response = await fetch("http://localhost:3003/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    let cookieVal = response.headers
      .getSetCookie()[0]
      .substring(0, response.headers.getSetCookie()[0].indexOf(";"));
    // console.log("api/auth/login >> cookieVal: " + cookieVal);
    // Set a cookie to indicate successful login
    const oneHour = 1 * 60 * 60 * 1000;
    const fiveMinutes = 5 * 60 * 1000;
    cookies().set("session", cookieVal, {
      httpOnly: true,
      expires: Date.now() + oneHour,
    });
    // console.log("api/auth/login >> getCookieSession: " + cookies().get("session")?.toString());
    return new Response(null, { status: 200 });
  } else {
    return new Response("Invalid credentials", { status: 401 });
  }
}
