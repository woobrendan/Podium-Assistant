import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../../Styling/result.scss';

function createDataTwoDriver(place, number, driver1, driver2, team, car) {
  return { place, number, driver1, driver2, team, car };
}

function createDataSingleDriver(place, number, driver1, team, car) {
  return { place, number, driver1, team, car };
}

function ResultTable(props) {

  const podium = props.results;
  const first = podium.first_place;
  const second = podium.second_place;
  const third = podium.third_place;

  const checkPodium = (podium) => {
    if(!first.driver2) {
      if (!podium.third && podium.second) {
        return [
          createDataSingleDriver('First Place', first.number, first.driver1.name, first.team, first.vehicle),
          createDataSingleDriver('Second Place', second.number, second.driver1.name, second.team, second.vehicle)
        ]
      } else if (!second) {
          return [createDataSingleDriver('First Place', first.number, first.driver1.name, first.team, first.vehicle)]
      } else {
        return [
          createDataSingleDriver('First Place', first.number, first.driver1.name, first.team, first.vehicle),
          createDataSingleDriver('Second Place', second.number, second.driver1.name, second.team, second.vehicle),
          createDataSingleDriver('Third Place', third.number, third.driver1.name, third.team, third.vehicle)
        ]
      }
    } else {
      if (!third && second) {
        return [
          createDataTwoDriver('First Place', first.number, first.driver1.name, first.driver2.name, first.team, first.vehicle),
          createDataTwoDriver('Second Place', second.number, second.driver1.name, second.driver2.name, second.team, second.vehicle)
        ]
      } else if (!second) {
          return [createDataTwoDriver('First Place', first.number, first.driver1.name, first.driver2.name, first.team, first.vehicle)]
      } else {
        return [
          createDataTwoDriver('First Place', first.number, first.driver1.name, first.driver2.name, first.team, first.vehicle),
          createDataTwoDriver('Second Place', second.number, second.driver1.name, second.driver2.name, second.team, second.vehicle),
          createDataTwoDriver('Third Place', third.number, third.driver1.name, third.driver2.name,  third.team, third.vehicle)
        ]
      }
    }
  }
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={6} align='center'>{podium.class}</TableCell>
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
    </>
  )
}

export default ResultTable
