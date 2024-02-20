import { useState } from "react";

const SingleFastLapCard = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fastLap, setFastLap] = useState({
        driver: "",
        laptime: "",
    });

    const handleChange = (e) => {
        setFastLap((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    return <></>;
};

export default SingleFastLapCard;
