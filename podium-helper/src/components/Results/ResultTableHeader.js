import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResultTable from './ResultTable';
import FastLapTable from '../Podium_Results/FastLapTable';

function ResultTableHeader(props) {
  const podiums = props.results
  const podium1 = podiums.result1

  return (
    <div id='result-table-container'>
      <TableContainer sx={{ minWidth: 600, maxWidth: 1000 }}component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} align='center'>{podiums.event}</TableCell>
              <TableCell colSpan={2} align='center'>{podiums.series}</TableCell>
              <TableCell colSpan={1} align='center'>{podium1.date}</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell align="right">Car #</TableCell>
              <TableCell align="right">Driver 1</TableCell>
              {podium1.first_place.driver2 && <TableCell align="right">Driver 2</TableCell>}
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Vehicle</TableCell>
            </TableRow>
          </TableHead>
          <ResultTable results={podiums.result1}/>
          <ResultTable results={podiums.result2}/>
          <ResultTable results={podiums.result3}/>
          <FastLapTable fastLap={podiums.fastLap}/>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ResultTableHeader

