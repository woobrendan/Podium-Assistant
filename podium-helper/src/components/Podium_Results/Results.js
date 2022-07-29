import {Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import '../../Styling/result.scss';


function createDataTwoDriver(place, number, driver1, driver2, team, car) {
  return { place, number, driver1, driver2, team, car };
}

function createDataSingleDriver(place, number, driver1, team, car) {
  return { place, number, driver1, team, car };
}

function Results(props) {
  const podium = props.result;
  const first = podium.first_place;
  const second = podium.second_place;
  const third = podium.third_place;

  const checkPodium = (podium) => {
    const allResults = [];
    if(!first.driver2) {
      allResults.push(createDataSingleDriver('1st', first.number, first.driver1.name, first.team, first.car));
      if (second) {
        allResults.push(createDataSingleDriver('2nd', second.number, second.driver1.name, second.team, second.car));
      } 
      if (third) {
        allResults.push(createDataSingleDriver('3rd', third.number, third.driver1.name, third.team, third.car));
      }
      return allResults; 
    } else {
      allResults.push(createDataTwoDriver('1st', first.number, first.driver1.name, first.driver2.name, first.team, first.car));
      if (second) {
        allResults.push(createDataTwoDriver('2nd', second.number, second.driver1.name, second.driver2.name, second.team, second.car));
      } 
      if (third) {
        allResults.push(createDataTwoDriver('3rd', third.number, third.driver1.name, third.driver2.name, third.team, third.car));
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
              {first.driver2 && <TableCell align="right">Driver 2</TableCell>}
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

