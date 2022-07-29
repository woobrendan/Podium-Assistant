import {TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import '../../Styling/result.scss';

function createFastLap(driver, lapTime) {
  return { driver, lapTime };
}

function FastLapTable(props) {
  const fastLap = props.fastLap;
  const rows = [createFastLap(fastLap.driver, fastLap.laptime)]
      
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={6} align='center'>CrowdStrike Fast Lap</TableCell>
        </TableRow>
      </TableHead>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3}>Driver</TableCell>
          <TableCell align="right" colSpan={3}>Lap Time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.driver}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row" colSpan={3}>{row.driver}</TableCell>
            <TableCell align="right" colSpan={3}>{row.lapTime}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}

export default FastLapTable;

