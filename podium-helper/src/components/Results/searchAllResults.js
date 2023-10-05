import { compareResultDates } from "../../functions/sortFuncs";

// Get all drivers from one result (all classes, one series, one race)
const allDrivers = (placementArr) => {
    const driverArray = [];
    const filtered = placementArr.filter(Boolean);

    for (const result of filtered) {
        driverArray.push(result.driver1);
        if (result.driver2) driverArray.push(result.driver2);
        if (result.driver3) driverArray.push(result.driver3);
    }
    return driverArray;
};

// filter through the entry object, keying into the obj using the category variable
const categoryArray = (category, placementArr) => {
    const newArray = [];
    for (const placeResult of placementArr) {
        if (placeResult) newArray.push(placeResult[category]);
    }
    return newArray;
};

const SearchAllResults = (list, searchValue) => {
    const lowerVal = searchValue.toLowerCase().trim();

    if (!searchValue) {
        return list;
    }
    const filtered = list.filter((val) => {
        const { result1, result2, result3, result4, series, event } = val;
        const allPlacements = [
            result1.firstPlace,
            result1.secondPlace,
            result1.thirdPlace,
        ];

        const resultsArr = [result2, result3, result4].filter(Boolean);

        for (const result of resultsArr) {
            const { firstPlace, secondPlace, thirdPlace } = result;
            allPlacements.push(firstPlace, secondPlace, thirdPlace);
        }

        //** Begin filtering based on search value */

        if (series.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (event.toLowerCase().includes(lowerVal)) {
            return val;
        }

        for (const driver of allDrivers(allPlacements)) {
            if (driver.toLowerCase().includes(lowerVal)) {
                return val;
            }
        }

        for (const vehicle of categoryArray("vehicle", allPlacements)) {
            if (vehicle.toLowerCase().includes(lowerVal)) {
                return val;
            }
        }

        for (const team of categoryArray("team", allPlacements)) {
            if (team.toLowerCase().includes(lowerVal)) {
                return val;
            }
        }

        for (const number of categoryArray("number", allPlacements)) {
            if (number.includes(lowerVal)) {
                return val;
            }
        }
    });
    return filtered.sort(compareResultDates);
};

export default SearchAllResults;
