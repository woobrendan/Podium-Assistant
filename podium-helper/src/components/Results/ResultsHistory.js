import { useState, useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import ResultTableHeader from "./ResultTableHeader";
import useEntries from "../../functions/useEntries.js";
import SearchAllResults from "./SearchAllResults";
import BackToTopButton from "../BackToTopButton";
import EventSearch from "../EventsSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/podiumActions";

function ResultsHistory() {
  const { resultHistory } = useEntries();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [event, setEvent] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const resultsRedux = useSelector((state) => state.podium.podiumsArray);

  const getValue = (name, value) => setEvent(value);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filterByEvent = () => {
    if (event) {
      const filtered = resultHistory.filter((result) => {
        if (event === result.event) return result;
      });
      return filtered;
    }
  };
  useEffect(() => {
    event
      ? setFilteredResults(filterByEvent())
      : setFilteredResults(resultHistory);
  }, [event, resultHistory]);

  const allResults = SearchAllResults(filteredResults, searchValue).map(
    (result, index) => <ResultTableHeader results={result} key={index} />,
  );

  return (
    <div className="result-container">
      <Typography gutterBottom variant="h3" component="div">
        Result History
      </Typography>
      <div className="filter-details">
        <EventSearch getValue={getValue} />
        <TextField
          label="Search"
          variant="outlined"
          color="error"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="result-history-list">{allResults}</div>
      <BackToTopButton />
    </div>
  );
}

export default ResultsHistory;
