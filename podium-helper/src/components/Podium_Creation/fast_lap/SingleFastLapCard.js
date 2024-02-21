import { useState } from "react";
import { Button } from "@mui/material";

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
    return (
        <section className="single_fast_lap_container">
            <section>
                <div className="fast_driver fast_input">
                    <label>Driver:</label>
                </div>
                <div className="lap_time fast_input">
                    <label>Lap Time:</label>
                    <input type="text" value={fastLap.laptime} name="laptime" onChange={handleChange} />
                </div>
            </section>
            <Button size="small" variant="contained" color={isSubmitted ? "success" : "error"} onClick={handleSubmit}>
                {isSubmitted ? "Update" : "Submit"}
            </Button>
        </section>
    );
};

export default SingleFastLapCard;
