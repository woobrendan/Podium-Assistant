import { useState } from "react";
import vehicles from "./vehicles";

const VehicleList = ({ series, vehicleName }) => {
    const [vehicle, setVehicle] = useState(vehicleName ? vehicleName : "");
    const handleChange = (e) => {
        setVehicle(e.target.value);
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
