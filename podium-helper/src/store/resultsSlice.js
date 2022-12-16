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
    addresults(state, action) {
      const result = action.payload;
      state.resultsArray.push({
        ...result,
      });
    },
    editresults(state, action) {},
  },
});

export const resultsActions = resultsSlice.actions;

export default resultsSlice;
