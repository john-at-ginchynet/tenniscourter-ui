import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { MatchListRequestTable } from "./match-list-request-table";
import { MatchListUpcomingTable } from "./match-list-upcoming-table";
import { MatchListPendingTable } from "./match-list-pending-table";
import { MatchListRecentTable } from "./match-list-recent-table";

export function MatchListPendingCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Pending Matches</CardTitle>
        <CardDescription>
          Accepted match requests that are yet to be scheduled.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <MatchListPendingTable />
      </CardContent>
      <CardFooter>
        <Link
          href="/matches"
          className="w-full"
        >
          <Button className="w-full">See more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};