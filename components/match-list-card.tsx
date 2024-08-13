import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

export function MatchListCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Match History Summary</CardTitle>
        <CardDescription>
          Small blurb about match history...
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead colSpan={3}>Upcoming Matches</TableHead>
            </TableRow>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead>Date</TableHead>
              <TableHead>Opp</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>2/2/24</TableCell>
              <TableCell>Steffi G</TableCell>
              <TableCell>Arthur Ashe Stadium</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2/6/24</TableCell>
              <TableCell>Jimmy C</TableCell>
              <TableCell>BJK Tennis Center</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>**/**/**</TableCell>
              <TableCell>Carlitos A</TableCell>
              <TableCell>BJK Tennis Center</TableCell>
            </TableRow>
          </TableBody>
          <TableHeader>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead colSpan={3}>Past Matches</TableHead>
            </TableRow>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead>Date</TableHead>
              <TableHead>Opp</TableHead>
              <TableHead>Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>6/17/23</TableCell>
              <TableCell>Andy M</TableCell>
              <TableCell>6-0 6-0 (Andy M)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3/4/23</TableCell>
              <TableCell>Martina N</TableCell>
              <TableCell>6-0 6-0 (Martina N)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1/1/23</TableCell>
              <TableCell>Wall</TableCell>
              <TableCell>6-0 6-0 (Wall)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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