import { FormControl, InputLabel, Select, TextField, Button, Typography, Card, Box, MenuItem } from '@mui/material';
import {useState} from 'react';
import useEntries from '../../functions/useEntries';


function FastLap(props) {

  const {vehicles} = useEntries();

  const [fastTime, setFastTime] = useState({
    driver: '',
    laptime: ''
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
    const seriesFilteredDrivers = entryArray
      .filter(entry => entry.series === props.series)
      for (const entry of seriesFilteredDrivers) {
        drivers.push({
          number: entry.number, 
          driver: entry.driver1.name,
          vehicle: entry.vehicle
        });
        if (entry.driver2) {
          drivers.push({
            number: entry.number, 
            driver: entry.driver2.name,
            vehicle: entry.vehicle
          });
        }
        if (entry.driver3) {
          drivers.push({
            number: entry.number, 
            driver: entry.driver3.name,
            vehicle: entry.vehicle
          });
        }
    }
    return drivers;
  }

  const mapSingleDrivers = singleDrivers(vehicles)
    .map((option, index) => 
    {return <MenuItem key={index} value={option.driver}>#{option.number} - {option.driver} </MenuItem>}
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
              name="laptime"
              value={fastTime.lapTime}
              onChange={handleChange}
            />
          </Box>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={() => props.onClick(fastTime)}
          >
            Submit
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default FastLap
