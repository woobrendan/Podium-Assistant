import { useState } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";

const FiaRating = (currentRating) => {
    const [rating, setRating] = useState(currentRating ? currentRating : "");

    const ratingList = ["N/A", "Bronze", "Silver", "Gold", "Platinum"];

    const handleChange = (e) => {
        setRating(e.target.value);
    };

    return (
        //<Box id="class_dropdown">
        //    <FormControl>
        //        <InputLabel>Class</InputLabel>
        //        <Select
        //            className="form-control"
        //            name="classification"
        //            label="Class"
        //            value={rating}
        //            onChange={(e) => setRating(e.target.value)}
        //        >
        //            {ratingList.map((ratingStr, index) => (
        //                <MenuItem key={index} value={ratingStr} data-testid={ratingStr}>
        //                    {ratingStr}
        //                </MenuItem>
        //            ))}
        //        </Select>
        //    </FormControl>
        //</Box>
        <div>
            <label htmlFor="dropdown">FIA Rating:</label>
            <select value={rating} onChange={handleChange}>
                {ratingList.map((ratingStr, index) => (
                    <option value={ratingStr} key={index}>
                        ratingStr
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FiaRating;
