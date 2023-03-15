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

const EntryTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entriesArray);

  return (
    <TableContainer
      sx={{ minWidth: 600, maxWidth: 1000 }}
      component={Paper}
      id="entry_manager"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Series</TableCell>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">Driver 1</TableCell>
            <TableCell align="right">Driver 2</TableCell>
            <TableCell align="right">Driver 3</TableCell>
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">Vehicle</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default EntryTable;
