import {TableBody, TableCell, TableRow, TableHead} from '@mui/material';
import '../../Styling/result.scss';

function createDataTwoDriver(place, number, driver1, driver2, team, car) {
  return { place, number, driver1, driver2, team, car };
}

function createDataSingleDriver(place, number, driver1, team, car) {
  return { place, number, driver1, team, car };
}

const createDataThreeDriver = (place, number, driver1, driver2, driver3, team, car) => {
  return { place, number, driver1, driver2, driver3, team, car };
}

export default function ResultTableBbody(props) {

  const podium = props.results;
  const first = podium.firstPlace;
  const second = podium.secondPlace;
  const third = podium.thirdPlace;

  const checkPodium = () => {
    const allResults = [];
    if(!first.driver2) {

      allResults.push(createDataSingleDriver('1st', first.number, first.driver1.name || first.driver1, first.team, first.vehicle))

      if (second) {
        allResults.push(createDataSingleDriver('2nd', second.number, second.driver1.name || second.driver1, second.team, second.vehicle))
      } 
      if (third) {
        allResults.push(createDataSingleDriver('3rd', third.number, third.driver1.name || third.driver1, third.team, third.vehicle));
      }
      return allResults; 
    } 
      else if (first.driver2 && !first.driver3) {

      allResults.push(createDataTwoDriver('1st', first.number, first.driver1.name || first.driver1, first.driver2.name || first.driver2, first.team, first.vehicle));

      if (second) {
        allResults.push(createDataTwoDriver('2nd', second.number, second.driver1.name || second.driver1, second.driver2.name || second.driver2, second.team, second.vehicle));
      } 
      if (third) {
        allResults.push(createDataTwoDriver('3rd', third.number, third.driver1.name || third.driver1, third.driver2.name || third.driver2, third.team, third.vehicle));
      }
      return allResults;
    }
      else {
        allResults.push(createDataThreeDriver('1st', first.number, first.driver1.name || first.driver1, first.driver2.name || first.driver2, first.driver3.name || first.driver3, first.team, first.vehicle));

      if (second) {
        allResults.push(createDataThreeDriver('2nd', second.number, second.driver1.name || second.driver1, second.driver2.name || second.driver2, second.driver3.name || second.driver3, second.team, second.vehicle));
      } 
      if (third) {
        allResults.push(createDataThreeDriver('3rd', third.number, third.driver1.name || third.driver1, third.driver2.name || third.driver2, third.driver3.name || third.driver3, third.team, third.vehicle));
      }
      return allResults;
    }
  }

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={7} align='center'>{podium.class}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {checkPodium().map((row, index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.place}
            </TableCell>
            <TableCell align="right">{row.number}</TableCell>
            <TableCell align="right">{row.driver1}</TableCell>
            {row.driver2 && <TableCell align="right">{row.driver2}</TableCell>}
            {row.driver3 && <TableCell align="right">{row.driver3}</TableCell>}
            <TableCell align="right">{row.team}</TableCell>
            <TableCell align="right">{row.car}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  )
}

