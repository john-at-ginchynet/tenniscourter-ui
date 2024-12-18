import { LoginFormSchema, FormState } from "@/app/lib/definitions";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAuthorizedUser(cookies: ReadonlyRequestCookies) {
  const sessionCookie = cookies.get("session");

  if (!sessionCookie) {
    return redirect("/login");
  }

  const response = await fetch("http://localhost:3003/api/me", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: sessionCookie?.value,
    },
    cache: "no-store",
  });

  let data = await response.json();
  console.log("getAuthorizedUser >> me.data: " + JSON.stringify(data));
  let user = data.user;

  return user;
}

export async function getSessionCookie(cookies: ReadonlyRequestCookies) {
  const sessionCookie = cookies.get("session");
  console.log("getSessionCookie: " + sessionCookie?.value);
  return sessionCookie?.value;
}
