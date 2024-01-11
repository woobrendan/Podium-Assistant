import { useState, useEffect } from "react";
import axios from "axios";
import { compareStartDate } from "./dateFuncs";

const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [currentEventName, setCurrentEventName] = useState("");

    useEffect(() => {
        const getEventList = async () => {
            try {
                const date = new Date();
                const year = date.getFullYear();
                const eventList = await axios.get(`http://localhost:2020/api/events/${year}`);

                // return list of events for the current year
                const currentYearEvents = eventList.data.events;
                const sortedEvents = currentYearEvents.sort(compareStartDate);
                setEvents(sortedEvents);
                setCurrentEventName(getCurrentEvent(sortedEvents));
            } catch (err) {
                console.log("Error:", err);
            }
        };
        getEventList();
    }, []);

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

    return { events, currentEventName };
};

export default useEvents;
