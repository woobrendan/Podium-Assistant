import { useState } from "react";

const HardChargeContainer = () => {
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

    return (
        <div className="hard_charge_container">
            <div className="hard_driver">
                <label>Driver:</label>
                <select name="entryNum" value={hardCharger.entryNum} onChange={handleChange}>
                    {/*// loop through entries*/}
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
