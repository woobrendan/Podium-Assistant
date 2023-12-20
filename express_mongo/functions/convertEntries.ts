import { ApiEntryInterface, FieldData } from "../models/models";

const labels = [
    "Car Series", // GT4, GTWCA
    "Championship / Class", // pro-am
    "Registered Car #",
    "team",
    "driver1",
    "driver1category",
    "driver1nationality",
    "driver2",
    "driver2category",
    "driver2nationality",
    "car",
    "Team Sponsors - Please seperate each Sponsor with a comma",
];

const convertEntry = (entry: ApiEntryInterface) => {
    const newEntry = {
        id: entry.id,
        event: entry.eventLabel,
        created: entry.dateCreated,
    };

    for (const label of labels) {
        for (const field of entry.fieldData) {
            if (
                label === "Championship / Class" &&
                field.path.includes("carType.")
            ) {
                //newEntry.class = conver
            }
        }
    }
};
