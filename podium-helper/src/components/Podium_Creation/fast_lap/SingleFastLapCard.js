import { useState } from "react";

const SingleFastLapCard = ({ classif, resultNum, onSubmit, entries }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fastLap, setFastLap] = useState({
        driver: "",
        laptime: "",
        classif,
    });

    const handleChange = (e) => {
        setFastLap((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(fastLap, "mulitFastLap", resultNum);
        setIsSubmitted(true);
    };
    return <section className="single_fast_lap_container"></section>;
};

export default SingleFastLapCard;
