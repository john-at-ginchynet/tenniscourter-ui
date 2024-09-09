import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

export function MatchListRequestTable() {
  return(
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
        <TableRow>
          <TableCell>Roger F</TableCell>
          <TableCell>42 M</TableCell>
          <TableCell>Righty One-Hander</TableCell>
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
                    Accept match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/matches/789">
                    Decline match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
          <TableCell>Rafael N</TableCell>
          <TableCell>38 M</TableCell>
          <TableCell>Lefty Two-Hander</TableCell>
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
                    Accept match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/matches/789">
                    Decline match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
          <TableCell>Andy M</TableCell>
          <TableCell>37 M</TableCell>
          <TableCell>Righty Two-Hander</TableCell>
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
                    Accept match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/matches/789">
                    Decline match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
          <TableCell>Novak D</TableCell>
          <TableCell>37 M</TableCell>
          <TableCell>Righty One-Hander</TableCell>
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
                    Accept match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/matches/789">
                    Decline match...
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
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
