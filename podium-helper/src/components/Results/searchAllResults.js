import { compareResultDates } from "../../functions/sortFuncs";

// Get all drivers from one result (all classes, one series, one race)
const allDrivers = (placementArr) => {
    const driverArray = [];
    const filtered = placementArr.filter(Boolean);
    for (const result of placementArr) {
        if (result) driverArray.push(result.driver1);
        if (result && result.driver2) driverArray.push(result.driver2);
        if (result && result.driver3) driverArray.push(result.driver3);
    }
    return driverArray;
};

const SearchAllResults = (list, searchValue) => {
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

        // filter through the entry object, keying into the obj using the category variable
        const categoryArray = (category) => {
            const newArray = [];
            for (const placeResult of allPlacements) {
                if (placeResult) newArray.push(placeResult[category]);
            }
            return newArray;
        };

        //** Begin filtering based on search value */

        if (!searchValue) {
            return val;
        }
        if (series.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
        }
        if (event.toLowerCase().includes(searchValue.toLowerCase())) {
            return val;
        }

        for (const driver of allDrivers(allPlacements)) {
            if (driver.toLowerCase().includes(searchValue.toLowerCase())) {
                return val;
            }
        }

        for (const vehicle of categoryArray("vehicle")) {
            if (vehicle.toLowerCase().includes(searchValue.toLowerCase())) {
                return val;
            }
        }

        for (const team of categoryArray("team")) {
            if (team.toLowerCase().includes(searchValue.toLowerCase())) {
                return val;
            }
        }

        for (const number of categoryArray("number")) {
            if (number.includes(searchValue)) {
                return val;
            }
        }
    });
    return filtered.sort(compareResultDates);
};

export default SearchAllResults;
