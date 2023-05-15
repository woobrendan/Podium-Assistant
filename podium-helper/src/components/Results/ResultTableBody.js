import { TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import "../../Styling/result.scss";

const createDriverData = (
  place,
  number,
  driver1,
  team,
  car,
  driver2 = null,
  driver3 = null,
) => {
  const data = { place, number, driver1, team, car };
  if (driver2) {
    data.driver2 = driver2;
  }

  if (driver3) {
    data.driver3 = driver3;
  }

  return data;
};

const ResultTableBody = ({ results }) => {
  const { firstPlace, secondPlace, thirdPlace } = results;

  const checkPodium = () => {
    const allResults = [];
    const getPlaceString = (num) => {
      if (num === 0) return "1st";
      if (num === 1) return "2nd";
      if (num === 2) return "3rd";
    };

    const placements = [firstPlace, secondPlace, thirdPlace];
    placements.forEach((placement, index) => {
      if (placement) {
        const placementInfo = [
          getPlaceString(index),
          placement.number,
          placement.driver1,
          placement.team,
          placement.vehicle,
          placement.driver2 ? placement.driver2 : null,
          placement.driver3 ? placement.driver3 : null,
        ];
        allResults.push(createDriverData(...placementInfo));
      }
    });

    return allResults;
  };

  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell colSpan={7} align="center">
            {results.class}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {checkPodium().map((row, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.place}
            </TableCell>
            <TableCell align="right">{row.number}</TableCell>
            <TableCell align="right">{row.driver1}</TableCell>
            {row.driver2 && <TableCell align="right">{row.driver2}</TableCell>}
            {row.driver3 ? (
              <TableCell align="right">{row.driver3}</TableCell>
            ) : (
              <TableCell align="right">{}</TableCell>
            )}
            <TableCell align="right">{row.team}</TableCell>
            <TableCell align="right">{row.car}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default ResultTableBody;
