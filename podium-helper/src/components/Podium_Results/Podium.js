import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "../../Styling/podium.scss";
import FastLap from "./FastLap";
import Series from "./Series";
import EventSearch from "../EventsSearch";
import DatePicker from "./DatePicker";
import useEvents from "../../functions/useEvents";
import { getToday } from "../../functions/helperFunc";
import mongoResult from "../../functions/formMongoResult";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resultsActions } from "../../store/resultsSlice";
import { numOfPodiumDisplays } from "../../functions/podiumResultHelpers";

function Podium() {
  const { currentEventName } = useEvents();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [results, setResults] = useState({
    date: getToday(),
    series: "",
    event: "",
    fastLap: "",
  });

  useEffect(() => {
    setResults((prev) => ({
      ...prev,
      event: currentEventName,
    }));
  }, [currentEventName]);

  const handleFinalSubmit = () => {
    dispatch(resultsActions.addResults(mongoResult(results, results.fastLap)));
    navigate("/recent");
  };

  //sent to WinnerPodium as onclick to get podium result X and set to results
  const handleRacePodiumSubmit = (value, resultNumber) => {
    setResults((prev) => ({
      ...prev,
      [`result${resultNumber}`]: value,
    }));
  };

  //grab value and name (for key) from component and set result state
  const getValue = (name, value) => {
    setResults((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="race-results-container">
      <div className="results-details">
        <DatePicker getValue={getValue} today={getToday()} />
        <EventSearch getValue={getValue} component="podium" />
        <Series getValue={getValue} />
      </div>
      <div className="podium_results_container">
        {results.series &&
          numOfPodiumDisplays(results.series, handleRacePodiumSubmit, results)}
      </div>
      {results.series && (
        <FastLap getValue={getValue} series={results.series} />
      )}
      {results.fastLap && (
        <Button
          variant="contained"
          color="success"
          id="podium__submit_all"
          onClick={handleFinalSubmit}
          data-testid="podium__submit_all"
        >
          Submit All
        </Button>
      )}
    </div>
  );
}

export default Podium;
