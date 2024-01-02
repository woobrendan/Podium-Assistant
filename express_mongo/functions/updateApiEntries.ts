import { fetchApiEntries } from "./fetchEntries";
import { ConvertedApiEntry } from "../models/models";
import ApiEntries from "../models/apiEntry_schema";

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
        const db_entry = await ApiEntries.findById(entryId);
        db_entry ? console.log("found") : console.log("not found");
    } catch (error) {
        console.log("error");
    }
};
