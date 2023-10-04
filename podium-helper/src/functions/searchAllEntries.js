const searchAllEntries = (entries, searchVal) => {
    const lowerVal = searchVal.toLowerCase().trim();

    if (!searchVal) {
        return entries;
    }

    const filtered = entries.filter((val) => {
        const {
            driver1,
            driver2,
            series,
            number,
            team,
            vehicle,
            classification,
        } = val;

        if (driver1.name.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (vehicle.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (team.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (driver1.rating.toLowerCase().includes(lowerVal)) {
            return val;
        }

        if (driver1.nationality.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (series.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (number.includes(searchVal)) {
            return val;
        }
        if (classification.includes(searchVal)) {
            return val;
        }

        if (driver2?.name.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (driver2?.rating.toLowerCase().includes(lowerVal)) {
            return val;
        }
        if (driver2?.nationality.toLowerCase().includes(lowerVal)) {
            return val;
        }
    });
    return filtered;
};

export default searchAllEntries;
