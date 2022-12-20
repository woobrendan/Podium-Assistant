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
  },
});

export const entryActions = entrySlice.actions;

export default entrySlice;
