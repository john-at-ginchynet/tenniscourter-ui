import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { MatchListUpcomingTable } from "./match-list-upcoming-table";
import { getSessionCookie } from "@/app/actions/auth";
import { cookies } from "next/headers";

export async function MatchListUpcomingCard({ userId }) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Upcoming Matches</CardTitle>
        <CardDescription>Scheduled matches coming up.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <MatchListUpcomingTable userId={userId} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
