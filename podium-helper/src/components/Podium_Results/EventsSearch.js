import { useState } from 'react';
import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import useEntries from '../../functions/useEntries';



function EventSearch(props) {
  const [eventName, setEventName] = useState('');
  const { events } = useEntries();
  
  const handleChange = (event) => {
    setEventName(event.target.value);
    props.getValue(event.target.name, event.target.value)
  };
  
  const eventByDate = (date) => {
    const month = Number(date.split('-')[0])
    if (month <= 4 ) return events[0].name;
    else if (month === 5) return events[1].name;
    else if (month === 6) return events[2].name;
    else if (month === 7) return events[3].name;
    else if (month === 8) return events[4].name;
    else if (month === 9) return events[5].name;
    else return events[6].name;
  }

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
