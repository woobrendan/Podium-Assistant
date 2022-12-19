import { useState, useEffect } from "react";
import axios from "axios";

const useEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEventList();
  }, []);

  const getEventList = async () => {
    try {
      const eventList = await axios.get("http://localhost:2020/api/events");
      setEvents(eventList.data);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return { events };
};

export default useEvents;
