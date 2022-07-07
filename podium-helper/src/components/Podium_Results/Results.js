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
    const allResults = [];
    if(!podium.first_place.driver2) {
      allResults.push(
        createDataSingleDriver('1st', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.team, podium.first_place.car))
      if (podium.second_place) {
        allResults.push(
          createDataSingleDriver('2nd', podium.second_place.number, podium.second_place.driver1.name, podium.second_place.team, podium.second_place.car))
      } 
      if (podium.third_place) {
          allResults.push(createDataSingleDriver('3rd', podium.third_place.number, podium.third_place.driver1.name, podium.third_place.team, podium.third_place.car))
      }
      return allResults; 
    } else {
      allResults.push(
        createDataTwoDriver('1st', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.driver2.name, podium.first_place.team, podium.first_place.car))
      if (podium.second_place) {
        allResults.push(
          createDataTwoDriver('2nd', podium.second_place.number, podium.second_place.driver1.name, podium.second_place.driver2.name, podium.second_place.team, podium.second_place.car))
      } 
      if (podium.third_place) {
          allResults.push(createDataTwoDriver('3rd', podium.third_place.number, podium.third_place.driver1.name, podium.third_place.driver2.name, podium.third_place.team, podium.third_place.car))
      }
      return allResults;
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
              {podium.first_place.driver2 && <TableCell align="right">Driver 2</TableCell>}
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

