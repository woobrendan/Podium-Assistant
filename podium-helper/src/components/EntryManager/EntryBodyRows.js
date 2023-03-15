import { TableBody, TableRow, TableCell } from "@mui/material";

const EntryBodyRows = ({ entries }) => {
  const entryRows = entries.map((entry, index) => (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {entry.series}
      </TableCell>
      <TableCell align="right">{entry.number}</TableCell>
      <TableCell align="right">{entry.team}</TableCell>
      <TableCell align="right">{entry.driver1.name}</TableCell>
      <TableCell align="right">
        {entry.driver2 ? entry.driver2.name : ""}
      </TableCell>
      <TableCell align="right">
        {entry.driver3 ? entry.driver3.name : ""}
      </TableCell>
      <TableCell align="right">{entry.vehicle}</TableCell>
      <TableCell align="right">Edit</TableCell>
    </TableRow>
  ));
  return <TableBody>{entryRows}</TableBody>;
};

export default EntryBodyRows;
