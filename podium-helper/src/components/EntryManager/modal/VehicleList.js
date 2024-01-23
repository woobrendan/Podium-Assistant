import { useState } from "react";
import { shortenName } from "../../../functions/helperFunc";
import vehicles from "./vehicles";

const VehicleList = ({ series, vehicleName, classif }) => {
    const [vehicle, setVehicle] = useState(vehicleName ? vehicleName : "");
    const handleChange = (e) => {
        setVehicle(e.target.value);
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
        <div id="class_dropdown">
            <label htmlFor="dropdown">Class:</label>
            <select value={vehicle} onChange={handleChange} name="classification">
                {/*{getSeriesClasses(seriesList).map((classif, index) => (
                    <option value={classif} key={index}>
                        {classif}
                    </option>
                ))}*/}
            </select>
        </div>
    );
};

export default VehicleList;
