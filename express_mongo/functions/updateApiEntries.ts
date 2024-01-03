import { fetchApiEntries } from "./fetchEntries";
import { ConvertedApiEntry } from "../models/models";
//import isEqual from "lodash-es/isEqual";
const isEqual = require("lodash/isEqual");
import ApiEntries from "../models/apiEntry_schema";
import mongoose from "mongoose";

const updateApiEntries = async () => {
    const entries: ConvertedApiEntry[] = await fetchApiEntries();

    for (const entry of entries) {
        updateById(entry);
    }
};

export default updateApiEntries;

// check if id exists, if it does check if needs updating. if no id, create new entry
const updateById = async (entry: ConvertedApiEntry) => {
    const entryId = entry.tk_id;

    try {
        const db_entry = await ApiEntries.findOne({ tk_id: entryId });
        if (db_entry) {
            if (!isEqual(db_entry, entry)) {
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
};

const addEntry = async (entry: ConvertedApiEntry) => {
    const newEntry = new ApiEntries({
        _id: new mongoose.Types.ObjectId(),
        ...entry,
    });

    try {
        const savedEntry = await newEntry.save();
        if (savedEntry) console.log("new entry added:", entry.team);
    } catch (error) {
        console.log("Error adding new entry: ", entry.team);
        console.log("Error: ", error);
    }
};
