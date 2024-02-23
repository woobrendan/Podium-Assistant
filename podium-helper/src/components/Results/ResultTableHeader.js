import React from "react";
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import ResultTableBody from "./ResultTableBody";
//import FastLapTable from "./FastLapTable";
import "../../Styling/result.scss";
import { dateToString } from "../../functions/dateFuncs";
import MultiHardHeader from "./hard_charger/MultiHardHeader";
import FastLapHeader from "./fast_lap/fastLapHeader";

const ResultTableHeader = ({ results }) => {
    const {
        event,
        series,
        date,
        fastLap1,
        fastLap2,
        fastLap3,
        result1,
        result2,
        result3,
        result4,
        hardCharge1,
        hardCharge2,
        hardCharge3,
    } = results;

    const { driver2, driver3 } = result1.firstPlace;
    const allHardCharger = { hardCharge1, hardCharge2, hardCharge3 };
    const allFastLaps = { fastLap1, fastLap2, fastLap3 };

    return (
        <TableContainer component={Paper} id="result-table-container">
            <Table>
                <TableHead className="result-table-head">
                    <TableRow>
                        <TableCell colSpan={driver3 ? 4 : 3} align="center">
                            {event}
                        </TableCell>
                        <TableCell colSpan={2} align="right">
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
                        <TableCell align="left">#</TableCell>
                        <TableCell align="right">Driver 1</TableCell>
                        <TableCell align="right">{driver2 ? "Driver2" : ""}</TableCell>
                        {driver3 && <TableCell align="right">Driver 3</TableCell>}
                        <TableCell align="right">Team</TableCell>
                        <TableCell align="right">Vehicle</TableCell>
                    </TableRow>
                </TableHead>
                <ResultTableBody results={results.result1} />
                {result2 && <ResultTableBody results={result2} />}
                {result3 && <ResultTableBody results={result3} />}
                {result4 && <ResultTableBody results={result4} />}
                {/*<FastLapTable fastLap={fastLap} series={series} />*/}
                <FastLapHeader allFastLaps={allFastLaps} />
                {hardCharge1 && <MultiHardHeader allHardCharger={allHardCharger} />}
            </Table>
        </TableContainer>
    );
};

export default ResultTableHeader;
