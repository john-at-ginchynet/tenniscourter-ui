import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

export function MatchListUpcomingTable() {
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
          <TableCell>2/2/24</TableCell>
          <TableCell>Steffi G</TableCell>
          <TableCell>Arthur Ashe Stadium</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/courts/123">
                    View court...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/matches/123">
                    View match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/players/abc">
                    View player...
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2/6/24</TableCell>
          <TableCell>Jimmy C</TableCell>
          <TableCell>BJK Tennis Center</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/courts/123">
                    View court...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/matches/123">
                    View match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/players/abc">
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
