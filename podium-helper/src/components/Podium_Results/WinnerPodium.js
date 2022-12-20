import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  Button,
  Typography,
  MenuItem,
  Card,
  Box,
} from "@mui/material";
import "../../Styling/winnerTop3.scss";
import useEntries from "../../functions/useEntries";

function WinnerPodium(props) {
  const { vehicles } = useEntries();
  const [winners, setWinners] = useState({
    class: props.classification,
    firstPlace: "",
    secondPlace: "",
    thirdPlace: "",
  });

  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleWinners = (event) => {
    setWinners((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const isFirstPlace = winners.firstPlace;
    if (!isFirstPlace && props.seriesName !== "GT America") {
      setIsError(true);
    } else {
      if (isError) setIsError(false);
      props.onClick(winners, props.resultNum);
      setIsSubmitted(true);
    }
  };

  //determine if entry is single or two drivers and return corresponding menu item
  const numOfDriverMenuItem = (entry) => {
    if (!entry.driver2) {
      return (
        <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
          #{entry.number} - {entry.driver1.name}
        </MenuItem>
      );
    } else if (entry.driver2 && !entry.driver3) {
      return (
        <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
          #{entry.number} - {entry.driver1.name} & {entry.driver2.name}
        </MenuItem>
      );
    } else {
      return (
        <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
          #{entry.number} - {entry.driver1.name} & {entry.driver2.name} &{" "}
          {entry.driver3.name}
        </MenuItem>
      );
    }
  };
  const mappedDrivers = vehicles
    .filter(
      (entry) =>
        entry.series === props.seriesName && entry.class === winners.class,
    )
    .map((entry) => numOfDriverMenuItem(entry));

  return (
    <div className="results-container">
      <Card sx={{ minWidth: 450 }}>
        <Typography variant="h5" gutterBottom component="div">
          {props.classification}
        </Typography>
        <div className="placement-container">
          <div className="finishing-spot">
            <h3>
              1<sup>st</sup>
            </h3>
            <h3>
              2<sup>nd</sup>
            </h3>
            <h3>
              3<sup>rd</sup>
            </h3>
          </div>
          <div className="finishing-drivers">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ minWidth: 300 }}>
                <InputLabel htmlFor="exampleFormControlSelect2">
                  First Place
                </InputLabel>
                <Select
                  className="form-control"
                  name="firstPlace"
                  label="first place"
                  error={isError}
                  value={winners.firstPlace}
                  onChange={handleWinners}
                >
                  {mappedDrivers}
                </Select>
              </FormControl>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ minWidth: 300 }}>
                <InputLabel htmlFor="exampleFormControlSelect2">
                  Second Place
                </InputLabel>
                <Select
                  className="form-control"
                  name="secondPlace"
                  label="second place"
                  value={winners.secondPlace}
                  onChange={handleWinners}
                >
                  {mappedDrivers}
                </Select>
              </FormControl>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{ minWidth: 300 }}>
                <InputLabel htmlFor="exampleFormControlSelect2">
                  Third Place
                </InputLabel>
                <Select
                  className="form-control"
                  name="thirdPlace"
                  label="third place"
                  value={winners.thirdPlace}
                  onChange={handleWinners}
                >
                  {mappedDrivers}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        {isError && (
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Must be a First Place Finisher
          </Typography>
        )}

        {isSubmitted ? (
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Update
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={handleSubmit}>
            Submit
          </Button>
        )}
      </Card>
    </div>
  );
}

export default WinnerPodium;
