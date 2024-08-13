import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function PlayerCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Player Summary (self)</CardTitle>
        <CardDescription>
          Small blurb about user...
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <p>John D</p>
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