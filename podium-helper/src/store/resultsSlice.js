import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    resultsArray: [],
  },
  reducers: {
    setResultHistory(state, action) {
      state.resultsArray = action.payload;
    },
    addresults(state, action) {},
    editresults(state, action) {},
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
