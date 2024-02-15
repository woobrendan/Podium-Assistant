import SingleHardChargerCard from "./SingleHardChargerCard";
import { grCup } from "../../../functions/helperFunc";
import { Card } from "@mui/material";
import { useSelector } from "react-redux";

const HardChargeContainer = ({ series, onSubmit }) => {
    let eventEntries = useSelector((state) => state.entry.eventEntries);

    let classes = null;
    if (series.name === "GT America") {
        classes = series.class.slice(0, -1);
    } else if (series.name === "TC America") {
        classes = series.class;
    } else {
        classes = series.name === "Pirelli GT4 America" ? ["GT4"] : ["GT3"];
    }

    const hardChargeCards = [];

    classes.forEach((classif, index) => {
        let entries = eventEntries;
        if (series.name === "GT World Challenge America" || series.name === "Pirelli GT4 America") {
            entries = eventEntries.filter((entry) => entry.series === series.name);
        } else {
            entries = eventEntries.filter((entry) => entry.series === series.name && entry.classification === classif);
        }

        hardChargeCards.push(
            <SingleHardChargerCard
                key={index}
                classif={classif}
                resultNum={index + 1}
                onSubmit={onSubmit}
                series={series}
                entries={entries}
            />,
        );
    });

    //return mappedHardCharge;
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
