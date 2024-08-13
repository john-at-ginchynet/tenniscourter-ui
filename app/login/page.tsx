import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { UserLoginForm } from "./components/user-login-form"

export default function AuthenticationPage() {
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
                &ldquo;Success is a journey, not a destination. The doing is often more important than the outcome.&rdquo;
              </p>
              <footer className="text-sm">Arthur Ashe</footer>
            </blockquote>
          </div>
        </div>
        
        <div className="lg:p-8 h-dvh">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Sign In to<br/>
                TennisCourter
              </h1>              
              <p className="text-sm text-muted-foreground">
                Welcome back!
              </p>
            </div>
            
            <UserLoginForm />  

            <div className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/examples/authentication"
                className="underline underline-offset-4 hover:text-primary"
              >
                Don&apos;t have an account?<br/>
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
  )
}
