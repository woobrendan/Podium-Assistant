import { EntryModel } from "../models/entry_schema";

// take in vehicle string and return the manuf
const getManufName = (vehicle: string) => {};

const convertOldtoNewEntry = (entry: EntryModel) => {
    const { _id, team, number, event, series, vehicle, classification, year, created } = entry;
    // convert from old to new, then try to update again
    const newFormat = {
        _id,
        event,
        created,
        series,
        class: classification,
        number,
        team,
        car: vehicle,
    };

    //pass update function to update controller
};
