"use client";

import Link from "next/link";
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="border-b-4 border-emerald-600">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            href="/home"
            className={cn(
              "mr-4 flex items-center space-x-2 lg:mr-6",
              pathname === "/home" ? "before:content-['🎾_']" : ""
            )}
          >
            <span className="hidden font-bold lg:inline-block">
              TennisCourter
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm lg:gap-6">
            <Link
              href="/players"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/players" ? "before:content-['🎾_'] text-foreground" : "text-foreground/60"
              )}
            >
              Players
            </Link>
            <Link
              href="/courts"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/courts" ? "before:content-['🎾_'] text-foreground" : "text-foreground/60"
              )}
            >
              Courts
            </Link>
            <Link
              href="/matches"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/matches" ? "before:content-['🎾_'] text-foreground" : "text-foreground/60"
              )}
            >
              Matches
            </Link>
            <Link
              href="/improvement"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/improvement" ? "before:content-['🎾_'] text-foreground" : "text-foreground/60"
              )}
            >
              Improvement
            </Link>
            <Link
              href="/gear"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/gear" ? "before:content-['🎾_'] text-foreground" : "text-foreground/60"
              )}
            >
              Gear
            </Link>
            <Link
              href="/me"
              className={cn(
                "transition-colors hover:text-foreground/80 semi-bold",
                pathname.startsWith("/me") ? "before:content-['🎾_'] text-foreground" : "text-foreground/60"
              )}
            >
              John Doe
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};