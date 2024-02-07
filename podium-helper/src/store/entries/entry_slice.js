import { createSlice } from "@reduxjs/toolkit";
import { deleteEntry, updateEntry } from "./entryActions";
import { masters } from "./master_class";

const entrySlice = createSlice({
    name: "entries",
    initialState: {
        entriesArray: [...masters],
        eventEntries: [...masters],
    },
    reducers: {
        setEntries(state, action) {
            const entries = [...state.entriesArray, ...action.payload];
            const uniqueIds = new Set();
            const unique = entries.filter((entry) => {
                if (!uniqueIds.has(entry._id)) {
                    uniqueIds.add(entry._id);
                    return true;
                }
                return false;
            });
            state.entriesArray = unique;
        },

        setEventEntries(state, action) {
            state.eventEntries = [...state.entriesArray, ...action.payload];
        },

        addEntry(state, action) {
            const existingEntry = state.entriesArray.find((entry) => entry._id === action.payload._id);
            if (!existingEntry) {
                state.entriesArray = [...state.entriesArray, action.payload];
            }
        },

        removeEntry(state, action) {
            const entries = [...state.entriesArray];
            const adjusted = entries.filter((entry) => entry._id !== action.payload._id);
            state.entriesArray = adjusted;
            deleteEntry(action.payload);
        },

        updateEntry(state, action) {
            updateEntry(action.payload);
            const entries = [...state.entriesArray];
            const newEntries = entries.map((entry) =>
                entry._id === action.payload._id ? { ...action.payload } : entry,
            );

            state.entriesArray = [...newEntries];
        },
    },
});

export const entryActions = entrySlice.actions;

export default entrySlice;
