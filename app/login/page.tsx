"use client";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import UserLoginForm from "./components/user-login-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthenticationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }
      // Redirect to the protected page upon successful login
      router.push("/home");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="container relative  h-fill flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 bg-white">
        <div className="relative hidden lg:h-dvh lg:flex-col lg:p-10 text-white dark:border-r lg:flex lg:bg-emerald-600">
          <div className="absolute inset-0" />
          <div className="relative z-20 flex items-center text-3xl semi-bold font-medium">
            🎾 TennisCourter
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Success is a journey, not a destination. The doing is
                often more important than the outcome.&rdquo;
              </p>
              <footer className="text-sm">Arthur Ashe</footer>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8 h-dvh">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign In to
                <br />
                TennisCourter
              </h1>
              <p className="text-sm text-muted-foreground">Welcome back!</p>
            </div>

            <div className="grid gap-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <div className="grid gap-1">
                    <Label className="sr-only" htmlFor="password">
                      Password
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="**********"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button type="submit">Sign In</Button>
                  {error && <p>{error}</p>}
                </div>
              </form>

              <div className="hidden">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <Button variant="outline" type="button">
                  <Icons.google className="mr-2 h-4 w-4" />
                  Google
                </Button>
              </div>
            </div>

            <div className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/examples/authentication"
                className="underline underline-offset-4 hover:text-primary"
              >
                Don&apos;t have an account?
                <br />
                Let&apos;s get started.
              </Link>
            </div>
            <div className="px-8 text-center text-sm text-muted-foreground">
              <p>
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function userRouter() {
  throw new Error("Function not implemented.");
}
