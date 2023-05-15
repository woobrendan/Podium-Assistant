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
    const first = [
      "1st",
      firstPlace.number,
      firstPlace.driver1,
      firstPlace.team,
      firstPlace.vehicle,
      firstPlace.driver2 ? firstPlace.driver2 : null,
      firstPlace.driver3 ? firstPlace.driver3 : null,
    ];

    allResults.push(createDriverData(...first));

    if (secondPlace) {
      const second = [
        "2nd",
        secondPlace.number,
        secondPlace.driver1,
        secondPlace.team,
        secondPlace.vehicle,
        secondPlace.driver2 ? secondPlace.driver2 : null,
        secondPlace.driver3 ? secondPlace.driver3 : null,
      ];

      allResults.push(createDriverData(...second));
    }

    if (thirdPlace) {
      const third = [
        "3rd",
        thirdPlace.number,
        thirdPlace.driver1,
        thirdPlace.team,
        thirdPlace.vehicle,
        thirdPlace.driver2 ? thirdPlace.driver2 : null,
        thirdPlace.driver3 ? thirdPlace.driver3 : null,
      ];

      allResults.push(createDriverData(...third));
    }

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
