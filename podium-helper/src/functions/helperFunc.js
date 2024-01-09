const printPage = () => {
    window.print();
};

const compareDate = (a, b) => {
    if (a.date < b.date) {
        return 1;
    }
    if (a.date > b.date) {
        return -1;
    }
    return 0;
};

const compareCarNumber = (a, b) => {
    if (Number(a.number) < Number(b.number)) {
        return -1;
    }
    if (Number(a.number) > Number(b.number)) {
        return 1;
    }
    return 0;
};

const shortenName = (seriesName) => {
    const obj = {
        "GT World Challenge America": "GTWCA",
        "GT America": "GTA",
        "TC America": "TCAM",
        "Pirelli GT4 America": "PGT4A",
        "Toyota GR Cup": "GR Cup",
        "Intercontinental GT Challenge": "IGTC",
    };
    return obj[seriesName];
};

//used for results in resulttablebody
const getPlaceString = (num) => {
    const place = {
        0: "1st",
        1: "2nd",
        2: "3rd",
    };

    return place[num];
};

const convertEntryFormat = (apiEntry) => {
    const { _id, team, number, series, driver1firstName, driver1lastName, driver2firstName, car, created } = apiEntry;

    const oldEntryFormat = {
        _id,
        team,
        number,
        series,
        driver1: {
            name: `${driver1firstName} ${driver1lastName}`,
            nationality: apiEntry.driver1nationality,
            rating: "",
        },
        ...(driver2firstName
            ? {
                  driver2: {
                      name: `${driver2firstName} ${apiEntry.driver2lastName}`,
                      nationality: apiEntry.driver2nationality,
                      rating: "",
                  },
              }
            : {}),
        vehicle: car,
        classification: apiEntry.class,
        year: created.split("-")[0],
        carImage: "",
    };

    return oldEntryFormat;
};

const gtwca = "GT World Challenge America";
const tcam = "TC America";
const gtam = "GT America";
const gt4a = "Pirelli GT4 America";
const igtc = "Intercontinental GT Challenge";
const grCup = "Toyota GR Cup";

export {
    printPage,
    compareDate,
    compareCarNumber,
    gtwca,
    tcam,
    gtam,
    gt4a,
    igtc,
    grCup,
    shortenName,
    getPlaceString,
    convertEntryFormat,
};
