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
    const option =
      component === "competitor" ? competitorSortOptions : resultSortOptions;
    return option;
  };

  const handleToggle = (event) => {
    setSortOption(event.target.value);
    getOption(event.target.value);
  };

  const mappedOptions = getSortOption(component).map((option) => (
    <MenuItem key={option} value={option}>
      {option}
    </MenuItem>
  ));

  return (
    <div className="sort-option-selector">
      <Box
      // component="form"
      // sx={{
      //   "& .MuiTextField-root": { m: 1, width: "25ch" },
      // }}
      // noValidate
      // autoComplete="off"
      >
        <FormControl
          sx={{ minWidth: 150 }}
          color="error"
          // focused={true}
          className="form-control"
        >
          <InputLabel>
            {component === "competitor" ? "Sort By" : "Filter"}
          </InputLabel>
          <Select
            className="form-control"
            name="sort-by"
            label="Sort By"
            value={sortOption}
            onChange={handleToggle}
          >
            {mappedOptions}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default ToggleSort;
