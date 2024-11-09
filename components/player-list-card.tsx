import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dropdown } from "react-day-picker";

export async function PlayerListCard({ userId }) {

  let response = await fetch('http://localhost:3003/api/users', { cache: 'no-store' });
  let data = await response.json();
  let users = data.users;

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
            { users.filter((user) => user.id != userId).map((user) => (
              <TableRow key={ user.id }>
                <TableCell>
                  <Link className="text-sky-700 underline decoration-dotted" href={ '/players/' + user.id }>
                    { user.name }
                  </Link>
                </TableCell>
                <TableCell>
                  { user.gender }, { user.handedness }, { user.backhand }
                </TableCell>
                <TableCell>
                  { user.ntrp } USTA
                </TableCell>
                <TableCell>
                  <Link href={ '/matches/new/' + user.id }>
                    <Button className="bg-emerald-600 text-white">Request match</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
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
