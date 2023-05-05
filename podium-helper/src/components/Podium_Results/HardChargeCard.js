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
import { useSelector } from "react-redux";
import { grCup } from "../../functions/helperFunc";

const HardChargeCard = ({ series, handleSubmit }) => {
  const [hardCharge, setHardCharge] = useState({ entry: "", gain: null });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const entries = useSelector((state) => state.entry.entriesArray);

  const handleClick = () => {
    handleSubmit(hardCharge, "hardCharger");
    setIsSubmitted(true);
  };

  const handleChange = (event) => {
    setHardCharge((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="results-container">
      <Card className="hard_charger_container podium_card">
        <h2>
          {series.name === grCup ? "Hard Charger" : "E-Boost Hard Charger"}
        </h2>
        <Box className="hard_charger__input">
          <FormControl>
            <InputLabel>Entry</InputLabel>
            <Select
              className="form-control"
              name="entry"
              label="Entry"
              value={hardCharge.entry}
              onChange={handleChange}
            >
              {entries
                .filter((entry) => entry.series === series)
                .map((entry) => {
                  return (
                    <MenuItem key={index} value={entry}>
                      #{entry.number} - {entry.driver1} & {entry.driver2}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <Box className="hard_charger__input">
          <TextField
            id="outlined"
            label="Positions Gained"
            name="gain"
            value={hardCharge.gain}
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
    </div>
  );
};

export default HardChargeCard;
