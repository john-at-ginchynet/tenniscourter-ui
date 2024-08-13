"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  return(
  <Sheet>
    <SheetTrigger asChild>
      <Button
        variant="ghost"
        className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <svg
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M3 5H11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 12H16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M3 19H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" className="pr-0">
      <Link
        href="/home"
        className={cn(
          "flex items-center font-bold",
          pathname === "/home" ? "before:content-['🎾_']" : ""
        )}
      >
        TennisCourter
      </Link>
      <ScrollArea className="my-4 h-fill pb-10 pl-6">
        <div className="flex flex-col space-y-3">
          <Link
            href="/players"
            className={cn(
              "",
              pathname === "/players" ? "before:content-['🎾_']" : ""
            )}
          >
            Players
          </Link>
          <Link
            href="/courts"
            className={cn(
              "",
              pathname === "/courts" ? "before:content-['🎾_']" : ""
            )}
          >
            Courts
          </Link>
          <Link
            href="/matches"
            className={cn(
              "",
              pathname === "/matches" ? "before:content-['🎾_']" : ""
            )}
          >
            Matches
          </Link>
          <Link
            href="/improvement"
            className={cn(
              "",
              pathname === "/improvement" ? "before:content-['🎾_']" : ""
            )}
          >
            Improvement
          </Link>
          <Link
            href="/gear"
            className={cn(
              "",
              pathname === "/gear" ? "before:content-['🎾_']" : ""
            )}
          >
            Gear
          </Link>
          <Link
            href="/me"
            className={cn(
              "",
              pathname.startsWith("/me") ? "before:content-['🎾_']" : ""
            )}
          >
            John Doe
          </Link>
        </div>
      </ScrollArea>
    </SheetContent>
  </Sheet>
  );
};