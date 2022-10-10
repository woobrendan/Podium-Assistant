import { TableCell, TableRow } from '@mui/material';
import EditButton from './EditButton';

function EntryRow(props) {

  const entry = props.entry;

  return (
    <TableRow
      key={props.index}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">{entry.carNum}</TableCell>
      <TableCell align="right">{entry.series}</TableCell>
      <TableCell align="right">{entry.teamName}</TableCell>
      <TableCell align="right">{entry.driver1}</TableCell>
      {entry.driver2 
        ? <TableCell align="right">{entry.driver2}</TableCell>
        : <TableCell align="right">-</TableCell>
      }
      {entry.driver3 
        ? <TableCell align="right">{entry.driver3}</TableCell>
        : <TableCell align="right">-</TableCell>
      }
      <TableCell align="right">{entry.vehicle}</TableCell>
      <TableCell align="right"><EditButton/></TableCell>
    </TableRow>
  )
}

export default EntryRow