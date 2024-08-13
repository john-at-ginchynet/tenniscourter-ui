import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

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
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Jen Z</TableCell>
              <TableCell>30s, Female, Lefty, One-handed BH</TableCell>
              <TableCell>3.5 USTA</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Milly M</TableCell>
              <TableCell>20s, Female, Righty, Two-handed BH</TableCell>
              <TableCell>3.5 USTA<br/>23.4 WTN</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boom R</TableCell>
              <TableCell>60s, Male, Lefty, Two-handed BH</TableCell>
              <TableCell>3.0 USTA</TableCell>
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
