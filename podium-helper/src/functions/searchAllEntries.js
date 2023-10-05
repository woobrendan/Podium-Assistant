const searchAllEntries = (entries, searchVal) => {
    if (!searchVal) {
        return entries;
    }

    const lowerVal = searchVal.toLowerCase().trim();

    const checkField = (field) => field.toLowerCase().includes(lowerVal);

    return entries.filter((val) => {
        const {
            driver1,
            driver2,
            driver3,
            series,
            number,
            team,
            vehicle,
            classification,
        } = val;

        // loop through driver vals return only truthy values
        const driversArr = [driver1, driver2, driver3].filter(Boolean);

        return (
            //** if any condition returns true, the current iteration of entry will be return to the filter arr */
            // for each driver in driversArr check if the search val is in their name etc
            driversArr.some((driver) => checkField(driver.name)) ||
            driversArr.some((driver) => checkField(driver.rating)) ||
            driversArr.some((driver) => checkField(driver.nationality)) ||
            checkField(vehicle) ||
            checkField(team) ||
            checkField(series) ||
            checkField(number) ||
            checkField(classification)
        );
    });
};

export default searchAllEntries;
