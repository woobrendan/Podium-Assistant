import axios from "axios";
import { useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";

const Classification = () => {
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
    //get GTWCA and GTA to the top, and pgt4 and tc to the bottom
    const seriesList = series.sort((a, b) => a.name - b.name);

    //loop through each series and push all classes togeher, then filter out duplicates
    const classList = [];
    for (const series of seriesList) {
      classList.push(...series.class);
    }
    return classList.filter(
      (className, index) => classList.indexOf(className) === index,
    );
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
    getValue(event.target.name, event.target.value);
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
