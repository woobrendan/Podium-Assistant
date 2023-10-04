const searchAllEntries = (entries, searchVal) => {
    const lowerVal = searchVal.toLowerCase().trim();

    if (!searchVal) {
        return entries;
    }

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
            driversArr.some((driver) => checkField(driver.name)) ||
            driversArr.some((driver) => checkField(driver.rating)) ||
            driversArr.some((driver) => checkField(driver.nationality)) ||
            checkField(vehicle) ||
            checkField(team) ||
            checkField(series) ||
            checkField(number) ||
            checkField(classification)
        );

        // if (driver1.name.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (vehicle.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (team.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (driver1.rating.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }

        // if (driver1.nationality.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (series.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (number.includes(searchVal)) {
        //     return val;
        // }
        // if (classification.includes(searchVal)) {
        //     return val;
        // }

        // if (driver2?.name.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (driver2?.rating.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
        // if (driver2?.nationality.toLowerCase().includes(lowerVal)) {
        //     return val;
        // }
    });
    // return filtered;
};

export default searchAllEntries;
