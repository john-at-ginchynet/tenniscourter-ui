import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { MatchListPendingTable } from "./match-list-pending-table";
import { MatchListRequestTable } from "./match-list-request-table";

export function MatchListRequestCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Match Requests</CardTitle>
        <CardDescription>
          The quick brown fox jumps over the lazy dog.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">        
        <MatchListRequestTable />
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