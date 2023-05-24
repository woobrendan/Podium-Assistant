import { TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import { grCup } from "../../functions/helperFunc";

const HardCharger = ({ hardCharger }) => {
  const { gain, entry } = hardCharger;
  const { series, number, team, vehicle, startPos } = entry;

  let driverStr = `${entry.driver1.name}`;
  driverStr += entry.driver2 ? ` & ${entry.driver2.name}` : "";
  driverStr += entry.driver3 ? ` & ${entry.driver3.name}` : "";

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>Driver</TableCell>
          <TableCell colSpan={2} align="center">
            {series === grCup ? "Hard Charger" : "E-Boost Hard Charger"}
          </TableCell>
          <TableCell align="right" colSpan={1}>
            Start Position
          </TableCell>
          <TableCell align="right" colSpan={1}>
            Positions Gained
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" colSpan={1}>
            {driverStr}
          </TableCell>
          <TableCell align="left" colSpan={1}>
            #{number}
          </TableCell>
          <TableCell align="right" colSpan={1}>
            {team}
          </TableCell>
          <TableCell align="right" colSpan={1}>
            {vehicle}
          </TableCell>
          {startPos && (
            <TableCell align="right" colSpan={1}>
              {startPos}
            </TableCell>
          )}
          <TableCell align="right" colSpan={1}>
            +{gain}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default HardCharger;
