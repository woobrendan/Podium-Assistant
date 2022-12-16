import { useState, useEffect } from "react";
import { Typography, TextField } from "@mui/material";
import ResultTableHeader from "./ResultTableHeader";
import SearchAllResults from "./SearchAllResults";
import BackToTopButton from "../BackToTopButton";
import EventSearch from "../EventsSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/resultsActions";

function ResultsHistory() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [event, setEvent] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const results = useSelector((state) => state.results.resultsArray);

  const getValue = (name, value) => setEvent(value);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const filterByEvent = () => {
    if (event) {
      const filtered = results.filter((result) => {
        if (event === result.event) return result;
      });
      return filtered;
    }
  };
  useEffect(() => {
    event ? setFilteredResults(filterByEvent()) : setFilteredResults(results);
  }, [event, results]);

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
