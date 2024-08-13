import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MatchListRecentTable() {
  return(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Opp</TableHead>
          <TableHead>Result</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>6/17/23</TableCell>
          <TableCell>Andy M</TableCell>
          <TableCell>6-0 6-0 (Andy M)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3/4/23</TableCell>
          <TableCell>Martina N</TableCell>
          <TableCell>6-0 6-0 (Martina N)</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>1/1/23</TableCell>
          <TableCell>Wall</TableCell>
          <TableCell>6-0 6-0 (Wall)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
