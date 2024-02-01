import { configureStore } from "@reduxjs/toolkit";
import entrySlice from "./entries/entry_slice";
import resultsSlice from "./results/resultsSlice";
import eventSlice from "./events/eventSlice";

const store = configureStore({
    reducer: {
        entry: entrySlice.reducer,
        results: resultsSlice.reducer,
        events: eventSlice.reducer,
    },
});

export default store;
