import { MenuItem } from "@mui/material";
import WinnerPodium from "../components/Podium_Creation/WinnerPodium";

//determine if entry is single or two drivers and return corresponding menu item
const numOfDriverMenuItem = (entry, index) => {
    const { driver1, driver2, driver3, number } = entry;
    let driverStr = `#${number} - ${driver1.name}`;
    driverStr += driver2 ? ` & ${driver2.name}` : "";
    driverStr += driver3 ? ` & ${driver3.name}` : "";

    return (
        <MenuItem key={index} value={entry}>
            {driverStr}
        </MenuItem>
    );
};

//dynamically render appropriate amount of WinnerPodium components based on need per series class requirements
const numOfPodiumDisplays = (series, submit) => {
    const mappedSeries = series.class.map((classification, index) => (
        <WinnerPodium
            key={classification}
            seriesName={series.name}
            onClick={submit}
            classification={classification}
            resultNum={index + 1}
        />
    ));
    return mappedSeries;
};

//take in entry object and get every single driver into list. List is used for Fast Lap component
const singleDrivers = (entryArray, seriesVal) => {
    const drivers = entryArray
        .filter((entry) => entry.series === seriesVal.name)
        .flatMap((entry) => {
            const { number, vehicle, driver1, driver2, driver3 } = entry;

            return [
                { number, driver: driver1.name, vehicle },
                ...(driver2 ? [{ number, driver: driver2.name, vehicle }] : []),
                ...(driver3 ? [{ number, driver: driver3.name, vehicle }] : []),
            ];
        });
    return drivers.sort((a, b) => a.number - b.number);
};

//const numOfHardChargeDisplays = (series, onSubmit, )

export { numOfDriverMenuItem, numOfPodiumDisplays, singleDrivers };
