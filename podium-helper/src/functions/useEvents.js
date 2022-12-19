import { useState } from "react";
import axios from "axios";

const useEvents = async () => {
  const [events, setEvents] = useState([]);

  const getEventList = async () => {
    const eventList = await axios.get("http://localhost:2020/api/events");
    console.log("eventsList", eventList);
  };
  try {
    await getEventList();
  } catch (err) {
    console.log("Error:", err);
  }

  return { events };
};

export default useEvents;
