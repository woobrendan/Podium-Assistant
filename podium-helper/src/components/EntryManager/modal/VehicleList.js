import { useState } from "react";
import { shortenName } from "../../../functions/helperFunc";
import vehicles from "./vehicles";

const VehicleList = ({ series, vehicleName, classif, onChange }) => {
    const [vehicle, setVehicle] = useState(vehicleName ? vehicleName : "");

    const handleChange = (e) => {
        setVehicle(e.target.value);
        onChange(e);
    };

    //take in long hand of series name
    const getVehicleArr = (seriesName, className) => {
        const series = shortenName(seriesName);
        const vehicleStr = vehicles[series];

        if (series === "GTWCA" || series === "PGT4A") {
            return vehicleStr;
        } else {
            return vehicleStr[classif];
        }
    };

    return (
        <div id="vehicle_dropdown">
            <label htmlFor="dropdown">Vehicle:</label>
            <select value={vehicle} onChange={handleChange} name="vehicle">
                {getVehicleArr(series, classif).map((vehicleString, index) => (
                    <option value={vehicleString} key={index}>
                        {vehicleString}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default VehicleList;
