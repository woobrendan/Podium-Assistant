import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
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
  const rows = [
    createData('First Place', props.result.podium1.first.number, props.result.podium1.first.driver1.name, props.result.podium1.first.driver2.name, props.result.podium1.first.car),
    createData('Second Place', props.result.podium1.second.number, props.result.podium1.second.driver1.name, props.result.podium1.second.driver2.name, props.result.podium1.second.car),
    createData('Third Place', props.result.podium1.third.number, props.result.podium1.third.driver1.name, props.result.podium1.third.driver2.name, props.result.podium1.third.car)
  ];
  return (
    <div>
      <Typography variant="h2" gutterBottom component="div">
        Race Results - {props.result.podium1.series}
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

