import { createSlice } from "@reduxjs/toolkit";

const podiumSlice = createSlice({
  name: "podium",
  initialState: {
    podiumsArray: [],
  },
  reducers: {
    setResultHistory(state, action) {
      state.podiumsArray = action.payload;
    },
    addPodium(state, action) {},
    editPodium(state, action) {},
  },
});

export const podiumActions = podiumSlice.actions;

export default podiumSlice;
