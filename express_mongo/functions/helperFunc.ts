import { ResultInterface, HardChargerInterface } from "../models/result_models";
import { ConvertedApiEntry, DriverInfo } from "../models/models";

const resultBuilder = (result: ResultInterface) => {
    const { firstPlace, secondPlace, thirdPlace } = result;
    return {
        ...result,
        firstPlace: { ...firstPlace },
        ...(secondPlace ? { secondPlace: { ...secondPlace } } : {}),
        ...(thirdPlace ? { thirdPlace: { ...thirdPlace } } : {}),
    };
};

const hardChargeResult = (result: HardChargerInterface) => {
    const { entry } = result;
    return {
        ...result,
        entry: {
            ...entry,
            driver1: {
                ...entry.driver1,
            },
            ...(entry.driver2 ? { driver2: { ...entry.driver2 } } : {}),
            ...(entry.driver3 ? { driver3: { ...entry.driver3 } } : {}),
        },
    };
};

const compareObjects = (db_entry: any, entry2: any): boolean => {
    for (const key in entry2) {
        if (db_entry[key] !== entry2[key]) {
            return false;
        }
    }
    return true;
};

const entriesByEvent = (entries: ConvertedApiEntry[]) => {
    const events: { [key: string]: ConvertedApiEntry[] } = {
        "FULL SEASON ENTRY": [],
        "Sonoma Raceway": [],
        "Long Beach Grand Prix": [],
        "Sebring International Raceway": [],
        "Circuit of the Americas": [],
        "Virginia International Raceway": [],
        "Road America": [],
        "Barber Motorsports Park": [],
        "Indianapolis Motor Speedway": [],
    };

    for (const entry of entries) {
        events[entry.event].push(entry);
    }

    return events;
};

const getDriverName = (name: string, val: string): string => {
    const nameArr = name.split(" ");
    return val === "first" ? nameArr[0] : nameArr.slice(1).join(" ");
};

const getDriverInfo = (driver: DriverInfo, driverNum: Number) => {
    const driverString = `driver${driverNum}`;
    const driverInfo: { [key: string]: string } = {};
    const keys = ["firstName", "lastName", "category", "nationality"];
    const values = [
        getDriverName(driver.name, "first"),
        getDriverName(driver.name, "last"),
        driver.rating,
        driver.nationality,
    ];
    for (let i = 0; i < keys.length; i++) {
        const keyString = `${driverString}${keys[i]}`;
        driverInfo[keyString] = values[i];
    }

    return driverInfo;
};

export { resultBuilder, hardChargeResult, compareObjects, entriesByEvent, getDriverName, getDriverInfo };
