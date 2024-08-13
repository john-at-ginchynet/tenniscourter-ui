import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MatchListUpcomingTable() {
  return(
    <Table>
      <TableHeader>
        <TableRow className="border-b border-slate-800 dark:border-white/20">
          <TableHead>Date</TableHead>
          <TableHead>Opp</TableHead>
          <TableHead>Location</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>2/2/24</TableCell>
          <TableCell>Steffi G</TableCell>
          <TableCell>Arthur Ashe Stadium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2/6/24</TableCell>
          <TableCell>Jimmy C</TableCell>
          <TableCell>BJK Tennis Center</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
