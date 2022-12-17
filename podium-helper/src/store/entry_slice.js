import { createSlice } from "@reduxjs/toolkit";

const entrySlice = createSlice({
  name: "entries",
  initialState: { entries: [] },
  reducers: {
    setEntries(state, action) {
      state.entries = action.payload;
    },
    addEntry(state, action) {},
    removeEntry(state, action) {},
  },
});

export const entryActions = entrySlice;

export default entrySlice;
