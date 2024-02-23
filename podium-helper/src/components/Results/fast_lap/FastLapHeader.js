import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { grCup } from "../../../functions/helperFunc";

const FastLapHeader = ({ allFastLaps }) => {
    const { fastLap1, fastLap2, fastLap3 } = allFastLaps;
    const { entry } = fastLap1;
    const { series } = entry;
    const fastLapVals = [fastLap1, fastLap2, fastLap3].filter(Boolean);

    //const mappedFastLapRows = fastLapVals.map()

    return (
        <>
            <TableHead className="table_header">
                <TableRow>
                    <TableCell colSpan={entry.driver3 ? 7 : 6} align="center">
                        {series === grCup ? "Fast Lap" : "CrowdStrike Fast Lap"}
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <TableCell colSpan={1}>Class</TableCell>
                    <TableCell colSpan={1}>Driver</TableCell>
                    <TableCell colSpan={1}>Car #</TableCell>
                    <TableCell align="right" colSpan={1}>
                        Start Position
                    </TableCell>
                    <TableCell align="right" colSpan={1}>
                        Finish Position
                    </TableCell>

                    <TableCell align="right" colSpan={entry.driver3 ? 2 : 1}>
                        Positions Gained
                    </TableCell>
                </TableRow>
            </TableHead>
            {/*<TableBody>{mappedHardRows}</TableBody>*/}
        </>
    );
};

export default FastLapHeader;
