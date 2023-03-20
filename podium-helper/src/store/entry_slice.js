import { createSlice } from "@reduxjs/toolkit";

const entrySlice = createSlice({
  name: "entries",
  initialState: { entriesArray: [] },
  reducers: {
    setEntries(state, action) {
      state.entriesArray = action.payload;
    },
    addEntry(state, action) {},
    removeEntry(state, action) {},
    updateEntry(state, action) {
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
