import { TableCell, TableRow, TableBody } from "@mui/material";

const SingleHardRrow = () => {
    return (
        <TableBody>
            <TableRow>
                <TableCell scope="row" colSpan={1}>
                    {hardClass}
                </TableCell>
                <TableCell align="left" colSpan={hardClass ? 1 : 2}>
                    {driverStr}
                </TableCell>
                <TableCell align="left" colSpan={1}>
                    #{number}
                </TableCell>

                {startPos ? (
                    <>
                        <TableCell align="right" colSpan={1}>
                            {startPos}
                        </TableCell>
                        <TableCell align="right" colSpan={1}>
                            {finishPos}
                        </TableCell>
                    </>
                ) : (
                    <>
                        <TableCell align="left" colSpan={2}>
                            {team}
                        </TableCell>
                        <TableCell align="left" colSpan={1}>
                            {vehicle}
                        </TableCell>
                    </>
                )}
                {entry.driver3 && (
                    <TableCell align="right" colSpan={1}>
                        {}
                    </TableCell>
                )}
                <TableCell align="right" colSpan={1}>
                    +{gain}
                </TableCell>
            </TableRow>
        </TableBody>
    );
};

export default SingleHardRow;
