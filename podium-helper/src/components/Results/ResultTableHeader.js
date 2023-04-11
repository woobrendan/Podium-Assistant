import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ResultTableBody from "./ResultTableBody";
import FastLapTable from "../Podium_Results/FastLapTable";
import "../../Styling/result.scss";
import { dateToString } from "../../functions/helperFunc";

const ResultTableHeader = ({ results }) => {
  const podium1 = results.result1;

  return (
    <TableContainer
      sx={{ minWidth: 600, maxWidth: 1000 }}
      component={Paper}
      id="result-table-container"
    >
      <Table aria-label="simple table">
        <TableHead className="result-table-head">
          <TableRow>
            <TableCell
              colSpan={podium1.firstPlace.driver3 ? 4 : 3}
              align="center"
            >
              {results.event}
            </TableCell>
            <TableCell colSpan={1} align="right">
              {results.series}
            </TableCell>
            <TableCell colSpan={2} align="right">
              {dateToString(results.date)}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">Driver 1</TableCell>
            {podium1.firstPlace.driver2 && (
              <TableCell align="right">Driver 2</TableCell>
            )}
            {podium1.firstPlace.driver3 && (
              <TableCell align="right">Driver 3</TableCell>
            )}
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">Vehicle</TableCell>
          </TableRow>
        </TableHead>
        <ResultTableBody results={results.result1} />
        {results.result2 && <ResultTableBody results={results.result2} />}
        {results.result3 && <ResultTableBody results={results.result3} />}
        {results.result4 && <ResultTableBody results={results.result4} />}
        <FastLapTable fastLap={results.fastLap} />
      </Table>
    </TableContainer>
  );
};

export default ResultTableHeader;
