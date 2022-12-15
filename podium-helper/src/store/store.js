import { configureStore } from "@reduxjs/toolkit";
import entrySlice from "./entry_slice";
import podiumSlice from "./podium_slice";

const store = configureStore({
  reducer: {
    entry: entrySlice,
    podium: podiumSlice,
  },
});

export default store;
