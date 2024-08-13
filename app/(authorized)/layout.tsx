import type { Metadata } from "next";
import "@/app/globals.css";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "TennisCourter",
  description: "Game, set, match",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-emerald-600">
        <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <MainNav />
          <MobileNav />      
        </header>        
        {children}
      </body>
    </html>
  );
};
