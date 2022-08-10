import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'

function createData(name, nationality, rating) {
  return { name, nationality, rating };
}

function DriverTable(props) {
  const tableRows = (drivers) => {
    if (!drivers.driver2) {
      return [
        createData(drivers.driver1.name, drivers.driver1.nationality, drivers.driver1.rating)
      ]
    } else {
      return  [
        createData(drivers.driver1.name, drivers.driver1.nationality, drivers.driver1.rating),
        createData(drivers.driver2.name, drivers.driver2.nationality, drivers.driver2.rating)
      ]
    }
  }

  return (
    <div className="entry-driver-details" id={`card-driver-${props.index+1}`} >
      <TableContainer component={Paper} className="driver-table">
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
    </div>
  );

}

export default DriverTable
