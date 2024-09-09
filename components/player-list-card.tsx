import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dropdown } from "react-day-picker";

export function PlayerListCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Recommended Playing Partners</CardTitle>
        <CardDescription>
          Small blurb about recommended partners...
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead>Name</TableHead>
              <TableHead>Profile</TableHead>
              <TableHead>Ratings</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                Jen Z
              </TableCell>
              <TableCell>30s, Female, Lefty, One-handed BH</TableCell>
              <TableCell>3.5 USTA</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/players/123/matchRequest">
                        Request match...
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">
                        Remove from recommendations...
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/players/123">
                        View player...
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Milly M
              </TableCell>
              <TableCell>20s, Female, Righty, Two-handed BH</TableCell>
              <TableCell>3.5 USTA<br/>23.4 WTN</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/players/456/matchRequest">
                        Request match...
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">
                        Remove from recommendations...
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/players/123">
                        View player...
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Boom R
              </TableCell>
              <TableCell>60s, Male, Lefty, Two-handed BH</TableCell>
              <TableCell>3.0 USTA</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Link href="/players/789/matchRequest">
                        Request match...
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="#">
                        Remove from recommendations...
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/players/123">
                        View player...
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Link
          href="/players"
          className="w-full"
        >
          <Button className="w-full">See more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
