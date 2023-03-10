import { useState, useEffect } from "react";
import axios from "axios";
import { getToday } from "./helperFunc";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [currentEventName, setCurrentEventName] = useState("");

  useEffect(() => {
    getEventList();
  }, []);

  const getEventList = async () => {
    try {
      const eventList = await axios.get("http://localhost:2020/api/events");
      const year = Number(getToday().split("-")[2]);
      const currentYearEvents = eventList.data.filter(
        (event) => event.year === year,
      );
      setEvents(currentYearEvents);
      eventByDate(currentYearEvents);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const eventByDate = (events) => {
    const month = Number(getToday().split("-")[0]);
    if (month <= 2) setCurrentEventName(events[0].name);
    else if (month <= 4 && month > 2) setCurrentEventName(events[1].name);
    else if (month === 5) setCurrentEventName(events[2].name);
    else if (month === 6) setCurrentEventName(events[3].name);
    else if (month === 7) setCurrentEventName(events[4].name);
    else if (month === 8) setCurrentEventName(events[6].name);
    else if (month === 9) setCurrentEventName(events[7].name);
    else return setCurrentEventName(events[8].name);
  };

  return { events, currentEventName };
};

export default useEvents;
