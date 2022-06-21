import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../Styling/result.scss';


function createDataTwoDriver(place, number, driver1, driver2, team, car) {
  return { place, number, driver1, driver2, team, car };
}

function createDataSingleDriver(place, number, driver1, team, car) {
  return { place, number, driver1, team, car };
}

function Results(props) {
  const podium = props.result
  const checkPodium = (podium) => {
    if(!podium.first.driver2) {
      if (!podium.third && podium.second) {
        return [
          createDataSingleDriver('First Place', podium.first.number, podium.first.driver1.name, podium.first.team, podium.first.car),
          createDataSingleDriver('Second Place', podium.second.number, podium.second.driver1.name, podium.second.team, podium.second.car)
        ]
      } else if (!podium.second) {
          return [createDataSingleDriver('First Place', podium.first.number, podium.first.driver1.name, podium.first.team, podium.first.car)]
      } else {
        return [
          createDataSingleDriver('First Place', podium.first.number, podium.first.driver1.name, podium.first.team, podium.first.car),
          createDataSingleDriver('Second Place', podium.second.number, podium.second.driver1.name, podium.second.team, podium.second.car),
          createDataSingleDriver('Third Place', podium.third.number, podium.third.driver1.name, podium.third.team, podium.third.car)
        ]
      }
    } else {
      if (!podium.third && podium.second) {
        return [
          createDataTwoDriver('First Place', podium.first.number, podium.first.driver1.name, podium.first.driver2.name, podium.first.team, podium.first.car),
          createDataTwoDriver('Second Place', podium.second.number, podium.second.driver1.name, podium.second.driver2.name, podium.second.team, podium.second.car)
        ]
      } else if (!podium.second) {
          return [createDataTwoDriver('First Place', podium.first.number, podium.first.driver1.name, podium.first.driver2.name, podium.first.team, podium.first.car)]
      } else {
        return [
          createDataTwoDriver('First Place', podium.first.number, podium.first.driver1.name, podium.first.driver2.name, podium.first.team, podium.first.car),
          createDataTwoDriver('Second Place', podium.second.number, podium.second.driver1.name, podium.second.driver2.name, podium.second.team, podium.second.car),
          createDataTwoDriver('Third Place', podium.third.number, podium.third.driver1.name, podium.third.driver2.name, podium.third.team, podium.third.car)
        ]
      }
    }
  }

  return (
    <div className='result-table-container'>
      <Typography variant="h5" gutterBottom component="div">
        Results - {podium.class}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell align="right">Car #</TableCell>
              <TableCell align="right">Driver 1</TableCell>
              {podium.first.driver2 && <TableCell align="right">Driver 2</TableCell>}
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Vehicle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkPodium(podium).map((row) => (
              <TableRow
                key={row.number}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.place}
                </TableCell>
                <TableCell align="right">{row.number}</TableCell>
                <TableCell align="right">{row.driver1}</TableCell>
                {row.driver2 && <TableCell align="right">{row.driver2}</TableCell>}
                <TableCell align="right">{row.team}</TableCell>
                <TableCell align="right">{row.car}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  )
}

export default Results;

