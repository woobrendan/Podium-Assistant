import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import {useState} from 'react';
import { driverInfo } from '../drivers';
import Typography from '@mui/material/Typography';

function FastLap() {

  const [fastTime, setFastTime] = useState({
    driver: '',
    lapTime: ''
  });

  const handleChange = (event) => {
    setFastTime((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  //take in entry object and get every single driver into list
  const singleDrivers = (entryArray) => {
    const drivers = [];
    for (const entry of entryArray) {
      drivers.push({number: entry.number, driver: entry.driver1.name});
      drivers.push({number: entry.number, driver: entry.driver2.name});
    }
    return drivers;
  }

  const mapSingleDrivers = singleDrivers(driverInfo)
    .map((option, index) => 
    <MenuItem key={index} value={option.driver}>#{option.number} - {option.driver} </MenuItem>
    )

  return (
    <div className="results-container">
      <div className="fast-lap-container">
        <Card sx={{ minWidth: 450 }}>
          <Typography variant="h5" gutterBottom component="div">
            CrowdStrike Fast Lap
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ minWidth: 250 }}>
              <InputLabel htmlFor="exampleFormControlSelect2">
                Driver
              </InputLabel>
              <Select
                className="form-control"
                name="driver"
                label='Driver'
                value={fastTime.driver}
                onChange={handleChange}
              >
                {mapSingleDrivers}
              </Select>
            </FormControl>
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined"
              label="Fast Lap"
              name="lapTime"
              value={fastTime.lapTime}
              onChange={handleChange}
            />
          </Box>
        </Card>
      </div>
    </div>
  )
}

export default FastLap
