import {useState} from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, InputLabel, Select } from '@mui/material';
import { driverInfo } from '../drivers';
import '../Styling/winnerTop3.scss';

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

const placeOptions = [
  'Pro', 'Pro-Am','Am'
]

function Podium() {
  const [seriesName, setSeriesName] = useState('');
  const [winners, setWinners] = useState({
    first: '',
    second: '',
    third: ''
  });

  const handleChange = (event) => {
    setSeriesName(event.target.value);
  };

  const handleWinners = event => {
    setWinners((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const mappedSeries = placeOptions.map((option, index) => 
    <MenuItem key={index} value={option}>{option}</MenuItem>
  )

  const mappedDrivers = driverInfo
    .filter(entry => entry.classification === seriesName)
    .map(entry => (
        <MenuItem key={entry.number} value={entry}>#{entry.number} - {entry.driver1.name} & {entry.driver2.name}</MenuItem>
      ));

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
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel htmlFor="exampleFormControlSelect2">
              Class
            </InputLabel>
            <Select
              className="form-control"
              name="series-name"
              label='Series'
              value={seriesName}
              onChange={handleChange}
            >
              {mappedSeries}
            </Select>
          </FormControl>
        </Box>
      </div>
      <div className="placement-container">
        <div className="finishing-spot">
          <h3>1<sup>st</sup></h3>
          <h3>2<sup>nd</sup></h3>
          <h3>3<sup>rd</sup></h3>
        </div> 
        <div className="finishing-drivers">
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
                First Place
              </InputLabel>
              <Select
                className="form-control"
                name="first"
                label="first place"
                value={winners.first}
                onChange={handleWinners}
              >
                {mappedDrivers}
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
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel htmlFor="exampleFormControlSelect2">
              Second Place
            </InputLabel>
            <Select
              className="form-control"
              name="second"
              label="second place"
              value={winners.second}
              onChange={handleWinners}
            >
              {mappedDrivers}
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
          <FormControl sx={{ minWidth: 300 }}>
            <InputLabel htmlFor="exampleFormControlSelect2">
              Third Place
            </InputLabel>
            <Select
              className="form-control"
              name="third"
              label="third place"
              value={winners.third}
              onChange={handleWinners}
            >
              {mappedDrivers}
            </Select>
          </FormControl>
        </Box>
        </div>
      </div>
      <div className="placement-container">

      </div>
      
    </div>
  )
}

export default Podium
