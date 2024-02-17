import { TableCell, TableHead, TableRow } from "@mui/material";
import { grCup } from "../../../functions/helperFunc";

const MultiHardHeader = ({ allHardCharger }) => {
    const { hardCharge1, hardCharge2, hardCharge3 } = allHardCharger;
    //const { entry, startPos, gain } = hardCharger;
    const { entry } = hardCharge1;
    const { series } = entry;

    const hardClass = entry.class;

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
                    {hardClass && <TableCell colSpan={1}>Class</TableCell>}
                    <TableCell colSpan={hardClass ? 1 : 2}>Driver</TableCell>

                    <TableCell align="left" colSpan={1}>
                        Car #
                    </TableCell>
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
        </>
    );
};

export default MultiHardHeader;
