import React from 'react'
import useEntries from '../../useEntries';


function createSingleDriverData(carNum, teamName, driver1, vehicle) {
  return { carNum, teamName, driver1, vehicle };
}

function createDoubleDriverData(carNum, teamName, driver1, driver2, vehicle) {
  return { carNum, teamName, driver1, driver2, vehicle };
}

function entry_dashboard() {
  const {vehicles} = useEntries();

  const tableRows = (entry) => {
    if (!entry.driver2) {
      return [
        createSingleDriverData(entry.number, entry.team, entry.driver1.name, entry.vehicle)
      ]
    } else {
      return [
        createDoubleDriverData(entry.number, entry.team, entry.driver1.name, entry.driver2.name, entry.vehicle)
      ]
    }
  }

  return (
    <>
    <TableContainer component={Paper} className="entry-dashboard-table">
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Team Name</TableCell>
            <TableCell align="right">Driver 1</TableCell>
            <TableCell align="right">Driver 2</TableCell>
            <TableCell align="right">Vehicle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows(vehicles).map((entry, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {entry.carNum}
              </TableCell>
              <TableCell align="right">{entry.teamName}</TableCell>
              <TableCell colSpan={entry.driver2 ? 1 : 2} align="right">{entry.driver1}</TableCell>
              {entry.driver2 && <TableCell align="right">{entry.driver2}</TableCell>}
              <TableCell align="right">{entry.vehicle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default entry_dashboard
