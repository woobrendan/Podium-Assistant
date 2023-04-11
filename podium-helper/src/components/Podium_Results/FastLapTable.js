import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../../Styling/result.scss";
import { grCup } from "../../functions/helperFunc";

const FastLapTable = ({ fastLap, series }) => {
  const fastTitle = series === grCup ? "Fast Lap" : "CrowdStrike Fast Lap";
  const { driver, laptime } = fastLap;
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>Driver</TableCell>
          <TableCell colSpan={3} align="center">
            {fastTitle}
          </TableCell>
          <TableCell align="right" colSpan={2}>
            Lap Time
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" colSpan={3}>
            {driver}
          </TableCell>
          <TableCell align="right" colSpan={4}>
            {laptime}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default FastLapTable;
