import { useState, useEffect } from "react";
import { Button, Typography, MenuItem, Card } from "@mui/material";
import "../../Styling/winnerTop3.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntry } from "../../store/entryActions";
import PlacementInput from "./PlacementInput";
import { numOfDriverMenuItem } from "../../functions/podiumResultHelpers";

const WinnerPodium = ({
  seriesName,
  classification,
  onClick,
  results,
  resultNum,
}) => {
  const [winners, setWinners] = useState({
    class: classification,
    firstPlace: "",
    secondPlace: "",
    thirdPlace: "",
  });
  const [isError, setIsError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const entries = useSelector((state) => state.entry.entriesArray);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const handleWinners = (event) => {
    setWinners((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    const isFirstPlace = winners.firstPlace;
    if (!isFirstPlace && seriesName !== "GT America") {
      setIsError(true);
    } else {
      if (isError) setIsError(false);
      onClick(winners, resultNum);
      setIsSubmitted(true);
    }
  };

  //Loop through all entries and return entries that match the selected classification
  const mappedDrivers = entries
    .filter(
      (entry) =>
        entry.series === seriesName && entry.classification === winners.class,
    )
    .map((entry) => numOfDriverMenuItem(entry));

  return (
    <div className="results-container">
      <Card sx={{ minWidth: 450 }}>
        <Typography variant="h5" gutterBottom component="div">
          {classification}
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
            <PlacementInput
              name="firstPlace"
              handleWinners={handleWinners}
              mappedDrivers={mappedDrivers}
              label="First Place"
              value={winners.firstPlace}
            />
            <PlacementInput
              name="secondPlace"
              handleWinners={handleWinners}
              mappedDrivers={mappedDrivers}
              label="Second Place"
              value={winners.secondPlace}
            />
            <PlacementInput
              name="thirdPlace"
              handleWinners={handleWinners}
              mappedDrivers={mappedDrivers}
              label="Third Place"
              value={winners.thirdPlace}
            />
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
};

export default WinnerPodium;
