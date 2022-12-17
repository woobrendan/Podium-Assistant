import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import "../../Styling/podium.scss";
import FastLap from "./FastLap";
import Series from "./Series";
// import axios from "axios";
import EventSearch from "../EventsSearch";
import DatePicker from "./DatePicker";
import useEntries from "../../functions/useEntries";
import { getToday } from "../../functions/helperFunc";
import mongoResult from "../../functions/formMongoResult";
import WinnerPodium from "./WinnerPodium";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resultsActions } from "../../store/resultsSlice";

function Podium() {
  const { currentEventName } = useEntries();
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
    // console.log("mongResult", mongoResult(results, results.fastLap));
    // try {
    //   await axios.post(`http://localhost:2020/api/results/new`, {
    //     results: mongoResult(results, results.fastLap),
    //   });
    //   navigate("/recent");
    // } catch (err) {
    //   console.error(err);
    // }
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

  //dynamically render appropriate amount of WinnerPodium components based on need per series class requirements
  const numOfPodiumDisplays = (series) => {
    const classifications = series.class;
    const mappedSeries = classifications.map((classification, index) => (
      <WinnerPodium
        key={index}
        seriesName={series.name}
        onClick={handleRacePodiumSubmit}
        results={results}
        classification={classification}
        resultNum={index + 1}
      />
    ));
    return mappedSeries;
  };

  return (
    <div className="race-results-container">
      <div className="results-details">
        <DatePicker getValue={getValue} today={getToday()} />
        <EventSearch getValue={getValue} component="podium" />
        <Series getValue={getValue} />
      </div>
      <div className="podium_results_container">
        {results.series && numOfPodiumDisplays(results.series)}
      </div>
      {results.series && (
        <FastLap getValue={getValue} series={results.series} />
      )}
      {results.series && (
        <Button variant="contained" color="success" onClick={handleFinalSubmit}>
          Submit All
        </Button>
      )}
    </div>
  );
}

export default Podium;
