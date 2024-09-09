import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export function MatchListPendingTable() {
  return(
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
        <TableRow>
          <TableCell>**/**/**</TableCell>
          <TableCell>
            Carlitos A
          </TableCell>
          <TableCell>******</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/matches/789">
                    Schedule match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/players/789">
                    View player...
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
