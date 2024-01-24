import axios from "axios";
import { eventActions } from "./eventSlice";

export const fetchEvents = () => {
    return async (dispatch) => {
        try {
            const events = await axios.get("http://localhost:2020/api/events");
            dispatch(eventActions.setEvents(events.data.events));
        } catch (err) {
            console.log("Error fetching Events: ", err);
        }
    };
};
