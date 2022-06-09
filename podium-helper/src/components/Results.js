import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(place, number, driver1, driver2, car) {
  return { place, number, driver1, driver2, car };
}

function Results(props) {
  const podium = props.result
  const rows = [
    createData('First Place', podium.first.number, podium.first.driver1.name, podium.first.driver2.name, podium.first.car),
    createData('Second Place', podium.second.number, podium.second.driver1.name, podium.second.driver2.name, podium.second.car),
    createData('Third Place', podium.third.number, podium.third.driver1.name, podium.third.driver2.name, podium.third.car)
  ];

  return (
    <div>
      <Typography variant="h2" gutterBottom component="div">
        Race Results - {podium.class}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell align="right">Car #</TableCell>
              <TableCell align="right">Driver 1</TableCell>
              <TableCell align="right">Driver 2</TableCell>
              <TableCell align="right">Vehicle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.place}
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.driver1}</TableCell>
                <TableCell align="right">{row.driver2}</TableCell>
                <TableCell align="right">{row.car}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default Results

