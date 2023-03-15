import { MenuItem } from "@mui/material";
import WinnerPodium from "../components/Podium_Results/WinnerPodium";

//determine if entry is single or two drivers and return corresponding menu item
const numOfDriverMenuItem = (entry) => {
  if (!entry.driver2) {
    return (
      <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
        #{entry.number} - {entry.driver1.name}
      </MenuItem>
    );
  } else if (entry.driver2 && !entry.driver3) {
    return (
      <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
        #{entry.number} - {entry.driver1.name} & {entry.driver2.name}
      </MenuItem>
    );
  } else {
    return (
      <MenuItem key={`${entry.number} ${entry.driver1.name}`} value={entry}>
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

export { numOfDriverMenuItem, numOfPodiumDisplays };
