import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const SingleHardChargerCard = ({ classif, resultNum, series, onSubmit }) => {
    const eventEntries = useSelector((state) => state.entry.eventEntries);
    const [hardCharger, setHardCharger] = useState({
        entryNum: "",
        startPos: "",
        gain: "",
        class: "",
    });

    const handleChange = (e) => {
        setHardCharger((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(hardCharger, "hardChargerMulti", resultNum);
    };

    return (
        <div className="single_hard_charge_container">
            <h5>{classif} Hard Charger</h5>
            <div className="hard_driver">
                <label>Driver:</label>
                <select name="entryNum" value={hardCharger.entryNum} onChange={handleChange}>
                    <option value="" disabled>
                        Select Driver(s)
                    </option>
                    {eventEntries
                        .filter((entry) => entry.series === series.name)
                        .sort((a, b) => a.number - b.number)
                        .map((entry, index) => {
                            return (
                                <option value={entry.number} key={index}>
                                    #{entry.number} - {entry.driver1.name}{" "}
                                    {entry.driver2 ? `& ${entry.driver2.name}` : " "}
                                </option>
                            );
                        })}
                </select>
            </div>
            <div className="hard_start">
                <label>Start Pos:</label>
                <input type="text" value={hardCharger.startPos} name="startPos" onChange={handleChange} />
            </div>
            <div className="hard_gain">
                <label>Gain:</label>
                <input type="text" value={hardCharger.gain} name="gain" onChange={handleChange} />
            </div>
            <Button variant="contained" color={isSubmitted ? "success" : "error"} onClick={handleSubmit}>
                {isSubmitted ? "Update" : "Submit"}
            </Button>
        </div>
    );
};

export default SingleHardChargerCard;
