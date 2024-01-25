import { useState, useEffect } from "react";
//import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvents } from "../store/events/eventActions";

const useEvents = () => {
    const [currentEventName, setCurrentEventName] = useState("");
    const currentYearEvents = useSelector((state) => state.events.currentYear);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEvents());
    }, [dispatch]);

    useEffect(() => {
        setCurrentEventName(getCurrentEvent(currentYearEvents));
    }, [currentYearEvents]);

    const getCurrentEvent = (events) => {
        const today = new Date();
        let currentEvent = null;

        for (let i = 0; i < events.length; i++) {
            const eventStartDate = new Date(events[i].startDate);

            // check if today is before or equal to start date
            if (today <= eventStartDate) {
                // check if today is not past start of next event, and isnt the last event
                if (i < events.length - 1) {
                    const nextEvent = new Date(events[i + 1].startDate);

                    if (today < nextEvent) {
                        currentEvent = events[i].name;
                        break;
                    }
                } else {
                    // returns last event
                    currentEvent = events[i].name;
                }
            }
        }
        return currentEvent;
    };

    return { currentEventName };
};

export default useEvents;
