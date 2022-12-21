import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import useEntries from "../../functions/useEntries";
import axios from "axios";

function Series({ getValue }) {
  const [seriesName, setSeriesName] = useState("");
  // const { series } = useEntries();
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
    <MenuItem key={index} value={serie}>
      {serie.name}
    </MenuItem>
  ));

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
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
