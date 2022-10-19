import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import EntryRow from './EntryRow';
import AllEditTable from './AllEditTable';

function createSingleDriverData(carNum, series, teamName, driver1, vehicle) {
  return { carNum, series, teamName, driver1, vehicle };
}

function createDoubleDriverData(carNum, series, teamName, driver1, driver2, vehicle) {
  return { carNum, series, teamName, driver1, driver2, vehicle };
}

const createThreeDriverData = (carNum, series, teamName, driver1, driver2, driver3, vehicle) => {
  return { carNum, series, teamName, driver1, driver2, driver3, vehicle };
}

function EntryRows(props) {

  const tableRows = (entries) => {
    const allEntries = []
    for (const entry of entries) {
      if (!entry.driver2) {
        allEntries.push(createSingleDriverData(entry.number, entry.series, entry.team, entry.driver1.name, entry.vehicle))
      } else if (entry.driver2 && !entry.driver3) {
        allEntries.push(createDoubleDriverData(entry.number, entry.series, entry.team, entry.driver1.name, entry.driver2.name, entry.vehicle))
      } else {
        allEntries.push(createThreeDriverData(entry.number, entry.series, entry.team, entry.driver1.name, entry.driver2.name, entry.driver3.name, entry.vehicle))
      }
    }
    return allEntries;
  }

  return (
    // <TableContainer component={Paper} className="entry-dashboard-table">
    //   <Table sx={{ minWidth: 300 }} aria-label="simple table">
    //     <TableHead>
    //       <TableRow id="entry-manager-head">
    //         <TableCell>Number</TableCell>
    //         <TableCell align="right">Series</TableCell>
    //         <TableCell align="right">Team Name</TableCell>
    //         <TableCell align="right">Driver 1</TableCell>
    //         <TableCell align="right">Driver 2</TableCell>
    //         <TableCell align="right">Driver 3</TableCell>
    //         <TableCell align="right">Vehicle</TableCell>
    //         <TableCell align="right">+/-</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {tableRows(props.filteredEntries).map((entry, index) => (
    //         <EntryRow entry={entry} key={index}/> 
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
    <AllEditTable allEntries={tableRows(props.filteredEntries)} />
  )
}

export default EntryRows
