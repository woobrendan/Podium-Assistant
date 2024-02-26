import { TableCell, TableRow } from "@mui/material";

const SingleFastLap = ({ fastLap }) => {
    const { laptime, entry } = fastLap;
    const { driver1, driver2, driver3 } = entry;

    const drivers = [driver1, driver2, driver3].filter(Boolean).map((driver) => driver.name);
    const driverStr = drivers.join(" & ");

    return (
        <TableRow>
            <TableCell>{driverStr}</TableCell>
        </TableRow>
    );
};

export default SingleFastLap;
