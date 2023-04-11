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
import { singleDrivers } from "../../functions/podiumResultHelpers";
import { useSelector } from "react-redux";

const FastLap = ({ series, handleSubmit }) => {
  const [fastTime, setFastTime] = useState({
    driver: "",
    laptime: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const entries = useSelector((state) => state.entry.entriesArray);

  const handleChange = (event) => {
    setFastTime((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    handleSubmit(fastTime, "fastLap");
    setIsSubmitted(true);
  };

  let mapSingleDrivers = null;
  if (entries.length > 0) {
    mapSingleDrivers = singleDrivers(entries, series).map((option, index) => {
      return (
        <MenuItem key={index} value={option}>
          #{option.number} - {option.driver}{" "}
        </MenuItem>
      );
    });
  }

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
