import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select, TextField } from '@mui/material';
import {useState} from 'react';
import { driverInfo } from '../drivers';
// {
//   team: "K-PAX",
//   driver1: {
//     name: 'Michele Beretta',
//     nationality: 'Italy',
//     rating: 'Silver'
//     },
//   driver2: {
//     name: 'Andrea Calderlli',
//     nationality: 'Italy',
//     rating: 'Platinum'
//     },
//   car: "Lamborghini Huracan GT3",
//   classification: "Pro",
//   number: "6",
//   carImage: kpax6
// },



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

  const singleDrivers = (entryArray) => {
    const drivers = [];
    for (const entry of entryArray) {
      drivers.push(entry.driver1.name);
      drivers.push(entry.driver2.name);
    }
    return drivers;
  }

  const mapSingleDrivers = singleDrivers(driverInfo)
    .map((option, index) => 
      <MenuItem key={index} value={option}>{option}</MenuItem>
    )

  return (
    <div className="results-container">
      <Card sx={{ minWidth: 450 }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl sx={{ minWidth: 150 }}>
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
  )
}

export default FastLap
