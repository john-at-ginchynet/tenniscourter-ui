import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSessionCookie } from "@/app/actions/auth";
import { cookies } from "next/headers";

export async function MatchListPendingTable({ userId }) {
  let URL =
    userId == null
      ? `http://localhost:3003/api/matches/pending`
      : `http://localhost:3003/api/users/${userId}/matches/pending`;

  let sessionCookie = await getSessionCookie(cookies());
  let response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: sessionCookie,
    },
    cache: "no-store",
  });
  let data = await response.json();
  let matches = data.matches;

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-b border-slate-800 dark:border-white/20">
          <TableHead>Date</TableHead>
          <TableHead>Opp</TableHead>
          <TableHead>Location</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches?.map((match) => (
          <TableRow key={match.id}>
            <TableCell>******</TableCell>
            <TableCell>
              <Link
                className="text-sky-700 underline decoration-dotted"
                href={"/players/" + match.side2_player1.id}
              >
                {match.side2_player1.name}
              </Link>
            </TableCell>
            <TableCell>******</TableCell>
            <TableCell>
              <Link href={"/matches/" + match.id}>
                <Button className="bg-emerald-600 text-white">
                  Schedule match
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
