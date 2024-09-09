import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

export function MatchListRecentTable() {
  return(
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
        <TableRow>
          <TableCell>6/17/23</TableCell>
          <TableCell>Andy M</TableCell>
          <TableCell>6-0 6-0 (Andy M)</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
          <TableCell>3/4/23</TableCell>
          <TableCell>Martina N</TableCell>
          <TableCell>6-0 6-0 (Martina N)</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
          <TableCell>1/1/23</TableCell>
          <TableCell>Wall</TableCell>
          <TableCell>6-0 6-0 (Wall)</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
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
