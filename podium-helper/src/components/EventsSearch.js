import { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, Box, MenuItem } from "@mui/material";
import useEvents from "../functions/useEvents";

function EventSearch({ component, getValue }) {
  const { events, currentEventName } = useEvents();
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    component === "podium" ? setEventName(currentEventName) : setEventName("");
  }, [currentEventName]);

  const handleChange = (event) => {
    setEventName(event.target.value);
    getValue(event.target.name, event.target.value);
  };

  const mappedEvents = events.map((event, index) => (
    <MenuItem key={index} value={event.name}>
      {event.name}
    </MenuItem>
  ));

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel htmlFor="Series">Events</InputLabel>
        <Select
          className="form-control"
          name="event"
          label="Event"
          value={eventName}
          onChange={handleChange}
        >
          {mappedEvents}
        </Select>
      </FormControl>
    </Box>
  );
}

export default EventSearch;
