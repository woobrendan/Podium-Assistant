import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import axios from "axios";

function Series({ getValue }) {
  const [seriesName, setSeriesName] = useState("");
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getAndSetSeries = async () => {
      const getData = async () => {
        const res = await axios.get("http://localhost:2020/api/series");
        return res.data;
      };
      try {
        const seriesList = await getData();
        setSeries(seriesList);
      } catch (err) {
        console.error(err);
      }
    };
    getAndSetSeries();
  }, []);

  const handleChange = (event) => {
    setSeriesName(event.target.value);
    getValue(event.target.name, event.target.value);
  };

  const mappedSeries = series.map((serie, index) => (
    <MenuItem key={index} value={serie} data-testid={serie.name}>
      {serie.name}
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
          onChange={handleChange}
        >
          {mappedSeries}
        </Select>
      </FormControl>
    </Box>
  );
}

export default Series;
