import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MatchListPendingTable() {
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
          <TableCell>**/**/**</TableCell>
          <TableCell>Carlitos A</TableCell>
          <TableCell>******</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
