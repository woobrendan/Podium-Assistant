import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import useEntries from '../../functions/useEntries';
import EditButton from './EditButton';


function createSingleDriverData(carNum, teamName, driver1, vehicle) {
  return { carNum, teamName, driver1, vehicle };
}

function createDoubleDriverData(carNum, teamName, driver1, driver2, vehicle) {
  return { carNum, teamName, driver1, driver2, vehicle };
}

const createThreeDriverData = (carNum, teamName, driver1, driver2, driver3, vehicle) => {
  return { carNum, teamName, driver1, driver2, driver3, vehicle };
}

function EntryDashboard() {

  const {vehicles} = useEntries();

  const tableRows = (entries) => {
    const allEntries = []
    for (const entry of entries) {
      if (!entry.driver2) {
        allEntries.push(createSingleDriverData(entry.number, entry.team, entry.driver1.name, entry.vehicle))
      } else if (entry.driver2 && !entry.driver3) {
        allEntries.push(createDoubleDriverData(entry.number, entry.team, entry.driver1.name, entry.driver2.name, entry.vehicle))
      } else {
        allEntries.push(createThreeDriverData(entry.number, entry.team, entry.driver1.name, entry.driver2.name, entry.driver3.name, entry.vehicle))
      }
    }
    return allEntries;
  }

  return (
    <div>
    <TableContainer component={Paper} className="entry-dashboard-table">
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right">Team Name</TableCell>
            <TableCell align="right">Driver 1</TableCell>
            <TableCell align="right">Driver 2</TableCell>
            <TableCell align="right">Driver 3</TableCell>
            <TableCell align="right">Vehicle</TableCell>
            <TableCell align="right">+/-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows(vehicles).map((entry, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{entry.carNum}</TableCell>
              <TableCell align="right">{entry.teamName}</TableCell>
              <TableCell align="right">{entry.driver1}</TableCell>
              {entry.driver2 
                ? <TableCell align="right">{entry.driver2}</TableCell>
                : <TableCell align="right">N/A</TableCell>
              }
              {entry.driver3 
                ? <TableCell align="right">{entry.driver3}</TableCell>
                : <TableCell align="right">N/A</TableCell>
              }
              <TableCell align="right">{entry.vehicle}</TableCell>
              <TableCell align="right"><EditButton/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default EntryDashboard
