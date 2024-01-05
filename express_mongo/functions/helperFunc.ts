import { ResultInterface, HardChargerInterface } from "../models/result_models";
import { ConvertedApiEntry } from "../models/models";

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
    const events: { [key: string]: ConvertedApiEntry[] } = {};

    for (const entry of entries) {
        if (events[entry.event]) {
            events[entry.event].push(entry);
        } else {
            events[entry.event] = [entry];
        }
    }

    return events;
};

export { resultBuilder, hardChargeResult, compareObjects, entriesByEvent };
