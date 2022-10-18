import { TableCell, TableRow } from '@mui/material';
import EditButton from './EditButton';
import {useState} from 'react'
import EditEntryRow from './editEntryRow';

function EntryRow(props) {
  const [editStatus, setEditStatus] = useState(false)
  const entry = props.entry;
  const getEditStatus = (status) => {
    status ? setEditStatus(true) : setEditStatus(false)
  }

  return (
    <>
      {!editStatus && <TableRow
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
        <TableCell align="right">
          <EditButton getEditStatus={getEditStatus} editStatus={editStatus}/>
        </TableCell>
      </TableRow>}
      {editStatus && <EditEntryRow entry={entry} getEditStatus={getEditStatus}/>}
    </>
  )
}

export default EntryRow