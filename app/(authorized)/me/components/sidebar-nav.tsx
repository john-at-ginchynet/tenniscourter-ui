"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/me",
  },
  {
    title: "Tennis Profile",
    href: "/me/tennisProfile",
  },
  {
    title: "Account",
    href: "/me/account",
  },
]

export function SidebarNav() {
  const pathname = usePathname();
  return(
    <nav
    className={cn(
      "flex lg:flex-col",
    )}
  >
    {sidebarNavItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className={cn(
          pathname === item.href
            ? "before:content-['🎾_']"
            : "",
          "justify-start p-2"
        )}
      >
        {item.title}
      </Link>
    ))}
  </nav>
  );
};
