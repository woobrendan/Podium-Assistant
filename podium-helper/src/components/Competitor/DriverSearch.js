import DriverDetails from "./DriverDetails";
import "../../Styling/competitors.scss";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import BackToTopButton from "../BackToTopButton";
import useEntries from "../../functions/useEntries";
import ToggleSort from "./toggleSort";
import searchAllEntries from "./searchAllEntries";
import { fetchEntry } from "../../store/entryActions";
import NoResults from "../NoResults";
import {
  sortBySeries,
  sortByVehicleType,
  sortByManufacturer,
  sortByClass,
} from "../../functions/sortFuncs";
import { useDispatch, useSelector } from "react-redux";

function DriverSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("");
  const { vehicles } = useEntries();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntry());
  }, [dispatch]);

  const entries = useSelector((state) => state.entry.entries);
  console.log("entries", entries);

  const getSortOption = (option) => setOption(option);

  const searchResult = searchAllEntries(vehicles, searchValue);

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

  const mappedDrivers =
    searchResult.length > 0 ? (
      setSortOption(option, searchResult).map((entry, index) => (
        <DriverDetails entry={entry} key={index} index={index} />
      ))
    ) : (
      <NoResults />
    );

  return (
    <div className="competitors-container">
      <div className="search-sort-options">
        <ToggleSort getOption={getSortOption} component="competitor" />
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
      <div className="entry_cards">{mappedDrivers}</div>
      <BackToTopButton />
    </div>
  );
}

export default DriverSearch;
