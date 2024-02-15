import { TableCell, TableHead, TableRow, TableBody } from "@mui/material";
import { grCup } from "../../functions/helperFunc";

const HardCharger = ({ hardCharger }) => {
    const { gain, entry, startPos } = hardCharger;
    const { series, number, team, vehicle } = entry;

    let driverStr = `${entry.driver1.name}`;
    driverStr += entry.driver2 ? ` & ${entry.driver2.name}` : "";
    driverStr += entry.driver3 ? ` & ${entry.driver3.name}` : "";
    const finishPos = startPos - gain;

    const hardClass = hardCharger.class;

    return (
        <>
            <TableHead className="table_header">
                <TableRow>
                    <TableCell colSpan={entry.driver3 ? 7 : 6} align="center">
                        {series === grCup ? "Hard Charger" : "E-Boost Hard Charger"}
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={hardClass ? 1 : 2}>Driver</TableCell>
                    {hardClass && <TableCell colSpan={1}>Class</TableCell>}
                    {!startPos ? (
                        <>
                            <TableCell colSpan={2}>Team</TableCell>
                            <TableCell colSpan={1}>Vehicle</TableCell>
                        </>
                    ) : (
                        <>
                            <TableCell align="left" colSpan={1}>
                                Car #
                            </TableCell>
                            <TableCell align="right" colSpan={1}>
                                Start Position
                            </TableCell>
                            <TableCell align="right" colSpan={1}>
                                Finish Position
                            </TableCell>
                        </>
                    )}
                    <TableCell align="right" colSpan={entry.driver3 ? 2 : 1}>
                        Positions Gained
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell component="th" scope="row" colSpan={hardClass ? 1 : 2}>
                        {driverStr}
                    </TableCell>
                    <TableCell align="left" colSpan={1}>
                        {hardClass}
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
        </>
    );
};

export default HardCharger;
