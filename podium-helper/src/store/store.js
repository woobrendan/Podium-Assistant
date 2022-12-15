import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    entry: "",
  },
});

export default store;
