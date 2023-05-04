import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(name, nationality, rating) {
  return { name, nationality, rating };
}

function DriverTable(props) {
  const tableRows = (drivers) => {
    const data = [
      createData(
        drivers.driver1.name,
        drivers.driver1.nationality,
        drivers.driver1.rating,
      ),
    ];
    if (drivers.driver2) {
      data.push(
        createData(
          drivers.driver2.name,
          drivers.driver2.nationality,
          drivers.driver2.rating,
        ),
      );
    }
    if (drivers.driver3) {
      data.push(
        createData(
          drivers.driver3.name,
          drivers.driver3.nationality,
          drivers.driver3.rating,
        ),
      );
    }
    return data;
  };

  return (
    <TableContainer component={Paper} className="driver-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Driver</TableCell>
            <TableCell align="right">Nat.</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows(props.drivers).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DriverTable;
