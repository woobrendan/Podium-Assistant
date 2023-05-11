import { TableCell, TableHead, TableRow, TableBody } from "@mui/material";

const HardCharger = ({ hardCharger }) => {
  const { gain, entry } = hardCharger;
  let driverStr = `${entry.driver1.name}`;

  if (entry.driver2) {
    driverStr += ` & ${entry.driver2.name}`;
  }

  if (entry.driver3) {
    driverStr += ` & ${entry.driver3.name}`;
  }

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={2}>Driver</TableCell>
          <TableCell colSpan={3} align="center">
            E-Boost Hard Charger
          </TableCell>
          <TableCell align="right" colSpan={2}>
            Positions Gained
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row" colSpan={2}>
            {driverStr}
          </TableCell>
          <TableCell align="left" colSpan={1}>
            #{entry.number}
          </TableCell>
          <TableCell align="right" colSpan={1}>
            {entry.team}
          </TableCell>
          <TableCell align="right" colSpan={1}>
            {entry.vehicle}
          </TableCell>
          <TableCell align="right" colSpan={2}>
            +{gain}
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default HardCharger;
