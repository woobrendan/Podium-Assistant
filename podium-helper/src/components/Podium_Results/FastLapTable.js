import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../../Styling/result.scss";

const FastLapTable = ({ fastLap }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>Driver</TableCell>
          <TableCell colSpan={3} align="center">
            CrowdStrike Fast Lap
          </TableCell>
          <TableCell align="right" colSpan={2}>
            Lap Time
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" colSpan={3}>
            {fastLap.driver}
          </TableCell>
          <TableCell align="right" colSpan={4}>
            {fastLap.laptime}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default FastLapTable;
