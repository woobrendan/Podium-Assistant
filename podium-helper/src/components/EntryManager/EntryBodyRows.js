import { TableBody, TableRow, TableCell } from "@mui/material";

const EntryBodyRows = ({ entries }) => {
  const shortenName = (series) => {
    switch (series) {
      case "GT World Challenge America":
        return "GTWCA";
      case "GT America":
        return "GTA";
      case "Pirelli GT4 America":
        return "PGT4A";
      case "TC America":
        return "TCAM";
      case "Intercontinental GT Challenge":
        return "IGTC";
      case "Toyota GR Cup":
        return "GR Cup";
      default:
        return "SRO";
    }
  };

  const sortEntries = () => {
    const entryArr = {};
    entries.forEach((entry) => {
      const series = entry.series;
      entryArr[series]
        ? entryArr[series].push(entry)
        : (entryArr[series] = [entry]);
    });
    return entryArr;
  };

  return (
    <TableBody>
      {entries.map((entry, index) => (
        <TableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {shortenName(entry.series)}
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
      ))}
    </TableBody>
  );
};

export default EntryBodyRows;
