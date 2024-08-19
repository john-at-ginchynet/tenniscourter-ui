import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function PlayerCard() {
  return (
    <Card>
      <CardContent className="grid gap-4">
        <div className="flex justify-center p-4">
          <Avatar className="size-48 border-4 border-emerald-600">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="flex justify-center p-4">John D</p>
          <p>39</p>
          <p>Started playing in 2015</p>
          <p>Right-Handed, Two-Handed Backhand</p>
          <p></p>
          <p>Badges: Spin Master</p>
          <p>Gear</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href="/me"
          className="w-full"
        >
          <Button className="w-full">See more...</Button>
        </Link>
      </CardFooter>
    </Card>    
  );
};