import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name: "events",
    initialState: {
        eventsArr: [],
        currentYear: [],
    },
    reducers: {
        setEvents(state, action) {
            state.eventArr = action.payload;
        },
        setCurrentYear(state, action) {
            state.currentYear = action.payload;
        },
    },
});

export const eventActions = eventSlice.actions;
