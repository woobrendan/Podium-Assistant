import React from 'react';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'
import ResultTableBody from './ResultTableBody';
import FastLapTable from '../Podium_Results/FastLapTable';
import '../../Styling/result.scss';
import { dateToString } from '../../functions/helperFunc';

function ResultTableHeader(props) {
  const podiums = props.results;
  const podium1 = podiums.result1;
  const columnLength = (result) => {
    const first = result.firstPlace;
    if (first.driver3) return 4;
    else if (first.driver2 && !first.driver3) return 3;
    else return 2
  }

  return (
    <div id='result-table-container'>
      <TableContainer sx={{ minWidth: 600, maxWidth: 1000 }}component={Paper}>
        <Table aria-label="simple table">
          <TableHead className="result-table-head">
            <TableRow>
              <TableCell 
                colSpan={columnLength(podium1)} 
                align='center'
              >
                {podiums.event}
              </TableCell>
              <TableCell colSpan={1} align='center'>{podiums.series}</TableCell>
              <TableCell colSpan={2} align='center'>{dateToString(podiums.date)}</TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              <TableCell>Place</TableCell>
              <TableCell align="right">#</TableCell>
              <TableCell align="right">Driver 1</TableCell>
              {podium1.firstPlace.driver2 && <TableCell align="right">Driver 2</TableCell>}
              {podium1.firstPlace.driver3 && <TableCell align="right">Driver 3</TableCell>}
              <TableCell align="right">Team</TableCell>
              <TableCell align="right">Vehicle</TableCell>
            </TableRow>
          </TableHead>
          <ResultTableBody results={podiums.result1}/>
          {podiums.result2 && <ResultTableBody results={podiums.result2}/>}
          {podiums.result3 && <ResultTableBody results={podiums.result3}/>}
          {podiums.result4 && <ResultTableBody results={podiums.result4}/>}
          <FastLapTable fastLap={podiums.fastLap}/>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ResultTableHeader;

