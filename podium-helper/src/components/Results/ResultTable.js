import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const result = {
  result1: {
    class: "Pro",
    event: "VIR",
    first_place:{
      team: "K-Pax",
      vehicle: "Lambo",
      number: "1",
      driver1: {
        name: "Andrea",
      },
      driver2: {
        name: "Misha"
      }
    },
    second_place:{},
    third_place: {}
  },
  result2: {}
}

function createDataTwoDriver(place, number, driver1, driver2, team, car) {
  return { place, number, driver1, driver2, team, car };
}

function createDataSingleDriver(place, number, driver1, team, car) {
  return { place, number, driver1, team, car };
}

function ResultTable(props) {

  const podium = props.results;
  const first = podium.first_place;
  const sceond = podium.second_place;
  const third = podium.third_place;

  const checkPodium = (podium) => {
    if(!podium.first_place.driver2) {
      if (!podium.third && podium.second) {
        return [
          createDataSingleDriver('First Place', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.team, podium.first_place.vehicle),
          createDataSingleDriver('Second Place', podium.second_place.number, podium.second_place.driver1.name, podium.second_place.team, podium.second_place.vehicle)
        ]
      } else if (!podium.second_place) {
          return [createDataSingleDriver('First Place', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.team, podium.first_place.vehicle)]
      } else {
        return [
          createDataSingleDriver('First Place', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.team, podium.first_place.vehicle),
          createDataSingleDriver('Second Place', podium.second_place.number, podium.second_place.driver1.name, podium.second_place.team, podium.second_place.vehicle),
          createDataSingleDriver('Third Place', podium.third_place.number, podium.third_place.driver1.name, podium.third_place.team, podium.third_place.vehicle)
        ]
      }
    } else {
      if (!podium.third_place && podium.second_place) {
        return [
          createDataTwoDriver('First Place', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.driver2.name, podium.first_place.team, podium.first_place.vehicle),
          createDataTwoDriver('Second Place', podium.second_place.number, podium.second_place.driver1.name, podium.second_place.driver2.name, podium.second_place.team, podium.second_place.vehicle)
        ]
      } else if (!podium.second_place) {
          return [createDataTwoDriver('First Place', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.driver2.name, podium.first_place.team, podium.first_place.vehicle)]
      } else {
        return [
          createDataTwoDriver('First Place', podium.first_place.number, podium.first_place.driver1.name, podium.first_place.driver2.name, podium.first_place.team, podium.first_place.vehicle),
          createDataTwoDriver('Second Place', podium.second_place.number, podium.second_place.driver1.name, podium.second_place.driver2.name, podium.second_place.team, podium.second_place.vehicle),
          createDataTwoDriver('Third Place', podium.third_place.number, podium.third_place.driver1.name, podium.third_place.driver2.name,  podium.third_place.team, podium.third_place.vehicle)
        ]
      }
    }
  }
  return (
    <div>
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

export default ResultTable
