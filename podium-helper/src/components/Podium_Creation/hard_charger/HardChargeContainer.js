import SingleHardChargerCard from "./SingleHardChargerCard";
import { grCup } from "../../../functions/helperFunc";
import { Card } from "@mui/material";
import { useSelector } from "react-redux";
import { gtwca, gt4a, gtam, tcam } from "../../../functions/helperFunc";

const HardChargeContainer = ({ series, onSubmit }) => {
    let eventEntries = useSelector((state) => state.entry.eventEntries);

    let classes;
    if (series.name === gtam) {
        classes = series.class.slice(0, -1);
    } else if (series.name === tcam) {
        classes = series.class;
    } else {
        classes = series.name === gt4a ? ["GT4"] : ["GT3"];
    }

    const hardChargeCards = classes.map((classif, index) => {
        let entries = eventEntries;
        if (series.name === gtwca || series.name === gt4a) {
            entries = eventEntries.filter((entry) => entry.series === series.name);
        } else {
            entries = eventEntries.filter((entry) => entry.series === series.name && entry.classification === classif);
        }

        return (
            <SingleHardChargerCard
                key={index}
                classif={classif}
                resultNum={index + 1}
                onSubmit={onSubmit}
                entries={entries}
            />
        );
    });

    return (
        <div className="results-container">
            <Card className="podium_card">
                <h2>{series.name === grCup ? "Hard Charger" : "E-Boost Hard Charger"}</h2>
                <div className="hard_charge_container">{hardChargeCards}</div>
            </Card>
        </div>
    );
};

export default HardChargeContainer;
