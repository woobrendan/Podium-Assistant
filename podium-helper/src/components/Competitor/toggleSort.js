import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import { useState } from "react";

const ToggleSort = ({ getOption, component }) => {
    const [sortOption, setSortOption] = useState("");

    const getSortOption = (component) => {
        const competitorSortOptions = [
            "Number",
            "Manufacturer",
            "Vehicle Type",
            "Class",
        ];
        const resultSortOptions = ["Event", "Series"];
        return component === "competitor"
            ? competitorSortOptions
            : resultSortOptions;
    };

    const handleToggle = (event) => {
        setSortOption(event.target.value);
        getOption(event.target.value);
    };

    return (
        <Box className="sort-option-selector">
            <FormControl color="error">
                <InputLabel>
                    {component === "competitor" ? "Sort By" : "Filter"}
                </InputLabel>
                <Select
                    name="sort-by"
                    label="Sort By"
                    value={sortOption}
                    onChange={handleToggle}
                >
                    {getSortOption(component).map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default ToggleSort;
