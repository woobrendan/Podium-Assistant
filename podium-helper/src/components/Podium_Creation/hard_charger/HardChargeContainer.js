import SingleHardChargerCard from "./SingleHardChargerCard";
import { grCup } from "../../../functions/helperFunc";
import { Card } from "@mui/material";

const HardChargeContainer = ({ series, onSubmit }) => {
    let classes = null;
    if (series.name === "GT America") {
        classes = series.class.slice(0, -1);
    } else if (series.name === "TC America") {
        classes = series.class;
    } else {
        classes = series.name === "Pirelli GT4 America" ? ["GT4"] : ["GT3"];
    }
    const mappedHardCharge = classes.map((classif, index) => (
        <SingleHardChargerCard
            key={index}
            classif={classif}
            resultNum={index + 1}
            onSubmit={onSubmit}
            series={series}
        />
    ));

    //return mappedHardCharge;
    return (
        <div className="results-container">
            <Card className="podium_card">
                <h2>{series.name === grCup ? "Hard Charger" : "E-Boost Hard Charger"}</h2>
                <div className="hard_charge_container">{mappedHardCharge}</div>
            </Card>
        </div>
    );
};

export default HardChargeContainer;
