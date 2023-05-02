import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import ResultTableHeader from "./ResultTableHeader";
import SearchAllResults from "./SearchAllResults";
import BackToTopButton from "../BackToTopButton";
import EventSearch from "../EventsSearch";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/resultsActions";
import { compareByDate } from "../../functions/sortFuncs";

const ResultsHistory = () => {
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
      return results.filter((result) => event === result.event);
    }
  };

  console.log("results", results);

  useEffect(() => {
    event
      ? setFilteredResults(filterByEvent())
      : setFilteredResults(results.sort(compareByDate));
  }, [event, results]);

  return (
    <section className="result-container">
      <h1>Result History</h1>
      <div className="filter-details">
        <EventSearch getValue={getValue} />
        <TextField
          className="result_search"
          label="Search"
          variant="outlined"
          color="error"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      <div className="result-history-list">
        {SearchAllResults(filteredResults, searchValue).map((result, index) => (
          <ResultTableHeader results={result} key={index} />
        ))}
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ResultsHistory;
