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

export async function MatchListRequestTable() {
  let response = await fetch("http://localhost:3003/api/matches", {
    cache: "no-store",
  });
  let data = await response.json();
  let matches = data.matches;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Opp</TableHead>
          <TableHead>Age/Sex</TableHead>
          <TableHead>Profile</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches?.map((match) => (
          <TableRow key={match.id}>
            <TableCell>
              <Link
                className="text-sky-700 underline decoration-dotted"
                href={"/players/" + match.side2_player1.id}
              >
                {match.side2_player1.name}
              </Link>
            </TableCell>
            <TableCell>{match.side2_player1.gender}</TableCell>
            <TableCell>
              {match.side2_player1.handedness} + {match.side2_player1.backhand}
            </TableCell>
            <TableCell>
              <Link href={"/matches/" + match.id}>
                <Button className="bg-emerald-600 text-white">
                  Accept match
                </Button>
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
