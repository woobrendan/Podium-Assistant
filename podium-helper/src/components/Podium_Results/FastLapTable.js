import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Styling/result.scss';

function createFastLap(driver, lapTime) {
  return { driver, lapTime };
}

function FastLapTable(props) {
  const fastLap = props.fastLap;
  const rows = [createFastLap(fastLap.driver, fastLap.lapTime)]
      
  return (
    <div className='result-table-container'>
      <Typography variant="h5" gutterBottom component="div">
        CrowdStrike Fast Lap
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Driver</TableCell>
              <TableCell align="right">Lap Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.driver}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.driver}</TableCell>
                <TableCell align="right">{row.lapTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default FastLapTable;

