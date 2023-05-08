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
  const [hardCharge, setHardCharge] = useState({ entryNum: "", gain: "" });
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

  // console.log(
  //   "entries",
  //   entries.filter((entry) => entry.series === series.name),
  // );

  return (
    <div className="results-container hard_charger_container">
      <Card className="podium_card">
        <h2>
          {series.name === grCup ? "Hard Charger" : "E-Boost Hard Charger"}
        </h2>
        <Box className="hard_charger__input podium_card__input">
          <FormControl>
            <InputLabel>Entry</InputLabel>
            <Select
              className="form-control"
              name="entryNum"
              label="Entry"
              value={hardCharge.entry}
              onChange={handleChange}
            >
              {entries
                .filter((entry) => entry.series === series.name)
                .map((entry) => {
                  return (
                    <MenuItem key={entry.number} value={entry.number}>
                      #{entry.number}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Box>
        <Box className="hard_charger__input podium_card__input">
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
