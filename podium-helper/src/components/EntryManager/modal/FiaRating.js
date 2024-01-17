import { useState } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";

const FiaRating = (currentRating) => {
    const [rating, setRating] = useState(currentRating ? currentRating : "");

    const ratingList = ["N/A", "Bronze", "Silver", "Gold", "Platinum"];

    return (
        <Box id="class_dropdown">
            <FormControl>
                <InputLabel>Class</InputLabel>
                <Select
                    className="form-control"
                    name="classification"
                    label="Class"
                    value={rating}
                    onChange={handleChange}
                >
                    {/*{getSeriesClasses(seriesList).map((classification, index) => (
                        <MenuItem key={index} value={classification} data-testid={classification}>
                            {classification}
                        </MenuItem>
                    ))}*/}
                </Select>
            </FormControl>
        </Box>
    );
};

export default FiaRating;
