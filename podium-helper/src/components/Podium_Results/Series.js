import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import axios from "axios";

const Series = ({ getValue, comp }) => {
  const [seriesName, setSeriesName] = useState("");
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getAndSetSeries = async () => {
      try {
        const seriesList = await axios.get("http://localhost:2020/api/series");
        const list =
          comp === "entryManager"
            ? ["All", ...seriesList.data.series]
            : seriesList.data.series;
        setSeries(list);
      } catch (err) {
        console.error(err);
      }
    };
    getAndSetSeries();
  }, []);

  const handleChange = (event) => {
    setSeriesName(event.target.value);
    getValue(event);
  };

  const mappedSeries = series.map((serie, index) => (
    <MenuItem key={index} value={serie} data-testid={serie.name}>
      {serie === "All" ? "All" : serie.name}
    </MenuItem>
  ));

  return (
    <Box data-testid="series_dropdown">
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel htmlFor="Series">Series</InputLabel>
        <Select
          className="form-control"
          name="series"
          label="Series"
          value={seriesName}
          onChange={(e) => handleChange(e)}
        >
          {mappedSeries}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Series;
