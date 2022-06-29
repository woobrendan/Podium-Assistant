import {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';



function EventSearch(props) {
  const [eventName, setEventName] = useState('');


  
  const handleChange = (event) => {
    setEventName(event.target.value);
    props.getSeries(event.target.value)
  };

  const mappedEvents = seriesNameList.map((series, index) => <MenuItem key={index} value={series}>{series}</MenuItem>)

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
          name="series-name"
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
