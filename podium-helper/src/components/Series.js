import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';

const seriesNameList = ['GT World Challenge America', 'GT America', 'Pirelli GT4 America', 'TC America']

function Series() {
  const [seriesName, setSeriesName] = useState('');
  const handleChange = (event) => {
    setSeriesName(event.target.value);
  };

  const mappedSeries = seriesNameList.map((series, index) => <MenuItem key={index} value={series}>{series}</MenuItem>)

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
        <InputLabel htmlFor="exampleFormControlSelect2">
          Series
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
  )
}

export default Series
