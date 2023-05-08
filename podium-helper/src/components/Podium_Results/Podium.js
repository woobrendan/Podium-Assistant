import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//** Style Sheets  */
import "../../Styling/podium.scss";
import "../../Styling/winnerTop3.scss";

//** Components  */
import FastLap from "./FastLap";
import Series from "./Series";
import EventSearch from "../EventsSearch";
import DatePicker from "./DatePicker";
import HardChargeCard from "./HardChargeCard";

import useEvents from "../../functions/useEvents";
import { getToday } from "../../functions/helperFunc";
import mongoResult from "../../functions/formMongoResult";
import { resultsActions } from "../../store/resultsSlice";
import { numOfPodiumDisplays } from "../../functions/podiumResultHelpers";
import { fetchEntry } from "../../store/entryActions";

const Podium = () => {
  const { currentEventName } = useEvents();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entry.entriesArray);

  const [results, setResults] = useState({
    date: getToday(),
    series: "",
    event: "",
    fastLap: "",
  });

  useEffect(() => {
    //update event name in results
    setResults((prev) => ({
      ...prev,
      event: currentEventName,
    }));
  }, [currentEventName]);

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const handleFinalSubmit = () => {
    dispatch(resultsActions.addResults(mongoResult(results, results.fastLap)));
    navigate("/recent");
  };

  //** sent to WinnerPodium to handle submission of podium result X and set to results, used for fast lap too *//
  const handleRacePodiumSubmit = (value, resultNumber) => {
    if (resultNumber === "fastLap") {
      setResults((prev) => ({
        ...prev,
        fastLap: value,
      }));
    } else if (resultNumber === "hardCharger") {
      const seriesEntries = entries.filter(
        (entry) => results.series.name === entry.series,
      );
      const entry = seriesEntries.find(
        (entry) => value.entryNum === entry.number,
      );
      console.log("entry", entry);
      setResults((prev) => ({
        ...prev,
        hardCharger: { entry, gain: value.gain },
      }));
    } else {
      setResults((prev) => ({
        ...prev,
        [`result${resultNumber}`]: value,
      }));
    }
  };

  //grab value and name (for key) from component and set result state
  const getValue = (e) => {
    setResults((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="race-results-container">
      <div className="results-details">
        <DatePicker getValue={getValue} today={getToday()} />
        <EventSearch getValue={getValue} component="podium" />
        <Series getValue={getValue} />
      </div>
      {results.series && (
        <div className="podium_results_container">
          {numOfPodiumDisplays(
            results.series,
            handleRacePodiumSubmit,
            results,
            entries,
          )}
          <FastLap
            handleSubmit={handleRacePodiumSubmit}
            series={results.series}
          />
          <HardChargeCard
            series={results.series}
            handleSubmit={handleRacePodiumSubmit}
          />
        </div>
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
    </section>
  );
};

export default Podium;
