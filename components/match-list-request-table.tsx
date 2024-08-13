import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MatchListRequestTable() {
  return(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Opp</TableHead>
          <TableHead>Age/Sex</TableHead>
          <TableHead>Profile</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Roger F</TableCell>
          <TableCell>42 M</TableCell>
          <TableCell>Righty One-Hander</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Rafael N</TableCell>
          <TableCell>38 M</TableCell>
          <TableCell>Lefty Two-Hander</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Andy M</TableCell>
          <TableCell>37 M</TableCell>
          <TableCell>Righty Two-Hander</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Novak D</TableCell>
          <TableCell>37 M</TableCell>
          <TableCell>Righty One-Hander</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
