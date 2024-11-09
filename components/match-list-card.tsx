import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import moment from 'moment';

export async function MatchListCard() {

  let response = await fetch(`http://localhost:3003/api/matches`, { cache: 'no-store' });
  let data = await response.json();
  let matches = data.matches;

  return (

    <Card className="h-full">
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
              <TableHead colSpan={4}>Past Matches</TableHead>
            </TableRow>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead>Date</TableHead>
              <TableHead>Opp</TableHead>
              <TableHead>Result</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            { matches.map((match) => (
              <TableRow key={ match.id }>
                <TableCell>
                  { moment(match.date).format('ddd, ll') }
                </TableCell>
                <TableCell>
                  <Link className="text-sky-700 underline decoration-dotted" href={ '/players/' + match.side2_player1.id }>
                    { match.side2_player1.name }
                  </Link>
                </TableCell>
                <TableCell>
                  <Link className="text-sky-700 underline decoration-dotted" href={ '/matches/' + match.id }>
                    { match.score }
                  </Link>
                </TableCell>
                <TableCell>
                  <Button className="bg-emerald-600 text-white">Rematch</Button>
                </TableCell>
              </TableRow>
            ))}
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