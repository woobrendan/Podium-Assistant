import { Card } from "@mui/material";
import { grCup } from "../../../functions/helperFunc";

const FastLapContainer = ({ series }) => {
    return (
        <div className="results-container">
            <Card className="podium_card">
                <h2>{series.name === grCup ? "Fast Lap" : "CrowdStrike Fast Lap"}</h2>
                <div className="fast_lap_container">{/* fast lap cards */}</div>
            </Card>
        </div>
    );
};

export default FastLapContainer;
