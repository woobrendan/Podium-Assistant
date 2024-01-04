import { fetchApiEntries } from "./fetchEntries";
import { ConvertedApiEntry } from "../models/models";
import ApiEntries from "../models/apiEntry_schema";
import mongoose from "mongoose";
import { compareObjects } from "./helperFunc";

const updateApiEntries = async () => {
    const entries: ConvertedApiEntry[] = await fetchApiEntries();

    for (const entry of entries) {
        // check if id exists, if it does check if needs updating. if no id, create new entry
        const entryId = entry.tk_id;

        try {
            const db_entry = await ApiEntries.findOne({ tk_id: entryId });
            if (db_entry) {
                const db_test = db_entry.toObject();

                const dbNoIdEntry = {
                    ...db_test,
                    _id: undefined,
                };

                const entryNoId = {
                    _id: undefined,
                    ...entry,
                    __v: 0,
                };

                if (!compareObjects(dbNoIdEntry, entryNoId)) {
                    db_entry.set(entry);
                    db_entry
                        .save()
                        .then((saved) => {
                            console.log(`Successfully updated: ${saved.team} ${saved.number}`);
                        })
                        .catch((err) => {
                            console.log(`Failed to update: ${db_entry.team} ${db_entry.number}`);
                        });
                }
            } else {
                await addEntry(entry);
            }
        } catch (error) {
            console.log("Error updating by ID: ", error);
        }
    }
};

export default updateApiEntries;

const addEntry = async (entry: ConvertedApiEntry) => {
    const newEntry = new ApiEntries({
        _id: new mongoose.Types.ObjectId(),
        ...entry,
    });

    try {
        const savedEntry = await newEntry.save();
        if (savedEntry) console.log(`new entry added: ${entry.team} - ${entry.number}`);
    } catch (error) {
        console.log(`Error adding: ${entry.team} - ${entry.number}`);
        console.log("Error: ", error);
    }
};
