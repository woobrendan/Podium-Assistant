import axios from "axios";
import { useEffect, useState } from "react";

const Classification = ({ onInputChange, classification, series }) => {
    const [seriesList, setSeriesList] = useState([]);
    const [className, setClassName] = useState(classification ? classification : "");

    useEffect(() => {
        const getClasses = async () => {
            try {
                const series = await axios.get("http://localhost:2020/api/series");
                setSeriesList(series.data.series);
            } catch (error) {
                console.log("Error fetching series", error);
            }
        };

        getClasses();
    }, []);

    const getSeriesClasses = (seriesList) => {
        // if series prop exists, then take that name and only return the class list for that series
        if (series) {
            for (const serie of seriesList) {
                if (serie.name === series) {
                    return serie.class;
                }
            }
        }
        // create get all class lists combined into one with reduce, then use set to remove dupes, spread into arr
        return [...new Set(seriesList.reduce((acc, series) => acc.concat(series.class), []))].sort();
    };

    const handleChange = (event) => {
        setClassName(event.target.value);
        onInputChange(event);
    };

    return (
        <div className="dropdown" id="dropdown_class">
            <label htmlFor="dropdown">Class:</label>
            <select value={className} onChange={handleChange} name="classification">
                <option value="" disabled>
                    Select a class
                </option>
                {getSeriesClasses(seriesList).map((classif, index) => (
                    <option value={classif} key={index}>
                        {classif}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Classification;
