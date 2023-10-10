import { useState, useEffect } from "react";
import axios from "axios";
// import { compareByDate } from "./sortFuncs";
import { compareStartDate } from "./dateFuncs";

const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [currentEventName, setCurrentEventName] = useState("");

    useEffect(() => {
        const getEventList = async () => {
            try {
                const date = new Date();
                const year = date.getFullYear();
                const eventList = await axios.get(
                    `http://localhost:2020/api/events/${year}`,
                );

                // return list of events for the current year
                const currentYearEvents = eventList.data.events;
                const sortedEvents = currentYearEvents.sort(compareStartDate);
                setEvents(sortedEvents);
                eventByDate(sortedEvents);
            } catch (err) {
                console.log("Error:", err);
            }
        };
        getEventList();
    }, []);

    const eventByDate = (events) => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDate();

        if (month <= 3 && day < 6) setCurrentEventName(events[0].name);
        else if (month <= 4 && day < 3) setCurrentEventName(events[1].name);
        else if (month === 4) setCurrentEventName(events[2].name);
        else if (month === 5) setCurrentEventName(events[3].name);
        else if (month === 6) setCurrentEventName(events[4].name);
        else if (month === 8 && day < 7) setCurrentEventName(events[5].name);
        else if (month === 8) setCurrentEventName(events[6].name);
        else if (month === 9) setCurrentEventName(events[7].name);
        else setCurrentEventName(events[8].name);
    };

    const getCurrentEvent = (events) => {
        const today = new Date();

        for (let i = 0; i < events.length; i++) {
            const eventStartDate = new Date(events[i].startDate);

            // check if today is past start date
            if (today >= eventStartDate) {
                // check if today is not past start of next event
                if (i < events.length - 1) {
                    const nextEvent = new Date(events[i + 1].startDate);

                    if (today < nextEvent) {
                        return events[i].name;
                    }
                }
            } else {
                // returns last event
                return events[i].name;
            }
        }
    };

    return { events, currentEventName };
};

export default useEvents;
