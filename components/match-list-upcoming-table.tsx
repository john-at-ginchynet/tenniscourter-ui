import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import moment from "moment";
import { getSessionCookie } from "@/app/actions/auth";
import { cookies } from "next/headers";

function getOpponent(user, player1, player2) {
  if (user == player1.id) {
    return player2;
  }
  if (user == player2.id) {
    return player1;
  }
  return player1;
}

export async function MatchListUpcomingTable({ userId }) {
  let URL =
    userId == null
      ? `http://localhost:3003/api/matches/upcoming`
      : `http://localhost:3003/api/users/${userId}/matches/upcoming`;

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
            <TableCell>
              {match?.date ? (
                moment(match.date).format("ddd, ll")
              ) : (
                <Link href={"/matches/" + match.id}>
                  <Button className="bg-emerald-600 text-white">
                    Schedule
                  </Button>
                </Link>
              )}
            </TableCell>
            <TableCell>
              <Link
                className="text-sky-700 underline decoration-dotted"
                href={
                  "/players/" +
                  getOpponent(userId, match.side1_player1, match.side2_player1)
                    .id
                }
              >
                {
                  getOpponent(userId, match.side1_player1, match.side2_player1)
                    .name
                }
              </Link>
            </TableCell>
            <TableCell>
              {match?.location ? (
                <Link
                  className="text-sky-700 underline decoration-dotted"
                  href={"/courts/" + match.location}
                >
                  {match.location}
                </Link>
              ) : (
                <Link href={"/matches/" + match.id}>
                  <Button className="bg-emerald-600 text-white">
                    Set location
                  </Button>
                </Link>
              )}
            </TableCell>
            <TableCell>
              <Link href={"/matches/" + match.id}>
                <Button className="bg-emerald-600 text-white">
                  View conversation
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
