import { useState } from 'react';
import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import useEntries from '../../functions/useEntries';



function EventSearch(props) {
  const { events, currentEventName } = useEntries();
  const [eventName, setEventName] = useState(currentEventName);
  
  const handleChange = (event) => {
    setEventName(event.target.value);
    props.getValue(event.target.name, event.target.value)
  };

  const mappedEvents = events.map((event) => <MenuItem key={event.id} value={event.name}>{event.name}</MenuItem>)

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl sx={{ minWidth: 300 }}>
        <InputLabel htmlFor="Series">
          Events
        </InputLabel>
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
  )
}

export default EventSearch
