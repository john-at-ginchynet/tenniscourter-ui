import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { MatchListRequestTable } from "./match-list-request-table";
import { MatchListUpcomingTable } from "./match-list-upcoming-table";
import { MatchListPendingTable } from "./match-list-pending-table";
import { MatchListRecentTable } from "./match-list-recent-table";
import { getSessionCookie } from "@/app/actions/auth";
import { cookies } from "next/headers";

export async function MatchListPendingCard({
  params,
}: {
  params: { userId: string };
}) {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Pending Matches</CardTitle>
        <CardDescription>
          Accepted match requests that are yet to be scheduled.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <MatchListPendingTable userId={params?.userId} />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
