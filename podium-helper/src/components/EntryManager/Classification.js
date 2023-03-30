import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";

const Classification = ({ onInputChange }) => {
  const [series, setSeries] = useState([]);
  const [className, setClassName] = useState("");

  useEffect(() => {
    const getClasses = async () => {
      try {
        const series = await axios.get("http://localhost:2020/api/series");
        setSeries(series.data.series);
      } catch (error) {
        console.log("Error fetching series", error);
      }
    };

    getClasses();
  }, []);

  const getSeriesClasses = (series) => {
    //loop through each series and push all classes togeher, then filter out duplicates
    const classList = [];
    for (const serie of series) {
      classList.push(...serie.class);
    }
    return classList
      .filter((className, index) => classList.indexOf(className) === index)
      .sort();
  };

  const mappedClasses = getSeriesClasses(series).map(
    (classification, index) => (
      <MenuItem key={index} value={classification} data-testid={classification}>
        {classification}
      </MenuItem>
    ),
  );

  const handleChange = (event) => {
    setClassName(event.target.value);
    onInputChange(event);
  };

  return (
    <Box data-testid="class_dropdown">
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel>Class</InputLabel>
        <Select
          className="form-control"
          name="classification"
          label="Class"
          value={className}
          onChange={handleChange}
        >
          {mappedClasses}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Classification;
