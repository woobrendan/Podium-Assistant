import { Card } from "@mui/material";
import { grCup } from "../../../functions/helperFunc";
import { useSelector } from "react-redux";
import SingleFastLapCard from "./SingleFastLapCard";
import { getAwardEntries, getClassArr } from "../../../functions/podiumResultHelpers";

const FastLapContainer = ({ series }) => {
    const eventEntries = useSelector((state) => state.entry.eventEntries);

    const fastLapCards = getClassArr(series).map((classif, index) => {
        const entries = getAwardEntries(eventEntries, series, classif);

        return (
            <SingleFastLapCard
                key={index}
                classif={classif}
                resultNum={index + 1}
                //onSubmit={onSubmit}
                entries={entries}
            />
        );
    });
    return (
        <div className="results-container">
            <Card className="podium_card">
                <h2>{series.name === grCup ? "Fast Lap" : "CrowdStrike Fast Lap"}</h2>
                <div className="fast_lap_container">{fastLapCards}</div>
            </Card>
        </div>
    );
};

export default FastLapContainer;
