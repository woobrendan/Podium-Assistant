import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import useEvents from "../functions/useEvents";

const EventSearch = ({ component, getValue }) => {
  const { events, currentEventName } = useEvents();
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    component === "podium" ? setEventName(currentEventName) : setEventName("");
  }, [currentEventName]);

  const handleChange = (event) => {
    setEventName(event.target.value);
    getValue(event);
  };

  return (
    <Box data-testid="event_dropdown">
      <FormControl>
        <InputLabel>Events</InputLabel>
        <Select
          className="form-control"
          name="event"
          label="Events"
          value={eventName}
          onChange={(e) => handleChange(e)}
        >
          {events.map((event, index) => (
            <MenuItem key={index} value={event.name} data-testid={event.name}>
              {event.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default EventSearch;
