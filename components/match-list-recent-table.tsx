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
import moment from "moment";
import { Button } from "@/components/ui/button";

function getOpponent(user, player1, player2) {
  if (user == player1.id) {
    return player2;
  }
  if (user == player2.id) {
    return player1;
  }
  return player1;
}

export async function MatchListRecentTable({ userId }) {
  let URL =
    userId == null
      ? `http://localhost:3003/api/matches`
      : `http://localhost:3003/api/users/${userId}/matches`;

  let response = await fetch(URL, { cache: "no-store" });
  let data = await response.json();
  let matches = data.matches;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Opp</TableHead>
          <TableHead>Result</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches.map((match) => (
          <TableRow key={match.id}>
            <TableCell>{moment(match.date).format("ddd, ll")}</TableCell>
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
              <Link
                className="text-sky-700 underline decoration-dotted"
                href={"/matches/" + match.id}
              >
                {match.score}
              </Link>
            </TableCell>
            <TableCell>
              <Button className="bg-emerald-600 text-white">Rematch</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
