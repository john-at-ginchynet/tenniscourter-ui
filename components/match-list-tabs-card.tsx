import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { MatchListRequestTable } from "./match-list-request-table";
import { MatchListUpcomingTable } from "./match-list-upcoming-table";
import { MatchListPendingTable } from "./match-list-pending-table";
import { MatchListRecentTable } from "./match-list-recent-table";

export function MatchListTabsCard() {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">My Matches</CardTitle>
        <CardDescription>
          Peter Piper picked a peck of pickled peppers. If Peter Piper picked a peck of pickled peppers, How many pickled peppers did Peter Piper pick if he picked a peck of pickled peppers?
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming Matches</TabsTrigger>
            <TabsTrigger value="recent">Recent Matches</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <MatchListUpcomingTable />
          </TabsContent>
          <TabsContent value="recent">
            <MatchListRecentTable />
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
};