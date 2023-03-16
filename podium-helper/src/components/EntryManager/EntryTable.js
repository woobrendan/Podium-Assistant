import { useEffect } from "react";
import { fetchEntry } from "../../store/entryActions";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EntryBodyRows from "./EntryBodyRows";
import "../../Styling/entryManager.scss";

const EntryTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entriesArray);

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
    <section id="entry_manager">
      <TableContainer sx={{ minWidth: 600, maxWidth: 1000 }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Series</TableCell>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Driver 1</TableCell>
              <TableCell align="right">Driver 2</TableCell>
              <TableCell align="right">Driver 3</TableCell>
              <TableCell align="right">Vehicle</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>
          {sortEntries(entries).map((entry, index) => (
            <EntryBodyRows entry={entry} key={index} />
          ))}
        </Table>
      </TableContainer>
    </section>
  );
};

export default EntryTable;
