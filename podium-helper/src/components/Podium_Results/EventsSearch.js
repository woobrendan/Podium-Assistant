import {useState, useEffect} from 'react';
import { FormControl, InputLabel, Select, Box, MenuItem } from '@mui/material';
import axios from 'axios';



function EventSearch(props) {
  const [eventName, setEventName] = useState('');
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/events')
    .then((res) => {
      setEventList(res.data)
    })
    .catch((err) => console.log("Error:", err));
  }, [])

  const handleChange = (event) => {
    setEventName(event.target.value);
    props.getValue(event.target.name, event.target.value)
  };

  const mappedEvents = eventList.map((event) => <MenuItem key={event.id} value={event.name}>{event.name}</MenuItem>)

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
