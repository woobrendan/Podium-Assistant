import {useState} from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';

const placeOptions = [
  'Pro', 'Pro-Am','Am'
]

function Podium() {
  const [seriesName, setSeriesName] = useState('');

  const handleChange = (event) => {
    setSeriesName(event.target.value);
  };

  const mappedSeries = placeOptions.map((option, index) => 
    <MenuItem key={index} value={option}>{option}</MenuItem>
  )

  return (
    <div className="results-container">
      <div className="series-container">
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel htmlFor="exampleFormControlSelect2">
              Class
            </InputLabel>
            <Select
              className="form-control"
              name="series-name"
              value={seriesName}
              onChange={handleChange}
            >
              {mappedSeries}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="placement-container">

      </div>
      <div className="placement-container">

      </div>
      
    </div>
  )
}

export default Podium
