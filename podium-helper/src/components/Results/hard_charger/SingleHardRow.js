import { TableCell, TableRow } from "@mui/material";

const SingleHardRow = ({ hardCharger }) => {
    const { gain, entry, startPos } = hardCharger;

    let driverStr = `${entry.driver1.name}`;
    driverStr += entry.driver2 ? ` & ${entry.driver2.name}` : "";
    driverStr += entry.driver3 ? ` & ${entry.driver3.name}` : "";
    const finishPos = startPos - gain;

    const hardClass = hardCharger.class;
    return (
        <TableRow>
            <TableCell scope="row" colSpan={1}>
                {hardClass}
            </TableCell>
            <TableCell align="left" colSpan={hardClass ? 1 : 2}>
                {driverStr}
            </TableCell>
            <TableCell align="left" colSpan={1}>
                #{entry.number}
            </TableCell>

            <TableCell align="right" colSpan={1}>
                {startPos}
            </TableCell>
            <TableCell align="right" colSpan={1}>
                {finishPos}
            </TableCell>

            {entry.driver3 && (
                <TableCell align="right" colSpan={1}>
                    {}
                </TableCell>
            )}
            <TableCell align="right" colSpan={1}>
                +{gain}
            </TableCell>
        </TableRow>
    );
};

export default SingleHardRow;
