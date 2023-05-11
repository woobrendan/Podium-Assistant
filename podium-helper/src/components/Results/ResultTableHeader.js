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
import HardCharger from "../Podium_Results/HardCharger";

const ResultTableHeader = ({ results }) => {
  const {
    event,
    series,
    date,
    fastLap,
    result1,
    result2,
    result3,
    result4,
    hardCharger,
  } = results;

  return (
    <TableContainer component={Paper} id="result-table-container">
      <Table>
        <TableHead className="result-table-head">
          <TableRow>
            <TableCell
              colSpan={result1.firstPlace.driver3 ? 4 : 3}
              align="center"
            >
              {event}
            </TableCell>
            <TableCell colSpan={2} align="center">
              {series}
            </TableCell>
            <TableCell colSpan={2} align="right">
              {dateToString(date)}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableHead>
          <TableRow>
            <TableCell>Place</TableCell>
            <TableCell align="right">#</TableCell>
            <TableCell align="right">Driver 1</TableCell>
            {result1.firstPlace.driver2 && (
              <TableCell align="right">Driver 2</TableCell>
            )}
            {result1.firstPlace.driver3 ? (
              <TableCell align="right">Driver 3</TableCell>
            ) : (
              <TableCell align="right"></TableCell>
            )}
            <TableCell align="right">Team</TableCell>
            <TableCell align="right">Vehicle</TableCell>
          </TableRow>
        </TableHead>
        <ResultTableBody results={results.result1} />
        {result2 && <ResultTableBody results={result2} />}
        {result3 && <ResultTableBody results={result3} />}
        {result4 && <ResultTableBody results={result4} />}
        <FastLapTable fastLap={fastLap} series={series} />
        {hardCharger && <HardCharger hardCharger={hardCharger} />}
      </Table>
    </TableContainer>
  );
};

export default ResultTableHeader;
