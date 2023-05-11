import { MenuItem } from "@mui/material";
import WinnerPodium from "../components/Podium_Results/WinnerPodium";

//determine if entry is single or two drivers and return corresponding menu item
const numOfDriverMenuItem = (entry, index) => {
  if (!entry.driver2) {
    return (
      <MenuItem key={index} value={entry}>
        #{entry.number} - {entry.driver1.name}
      </MenuItem>
    );
  } else if (entry.driver2 && !entry.driver3) {
    return (
      <MenuItem key={index} value={entry}>
        #{entry.number} - {entry.driver1.name} & {entry.driver2.name}
      </MenuItem>
    );
  } else {
    return (
      <MenuItem key={index} value={entry}>
        #{entry.number} - {entry.driver1.name} & {entry.driver2.name} &{" "}
        {entry.driver3.name}
      </MenuItem>
    );
  }
};

//dynamically render appropriate amount of WinnerPodium components based on need per series class requirements
const numOfPodiumDisplays = (series, submit, results, entries) => {
  const mappedSeries = series.class.map((classification, index) => (
    <WinnerPodium
      key={classification}
      seriesName={series.name}
      onClick={submit}
      results={results}
      classification={classification}
      resultNum={index + 1}
      entries={entries}
    />
  ));
  return mappedSeries;
};

//take in entry object and get every single driver into list. List is used for Fast Lap component
const singleDrivers = (entryArray, series) => {
  const drivers = [];
  const seriesFilteredDrivers = entryArray.filter(
    (entry) => entry.series === series.name,
  );
  for (const entry of seriesFilteredDrivers) {
    drivers.push({
      number: entry.number,
      driver: entry.driver1.name,
      vehicle: entry.vehicle,
    });
    if (entry.driver2) {
      drivers.push({
        number: entry.number,
        driver: entry.driver2.name,
        vehicle: entry.vehicle,
      });
    }
    if (entry.driver3) {
      drivers.push({
        number: entry.number,
        driver: entry.driver3.name,
        vehicle: entry.vehicle,
      });
    }
  }
  return drivers.sort((a, b) => a.number - b.number);
};

export { numOfDriverMenuItem, numOfPodiumDisplays, singleDrivers };
