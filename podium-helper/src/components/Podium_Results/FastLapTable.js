import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "../../Styling/result.scss";

const FastLapTable = ({ fastLap }) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={7} align="center">
            CrowdStrike Fast Lap
          </TableCell>
        </TableRow>
      </TableHead>
      <TableHead>
        <TableRow>
          <TableCell colSpan={3}>Driver</TableCell>
          <TableCell align="right" colSpan={4}>
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
