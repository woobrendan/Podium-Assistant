import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const seriesName = ['GT World Challenge America', 'GT America', 'Pirelli GT4 America', 'TC America']

function Series() {
  const [seriesName, setSeriesName] = useState('');
  const handleChange = (event) => {
    setSeriesName(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-select-series"
          select
          label="Select"
          value={seriesName}
          onChange={handleChange}
          helperText="Please select Series"
        >
          {/* {.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
        </TextField>
      </div>
    </Box>
  )
}

export default Series
