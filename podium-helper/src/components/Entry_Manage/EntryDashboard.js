import EntryRows from "./EntryRows";
import ToggleSort from "../Competitor/toggleSort";
import searchAllEntries from "../Competitor/searchAllEntries";
import "../../Styling/entryDash.scss";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import {
  sortBySeries,
  sortByVehicleType,
  sortByManufacturer,
  sortByClass,
} from "../../functions/sortFuncs";
import NoResults from "../NoResults";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntry } from "../../store/entryActions";

function EntryDashboard() {
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entriesArray);

  const getSortOption = (option) => setOption(option);

  const searchResults = searchAllEntries(entries, searchValue);

  const setSortOption = (sortOption, entryArray) => {
    switch (sortOption) {
      case "Number":
        return entryArray;
      case "Manufacturer":
        return sortByManufacturer(entryArray);
      case "Vehicle Type":
        return sortByVehicleType(entryArray);
      case "Class":
        return sortByClass(entryArray);
      default:
        return sortBySeries(entryArray);
    }
  };

  const sortedEntries =
    searchResults.length > 0 ? (
      <EntryRows filteredEntries={setSortOption(option, searchResults)} />
    ) : (
      <NoResults />
    );

  return (
    <div className="entry-dashboard">
      <div className="search-sort-options">
        <ToggleSort getOption={getSortOption} />
        <TextField
          className="form-control"
          label="Search"
          variant="outlined"
          color="error"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {sortedEntries}
    </div>
  );
}

export default EntryDashboard;
