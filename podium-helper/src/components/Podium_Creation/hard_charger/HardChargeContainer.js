import { useState } from "react";
import { useSelector } from "react-redux";
import SingleHardChargerCard from "./SingleHardChargerCard";

const HardChargeContainer = ({ series, resultNum }) => {
    const eventEntries = useSelector((state) => state.entries.eventEntries);
    const [allHardChargers, setAllHardChargers] = useState({});

    //handle submit pass back result number
    let classes = null;
    if (series.name === "GT America") {
        classes = series.class.slice(0, -1);
    } else if (series.name === "TC America") {
        classes = series.class;
    }
    //} else {
    //    classes = series.name === "Pirelli GT4 America" ? ["GT4"] : ["GT3"];
    //}

    const handleSingleSubmit = (resultNumber, value) => {
        setAllHardChargers((prev) => ({
            ...prev,
            [`hardCharger${resultNumber}`]: value,
        }));
    };

    const hardContainers = classes.map((classif, index) => (
        <SingleHardChargerCard classif={classif} resultNum={index} onSubmit={handleSingleSubmit} />
    ));

    return (
        <>
            {hardContainers()}
            {/* Button to submit */}
        </>
    );
};

export default HardChargeContainer;
