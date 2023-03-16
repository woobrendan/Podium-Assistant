import { TableBody, TableRow, TableCell, Button } from "@mui/material";
import { useState } from "react";
import { shortenName } from "../../functions/helperFunc";

const EntryBodyRows = ({ entries }) => {
  const [showModal, setShowModal] = useState(false);

  const sortEntries = (entries) => {
    const entryObj = {};
    const entryArr = [];
    entries.forEach((entry) => {
      const series = entry.series;
      entryObj[series]
        ? entryObj[series].push(entry)
        : (entryObj[series] = [entry]);
    });

    for (const series in entryObj) {
      const sorted = entryObj[series].sort((a, b) => a.number - b.number);
      if (series !== "GT World Challenge America") entryArr.push(...sorted);
    }
    return entryObj["GT World Challenge America"]
      ? [...entryObj["GT World Challenge America"], ...entryArr]
      : entryArr;
  };

  return (
    <TableBody>
      {sortEntries(entries).map((entry, index) => (
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
          <TableCell align="right">
            <Button
              variant="contained"
              onClick={() => setShowModal(!showModal)}
            >
              Edit
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default EntryBodyRows;
