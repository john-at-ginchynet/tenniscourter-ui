import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function CourtListCard() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Courts</CardTitle>
        <CardDescription>
          Search for courts
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-slate-800 dark:border-white/20">
              <TableHead>Name</TableHead>
              <TableHead>Town/City</TableHead>
              <TableHead>Courts</TableHead>
              <TableHead>Lights</TableHead>
              <TableHead>Hitting Wall</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>BJK Tennis Center</TableCell>
              <TableCell>Flushing</TableCell>
              <TableCell>2 Indoor, 34 Outdoor, Hard</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Arthur Ashe Stadium</TableCell>
              <TableCell>Flushing</TableCell>
              <TableCell>1 Indoor, Hard</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Vanderbilt Tennis Club</TableCell>
              <TableCell>Manhattan</TableCell>
              <TableCell>1 Indoor, Hard</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Find more...</Button>
      </CardFooter>
    </Card>
  );
};
