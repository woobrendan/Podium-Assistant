import { createSlice } from "@reduxjs/toolkit";

const entrySlice = createSlice({
  name: "entries",
  initialState: {},
  reducers: {
    addEntry(state, action) {},
    removeEntry(state, action) {},
  },
});

export const entryActions = entrySlice;

export default entrySlice;
