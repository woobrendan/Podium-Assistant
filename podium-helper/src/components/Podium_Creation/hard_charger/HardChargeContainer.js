import { useState } from "react";
import { useSelector } from "react-redux";

const HardChargeContainer = ({ series, resultNum }) => {
    const eventEntries = useSelector((state) => state.entries.eventEntries);
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

    //handle submit pass back result number
    const classes = null;
    if (series.name === "GT America") {
        classes = series.class.slice(0, -1);
    } else if (series.name === "TC America") {
        classes = series.class;
    }
    //} else {
    //    classes = series.name === "Pirelli GT4 America" ? ["GT4"] : ["GT3"];
    //}

    //   const display = classes.map((classif, index) => (
    //
    //   ))

    return (
        <div className="hard_charge_container">
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
        </div>
    );
};

export default HardChargeContainer;
