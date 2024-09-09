import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

export function MatchListCard() {
  return (
    <Card>
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
              <TableHead colSpan={4}>Upcoming Matches</TableHead>
            </TableRow>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead>Date</TableHead>
              <TableHead>Opp</TableHead>
              <TableHead>Location</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                2/2/24
              </TableCell>
              <TableCell>                
                Steffi G
              </TableCell>
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
              <TableCell>
                2/6/24
              </TableCell>
              <TableCell>
                Jimmy C
              </TableCell>
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
            <TableRow>
              <TableCell>                  
                **/**/**
              </TableCell>
              <TableCell>
                Carlitos A
              </TableCell>
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
            <TableRow>
              <TableCell>
                6/17/23
              </TableCell>
              <TableCell>
                Andy M
              </TableCell>
              <TableCell>
                6-0 6-0 (Andy M)
              </TableCell>
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
              <TableCell>
                3/4/23
              </TableCell>
              <TableCell>
                Martina N
              </TableCell>
              <TableCell>
                6-0 6-0 (Martina N)
              </TableCell>
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
              <TableCell>
                2/2/23
              </TableCell>
              <TableCell>
                Wall
              </TableCell>
              <TableCell>
                6-0 6-0 (Wall)
              </TableCell>
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