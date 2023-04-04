import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  Button,
  Card,
  Box,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { grCup } from "../../functions/helperFunc";

const FastLap = ({ series, getValue, entries }) => {
  const [fastTime, setFastTime] = useState({
    driver: "",
    laptime: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setFastTime((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    getValue("fastLap", fastTime);
    setIsSubmitted(true);
  };

  //take in entry object and get every single driver into list
  const singleDrivers = (entryArray) => {
    const drivers = [];
    const seriesFilteredDrivers = entryArray.filter(
      (entry) => entry.series === series.name,
    );
    for (const entry of seriesFilteredDrivers) {
      drivers.push({
        number: entry.number,
        driver: entry.driver1.name,
        vehicle: entry.vehicle,
      });
      if (entry.driver2) {
        drivers.push({
          number: entry.number,
          driver: entry.driver2.name,
          vehicle: entry.vehicle,
        });
      }
      if (entry.driver3) {
        drivers.push({
          number: entry.number,
          driver: entry.driver3.name,
          vehicle: entry.vehicle,
        });
      }
    }
    return drivers.sort((a, b) => a.number - b.number);
  };

  const mapSingleDrivers = singleDrivers(entries).map((option, index) => {
    return (
      <MenuItem key={index} value={option.driver}>
        #{option.number} - {option.driver}{" "}
      </MenuItem>
    );
  });

  return (
    <Card className="fast-lap-container">
      <h2>{series.name === grCup ? "Fast Lap" : "CrowdStrike Fast Lap"}</h2>
      <Box className="fast_lap__input">
        <FormControl>
          <InputLabel>Driver</InputLabel>
          <Select
            className="form-control"
            name="driver"
            label="Driver"
            value={fastTime.driver}
            onChange={handleChange}
          >
            {mapSingleDrivers}
          </Select>
        </FormControl>
      </Box>
      <Box className="fast_lap__input">
        <TextField
          id="outlined"
          label="Fast Lap"
          name="laptime"
          value={fastTime.lapTime}
          onChange={handleChange}
        />
      </Box>
      <Button
        variant="contained"
        color={isSubmitted ? "success" : "error"}
        onClick={handleClick}
      >
        {isSubmitted ? "Update" : "Submit"}
      </Button>
    </Card>
  );
};

export default FastLap;
